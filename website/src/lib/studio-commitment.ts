export const leadGuarantee = {
 title: 'A lead guarantee. A team that stands behind it.',
 summary: 'If your eligible paid campaign misses its written qualified-lead target in its first 90 days, we provide 30 additional days of campaign management at no management fee. Your advertising spend remains separate.',
 scope: 'Available for paid campaigns whose signed proposal includes this guarantee, a qualified-lead target and the agreed media budget before launch. The 90-day period begins when the campaign launches with working tracking.',
 qualification: 'A qualified lead is a genuine, new inquiry that matches the services and service area agreed in your proposal and includes usable contact information. Duplicate inquiries, spam, vendors and job seekers do not count. Any additional qualification criteria are agreed before launch.',
 conditions: 'You maintain the agreed advertising budget, provide required access and timely approvals, keep conversion tracking working and follow the response and lead-recording process in your proposal. The campaign and lead records must be available for the 90-day review.',
 remedy: 'If those conditions are met and the target is missed, the remedy is one additional 30-day management period for the covered campaign at no management fee. Media spend, third-party subscriptions and other services remain payable. This is a management-fee waiver, not an advertising refund or a promise of sales, revenue, rankings or platform approval.',
} as const;

export const leadGuaranteeFaq:[string,string]=[
 'Do you offer a lead guarantee?',
 `Yes. ${leadGuarantee.summary} ${leadGuarantee.scope} You must maintain the agreed budget, access, approvals, tracking and lead follow-up. Qualification rules and the review process are recorded before launch. The remedy covers the campaign management fee only; sales and search rankings are not part of this guarantee.`,
];

export const guaranteeServices = new Set(['google-ads','meta-ads','microsoft-ads','local-services-ads','lead-generation']);

// Partner relationships and reuse of the supplied logo assets confirmed by the owner on 2026-11-18.
export const studioPartners = [
 {name:'Google Partner',src:'/partners/google-partner.png',width:320,height:320,alt:'Google Partner badge for Wonderweb Studio',description:'Google Partner badge in Wonderweb Studio’s advertising partner network.'},
 {name:'Meta',src:'/partners/meta-business-partner.png',width:1024,height:310,alt:'Meta logo in Wonderweb Studio’s partner network',description:'Meta logo representing Facebook and Instagram advertising in Wonderweb Studio’s partner network.'},
 {name:'Yelp',src:'/partners/yelp.png',width:1024,height:1024,alt:'Yelp logo in Wonderweb Studio’s partner network',description:'Yelp logo in Wonderweb Studio’s partner network for local business marketing.'},
 {name:'LeadPerfection',src:'/partners/leadperfection.png',width:1024,height:317,alt:'LeadPerfection lead management system logo in Wonderweb Studio’s partner network',description:'LeadPerfection lead management platform in Wonderweb Studio’s partner network.'},
] as const;

export const studioPlatforms = [
 {name:'Google',detail:'Ads · Search · Analytics',label:'Google Ads and search',href:'/services/google-ads/',tone:'google'},
 {name:'Meta',detail:'Facebook · Instagram',label:'Meta advertising on Facebook and Instagram',href:'/services/meta-ads/',tone:'meta'},
 {name:'Microsoft',detail:'Search advertising',label:'Microsoft Advertising',href:'/services/microsoft-ads/',tone:'microsoft'},
 {name:'Zoho',detail:'CRM · Connected workflows',label:'Zoho and connected business workflows',href:'/services/ai-workflow-automation/',tone:'zoho'},
 {name:'WordPress',detail:'Websites · Publishing',label:'WordPress website development',href:'/services/web-development/',tone:'wordpress'},
] as const;
