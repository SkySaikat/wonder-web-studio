export type DecisionBrief = {
 answer:string; title:string; method:string;
 columns:[string,string,string]; rows:[string,string,string][];
};

/** Editorial decision aids, not paid rankings or claims of independent product testing. */
export const decisionBriefs:Record<string,DecisionBrief>={
 'google-ads-vs-meta-ads':{
  answer:'Start with the buying situation. Google Search is a useful first test when customers already search for your service. Meta can fit a visual offer that needs discovery and explanation. Run both when your budget, creative and follow-up can support separate tests.',
  title:'Google Ads vs. Meta Ads: choose by the job to be done',
  method:'This is Wonderweb’s planning framework for service businesses, not a universal ranking of platforms. Compare the same qualified-lead definition, service area and reporting period. Platform fees, media spend and production costs must be considered together.',
  columns:['Decision','Google Search Ads','Meta Ads'],
  rows:[
   ['Customer intent','Capture an existing search for a service, availability or estimate.','Introduce an offer, show the work and reconnect with interested people.'],
   ['A useful starting scenario','An electrical repair or roof inspection that people actively look for.','A planned renovation or visual service with strong project footage.'],
   ['Assets to prepare','Relevant search messaging, a useful landing page and call or form tracking.','A clear offer, a creative testing plan and a landing page or lead form.'],
   ['What to review','Search terms, service-area fit, qualified calls and booked opportunities.','Creative response, qualified inquiries, follow-up and booked opportunities.'],
   ['When to combine them','Use search feedback to refine the services and questions worth addressing.','Use approved project evidence to build familiarity around the same offer.'],
  ],
 },
 'website-management-vs-maintenance':{
  answer:'Choose maintenance when the main need is technical care. Choose management when pages, offers and content need ongoing attention. Most growing service businesses need both responsibilities covered, with one owner for the complete inquiry journey.',
  title:'Two kinds of care. Different responsibilities.',
  method:'Compare the work covered by a proposal rather than the package name. Hosting providers, CMS platforms and agencies use these labels differently. Ask for the actual responsibilities, response process and evidence that updates were checked.',
  columns:['Need','Maintenance','Management'],
  rows:[
   ['Technical health','Updates, monitoring and backup checks where relevant to the platform.','Prioritizes technical improvements with business and content needs.'],
   ['Content accuracy','Usually a separate editorial responsibility.','Keeps service details, offers, proof and contact information current.'],
   ['New service pages','Confirm whether development is included.','Plans and publishes the pages required by the agreed content roadmap.'],
   ['Inquiry journey','Checks the technical operation of forms and integrations.','Reviews clarity, qualification and what happens after an inquiry.'],
   ['Proof of completion','An update and issue log, with relevant verification.','A completed-work record linked to business priorities and next actions.'],
  ],
 },
 'choosing-roofing-seo-agency':{
  answer:'Choose a roofing SEO agency by its plan for your actual services, its ability to implement changes and the evidence behind its reporting. Compare proposals against the same seven checks below before judging them by page counts or a headline monthly fee.',
  title:'Seven checks to compare roofing SEO proposals',
  method:'This is a buyer’s checklist written by Wonderweb, an agency that offers SEO services. It is not an independent ranking of agencies. Apply the same checks to our proposal and every alternative, using current evidence supplied by each provider.',
  columns:['Check','Ask to see','Why it matters'],
  rows:[
   ['1. Business fit','A plan for your priority jobs, operating area and capacity.','Traffic should connect with work your team wants and can fulfill.'],
   ['2. Page strategy','A map of core services, useful supporting topics and existing URLs.','Each page needs a distinct customer purpose.'],
   ['3. Implementation','Named owners for technical fixes, publishing and launch checks.','Recommendations must turn into completed work.'],
   ['4. Relevant evidence','Case-study dates, starting points, metric definitions and attribution.','Calls, qualified leads and booked jobs measure different things.'],
   ['5. Business accuracy','A review step for locations, qualifications, project images and claims.','The published site must describe the real business.'],
   ['6. Reporting','Relevant discovery data connected with lead-quality feedback.','The next decision needs evidence beyond an activity count.'],
   ['7. Ownership and scope','Account access, deliverables, handover and the full investment.','Your team should understand what it receives and controls.'],
  ],
 },
 'website-redesign-checklist':{
  answer:'Before redesigning, inventory useful pages, clarify your offer, collect genuine proof, map redirects, test the entire inquiry journey and assign an owner after launch. Treat the existing site’s useful content and URLs as assets to improve.',
  title:'Your six-step redesign readiness check',
  method:'Use this as a practical preparation checklist. It is not a score or a guarantee of search performance. The evidence column gives your team something concrete to collect or verify before the corresponding stage is approved.',
  columns:['Step','What to do','Evidence to keep'],
  rows:[
   ['1. Establish the baseline','Inventory important pages and how people reach them.','A URL list, search data and inquiry records.'],
   ['2. Define the offer','Agree services, audiences and the next action.','An approved page map and content brief.'],
   ['3. Gather real proof','Collect usable projects, photographs and customer feedback.','Approved assets, permissions and source details.'],
   ['4. Map URL changes','Match changed URLs with relevant replacements.','A redirect map and checked internal links.'],
   ['5. Test conversion','Follow calls and forms through to actual receipt.','Mobile checks and delivered test inquiries.'],
   ['6. Assign ownership','Name who updates content and reviews performance.','Access records and the first post-launch review date.'],
  ],
 },
};

export function decisionMarkdown(slug:string){
 const b=decisionBriefs[slug];if(!b)return '';
 return `## The practical answer\n\n${b.answer}\n\n## ${b.title}\n\n${b.method}\n\n| ${b.columns.join(' | ')} |\n| --- | --- | --- |\n${b.rows.map(row=>`| ${row.join(' | ')} |`).join('\n')}`;
}
