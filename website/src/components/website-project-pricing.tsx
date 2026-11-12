'use client';
import {useState} from 'react';
import {ArrowUpRight,Check} from 'lucide-react';
import {BookCallButton} from './booking';
import {websiteProjects,formatPrice,paymentTerms} from '@/lib/pricing';

export function WebsiteProjectPricing(){
 const [payments,setPayments]=useState(false);
 return <><div className="price-payment-choice" role="group" aria-label="Website project payment option">
  <button type="button" aria-pressed={!payments} onClick={()=>setPayments(false)}>Pay in full<span>Lower total project price</span></button>
  <button type="button" aria-pressed={payments} onClick={()=>setPayments(true)}>12 monthly payments<span>A fixed project commitment</span></button>
 </div><div className="website-price-grid" aria-live="polite" aria-atomic="false">{websiteProjects.map((p,i)=><article className={`website-price-card website-price-${i}`} key={p.id}>
  <span className="small-label">{p.tag}</span><h3>{p.name}</h3><p>{p.description}</p>
  <div className="catalog-price"><span>Starting at</span><strong>{formatPrice(payments?p.installment:p.price)}</strong><span>{payments?'USD / month × 12':'USD / project'}</span></div>
  <p className="website-payment-total">{payments?<>Total commitment: <strong>{formatPrice(p.installment*p.months)}</strong> USD</>:<>Or {formatPrice(p.installment)} / month × 12<br/>Total: {formatPrice(p.installment*p.months)} USD</>}</p>
  <ul>{p.includes.map(item=><li key={item}><Check size={17} aria-hidden="true"/><span>{item}</span></li>)}</ul><p className="catalog-exclusions">{p.excludes}</p>
  <BookCallButton icon={false} service={`${p.name} — ${payments?'12-payment option':'pay in full'}`} className="button">Discuss this project<ArrowUpRight size={18} aria-hidden="true"/></BookCallButton>
 </article>)}</div><div className="price-payment-explainer"><p><strong>Know the full commitment.</strong> {paymentTerms.installments}</p><p>{paymentTerms.hosting}</p></div></>;
}
