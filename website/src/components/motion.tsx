'use client';
import {useEffect,useState} from 'react';
import {Pause,Play} from 'lucide-react';
import {usePathname} from 'next/navigation';
export function Motion(){const[paused,setPaused]=useState(false);const path=usePathname();
 useEffect(()=>{const preference=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setPaused(preference.matches);update();preference.addEventListener('change',update);return()=>preference.removeEventListener('change',update)},[]);
 useEffect(()=>{document.documentElement.dataset.motion=paused?'paused':'playing'},[paused]);
 useEffect(()=>{if(paused)return;const nodes=document.querySelectorAll('.section-heading,.client-project,.journey-step,.why-grid article,.process-grid article');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{threshold:.08});nodes.forEach(node=>{if(node.getBoundingClientRect().top>window.innerHeight){node.classList.add('reveal-ready');observer.observe(node)}});return()=>{observer.disconnect();nodes.forEach(n=>n.classList.remove('reveal-ready','in-view'))}},[path,paused]);
 return <button className="motion-toggle" onClick={()=>setPaused(!paused)} aria-label={paused?'Play animations':'Pause animations'} aria-pressed={paused}>{paused?<Play size={12}/>:<Pause size={12}/>}<span>Motion {paused?'off':'on'}</span></button>;
}
