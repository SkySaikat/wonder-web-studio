import Link from 'next/link';
import {PageSchema} from './page-schema';
import {PageHero,CTA,Eyebrow,FAQ,CheckList} from './ui';
import {BookCallButton} from './booking';
import {locationServiceAnswers} from '@/lib/location-answers';
import {locations} from '@/lib/locations';
import {localWebBriefByLocation} from '@/lib/local-growth-content';

export function LocalWebService({slug}:{slug:string}){
 const brief=localWebBriefByLocation.get(slug)!;
 const location=locations.find(l=>l.slug===slug)!;
 const path=`/locations/${slug}/web-design/`;
 return <>
  <PageSchema path={path}/>
  <PageHero featuredPath={path} eyebrow={`${location.name} / WEB DESIGN`} title={brief.headline} description={brief.intro} crumbs={[{label:'Locations',href:'/locations/'},{label:location.name,href:`/locations/${slug}/`},{label:'Web design'}]}>
   <div className="service-hero-actions"><BookCallButton>Plan your website</BookCallButton><Link className="text-link" href="/pricing/">Compare website pricing ↗</Link></div>
   <p className="scope-note">Serving {location.name} through our remote team. Clear scope, coordinated reviews and a practical handoff.</p>
  </PageHero>
  <section className="section cream"><div className="container content-layout"><div className="prose">
   {brief.sections.map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}
   <p><Link href="/services/web-design/">Explore our complete web design service</Link>, including the design process and deliverables. Our <Link href="/work/">portfolio</Link> shows selected work; <Link href="/pricing/">pricing</Link> explains the available project and ongoing-service options.</p>
  </div><aside className="detail-sidebar"><Eyebrow>YOUR WEBSITE BRIEF</Eyebrow><h2>Prepare your marketing brief.</h2><CheckList items={brief.checklist}/><BookCallButton>Discuss your project</BookCallButton><p className="scope-note">Your quote separates website production, ongoing care, third-party tools and advertising spend where relevant.</p></aside></div></section>
  <section className="section"><div className="container"><Eyebrow>FROM SCOPE TO LAUNCH</Eyebrow><h2>Build the journey.<br/><em>Then test it.</em></h2><div className="service-steps">
   <article><span>01</span><h3>Agree the customer journey</h3><p>Choose your priority services, actual coverage and the information a suitable buyer needs. Review current URLs and approved project material before drafting.</p></article>
   <article><span>02</span><h3>Design and build together</h3><p>Review copy and layouts as one experience. Build core service pages and necessary supporting content, with accessible forms and responsive images.</p></article>
   <article><span>03</span><h3>Verify the whole handoff</h3><p>Test navigation, forms, mobile layouts, redirects and measurement. Agree who maintains the site and review qualified inquiries after launch.</p></article>
  </div></div></section>
  <section className="section cream"><div className="container market-brief"><div><Eyebrow>START WITH A FREE GUIDE</Eyebrow><h2>Find the gaps<br/><em>before the rebuild.</em></h2><p>Our free lead-journey checklist helps you review calls, forms and follow-up. Read the practical advice and get the guide on its dedicated page.</p><Link className="button" href={`/guides/${brief.guide}/`}>Explore the free checklist ↗</Link></div><div><h3>Bring a clearer website brief</h3><p><Link className="text-link" href="/resources/contractor-website-pages-checklist/">The pages a contractor website needs</Link></p><p><Link className="text-link" href="/resources/texas-small-business-web-design-cost/">How to compare Texas website quotes</Link></p><p><Link className="text-link" href="/resources/service-area-pages-without-duplicate-content/">When a service area needs its own page</Link></p></div></div></section>
  <section className="section"><div className="container faq-layout"><h2>Before your<br/><em>next website.</em></h2><FAQ items={locationServiceAnswers(slug,'web-design')}/></div></section>
  <section className="section cream"><div className="container"><h2>Keep your plan connected.</h2><div className="location-crosslinks"><Link href={`/locations/${slug}/`}>All {location.name} marketing services ↗</Link><Link href="/services/local-seo/">Local SEO support ↗</Link><Link href="/services/google-ads/">Google Ads management ↗</Link><Link href="/pricing/">Project and monthly pricing ↗</Link>{brief.relatedMarkets.map(m=><Link key={m} href={`/locations/${m}/web-design/`}>{locations.find(l=>l.slug===m)?.name} web design ↗</Link>)}</div></div></section>
  <CTA title="Make your next website work harder." text="Tell us what you sell, where you work and what your current website is missing. We’ll help you define the next useful scope."/>
 </>;
}
