import Image from 'next/image';
import {notFound} from 'next/navigation';
import {work} from '@/lib/content';
import {metadata as makeMetadata} from '@/lib/site';
import {PageHero,CTA,Button,Eyebrow} from '@/components/ui';
export const dynamicParams=false;
export function generateStaticParams(){return work.map(w=>({slug:w.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const w=work.find(x=>x.slug===slug);return w?makeMetadata(w.label,w.description,`/work/${slug}/`):{}}
export default async function WorkDetail({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const w=work.find(x=>x.slug===slug);if(!w)notFound();return <><PageHero eyebrow={w.category} title={w.title} description={w.description} crumbs={[{label:'Our work',href:'/work/'},{label:w.label}]}/><section className="section cream"><div className="container portfolio-detail"><Image className="feature-image" src={w.image} alt={w.label} width={768} height={768} priority sizes="(max-width: 700px) 90vw, 55vw"/><div><Eyebrow>FROM THE STUDIO PORTFOLIO</Eyebrow><h2>Design gives an idea somewhere to go.</h2><p>This exploration is part of the studio’s earlier visual portfolio. It is shown as a creative example rather than a performance case study or a claim of a commissioned client launch.</p><p>Your own project starts with a different brief: your business, your audience, your brand and the work you want your website or content to do.</p><Button href="/contact/">Discuss your idea</Button></div></div></section><CTA/></>}
