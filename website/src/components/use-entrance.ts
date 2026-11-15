'use client';
import {useEffect,useRef,useState} from 'react';

/** Start an illustration once it actually enters the viewport, never on a timer at page load. */
export function useEntrance<T extends HTMLElement>(){
 const ref=useRef<T>(null);const [entered,setEntered]=useState(false);
 useEffect(()=>{
  const node=ref.current;if(!node)return;
  const observer=new IntersectionObserver(entries=>{
   if(entries.some(entry=>entry.isIntersecting)){setEntered(true);observer.disconnect();}
  },{threshold:.2});
  observer.observe(node);return()=>observer.disconnect();
 },[]);
 return {ref,entered};
}
