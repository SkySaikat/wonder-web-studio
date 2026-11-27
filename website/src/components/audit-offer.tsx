import Link from 'next/link';
import {InquiryForm} from './inquiry-form';
import {campaignStories} from '@/lib/projects';

type Story = (typeof campaignStories)[number];

/** Match a page to the closest published case study by trade words in its path or title. */
const tradeStories: [RegExp, string[]][] = [
 [/roof/i, ['roofing-local-search']],
 [/bath|shower|tub/i, ['bathroom-paid-search-efficiency', 'remodeling-search-two-year-results']],
 [/remodel|kitchen|home-?builder|contractor|cabinet|countertop|basement/i, ['remodeling-lower-lead-cost', 'remodeling-search-two-year-results']],
 [/window|door|glass/i, ['residential-glass-bookings']],
];

export function storiesFor(text: string, limit = 2): Story[] {
 const match = tradeStories.find(([pattern]) => pattern.test(text));
 const slugs = match ? match[1] : ['roofing-local-search', 'remodeling-lower-lead-cost'];
 return slugs.map(slug => campaignStories.find(s => s.slug === slug)).filter((s): s is Story => Boolean(s)).slice(0, limit);
}

/** Short proof + free-audit form placed at the end of guide, solution and location pages. */
export function AuditOffer({context, heading = 'Get a free website & marketing audit'}: {context: string; heading?: string}) {
 const stories = storiesFor(context);
 return <section className="section audit-offer" aria-labelledby="audit-offer-title"><div className="container audit-offer-grid">
  <div className="audit-offer-copy">
   <span className="priority-kicker">FREE · NO OBLIGATION</span>
   <h2 id="audit-offer-title">{heading}</h2>
   <p>Send us your website. We will review your Google visibility, website speed and how easily visitors can call or request a quote, then email you the three changes most likely to bring more leads.</p>
   <ul className="audit-offer-points"><li>Reviewed by a person, not an automated report</li><li>Specific fixes, not a generic checklist</li><li>Focused on US home-service and small businesses</li></ul>
   {stories.length ? <div className="audit-offer-proof"><strong>Recent client results</strong>{stories.map(s => <Link key={s.slug} href={`/results/${s.slug}/`}><b>{s.metric}</b><span>{s.metricLabel} · {s.label}</span></Link>)}</div> : null}
  </div>
  <div className="audit-offer-form"><InquiryForm variant="audit"/></div>
 </div></section>;
}
