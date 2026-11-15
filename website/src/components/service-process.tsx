'use client';
import {MessagesSquare,PenTool,Rocket,ArrowUpRight,Check} from 'lucide-react';
import {useEntrance} from './use-entrance';

const stages=[{Icon:MessagesSquare,label:'Find the focus',note:'A shared starting point'},{Icon:PenTool,label:'Make it happen',note:'Thoughtful, connected work'},{Icon:Rocket,label:'Learn & move forward',note:'A clear next decision'}];
export function ServiceProcess({steps}:{steps:[string,string][]}){
 const {ref,entered}=useEntrance<HTMLDivElement>();
 return <div ref={ref} className="process-story" data-entered={entered}>
  {steps.map(([title,body],i)=>{const {Icon,label,note}=stages[i%stages.length];return <article key={title} className={`process-story-card process-tone-${i}`} style={{'--step-delay':`${i*.18}s`} as React.CSSProperties}>
   <div className="process-story-top"><span className="process-symbol"><Icon size={27}/></span><span className="process-step-number">0{i+1}</span><ArrowUpRight size={21}/></div>
   <span className="process-stage-label">{label}</span><h3>{title}</h3><p>{body}</p><div className="process-story-note"><Check size={14}/>{note}</div>
  </article>})}
 </div>;
}
