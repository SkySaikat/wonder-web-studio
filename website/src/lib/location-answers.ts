import {locations} from './locations';
import {localWebBriefByLocation} from './local-growth-content';
import {services} from './content';
import {serviceDetails} from './service-details';
export function locationAnswers(slug:string):[string,string][]{
 const l=locations.find(l=>l.slug===slug)!;
 return [[`Can you work with our team in ${l.name}?`,`Yes. Wonderweb Studio works with ${l.name} businesses through our fully remote team. You get agreed review times, clear communication and coordinated account access, with the work managed around your business and time zone.`],[`Can you help a small business in ${l.name}?`,'Yes. We scope the work around the business, its customers and its actual service area. A focused website, search or campaign project can be a practical starting point.'],['How much should we budget?','Website projects start at $4,300 for a defined scope. Monthly partnerships start at $3,000; focused services are priced separately. Media spend and third-party costs are separate. Final scope and any discount are discussed on a call.'],['Can you strengthen our search presence in the areas we serve?','Yes. We build useful location and service pages around your actual coverage, the services customers need and the evidence your business can provide. We connect these pages through clear internal links and track relevant visibility and inquiries.'],[`How do you choose the first marketing channel for a ${l.name} business?`,'We review the offer, website, available evidence and ability to handle inquiries. The first scope can focus on a website improvement, search work or a paid test; a large bundle is not automatically the right starting point.'],['What will our team need to provide?','We agree access and a review contact, then collect approved service details, real coverage, project material and any available inquiry records. Your team approves business facts before publication.'],['Can you work with our existing website?','Yes. We can improve an existing website, keeping useful content and important URLs while addressing the gaps in design, search visibility and the inquiry journey. We review the platform and agree on the right improvements before work begins.']];
}

export function locationServiceAnswers(locationSlug:string,serviceSlug:string):[string,string][]{
 const location=locations.find(l=>l.slug===locationSlug)!;
 const service=services.find(s=>s.slug===serviceSlug)!;
 const webBrief=serviceSlug==='web-design'&&localWebBriefByLocation.get(locationSlug);
 if(webBrief)return [...webBrief.faq,
  [`How much does a website for a ${location.name} business cost?`,'Our pricing page lists current website project options and monthly support separately. Your proposal specifies the core service pages, content, functionality, integrations and review process needed for your business.'],
  ['Will the website include SEO foundations?','Yes. We include useful page structure, titles, descriptions, internal links, relevant image alternatives, canonical URLs and an XML sitemap. Ongoing SEO is separately scoped. Search engines decide which pages to index and where they rank.'],
  ['How does the remote project work?','We agree a brief, access, a review contact and meeting times with your team. You approve business facts and project content; we coordinate design, development, testing and handoff.'],
 ];
 return [
  [`Can you manage ${service.title.toLowerCase()} remotely for a ${location.name} business?`,'Yes. We agree access, review times and communication with your team. Your staff supplies the operational details and approves factual claims about the business.'],
  ...serviceDetails[serviceSlug].faq,
  ['What happens after the first call?','We review your current situation and recommend a defined starting scope. The proposal identifies deliverables, responsibilities, pricing and the review process before you commit.'],
 ];
}
