"""Build an editorial plan, never change public publication dates or auto-publish drafts."""
import ast,collections,datetime,json,re,zipfile,csv,io
from pathlib import Path
from urllib.parse import urlsplit
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'content-migration/2026-11-13';OUT.mkdir(exist_ok=True)
entries=json.loads((ROOT/'website/src/data/migrated/index.json').read_text())
raw=json.loads((ROOT/'content-migration/2026-11-11/raw-items.json').read_text())
source={str(r['id']):r for r in raw}
module=ast.parse((ROOT/'website/scripts/migrate-wordpress.py').read_text())
fn=next(n for n in module.body if isinstance(n,ast.FunctionDef) and n.name=='category');ns={'re':re};exec(compile(ast.Module(body=[fn],type_ignores=[]),'<category>','exec'),ns)
# Evidence from the supplied Search Console export, not estimated keyword traffic.
gsc={}
with zipfile.ZipFile(ROOT/'builtrightdigital.com-Performance-on-Search-2026-11-03.zip') as z:
 for name in z.namelist():
  if name.endswith('Pages.csv'):
   for row in csv.DictReader(io.StringIO(z.read(name).decode('utf-8-sig'))):
    url=row.get('Top pages') or next(iter(row.values()));gsc[urlsplit(url).path.rstrip('/')+'/']={'clicks':int(row.get('Clicks','0').replace(',','')),'impressions':int(row.get('Impressions','0').replace(',',''))}
    
def intent(title):
 t=title.lower()
 if re.search('cost|pricing|budget',t):return 'Cost and scope comparison','Separate media, delivery and tool costs; show a clearly labeled worked example and quote checklist.'
 if re.search('vs|compare|choos|agenc',t):return 'Provider or approach evaluation','Explain selection criteria, fit and trade-offs. Replace unverified rankings with a neutral evaluation framework.'
 if re.search('checklist|audit|mistake',t):return 'Diagnostic checklist','Provide observable checks, failure examples and an order for fixing issues.'
 if re.search('idea|strateg|market',t):return 'Practical planning','Prioritize distinct actions by business stage; include a realistic example, owner and success measure for each.'
 return 'Implementation guide','Explain prerequisites, the sequence, examples, common exceptions and a review checklist.'

def evidence(e):
 r=source.get(str(e['id']),{});return gsc.get(urlsplit(r.get('url','')).path.rstrip('/')+'/',{'clicks':0,'impressions':0})
# Prioritize historical demand, then commercial intent; source evidence is not a Wonderweb result.
entries.sort(key=lambda e:(-evidence(e)['clicks'],-evidence(e)['impressions'],0 if e['kind']=='resources' else 1,e['path']))
start=datetime.date(2026,11,14);counts=[48]*4+[47]*10
plan=[];offset=0
for day,count in enumerate(counts):
 date=str(start+datetime.timedelta(days=day))
 for e in entries[offset:offset+count]:
  goal,brief=intent(e['title']);doc=json.loads((ROOT/f"website/src/data/migrated/{e['kind']}-{e['id']}.json").read_text())
  r=source.get(str(e['id']),{});related=[v['path'] for v in entries if v['service']==e['service'] and v['path']!=e['path']][:3]
  is_rewritten=doc.get('editorialReview',{}).get('status')=='rewritten'
  plan.append({'day':day+1,'plannedRelease':date,'status':'ready_for_review' if is_rewritten else 'rewrite_planned','action':'review_existing_scheduled_draft' if e['scheduled'] else 'revise_existing_adaptation','path':e['path'],'title':e['title'],'primaryService':e['service'],'sourceUrl':r.get('url',''),'sourcePublished':e['originalPublished'],'currentWonderwebPublished':e['published'],'sourceSearchEvidence':evidence(e),'searchIntent':goal,'editorialBrief':brief,'targetWords':max(1200,round(e['words']*1.15/100)*100),'internalLinks':[f"/services/{e['service']}/",'/pricing/',*related],'requiredSections':['Direct answer and intended reader','Prerequisites and decision criteria','Detailed steps with a worked example','Trade-offs, exceptions and mistakes','Practical checklist','Four to six topic-specific FAQs','Primary-source references and next step'],'publicationRule':'Keep existing URL and original publication provenance. Update dateModified only after the revision is complete and deployed. Unfinished copy stays in the queue.'})
 offset+=count
assert len(plan)==662 and len({r['path'] for r in plan})==662
(OUT/'two-week-content-calendar.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
text=['# Wonderweb Studio: two-week editorial release plan','', 'Planned release window: **14 to 27 November 2026**. Prepared 13 November. Local plan only; no live deployment or unattended publishing is enabled.','', '## Delivery and dates','', '- All **662 existing adaptations** have a specific revision/release slot. The first four days contain 48 items each; the remaining ten contain 47 each. Publishing 10 to 30 daily would take at least 23 days, so it cannot finish this inventory in two weeks.','- These are planned editorial dates, not fabricated publication dates. Preserve existing URLs and source provenance. Pages already released receive a true modification date only when the finished revision is deployed.','- The 78 new service guides are a separate original-content batch. The further service-cluster briefs below expand the newly confirmed offerings; they do not replace any of these 662 records.','- Historical clicks and impressions below come from the supplied BuildRight Search Console export. They indicate topic priority, not Wonderweb results or a traffic forecast.','- The existing import is an adaptation, not a completed original rewrite. A scheduled row does not mean its content has been produced or reviewed.','', '## Release checklist','', '1. Read the source and primary documentation; preserve useful theory without lightly paraphrasing paragraphs.','2. Match one clear search intent. Add useful examples, decisions, exceptions and subject-matter detail. Word targets are editorial planning ranges, not ranking requirements.','3. Verify business facts, platform claims, prices, external links and any measurable results. Do not transfer BuildRight testimonials or achievements to Wonderweb.','4. Link to the relevant service, current pricing and two or three genuinely related guides. Link back from the service or relevant hub.','5. Add topic-specific FAQs, descriptive image text, unique metadata and correct visible-content schema. Remove em dashes.','6. Review on mobile, check all links and run the local content/SEO checks. Resolve overlapping topics before publication.','7. Mark the row approved, deploy through the agreed release process and record the actual date. If unfinished, carry it forward rather than publishing low-quality filler to meet a quota.','', '## Daily revision queue','']
for day in range(1,15):
 batch=[r for r in plan if r['day']==day]
 text += [f"### Day {day}: {batch[0]['plannedRelease']} ({len(batch)} pieces)",'','| Content | Service | Historical clicks / impressions |','| --- | --- | --- |']
 for r in batch:
  title=r['title'].replace('|','/');ev=r['sourceSearchEvidence'];text.append(f"| [{title}](https://www.wonderwebstudio.com{r['path']}) | {r['primaryService']} | {ev['clicks']} / {ev['impressions']} |")
 text.append('')
(OUT/'TWO_WEEK_CONTENT_PLAN.md').write_text('\n'.join(text)+'\n')
# Reassess earlier specialist exclusions using the now-confirmed service catalog.
manifest=json.loads((ROOT/'content-migration/2026-11-11/manifest.json').read_text())
backlog=[]
for row in manifest:
 if row.get('decision')=='Specialist offering outside the confirmed launch scope':
  title=row['title'];cat,service=ns['category'](title)
  if re.search('programmatic|streaming tv|ctv|ott|chatgpt ads',title,re.I):service='digital-media-buying'
  elif re.search('franchise',title,re.I):service='franchise-marketing'
  elif re.search('ai for|ai consulting|ai automation',title,re.I):service='ai-workflow-automation'
  elif re.search('chatgpt|gemini|perplexity|grok|claude|ai seo',title,re.I):service='ai-search-optimization'
  backlog.append({**row,'revisedService':service,'newDecision':'Review and brief for original adaptation','releaseStatus':'Not scheduled or published; additional to the 662-item plan','requirement':'Verify current platform availability and business fit. Preserve concepts, not unsupported guarantees or source-specific claims.'})
(OUT/'expanded-service-source-backlog.json').write_text(json.dumps(backlog,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'scheduledRevisions':len(plan),'dailyCounts':counts,'additionalSourceBacklog':len(backlog),'gscPages':len(gsc)},indent=2))
