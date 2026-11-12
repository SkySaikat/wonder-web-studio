"""Reproducible, conservative migration of owner-supplied WordPress content.
Run with beautifulsoup4 installed. Source files remain outside the public site.
Every source item receives an explicit migration decision; no source JS is retained.
"""
from pathlib import Path
from bs4 import BeautifulSoup, Comment, NavigableString
from urllib.parse import urlsplit, urlunsplit, parse_qs
import json,re,html,collections,hashlib,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[2]
AUDIT=ROOT/'content-migration/2026-11-11'
OUT=ROOT/'website/src/data/migrated'
OUT.mkdir(parents=True,exist_ok=True)
for generated in OUT.glob('*.json'): generated.unlink()
items=json.loads((AUDIT/'raw-items.json').read_text())
NOW='2026-11-11'
BR=re.compile(r'(?:built[\s-]*right|buildright)(?:[\s-]*digital)?|\bBRD\b',re.I)
SELF=re.compile(r'\b(we|our|ours|us|I|my)\b',re.I)
# The owner confirms these specialist categories; availability still needs editorial review.
UNSUPPORTED=re.compile(r'(?!)',re.I)
REVIEW=re.compile(r'\b(?:agencies|firms|providers|companies)\b.{0,60}(?:compared|ranked|worth)|\bbest\b|\branked\b|\btop\b.*agenc|agencies.*\brank|client.s|\$|\d+%|pay.per.lead terms|performance max may|owners say',re.I)
BADTITLE=re.compile(r'privacy|terms|thank you|feedback|^leads$|^sitemap$|homepage|^home$|about us|gives back|^contact|^pricing|our work|^blog$|\btemplate\b|mockup|\bdraft\b|\bduplicate\b|landing page v?\d*|^ads landing|gads lp|^videos$|^our reviews',re.I)
BADBLOCK=re.compile(r'\b(testimonial|clients served|client tenure|years in business|review sites|star rating|five.star|5.star|4\.9/5|google partner|our clients|our team|case stud|success stor|award.winning|guaranteed results|guarantee.{0,20}(rank|lead|result)|chatgpt ads|\d+\s*years.{0,20}experience)\b',re.I)
# Deliberate equivalences; source URLs never become redirects away from the owner's other domain.
manual={'/':'/','/contact-us/':'/contact/','/contact/':'/contact/','/pricing/':'/pricing/','/our-work/':'/results/','/about-us/':'/about/','/blog/':'/resources/','/seo/':'/services/seo/','/home-services-seo/':'/services/seo/','/google-ads/':'/services/google-ads/','/meta-ads/':'/services/meta-ads/','/web-design/':'/services/web-design/','/website-design/':'/services/web-design/','/content-marketing/':'/services/content-creation/','/website-management/':'/services/website-management/','/roofers/':'/industries/roofing/','/roofing/':'/industries/roofing/','/electricians/':'/industries/electricians/','/plumbers/':'/industries/plumbing/','/hvac/':'/industries/hvac/','/bathroom-remodelers/':'/industries/bathroom-remodeling/','/bathroom-remodeling/':'/industries/bathroom-remodeling/','/landscaping/':'/industries/landscaping/'}
manual.update({'/local-service-ads/':'/services/local-services-ads/','/bing-ads/':'/services/microsoft-ads/','/generative-ai-search-optimization/':'/services/ai-search-optimization/','/lead-generation/':'/services/lead-generation/','/hvac-seo/':'/industries/hvac/seo/','/pest-control-marketing/':'/industries/pest-control/','/landscaping-marketing/':'/industries/landscaping/'})
# Resolve only to real current routes (some legacy names have different present slugs).
content=(ROOT/'website/src/lib/content.ts').read_text()
service_slugs=set(re.findall(r"slug:\s*['\"]([^'\"]+)",content.split('export const industries')[0]))
existing_posts=set(re.findall(r"slug:\s*['\"]([^'\"]+)",''.join((ROOT/f'website/src/lib/{n}').read_text() for n in ['articles.ts','search-led-articles.ts','practical-guides.ts'])))
allowed=set(['p','h2','h3','h4','ul','ol','li','strong','em','a','table','thead','tbody','tr','th','td','br','blockquote'])
def text(s): return re.sub(r'\s+',' ',BeautifulSoup(s or '', 'html.parser').get_text(' ',strip=True)).strip()
def category(title):
 rules=[
  (r'programmatic|streaming tv|\bctv\b|\bott\b|chatgpt ads','Paid advertising','digital-media-buying'),
  (r'franchise','Business growth','franchise-marketing'),
  (r'ai for|ai consulting|ai automation','Websites','ai-workflow-automation'),
  (r'\baeo\b|\bgeo\b|ai search|gen ai|generative ai|answer engine','AI search','ai-search-optimization'),
  (r'local service.? ads|\blsa\b','Paid advertising','local-services-ads'),
  (r'bing ads|microsoft ads|microsoft advertising','Paid advertising','microsoft-ads'),
  (r'linkedin','Paid advertising','linkedin-ads'),
  (r'email marketing|email campaign|email automation','Social & content','email-marketing'),
  (r'reputation|review management','Business trust','reputation-management'),
  (r'conversion rate|\bcro\b','Conversion','conversion-rate-optimization'),
  (r'meta ads|facebook ads|instagram ads|facebook advertising|instagram advertising','Paid advertising','meta-ads'),
  (r'website (?:maintenance|management)|web maintenance','Websites','website-management'),
  (r'local seo|business profile|\bgbp\b|listing management|citation|map pack','SEO & local search','local-seo'),
  (r'conversion rate|landing page|\bcro\b','Conversion','landing-page-design'),
  (r'content marketing|copywriting|content writing|email marketing','Social & content','content-creation'),
  (r'thumbnail','Creative','thumbnail-design'),
  (r'graphic design|brand identity','Creative','graphic-design'),
  (r'web development|website development','Websites','web-development'),
  (r'content management|cms publishing','Social & content','content-management'),
  (r'\bseo\b|\baeo\b|search|listing','SEO & local search','seo'),
  (r'google ads|ppc|\blsa\b|paid|advertis','Paid advertising','google-ads'),
  (r'lead generation','Business growth','lead-generation'),
  (r'website|web design','Websites','web-design'),
  (r'social|facebook|instagram|pinterest','Social & content','social-media-management'),
  (r'content','Social & content','content-creation'),
 ]
 for regex,name,service in rules:
  if re.search(regex,title,re.I):return name,service
 return 'Business growth','content-management'
def normpath(url):return '/'+urlsplit(url).path.strip('/')+'/' if urlsplit(url).path.strip('/') else '/'
def clean_content(item):
 raw=re.sub(r'\[(?:/?[a-zA-Z_][^\]]*)\]','',item['content'])
 selection=item.get('selectionGuide',False)
 soup=BeautifulSoup(raw,'html.parser')
 for x in soup.find_all(string=lambda s:isinstance(s,Comment)):x.extract()
 for x in soup(['script','style','form','input','textarea','select','iframe','object','embed','svg','img','video','audio','nav','header','footer']):x.decompose()
 for x in soup.select('summary, .elementor-tab-title'):
  if x.get_text(' ',strip=True).endswith('?'):x.name='h3';x.attrs={}
 for x in soup.select('[role="button"], [role="tab"], button'):x.decompose()
 # Reconstruct WP's unwrapped paragraphs before touching inline links. This avoids sentence fragments.
 containers=[soup]+list(soup.find_all(['div','section','article']))
 inline={'a','strong','em','b','i','span','br','small'}
 for container in containers:
  if container is not soup and not container.parent:continue
  run=[]
  def flush():
   if run and ''.join(n.get_text() if hasattr(n,'get_text') else str(n) for n in run).strip():
    p=soup.new_tag('p');run[0].insert_before(p)
    for n in run:p.append(n.extract())
   run.clear()
  for n in list(container.children):
   if isinstance(n,NavigableString) or getattr(n,'name',None) in inline:run.append(n)
   else:flush()
  flush()
 # A flat semantic outline discards Elementor's visual wrappers and repeated mobile/desktop blocks.
 blocks=[]
 for el in soup.find_all(['h1','h2','h3','h4','p','ul','ol','table','blockquote']):
  if any(p.name in ['p','ul','ol','table','blockquote'] for p in el.parents):continue
  blocks.append(el)
 out=BeautifulSoup('','html.parser');seen=set();blocked=0;started=item['type']=='post'
 bad_heading=re.compile(r'results|testimonials?|what .*(?:say|think)|reviews|case stud|success stor|why .*choose|why us|why (choose|partner)|meet.*team|book a call|ready for|ready to|let.s|free.*audit|what.*costs|pricing|packages|in business|dominate|guaranteed|related (articles|resources)|marketing we run|proof that home service|what paid search delivers for home service clients',re.I)
 for el in blocks:
  value=re.sub(r'\s+',' ',el.get_text(' ',strip=True)).strip()
  if not value:continue
  if el.name in ['h1','h2','h3','h4']:
   level=int(el.name[1])
   if blocked and level<=blocked:blocked=0
   if blocked:continue
   if el.name=='h1':continue
   if item['type']=='page' and not started and el.name!='h2':continue
   if (selection and (re.search(r'^\s*\d+[.)\-:]|\brank(?:ed|ing|ings)?\b|comparison table|\bbest\b|\btop pick\b|recommended agenc|agencies (compared|reviewed)|why .*stands out',value,re.I))) or bad_heading.search(value) or BR.search(value) or (item['type']=='post' and SELF.search(value)):
    blocked=level;continue
   started=True
  if not started or blocked:continue
  if selection and (el.name=='table' or re.search(r'\beach entry\b|\bthese \d+\b|\bthis list\b|\b(?:agency|agencies|companies|firms) below|shortlist below|scored on|ranked|\branking\b|\brankings\b|top pick|number.one|#1|best overall|socius|hook agency|scorpion|webfx|locallogy|contractor click|builder funnel|hearth marketing|straight north|silverback|blue corona|rival digital|lemon seed|1seo|ryno|servicetitan marketing|thrive internet',value,re.I)):continue
  if item['type']=='post' and '$' in value and re.search(r'Google Ads management|Google Local Service Ads plan|pricing page',value,re.I) and el.name=='p':
   sentences=re.split(r'(?<=[.!?])\s+',value)
   retained=[part for part in sentences if not ('$' in part and re.search(r'Google Ads management|Google Local Service Ads plan|pricing page',part,re.I))]
   if not retained:continue
   value=' '.join(retained);el=BeautifulSoup('<p>'+html.escape(value)+'</p>','html.parser').p
  if SELF.search(value) and el.name not in ['h2','h3','h4']:
   # Keep complete independent sentences, never remnants around inline links.
   if el.name=='p':
    sentences=re.split(r'(?<=[.!?])\s+',value)
    retained=[part for part in sentences if not SELF.search(part)]
    if not retained:continue
    # Plain text is deliberate here: surviving links are recorded on other intact blocks.
    el=BeautifulSoup('<p>'+html.escape(' '.join(retained))+'</p>','html.parser').p
    value=' '.join(retained)
   else:continue
  if BR.search(value) or re.search(r'\b(unconditionally|dominate|guarantee|guaranteed|ensure|ensures|ensuring|skyrocket|exclusive leads|partners|testimonials|case studies|our clients|why us)\b',value,re.I):continue
  if el.name=='p' and len(value)<65:continue
  if BADBLOCK.search(value) or re.search(r'@|\+1\s*\(?\d{3}|\b(?:book a call|see client results|top.rated|last updated|published on|clutch|trustpilot|coastal bath)\b',value,re.I):continue
  if item['type']=='page' and (re.search(r'\d\s*%|\$|\bstars\b|\brating\b|\b450\+|\b4\.9',value,re.I)):continue
  if item['type']=='post' and (BR.search(value) or re.search(r'\b(?:a client|one client|his cost|her cost|client.s cost|results after|we changed|campaign (grew|generated|delivered|produced))\b',value,re.I)):continue
  # Static lists are useful; repeated tab-panel copies are not.
  key=value.lower()
  if key in seen:continue
  seen.add(key)
  clone=BeautifulSoup(str(el),'html.parser').find()
  for node in list(clone.find_all(string=True)):
   v=str(node).replace('The lists Light at', 'The source lists Light at').replace('but someone else owns the pages', 'and a team manages the build')
   if item['type']=='page':
    v=BR.sub('Wonderweb Studio',v)
    v=re.sub(r'\bguarantee(?:d)?\b','aim for',v,flags=re.I)
    v=v.replace('Every lead is exclusive to your company','Campaign lead handling is agreed with your company')
   node.replace_with(v)
  for tag in [clone]+list(clone.find_all(True)):
   if not tag.parent and tag is not clone:continue
   if tag.name not in allowed:tag.unwrap();continue
   attrs=dict(tag.attrs);tag.attrs={}
   if tag.name=='a' and attrs.get('href'):tag['href']=attrs['href']
   if tag.name in ['th','td'] and str(attrs.get('colspan','')).isdigit():tag['colspan']=attrs['colspan']
  if clone.name in ['h2','h3','h4']:
   label=re.sub(r'^(?:Our|Proven)\s+','',clone.get_text(' ',strip=True),flags=re.I)
   label=re.sub(r'\s+',' ',label)
   clone.clear();clone.string=label
  out.append(clone)
 for p in list(out.find_all('p')):
  if p.find(['p','ul','ol','table','h2','h3','h4','blockquote']):p.unwrap()
 for h in list(out.find_all(['h2','h3','h4'])):
  nxt=h.find_next_sibling()
  if nxt is None or nxt.name in ['h2','h3','h4']:h.decompose()
 return out

future_gmt={}
for path in Path('/Users/saikatchowdhury444gmail.com/Downloads').glob('built-rightdigital.WordPress.2026-11-11*.xml'):
 for _,el in ET.iterparse(path,events=('end',)):
  if el.tag=='item':
   ns='{http://wordpress.org/export/1.2/}'
   if el.findtext(ns+'status')=='future':future_gmt[el.findtext(ns+'post_id')]=el.findtext(ns+'post_date_gmt')
   el.clear()
manifest=[]; records=[]; pathmap=dict(manual); hashes={}
for item in items:
 if item['type'] not in ['page','post']:continue
 title=text(item['title']);slug=item['slug'];reason='';target=None
 original_title=title
 selection=(item['type']=='post' and bool(re.search(r'\b(?:agenc(?:y|ies)|companies|firms|providers|partners)\b',title,re.I)) and bool(REVIEW.search(title) or re.search(r'Ranked Agencies|Top Pick|Comparison.*Agencies',text(item['content']),re.I)) and not UNSUPPORTED.search(title) and not re.search(r'\$|client.s|pay.per.lead terms|performance max may|owners say',title,re.I))
 item['selectionGuide']=selection
 sourcepath=normpath(item['url'])
 if item['status'] not in ['publish','future']:reason='Not published: '+item['status']
 elif not item['content'].strip():reason='Empty source body'
 elif sourcepath in manual and manual[sourcepath].startswith(('/services/','/industries/')):reason='Consolidated into existing Wonderweb service or industry page';target=manual[sourcepath]
 elif BADTITLE.search(title):reason='Existing core page, legal/company content or utility page';target=manual.get(sourcepath)
 elif not selection and (REVIEW.search(title) or re.search(r'Ranked Agencies|Top Pick|Comparison.*Agencies',text(item['content']),re.I)):reason='Comparative rankings require independent review; retained in private source inventory'
 elif UNSUPPORTED.search(title):reason='Specialist offering outside the confirmed launch scope'
 elif BR.search(title):reason='Source-company-specific story or announcement'
 elif item['type']=='post' and slug in existing_posts:reason='Consolidated into existing Wonderweb article';target=f'/resources/{slug}/'
 if reason:
  manifest.append({'id':item['id'],'type':item['type'],'title':title,'sourceUrl':item['url'],'sourceDate':item['date'],'decision':reason,'target':target});
  if target:pathmap[sourcepath]=target
  continue
 soup=clean_content(item)
 if selection:
  title=re.sub(r'^(?:the\s+)?(?:top\s+|best\s+|leading\s+)?\d*\s*(?:best|top|leading)?\s*','',title,flags=re.I)
  title=re.split(r'\s+[–—]|:|,?\s+ranked|\s+compared|\s+for 202[0-9]|\s*\(202[0-9]\)|\s+rankings?',title,flags=re.I)[0].strip(' ,.-')
  title=re.sub(r'\bAgencies\b','agency',title,flags=re.I)
  title=re.sub(r'\bCompanies\b','company',title,flags=re.I)
  title=re.sub(r'\b(?:Firms|Providers|Partners)\b','partner',title,flags=re.I)
  title=re.sub(r'^Choosing (?:a|an)\s+','',title,flags=re.I)
  title='Choosing '+title+' — A Practical Guide'
  intro=soup.new_tag('p');intro.string='Use this guide to compare scope, relevant experience, ownership of your accounts and the way a prospective partner measures enquiries. Ask for evidence that matches your service and market, and agree on deliverables before signing a proposal. The focus is on evaluation criteria and questions for an agency proposal.';soup.insert(0,intro)
 words=len(soup.get_text(' ',strip=True).split())
 if len(soup.find_all('h2'))<2 or words<(400 if item['type']=='post' else 350) or len([p for p in soup.find_all('p') if len(p.get_text())>100])<3:
  manifest.append({'id':item['id'],'type':item['type'],'title':title,'sourceUrl':item['url'],'sourceDate':item['date'],'decision':'Insufficient independent content after removing source claims','words':words});continue
 same_title=next((r for r in records if r['title'].casefold()==title.casefold()),None)
 if same_title:
  pathmap[sourcepath]=same_title['path'];manifest.append({'id':item['id'],'type':item['type'],'title':original_title,'sourceUrl':item['url'],'sourceDate':item['date'],'decision':'Overlapping selection guide consolidated','target':same_title['path']});continue
 fingerprint=hashlib.sha256(soup.get_text(' ',strip=True).encode()).hexdigest()
 if fingerprint in hashes:
  target=hashes[fingerprint];pathmap[sourcepath]=target
  manifest.append({'id':item['id'],'type':item['type'],'title':title,'sourceUrl':item['url'],'sourceDate':item['date'],'decision':'Duplicate body consolidated','target':target});continue
 route=('resources' if item['type']=='post' else 'solutions');target=f'/{route}/{slug}/';pathmap[sourcepath]=target;hashes[fingerprint]=target
 cat,service=category(title)
 if service not in service_slugs:service='seo' if 'search' in cat else 'web-design'
 original=item['date'][:10]
 release=NOW+'T00:00:00Z'
 if item['status']=='future':
  gmt=future_gmt.get(str(item['id']))
  release=(gmt.replace(' ','T')+'Z') if gmt and not gmt.startswith('0000') else item['date'].replace(' ','T')+'Z'
  # Keep scheduled source work genuinely future-dated when an export timezone is unclear.
  if release<NOW+'T23:59:59Z':release='2026-11-12T12:00:00Z'
 record={'id':str(item['id']),'kind':route,'slug':slug,'path':target,'title':title.split(' | ')[0], 'category':cat,'service':service,'originalPublished':original,'published':release,'updated':release[:10],'scheduled':item['status']=='future','html':str(soup),'words':words}
 records.append(record);manifest.append({'id':item['id'],'type':item['type'],'title':title,'sourceUrl':item['url'],'sourceDate':item['date'],'decision':'Scheduled adaptation' if item['status']=='future' else ('Rewritten selection guide' if selection else 'Adapted'),'target':target,'words':words})

# Rebuild known current mappings from the actual app, rather than guessing industry URLs.
# Core route aliases intentionally use stable service destinations where no exact counterpart exists.
manual_industry={'roofers':'roofing','electricians':'electricians','plumbers':'plumbing','hvac':'hvac','bathroom-remodelers':'bathroom-remodeling','bathroom-remodeling':'bathroom-remodeling','landscaping':'landscaping'}
valid_industries=set(re.findall(r"slug:\s*['\"]([^'\"]+)",content.split('export const industries')[1].split('export const')[0])) if 'export const industries' in content else set()
for old,new in manual_industry.items():
 pathmap['/'+old+'/']=f'/industries/{new}/' if new in valid_industries else '/industries/'
scheduled_paths={r['path'] for r in records if r['scheduled']}
link_audit=[]
def fallback(path):
 for pat,service in [(r'web.?design|website','web-design'),(r'meta|facebook','meta-ads'),(r'google.ads|ppc|lsa','google-ads'),(r'content','content-management'),(r'social','social-media-management'),(r'seo|aeo|search|link.build|gbp|reputation|listing','seo')]:
  if re.search(pat,path,re.I) and service in service_slugs:return f'/services/{service}/'
 return '/services/'
for r in records:
 soup=BeautifulSoup(r['html'],'html.parser')
 for a in list(soup.find_all('a')):
  href=html.unescape(a.get('href','')).split(chr(34))[0].split(chr(39))[0].strip();u=urlsplit(href)
  if u.netloc in ['www.google.com','google.com'] and u.path in ['/search','/url']:
   dest=parse_qs(u.query).get('q',parse_qs(u.query).get('url',['']))[0]
   if dest.startswith(('http://','https://')):href=dest;u=urlsplit(href)
   elif BR.search(href):a.unwrap();continue
  if u.netloc in ['www.google.com','google.com'] and u.path=='/aclk':
   dest=parse_qs(u.query).get('adurl',[''])[0]
   if not dest:a.unwrap();continue
   destparts=urlsplit(dest);href=urlunsplit(('https',destparts.netloc,destparts.path,'',''));u=urlsplit(href)
  if href=='https://blog.hubspot.com/marketing/facebook-video-ads':a.unwrap();continue
  if href.startswith('#'):a.unwrap();continue
  if not u.scheme or BR.search(u.netloc):
   source=normpath(href);dest=pathmap.get(source) or fallback(source)
   if dest in scheduled_paths:dest=fallback(source)
   if dest==r['path']:a.unwrap();continue
   a['href']=dest;link_audit.append({'page':r['path'],'source':href,'target':dest,'exact':source in pathmap})
  elif u.scheme in ['http','https'] and not any(s in u.netloc for s in ['doubleclick','googletagmanager','facebook.com/tr','calendly','forms.','typeform']):
   a['href']=urlunsplit(('https',u.netloc,u.path,u.query if not any(k in u.query.lower() for k in ['utm_','token=','key=','email=']) else '',u.fragment));a['rel']='noopener noreferrer';link_audit.append({'page':r['path'],'source':href,'target':a['href'],'external':True})
  else:a.unwrap()
 # Numbered heading anchors are unique and usable in the table of contents.
 headings=[]
 for i,h in enumerate(soup.find_all('h2')):h['id']=f'guide-{i+1}';headings.append({'id':h['id'],'title':h.get_text(' ',strip=True)})
 r['headings']=headings
 first=next((p.get_text(' ',strip=True) for p in soup.find_all('p') if len(p.get_text(' ',strip=True))>90),'')
 first=first or f"Explore {r['title'].lower()} with practical considerations for your business, website and marketing plan."
 r['summary']=(r['title']+'. '+first)[:157].rsplit(' ',1)[0].rstrip('.,;:')+'…'
 r['html']=str(soup)
 r['text']=soup.get_text('\n',strip=True)
 r['readTime']=f"{max(3,round(r['words']/220))} min read"
 r['faqs']=[]
 for h in soup.find_all(['h2','h3','h4']):
  question=h.get_text(' ',strip=True);answer=h.find_next_sibling()
  if question.endswith('?') and answer and answer.name=='p' and len(answer.get_text(' ',strip=True))>60:
   r['faqs'].append([question,answer.get_text(' ',strip=True)])
 r['faqs']=r['faqs'][:8]
 # Plain-text Markdown retains link destinations; HTML remains the complete reference.
 md=BeautifulSoup(r['html'],'html.parser')
 for a in md.find_all('a'):a.replace_with(f"[{a.get_text(' ',strip=True)}]({a['href']})")
 for h in md.find_all(['h2','h3','h4']):h.insert_before('\n'+'#'*int(h.name[1])+' ');h.append('\n')
 for li in md.find_all('li'):li.insert_before('\n- ')
 r['markdown']=md.get_text('\n',strip=True)
 (OUT/f"{r['kind']}-{r['id']}.json").write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
index=[{k:v for k,v in r.items() if k not in ['html','text','markdown','headings','faqs']} for r in records]
(OUT/'index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
(AUDIT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(AUDIT/'link-map.json').write_text(json.dumps(link_audit,ensure_ascii=False,indent=2)+'\n')
(AUDIT/'summary.json').write_text(json.dumps({'decisions':dict(collections.Counter(x['decision'] for x in manifest)),'selected':dict(collections.Counter(r['kind'] for r in records)),'wordTotal':sum(r['words'] for r in records),'links':len(link_audit),'externalLinks':sum(bool(x.get('external')) for x in link_audit)},indent=2)+'\n')
print((AUDIT/'summary.json').read_text())
