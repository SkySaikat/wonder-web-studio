import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {FAQSection} from '@/components/faq-section';
import {PageSchema} from '@/components/page-schema';
import {PageHero,Eyebrow} from '@/components/ui';
import {StandalonePricing,MonthlyPlanCatalog} from '@/components/pricing-catalog';
import {WebsiteProjectPricing} from '@/components/website-project-pricing';
import {PricingTabs} from '@/components/pricing-tabs';
import {BookCallButton} from '@/components/booking';
import {paymentTerms,pricingFaqs} from '@/lib/pricing';
import {metadata as makeMetadata} from '@/lib/seo';
export const metadata=makeMetadata('Website & Digital Marketing Pricing','Compare standalone services, monthly marketing and one-time website projects. Clear USD starting prices, payment options and defined scopes.','/pricing/');
export default function Pricing(){return <div className="pricing-page">
 <PageSchema path="/pricing/"/>
 <PageHero eyebrow="GOOD WORK. A CLEAR INVESTMENT." title="Clear prices. Work that fits." description="One service, a new website or ongoing marketing. Choose what you need, compare the scope and see what your investment covers." crumbs={[{label:'Pricing'}]}/>
 <section className="pricing-selector-section" aria-label="Compare pricing options"><div className="container">
  <PricingTabs label="Pricing options" items={[
   {id:'standalone',label:'Standalone services',caption:'One focused brief',content:<StandalonePricing/>},
   {id:'websites',label:'Website projects',caption:'A new build. A fixed scope.',content:<><div className="pricing-panel-heading"><h2>A website built <em>for your business.</em></h2><p>These prices cover designing and building a new website. For routine edits to an existing site, see Website support in Standalone services.</p></div><WebsiteProjectPricing/><Link className="text-link" href="/services/web-design/">Explore website design<ArrowUpRight size={18} aria-hidden="true"/></Link></>},
   {id:'partnerships',label:'Monthly partnerships',caption:'An ongoing marketing allowance',content:<MonthlyPlanCatalog/>},
  ]}/>
  <p className="pricing-footnote">{paymentTerms.general}</p>
  <div className="pricing-scope-note"><strong>Different work. Clearly separated.</strong><p>Website projects create a new site. Monthly plans improve and market an existing site. Dedicated SEO and AI-search programs reserve a deeper specialist allowance. We reconcile overlapping deliverables in one written proposal so you know exactly what you are paying for.</p></div>
 </div></section>
 <section className="section pricing-next-step"><div className="container"><div><Eyebrow>YOUR PRIORITIES, FIRST</Eyebrow><h2>Find a sensible <em>starting point.</em></h2><p>Bring your website, your market and your goals. We’ll recommend the right scope, explain the total commitment and agree the work before payment.</p></div><BookCallButton>Help me choose</BookCallButton></div></section>
 <div id="pricing-questions"><FAQSection eyebrow="BEFORE YOU BEGIN" title={<><em>Pricing questions.</em><br/>Practical answers.</>} intro="The details behind the starting prices, payment options and monthly allowances." items={pricingFaqs}/></div>
 </div>;}
