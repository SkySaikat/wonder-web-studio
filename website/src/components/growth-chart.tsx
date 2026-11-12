'use client';
import {useId,useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
// Drawing coordinates only. They are not traffic figures, percentages or return multiples.
const channels=[
 {name:'Website',color:'#4d3dc4',points:[17,19,15,18,16,20,19,24,22,29,26,34,41,37,48,45,58,54,67,64,77,72,85,89]},
 {name:'Facebook',color:'#367b93',points:[22,19,24,21,23,20,24,28,26,33,29,38,35,43,39,46,42,50,46,57,53,61,58,65]},
 {name:'Instagram',color:'#b65083',points:[12,16,13,17,15,18,23,21,29,26,36,33,43,39,49,54,47,60,55,67,63,73,68,78]},
 {name:'Pinterest',color:'#8b7840',points:[19,16,20,18,21,17,19,23,21,26,23,31,28,38,34,47,44,59,54,69,64,79,75,94]},
];
const phases=[
 {title:'Establish the starting point',body:'Review the website, agree the audience and organize measurement before changing the plan.'},
 {title:'Put the plan to work',body:'Improve priority pages, publish useful content and establish a consistent social rhythm.'},
 {title:'Learn through the uneven weeks',body:'Some ideas gain traction sooner. Review qualified visits and inquiries, then adjust the next round.'},
 {title:'Build on what earns its place',body:'Keep the work that helps the business. Revisit weaker channels instead of expecting every line to rise together.'},
];
export function GrowthChart(){
 const [selected,setSelected]=useState('All channels');const [month,setMonth]=useState(11);const id=useId().replace(/:/g,'');
 const shown=channels.filter(c=>selected==='All channels'||selected===c.name);const x=(i:number)=>66+i*34;const y=(v:number)=>325-v*2.6;const phase=phases[Math.min(3,Math.floor(month/3))];
 return <section className="section growth-section" aria-labelledby={`${id}-heading`}><div className="container">
  <div className="growth-heading"><div><span className="scenario-badge">ILLUSTRATIVE JOURNEY · NOT CLIENT RESULTS</span><h2 id={`${id}-heading`}>One connected strategy.<br/><em>More room to grow.</em></h2><p>Progress rarely follows a straight line. A better website and useful social content can support each other, with different channels finding their rhythm at different times.</p></div><div className="growth-target"><strong>12</strong><span>months.<br/>Keep learning.</span></div></div>
  <div className="growth-dashboard"><div className="growth-controls"><div><span className="small-label">A POSSIBLE PATH, NOT A FORECAST</span><h3>Small changes. Uneven weeks. New momentum.</h3></div><label>Channel<select aria-label="Chart channel" value={selected} onChange={e=>setSelected(e.target.value)}>{['All channels',...channels.map(c=>c.name)].map(c=><option key={c}>{c}</option>)}</select></label></div>
   <div className="growth-legend">{channels.map(c=><span key={c.name}><i style={{background:c.color}}/>{c.name}</span>)}</div>
   <div className="growth-chart-scroll"><svg className="growth-desktop-chart" viewBox="0 0 950 390" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
    <title id={`${id}-title`}>An illustrative year of website and social activity</title><desc id={`${id}-desc`}>Four uneven paths include dips, plateaus and different ending positions. An arrow marks where the studio work starts. The drawing has no numerical traffic or return scale and does not represent measured or expected results.</desc>
    <defs><marker id={`${id}-arrow`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1,1 L6,4 L1,7" fill="none" stroke="#42364d" strokeWidth="1.5"/></marker></defs>
    {[80,140,200,260,320].map(v=><line key={v} x1="66" y1={v} x2="866" y2={v} stroke="#e1dadf" strokeDasharray="3 6"/>)}
    <rect x={x(6)} y="65" width="594" height="260" fill="#d8c7e8" opacity=".16"/><line x1={x(6)} y1="83" x2={x(6)} y2="326" stroke="#aa94bb" strokeDasharray="5 6"/>
    <path d={`M172 51 Q235 35 ${x(6)} 100`} fill="none" stroke="#42364d" strokeWidth="1.6" markerEnd={`url(#${id}-arrow)`}/><text x="73" y="45" fontSize="16" fill="#42364d">We start here</text><text x="570" y="42" fontSize="13" fill="#776481">Review. Refine. Keep moving.</text>
    {shown.map(c=><g key={c.name}><polyline className="growth-line" points={c.points.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke={c.color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/><circle cx={x(month*2+1)} cy={y(c.points[month*2+1])} r="5" fill={c.color} stroke="#fff" strokeWidth="2"/></g>)}
    <line x1={x(month*2+1)} x2={x(month*2+1)} y1="70" y2="326" stroke="#4a3c54" opacity=".17"/>{Array.from({length:12},(_,i)=><text key={i} x={x(i*2+1)} y="351" fontSize="12" textAnchor="middle" fill="#756879">M{i+1}</text>)}<text x="66" y="380" fontSize="11" fill="#756879">Conceptual activity paths. No traffic totals or growth multiples are implied.</text>
   </svg>
   <svg className="growth-mobile-chart" viewBox="0 0 340 240" role="img" aria-label="Illustrative uneven website and social activity paths with no numerical return claims.">
    {[65,105,145,185].map(v=><line key={v} x1="16" x2="320" y1={v} y2={v} stroke="#e1dadf" strokeDasharray="3 5"/>)}<line x1="94" x2="94" y1="42" y2="192" stroke="#aa94bb" strokeDasharray="4 5"/><text x="20" y="22" fontSize="12" fill="#42364d">We start here</text><path d="M83 28 Q98 30 94 48" fill="none" stroke="#42364d" strokeWidth="1.4" markerEnd={`url(#${id}-arrow)`}/>
    {shown.map(c=><g key={c.name}><polyline points={c.points.map((v,i)=>`${16+i*13},${195-v*1.6}`).join(' ')} fill="none" stroke={c.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx={16+(month*2+1)*13} cy={195-c.points[month*2+1]*1.6} r="4" fill={c.color} stroke="white" strokeWidth="1.5"/></g>)}{[0,3,7,11].map(i=><text key={i} x={16+(i*2+1)*13} y="219" fontSize="10" textAnchor="middle" fill="#756879">M{i+1}</text>)}
   </svg></div>
   <div className="growth-scrubber"><label htmlFor={`${id}-month`}>Explore month {month+1}</label><input id={`${id}-month`} type="range" min="0" max="11" step="1" value={month} onChange={e=>setMonth(Number(e.target.value))}/><output aria-live="polite"><strong>{phase.title}.</strong> {phase.body}</output></div>
   <p className="growth-disclosure"><strong>An illustration of the process.</strong> These paths are a visual concept, not client data or a promise of increased traffic. Actual performance may grow, stay flat or decline as budgets, seasonality, offers and platforms change.</p>
  </div>
  <div className="growth-phases">{[['01 / ESTABLISH','Understand the starting point and agree what useful progress means.'],['02 / CONNECT','Bring the website, content and social channels into the same plan.'],['03 / REFINE','Review qualified inquiries and use the evidence to decide what comes next.']].map(([title,body])=><div key={title}><span>{title}</span><p>{body}</p></div>)}</div><Link href="/results/" className="text-link">Read documented campaign stories<ArrowUpRight size={17} aria-hidden="true"/></Link>
 </div></section>;
}
