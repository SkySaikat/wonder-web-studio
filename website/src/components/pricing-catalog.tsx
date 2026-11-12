import Link from 'next/link';
import {ArrowUpRight,Check,Layers3} from 'lucide-react';
import {BookCallButton} from './booking';
import {servicePrices,customServicePrices,formatPrice} from '@/lib/pricing';
import {plans} from '@/lib/site';
import {PricingTabs} from './pricing-tabs';
const groups=[
 {id:'paid-ads',label:'Paid ads',description:'Management fees for your chosen advertising channel. Media spend is always separate.',ids:['local-services','google-search','meta-campaigns','microsoft-search','linkedin-campaigns','lead-program']},
 {id:'search-ai',label:'SEO & AI search',description:'Choose local search upkeep or a dedicated search program with its own content and implementation allowance.',ids:['local-search','ai-search','search-program','customer-reputation']},
 {id:'content-creative',label:'Content & creative',description:'Practical production allowances for your writing, social channels and brand.',ids:['organic-social','editorial-content','content-publishing','graphic-design','video-thumbnails','email-campaigns']},
 {id:'website-support',label:'Website support',description:'For an existing website. New website builds have their own project tab.',ids:['website-care','development-project','campaign-page','conversion-review']},
];
function ServiceCard({id}:{id:string}){
 const p=servicePrices.find(item=>item.id===id)!;
 return <article className="price-service-card" id={`price-${p.id}`}>
  <span className="price-cadence">{p.cadence==='month'?'MONTHLY MANAGEMENT':'ONE-TIME PROJECT'}</span><h3>{p.name}</h3><p>{p.description}</p><div className="catalog-price compact"><span>From</span><strong>{formatPrice(p.price)}</strong><span>USD / {p.cadence}</span></div>
  <ul>{p.includes.map(item=><li key={item}><Check size={16} aria-hidden="true"/><span>{item}</span></li>)}</ul>
  <details className="price-scope-details"><summary>Scope & exclusions</summary><p>{p.excludes}</p></details>
  <div className="catalog-actions"><BookCallButton icon={false} service={p.name} className="button">Discuss scope<ArrowUpRight size={16} aria-hidden="true"/></BookCallButton><Link href={`/services/${p.service}/`}>Explore the service</Link></div>
 </article>;
}
export function StandalonePricing(){return <PricingTabs label="Standalone service categories" variant="secondary" items={[
 ...groups.map(g=>({id:g.id,label:g.label,content:<><p className="pricing-category-intro">{g.description}</p><div className="price-service-grid">{g.ids.map(id=><ServiceCard id={id} key={id}/>)}</div></>})),
 {id:'specialist-pricing',label:'Specialist programs',content:<><p className="pricing-category-intro">A tailored quote where the number of locations, platforms or systems shapes the work.</p><div className="price-service-grid">{customServicePrices.map(p=><article className="price-service-card" key={p.service} id={`price-${p.service}`}><span className="price-cadence">TAILORED SCOPE</span><h3>{p.name}</h3><p>{p.description}</p><div className="catalog-price compact"><strong>Scoped quote</strong></div><p>{p.scope}</p><div className="catalog-actions"><BookCallButton service={p.name}>Discuss the brief</BookCallButton><Link href={`/services/${p.service}/`}>Explore the service</Link></div></article>)}</div></>}
 ]}/>;}
export function MonthlyPlanCatalog(){return <><p className="pricing-category-intro">Ongoing work for an existing website. Choose the monthly allowance that fits your current marketing priorities.</p><div className="monthly-price-grid">{plans.map((p,i)=><article className={`monthly-price-card ${i===1?'monthly-featured':''}`} key={p.name}><span className="small-label">{p.tag}</span><h3>{p.name}</h3><p>{p.description}</p><div className="catalog-price"><span>Starting at</span><strong>{formatPrice(p.price)}</strong><span>USD / month</span></div><ul>{p.items.map(item=><li key={item}><Check size={17} aria-hidden="true"/>{item}</li>)}</ul><p className="catalog-exclusions">{p.note}</p><BookCallButton service={`${p.name} plan`}>Discuss this plan</BookCallButton></article>)}</div><details className="pricing-compare-disclosure" id="compare"><summary>Compare the monthly allowances side by side<Layers3 size={20}/></summary><PlanComparison/></details></>;}
const comparison:[string,string,string,string][]=[
 ['Monthly starting fee',...plans.map(p=>`${formatPrice(p.price)} USD`)] as [string,string,string,string],
 ['Website care and routine edits','Up to 2 hours','Up to 2 hours','Up to 2 hours'],
 ['Local profile / on-page review','Included','Included','Included'],
 ['Content deliverables per month','1','2 total','4 total'],
 ['Paid channel management','Separate','Google OR Microsoft','Google AND Meta'],
 ['Monthly media spend managed','Not included','Up to $5,000','Up to $10,000 combined'],
 ['Landing-page improvement','Separately scoped','1 per month','Separately scoped'],
 ['Organic social posts','Separate','Separate','8 posts across 2 profiles'],
 ['Review rhythm','Monthly summary','Monthly strategy review','Twice-monthly reviews'],
 ['Dedicated SEO / AI search program','Separate scope','Separate scope','Separate scope'],
 ['New website build','Separate project','Separate project','Separate project'],
];
export function PlanComparison(){return <div className="plan-comparison-wrap"><div className="comparison-caption"><Layers3 size={22} aria-hidden="true"/><p>Compare the actual allowances. Content totals are the full monthly allowance, including the Foundation allocation.</p></div><div className="plan-table-scroll" tabIndex={0} role="region" aria-label="Scrollable monthly plan comparison"><table className="plan-comparison"><caption>Monthly partnership starting scopes</caption><thead><tr><th scope="col">Included work</th>{plans.map(p=><th key={p.name} scope="col">{p.name}</th>)}</tr></thead><tbody>{comparison.map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((v,i)=><td key={i}>{v}</td>)}</tr>)}</tbody></table></div><p className="pricing-footnote">All plans cover one priority market. Media spend, third-party tools and new website projects are separate. Your proposal defines the content formats, technical scope and service terms.</p></div>;}
