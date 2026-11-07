import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight} from 'lucide-react';
import {work} from '@/lib/content';
import {metadata as makeMetadata} from '@/lib/site';
import {PageHero,CTA} from '@/components/ui';
export const metadata=makeMetadata('Our Work — Website & Creative Portfolio','Explore website concepts, interface studies and thumbnail creative from the Wonderweb Studio portfolio.','/work/');
export default function Work(){return <><PageHero eyebrow="SELECTED STUDIO WORK" title="A little wonder, out in the world." description="Website concepts, interface explorations and content creative from our earlier portfolio. A look at how we think about visual storytelling and digital experiences." crumbs={[{label:'Our work'}]}/><section className="section cream"><div className="container portfolio-grid">{work.map((p,i)=><Link href={`/work/${p.slug}/`} className="work-card" key={p.slug}><div className={`work-image work-tone-${i%2}`}><Image src={p.image} alt={p.label} width={768} height={768} sizes="(max-width: 700px) 90vw, 46vw"/><span className="image-arrow"><ArrowUpRight/></span></div><div className="work-caption"><h2>{p.title}</h2><span>{p.category}</span></div></Link>)}</div></section><CTA title="Let’s make something that feels like you."/></>}
