import {migratedEntries,migrationPageSize,migrationLibraryPath,isReleased,migrationSeoTitle} from './migrated-content';
import {editorialImages,caseImage} from './editorial-images';
import {services, industries, work} from './content';
import {articles} from './articles';
import {campaignStories, clientProjects} from './projects';
import {locations, locationServices} from './locations';
import {industryDetails} from './industry-details';
import {serviceDetails} from './service-details';

export type SeoPage = {
 path:string; title:string; description:string; label:string; category:string;
 type:'WebPage'|'AboutPage'|'ContactPage'|'CollectionPage';
 entity?:'Service'|'BlogPosting'|'Article'|'CreativeWork'|'OfferCatalog';
 serviceType?:string; area?:{name:string;kind:'City'|'State';region:string};
 audience?:string; images?:string[]; children?:string[]; index?:boolean;
 modified?:string; published?:string; availableAt?:string;
};
// Editorial update date, not the date of each build. No invented first-publication dates.
export const contentUpdated='2026-11-07';
const core:SeoPage[]=[
 {path:'/',modified:'2026-11-11',title:'Web Design & Digital Marketing Agency',description:'A fully remote web design and digital marketing agency serving businesses worldwide. Websites, SEO, ads and social for the US, Canada, Australia and beyond.',label:'Home',category:'The studio',type:'WebPage',images:['/art/wonder-blue-pink-grain.webp','/art/wonder-color-flow.webp','/art/wonder-citrus-flow.webp','/work/saikat.webp',...campaignStories.slice(0,2).map(s=>caseImage(s.slug).src),...clientProjects.slice(0,6).map(p=>p.image)]},
 {path:'/about/',modified:'2026-11-11',title:'About Wonderweb Studio',description:'Meet Wonderweb Studio, a fully remote agency serving the United States, Canada, Australia and businesses worldwide with websites, creative and marketing.',label:'About the studio',category:'The studio',type:'AboutPage',images:['/work/saikat.webp']},
 {path:'/contact/',modified:'2026-11-11',title:'Contact Wonderweb Studio',description:'Contact our remote team for websites, SEO, ads and social media. Serving the US, Canada, Australia and worldwide, with intro calls arranged in your time zone.',label:'Contact',category:'The studio',type:'ContactPage'},
 {path:'/services/',title:'Web Design & Digital Marketing Services',description:'Explore website design, development, SEO, Google Ads, Meta campaigns, social media and creative services for small businesses worldwide.',label:'Services',category:'Services',type:'CollectionPage',children:services.map(s=>`/services/${s.slug}/`)},
 {path:'/industries/',title:'Home Service & Small Business Marketing',description:'Explore digital marketing for roofing, HVAC, plumbing, electricians, remodelers and small businesses. Find a website and marketing plan for your industry.',label:'Industries',category:'Industries',type:'CollectionPage',children:industries.map(i=>`/industries/${i.slug}/`)},
 {path:'/locations/',title:'Digital Marketing Locations',description:'Website design, SEO, paid advertising and social media support for US service markets. Explore our local marketing guides and remote studio approach.',label:'Locations',category:'Locations',type:'CollectionPage',children:locations.map(l=>`/locations/${l.slug}/`)},
 {path:'/pricing/',title:'Website & Digital Marketing Pricing',description:'Explore starting prices: website projects from $4,500 and marketing plans from $1,199/month. Review scope, ad spend and tailored quotes with Wonderweb Studio.',label:'Pricing',category:'The studio',type:'WebPage',entity:'OfferCatalog',images:['/art/wonder-color-flow.webp','/art/wonder-citrus-flow.webp']},
 {path:'/work/',title:'Website Design & Development Portfolio',description:'Explore client websites, e-commerce projects, web platforms and creative studies from Wonderweb Studio and our founder’s selected portfolio.',label:'Our work',category:'Portfolio',type:'CollectionPage',children:[...campaignStories.map(s=>`/results/${s.slug}/`),...work.map(w=>`/work/${w.slug}/`)],images:[...campaignStories.map(s=>caseImage(s.slug).src),...work.map(w=>w.image)]},
 {path:'/results/',title:'Digital Marketing Case Studies & Results',description:'Read selected roofing and bathroom remodeling campaign stories, including the approach, historical outcomes and measurement context.',label:'Campaign results',category:'Results',type:'CollectionPage',children:campaignStories.map(s=>`/results/${s.slug}/`),images:campaignStories.map(s=>caseImage(s.slug).src)},
 {path:'/resources/',modified:'2026-11-08',title:'Small Business Marketing Blog & Guides',description:'Practical guides to website design, SEO budgets, Google Ads, social media content and ongoing website management for small and home-service businesses.',label:'Blog & guides',category:'Blog',type:'CollectionPage',children:articles.map(a=>`/resources/${a.slug}/`),images:articles.map(a=>editorialImages[a.slug].src)},
 {path:'/privacy-policy/',modified:'2026-11-11',title:'Privacy Policy',description:'Learn how Wonderweb Studio handles inquiry details, optional analytics, embedded media and your privacy choices when you use this website.',label:'Privacy policy',category:'Policies',type:'WebPage'},
 {path:'/terms/',title:'Website Terms',description:'Read Wonderweb Studio’s website terms, pricing context and project information. Service scope and payment terms are confirmed in a separate written proposal.',label:'Website terms',category:'Policies',type:'WebPage'},
 {path:'/payments/',title:'Client Payments',description:'Payment information for approved Wonderweb Studio proposals and invoices. Contact the studio to confirm your scope and payment arrangements.',label:'Client payments',category:'Client information',type:'WebPage',index:false},
];
const shortService=(slug:string,title:string)=>slug==='seo'?'SEO':title;
const articleTitles:Record<string,string>={
  'home-service-marketing-ideas':'9 Home Service Marketing Ideas',
 'google-ads-cost-home-services':'Google Ads Costs for Home Services',
 'roofing-seo-cost':'Roofing SEO Costs & Proposal Checklist',
 'website-management-vs-maintenance':'Website Management vs. Maintenance',
 'social-media-content-calendar':'Small Business Social Content Calendar',
 'website-redesign-checklist':'Business Website Redesign Checklist',
 'google-ads-vs-meta-ads':'Google Ads vs. Meta Ads for Small Business',
 'small-business-website-trust-signals':'11 Small Business Website Trust Signals',
 'social-media-post-ideas-small-business':'8 Social Media Post Ideas for Businesses',
 'questions-before-hiring-marketing-agency':'9 Questions to Ask a Marketing Agency',
 'website-conversion-checklist':'Website Conversion Checklist',
};
const migrationLibraries:SeoPage[]=['resources','solutions'].flatMap(kind=>Array.from({length:Math.ceil(migratedEntries.filter(e=>e.kind===kind).length/migrationPageSize)},(_,i)=>({path:migrationLibraryPath(kind,i+1),title:`${kind==='resources'?'Marketing Resource Library':'Industry Service Guides'}${i?` — Page ${i+1}`:''}`,description:`Browse practical ${kind==='resources'?'marketing resources':'industry service guides'} from Wonderweb Studio. Explore websites, search, advertising and content. Page ${i+1}.`,label:`${kind==='resources'?'Resources':'Industry guides'} · ${i+1}`,category:'Guide library',type:'CollectionPage' as const,modified:'2026-11-11'})));
export const seoPages:SeoPage[]=[...core,...migrationLibraries,
 ...migratedEntries.map(e=>({path:e.path,title:migrationSeoTitle(e),description:e.summary,label:e.title,category:e.category,type:'WebPage' as const,entity:(e.kind==='resources'?'BlogPosting':'Article') as 'BlogPosting'|'Article',modified:e.published,published:e.published,availableAt:e.published,images:[]})),
 ...services.map(s=>({path:`/services/${s.slug}/`,title:`${shortService(s.slug,s.title)} Services`,description:s.description,label:s.title,category:s.category,type:'WebPage' as const,entity:'Service' as const,serviceType:s.title,images:clientProjects.filter(p=>p.slug===serviceDetails[s.slug]?.project).map(p=>p.image)})),
 ...industries.map(i=>({path:`/industries/${i.slug}/`,title:`${i.title} Marketing Agency`,description:`Websites, SEO, ads and content for ${i.audience}. Explore a connected plan, clear deliverables and inquiry support from Wonderweb Studio.`,label:i.title,category:'Industry marketing',type:'WebPage' as const,entity:'Service' as const,serviceType:`${i.title} digital marketing`,audience:i.audience})),
 ...Object.keys(industryDetails).flatMap(slug=>['seo','web-design'].map(key=>{const i=industries.find(i=>i.slug===slug)!;const s=services.find(s=>s.slug===key)!;return {path:`/industries/${slug}/${key}/`,title:`${i.title} ${shortService(key,s.title)} Services`,description:`${s.title} for ${i.audience}. Explore deliverables, our process and a focused plan for your website and inquiries with Wonderweb Studio.`,label:s.title,category:`${i.title} marketing`,type:'WebPage' as const,entity:'Service' as const,serviceType:s.title,audience:i.audience};})),
 ...locations.map(l=>({modified:'2026-11-11',path:`/locations/${l.slug}/`,title:`${l.name} Web Design & Digital Marketing`,description:`Web design, SEO, paid ads and social media for ${l.name} small businesses. Explore a connected marketing plan delivered remotely by Wonderweb Studio.`,label:l.name,category:'Local marketing',type:'WebPage' as const,entity:'Service' as const,serviceType:'Web design and digital marketing',area:{name:l.name,kind:(l.kind==='city'?'City':'State') as 'City'|'State',region:l.region}})),
 ...locationServices.map(x=>{const l=locations.find(l=>l.slug===x.location)!;const s=services.find(s=>s.slug===x.service)!;return {modified:'2026-11-11',path:`/locations/${x.location}/${x.service}/`,title:`${l.name} ${shortService(s.slug,s.title)} Services`,description:`${shortService(s.slug,s.title)} for ${l.name} businesses, with clear scope, relevant landing pages and inquiry measurement. Plan your next step with Wonderweb Studio.`,label:s.title,category:`${l.name} marketing`,type:'WebPage' as const,entity:'Service' as const,serviceType:s.title,area:{name:l.name,kind:'City' as const,region:l.region}};}),
 ...work.map(w=>({...(w.slug==='dococlock'?{modified:'2026-11-11'}:{}),path:`/work/${w.slug}/`,title:`${w.label} — ${'challenge' in w?'Website Project':'Design Study'}`,description:'challenge' in w?w.description:`Explore ${w.label.toLowerCase()} from Wonderweb Studio’s creative portfolio. See the visual direction and discuss a design brief for your business.`,label:w.label,category:w.category,type:'WebPage' as const,entity:'CreativeWork' as const,images:[w.image]})),
 ...articles.map(a=>({path:`/resources/${a.slug}/`,title:a.seoTitle||articleTitles[a.slug]||a.title,description:a.summary,label:a.title,category:a.category,type:'WebPage' as const,entity:'BlogPosting' as const,modified:a.updated||contentUpdated,...(a.published?{published:a.published}:{}),images:[editorialImages[a.slug].src]})),
 ...campaignStories.map(s=>({modified:'2026-11-08',path:`/results/${s.slug}/`,title:({'roofing-local-search':'Roofing SEO: 53 Booked Appointments','bathroom-paid-search-efficiency':'Bathroom Ads: 43.66% Lower Cost per Lead','remodeling-lower-lead-cost':'Remodeling Ads: 59.19% Lower Lead Costs','remodeling-search-two-year-results':'Bathroom Marketing: Two-Year Lead Results'} as Record<string,string>)[s.slug],description:s.description,label:s.title,category:'Campaign case study',type:'WebPage' as const,entity:'Article' as const,images:[caseImage(s.slug).src]})),
];
export const seoByPath=new Map(seoPages.map(p=>[p.path,p]));
export function getPublicSeoPages(now:Date|number=new Date()){return seoPages.filter(p=>p.index!==false&&(!p.availableAt||isReleased({published:p.availableAt},now)));}
export const publicSeoPages=getPublicSeoPages();
export const seoImagePath=(path:string)=>`/seo/${path==='/'?'home':path.replace(/^\//,'').replace(/\/$/,'').replaceAll('/','--')}.png`;
