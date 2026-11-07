import {BookCallButton} from './booking';
import { plans } from '@/lib/site';
import { CheckList } from './ui';
export function PricingCards(){return <div className="pricing-grid">{plans.map((p,i)=><article className={`price-card ${i===1?'featured':''}`} key={p.name}>{i===1?<span className="plan-highlight">A focused place to grow</span>:null}<span className="small-label">{p.tag}</span><h3>{p.name}</h3><p>{p.description}</p><div className="price"><span>Starting at</span><strong>${p.price.toLocaleString('en-US')}</strong><span>/ month · USD</span></div><BookCallButton service={`${p.name} plan`}>Discuss {p.name.toLowerCase()}</BookCallButton><CheckList items={p.items}/><small>{p.note}</small></article>)}</div>}
