'use client';

import {useEffect,useId,useRef,useState,type ReactNode} from 'react';
import {ArrowLeft,ArrowRight} from 'lucide-react';

export function HorizontalRail({children,label}:{children:ReactNode;label:string}){
 const id=useId();
 const rail=useRef<HTMLDivElement>(null);
 const [edges,setEdges]=useState({start:true,end:false});
 useEffect(()=>{
  const node=rail.current;if(!node)return;
  let frame=0;
  const measure=()=>{const start=node.scrollLeft<=2;const end=node.scrollLeft+node.clientWidth>=node.scrollWidth-2;setEdges(old=>old.start===start&&old.end===end?old:{start,end});};
  const onScroll=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);};
  const observer=new ResizeObserver(measure);observer.observe(node);
  node.addEventListener('scroll',onScroll,{passive:true});measure();
  return()=>{observer.disconnect();node.removeEventListener('scroll',onScroll);cancelAnimationFrame(frame);};
 },[]);
 function move(direction:number){const node=rail.current;if(node)node.scrollBy({left:direction*node.clientWidth*.82,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.dataset.motion==='paused'?'instant':'smooth'});}
 return <div className="growth-rail-shell">
  <div className="growth-rail-toolbar"><p>Four connected steps. Explore at your pace.</p><div><button type="button" aria-label="Previous growth steps" aria-controls={id} disabled={edges.start} onClick={()=>move(-1)}><ArrowLeft size={21} aria-hidden="true"/></button><button type="button" aria-label="Next growth steps" aria-controls={id} disabled={edges.end} onClick={()=>move(1)}><ArrowRight size={21} aria-hidden="true"/></button></div></div>
  <div className="growth-rail" id={id} ref={rail} role="region" aria-label={label} tabIndex={0}>{children}</div>
 </div>;
}
