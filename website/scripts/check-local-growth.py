"""Check the new pages on localhost without sending forms or external indexing requests."""
import csv,json,re,urllib.request,xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse,parse_qs
BASE='http://127.0.0.1:3010'
DOMAIN='https://www.wonderwebstudio.com'
OUT=Path('../seo-planning/2026-11-25')

class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.h1=0;self.meta={};self.links=[];self.alternates=[];self.canonical=[];self.images=[];self.ld=[];self.in_ld=False;self.in_script=False;self.visible=[];self.main=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='main':self.main=True
  if tag=='h1':self.h1+=1
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='link' and a.get('type')=='text/markdown':self.alternates.append(a.get('href'))
  if tag=='a' and self.main:self.links.append(a.get('href',''))
  if tag=='img':self.images.append(a)
  if tag=='script':
   self.in_script=True
   if a.get('type')=='application/ld+json':self.in_ld=True;self.ld.append('')
 def handle_endtag(self,tag):
  if tag=='main':self.main=False
  if tag=='script':self.in_ld=False;self.in_script=False
 def handle_data(self,text):
  if self.in_ld:self.ld[-1]+=text
  if not self.in_script:self.visible.append(text)

def get(path):
 with urllib.request.urlopen(BASE+path,timeout=30) as r:return r.status,{k.lower():v for k,v in r.headers.items()},r.read()
def walk(value):
 if isinstance(value,dict):
  yield value
  for item in value.values():yield from walk(item)
 elif isinstance(value,list):
  for item in value:yield from walk(item)

pages=list(csv.DictReader((OUT/'new-pages.csv').open(encoding='utf-8-sig')))
_,_,xml=get('/sitemap.xml')
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9','i':'http://www.google.com/schemas/sitemap-image/1.1'}
urls={item.find('s:loc',ns).text:item for item in ET.fromstring(xml).findall('s:url',ns)}
results=[];links=set();assets=set()
for row in pages:
 path=row['path'];status,headers,html=get(path);page=Page();page.feed(html.decode('utf-8'));issues=[]
 if status!=200:issues.append('HTTP status')
 if page.h1!=1:issues.append('H1 count')
 if page.canonical!=[DOMAIN+path]:issues.append('canonical')
 if page.alternates!=[DOMAIN+row['markdown']]:issues.append('Markdown alternate')
 if 'noindex' not in page.meta.get('robots',''):issues.append('local preview must stay noindex')
 if not page.meta.get('description'):issues.append('description')
 nodes=[node for raw in page.ld for node in walk(json.loads(raw))]
 types={node.get('@type') for node in nodes if isinstance(node.get('@type'),str)}
 for required in ['WebPage','BreadcrumbList','ImageObject','Organization']:
  if required not in types:issues.append('schema '+required)
 if ('BlogPosting' if path.startswith('/resources/') else 'Service') not in types:issues.append('main entity schema')
 visible=' '.join(' '.join(page.visible).split())
 for node in nodes:
  if node.get('@type')=='Question':
   if ' '.join(node['name'].split()) not in visible or ' '.join(node['acceptedAnswer']['text'].split()) not in visible:issues.append('FAQ parity')
 for img in page.images:
  if 'alt' not in img:issues.append('image alt')
  parsed=urlparse(img.get('src',''));asset=parse_qs(parsed.query).get('url',[parsed.path])[0]
  if asset.startswith('/'):assets.add(asset)
 mdstatus,mdheaders,md=get(row['markdown'])
 if mdstatus!=200 or 'text/markdown' not in mdheaders.get('content-type',''):issues.append('Markdown response')
 if DOMAIN+path not in md.decode('utf-8') or 'rel="canonical"' not in mdheaders.get('link',''):issues.append('Markdown canonical')
 if DOMAIN+path not in urls:issues.append('sitemap missing page')
 else:
  images=[i.text for i in urls[DOMAIN+path].findall('i:image/i:loc',ns)]
  if len(images)<2:issues.append('sitemap image references')
  assets.update(urlparse(image).path for image in images)
 links.update(urlparse(href).path for href in page.links if href.startswith('/') and not href.startswith('/api/'))
 results.append({'path':path,'status':status,'h1':page.h1,'schemaTypes':sorted(types),'issues':issues})
bad_links=[]
for path in sorted(links):
 try:
  if get(path)[0]!=200:bad_links.append(path)
 except Exception as error:bad_links.append(path+': '+str(error))
bad_assets=[]
for path in sorted(assets):
 try:
  status,headers,body=get(path)
  if status!=200 or not body or not headers.get('content-type','').startswith('image/'):bad_assets.append(path)
 except Exception as error:bad_assets.append(path+': '+str(error))
report={'pagesChecked':len(results),'mainContentLinkDestinationsChecked':len(links),'imageAssetsChecked':len(assets),'sitemapHtmlUrls':len(urls),'previewNoindex':True,'badLinks':bad_links,'badImages':bad_assets,'pages':results,'limits':['Local responses only; not production deployment or Google indexing verification.','Schema JSON parsed and types/references/visible FAQ parity checked; no Google rich-result eligibility claim.']}
(OUT/'local-route-validation.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
failures=[row for row in results if row['issues']]
print(json.dumps({k:v for k,v in report.items() if k not in ['pages','limits']}|{'pageFailures':failures},indent=2))
raise SystemExit(bool(failures or bad_links or bad_assets))
