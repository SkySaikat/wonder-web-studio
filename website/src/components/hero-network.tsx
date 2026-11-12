import {MonitorSmartphone,Search,MessagesSquare,Sparkles} from 'lucide-react';
import Link from 'next/link';

export function HeroNetwork(){
  return <div className="hero-network" aria-label="One connected team for websites, search and social">
    <svg className="hero-network-lines" viewBox="0 0 320 174" fill="none" aria-hidden="true">
      <ellipse cx="160" cy="87" rx="114" ry="66"/>
      <path d="M160 87 78 35M160 87l87-52M160 87v60"/>
      <circle cx="46" cy="87" r="3"/><circle cx="274" cy="87" r="3"/>
    </svg>
    <div className="hero-network-mark" aria-hidden="true"><em>w</em><Sparkles size={18}/></div>
    <Link href="/services/web-design/" className="hero-network-node hero-network-web"><MonitorSmartphone size={17}/><span>Websites</span></Link>
    <Link href="/services/seo/" className="hero-network-node hero-network-search"><Search size={17}/><span>Search</span></Link>
    <Link href="/services/social-media-management/" className="hero-network-node hero-network-social"><MessagesSquare size={17}/><span>Social & content</span></Link>
  </div>;
}
