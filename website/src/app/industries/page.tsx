import {PageSchema} from '@/components/page-schema';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/lib/content';
import {metadata as makeMetadata} from '@/lib/seo';
import { PageHero,CTA } from '@/components/ui';
export const metadata=makeMetadata('Marketing for Home Services & Small Businesses','Explore digital marketing for roofing, HVAC, plumbing, electricians, remodelers and small businesses worldwide.','/industries/');
export default function IndustriesPage(){return <><PageSchema path={'/industries/'}/><PageHero featuredPath="/industries/" eyebrow="BUILT AROUND YOUR BUSINESS" title="Your industry matters. So does your individual story." description="We combine a focus on US home-service businesses with support for small businesses worldwide. Your services, customers and operating market shape the work." crumbs={[{label:'Who we help'}]}/><section className="section cream"><div className="container directory-grid">{industries.map(x=><Link href={`/industries/${x.slug}/`} className="directory-card" key={x.slug}><span className="small-label">{x.slug==='small-business'?'Worldwide':'Home services'}</span><h2>{x.title}</h2><p>{x.intro}</p><ArrowUpRight/></Link>)}</div></section><CTA title="Don’t see your industry? Let’s talk." text="Tell us about your customers and your business. We’ll explore the fit and recommend an honest starting point."/></>}
