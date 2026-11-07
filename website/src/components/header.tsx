'use client';
import Link from 'next/link';
import {BookCallButton} from './booking';
import Image from '@/components/content-image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
const groups=[{title:'Websites',links:[['Website design','web-design'],['Web development','web-development'],['Website management','website-management']]},{title:'Search & advertising',links:[['SEO','seo'],['Local SEO','local-seo'],['Google Ads','google-ads'],['Meta Ads','meta-ads']]},{title:'Social & creative',links:[['Social media management','social-media-management'],['Content creation','content-creation'],['Graphic design','graphic-design'],['Thumbnails','thumbnail-design']]}];
export function Header(){
  const headerRef=useRef<HTMLElement>(null);
  const [hidden,setHidden]=useState(false);
  const [menu,setMenu]=useState(false);const [servicesOpen,setServicesOpen]=useState(false);const path=usePathname();
  useEffect(()=>{setMenu(false);setServicesOpen(false);setHidden(false)},[path]);
  useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setMenu(false);setServicesOpen(false)}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[]);
  useEffect(()=>{
    let previous=Math.max(0,window.scrollY);let travel=0;let direction=0;let frame=0;
    const update=()=>{
      frame=0;
      const maxScroll=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
      const current=Math.max(0,Math.min(window.scrollY,maxScroll));
      const delta=current-previous;previous=current;
      if(current<120){setHidden(false);travel=0;return;}
      if(menu||servicesOpen||(headerRef.current?.contains(document.activeElement)&&document.activeElement?.matches(':focus-visible'))){setHidden(false);travel=0;return;}
      const nextDirection=Math.sign(delta);
      if(!nextDirection)return;
      travel=nextDirection===direction?travel+Math.abs(delta):Math.abs(delta);direction=nextDirection;
      if(travel>=14){setHidden(nextDirection>0);travel=0;}
    };
    const onScroll=()=>{if(!frame)frame=window.requestAnimationFrame(update)};
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>{window.removeEventListener('scroll',onScroll);window.cancelAnimationFrame(frame)};
  },[menu,servicesOpen,path]);
  return <header ref={headerRef} className={`site-header ${hidden&&!menu&&!servicesOpen?'header-hidden':''}`} onFocusCapture={()=>setHidden(false)}><div className="container header-inner"><Link href="/" className="logo" aria-label="Wonderweb Studio home"><Image src="/brand/wonderweb-studio.svg" alt="Wonderweb Studio" width={177} height={51} priority/></Link><nav className={`main-nav ${menu?'is-open':''}`} id="primary-navigation" aria-label="Main navigation"><div className="nav-dropdown"><button aria-expanded={servicesOpen} aria-controls="service-menu" onClick={()=>setServicesOpen(!servicesOpen)}>Services<ChevronDown size={14}/></button>{servicesOpen?<div id="service-menu" className="mega-menu">{groups.map(g=><div key={g.title}><span>{g.title}</span>{g.links.map(([label,slug])=><Link key={slug} href={`/services/${slug}/`}>{label}</Link>)}</div>)}<Link href="/services/" className="all-services">Explore all services <ArrowUpRight size={16}/></Link></div>:null}</div><Link href="/work/">Our work</Link><Link href="/industries/">Who we help</Link><Link href="/locations/">Locations</Link><Link href="/pricing/">Pricing</Link><Link href="/resources/">Blog</Link><Link href="/about/">The studio</Link><BookCallButton className="mobile-contact" onOpen={()=>{setMenu(false);setServicesOpen(false)}}/></nav><BookCallButton className="header-cta" onOpen={()=>{setMenu(false);setServicesOpen(false)}}/><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} aria-controls="primary-navigation">{menu?<X/>:<Menu/>}</button></div>{servicesOpen?<button className="menu-backdrop" tabIndex={-1} onClick={()=>setServicesOpen(false)} aria-label="Close services menu"/>:null}</header>;
}
