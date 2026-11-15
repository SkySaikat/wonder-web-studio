const families:Record<string,string>={
 'google-ads':'paid','microsoft-ads':'paid','digital-media-buying':'paid','lead-generation':'paid',
 'web-design':'web','web-development':'web','landing-page-design':'web','conversion-rate-optimization':'web',
 'seo':'search','local-seo':'local','local-services-ads':'local','franchise-marketing':'local','reputation-management':'local',
 'ai-search-optimization':'ai','ai-workflow-automation':'automation','website-management':'automation','content-management':'automation','email-marketing':'automation',
 'meta-ads':'social','linkedin-ads':'social','social-media-management':'social','content-creation':'creative','graphic-design':'creative','thumbnail-design':'creative',
};
const descriptions:Record<string,string>={
 paid:'Conceptual advertising artwork with a business owner, tablet and search panels.',
 web:'Responsive website screens and a chrome cursor in a vibrant cobalt studio composition.',
 search:'A search lens over a model neighborhood and search-result panels.',
 local:'A home, service-area map and lime location marker.',
 ai:'A chrome asterisk and connected answer cards illustrating AI search citations.',
 automation:'Connected message, calendar and task cards illustrating a business workflow.',
 social:'Conceptual artwork of a business owner planning content on a phone.',
 creative:'A creative studio composition of campaign frames, camera and vivid color swatches.',
};
export function serviceVisual(slug:string){const family=families[slug]||'creative';return {family,src:`/services/${family}-hero.webp`,alt:descriptions[family]};}
