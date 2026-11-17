import Link from 'next/link';
import {ArrowUpRight,Check,ShieldCheck} from 'lucide-react';
import {BookCallButton} from './booking';
import {leadGuarantee,studioPlatforms,studioPartners} from '@/lib/studio-commitment';
import Image from './content-image';

export function PartnerStrip({compact=false}:{compact?:boolean}){
 return <section className={`partner-strip${compact?' partner-strip-compact':''}`} aria-label="Our partner network"><div className={compact?'':'container'}>
  <div className="partner-strip-heading"><span className="small-label">OUR PARTNER NETWORK</span>{!compact?<p>Trusted connections.<br/><em>Connected to your growth.</em></p>:null}</div>
  <ul className="partner-logo-list">{studioPartners.map(p=><li key={p.name} className={`partner-logo partner-logo-${p.name.toLowerCase().replaceAll(' ','-')}`}><Image src={p.src} alt={p.alt} title={p.description} width={p.width} height={p.height} sizes="(max-width:600px) 40vw, 200px"/><span>{p.name}</span></li>)}</ul>
  <p className="partner-attribution">Shared across Wonderweb Studio and BuiltRight Digital. Google Partner status relates to Google Ads; SEO services are not verified or endorsed by Google.</p>
 </div></section>;
}

export function PlatformStrip({compact=false}:{compact?:boolean}){
 return <section className={`platform-strip${compact?' platform-strip-compact':''}`} aria-label="Platforms we work with">
  <div className={compact?'':'container'}><div className="platform-strip-heading"><span className="small-label">PLATFORMS WE WORK WITH</span>{!compact?<p>The tools you know. One team connecting the work.</p>:null}</div>
   <ul className="platform-wordmarks">{studioPlatforms.map(p=><li key={p.name}><Link href={p.href} aria-label={p.label}><span className={`platform-mark platform-${p.tone}`}>{p.name}</span>{!compact?<span className="platform-detail">{p.detail}</span>:null}</Link></li>)}</ul>
  </div>
 </section>;
}

export function LeadGuarantee({detailed=false}:{detailed?:boolean}){
 return <section className="section lead-guarantee-section" id={detailed?'lead-guarantee':undefined} aria-labelledby={detailed?'guarantee-title':'commitment-title'}>
  <div className="container lead-guarantee-layout">
   <div className="guarantee-copy"><span className="small-label"><ShieldCheck size={17} aria-hidden="true"/> THE WONDERWEB LEAD GUARANTEE</span><h2 id={detailed?'guarantee-title':'commitment-title'}>Your growth.<br/><em>Our commitment.</em></h2><p>{leadGuarantee.summary}</p><BookCallButton service="A campaign with the Wonderweb lead guarantee">Build my lead plan</BookCallButton>{!detailed?<Link className="guarantee-terms-link" href="/pricing/#lead-guarantee">Read the guarantee terms<ArrowUpRight size={16} aria-hidden="true"/></Link>:null}</div>
   <div className="guarantee-card"><span className="guarantee-card-top"><ShieldCheck size={29} aria-hidden="true"/> A CLEAR PROMISE</span><div className="guarantee-days"><strong>90</strong><span>days to reach your<br/>written lead target</span></div><div className="guarantee-plus" aria-hidden="true">+</div><div className="guarantee-days"><strong>30</strong><span>extra management days<br/>at no management fee if missed</span></div><p><Check size={16} aria-hidden="true"/> Eligible paid campaigns. Written targets. Ad spend separate.</p></div>
   {detailed?<div className="guarantee-details"><h3>The details behind the promise</h3>{[['Which campaigns qualify?',leadGuarantee.scope],['What counts as a qualified lead?',leadGuarantee.qualification],['What needs to stay in place?',leadGuarantee.conditions],['What happens if the target is missed?',leadGuarantee.remedy]].map(([title,body])=><details key={title}><summary>{title}</summary><p>{body}</p></details>)}</div>:null}
  </div>
 </section>;
}
