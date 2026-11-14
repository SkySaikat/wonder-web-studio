import Link from 'next/link';
import {ArrowUpRight, Search, MessageCircle, ArrowDownLeft} from 'lucide-react';
import {BookCallButton} from './booking';

// Editorial illustration, not a dataset. No numerical axis, return multiplier or timeline promise.
const trend='M24 270 C42 270 52 263 68 267 S96 280 115 272 S141 268 160 273 S189 260 210 266 S242 266 260 260 C281 254 294 264 311 251 S340 245 356 250 S384 221 405 226 S430 232 453 217 S482 220 500 207 S526 186 545 193 S574 202 593 184 S619 178 641 161 S667 165 688 149 S715 143 735 129 S758 139 780 115 S805 109 825 94 S849 100 870 78 S900 80 930 49';
const steps=[
 {title:'Find the right demand',body:'Understand the services, searches and customers that matter to your business.'},
 {title:'Make every visit count',body:'Connect useful SEO content with clearer pages, stronger offers and relevant social stories.'},
 {title:'Build on the evidence',body:'Review search visibility, qualified inquiries and sales feedback to choose the next improvement.'},
];
export function GrowthChart(){
 return <section className="section momentum-section" id="search-growth" aria-labelledby="momentum-heading"><div className="container">
  <div className="momentum-heading"><div><span className="eyebrow">SEO AT THE CENTER. GROWTH IN VIEW.</span><h2 id="momentum-heading">Get found.<br/><em>Make it count.</em></h2><p>Turn relevant searches into a stronger source of opportunity. We connect technical SEO, useful content and your website with social media that keeps your business in the conversation.</p></div><div className="momentum-focus"><Search size={24} aria-hidden="true"/><span>SEO leads the plan.</span><MessageCircle size={24} aria-hidden="true"/><span>Social carries the story.</span></div></div>
  <figure className="momentum-card">
   <div className="momentum-card-heading"><div><span className="small-label">THE DIRECTION WE WORK TOWARD</span><h3>Stronger foundations.<br/>Building momentum.</h3></div><span className="momentum-legend"><i/>Search &amp; marketing momentum</span></div>
   <div className="momentum-plot">
    <span className="momentum-start">Our work begins<ArrowDownLeft size={25} aria-hidden="true"/></span>
    <svg viewBox="0 0 960 340" preserveAspectRatio="none" role="img" aria-labelledby="momentum-chart-title momentum-chart-description">
     <title id="momentum-chart-title">An illustrative upward marketing trend</title>
     <desc id="momentum-chart-description">An initially flat, uneven line marks the starting point. After work begins, a gradual upward trend develops with pauses and small setbacks. This is a conceptual illustration with no numerical scale, fixed period or measured revenue claims.</desc>
     <defs><linearGradient id="momentum-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8c70bd" stopOpacity=".24"/><stop offset="100%" stopColor="#8c70bd" stopOpacity=".02"/></linearGradient></defs>
     {[72,152,232,312].map(y=><line key={y} x1="24" x2="936" y1={y} y2={y} stroke="#e8e1ed" strokeDasharray="3 7" vectorEffect="non-scaling-stroke"/>)}
     <path d={`${trend} L930 312 L24 312 Z`} fill="url(#momentum-fill)"/>
     <line x1="260" x2="260" y1="195" y2="312" stroke="#b7a5ca" strokeDasharray="4 6" vectorEffect="non-scaling-stroke"/>
     <path d={trend} fill="none" stroke="#6d4c95" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
     <circle cx="260" cy="260" r="5" fill="#fcfafc" stroke="#6d4c95" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
     <circle cx="930" cy="49" r="6" fill="#6d4c95"/>
    </svg>
    <div className="momentum-axis" aria-hidden="true"><span>The starting point</span><span>Consistent work. Ongoing refinement.</span></div>
   </div>
   <figcaption>Illustrative trend only. Not client data or a revenue forecast.</figcaption>
  </figure>
  <div className="momentum-steps">{steps.map(step=><div key={step.title}><h3>{step.title}</h3><p>{step.body}</p></div>)}</div>
  <div className="momentum-actions"><BookCallButton service="SEO & local search">Discuss your SEO strategy</BookCallButton><Link href="/results/" className="text-link">Explore documented campaign work<ArrowUpRight size={17} aria-hidden="true"/></Link></div>
 </div></section>;
}
