import Image from './content-image';
import {ArrowUpRight,Layers3,Sparkles} from 'lucide-react';
import {BookCallButton} from './booking';
import {plans} from '@/lib/site';
import {CheckList} from './ui';

export function PricingCards(){
 const growth=plans[1];
 return <div className="studio-plans">
  <div className="studio-plan-feature">
   <div className="studio-plan-intro">
    <div className="studio-pass" aria-hidden="true">
     <Image src="/art/wonder-color-flow.webp" alt="" fill sizes="(max-width:700px) 85vw, 450px"/>
     <span className="studio-pass-brand">WONDERWEB<br/>STUDIO <ArrowUpRight size={26}/></span>
     <span className="studio-pass-word">Good things<br/><em>start here.</em></span>
     <span className="studio-pass-footer">DESIGN. BUILD. GROW.<ArrowUpRight size={22}/></span>
    </div>
    <div className="studio-plan-intro-copy"><span className="studio-kicker"><i/> YOUR NEXT CHAPTER</span><h3>A little wonder.<br/><em>A lot of possibility.</em></h3><p>Design, websites and marketing, brought together around your business.</p><BookCallButton className="text-link">Let’s find your fit</BookCallButton></div>
   </div>
   <article className="studio-featured-plan">
    <div className="studio-plan-heading"><span className="studio-kicker">MONTHLY PARTNERSHIP</span><span className="studio-plan-badge">A focused place to grow</span></div>
    <h3>{growth.name}<span aria-hidden="true"><Sparkles size={32}/></span></h3><p>{growth.description}</p>
    <div className="studio-plan-price"><span>Starting at</span><div><strong>${growth.price.toLocaleString('en-US')}</strong><span>/ month · USD</span></div></div>
    <div className="studio-plan-includes"><span className="studio-kicker">WHAT’S INCLUDED</span><CheckList items={growth.items}/></div>
    <p className="studio-plan-note">{growth.note}</p>
    <BookCallButton service="Growth plan" className="button studio-plan-cta"><span className="studio-cta-icon" aria-hidden="true"><ArrowUpRight size={26}/></span>Let’s talk growth</BookCallButton>
    <span className="studio-plan-promise">A conversation first. Your scope, agreed together.</span>
   </article>
  </div>
  <div className="studio-plan-options">{[plans[0],plans[2]].map((p,i)=><article className={`studio-option studio-option-${i}`} key={p.name}>
   <div className="studio-option-heading"><span className="studio-kicker">{p.tag}</span>{i===0?<Layers3 size={27} aria-hidden="true"/>:<Sparkles size={27} aria-hidden="true"/>}</div>
   <h3>{p.name}</h3><p>{p.description}</p><div className="studio-option-price"><span>From</span><strong>${p.price.toLocaleString('en-US')}</strong><span>/ month · USD</span></div>
   <CheckList items={p.items}/><p className="studio-plan-note">{p.note}</p><BookCallButton service={`${p.name} plan`} className="button">Discuss {p.name.toLowerCase()}</BookCallButton>
  </article>)}</div>
 </div>;
}
