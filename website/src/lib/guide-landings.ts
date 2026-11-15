import downloads from '../data/download-guides.json';

export type DownloadGuide = (typeof downloads)[number];
type Section = {title:string; body:string};
type Trade = {
  name:string; audience:string; industryPath:string; jobs:string; focus:string;
  journey:Section; campaign:Section; audit:Section; exclusions:Section; search:Section;
};

const trades:Record<string,Trade> = {
  electrician:{
    name:'Electrical', audience:'electrical contractors', industryPath:'/industries/electricians/',
    jobs:'panel upgrades, EV charger installations and electrical fault finding',
    focus:'Separate residential service calls from commercial installation projects. They need different qualification questions, evidence and follow-up.',
    journey:{title:'Follow an EV charger inquiry all the way through',body:'A homeowner finds your installation page, calls while your crew is on site and leaves a message. Who collects the property location, charger requirements and contact details? Map that handoff to the person arranging the estimate. A working phone button is only the start; the request needs a clear owner and a next step.'},
    campaign:{title:'Give panel upgrades and EV charging their own brief',body:'Someone planning a panel upgrade needs different information from a homeowner searching for a charger installer. Choose the work you want, explain the assessment process and use relevant project evidence. Keep commercial fit-outs separate when the buyer, project size and sales process differ.'},
    audit:{title:'Check a panel-upgrade lead against the call log',body:'Start with a recent inquiry attributed to your ads. Was it within your service area? Was it a panel upgrade you could quote, an unrelated appliance repair or an employment inquiry? Follow it to the estimate outcome. That comparison helps you identify whether the problem is targeting, page clarity or the handoff to your team.'},
    exclusions:{title:'“Electrician apprenticeship” and “EV charger cost” are different intents',body:'An apprenticeship search may be irrelevant to a customer-acquisition campaign. A charger-cost search could come from a homeowner planning an installation. Review the full phrase and the work you sell before excluding either. A business that also recruits electricians should keep hiring activity separate from its customer campaigns.'},
    search:{title:'Explain the electrical work before asking for the call',body:'An EV charger installation page should explain your service area, property assessment, installation process and what the homeowner should prepare. Panel upgrades and commercial work deserve their own useful explanations. Have your qualified team review technical and safety statements, and use approved project photos with context.'},
  },
  plumbing:{
    name:'Plumbing', audience:'plumbing businesses', industryPath:'/industries/plumbing/',
    jobs:'leak repairs, drain cleaning and water-heater replacements',
    focus:'An urgent repair and a planned replacement need different messages. Make actual availability, coverage and the booking process easy to understand.',
    journey:{title:'Find what happens to a missed repair call',body:'A customer with a leak taps your phone number from a mobile page. If the dispatcher is busy, does the call reach a monitored voicemail or a dead end? Check who returns it, what location and problem details are recorded, and whether the customer gets a realistic next step. Review the handoff before spending more to generate the same kind of call.'},
    campaign:{title:'Separate drain-cleaning demand from replacement work',body:'A blocked-drain inquiry and a planned water-heater replacement have different urgency, qualification and job value. Give each priority service a relevant ad and page. Describe only the hours and response options you can provide. Check that the dispatcher knows which offer the customer saw and which areas the campaign covers.'},
    audit:{title:'Reconcile a water-heater conversion with the actual inquiry',body:'A dashboard conversion might represent a tap on a phone number rather than a conversation. Compare a recent water-heater lead with the call or form record, property location and booking outcome. Identify duplicates, unsupported locations and requests your team does not handle before deciding whether that campaign needs more budget.'},
    exclusions:{title:'Treat DIY intent and price research differently',body:'A search for a plumbing apprenticeship or a repair manual may not fit your service campaign. “Water heater installation cost” can still describe a potential customer. Inspect complete search terms, not just individual words. If you offer both installation and repair, avoid a broad exclusion that accidentally removes one of those real services.'},
    search:{title:'Build pages around the customer’s plumbing problem',body:'A leak-repair page should explain what you handle, where you work and how to request help. A water-heater page can explain replacement assessments and the information needed for an estimate. Use genuine project examples and clear hours. Do not describe a location as an office or advertise round-the-clock service unless that is accurate.'},
  },
  roofing:{
    name:'Roofing', audience:'roofing companies', industryPath:'/industries/roofing/',
    jobs:'roof repairs, replacements and commercial roofing projects',
    focus:'Keep repairs, replacements and commercial work distinct. The right inquiry depends on the roof, the location and the work your crew can take on.',
    journey:{title:'Follow the inspection request beyond the form',body:'A homeowner sends photos and asks about a roof leak. Confirm that the request reaches the person who schedules inspections, that the property is in your service area and that the homeowner knows what happens next. Track whether an inspection was booked, an estimate was issued and the job was accepted. A form submission alone does not show the full journey.'},
    campaign:{title:'Do not make every roofing search a replacement campaign',body:'A repair search can mean a small localized problem, while a replacement inquiry may involve material choices and a larger estimate. Choose your campaign priorities around the work you actually want. Match the landing page to that scope, show relevant projects and explain the inspection process. Treat commercial roofing as its own brief when appropriate.'},
    audit:{title:'Trace a roofing lead to the estimate stage',body:'Choose a recent paid-search inquiry and check the roof type, location and requested work against the campaign brief. Did your team book an inspection, decline an unsuitable repair or receive a duplicate request? Compare these outcomes with the conversion record. Review the page and targeting before assuming all recorded leads have equal value.'},
    exclusions:{title:'A material search is not automatically wasted traffic',body:'“Roofing jobs” may describe employment intent, while “metal roof cost” may come from a homeowner considering replacement. A materials-only query can also be ambiguous. Review the search in context and check whether your company installs that material. Do not import a competitor’s exclusions without checking your own service mix.'},
    search:{title:'Make repair and replacement pages useful on their own',body:'Explain the roof types you work on, the inspection process and the locations you serve. Add permissioned project photos with the actual scope, rather than an unexplained gallery. Keep residential and commercial experience clear. Publish only supportable statements about warranties, qualifications and offers; avoid promises about insurance outcomes.'},
  },
  'general-contractor':{
    name:'General Contractor', audience:'general contractors', industryPath:'/industries/',
    jobs:'kitchen remodels, additions and whole-home renovations',
    focus:'Prioritize project fit over the sheer number of inquiries. Scope, property location, timing and the consultation process matter before an estimate can be useful.',
    journey:{title:'Turn a renovation inquiry into a useful consultation',body:'A homeowner sends a short “How much?” message about an addition. Your response needs to establish the property location, desired scope and planning stage without making the form exhausting. Assign the conversation to a named team member and explain how the consultation works. Track whether the inquiry becomes a suitable project, not just whether someone replied.'},
    campaign:{title:'Choose a project type before choosing a campaign message',body:'A kitchen renovation and a whole-home addition involve different planning questions and evidence. Start with the project category your team has capacity to deliver, then build a page with relevant completed work, scope expectations and a clear consultation process. Only publish budget or timeline examples with the assumptions that make them meaningful.'},
    audit:{title:'Evaluate the consultation, not just the submitted form',body:'Take a recent ad-attributed request and check project type, location and planning stage against your campaign brief. Was a suitable consultation booked, or did the request concern minor work your team does not take on? Review the sales notes with the conversion data. A cheaper form submission is not necessarily a better project opportunity.'},
    exclusions:{title:'Separate employment searches from project planning',body:'“Construction jobs” might be a recruitment query, while “home addition cost” could be the beginning of a valuable project. Words such as “small” or “repair” depend on the work your company accepts. Review each candidate against your project criteria and actual search history; use a separate recruitment campaign if hiring is also a goal.'},
    search:{title:'Show how a project moves from idea to estimate',body:'Create useful content for the renovations you take on: additions, kitchen remodels or larger transformations. Explain consultation, design responsibilities and the information needed before pricing. Pair project images with real scope and decisions. Service-area pages should offer meaningful local context rather than repeating the same paragraph with a different city name.'},
  },
};

export const guidePath = (slug:string) => `/guides/${slug}/`;

function contentFor(guide:DownloadGuide,trade:Trade){
  const kind=guide.slug.slice(guide.trade.length+1);
  switch(kind){
    case 'free-report': return {
      title:`${trade.name} Lead Generation & Free Checklist`,
      headline:'Find the gaps. Keep the next opportunity.',
      intro:`More traffic is useful when the next steps work. We help ${trade.audience} connect their website, inquiries and follow-up around ${trade.jobs}. Start by checking the journey a real prospect takes.`,
      service:'lead-generation', serviceLabel:'Lead generation',
      description:`Improve the inquiry journey for ${trade.audience}. Explore lead-generation support and get a free checklist to review your website, calls and follow-up.`,
      context:trade.journey,
      steps:[
        {title:'Start where the customer starts',body:`Pick one of your priority services: ${trade.jobs}. Read its page on your phone. Can a visitor understand the service, coverage and next step without hunting? Record friction before changing the whole website.`},
        {title:'Test the handoff',body:'Use a clearly identified internal test to check the phone and form routes. Confirm delivery, ownership and the promised response process. Look at the experience during and outside staffed hours. Fix broken routing before buying more traffic.'},
        {title:'Review the business outcome',body:'Keep a simple record of relevant inquiries, appointments, estimates and won work. Note reasons for poor fit or lost opportunities. Use those observations to decide whether the next improvement belongs on the page, in the campaign or in follow-up.'},
      ],
      dos:['Name the person responsible for each inquiry.','Make the next step specific to the job the customer needs.','Check actual response handling alongside traffic and lead totals.'],
      donts:['Send every service to an unexplained generic contact page.','Assume a successful form animation means the message arrived.','Increase traffic while missed calls and unassigned leads remain unresolved.'],
      help:['Review the website-to-inquiry journey and identify practical fixes.','Improve service pages, contact options and inquiry routing.','Agree on useful lead-quality reporting with your team.'],
      inside:['A practical review of the path from first visit to inquiry.','Checks to help uncover contact and follow-up gaps.','A way to record priorities before investing in more traffic.'],
      question:'Should we buy more leads before fixing the website?',
      answer:'Start by checking whether current inquiries reach the right person and receive a useful response. If that journey is broken, fixing it is a sensible first step. Budget decisions should also consider capacity, project fit and the outcomes of existing leads.',
      sources:[] as {title:string;url:string}[],
    };
    case 'google-ads-guide': return {
      title:`${trade.name} Google Ads & Free Field Guide`,
      headline:'The right search. A clearer next step.',
      intro:`Google Ads for ${trade.audience} starts with a clear service offer, an honest landing page and a useful inquiry process. We help connect those pieces around ${trade.jobs}, then review what happens after the click.`,
      service:'google-ads', serviceLabel:'Google Ads management',
      description:`Plan Google Ads for ${trade.audience}: service priorities, landing pages and inquiry follow-up. Explore our support and get the free field guide.`,
      context:trade.campaign,
      steps:[
        {title:'Write the service brief first',body:`List the jobs you want, the locations you can serve and your current capacity. ${trade.focus} Use that brief to decide which requests are useful and which should be outside the campaign scope.`},
        {title:'Match the promise to the page',body:'Let the ad and landing page explain the same service. Include relevant evidence, accurate hours and a clear contact option. Test the mobile page and make sure calls and forms reach the person handling that kind of work.'},
        {title:'Review actual inquiries',body:'Compare spend, search terms and recorded conversions with the inquiries your team received. Separate useful opportunities from duplicates and poor-fit requests. Use that feedback to refine the service message and campaign priorities.'},
      ],
      dos:['Choose a service and territory your team can actually support.','Use a landing page about the service named in the ad.','Review qualified inquiries and sales feedback with campaign data.'],
      donts:['Promote availability, offers or credentials you cannot support.','Treat every click on a phone number as a booked job.','Expand the budget without understanding the current lead quality.'],
      help:['Plan service-specific campaigns and suitable landing pages.','Set up and review inquiry measurement, calls and forms.','Manage ongoing campaign changes using search and sales feedback.'],
      inside:['Practical checks for the search-to-inquiry journey.','Ideas for aligning the offer, landing page and follow-up.','A focused starting point for reviewing your next campaign decisions.'],
      question:'Is this guide for a new campaign or an existing account?',
      answer:'Both. Use it to check the essentials before launching, or to find gaps in an existing campaign. If you need a compact review of an account that is already running, the separate Google Ads scorecard gives you ten checks to work through.',
      sources:[] as {title:string;url:string}[],
    };
    case 'google-ads-scorecard': return {
      title:`${trade.name} Google Ads Audit & Free Scorecard`,
      headline:'Before the next dollar, check the foundations.',
      intro:`Not sure what your Google Ads are really doing? We help ${trade.audience} review targeting, landing pages and inquiry handling. Use the free ten-point scorecard to turn unknowns into specific checks and assigned next steps.`,
      service:'google-ads', serviceLabel:'Google Ads review and management',
      description:`Audit Google Ads for ${trade.audience}. Check targeting, tracking and lead handling, explore our review service and get a free ten-point scorecard.`,
      context:trade.audit,
      steps:[
        {title:'Gather evidence, not impressions',body:'Have the account, recent inquiry records and landing pages available. Check which actions are counted as conversions, test the form and phone routing, and compare actual service coverage with the campaign brief. Mark an unknown as a task to investigate.'},
        {title:'Score the parts you can verify',body:`Work through the ten checks: service priorities, conversions, forms, phones, missed calls, search terms, geography, page relevance, claims and sales feedback. For ${trade.jobs}, confirm that each inquiry path fits that job type.`},
        {title:'Assign the next three actions',body:'Choose the most consequential gaps, give each one an owner and set a review date. Recheck the actual experience after making a change. The score is a working checklist, not a forecast of return or a reason to increase spend automatically.'},
      ],
      dos:['Support each passing check with an account setting or a real test.','Inspect actual location and job fit in the lead records.','Prioritize broken measurement and lost inquiries before fine tuning.'],
      donts:['Award points for settings nobody has verified.','Use a high checklist score as a performance guarantee.','Judge the account only by low cost per form submission.'],
      help:['Review account priorities, measurement and page relevance.','Investigate gaps between reported conversions and real inquiries.','Build an agreed action plan, with ongoing management if needed.'],
      inside:['Ten evidence-based checks with a score out of ten.','A short call test to inspect the customer experience.','Space to assign three actions, owners and review dates.'],
      question:'Does a score of ten mean my campaign is profitable?',
      answer:'No. It means the checklist items have been verified. Profitability depends on costs, lead quality, sales outcomes and the economics of the work. Use the scorecard to organize investigation, then review the business results separately.',
      sources:[] as {title:string;url:string}[],
    };
    case 'negative-keyword-vault': return {
      title:`${trade.name} Negative Keywords & Free Workbook`,
      headline:'Be deliberate about the searches you exclude.',
      intro:`A useful Google Ads campaign needs a considered exclusion list. We help ${trade.audience} review search intent against the work they sell, then maintain exclusions with care. Start with a free workbook and editable CSV for your trade.`,
      service:'google-ads', serviceLabel:'Google Ads search-term review',
      description:`Review negative keywords for ${trade.audience} without blindly blocking useful searches. Explore our Google Ads support and get the free workbook and CSV.`,
      context:trade.exclusions,
      steps:[
        {title:'Read the complete search',body:`Compare actual terms with your services, including ${trade.jobs}. Sort clear mismatches from ambiguous research queries. Check service fit, the page shown and any inquiry outcome before deciding what needs an exclusion.`},
        {title:'Check the match type and scope',body:'Search negative keywords can use broad, phrase or exact matching, with different exclusion behavior. Choose the narrowest suitable scope for the intended change. Review the current Google Ads guidance and check which campaigns a shared list would affect before applying it.'},
        {title:'Keep a change record',body:'Record the term, match type, reason, affected campaign and review date. Inspect subsequent search terms and useful inquiry volume. Treat the workbook as candidates to evaluate, not a universal block list, and review new variations as they appear.'},
      ],
      dos:['Evaluate each candidate against the services you actually sell.','Inspect match type and affected campaigns before applying exclusions.','Revisit changes using search terms and lead-quality feedback.'],
      donts:['Import the whole workbook without review.','Blanket-block words such as “cost” that may describe genuine buyers.','Assume one exclusion covers every related search variation.'],
      help:['Review search terms for irrelevant or ambiguous intent.','Maintain campaign-specific exclusions and a documented change log.','Connect search quality with landing-page relevance and inquiry feedback.'],
      inside:['Trade-specific keyword candidates to review, not blindly block.','An explanation of negative match types and service-fit checks.','An editable CSV companion for organizing the review.'],
      question:'Can I import every term in the CSV immediately?',
      answer:'Review it first. A term that is irrelevant for one contractor may describe a service another contractor sells. Check your actual searches, campaign scope and intended match type before applying candidates. The workbook is a starting point for a business-specific review.',
      sources:[{title:'Google Ads: about negative keywords',url:'https://support.google.com/google-ads/answer/2453972'}],
    };
    case 'seo-guide': return {
      title:`${trade.name} SEO Services & Free Field Guide`,
      headline:'Help the right customer find their next step.',
      intro:`Good SEO for ${trade.audience} connects useful service information with a website people can navigate. We help organize your pages, technical foundations and local presence around ${trade.jobs}. Start with practical checks in the free field guide.`,
      service:'seo', serviceLabel:'SEO services',
      description:`Explore SEO for ${trade.audience}: useful service pages, local visibility and inquiry paths. See how Wonderweb can help and get the free SEO field guide.`,
      context:trade.search,
      steps:[
        {title:'Choose useful service-page priorities',body:`Start with ${trade.jobs}, then decide which services need a fuller explanation. Answer real customer questions about scope, process, location and the next step. ${trade.focus}`},
        {title:'Check discovery and navigation',body:'Link important services from relevant pages and make the site easy to use on a phone. Review crawl and indexing issues with Search Console. Keep business details accurate and make sure a visitor can reach the appropriate service and contact route without a dead end.'},
        {title:'Measure relevance as well as visibility',body:'Review the searches and pages bringing visitors, then compare relevant inquiries with the services you want to grow. Improve incomplete explanations and confusing next steps. Prioritize useful content and technical fixes rather than treating a ranking position as the whole outcome.'},
      ],
      dos:['Write useful answers using your actual service knowledge and projects.','Keep services, coverage, credentials and contact information accurate.','Link related pages and check how visitors reach the right inquiry form.'],
      donts:['Publish near-identical city pages with no additional value.','Promise an office, emergency availability or experience you do not have.','Assume publishing a page guarantees indexing, rankings or leads.'],
      help:['Review technical SEO and build a practical improvement roadmap.','Plan and improve service content, internal links and local information.','Measure search visibility alongside relevant inquiry outcomes.'],
      inside:['Practical checks for a stronger local search presence.','A starting point for reviewing service information and inquiry paths.','Next steps to discuss with your team or marketing partner.'],
      question:'Will downloading the guide improve my rankings?',
      answer:'The guide helps you identify work to consider; the download itself does not change your website or rankings. Results depend on implementation, competition and other factors. We can help evaluate priorities and agree on a realistic SEO scope after reviewing your site.',
      sources:[{title:'Google Search Central: SEO starter guide',url:'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'}],
    };
    default: throw new Error(`No landing-page content for ${guide.slug}`);
  }
}

export const guideLandings=downloads.map(guide=>{
  const trade=trades[guide.trade];
  if(!trade)throw new Error(`Unknown guide trade: ${guide.trade}`);
  const content=contentFor(guide,trade);
  return {...content,guide,trade,path:guidePath(guide.slug),
    faqs:[
      [content.question,content.answer],
      ['What help does Wonderweb Studio provide?',`We support ${trade.audience} with ${content.serviceLabel.toLowerCase()}, relevant website improvements and inquiry measurement. We review your current setup and priorities, then agree on responsibilities, deliverables and pricing in a written scope.`],
      ['Is the guide free, and what happens after I request it?',`Yes. Complete the business-details form on this page to unlock the ${guide.pages}-page PDF${'csv' in guide?' and its CSV companion':''}. With your consent, our team may contact you about the guide and your marketing goals. Requesting it does not commit you to buying a service.`],
    ] satisfies [string,string][],
  };
});
export const guideLandingBySlug=new Map(guideLandings.map(page=>[page.guide.slug,page]));
export function relatedGuideLandings(slug:string){
  const current=guideLandingBySlug.get(slug);
  return current?guideLandings.filter(p=>p.guide.trade===current.guide.trade&&p.guide.slug!==slug):[];
}
