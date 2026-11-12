import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {serviceReading,serviceArchiveReading} from '@/lib/service-reading';
import {Eyebrow} from './ui';
export function ServiceReading({service,title}:{service:string;title:string}){
 const guides=serviceReading(service);const archive=serviceArchiveReading(service);
 return <section className="section cream service-reading" id="service-guides"><div className="container"><div className="section-heading"><div><Eyebrow>THE {title.toUpperCase()} READING ROOM</Eyebrow><h2>Plan it well.<br/><em>Ask better questions.</em></h2></div><p className="heading-aside">Practical guides to the decisions behind the work, with examples, checklists and answers you can use before your next brief.</p></div><div className="service-reading-grid">{guides.map((a,i)=><Link className="service-reading-card" href={`/resources/${a.slug}/`} key={a.slug}><span className="reading-step"><span>GUIDE {String(i+1).padStart(2,'0')}</span><span>{a.readTime}</span></span><h3>{a.title}</h3><p>{a.summary}</p><span className="text-link">Read the guide<ArrowUpRight size={17} aria-hidden="true"/></span></Link>)}</div>{archive.length?<div className="service-reading-archive"><h3>Explore the work in your industry</h3><ul>{archive.map(a=><li key={a.path}><Link href={a.path}>{a.title}</Link></li>)}</ul><Link className="text-link" href="/resources/library/1/">Browse the complete resource library<ArrowUpRight size={17} aria-hidden="true"/></Link></div>:null}</div></section>;
}
