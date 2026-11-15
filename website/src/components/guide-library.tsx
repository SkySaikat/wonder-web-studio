'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import Image from '@/components/content-image';
import {ArrowUpRight} from 'lucide-react';
import guides from '@/data/download-guides.json';
export function GuideLibrary(){
 const [trade,setTrade]=useState('all');
 useEffect(()=>{
  function followLegacyLink(){const slug=window.location.hash.slice(1);if(guides.some(g=>g.slug===slug))window.location.replace('/guides/'+slug+'/'+window.location.search);}
  followLegacyLink();window.addEventListener('hashchange',followLegacyLink);
  return()=>window.removeEventListener('hashchange',followLegacyLink);
 },[]);
 const visible=guides.filter(g=>trade==='all'||g.trade===trade);
 return <><div className="guide-filter" role="group" aria-label="Filter guides by trade">{['all','roofing','plumbing','electrician','general-contractor'].map(value=><button key={value} aria-pressed={trade===value} onClick={()=>setTrade(value)}>{value==='all'?'All trades':guides.find(g=>g.trade===value)?.industry}</button>)}</div><p className="guide-count" aria-live="polite">{visible.length} practical guides · Find your next useful step</p>
 <div className="guide-library">{visible.map(g=><article className="guide-download" id={g.slug} key={g.slug}><Link className="guide-cover-button" href={'/guides/'+g.slug+'/'} aria-label={'Explore '+g.title}><Image src={g.cover} alt={g.coverAlt} width={612} height={792} sizes="(max-width:750px) 85vw, 30vw"/><span>OPEN YOUR NEXT CHAPTER ↗</span></Link><small>{g.industry} · {g.pages} pages · PDF{'csv' in g?' + CSV':''}</small><h3><Link href={'/guides/'+g.slug+'/'}>{g.title}</Link></h3><p>{g.description}</p><Link className="button" href={'/guides/'+g.slug+'/'}>Explore & get the guide <ArrowUpRight size={17}/></Link></article>)}</div></>;
}
