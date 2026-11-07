import {PageSchema} from '@/components/page-schema';
import {BlogLibrary} from '@/components/blog-library';
import {articles} from '@/lib/articles';
import {seoImagePath} from '@/lib/seo-pages';
import {metadata as makeMetadata} from '@/lib/seo';
import {PageHero,CTA} from '@/components/ui';
export const metadata=makeMetadata('Small Business Marketing Blog','Practical articles about websites, SEO, paid ads and social media for home-service companies and small businesses.','/resources/');
export default function Resources(){return <><PageSchema path="/resources/"/><PageHero eyebrow="THE WONDERWEB BLOG" title="Good questions. Useful answers." description="Practical guides for the next decision: a better website, a clearer search plan, a focused campaign or content worth sharing. Written for home-service businesses and ambitious small teams." crumbs={[{label:'Blog & guides'}]}/><section className="section cream"><div className="container"><BlogLibrary posts={[...articles].reverse().map(a=>({slug:a.slug,title:a.title,category:a.category,summary:a.summary,readTime:a.readTime,image:seoImagePath(`/resources/${a.slug}/`)}))}/></div></section><CTA/></>}
