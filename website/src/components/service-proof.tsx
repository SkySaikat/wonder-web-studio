import Link from 'next/link';
import Image from '@/components/content-image';
import {ArrowUpRight,BookOpen} from 'lucide-react';
import {campaignStories,clientProjects} from '@/lib/projects';
import {caseImage} from '@/lib/editorial-images';
import {Eyebrow} from './ui';

export function GuideBanner(){return <aside className="service-guide-banner container"><span className="guide-book"><BookOpen size={32}/></span><div><small>TAKE SOMETHING USEFUL WITH YOU</small><h2>A little knowledge. A better next move.</h2><p>Free SEO guides, Google Ads checklists and practical worksheets for home-service businesses.</p></div><Link className="button" href="/guides/">Explore free guides <ArrowUpRight size={18}/></Link></aside>}

export function ServiceProof({slug}:{slug:string}){
 const search=['seo','local-seo','ai-search-optimization'];const paid=['google-ads','microsoft-ads','lead-generation','digital-media-buying'];
 const cases=search.includes(slug)?campaignStories.filter(s=>s.service==='local-seo'||s.slug==='remodeling-search-two-year-results'):paid.includes(slug)?campaignStories.filter(s=>s.service==='google-ads'):[];
 return <section className="section service-proof" id="service-results"><div className="container"><div className="section-heading"><div><Eyebrow>THE WORK BEHIND THE WORDS</Eyebrow><h2>Real challenges.<br/><em>Work worth exploring.</em></h2></div><Link className="quiet-link" href={cases.length?'/results/':'/work/'}>Explore all {cases.length?'case studies':'projects'} <ArrowUpRight size={17}/></Link></div><div className="proof-grid">{cases.length?cases.slice(0,3).map(s=><Link className="proof-card" href={`/results/${s.slug}/`} key={s.slug}><Image src={caseImage(s.slug).src} alt={caseImage(s.slug).alt} fill sizes="(max-width:750px) 90vw,33vw"/><div className="proof-card-content"><span>{s.label}</span><strong>{s.metric}</strong><h3>{s.metricLabel}</h3><p>{s.period}</p><span className="proof-open">Read the full story <ArrowUpRight size={20}/></span></div></Link>):clientProjects.slice(0,3).map(p=><Link className="proof-card project-proof" href={`/work/${p.slug}/`} key={p.slug}><Image src={p.image} alt={`${p.label} website project`} fill sizes="(max-width:750px) 90vw,33vw"/><div className="proof-card-content"><span>{p.category}</span><h3>{p.label}</h3><p>{p.title}</p><span className="proof-open">Explore the project <ArrowUpRight size={20}/></span></div></Link>)}</div><p className="proof-context">{cases.length?'Selected historical campaign experience from our team. Each story explains its comparison and limits. Artwork is illustrative; individual results vary.':'Selected website work from the studio and founder’s portfolio. These projects demonstrate website experience, not measured results for every service.'}</p></div></section>
}
