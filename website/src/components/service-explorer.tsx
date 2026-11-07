'use client';
import {useState,useRef} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Check,MousePointer2,Search,MonitorSmartphone,Megaphone,Palette,Settings2} from 'lucide-react';
const services=[
 {label:'Websites',icon:MonitorSmartphone,title:'Make the first visit feel like the right choice.',text:'A website should explain your offer, show why it matters and make the next step obvious. We combine design, development and content so your pages work as part of the sales process.',points:['Custom, responsive design built around your customers','Service pages, portfolio content and clear inquiry paths','Content migrations, URL mapping and technical foundations','A defined plan for updates after launch'],slug:'web-design',note:'A good fit when your website feels dated, is hard to update or leaves visitors unsure what to do.',steps:['Your offer','A clear experience','A useful inquiry']},
 {label:'SEO & local search',icon:Search,title:'Be useful where your next customer is looking.',text:'Search visibility starts with understanding what you sell and what your customer needs to know. We organize services, local information and useful answers into pages that are clear to people and search engines.',points:['Search-intent research and a practical page plan','Technical checks, metadata and internal linking','Google Business Profile work for eligible local businesses','Content updates tied to real services and customer questions'],slug:'seo',note:'A good fit when your services are hard to find or useful pages are getting little relevant search traffic.',steps:['Customer questions','Relevant pages','Qualified discovery']},
 {label:'Google Ads',icon:MousePointer2,title:'Meet demand with a message worth clicking.',text:'Reach people looking for the service you offer. We connect keywords, ad copy, landing pages and tracking, then review whether the inquiries match your market and the jobs you want.',points:['Service and location targeting with a defined budget','Search-term reviews and negative-keyword management','Landing-page and conversion-path improvements','Reporting that separates clicks, inquiries and qualified leads'],slug:'google-ads',note:'A good fit when you have a clear offer, capacity to take on work and a team ready to follow up.',steps:['Active demand','Relevant ad','Sales conversation']},
 {label:'Meta campaigns',icon:Megaphone,title:'Give the right audience a reason to stop.',text:'Facebook and Instagram campaigns need an offer people understand and creative that earns attention. We bring messaging, visual assets and lead capture together, with room to test and learn.',points:['Campaign structure around the offer and audience','Creative variations for Facebook and Instagram','Lead forms or landing pages matched to the campaign','Audience, creative and lead-quality reviews'],slug:'meta-ads',note:'A good fit when your product or service benefits from visual storytelling and a compelling offer.',steps:['A relevant audience','Creative that connects','A clear next step']},
 {label:'Social & creative',icon:Palette,title:'Show up with something worth seeing.',text:'A useful social presence shows your work, answers questions and gives people a feel for your business. We plan the calendar, shape the content and design the assets so your brand feels consistent.',points:['Content themes, calendars and approval workflows','Social posts and captions shaped for each channel','Thumbnails, campaign graphics and branded templates','Content repurposing from your projects and expertise'],slug:'social-media-management',note:'A good fit when content is inconsistent or your team has ideas but little time to turn them into posts.',steps:['Real expertise','Consistent content','A recognizable brand']},
 {label:'Website care',icon:Settings2,title:'Keep your website moving with your business.',text:'Services change. Offers evolve. Your website needs to keep up. We handle agreed updates and publishing work, review key journeys and help prioritize the next useful improvement.',points:['Content publishing and agreed editing allowances','Platform-appropriate technical maintenance','Form and important-link checks after relevant changes','A clear process for requests, reviews and larger projects'],slug:'website-management',note:'A good fit when your website is live but keeping it accurate and useful has become another unfinished job.',steps:['Your update','A careful change','A checked experience']},
];
export function ServiceExplorer(){const[selected,setSelected]=useState(0);const tabs=useRef<(HTMLButtonElement|null)[]>([]);
 function move(event:React.KeyboardEvent,index:number){let next=index;if(event.key==='ArrowRight')next=(index+1)%services.length;else if(event.key==='ArrowLeft')next=(index+services.length-1)%services.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=services.length-1;else return;event.preventDefault();setSelected(next);tabs.current[next]?.focus();}
 return <div className="service-explorer">
  <div className="service-tabs" role="tablist" aria-label="Explore our services">
   {services.map((s,i)=><button className={`explorer-theme-${i}`} key={s.label} ref={el=>{tabs.current[i]=el}} role="tab" id={`service-tab-${i}`} aria-selected={selected===i} aria-controls={`service-panel-${i}`} tabIndex={selected===i?0:-1} onKeyDown={e=>move(e,i)} onClick={()=>setSelected(i)}><span className="explorer-tab-dot" aria-hidden="true"/>{s.label}<ArrowUpRight size={16}/></button>)}
  </div>
  {services.map((s,i)=>{const Icon=s.icon;return <div className={`explorer-theme-${i}`} role="tabpanel" id={`service-panel-${i}`} aria-labelledby={`service-tab-${i}`} hidden={selected!==i} key={s.label} tabIndex={0}>
   <div className="service-panel">
    <div className="service-panel-copy">
     <span className="small-label explorer-label"><span>0{i+1}</span> WHAT WE DO</span>
     <h3>{s.title}</h3><p>{s.text}</p>
     <ul>{s.points.map(p=><li key={p}><Check size={17}/>{p}</li>)}</ul>
     <Link className="text-link" href={`/services/${s.slug}/`}>Explore {s.label.toLowerCase()}<ArrowUpRight size={18}/></Link>
    </div>
    <div className="explorer-visual">
     <div className="explorer-card-top"><span className="explorer-icon"><Icon size={30} strokeWidth={1.5}/></span><span>WONDERWEB STUDIO<br/><b>Made to work together.</b></span><span className="explorer-spark" aria-hidden="true">✳</span></div>
     <div className="explorer-art-title">{['First impressions.','Get discovered.','Make every click','Stop the scroll.','Make your mark.','Keep things'][i]}<em>{['Lasting connections.','Stay relevant.','mean more.','Start a conversation.','Keep showing up.','moving forward.'][i]}</em></div>
     <div className="explorer-flow">{s.steps.map((step,j)=><div className={`explorer-step explorer-step-${j}`} key={step}><span className="explorer-step-number">0{j+1}</span><span>{step}</span>{j===2?<ArrowUpRight size={22} aria-hidden="true"/>:<span className="explorer-flow-arrow" aria-hidden="true">↓</span>}</div>)}</div>
     <div className="explorer-note"><span>IS THIS YOU?</span><p>{s.note}</p></div>
    </div>
   </div>
  </div>})}
 </div>;
}
