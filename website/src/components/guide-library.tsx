'use client';

import {useEffect,useRef,useState} from 'react';
import Script from 'next/script';
import Image from '@/components/content-image';
import {ArrowDown,ArrowUpRight,CheckCircle2,LoaderCircle,X} from 'lucide-react';
import guides from '@/data/download-guides.json';
import {trackEvent} from './analytics';
import type {} from './inquiry-form';

type Guide=(typeof guides)[number];
function GuideForm({guide}:{guide:Guide}){
  const [status,setStatus]=useState<'idle'|'sending'|'success'>('idle');
  const [error,setError]=useState('');const [token,setToken]=useState('');
  const widget=useRef<HTMLDivElement>(null);const widgetId=useRef<string|null>(null);const requestId=useRef('');
  const key=process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  function mountWidget(){if(widget.current&&window.turnstile&&!widgetId.current)widgetId.current=window.turnstile.render(widget.current,{sitekey:key,action:'inquiry',theme:'light',callback:(value:string)=>setToken(value),'expired-callback':()=>setToken(''),'error-callback':()=>{setToken('');setError('The security check could not load. Please try again.')}});}
  useEffect(()=>{requestId.current=crypto.randomUUID();mountWidget();return()=>{if(widgetId.current)window.turnstile?.remove(widgetId.current);widgetId.current=null}},[]);
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();if(status==='sending')return;setError('');
    if(key&&!token){setError('Please complete the security check.');return;}
    const data=new FormData(event.currentTarget);const field=(name:string)=>String(data.get(name)||'');
    const params=new URLSearchParams(window.location.search);const utm:Record<string,string>={};
    for(const name of ['utm_source','utm_medium','utm_campaign'])if(params.get(name))utm[name]=params.get(name)!.slice(0,120);
    const body={name:field('name'),email:field('email'),website:field('website'),service:`Guide: ${guide.category}`,message:`Requested ${guide.title}. Business goal: ${field('goal')}.`,consent:data.get('consent')==='on',companyFax:field('companyFax'),token,requestId:requestId.current,source:`/guides/#${guide.slug}`,utm,guide:{slug:guide.slug,businessName:field('businessName'),phone:field('phone'),market:field('market'),goal:field('goal')}};
    setStatus('sending');
    try{
      const response=await fetch('/api/inquiry/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(55000)});
      const result=await response.json();if(!response.ok||!result.ok)throw new Error(result.message||'We could not save your request. Please try again.');
      setStatus('success');trackEvent('generate_lead',{method:'guide_download',guide:guide.slug});
    }catch(error){setStatus('idle');setError(error instanceof Error?error.message:'Please try again. Your details are still here.');if(widgetId.current)window.turnstile?.reset(widgetId.current);setToken('');}
  }
  if(status==='success')return <div className="guide-unlocked" role="status"><CheckCircle2 size={46}/><span className="small-label">YOU’RE ALL SET</span><h3>A good next move.</h3><p>Your business details have reached the studio. Your guide is ready below, and we may follow up about your marketing goals.</p><a className="button" href={`/api/guides/${guide.slug}/`} download onClick={()=>trackEvent('file_download',{guide:guide.slug,format:'pdf'})}>Download your PDF <ArrowDown size={18}/></a>{'csv' in guide?<a className="quiet-link" href={`/api/guides/${guide.slug}/?format=csv`} download>Download the editable CSV <ArrowDown size={16}/></a>:null}<small>Download access stays available in this browser for 24 hours.</small></div>;
  return <form className="inquiry-form guide-lead-form" onSubmit={submit}>
    <span className="small-label">A USEFUL GUIDE. A SMARTER NEXT STEP.</span><h3>Get your free guide.</h3><p>Tell us a little about your business to unlock the PDF{'csv' in guide?' and editable worksheet':''}.</p>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" required minLength={2} maxLength={100}/></label><label>Work email<input name="email" autoComplete="email" type="email" required maxLength={254}/></label></div>
    <div className="form-row"><label>Business name<input name="businessName" autoComplete="organization" required minLength={2} maxLength={150}/></label><label>Phone number<input name="phone" autoComplete="tel" type="tel" required minLength={7} maxLength={40}/></label></div>
    <div className="form-row"><label>Business website (optional)<input name="website" autoComplete="url" maxLength={300} placeholder="yourbusiness.com"/></label><label>City / service area<input name="market" required minLength={2} maxLength={150} placeholder="Austin, TX"/></label></div>
    <label>Your main marketing goal<select name="goal" required defaultValue=""><option value="" disabled>Choose your priority</option><option>More qualified leads</option><option>Better Google visibility</option><option>Lower advertising costs</option><option>A better website</option><option>Improve customer follow-up</option><option>Plan my next steps</option></select></label>
    <div className="honeypot" aria-hidden="true"><label>Company fax<input name="companyFax" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="consent"><input type="checkbox" name="consent" required/><span>I agree that Wonderweb Studio may contact me by email or phone about this guide and my business goals. I have read the <a href="/privacy-policy/">privacy policy</a>. No newsletter subscription.</span></label>
    {key?<><Script id="turnstile-script" src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={mountWidget}/><div ref={widget}/></>:null}
    {error?<p role="alert" className="form-error">{error}</p>:null}<button type="submit" className="button" disabled={status==='sending'}>{status==='sending'?<>Saving your request <LoaderCircle className="spin" size={18}/></>:<>Unlock my free guide <ArrowUpRight size={18}/></>}</button>
  </form>;
}

export function GuideLibrary(){
  const [trade,setTrade]=useState('all');const [selected,setSelected]=useState<Guide|null>(null);const dialog=useRef<HTMLDialogElement>(null);
  const previousOverflow=useRef('');
  useEffect(()=>{if(!selected||!dialog.current)return;dialog.current.showModal();previousOverflow.current=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previousOverflow.current}},[selected]);
  function close(){dialog.current?.close();setSelected(null);}
  return <><div className="guide-filter" role="group" aria-label="Filter guides by trade">{['all','roofing','plumbing','electrician','general-contractor'].map(value=><button key={value} aria-pressed={trade===value} onClick={()=>setTrade(value)}>{value==='all'?'All trades':guides.find(g=>g.trade===value)?.industry}</button>)}</div><p className="guide-count" aria-live="polite">{guides.filter(g=>trade==='all'||g.trade===trade).length} practical guides · Free with business signup</p>
    <div className="guide-library">{guides.filter(g=>trade==='all'||g.trade===trade).map(g=><article className="guide-download" id={g.slug} key={g.slug}><button className="guide-cover-button" onClick={()=>setSelected(g)} aria-label={`Get ${g.title}`}><Image src={g.cover} alt={`${g.title} cover`} width={612} height={792} sizes="(max-width:750px) 85vw, 30vw"/><span>OPEN YOUR NEXT CHAPTER ↗</span></button><small>{g.industry} · {g.pages} pages · PDF{'csv' in g?' + CSV':''}</small><h3>{g.title}</h3><p>{g.description}</p><button className="button" onClick={()=>setSelected(g)}>Get the free guide <ArrowUpRight size={17}/></button></article>)}</div>
    <dialog ref={dialog} className="guide-dialog" aria-labelledby="guide-modal-title" onCancel={close} onClick={event=>{if(event.target===event.currentTarget)close()}}><button className="guide-dialog-close" onClick={close} aria-label="Close guide form"><X/></button>{selected?<div className="guide-dialog-grid"><div className="guide-dialog-preview"><Image src={selected.cover} alt="" width={306} height={396}/><h2 id="guide-modal-title">{selected.title}</h2><p>{selected.description}</p><span>{selected.pages} pages of practical next steps.</span></div><GuideForm key={selected.slug} guide={selected}/></div>:null}</dialog>
  </>;
}
