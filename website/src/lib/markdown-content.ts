import {migratedByPath,publishedMigrations,migrationPageSize,migrationLibraryPath} from './migrated-content';
import {migratedDocument} from './migrated-body';
import {locationReading} from './location-reading';
import {articles} from './articles';
import {caseStudyDetails} from './case-study-details';
import {services,industries,work} from './content';
import {markdownPath} from './content-paths';
import {editorialImages} from './editorial-images';
import {industryDetails} from './industry-details';
import {locationAnswers} from './location-answers';
import {marketBriefs} from './location-depth';
import {locationServiceBriefs} from './location-service-briefs';
import {locations} from './locations';
import {campaignStories} from './projects';
import {absoluteUrl} from './seo';
import {getPublicSeoPages,seoPages,seoByPath,type SeoPage} from './seo-pages';
import {serviceDetails} from './service-details';
import {site,plans,studioCoverageFaq} from './site';

const bullets=(items:readonly string[])=>items.map(item=>`- ${item}`).join('\n');
const sections=(items:readonly (readonly [string,string])[])=>items.map(([title,body])=>`## ${title}\n\n${body}`).join('\n\n');
const faq=(items:readonly (readonly [string,string])[])=>items.length?`## Frequently asked questions\n\n${items.map(([q,a])=>`### ${q}\n\n${a}`).join('\n\n')}`:'';
const links=(paths:string[])=>bullets([...new Set(paths)].map(path=>`[${seoByPath.get(path)?.title||path}](${absoluteUrl(path)})`));

export function markdownBody(page:SeoPage):string{
 if(page.category==='Guide library'){const kind=page.path.startsWith('/solutions/')?'solutions':'resources';const number=Number(page.path.split('/').filter(Boolean).at(-1))||1;const entries=publishedMigrations(kind);return `## Guides\n\n${links(entries.slice((number-1)*migrationPageSize,number*migrationPageSize).map(e=>e.path))}\n\n## Library pages\n\n${links(Array.from({length:Math.ceil(entries.length/migrationPageSize)},(_,i)=>migrationLibraryPath(kind,i+1)))}`;}
 const migrated=migratedByPath.get(page.path);
 if(migrated){const doc=migratedDocument(migrated);return `Original publication: ${migrated.originalPublished}\nWonderweb adaptation: ${migrated.published}\n\nAdapted from owner-supplied editorial material. Cost examples and platform details reflect the original context; check current quotes and documentation.\n\n${doc.markdown}`;}
 const [kind,slug,service]=page.path.split('/').filter(Boolean);
 const blocks:string[]=[];
 if(kind==='resources'&&slug){
  const a=articles.find(a=>a.slug===slug)!;
  const image=editorialImages[slug];
  blocks.push(`Author: Wonderweb Studio editorial team\n\n![${image.alt}](${absoluteUrl(image.src)})`,sections(a.sections.map(s=>[s.title,s.body])),`## Your next-step checklist\n\n${bullets(a.checklist)}`,faq(a.faqs||[]));
  if(a.sources?.length)blocks.push(`## Further reading\n\n${bullets(a.sources.map(s=>`[${s.title}](${s.url})`))}`);
  blocks.push(`## Related services\n\n${links(a.related.map(s=>`/services/${s}/`))}`);
 }
 if(kind==='services'&&slug){
  const s=services.find(s=>s.slug===slug)!;const d=serviceDetails[slug];
  blocks.push(s.intro,sections(s.sections.map(s=>[s.title,s.body])),`## Deliverables\n\n${bullets(s.deliverables)}`);
  if(d)blocks.push(`## Who this is for\n\n${d.fit}\n\n${d.outcome}`,sections(d.steps),sections(d.checks),`## Inputs\n\n${bullets(d.inputs)}`,`## Measurement\n\n${bullets(d.metrics)}`,faq(d.faq));
 }
 if(kind==='locations'&&slug){
  const l=locations.find(l=>l.slug===slug)!;const brief=marketBriefs[slug];
  blocks.push(`## Service area and delivery\n\nWonderweb Studio supports ${l.name}, ${l.region} businesses remotely. This page does not represent a local office.\n\nBusiness sectors: ${l.sectors.join(', ')}.\n\nCoverage discussion examples: ${l.areas.join(', ')}. Actual operating boundaries are agreed with the business; these examples do not imply local offices or clients.`);
  const specific=service&&locationServiceBriefs[`${slug}/${service}`];
  if(specific)blocks.push(sections([[specific[0],`${specific[1]}\n\n${specific[2]}`]]));
  else blocks.push(sections(l.sections),`## Starting priorities\n\n${sections(l.campaign)}`);
  blocks.push(`## ${brief.title}\n\nPlanning scenario, not a measured client result.\n\n${brief.scenario}\n\n${brief.decision}\n\n${brief.proof}`);
  blocks.push(`## Prepare your marketing brief\n\n${links(locationReading(slug,service).map(a=>`/resources/${a.slug}/`))}`);
  if(service){const s=services.find(s=>s.slug===service)!;blocks.push(`## ${s.title} scope\n\n${bullets(s.deliverables)}`,faq(serviceDetails[service]?.faq||[]));}
  else blocks.push(faq(locationAnswers(slug)));
  blocks.push(`## Relevant services\n\n${links(l.services.map(s=>seoByPath.has(`/locations/${slug}/${s}/`)?`/locations/${slug}/${s}/`:`/services/${s}/`))}`);
 }
 if(kind==='industries'&&slug){
  const i=industries.find(i=>i.slug===slug)!;
  if(service){const d=industryDetails[slug];const paragraphs=service==='seo'?d.seo:d.web;blocks.push(paragraphs.join('\n\n'),`## Service details\n\n${links([`/services/${service}/`,`/industries/${slug}/`])}`);}
  else blocks.push(sections(i.needs.map(n=>[n.title,n.body])));
 }
 if(kind==='results'&&slug){
  const s=campaignStories.find(s=>s.slug===slug)!;const d=caseStudyDetails[slug];
  blocks.push(`## Campaign context\n\n${s.period}\n\n${s.challenge}\n\n${s.approach}`,`## Reported outcomes\n\n${bullets(s.results.map(([v,l])=>`${v} ${l}`))}\n\n${s.context}`,d.intro,sections(d.chapters),`## Lessons\n\n${d.lessons}`,faq(d.questions),`## Further reading\n\n${links(d.reading.map(s=>`/resources/${s}/`))}`);
 }
 if(kind==='work'&&slug){const w=work.find(w=>w.slug===slug)!;blocks.push('challenge' in w?`## Brief\n\n${w.challenge}\n\n## Approach\n\n${w.approach}\n\n## Deliverables\n\n${bullets(w.deliverables)}`:'A creative exploration from the studio’s earlier portfolio; not a measured campaign result.');}
 if(page.path==='/pricing/')blocks.push(sections(plans.map(p=>[p.name,`From $${p.price} USD per month. ${p.description}\n\n${bullets(p.items)}\n\n${p.note}`])));
 if(page.path==='/'||page.path==='/about/'||page.path==='/contact/')blocks.push(`## Studio facts\n\n${site.positioning} We provide websites, SEO, paid advertising, social media and creative content for small businesses and home-service companies. Founder, CEO and team lead: Saikat Chowdhury. Our team collaborates across locations and time zones.\n\nContact: ${site.email}. Call requests include a preferred date and time and require confirmation.`,faq([studioCoverageFaq]),links(['/services/','/pricing/','/results/','/locations/','/contact/']));
 if(page.children?.length)blocks.push(`## Explore\n\n${links(page.children)}`);
 if(kind==='privacy-policy'||kind==='terms')blocks.push(`This is a discovery summary. Read the complete current policy on the [canonical website page](${absoluteUrl(page.path)}).`);
 return blocks.filter(Boolean).join('\n\n');
}

export function pageMarkdown(page:SeoPage):string{
 return `# ${page.title}\n\n> ${page.description}\n\nCanonical page: ${absoluteUrl(page.path)}\nFormat: Markdown content guide, generated from the website’s editorial data. The HTML page is the complete reference.\n${page.published?`Published: ${page.published}\n`:''}${page.modified?`Updated: ${page.modified}\n`:''}\n${markdownBody(page)}\n\n---\n\n[Contact Wonderweb Studio](${absoluteUrl('/contact/')}) · [Content directory](${absoluteUrl('/content/index.md')})\n`;
}

export const markdownPages=new Map(seoPages.filter(p=>p.index!==false).map(p=>[markdownPath(p.path),p]));
export function markdownIndex(){return `# Wonderweb Studio content directory\n\nMarkdown guides to the public website. Canonical HTML pages remain the primary reference.\n\n${getPublicSeoPages().map(p=>`- [${p.title}](${absoluteUrl(markdownPath(p.path))}) — [Website page](${absoluteUrl(p.path)}): ${p.description}`).join('\n')}\n`;}
