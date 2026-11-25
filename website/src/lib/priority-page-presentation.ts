/** Presentation for the three pages selected from the November 2026 Search Console review. */
export type EditorialIllustration = {afterId:string;src:string;alt:string;caption:string;width:number;height:number};
export type PriorityPresentation = {
  intent:'service'|'guide'; serviceType:string; audience:string;
  action:string; service:string; actionTitle:string; actionText:string;
  highlights:string[]; illustrations:EditorialIllustration[];
  related:{href:string;label:string}[];
};
export const priorityPagePresentation:Record<string,PriorityPresentation> = {
  '/solutions/appliance-repair-marketing/':{
    intent:'service',serviceType:'Appliance repair digital marketing',audience:'US appliance repair business owners',
    action:'Plan my repair marketing',service:'Google Ads',
    actionTitle:'Build a plan for the repair jobs you want.',
    actionText:'Bring your website, service ZIP codes and the appliance types you repair. We’ll discuss the gaps and define the next scope with you.',
    highlights:['Search, website and follow-up together','Your repair services. Your coverage.','Clear scope before you commit'],
    illustrations:[{afterId:'lead-qualification',src:'/editorial/buyer-guides/appliance-lead-journey.webp',alt:'Appliance repair lead journey: local search, service page, appliance and ZIP-code check, then dispatch follow-up.',caption:'A planning example: count a suitable repair inquiry separately from an answered call or completed job.',width:1200,height:800}],
    related:[{href:'/solutions/appliance-repair-google-ads/',label:'Appliance repair Google Ads'},{href:'/solutions/appliance-repair-seo/',label:'Appliance repair SEO'},{href:'/services/web-design/',label:'Website design and development'},{href:'/resources/qualified-lead-tracking-google-ads/',label:'Track an ad lead beyond the first submission'}],
  },
  '/solutions/landscaping-ppc-management/':{
    intent:'service',serviceType:'Landscaping PPC and Google Ads management',audience:'US landscaping and grounds-maintenance business owners',
    action:'Plan my landscaping ads',service:'Google Ads',
    actionTitle:'Build campaigns around the work your crews want.',
    actionText:'Bring your service area, project priorities and current account if you have one. We’ll discuss a focused campaign scope and a practical way to judge lead quality.',
    highlights:['Separate maintenance from installations','Connect search terms to real inquiries','Ad spend and management clearly separated'],
    illustrations:[{afterId:'campaign-structure',src:'/editorial/buyer-guides/landscaping-campaign-map.webp',alt:'Landscaping campaign map separating recurring maintenance, installation projects and commercial grounds contracts into matching inquiry paths.',caption:'An example campaign structure. The services, budgets and destinations are chosen around your actual business.',width:1200,height:800}],
    related:[{href:'/services/google-ads/',label:'Google Ads management scope'},{href:'/services/landing-page-design/',label:'Landing-page design'},{href:'/solutions/landscaping-reputation-management/',label:'Landscaping reputation management'},{href:'/resources/google-ads-search-term-review/',label:'Review search terms without blocking good leads'}],
  },
  '/resources/custom-home-builder-seo-tips/':{
    intent:'guide',serviceType:'SEO for custom home builders',audience:'US custom home builders and design-build businesses',
    action:'Discuss my builder website',service:'SEO',
    actionTitle:'Turn your craftsmanship into a clearer online presence.',
    actionText:'Share your website, build areas and the projects you want more of. We’ll discuss the pages, evidence and inquiry journey your next SEO scope should address.',
    highlights:['Nine practical priorities','Project proof before page volume','Measure suitable build inquiries'],
    illustrations:[{afterId:'website-structure',src:'/editorial/buyer-guides/builder-site-structure.webp',alt:'Custom home builder website structure connecting build types, genuine service areas, detailed project stories and a consultation request.',caption:'A suggested information structure, not a requirement to create a page for every city or architectural style.',width:1200,height:800}],
    related:[{href:'/solutions/home-builder-marketing/',label:'Home-builder marketing services'},{href:'/services/seo/',label:'Our SEO service scope'},{href:'/services/web-design/',label:'Website design for service businesses'},{href:'/guides/general-contractor-seo-guide/',label:'Get the free contractor SEO field guide'}],
  },
};
