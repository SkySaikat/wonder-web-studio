import {isSiteIndexable} from './indexing';
export const site = {
  name: 'Wonderweb Studio',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wonderwebstudio.com').replace(/\/+$/, ''),
  email: 'info@wonderwebstudio.com',
  /** US sales line. Set NEXT_PUBLIC_PHONE (e.g. "+1 (214) 555-0100") to show click-to-call site-wide; blank hides it. */
  phone: (process.env.NEXT_PUBLIC_PHONE || '').trim(),
  description: 'Web design and digital marketing for US small businesses and home-service companies. A fully remote agency serving US clients first and businesses worldwide.',
  positioning: 'Wonderweb Studio is a fully remote web design and digital marketing agency focused primarily on US small businesses and home-service companies, with services available worldwide, including Canada and Australia.',
  serviceAreas: ['United States', 'Worldwide', 'Canada', 'Australia'],
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/wonderwebstudio' },
    { name: 'Facebook', url: 'https://www.facebook.com/wonderwebstudioltd' },
    { name: 'YouTube', url: 'https://www.youtube.com/@WonderWebStudio' },
    { name: 'Threads', url: 'https://www.threads.com/@wonderwebstudio' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/wonderwebstudioltd/' },
  ],
};
export const studioCoverageFaq:[string,string]=[
  'Where does Wonderweb Studio work with clients?',
  'We are a fully remote agency focused primarily on US small businesses and home-service companies. We also serve businesses worldwide, including Canada and Australia. Our team collaborates across locations, with a shared project plan and review times agreed around your time zone. Our market guides describe the businesses we serve, not physical studio offices.',
];
export const indexable = isSiteIndexable();
export function jsonLd(value: unknown) { return JSON.stringify(value).replace(/</g, '\\u003c'); }
export const plans = [
  { name: 'Growth Engine', tier: 'Tier 1', price: 3000, tag: 'Build your next source of demand', description: 'A focused growth program for a local business ready to connect better marketing with more qualified conversations.', items: ['Google Ads or Meta Ads management for your priority offer', 'Local SEO and eligible Google Business Profile optimization', 'Core service pages and landing-page improvements', 'On-brand social graphics, ad copy and content planning', 'Conversion tracking and monthly qualified-lead reviews'], note: 'We agree your priority market, channel and production schedule together. Media spend, third-party tools, filming and a complete website rebuild are separate.' },
  { name: 'Market Leader', tier: 'Tier 2', price: 8000, tag: 'Connect the whole customer journey', description: 'Bring SEO, social content and paid acquisition together to win attention, build trust and turn more interest into qualified conversations.', items: ['Google Ads and Meta Ads with retargeting and creative testing', 'SEO, local visibility and original search-focused content', 'Service and location pages as your agreed roadmap needs', 'Social publishing and short-form video editing from your footage', 'Website improvements and a clearer route from inquiry to follow-up', 'Twice-monthly strategy and pipeline reviews'], note: 'A connected program for your business. Your proposal sets the markets, channels and delivery rhythm. Media spend, filming, third-party tools and complete website rebuilds are separate.' },
  { name: 'Omnipresence', tier: 'Tier 3', price: 15000, tag: 'Your market. A bigger presence.', description: 'Your full agency team across search, AI discovery, paid media, content and the website, coordinated around one ambitious growth plan.', items: ['Advanced SEO, local visibility and AI-search optimization', 'Unlimited service-page requests in a prioritized delivery queue', 'Google Ads and Meta Ads, with wider channels where they fit', 'Social content, campaign design and video editing from your footage', 'Website development, conversion improvements and agreed CRM workflows', 'Weekly strategy, creative planning and qualified-pipeline reporting'], note: 'Programs from $15,000 to $25,000 per month. No fixed lifetime page cap; work is delivered progressively through an agreed production schedule. Media spend, on-site filming, tools, complete rebuilds and custom applications are separately scoped.' },
] as const;

export const phoneHref=(phone=site.phone)=>phone?`tel:${phone.replace(/[^\d+]/g,'')}`:'';
