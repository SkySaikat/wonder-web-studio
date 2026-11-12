import Link from 'next/link';
import {ArrowUpRight,Check,Compass,Layers3,MousePointer2,Sparkles} from 'lucide-react';
import {BookCallButton} from './booking';
import {servicePrices,formatPrice} from '@/lib/pricing';
import {plans} from '@/lib/site';
const groups=['Search & advertising','Content & creative','Website support'] as const;
export function StandalonePricing(){return <div className="standalone-catalog">{groups.map((group,i)=><div className="price-service-group" key={group}>
 <div className="price-group-heading"><span aria-hidden="true">{i===0?<Compass/>:i===1?<Sparkles/>:<MousePointer2/>}</span><h3>{group}</h3><p>{i===0?'Be found. Make the next step clear.':i===1?'A recognizable voice. A reliable rhythm.':'Build something useful. Keep it working.'}</p></div>
 <div className="price-service-grid">{servicePrices.filter(p=>p.group===group).map(p=><article className="price-service-card" key={p.id} id={`price-${p.id}`}>
  <span className="price-cadence">{p.cadence==='month'?'ONGOING SERVICE':'ONE-TIME PROJECT'}</span><h4>{p.name}</h4><p>{p.description}</p><div className="catalog-price compact"><span>From</span><strong>{formatPrice(p.price)}</strong><span>USD / {p.cadence}</span></div>
  <ul>{p.includes.map(item=><li key={item}><Check size={16} aria-hidden="true"/><span>{item}</span></li>)}</ul><p className="catalog-exclusions">{p.excludes}</p>
  <div className="catalog-actions"><BookCallButton icon={false} service={p.name} className="button">Discuss scope<ArrowUpRight size={16} aria-hidden="true"/></BookCallButton><Link href={`/services/${p.service}/`}>Explore the service</Link></div>
 </article>)}</div></div>)}</div>;}
const comparison:[string,string,string,string][]=[
 ['Monthly starting fee',...plans.map(p=>`${formatPrice(p.price)} USD`)] as [string,string,string,string],
 ['Website care and routine edits','Up to 2 hours','Up to 2 hours','Up to 2 hours'],
 ['Local profile / on-page review','Included','Included','Included'],
 ['Content deliverables per month','1','2 total','4 total'],
 ['Paid channel management','Separate','Google OR Meta','Google AND Meta'],
 ['Monthly media spend managed','Not included','Up to $5,000','Up to $10,000 combined'],
 ['Landing-page improvement','Separately scoped','1 per month','Separately scoped'],
 ['Organic social posts','Separate','Separate','8 posts across 2 profiles'],
 ['Review rhythm','Monthly summary','Monthly strategy review','Twice-monthly reviews'],
 ['New website build','Separate project','Separate project','Separate project'],
];
export function PlanComparison(){return <div className="plan-comparison-wrap"><div className="comparison-caption"><Layers3 size={22} aria-hidden="true"/><p>Compare the actual allowances. Content totals are the full monthly allowance, including the Foundation allocation.</p></div><div className="plan-table-scroll" tabIndex={0} role="region" aria-label="Scrollable monthly plan comparison"><table className="plan-comparison"><caption>Monthly partnership starting scopes</caption><thead><tr><th scope="col">Included work</th>{plans.map(p=><th key={p.name} scope="col">{p.name}</th>)}</tr></thead><tbody>{comparison.map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((v,i)=><td key={i}>{v}</td>)}</tr>)}</tbody></table></div><p className="pricing-footnote">All plans cover one priority market. Media spend, third-party tools and new website projects are separate. Your proposal defines the content formats, technical scope and service terms.</p></div>;}
