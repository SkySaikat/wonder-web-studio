import {decisionMarkdown} from './decision-briefs';
import {homeFaqs} from './home-faqs';
import {leadGuarantee,leadGuaranteeFaq,guaranteeServices,studioPartners,studioPlatforms} from './studio-commitment';
import {serviceVisual} from './service-visuals';
import {caseSources} from './case-sources';
import {featuredImagePath} from './featured-path';
import downloadGuides from '../data/download-guides.json';
import {guideLandingBySlug,guidePath,relatedGuideLandings} from './guide-landings';
import {migratedByPath,publishedMigrations,migrationPageSize,migrationLibraryPath} from './migrated-content';
import {migratedDocument} from './migrated-body';
import {locationReading} from './location-reading';
import {articles} from './articles';
import {serviceReading,serviceArchiveReading,relatedArticles} from './service-reading';
import {servicePrices,customServicePrices,websiteProjects,formatPrice,paymentTerms,pricingFaqs} from './pricing';
import {caseStudyDetails} from './case-study-details';
import {services,industries,work} from './content';
import {markdownPath} from './content-paths';
import {industryDetails} from './industry-details';
import {locationAnswers,locationServiceAnswers} from './location-answers';
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
 if(migrated){const doc=migratedDocument(migrated);return `Original publication: ${migrated.originalPublished}\nWonderweb adaptation: ${migrated.published}\n\n${doc.editorialReview?.status==='rewritten'?`Rewritten for Wonderweb Studio on ${doc.editorialReview.reviewed} with expanded examples and current primary references.`:'Adapted from owner-supplied editorial material. Cost examples and platform details reflect the original context; check current quotes and documentation.'}\n\n${doc.markdown}\n\n## Put the ideas into practice\n\n${links([`/services/${migrated.service}/`,'/pricing/',...serviceReading(migrated.service).slice(0,3).map(a=>`/resources/${a.slug}/`)])}`;}
 const [kind,slug,service]=page.path.split('/').filter(Boolean);
 const blocks:string[]=[];
 if(kind==='guides'&&!slug)blocks.push('Free guides for home-service businesses. Explore the advice and services on each guide’s own page, then request the PDF through its business-details form.',...downloadGuides.map(g=>`## ${g.title}\n\n${g.description}\n\n[Explore this guide (${g.pages} pages)](${absoluteUrl(guidePath(g.slug))})`));
 if(kind==='guides'&&slug){
  const p=guideLandingBySlug.get(slug)!;
  blocks.push(p.headline,p.intro,sections([[p.context.title,p.context.body]]),p.trade.focus,sections(p.steps.map(s=>[s.title,s.body])),`## Make this a habit\n\n${bullets(p.dos)}`,`## Give these a miss\n\n${bullets(p.donts)}`,`## How Wonderweb Studio can help\n\n${bullets(p.help)}\n\nWe agree on responsibilities, deliverables and pricing in a written scope. The guide is yours to use whether or not you hire us.`,links([`/services/${p.service}/`,p.trade.industryPath]),`## Get your free guide: ${p.guide.title}\n\n${p.guide.pages}-page PDF${'csv' in p.guide?' and editable CSV':''}.\n\n${bullets(p.inside)}\n\n[Complete the business-details form to unlock your guide](${absoluteUrl(p.path)}#free-guide). With your consent, Wonderweb Studio may follow up about your guide and marketing goals.`,faq(p.faqs),`## Related guides\n\n${links(relatedGuideLandings(slug).map(p=>p.path))}`);
  if(p.sources.length)blocks.push(`## Platform references\n\n${bullets(p.sources.map(s=>`[${s.title}](${s.url})`))}`);
 }
 if(kind==='resources'&&slug){
  const a=articles.find(a=>a.slug===slug)!;
  blocks.push(`Author: Wonderweb Studio editorial team`,decisionMarkdown(slug),sections(a.sections.map(s=>[s.title,s.body+(s.links?.length?'\n\n'+s.links.map(l=>`[${l.label}](${absoluteUrl(l.href)})`).join(' · '):'')])),`## Your next-step checklist\n\n${bullets(a.checklist)}`,faq(a.faqs||[]));
  if(a.sources?.length)blocks.push(`## Further reading\n\n${bullets(a.sources.map(s=>`[${s.title}](${s.url})`))}`);
  blocks.push(`## Related guides\n\n${links(relatedArticles(a).map(a=>`/resources/${a.slug}/`))}`);
  blocks.push(`## Related services\n\n${links(a.related.map(s=>`/services/${s}/`))}`);
 }
 if(kind==='services'&&slug){
  const s=services.find(s=>s.slug===slug)!;const d=serviceDetails[slug];
  blocks.push(s.intro,`![${serviceVisual(slug).alt}](${absoluteUrl(serviceVisual(slug).src)})`,sections(s.sections.map(s=>[s.title,s.body])),`## Deliverables\n\n${bullets(s.deliverables)}`);
  blocks.push(`## Guides to ${s.title}\n\n${links(serviceReading(slug).map(a=>`/resources/${a.slug}/`))}`,`## Industry reading\n\n${links(serviceArchiveReading(slug).map(a=>a.path))}`,`## Pricing\n\n[Review starting prices, scope and payment options](${absoluteUrl('/pricing/')})`);
  if(d)blocks.push(`## Who this is for\n\n${d.fit}\n\n${d.outcome}`,sections(d.steps),sections(d.checks),`## Inputs\n\n${bullets(d.inputs)}`,`## Measurement\n\n${bullets(d.metrics)}`,faq([...s.faq,...d.faq,...(guaranteeServices.has(slug)?[leadGuaranteeFaq]:[])].filter(([question],index,items)=>items.findIndex(([candidate])=>candidate===question)===index)));
 }
 if(kind==='locations'&&slug){
  const l=locations.find(l=>l.slug===slug)!;const brief=marketBriefs[slug];
  blocks.push(`## Service area and delivery\n\nWonderweb Studio supports ${l.name}, ${l.region} businesses remotely. This page does not represent a local office.\n\nBusiness sectors: ${l.sectors.join(', ')}.\n\nCoverage discussion examples: ${l.areas.join(', ')}. Actual operating boundaries are agreed with the business; these examples do not imply local offices or clients.`);
  const specific=service&&locationServiceBriefs[`${slug}/${service}`];
  if(specific)blocks.push(sections([[specific[0],`${specific[1]}\n\n${specific[2]}`]]));
  else blocks.push(sections(l.sections),`## Starting priorities\n\n${sections(l.campaign)}`);
  blocks.push(`## ${brief.title}\n\nPlanning scenario, not a measured client result.\n\n${brief.scenario}\n\n${brief.decision}\n\n${brief.proof}`);
  blocks.push(`## Prepare your marketing brief\n\n${links(locationReading(slug,service).map(a=>`/resources/${a.slug}/`))}`);
  if(service){const s=services.find(s=>s.slug===service)!;blocks.push(`## ${s.title} scope\n\n${bullets(s.deliverables)}`,faq(locationServiceAnswers(slug,service)));}
  else blocks.push(faq(locationAnswers(slug)));
  blocks.push(`## Relevant services\n\n${links(l.services.map(s=>seoByPath.has(`/locations/${slug}/${s}/`)?`/locations/${slug}/${s}/`:`/services/${s}/`))}`);
 }
 if(kind==='industries'&&slug){
  const i=industries.find(i=>i.slug===slug)!;
  if(service){const d=industryDetails[slug];const s=services.find(s=>s.slug===service)!;const paragraphs=service==='seo'?d.seo:d.web;blocks.push(paragraphs.join('\n\n'),`## Service details\n\n${links([`/services/${service}/`,`/industries/${slug}/`])}`,faq(s.faq.slice(0,2)));}
  else blocks.push(sections(i.needs.map(n=>[n.title,n.body])),faq(i.questions));
 }
 if(kind==='results'&&slug){
  const s=campaignStories.find(s=>s.slug===slug)!;const d=caseStudyDetails[slug];
  if(caseSources[slug])blocks.push(`Originally delivered through BuiltRight Digital. [Original case study](${caseSources[slug]}). Shared with the business owner’s permission.`);
  blocks.push(`## Campaign context\n\n${s.period}\n\n${s.challenge}\n\n${s.approach}`,`## Reported outcomes\n\n${bullets(s.results.map(([v,l])=>`${v} ${l}`))}\n\n${s.context}`,d.intro,sections(d.chapters),`## Lessons\n\n${d.lessons}`,faq(d.questions),`## Further reading\n\n${links(d.reading.map(s=>`/resources/${s}/`))}`);
 }
 if(kind==='work'&&slug){const w=work.find(w=>w.slug===slug)!;blocks.push('challenge' in w?`## Brief\n\n${w.challenge}\n\n## Approach\n\n${w.approach}\n\n## Deliverables\n\n${bullets(w.deliverables)}`:'A creative exploration from the studio’s earlier portfolio; not a measured campaign result.');}
 if(page.path==='/pricing/')blocks.push(paymentTerms.general,sections(plans.map(p=>[p.name,`From ${formatPrice(p.price)} USD per month. ${p.description}\n\n${bullets(p.items)}\n\n${p.note}`])),sections(servicePrices.map(p=>[p.name,`From ${formatPrice(p.price)} USD per ${p.cadence}. ${p.description}\n\n${bullets(p.includes)}\n\n${p.excludes}\n\n[Explore the service](${absoluteUrl(`/services/${p.service}/`)})`])),sections(websiteProjects.map(p=>[p.name,`From ${formatPrice(p.price)} USD paid in full, or ${p.months} monthly payments from ${formatPrice(p.installment)} USD. Payment-plan total: ${formatPrice(p.installment*p.months)} USD.\n\n${bullets(p.includes)}\n\n${p.excludes}`])),sections(customServicePrices.map(p=>[p.name,`Scoped quote. ${p.description} ${p.scope}`])),paymentTerms.installments,paymentTerms.hosting,paymentTerms.retainers,faq(pricingFaqs));
 if(page.path==='/'||page.path==='/about/'||page.path==='/contact/')blocks.push(`## Studio facts\n\n${site.positioning} We provide websites, SEO, paid advertising, social media and creative content for small businesses and home-service companies. Founder, CEO and team lead: Saikat Chowdhury. Our team collaborates across locations and time zones.\n\nContact: ${site.email}. Call requests include a preferred date and time and require confirmation.`,faq(page.path==='/'?homeFaqs:[studioCoverageFaq]),links(['/services/','/pricing/','/results/','/locations/','/contact/']));
 if(page.children?.length)blocks.push(`## Explore\n\n${links(page.children)}`);
 if(kind==='payments')blocks.push('Payment follows an approved proposal and invoice. Confirm the amount, currency and reference with the studio before paying. This public guide contains no client-specific invoice or payment details. Contact info@wonderwebstudio.com for your invoice link.');
 if(kind==='privacy-policy'||kind==='terms')blocks.push(`This is a discovery summary. Read the complete current policy on the [canonical website page](${absoluteUrl(page.path)}).`);
 if(page.path==='/'||page.path==='/pricing/'||(kind==='services'&&guaranteeServices.has(slug)))blocks.push(sections([['Wonderweb lead guarantee',leadGuarantee.summary],['Eligibility',leadGuarantee.scope],['Qualified leads',leadGuarantee.qualification],['Client responsibilities',leadGuarantee.conditions],['The remedy',leadGuarantee.remedy]]));
 if(page.path==='/'||page.path==='/about/')blocks.push('## Our partner network\n\n'+studioPartners.map(p=>p.name).join(', ')+'. Shared across Wonderweb Studio and BuiltRight Digital. Google Partner status relates to Google Ads; SEO services are not verified or endorsed by Google.\n\nPlatforms we work with: '+studioPlatforms.map(p=>p.name).join(', ')+'.');
 return blocks.filter(Boolean).join('\n\n');
}

export function pageMarkdown(page:SeoPage):string{
 return `# ${page.title}\n\n> ${page.description}\n\nCanonical page: ${absoluteUrl(page.path)}\nPublisher: ${site.positioning}\nPrimary client market: United States. Service availability: worldwide.\nFeatured image: ${absoluteUrl(featuredImagePath(page.path))}\nFormat: Markdown content guide, generated from the website’s editorial data. The HTML page is the complete reference.\n${page.published?`Published: ${page.published}\n`:''}${page.modified?`Updated: ${page.modified}\n`:''}\n![${page.title} featured editorial cover](${absoluteUrl(featuredImagePath(page.path))})\n\n${markdownBody(page)}\n\n---\n\n[Contact Wonderweb Studio](${absoluteUrl('/contact/')}) · [Content directory](${absoluteUrl('/content/index.md')})\n`;
}

export const markdownPages=new Map(seoPages.filter(p=>p.index!==false).map(p=>[markdownPath(p.path),p]));
export function markdownIndex(){return `# Wonderweb Studio content directory\n\n${site.positioning}\n\nMarkdown guides to the public website. Canonical HTML pages remain the primary reference.\n\n${getPublicSeoPages().map(p=>`- [${p.title}](${absoluteUrl(markdownPath(p.path))}) - [Website page](${absoluteUrl(p.path)}): ${p.description}`).join('\n')}\n`;}
