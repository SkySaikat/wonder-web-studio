import Link from 'next/link';
import {PageSchema} from '@/components/page-schema';
import {BlogLibrary} from '@/components/blog-library';
import {services} from '@/lib/content';
import {articles} from '@/lib/articles';
import {editorialImages} from '@/lib/editorial-images';
import {metadata as makeMetadata} from '@/lib/seo';
import {PageHero,CTA} from '@/components/ui';
export const metadata=makeMetadata('Small Business Marketing Blog','Practical articles about websites, SEO, paid ads and social media for home-service companies and small businesses.','/resources/');
export default function Resources(){return <><PageSchema path="/resources/"/><PageHero featuredPath="/resources/" eyebrow="THE WONDERWEB BLOG" title="Good questions. Useful answers." description="Practical guides for the next decision: a better website, a clearer search plan, a focused campaign or content worth sharing. Written for home-service businesses and ambitious small teams." crumbs={[{label:'Blog & guides'}]}/><section className="section cream"><div className="container"><div className="library-intro"><h2>Explore the complete resource library</h2><p>Find more in-depth guides for your trade, from website planning and local search to advertising and content. Original publication dates are preserved alongside the Wonderweb adaptation date.</p><Link href="/resources/library/1/">Browse the resource library →</Link></div><BlogLibrary serviceOptions={services.map(s=>({slug:s.slug,title:s.title}))} posts={[...articles].reverse().map(a=>({slug:a.slug,services:a.related,title:a.title,category:a.category,summary:a.summary,readTime:a.readTime,image:editorialImages[a.slug].src,imageAlt:editorialImages[a.slug].alt}))}/></div></section><CTA/></>}
