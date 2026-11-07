"""Read-only local SEO route audit; no third-party browser automation."""
import concurrent.futures,json,os,urllib.request,xml.etree.ElementTree as ET
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse,parse_qs
BASE=os.environ.get('AUDIT_BASE_URL','http://127.0.0.1:3000')
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.insvg=False;self.h1=0;self.title='';self.intitle=False;self.desc=[];self.canon=[];self.links=[];self.images=[];self.ld=[];self.inld=False;self.ids=[];self.robot=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  if t=='h1':self.h1+=1
  if t=='svg':self.insvg=True
  if t=='title' and not self.insvg:self.intitle=True
  if t=='meta' and a.get('name')=='description':self.desc.append(a.get('content',''))
  if t=='meta' and a.get('name')=='robots':self.robot.append(a.get('content',''))
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href',''))
  if t=='a' and a.get('href','').startswith('/'):self.links.append(a['href'])
  if t=='img':self.images.append(a)
  if t=='script' and a.get('type')=='application/ld+json':self.inld=True;self.ld.append('')
 def handle_endtag(self,t):
  if t=='svg':self.insvg=False
  if t=='title':self.intitle=False
  if t=='script':self.inld=False
 def handle_data(self,d):
  if self.intitle:self.title+=d
  if self.inld:self.ld[-1]+=d
root=ET.fromstring(urllib.request.urlopen(BASE+'/sitemap.xml').read());urls=[e.text for e in root.iter() if e.tag.endswith('loc')]
def check(url):
 path=urlparse(url).path
 try:
  r=urllib.request.urlopen(BASE+path,timeout=40);p=Page();p.feed(r.read().decode());issues=[]
  if p.h1!=1:issues.append('H1 count '+str(p.h1))
  if not p.title:issues.append('Missing title')
  if len(p.desc)!=1 or not p.desc[0]:issues.append('Description missing/duplicate')
  if p.canon!=[url]:issues.append('Canonical mismatch')
  if any('alt' not in i for i in p.images):issues.append('Image without alt attribute')
  if any(n>1 for n in Counter(p.ids).values()):issues.append('Duplicate HTML ids')
  for ld in p.ld:
   try:json.loads(ld)
   except Exception:issues.append('Invalid JSON-LD')
  missing=[]
  for i in p.images:
   src=i.get('src','');u=urlparse(src);asset=parse_qs(u.query).get('url',[u.path])[0] if u.path.rstrip('/')=='/_next/image' else u.path
   if asset.startswith('/') and not Path('public'+asset).exists():missing.append(asset)
  if missing:issues.append('Missing public assets: '+str(missing))
  return dict(path=path,status=r.status,title=p.title,description=p.desc,issues=issues,links=p.links,robots=p.robot)
 except Exception as e:return dict(path=path,issues=[str(e)],links=[])
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:rows=list(pool.map(check,urls))
paths={r['path'] for r in rows}
unknown=sorted({urlparse(l).path for r in rows for l in r['links'] if urlparse(l).path not in paths and urlparse(l).path!='/payments/'})
report=dict(pages=len(rows),issues=[dict(path=r['path'],issues=r['issues']) for r in rows if r['issues']],unmapped_internal_paths=unknown,unique_titles=len({r.get('title') for r in rows}),unique_descriptions=len({tuple(r.get('description',[])) for r in rows}),all_preview_noindex=all('noindex' in ','.join(r.get('robots',[])) for r in rows))
Path('audit-results.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
raise SystemExit(bool(report['issues'] or unknown or report['unique_titles']!=len(rows) or report['unique_descriptions']!=len(rows)))
