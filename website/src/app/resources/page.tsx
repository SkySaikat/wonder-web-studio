import {PageSchema} from '@/components/page-schema';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {articles} from '@/lib/articles';
import {metadata as makeMetadata} from '@/lib/seo';
import {PageHero,CTA} from '@/components/ui';
export const metadata=makeMetadata('Insights & Guides for Small Business Marketing','Practical guides to website design, SEO budgets, Google Ads, social media content and ongoing website management.','/resources/');
export default function Resources(){return <><PageSchema path={'/resources/'}/><PageHero eyebrow="FROM THE STUDIO" title="Useful thinking for your next move." description="A practical look at websites, search, advertising and content. Clear ideas to help you ask better questions and make informed decisions." crumbs={[{label:'Insights'}]}/><section className="section cream"><div className="container directory-grid">{articles.map(a=><Link href={`/resources/${a.slug}/`} className="directory-card" key={a.slug}><span className="small-label">{a.category} · {a.readTime}</span><h2>{a.title}</h2><p>{a.summary}</p><ArrowUpRight/></Link>)}</div></section><CTA/></>}
