import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowDown,ArrowUpRight,BookOpen,Check,Minus,MoveUpRight} from 'lucide-react';
import Image from '@/components/content-image';
import {BookCallButton} from '@/components/booking';
import {GuideForm} from '@/components/guide-form';
import {PageSchema} from '@/components/page-schema';
import {Breadcrumbs,CheckList,Eyebrow,FAQ} from '@/components/ui';
import {guideLandings,guideLandingBySlug,relatedGuideLandings} from '@/lib/guide-landings';
import {metadata as makeMetadata} from '@/lib/seo';

export const dynamicParams=false;
export function generateStaticParams(){return guideLandings.map(p=>({slug:p.guide.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const page=guideLandingBySlug.get(slug);if(!page)notFound();
  return makeMetadata(page.title,page.description,page.path);
}

export default async function GuideLanding({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const page=guideLandingBySlug.get(slug);if(!page)notFound();
  const {guide,trade}=page;
  return <div className="guide-landing">
    <PageSchema path={page.path}/>
    <section className="guide-landing-hero"><div className="container">
      <Breadcrumbs items={[{label:'Free guides',href:'/guides/'},{label:guide.title}]}/>
      <div className="guide-landing-hero-grid">
        <div className="guide-landing-intro"><Eyebrow>{trade.name.toUpperCase()} · {page.serviceLabel.toUpperCase()}</Eyebrow>
          <h1>{page.title}</h1><p className="guide-landing-hook">{page.headline}</p><p>{page.intro}</p>
          <div className="guide-landing-actions"><a className="button" href="#free-guide">Get the free guide <ArrowDown size={18}/></a><a className="quiet-link" href="#practical-steps">Start with the advice <ArrowDown size={16}/></a></div>
          <div className="guide-landing-meta"><BookOpen size={17}/><span>{guide.pages}-page PDF{'csv' in guide?' + editable CSV':''} · Made for {trade.audience}</span></div>
        </div>
        <div className="guide-landing-art"><Image src={guide.artwork} alt={guide.coverAlt.replace(`${guide.title} cover: `,'')} width={1536} height={1024} sizes="(max-width:850px) 92vw, 45vw" priority/><span className="guide-landing-stamp">A LITTLE<br/>KNOWLEDGE.<br/><em>A better move.</em></span><span className="guide-free-tag">FREE GUIDE <MoveUpRight size={16}/></span></div>
      </div>
    </div></section>
    <section className="guide-landing-context"><div className="container guide-landing-context-grid"><div><Eyebrow>START WITH YOUR BUSINESS</Eyebrow><h2>{page.context.title}</h2></div><div><p>{page.context.body}</p><p className="guide-context-note">{trade.focus}</p></div></div></section>
    <section className="section guide-practical" id="practical-steps"><div className="container"><Eyebrow>USEFUL BEFORE YOU DOWNLOAD</Eyebrow><h2>Three places<br/>to <em>start looking.</em></h2>
      <div className="guide-step-grid">{page.steps.map((step,index)=><article key={step.title}><span className="guide-step-number">0{index+1}<ArrowUpRight size={22}/></span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
      <div className="guide-practice-grid"><article><span className="guide-practice-icon"><Check size={24}/></span><h3>Make this a habit.</h3><ul>{page.dos.map(item=><li key={item}><Check size={16}/><span>{item}</span></li>)}</ul></article><article><span className="guide-practice-icon"><Minus size={24}/></span><h3>Give these a miss.</h3><ul>{page.donts.map(item=><li key={item}><Minus size={16}/><span>{item}</span></li>)}</ul></article></div>
      {page.sources.length>0?<p className="guide-official-reading">Platform reference: {page.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.title} <ArrowUpRight size={14}/></a>)}</p>:null}
    </div></section>
    <section className="guide-help"><div className="container guide-help-grid"><div><Eyebrow>FROM THE IDEA TO THE WORK</Eyebrow><h2>Want a team<br/>to <em>put it into practice?</em></h2><p>Wonderweb Studio provides {page.serviceLabel.toLowerCase()} for {trade.audience}. We work remotely with US businesses and clients worldwide, starting with your priorities and agreeing on a clear scope.</p><BookCallButton service={page.title} className="button">Talk through your next step</BookCallButton></div><div className="guide-help-scope"><span className="small-label">HOW WE CAN HELP</span><CheckList items={page.help}/><p>Our proposal sets out responsibilities, deliverables and pricing. The guide is yours to use whether or not you hire us.</p><Link className="quiet-link" href={`/services/${page.service}/`}>Explore {page.serviceLabel.toLowerCase()} <ArrowUpRight size={17}/></Link><Link className="quiet-link" href={trade.industryPath}>Explore {guide.trade==='general-contractor'?'industry':trade.name.toLowerCase()} marketing <ArrowUpRight size={17}/></Link></div></div></section>
    <section className="section guide-offer" id="free-guide"><div className="container guide-offer-grid"><div className="guide-offer-preview"><Eyebrow>YOUR FREE NEXT CHAPTER</Eyebrow><h2>A useful read.<br/><em>A clearer plan.</em></h2><Image src={guide.cover} alt={guide.coverAlt} width={612} height={792} sizes="(max-width:850px) 65vw, 260px"/><h3>{guide.title}</h3><p>{guide.pages} pages · PDF{'csv' in guide?' + editable CSV':''}</p><CheckList items={page.inside}/></div><div className="guide-offer-form"><GuideForm key={guide.slug} guide={guide}/></div></div></section>
    <section className="section guide-landing-faq"><div className="container"><Eyebrow>A LITTLE MORE CLARITY</Eyebrow><h2>Before your <em>next move.</em></h2><FAQ items={page.faqs}/></div></section>
    <section className="section guide-related"><div className="container"><div className="section-heading"><div><Eyebrow>KEEP THE IDEAS GOING</Eyebrow><h2>More for <em>your business.</em></h2></div><Link className="quiet-link" href="/guides/">All free guides <ArrowUpRight size={17}/></Link></div><div className="guide-related-grid">{relatedGuideLandings(slug).map(p=><Link href={p.path} key={p.path}><Image src={p.guide.artwork} alt={p.guide.coverAlt.replace(`${p.guide.title} cover: `,'')} width={600} height={400} sizes="(max-width:600px) 90vw, (max-width:1000px) 42vw, 23vw"/><div><span className="small-label">FREE {p.guide.pages}-PAGE GUIDE</span><h3>{p.guide.title}</h3><span className="quiet-link">Take a look <ArrowUpRight size={17}/></span></div></Link>)}</div></div></section>
  </div>;
}
