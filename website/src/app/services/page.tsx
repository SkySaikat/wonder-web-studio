import {PageSchema} from '@/components/page-schema';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/content';
import {metadata as makeMetadata} from '@/lib/seo';
import { PageHero,CTA } from '@/components/ui';
export const metadata=makeMetadata('Digital Marketing & Website Services','Explore website design, development, SEO, Google Ads, Meta campaigns, social media and creative services for small businesses worldwide.','/services/');
export default function ServicesPage(){return <><PageSchema path={'/services/'}/><PageHero featuredPath="/services/" eyebrow="THE WHOLE PICTURE" title="Good things happen when the pieces work together." description="Start with one service or bring us into the bigger picture. We connect design, technology and marketing around what your business needs next." crumbs={[{label:'Services'}]}/><section className="section cream"><div className="container directory-grid">{services.map(s=><Link className="directory-card" href={`/services/${s.slug}/`} key={s.slug}><span className="small-label">{s.category}</span><h2>{s.title}</h2><p>{s.intro}</p><ArrowUpRight size={25}/></Link>)}</div></section><CTA/></>}
