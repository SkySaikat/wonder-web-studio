'use client';

import {useState} from 'react';
import Image from '@/components/content-image';
import {ArrowUpRight,Check,Search,MousePointer2,Phone,BarChart3} from 'lucide-react';
import type {ServiceDetail} from '@/lib/service-details';

export function ServiceHeroImage({title,detail}:{title:string;detail:ServiceDetail}) {
 const search=detail.visual==='search'||title.includes('Ads');
 return <div className={`service-scene scene-${detail.visual}`}>
  <div className="scene-orbit" aria-hidden="true"/>
  <Image className="scene-person" src="/work/saikat.webp" alt="Saikat Chowdhury, Wonderweb Studio founder and team lead" width={520} height={640} sizes="(max-width:750px) 80vw, 38vw" priority/>
  <div className="scene-card scene-top"><span className="scene-icon"><Search size={19}/></span><div><small>{search?'ILLUSTRATIVE SEARCH PREVIEW':'YOUR NEXT OPPORTUNITY'}</small><strong>{search?'roof repair near me':detail.tiles[0]}</strong><span>{search?'Your service. Your market. A clear next step.':`${title}, with a clear purpose.`}</span></div></div>
  <div className="scene-card scene-side"><span className="scene-icon"><Check size={19}/></span><div><small>THE DETAILS, CONNECTED</small><strong>{detail.tiles[1]}</strong></div></div>
  <div className="scene-card scene-bottom"><div><small>REAL PEOPLE. SHARED AMBITION.</small><strong>Your team at Wonderweb.</strong><span>Saikat Chowdhury · Founder & team lead</span></div><ArrowUpRight/></div>
 </div>;
}

export function ServiceDemo({title,detail,slug}:{title:string;detail:ServiceDetail;slug:string}) {
 const [step,setStep]=useState(0);
 const search=detail.visual==='search'||['google-ads','microsoft-ads','local-services-ads','lead-generation'].includes(slug);
 const labels=search?['Find the right search','Make the connection','Review the inquiry']:detail.tiles;
 return <div className="service-demo">
  <div className="demo-controls" aria-label={`${title} walkthrough`}>{labels.map((label,i)=><button key={label} type="button" aria-pressed={step===i} onClick={()=>setStep(i)}><span>0{i+1}</span>{label}</button>)}</div>
  <div className="demo-stage" key={step}>
   {search&&step===0?<><div className="demo-search"><Search size={21}/><span className="typed-query">roof repair near me</span></div><div className="demo-result"><small>{slug.includes('ads')?'Sponsored · ':''}Your company · your service area</small><strong>Roof repair from a team you can trust</strong><p>Clear service details. Relevant local work. An easy way to request an estimate.</p><span><Phone size={15}/> Request an estimate <ArrowUpRight size={15}/></span></div><div className="demo-ghost"/><div className="demo-chip"><Check size={16}/> Match the service to the search</div></>:step===1?<><div className="demo-browser"><span>YOUR BUSINESS / {title.toUpperCase()}</span><h3>{detail.label}</h3><p>{detail.tiles[1]}</p><div className="demo-mini-grid"><i/><i/><i/></div><span className="demo-faux-button">A clear next step <ArrowUpRight size={17}/></span><MousePointer2 className="demo-pointer" size={35}/></div><div className="demo-chip"><Check size={16}/> One connected customer journey</div></>:<><div className="demo-report"><BarChart3 size={28}/><h3>{step===2?'Make the next decision clearer.':detail.label}</h3>{(step===2?detail.metrics.slice(0,3):detail.tiles).map((m,i)=><div key={m}><span>{m}</span><span className="demo-check"><Check size={15}/></span></div>)}</div><div className="demo-chip"><Check size={16}/> {step===2?'Review, learn and improve':'Built around your business'}</div></>}
  </div><p className="demo-caption">Illustrative walkthrough. Search placement and results are not guaranteed.</p>
 </div>;
}

export function InvestmentPlanner(){
 const [budget,setBudget]=useState(3000);const [cost,setCost]=useState(150);const [close,setClose]=useState(20);
 const leads=budget/cost; const jobs=leads*close/100;
 return <div className="investment-planner"><div className="planner-heading"><BarChart3/><span>EXPLORE THE ECONOMICS</span></div><h3>What does a useful<br/>inquiry mean to you?</h3><p>Change the assumptions to see how media spend, lead cost and sales follow-up connect.</p><label>Monthly media budget <strong>${budget.toLocaleString('en-US')}</strong><input type="range" min="1000" max="20000" step="500" value={budget} onChange={e=>setBudget(Number(e.target.value))}/></label><label>Assumed cost per inquiry <strong>${cost}</strong><input type="range" min="50" max="500" step="10" value={cost} onChange={e=>setCost(Number(e.target.value))}/></label><label>Assumed close rate <strong>{close}%</strong><input type="range" min="5" max="50" step="5" value={close} onChange={e=>setClose(Number(e.target.value))}/></label><div className="planner-totals" aria-live="polite"><div><strong>{leads.toFixed(0)}</strong><span>modeled inquiries</span></div><div><strong>{jobs.toFixed(1)}</strong><span>modeled customers</span></div><div><strong>${Math.round(budget/jobs).toLocaleString('en-US')}</strong><span>media cost / customer</span></div></div><small>Planning example only, not a forecast. Excludes agency fees, delivery costs and taxes. Inquiries = budget ÷ cost per inquiry; customers = inquiries × close rate.</small></div>;
}
