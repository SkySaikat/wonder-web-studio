import Link from 'next/link';
import Image from './content-image';
import {BookCallButton} from './booking';
import {FeaturedImage} from './featured-image';
import {PageSchema} from './page-schema';
import {PageHero,CTA,FAQ} from './ui';
import {formatEditorialDate} from '@/lib/editorial-dates';
import {publishedMigrations,type MigratedEntry} from '@/lib/migrated-content';
import {serviceReading} from '@/lib/service-reading';
import {migratedDocument} from '@/lib/migrated-body';
import {priorityPagePresentation} from '@/lib/priority-page-presentation';

export function MigratedGuide({entry}:{entry:MigratedEntry}) {
 const doc=migratedDocument(entry);
 const presentation=priorityPagePresentation[entry.path];
 const related=publishedMigrations().filter(e=>e.path!==entry.path&&e.service===entry.service).slice(0,4);
 const guides=serviceReading(entry.service).slice(0,3);
 const sections=doc.html.split(/(?=<h2\b)/).filter(Boolean);
 return <>
  <PageSchema path={entry.path}/>
  <PageHero eyebrow={entry.category} title={entry.title} description={entry.summary}
    featuredPath={presentation?entry.path:undefined}
    crumbs={[{label:entry.kind==='resources'?'Blog & guides':'Industry service guides',href:entry.kind==='resources'?'/resources/':'/solutions/'},{label:presentation?.serviceType||entry.title}]}>
   {presentation?<>
    <div className="service-hero-actions"><BookCallButton service={presentation.service}>{presentation.action}</BookCallButton><Link className="text-link" href="/pricing/">Compare pricing</Link></div>
    <ul className="priority-highlights">{presentation.highlights.map(item=><li key={item}>{item}</li>)}</ul>
   </>:null}
   <div className="article-meta">
    <span>Wonderweb Studio editorial team</span>
    {presentation?<>
     {presentation.intent==='guide'?<span>Published <time dateTime={entry.published}>{formatEditorialDate(entry.published.slice(0,10))}</time></span>:null}
     <span>Updated <time dateTime={entry.updated}>{formatEditorialDate(entry.updated)}</time></span>
    </>:<>
     <span>Original publication <time dateTime={entry.originalPublished}>{formatEditorialDate(entry.originalPublished)}</time></span>
     <span>Wonderweb adaptation <time dateTime={entry.published}>{formatEditorialDate(entry.published.slice(0,10))}</time></span>
     {doc.editorialReview?.status==='rewritten'?<span>Rewritten <time dateTime={doc.editorialReview.reviewed}>{formatEditorialDate(doc.editorialReview.reviewed)}</time></span>:null}
    </>}
    <span>{entry.readTime}</span>
   </div>
  </PageHero>
  <section className={`section cream ${presentation?'priority-editorial':''}`}><div className="container article-layout">
   <aside className="article-sidebar"><span>{presentation?'On this page':'In this guide'}</span>
    {doc.headings.map(h=><a href={`#${h.id}`} key={h.id}>{h.title}</a>)}
    {presentation?<><a href="#page-questions">Frequently asked questions</a><BookCallButton service={presentation.service} className="button priority-sidebar-action">{presentation.action}</BookCallButton></>:<Link href={`/services/${entry.service}/`}>Discuss this service</Link>}
   </aside>
   <article className="prose migrated-prose">
    {!presentation?<><FeaturedImage path={entry.path}/><p className="editorial-provenance">{doc.editorialReview?.status==='rewritten'?'This guide has been rewritten for Wonderweb Studio with expanded examples, practical decisions and current primary references. Original publication provenance is retained above.':'This guide has been adapted for Wonderweb Studio. The original publication and Wonderweb adaptation dates are shown above. Cost examples and platform details reflect the original context and should be checked against current quotes and documentation.'}</p></>:null}
    {presentation?sections.map((html,i)=>{
     const id=html.match(/^<h2\b[^>]*id="([^"]+)"/)?.[1];
     const illustration=presentation.illustrations.find(image=>image.afterId===id);
     return <section className="priority-editorial-section" key={id||i}>
      <div dangerouslySetInnerHTML={{__html:html}}/>
      {illustration?<figure className="priority-explainer"><Image src={illustration.src} alt={illustration.alt} width={illustration.width} height={illustration.height} sizes="(max-width:700px) 92vw, (max-width:1100px) 80vw, 850px"/><figcaption>{illustration.caption}</figcaption></figure>:null}
     </section>;
    }):<div dangerouslySetInnerHTML={{__html:doc.html}}/>}
    {presentation?<section className="priority-next-step" aria-labelledby="priority-next-title">
     <span className="priority-kicker">LET’S MAKE A PLAN</span><h2 id="priority-next-title">{presentation.actionTitle}</h2><p>{presentation.actionText}</p>
     <div className="service-hero-actions"><BookCallButton service={presentation.service}>{presentation.action}</BookCallButton><Link href="/pricing/">See scopes and pricing</Link></div>
    </section>:entry.kind==='solutions'?<section className="migration-next-step"><h2>Build a plan around your business</h2><p>Start with your priority service, the area you actually serve and the enquiries your team can handle. Wonderweb Studio can review the website, content and campaign requirements with you, then define the scope, responsibilities and measures of progress in a written proposal.</p><p>Work is delivered remotely. Any locations discussed in this guide are campaign planning examples, not Wonderweb office locations. Results depend on your market, offer, budget and follow-up.</p><Link className="text-link" href={`/services/${entry.service}/`}>Explore the service scope</Link></section>:null}
    {doc.faqs.length?<div className="article-faq" id="page-questions"><h2>{presentation?'Frequently asked questions':'Questions at a glance'}</h2><FAQ items={doc.faqs}/></div>:null}
    <div className="article-related-reading"><h2>Put the ideas into practice</h2>
     {presentation?presentation.related.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>):<><Link href={`/services/${entry.service}/`}>Explore the service and its starting scope</Link><Link href="/pricing/">Compare current Wonderweb service prices</Link>{guides.map(a=><Link key={a.slug} href={`/resources/${a.slug}/`}>{a.title}</Link>) }<h3>Related industry guides</h3>{related.map(e=><Link href={e.path} key={e.path}>{e.title}</Link>)}</>}
    </div>
   </article>
  </div></section>
  <CTA title={presentation?.actionTitle} text={presentation?.actionText}/>
 </>;
}
