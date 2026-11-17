import {LeadGuarantee} from '@/components/studio-confidence';
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
 <PageHero eyebrow="GOOD WORK. A CLEAR INVESTMENT." title="A bigger ambition. The right team." description="Growth programs from $3,000 per month, with full agency partnerships up to $25,000. Connect paid media, search, social content and your website around the next stage of your business." crumbs={[{label:'Pricing'}]}/>
 <section className="pricing-selector-section" aria-label="Compare pricing options"><div className="container">
  <PricingTabs label="Pricing options" items={[
   {id:'partnerships',label:'Monthly partnerships',caption:'Built around your next stage of growth.',content:<MonthlyPlanCatalog/>},
   {id:'standalone',label:'Standalone services',caption:'One focused brief',content:<StandalonePricing/>},
   {id:'websites',label:'Website projects',caption:'A new build. A fixed scope.',content:<><div className="pricing-panel-heading"><h2>A website built <em>for your business.</em></h2><p>These prices cover designing and building a new website. For routine edits to an existing site, see Website support in Standalone services.</p></div><WebsiteProjectPricing/><Link className="text-link" href="/services/web-design/">Explore website design<ArrowUpRight size={18} aria-hidden="true"/></Link></>},
  ]}/>
  <p className="pricing-footnote">{paymentTerms.general}</p>
  <div className="pricing-scope-note"><strong>One plan. Clear responsibilities.</strong><p>Every partnership connects customer acquisition with a stronger website and search presence. Higher tiers add more channels, creative depth and a broader delivery team. Standalone services suit a focused brief, while new website builds have their own project scope. Your written proposal brings the responsibilities and investment together.</p></div>
 </div></section>
 <LeadGuarantee detailed/>
 <section className="section pricing-next-step"><div className="container"><div><Eyebrow>YOUR PRIORITIES, FIRST</Eyebrow><h2>Find a sensible <em>starting point.</em></h2><p>Bring your website, your market and your goals. We’ll recommend the right scope, explain the total commitment and agree the work before payment.</p></div><BookCallButton>Help me choose</BookCallButton></div></section>
 <div id="pricing-questions"><FAQSection eyebrow="BEFORE YOU BEGIN" title={<><em>Pricing questions.</em><br/>Practical answers.</>} intro="The details behind the starting prices, payment options and delivery plans." items={pricingFaqs}/></div>
 </div>;}
