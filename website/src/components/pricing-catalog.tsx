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
export function MonthlyPlanCatalog(){return <><h2>Choose your monthly partnership.</h2><p className="pricing-category-intro">Start with your next growth priority. Choose a focused acquisition program, a connected marketing team or a full agency partnership.</p><div className="monthly-price-grid">{plans.map((p,i)=><article className={`monthly-price-card ${i===2?'monthly-featured':''}`} key={p.name}><span className="small-label">{p.tier} · {p.tag}</span><h3>{p.name}</h3><p>{p.description}</p><div className="catalog-price"><span>Starting at</span><strong>{formatPrice(p.price)}</strong><span>USD / month</span></div><ul>{p.items.map(item=><li key={item}><Check size={17} aria-hidden="true"/>{item}</li>)}</ul><p className="catalog-exclusions">{p.note}</p><BookCallButton service={`${p.name} plan`}>Discuss this plan</BookCallButton></article>)}</div><details className="pricing-compare-disclosure" id="compare"><summary>Compare the growth programs side by side<Layers3 size={20}/></summary><PlanComparison/></details></>;}
const comparison:[string,string,string,string][]=[
 ['Monthly starting fee',...plans.map(p=>`${formatPrice(p.price)} USD`)] as [string,string,string,string],
 ['Best fit','Local businesses building demand','Regional businesses ready to scale','Ambitious businesses and multi-market programs'],
 ['Search visibility','Local SEO and business-profile foundations','Technical SEO, local SEO and original content','Advanced SEO, AI search and authority-building content'],
 ['Service pages','Core pages for your priority services','Pages needed by your agreed growth roadmap','Unlimited requests, delivered through a prioritized queue'],
 ['Paid campaigns','Google OR Meta','Google AND Meta','Google, Meta and additional agreed channels'],
 ['Content and creative','Social graphics, ad copy and content planning','Publishing, campaign creative and short-form video editing','Coordinated social, video, campaign and search content'],
 ['Website and follow-up','Landing-page and conversion improvements','Ongoing website optimization and inquiry journeys','Development, conversion work and agreed CRM workflows'],
 ['Strategy reviews','Monthly','Twice monthly','Weekly'],
 ['Lead guarantee','Available for qualifying paid campaigns','Available for qualifying paid campaigns','Available for qualifying paid campaigns'],
];
export function PlanComparison(){return <div className="plan-comparison-wrap"><div className="comparison-caption"><Layers3 size={22} aria-hidden="true"/><p>Compare the role each program plays in your growth. Your roadmap sets the priorities, delivery pace and responsibilities before we begin.</p></div><div className="plan-table-scroll" tabIndex={0} role="region" aria-label="Scrollable monthly plan comparison"><table className="plan-comparison"><caption>Monthly partnership starting scopes</caption><thead><tr><th scope="col">Included work</th>{plans.map(p=><th key={p.name} scope="col">{p.name}</th>)}</tr></thead><tbody>{comparison.map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((v,i)=><td key={i}>{v}</td>)}</tr>)}</tbody></table></div><p className="pricing-footnote">Omnipresence programs range from $15,000 to $25,000 per month. Media spend, third-party tools, on-site filming and complete website rebuilds are separate. Your proposal defines markets, content formats, delivery milestones and guarantee eligibility.</p></div>;}
