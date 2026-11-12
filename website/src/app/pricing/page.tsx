import Link from 'next/link';
import {ArrowDown,ArrowUpRight,Layers3,MousePointer2,Sparkles} from 'lucide-react';
import {FAQSection} from '@/components/faq-section';
import {PageSchema} from '@/components/page-schema';
import {PageHero,CTA,Eyebrow} from '@/components/ui';
import {PricingCards} from '@/components/pricing-cards';
import {StandalonePricing,PlanComparison} from '@/components/pricing-catalog';
import {WebsiteProjectPricing} from '@/components/website-project-pricing';
import {BookCallButton} from '@/components/booking';
import {paymentTerms,pricingFaqs} from '@/lib/pricing';
import {metadata as makeMetadata} from '@/lib/seo';
export const metadata=makeMetadata('Website & Digital Marketing Pricing','Compare standalone services, monthly marketing and one-time website projects. Clear USD starting prices, payment options and defined scopes.','/pricing/');
export default function Pricing(){return <div className="pricing-page">
<PageSchema path="/pricing/"/><PageHero eyebrow="GOOD WORK. A CLEAR INVESTMENT." title="Your next chapter. Your kind of plan." description="Start with one service, build a new website or bring the studio into your business each month. See the starting price, the work it covers and the details that matter." crumbs={[{label:'Pricing'}]}/>
<div className="container pricing-paths">
<a href="#standalone" className="pricing-path path-lilac"><MousePointer2 aria-hidden="true"/><span>One focused service<strong>Start with what you need.</strong></span><ArrowDown size={22} aria-hidden="true"/></a>
<a href="#websites" className="pricing-path path-lime"><Layers3 aria-hidden="true"/><span>A new website<strong>A project. A clear total.</strong></span><ArrowDown size={22} aria-hidden="true"/></a>
<a href="#partnerships" className="pricing-path path-peach"><Sparkles aria-hidden="true"/><span>A monthly partnership<strong>Your connected studio.</strong></span><ArrowDown size={22} aria-hidden="true"/></a>
</div><nav className="pricing-jump" aria-label="Pricing sections"><div className="container"><a href="#standalone">Standalone services</a><a href="#websites">Website projects</a><a href="#partnerships">Monthly plans</a><a href="#compare">Compare plans</a><a href="#pricing-questions">FAQs</a></div></nav>
<section className="section" id="standalone"><div className="container"><div className="section-heading"><div><Eyebrow>START WITH ONE THING</Eyebrow><h2>A focused brief.<br/><em>A useful first step.</em></h2></div><p className="heading-aside">Pick the service your business needs now. Each price includes a defined starting allowance, with extra work agreed before it begins.</p></div><StandalonePricing/><p className="pricing-footnote">{paymentTerms.general} Looking for website design? <a href="#websites">Compare the website projects below.</a></p></div></section>
<section className="section cream" id="websites"><div className="container"><div className="section-heading"><div><Eyebrow>DESIGN. BUILD. LAUNCH.</Eyebrow><h2>A better home<br/>for <em>your business.</em></h2></div><p className="heading-aside">Choose the scale that fits your content and functionality. Compare the lower pay-in-full price with a clearly stated twelve-payment option.</p></div><WebsiteProjectPricing/><Link className="text-link" href="/services/web-design/">Explore website design<ArrowUpRight size={18} aria-hidden="true"/></Link></div></section>
<section className="section" id="partnerships"><div className="container"><div className="section-heading"><div><Eyebrow>CONNECTED, MONTH AFTER MONTH</Eyebrow><h2>More of the studio.<br/><em>One shared plan.</em></h2></div><p className="heading-aside">For businesses that want ongoing website care, content, search and advertising coordinated around the same priorities.</p></div><PricingCards/><p className="pricing-footnote">{paymentTerms.general} New website builds are separate from ongoing plan allowances.</p></div></section>
<section className="section cream" id="compare"><div className="container"><Eyebrow>THE DETAILS, SIDE BY SIDE</Eyebrow><h2>Find your <em>fit.</em></h2><PlanComparison/></div></section>
<section className="section"><div className="container pricing-how"><div><Eyebrow>FROM A PRICE TO A PLAN</Eyebrow><h2>A conversation first.<br/><em>Then a clear scope.</em></h2><BookCallButton>Find my starting point</BookCallButton></div><ol><li><span>01</span><div><h3>Bring your priorities</h3><p>Tell us what you sell, where you serve customers and what needs to work better.</p></div></li><li><span>02</span><div><h3>Review a written proposal</h3><p>We confirm deliverables, responsibilities, review rounds, fees and payment terms.</p></div></li><li><span>03</span><div><h3>Agree, then begin</h3><p>Your approved invoice or payment link follows the agreement. We arrange access and the first work cycle together.</p></div></li></ol></div></section>
<div id="pricing-questions"><FAQSection eyebrow="BEFORE YOU BEGIN" title={<><em>Clear answers.</em><br/>A confident next step.</>} intro="The practical details behind the starting prices." items={pricingFaqs}/></div><CTA/>
</div>;}
