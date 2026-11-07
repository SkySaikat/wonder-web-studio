'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
declare global {interface Window {dataLayer:unknown[];gtag?:(...args:unknown[])=>void;}}
const KEY='wonderweb-analytics-consent-v1';
export function trackEvent(name:string,parameters:Record<string,string|number>={}){try{if(localStorage.getItem(KEY)==='granted')window.gtag?.('event',name,parameters)}catch{}}
export function Analytics(){
  const id=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID??'G-EZ5WDZDQWC';const valid=!!id&&/^G-[A-Z0-9]+$/.test(id);
  const [choice,setChoice]=useState<string|null>(null);const[show,setShow]=useState(false);const[ready,setReady]=useState(false);const path=usePathname();
  useEffect(()=>{try{const stored=localStorage.getItem(KEY);setChoice(stored);setShow(valid&&!stored)}catch{setShow(valid)};const open=()=>setShow(true);const trigger=document.querySelector('[data-cookie-settings]');trigger?.addEventListener('click',open);return()=>trigger?.removeEventListener('click',open)},[valid]);
  useEffect(()=>{if(ready&&choice==='granted'&&id)window.gtag?.('event','page_view',{page_path:path,page_location:window.location.origin+path,page_title:document.title})},[path,ready,choice,id]);
  function choose(value:string){try{localStorage.setItem(KEY,value)}catch{}setChoice(value);setShow(false);if(window.gtag){window.gtag('consent','update',{analytics_storage:value,ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});}if(value==='denied'&&ready)window.location.reload();}
  return <>{valid&&choice==='granted'?<Script id="google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" onLoad={()=>{window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});window.gtag('js',new Date());window.gtag('config',id,{send_page_view:false});setReady(true)}}/>:null}{show?<div className="cookie-banner" role="region" aria-label="Cookie preferences"><div><strong>A small note on cookies.</strong><p>{valid?'With your permission, we use Google Analytics to understand how our website is used. You can decline and still use the site.':'Optional analytics is not currently enabled. Essential preferences keep your choice saved.'} <a href="/privacy-policy/">Privacy details</a></p></div><button onClick={()=>choose('denied')}>Essential only</button>{valid?<button className="accept" onClick={()=>choose('granted')}>Allow analytics</button>:null}</div>:null}</>;
}
