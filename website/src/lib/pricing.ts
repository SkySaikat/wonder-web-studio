import {plans} from './site';

export const pricingCurrency = 'USD';
export const formatPrice = (price:number) => `$${price.toLocaleString('en-US')}`;
export type ServicePrice = {
 id:string; service:string; name:string; group:'Search & advertising'|'Content & creative'|'Website support';
 price:number; cadence:'month'|'project'; description:string; includes:string[]; excludes:string;
};
/** These are Wonderweb scopes. Comparable existing prices are retained; creative/support scopes are studio proposals. */
export const servicePrices:ServicePrice[] = [
 {id:'local-search',service:'local-seo',name:'Local SEO',group:'Search & advertising',price:399,cadence:'month',description:'A focused local search foundation for one real business location.',includes:['One location and eligible business profile review','Service details, categories and consistency checks','One priority on-page review and monthly summary'],excludes:'Additional locations, original articles, paid listings and major technical repairs are separate.'},
 {id:'google-search',service:'google-ads',name:'Google Ads management',group:'Search & advertising',price:799,cadence:'month',description:'A focused search campaign for the services you want to sell.',includes:['One account and one market','Up to $5,000 monthly media spend managed','Campaign, search-term and lead-quality review'],excludes:'Ad spend, new landing-page builds, call-tracking subscriptions and specialist integrations are separate.'},
 {id:'meta-campaigns',service:'meta-ads',name:'Meta Ads management',group:'Search & advertising',price:1599,cadence:'month',description:'Facebook and Instagram campaigns with a clear creative testing plan.',includes:['One ad account and one market','Up to $5,000 monthly media spend managed','Up to four static creative concepts and monthly review'],excludes:'Ad spend, filming, organic posting, landing-page builds and third-party tools are separate.'},
 {id:'search-program',service:'seo',name:'Expanded SEO',group:'Search & advertising',price:2799,cadence:'month',description:'Technical priorities and useful content brought into one search program.',includes:['One website and one priority market','Up to ten priority page reviews and two content deliverables','Technical backlog, implementation allowance and search reporting'],excludes:'The proposal defines implementation hours. Rebuilds, paid placements and additional markets are separate.'},
 {id:'organic-social',service:'social-media-management',name:'Social media management',group:'Content & creative',price:799,cadence:'month',description:'A consistent publishing rhythm built around your business.',includes:['Eight posts adapted across two social profiles','Static design, captions and scheduling','One batch revision and monthly performance summary'],excludes:'Filming, paid ads, daily inbox replies and community management are separate. Eight posts is the total content allowance.'},
 {id:'editorial-content',service:'content-creation',name:'Content creation',group:'Content & creative',price:499,cadence:'month',description:'Original writing that answers the questions your buyers bring.',includes:['Two articles or service-page drafts, up to 1,000 words each','Brief and source review using your subject expertise','One revision round per draft'],excludes:'Expert interviews, regulated-topic specialist review, design and CMS publishing are separate.'},
 {id:'content-publishing',service:'content-management',name:'Content management',group:'Content & creative',price:399,cadence:'month',description:'Turn approved copy and assets into well-presented website updates.',includes:['Up to four supplied-content page updates on one CMS','Formatting, supplied images and internal-link checks','Publication review and a completed-work log'],excludes:'Original writing, bulk migrations, new templates and custom development are separate.'},
 {id:'graphic-design',service:'graphic-design',name:'Graphic design',group:'Content & creative',price:499,cadence:'month',description:'A regular supply of on-brand graphics for your next campaign.',includes:['Four static graphics from an agreed brief','One primary format and one resize per graphic','Two consolidated revision rounds'],excludes:'Brand identity systems, illustration commissions, print production, video and animation are separate.'},
 {id:'video-thumbnails',service:'thumbnail-design',name:'Thumbnail design',group:'Content & creative',price:199,cadence:'month',description:'Clear, recognizable covers for the videos you are ready to publish.',includes:['Four thumbnails using approved source assets','One alternative composition per thumbnail','One consolidated revision round'],excludes:'Video editing, photography and channel management are separate. Performance is not guaranteed.'},
 {id:'website-care',service:'website-management',name:'Website care & updates',group:'Website support',price:299,cadence:'month',description:'Keep one supported website current and its key journeys working.',includes:['Routine platform and inquiry-path checks','Up to two hours of routine edits each month','A request queue and monthly work summary'],excludes:'Hosting, licenses, incident recovery and larger development work are separate. No 24/7 support is included.'},
 {id:'development-project',service:'web-development',name:'Development project',group:'Website support',price:1500,cadence:'project',description:'A defined integration or a small piece of custom website functionality.',includes:['One agreed functionality brief','Implementation on an existing supported website','Testing and technical handoff'],excludes:'Full applications, redesigns, third-party subscriptions and ongoing maintenance are separately scoped.'},
 {id:'campaign-page',service:'landing-page-design',name:'Campaign landing page',group:'Website support',price:1500,cadence:'project',description:'One focused page that connects an offer to a useful inquiry.',includes:['One responsive page using approved copy and assets','One inquiry form and basic event setup','One consolidated design revision and launch checks'],excludes:'Advertising, copywriting, hosting, CRM subscriptions and advanced integrations are separate.'},
];

export const websiteProjects = [
 {id:'business-website',name:'Business website',tag:'A confident first impression',price:4500,installment:479,months:12,description:'A focused website for a clear service and an ambitious small business.',includes:['Up to five core pages','Responsive design and development','Inquiry form and foundational metadata','One consolidated design revision and handoff'],excludes:'Original copywriting, migrations and integrations are separate.'},
 {id:'custom-website',name:'Custom website',tag:'More room for your story',price:7500,installment:799,months:12,description:'A larger site with a considered structure and a reusable content system.',includes:['Up to ten core pages','Custom responsive layouts and a reusable page template','One standard CMS setup and inquiry form','Two design review rounds and launch checks'],excludes:'Complex migrations, original content production and paid integrations are separate.'},
 {id:'advanced-website',name:'Advanced website',tag:'Built around your operations',price:11500,installment:1199,months:12,description:'A larger content-led website with a defined integration requirement.',includes:['Up to fifteen core pages','Structured content templates and responsive development','One standard integration, subject to technical review','Two design review rounds and documented handoff'],excludes:'Custom applications, large data migrations and further integrations receive a tailored quote.'},
] as const;

export const paymentTerms = {
 general:'All starting prices are in USD, before applicable taxes. We confirm deliverables, timing, revisions and the final price in a written proposal before payment. Advertising spend and third-party subscriptions are separate.',
 installments:'The website payment option is a commitment to twelve monthly payments for the agreed project, not a cancel-anytime website subscription. Its total is higher than the pay-in-full price. The proposal confirms the payment schedule, handoff, ownership and any early settlement terms.',
 hosting:'Hosting and ongoing website care are quoted separately. Finishing the website payment plan does not automatically enroll you in another subscription.',
 retainers:'Recurring service scopes are reviewed with you before work starts. Your proposal specifies the start date, billing schedule, notice period and any minimum term; these differ from the twelve-payment website option.',
};

export const pricingFaqs:[string,string][] = [
 ['Can I hire you for just one service?','Yes. Choose a standalone service, a one-time project or a monthly partnership. The starting scopes above make the differences clear. We confirm the exact work before you commit.'],
 ['What is the difference between monthly marketing and website payments?',paymentTerms.installments+' Monthly marketing pays for the ongoing work and allowances in the selected service or partnership.'],
 ['Does the price include ad spend?','No. Media spend is paid separately to Google or Meta. Our management fee covers the agreed campaign work, testing and reporting. Third-party tools are also separate.'],
 ['What happens after the twelve website payments?',paymentTerms.hosting+' Your signed proposal records the final project handoff and ownership terms.'],
 ['Can I change scope or discuss a discount?','Yes. We review your priorities, existing assets and delivery requirements on a call. Any agreed discount or scope adjustment appears in the proposal. Extra work is quoted before it starts.'],
 ['Are revisions and requests unlimited?','No. Each starting scope has an allowance. A revision adjusts an agreed brief; a new concept, additional page, new platform or new integration may need a separate estimate.'],
 ['When do I pay, and can I use Stripe or PayPal?','First we agree on the scope and payment schedule. Then we send an invoice or approved payment link with the available payment methods. Selecting an option on this page does not charge you.'],
 ['Can I cancel a monthly service?',paymentTerms.retainers+' We explain these terms before you accept the proposal.'],
 ['Can you support more locations, platforms or languages?','Yes, with a tailored scope. The starting allowances cover the stated website, market, accounts or profiles. Additional work is itemized so you can compare the total investment.'],
 ['Are rankings, leads or sales guaranteed?','No. We commit to the agreed work and reporting. Outcomes depend on your market, offer, budget, website, follow-up and factors outside the studio’s control.'],
];

/** Shared by visible pricing, JSON-LD and regression checks. */
export function pricingOffers(){
 return [
  ...plans.map(p=>({id:`plan-${p.name.toLowerCase().replaceAll(' ','-')}`,name:`${p.name} monthly partnership`,price:p.price,cadence:'month' as const,description:`${p.description} ${p.items.join('; ')}. ${p.note}`,service:undefined as string|undefined,months:undefined as number|undefined})),
  ...servicePrices.map(p=>({...p,description:`${p.description} ${p.includes.join('; ')}. ${p.excludes}`,months:undefined as number|undefined})),
  ...websiteProjects.flatMap(p=>[
   {id:`${p.id}-upfront`,name:`${p.name} — pay in full`,price:p.price,cadence:'project' as const,description:`${p.description} ${p.includes.join('; ')}. ${p.excludes}`,service:'web-design',months:undefined as number|undefined},
   {id:`${p.id}-payments`,name:`${p.name} — twelve-payment option`,price:p.installment,cadence:'month' as const,description:`${p.months} monthly payments from ${formatPrice(p.installment)}; total ${formatPrice(p.installment*p.months)} USD. ${p.includes.join('; ')}. ${paymentTerms.installments} ${paymentTerms.hosting}`,service:'web-design',months:p.months},
  ]),
 ];
}
