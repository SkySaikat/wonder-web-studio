import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Plus, Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { jsonLd, site } from '@/lib/site';

export function Button({href,children,secondary=false,className=''}:{href:string;children:ReactNode;secondary?:boolean;className?:string}) {
  return <Link href={href} className={`button ${secondary?'button-secondary':''} ${className}`}>{children}<ArrowUpRight size={18}/></Link>;
}
export function Eyebrow({children}:{children:ReactNode}) { return <div className="eyebrow"><span/>{children}</div>; }
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}) {
  const list=[{label:'Home',href:'/'},...items];
  return <><nav aria-label="Breadcrumb" className="breadcrumbs">{list.map((item,i)=><span key={i}>{i>0?<span aria-hidden="true">/</span>:null}{item.href?<Link href={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:list.map((item,i)=>({'@type':'ListItem',position:i+1,name:item.label,...(item.href?{item:new URL(item.href,site.url).href}:{})}))})}}/></>;
}
export function PageHero({eyebrow,title,description,crumbs,children}:{eyebrow:string;title:string;description:string;crumbs?:{label:string;href?:string}[];children?:ReactNode}) {
  return <section className="page-hero"><div className="container">{crumbs?<Breadcrumbs items={crumbs}/>:null}<Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="hero-description">{description}</p>{children}</div></section>;
}
export function CTA({title='Your next chapter starts with a conversation.',text='Tell us where your business is today and where you want it to go. We’ll help you find a useful next step.'}:{title?:string;text?:string}) {
  return <section className="cta-section"><div className="container cta-inner"><div><Eyebrow>LET’S MAKE SOMETHING MATTER</Eyebrow><h2>{title}</h2><p>{text}</p></div><Link className="cta-circle" href="/contact/" aria-label="Start a project"><ArrowUpRight size={58}/><span>Let’s talk</span></Link></div></section>;
}
export function FAQ({items}:{items:[string,string][]}) {
  return <div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<Plus size={20}/></summary><p>{a}</p></details>)}</div>;
}
export function CheckList({items}:{items:readonly string[]}) { return <ul className="check-list">{items.map(x=><li key={x}><Check size={17}/><span>{x}</span></li>)}</ul>; }
export function TextLink({href,children}:{href:string;children:ReactNode}) { return <Link className="text-link" href={href}>{children}<ArrowRight size={18}/></Link>; }
