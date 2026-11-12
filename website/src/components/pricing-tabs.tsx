'use client';

import {useEffect,useRef,useState,type ReactNode} from 'react';

type TabItem={id:string;label:string;caption?:string;content:ReactNode};
export function PricingTabs({items,label,variant='primary'}:{items:TabItem[];label:string;variant?:'primary'|'secondary'}){
 const [active,setActive]=useState(items[0].id);
 const buttons=useRef<(HTMLButtonElement|null)[]>([]);
 useEffect(()=>{
  function fromHash(){
   let hash='';try{hash=decodeURIComponent(window.location.hash.slice(1))}catch{return}
   const target=hash?document.getElementById(hash):null;
   const match=items.find(item=>item.id===hash||(target&&document.getElementById(item.id)?.contains(target)));
   if(match){setActive(match.id);if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}
  }
  fromHash();window.addEventListener('hashchange',fromHash);
  return()=>window.removeEventListener('hashchange',fromHash);
 },[items]);
 function select(index:number,focus=false){setActive(items[index].id);if(focus)buttons.current[index]?.focus();}
 return <div className={`pricing-tabs pricing-tabs-${variant}`}>
  <div role="tablist" aria-label={label} className="pricing-tab-list">{items.map((item,i)=><button type="button" role="tab" id={`${item.id}-tab`} key={item.id} ref={node=>{buttons.current[i]=node}} aria-selected={active===item.id} aria-controls={item.id} tabIndex={active===item.id?0:-1} onClick={()=>select(i)} onKeyDown={event=>{
   const next=event.key==='ArrowRight'?(i+1)%items.length:event.key==='ArrowLeft'?(i+items.length-1)%items.length:event.key==='Home'?0:event.key==='End'?items.length-1:null;
   if(next!==null){event.preventDefault();select(next,true)}
  }}>{item.caption?<span>{item.caption}</span>:null}<strong>{item.label}</strong></button>)}</div>
  {items.map(item=><div role="tabpanel" key={item.id} id={item.id} aria-labelledby={`${item.id}-tab`} tabIndex={0} hidden={active!==item.id} className="pricing-tab-panel">{item.content}</div>)}
 </div>;
}
