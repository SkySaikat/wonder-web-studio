import type {ReactNode} from 'react';
import {ArrowUpRight,MessagesSquare} from 'lucide-react';
import Image from './content-image';
import {BookCallButton} from './booking';
import {Eyebrow,FAQ} from './ui';
import {site} from '@/lib/site';

export function FAQSection({eyebrow,title,intro,items}:{eyebrow:string;title:ReactNode;intro?:string;items:[string,string][]}){
 return <section className="section studio-faq-section"><div className="container studio-faq-layout">
  <div className="studio-faq-answers"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{intro?<p className="studio-faq-intro">{intro}</p>:null}<FAQ items={items}/></div>
  <aside className="studio-faq-call">
   <Image src="/art/wonder-citrus-flow.webp" alt="" fill sizes="(max-width:700px) 90vw, 420px"/>
   <div className="studio-conversation-mark" aria-hidden="true"><MessagesSquare size={42} strokeWidth={1.5}/><span>Let’s<br/><em>talk.</em></span></div>
   <div className="studio-faq-call-content"><span className="studio-kicker">GOOD QUESTIONS START GOOD THINGS</span><h3>Your next idea.<br/><em>Let’s talk it through.</em></h3><p>Bring your questions to a 30-minute introduction. We’ll find a useful place to start.</p><BookCallButton className="button">Request an intro call</BookCallButton><span className="studio-faq-confirmation">Choose a preferred time. We’ll confirm by email.</span><a className="studio-faq-email" href={`mailto:${site.email}`}><span>Prefer to write?<strong>{site.email}</strong></span><ArrowUpRight size={22}/></a></div>
  </aside>
 </div></section>;
}
