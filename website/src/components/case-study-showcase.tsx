'use client';
import {useState} from 'react';
import Link from 'next/link';
import Image from '@/components/content-image';
import {ArrowUpRight} from 'lucide-react';
export type ProofItem={title:string;label:string;metric:string;description:string;period:string;href:string;image:string;alt:string};
export function CaseStudyShowcase({items}:{items:ProofItem[]}){
 const [active,setActive]=useState(0);const item=items[active];
 return <div className="proof-explorer"><div className="proof-list" role="group" aria-label="Explore selected work">{items.map((s,i)=><button className={i===active?'is-active':''} key={s.href} aria-pressed={i===active} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)}><span className="proof-index">0{i+1}</span><strong>{s.metric}</strong><span><b>{s.label}</b><span>{s.description}</span></span><ArrowUpRight size={20}/></button>)}</div><figure className="proof-preview">{items.map((proof,i)=><Image key={proof.href} className={i===active?'is-active':''} src={proof.image} alt={i===active?proof.alt:''} aria-hidden={i!==active} fill sizes="(max-width:750px) 90vw, 50vw" loading="eager"/>)}<span className="proof-sector">{item.label}</span><figcaption><div><strong>{item.metric}</strong><span>{item.description}</span><small>{item.period}</small></div><Link href={item.href} aria-label={`Read ${item.title}`}>Read the story <ArrowUpRight size={18}/></Link></figcaption></figure></div>;
}
