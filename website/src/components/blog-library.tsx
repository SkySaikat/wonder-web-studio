'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import Image from './content-image';
type BlogCard={slug:string;title:string;category:string;summary:string;readTime:string;image:string;imageAlt:string;services:string[]};
export function BlogLibrary({posts,serviceOptions}:{posts:BlogCard[];serviceOptions:{slug:string;title:string}[]}){
 const[query,setQuery]=useState('');const[category,setCategory]=useState('All topics');
 const[service,setService]=useState('');const[visible,setVisible]=useState(24);
 const categories=['All topics',...new Set(posts.map(p=>p.category))];
 const shown=posts.filter(p=>(!service||p.services.includes(service))&&(category==='All topics'||p.category===category)&&`${p.title} ${p.summary} ${p.category}`.toLowerCase().includes(query.toLowerCase().trim()));
 return <><div className="blog-tools"><label htmlFor="blog-search">Find your next useful read<input id="blog-search" type="search" value={query} onChange={e=>{setQuery(e.target.value);setVisible(24)}} placeholder="Try roofing, SEO or Facebook ads"/></label><p className="blog-count" aria-live="polite">{shown.length} matching articles</p></div><label className="blog-service-select" htmlFor="blog-service">Explore by service<select id="blog-service" value={service} onChange={e=>{setService(e.target.value);setVisible(24)}}><option value="">All services</option>{serviceOptions.map(s=><option key={s.slug} value={s.slug}>{s.title}</option>)}</select></label><div className="blog-filters" role="group" aria-label="Filter blog topics">{categories.map(c=><button key={c} aria-pressed={category===c} onClick={()=>{setCategory(c);setVisible(24)}}>{c}</button>)}</div><div className="blog-grid">{shown.slice(0,visible).map(p=><Link className="blog-card" key={p.slug} href={`/resources/${p.slug}/`}><Image src={p.image} alt={p.imageAlt} width={1440} height={810} sizes="(max-width:700px) 90vw,(max-width:1040px) 44vw,30vw"/><span className="small-label">{p.category} · {p.readTime}</span><h2>{p.title}</h2><p>{p.summary}</p><span className="text-link">Read the article<ArrowUpRight size={16}/></span></Link>)}</div>{shown.length>visible?<button className="button blog-more" type="button" onClick={()=>setVisible(n=>n+24)}>Show more guides ({shown.length-visible} remaining)</button>:null}{!shown.length?<p className="blog-empty">No articles match that search. Try another phrase or choose All topics.</p>:null}</>;
}
