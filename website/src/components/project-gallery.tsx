'use client';
import {useState} from 'react';
import Link from 'next/link';
import Image from '@/components/content-image';
import {ArrowUpRight,ArrowDown} from 'lucide-react';
import {clientProjects} from '@/lib/projects';
const filters=['All projects','Home services','Brands & commerce','Web platforms'];
export function ProjectGallery({initial=6}:{initial?:number}){const[filter,setFilter]=useState('All projects');const[expanded,setExpanded]=useState(false);const matching=clientProjects.filter(p=>filter==='All projects'||p.filter===filter);const visible=expanded?matching:matching.slice(0,initial);
 return <><div className="project-filter" aria-label="Filter client projects">{filters.map(f=><button key={f} aria-pressed={filter===f} onClick={()=>{setFilter(f);setExpanded(false)}}>{f}{f==='All projects'?<span>{clientProjects.length}</span>:null}</button>)}</div><p className="gallery-count" aria-live="polite">Showing {visible.length} of {matching.length} projects</p><div className="client-project-grid">{visible.map(p=><Link className="client-project" key={p.slug} href={`/work/${p.slug}/`}><div className="client-project-image"><Image src={p.image} alt={`${p.label} website project`} width={1000} height={750} sizes="(max-width:700px) 90vw,(max-width:1000px) 44vw,30vw"/><span><ArrowUpRight size={22}/></span></div><div className="client-project-title"><h3>{p.label}</h3><span>{p.filter}</span></div><p>{p.title}</p></Link>)}</div>{matching.length>initial?<button className="gallery-more" onClick={()=>setExpanded(!expanded)}>{expanded?'Show selected projects':'See more client projects'}<ArrowDown size={18} style={{transform:expanded?'rotate(180deg)':undefined}}/></button>:null}</>;
}
