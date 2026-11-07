import {PageSchema} from '@/components/page-schema';
import Link from 'next/link';
import Image from '@/components/content-image';
import {ArrowUpRight} from 'lucide-react';
import {work} from '@/lib/content';
import {metadata as makeMetadata} from '@/lib/seo';
import {PageHero,CTA,Eyebrow,TextLink} from '@/components/ui';
import {ProjectGallery} from '@/components/project-gallery';
import {ResultsSection} from '@/components/home-sections';
export const metadata=makeMetadata('Our Work — Client Websites & Campaigns','Explore Wonderweb Studio projects for home-service businesses, consumer brands and web platforms, alongside selected campaign results and creative studies.','/work/');
export default function Work(){return <><PageSchema path={'/work/'}/><PageHero eyebrow="THE DETAILS MAKE THE DIFFERENCE" title="Real businesses. Thoughtful work." description="Websites, storefronts, platforms and marketing. Explore selected work from our studio and founder’s portfolio, with a closer look at the brief and the work behind each project." crumbs={[{label:'Our work'}]}/><ResultsSection/><section className="section cream"><div className="container"><ProjectGallery initial={12}/></div></section><section className="section cream"><div className="container"><div className="section-heading"><div><Eyebrow>ROOM TO EXPLORE</Eyebrow><h2>A few creative <em>directions.</em></h2></div><TextLink href="/services/graphic-design/">Explore design services</TextLink></div><div className="portfolio-grid">{work.filter(p=>!('challenge' in p)).map((p,i)=><Link href={`/work/${p.slug}/`} className="work-card" key={p.slug}><div className={`work-image work-tone-${i%2}`}><Image src={p.image} alt={p.label} width={768} height={768} sizes="(max-width:700px) 90vw,46vw"/><span className="image-arrow"><ArrowUpRight/></span></div><div className="work-caption"><h3>{p.title}</h3><span>{p.category}</span></div></Link>)}</div></div></section><CTA/></>}
