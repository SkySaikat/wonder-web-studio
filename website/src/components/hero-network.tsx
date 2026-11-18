import {MonitorSmartphone,Search,MessagesSquare,Store} from 'lucide-react';
import Link from 'next/link';

export function HeroNetwork(){
  return <div className="hero-network" aria-label="Your business, connected to websites, search and social">
    <svg className="hero-network-lines" viewBox="0 0 320 250" fill="none" aria-hidden="true">
      <ellipse cx="160" cy="125" rx="128" ry="94"/>
      <path d="M160 120 70 34M160 120 250 34M160 120v102"/>
      <circle cx="32" cy="125" r="3"/><circle cx="288" cy="125" r="3"/>
    </svg>
    <div className="hero-network-mark"><Store size={32} strokeWidth={1.6} aria-hidden="true"/><strong>Your business</strong></div>
    <Link href="/services/web-design/" className="hero-network-node hero-network-web"><MonitorSmartphone size={17} aria-hidden="true"/><span>Websites</span></Link>
    <Link href="/services/seo/" className="hero-network-node hero-network-search"><Search size={17} aria-hidden="true"/><span>Search</span></Link>
    <Link href="/services/social-media-management/" className="hero-network-node hero-network-social"><MessagesSquare size={17} aria-hidden="true"/><span>Social & content</span></Link>
  </div>;
}
