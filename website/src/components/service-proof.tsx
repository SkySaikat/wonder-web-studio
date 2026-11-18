import Link from 'next/link';
import {ArrowUpRight,BookOpen} from 'lucide-react';
import {campaignStories,clientProjects} from '@/lib/projects';
import {caseImage} from '@/lib/editorial-images';
import {CaseStudyShowcase} from './case-study-showcase';
import {Eyebrow} from './ui';
import {guideLandings} from '@/lib/guide-landings';

export function GuideBanner({service}:{service?:string}){
 const topic=service==='local-seo'?'seo':service;
 const pages=guideLandings.filter(p=>p.service===topic&&(!p.guide.slug.includes('google-ads')||p.guide.slug.endsWith('google-ads-guide'))&&!p.guide.slug.endsWith('negative-keyword-vault'));
 return <aside className="service-guide-banner container"><span className="guide-book"><BookOpen size={32}/></span><div><small>SMALL READS. USEFUL NEXT STEPS.</small><h2>A little knowledge. A better next move.</h2><p>Practical marketing advice and free guides, made for your trade.</p>{pages.length?<nav className="guide-service-links" aria-label="Free guides by trade">{pages.map(p=><Link href={p.path} key={p.path}>{p.guide.industry} guide</Link>)}</nav>:null}</div><Link className="button" href="/guides/">Get your free guide <ArrowUpRight size={18}/></Link></aside>;
}

export function ServiceProof({slug}:{slug:string}){
 const search=['seo','local-seo','ai-search-optimization','franchise-marketing'];const paid=['google-ads','microsoft-ads','lead-generation','digital-media-buying','local-services-ads'];
 const cases=search.includes(slug)?campaignStories.filter(s=>s.service==='local-seo'||s.slug==='remodeling-search-two-year-results'):paid.includes(slug)?campaignStories.filter(s=>s.service==='google-ads'):[];
 const items=cases.length?cases.map(s=>({title:s.title,label:s.label,metric:s.metric,description:s.metricLabel,period:s.period,href:`/results/${s.slug}/`,image:caseImage(s.slug).src,alt:caseImage(s.slug).alt})):clientProjects.slice(0,4).map(p=>({title:p.title,label:p.label,metric:p.category.split(' · ')[0],description:p.title,period:p.category,href:`/work/${p.slug}/`,image:p.image,alt:`${p.label} website project`}));
 return <section className="section service-proof" id="service-results"><div className="container"><div className="section-heading"><div><Eyebrow>THE WORK BEHIND THE WORDS</Eyebrow><h2>Real challenges.<br/><em>A closer look at the work.</em></h2></div><Link className="quiet-link" href={cases.length?'/results/':'/work/'}>Explore all {cases.length?'case studies':'projects'} <ArrowUpRight size={17}/></Link></div><CaseStudyShowcase items={items}/><p className="proof-context">{cases.length?'Selected Wonderweb client engagements. Open each story for its scope and comparison. Sector photography illustrates the work; individual outcomes vary.':'Selected website work from the studio and founder’s portfolio. Explore each project for its scope and contribution.'}</p></div></section>;
}
