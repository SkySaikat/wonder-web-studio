"""Audit rendered pages and local discovery endpoints; does not submit URLs externally."""
import concurrent.futures,json,os,re,struct,urllib.request,urllib.error,xml.etree.ElementTree as ET
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse,parse_qs
BASE=os.environ.get('AUDIT_BASE_URL','http://127.0.0.1:3000').rstrip('/')
EXPECT_INDEXABLE=os.environ.get('AUDIT_INDEXABLE','false')=='true'
NS={'s':'http://www.sitemaps.org/schemas/sitemap/0.9','image':'http://www.google.com/schemas/sitemap-image/1.1'}
VOCAB_PATH=os.environ.get('SCHEMA_VOCABULARY')
VOCAB={n['@id']:n for n in json.loads(Path(VOCAB_PATH).read_text())['@graph']} if VOCAB_PATH else {}
def ids(value):
 return {n['@id'] for n in (value if isinstance(value,list) else [value]) if isinstance(n,dict) and '@id' in n}
def ancestors(name):
 found={name};pending=[name]
 while pending:
  for parent in ids(VOCAB.get(pending.pop(),{}).get('rdfs:subClassOf',[])):
   if parent not in found:found.add(parent);pending.append(parent)
 return found
def schema_issues(nodes):
 errors=[]
 for node in nodes:
  t=node.get('@type')
  if not isinstance(t,str):continue
  name='schema:'+t
  if name not in VOCAB:errors.append('Unknown Schema.org type '+t);continue
  lineage=ancestors(name)
  for prop in node:
   if prop.startswith('@'):continue
   definition=VOCAB.get('schema:'+prop)
   if not definition:errors.append('Unknown Schema.org property '+prop);continue
   domains=ids(definition.get('schema:domainIncludes',[]))
   if domains and not lineage.intersection(domains):errors.append('Property '+prop+' not applicable to '+t)
 return errors
def fetch(path):
 with urllib.request.urlopen(BASE+path,timeout=45) as r:return r.status,{k.lower():v for k,v in r.headers.items()},r.read()
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.meta={};self.canon=[];self.markdown=[];self.images=[];self.scripts=[];self.links=[];self.ids=[];self.h1=0;self.title='';self.in_title=False;self.svg=0;self.ld=False;self.text=[];self.in_script=False
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='svg':self.svg+=1
  if t=='h1':self.h1+=1
  if t=='title' and not self.svg:self.in_title=True
  if a.get('id'):self.ids.append(a['id'])
  if t=='meta':self.meta.setdefault(a.get('property') or a.get('name'),[]).append(a.get('content',''))
  if t=='link' and a.get('rel')=='alternate' and a.get('type')=='text/markdown':self.markdown.append(a.get('href'))
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if t=='img':self.images.append(a)
  if t=='a':self.links.append(a.get('href',''))
  if t=='script':
   self.in_script=True
   if a.get('type')=='application/ld+json':self.ld=True;self.scripts.append('')
 def handle_endtag(self,t):
  if t=='svg':self.svg-=1
  if t=='title':self.in_title=False
  if t=='script':self.ld=False;self.in_script=False
 def handle_data(self,d):
  if self.in_title:self.title+=d
  if self.ld:self.scripts[-1]+=d
  if not self.in_script:self.text.append(d)
def walk(value):
 if isinstance(value,dict):
  yield value
  for v in value.values():yield from walk(v)
 elif isinstance(value,list):
  for v in value:yield from walk(v)
def should_block_markdown(headers):
 return EXPECT_INDEXABLE and 'noindex' in headers.get('x-robots-tag','').lower()
def audit(url):
 path=urlparse(url).path;issues=[]
 try:
  status,headers,html=fetch(path);p=Page();p.feed(html.decode());nodes=[]
  for raw in p.scripts:nodes+=list(walk(json.loads(raw)))
  if VOCAB:issues+=schema_issues(nodes)
  types=Counter(n.get('@type') for n in nodes if isinstance(n.get('@type'),str))
  graph_ids={n['@id'] for n in nodes if '@id' in n and '@type' in n}
  for n in nodes:
   if set(n)=={'@id'} and n['@id'] not in graph_ids:issues.append('Unresolved schema reference: '+n['@id'])
  page_nodes=[n for n in nodes if n.get('@id')==url+'#webpage']
  if len([n for n in page_nodes if '@type' in n])!=1:issues.append('Missing/duplicate page schema')
  if not types['Organization'] or not types['WebSite']:issues.append('Missing organization/site graph')
  if path!='/' and types['BreadcrumbList']!=1:issues.append('Missing/duplicate breadcrumb schema')
  if path.startswith(('/services/','/locations/','/industries/')) and len(path.split('/'))>3 and not types['Service']:issues.append('Missing Service schema')
  if path.startswith('/resources/') and path!='/resources/' and types['BlogPosting']!=1:issues.append('Missing article schema')
  if path.startswith('/work/') and path!='/work/' and types['CreativeWork']!=1:issues.append('Missing project schema')
  text=' '.join(' '.join(p.text).split())
  for n in nodes:
   if n.get('@type')=='Question' and (' '.join(n['name'].split()) not in text or ' '.join(n['acceptedAnswer']['text'].split()) not in text):issues.append('FAQ schema does not match rendered text')
   if n.get('@type')=='ImageObject' and not all(n.get(k) for k in ['contentUrl','name','description','encodingFormat','width','height']):issues.append('Incomplete ImageObject')
  if p.h1!=1:issues.append('Incorrect H1 count')
  if not p.title or len(p.title)>85:issues.append('Missing/overlong title')
  for key in ['description','og:title','og:description','og:url','og:site_name','og:image','og:image:alt','og:image:width','og:image:height','og:image:type','twitter:title','twitter:description','twitter:image','twitter:image:alt','twitter:card']:
   if len(p.meta.get(key,[]))!=1 or not p.meta[key][0]:issues.append('Missing/duplicate '+key)
  if p.canon!=[url]:issues.append('Canonical mismatch')
  if path!='/payments/':
   md_path='/content/'+('home' if path=='/' else path.strip('/'))+'.md'
   md_url=urlparse(url).scheme+'://'+urlparse(url).netloc+md_path
   if p.markdown!=[md_url]:issues.append('Missing or incorrect Markdown alternate')
   _,md_headers,md_body=fetch(md_path)
   if 'text/markdown' not in md_headers.get('content-type',''):issues.append('Invalid Markdown content type')
   if '<'+url+'>; rel="canonical"' not in md_headers.get('link',''):issues.append('Missing Markdown canonical header')
   if url not in md_body.decode():issues.append('Missing Markdown source URL')
   if should_block_markdown(md_headers):issues.append('Production Markdown blocked by HTTP noindex header')
  elif p.markdown:issues.append('Private payment page advertises Markdown')
  if p.meta.get('og:url')!=[url]:issues.append('Open Graph URL mismatch')
  if any(v>1 for v in Counter(p.ids).values()):issues.append('Duplicate HTML id')
  for img in p.images:
   if 'alt' not in img:issues.append('Image missing alt')
   if img.get('alt') and not img.get('title'):issues.append('Meaningful image missing title')
   src=img.get('src','');parsed=urlparse(src);asset=parse_qs(parsed.query).get('url',[parsed.path])[0] if parsed.path.rstrip('/')=='/_next/image' else parsed.path
   if asset.startswith('/') and not Path('public'+asset).is_file():issues.append('Missing image asset '+asset)
  for key in ['og:image','twitter:image']:
   if not p.meta.get(key,[''])[0].startswith(urlparse(url).scheme+'://'+urlparse(url).netloc+'/seo/'):issues.append('Missing page-specific '+key)
  robots=','.join(p.meta.get('robots',[]))
  should_index=EXPECT_INDEXABLE and path!='/payments/'
  if ('noindex' not in robots)!=should_index:issues.append('Incorrect robots policy')
  if not EXPECT_INDEXABLE and 'noindex' not in headers.get('x-robots-tag',''):issues.append('Missing preview noindex header')
  if should_index and 'noindex' in headers.get('x-robots-tag','').lower():issues.append('Production page blocked by HTTP noindex header')
  return {'path':path,'title':p.title,'description':p.meta.get('description',[''])[0],'image':p.meta.get('og:image',[''])[0],'schema_types':sorted(types),'issues':issues,'links':p.links}
 except Exception as e:return {'path':path,'issues':[str(e)],'links':[]}
_,_,data=fetch('/sitemap.xml');root=ET.fromstring(data);urls=[u.find('s:loc',NS).text for u in root.findall('s:url',NS)]
if len(urls)!=len(set(urls)):raise RuntimeError('Duplicate sitemap URLs')
origin=urlparse(urls[0]).scheme+'://'+urlparse(urls[0]).netloc
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:rows=list(pool.map(audit,urls+[origin+'/payments/']))
paths={r['path'] for r in rows};extra=[]
unknown=sorted({urlparse(link).path for row in rows for link in row['links'] if link.startswith('/') and urlparse(link).path not in paths})
if unknown:extra.append('Unmapped links: '+str(unknown))
for key in ['title','description','image']:
 if len({r.get(key) for r in rows})!=len(rows):extra.append('Duplicate '+key)
image_urls={e.text for e in root.findall('.//image:loc',NS)}
for url in image_urls:
 asset=Path('public'+urlparse(url).path)
 if not asset.is_file():extra.append('Missing sitemap image '+url)
# Fetch every share image, check MIME and PNG dimensions, not just existence on disk.
def image_check(row):
 try:
  _,headers,png=fetch(urlparse(row['image']).path)
  if 'image/png' not in headers.get('content-type','') or png[:8]!=b'\x89PNG\r\n\x1a\n' or struct.unpack('>II',png[16:24])!=(1200,630):return row['path']
 except Exception:return row['path']
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:bad_images=[r for r in pool.map(image_check,rows) if r]
if bad_images:extra.append('Invalid share images: '+str(bad_images))
_,_,xml=fetch('/llms.xml');llm_urls=[u.find('s:loc',NS).text for u in ET.fromstring(xml).findall('s:url',NS)]
if llm_urls!=urls:extra.append('LLMs XML differs from sitemap')
for path in ['/llms.txt','/llms-full.txt']:
 _,headers,body=fetch(path);body=body.decode()
 if not body.startswith('# Wonderweb Studio') or 'text/plain' not in headers.get('content-type',''):extra.append('Invalid '+path)
 if any(url not in body for url in urls):extra.append('Missing public URL in '+path)
 if origin+'/payments/' in body:extra.append('Private client route in '+path)
_,_,robots=fetch('/robots.txt');robots=robots.decode()
if ('Disallow: /\n' in robots)==EXPECT_INDEXABLE:extra.append('Incorrect robots.txt launch mode')
try:fetch('/this-page-does-not-exist/')
except urllib.error.HTTPError as e:
 if e.code!=404:extra.append('Unknown URL did not return 404')
else:extra.append('Unknown URL returned success')
report={'schema_vocabulary_checked':bool(VOCAB),'markdown_pages_checked':len(urls),'pages_checked':len(rows),'sitemap_pages':len(urls),'sitemap_images':len(image_urls),'unique_titles':len({r.get('title') for r in rows}),'unique_descriptions':len({r.get('description') for r in rows}),'unique_share_images':len({r.get('image') for r in rows}),'indexable_mode':EXPECT_INDEXABLE,'issues':[{'path':r['path'],'issues':r['issues']} for r in rows if r['issues']],'discovery_issues':extra,'pages':[{k:v for k,v in r.items() if k not in ['links']} for r in rows]}
Path('seo-audit-results.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k!='pages'},indent=2))
raise SystemExit(bool(report['issues'] or extra))
