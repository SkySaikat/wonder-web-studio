import {isSiteIndexable} from './indexing';
export const site = {
  name: 'Wonderweb Studio',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wonderwebstudio.com').replace(/\/+$/, ''),
  email: 'info@wonderwebstudio.com',
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
  { name: 'Foundation', price: 1199, tag: 'Build your presence', description: 'For businesses that need a stronger website and a clear local search foundation.', items: ['One business location', 'Website care & up to 2 hours of edits', 'Local profile and on-page SEO review', 'One priority content or page update / month', 'Monthly performance summary'], note: 'For an existing website. New builds, specialist SEO, AI search programs and paid ads are separate.' },
  { name: 'Growth', price: 1999, tag: 'Create more opportunities', description: 'Connect local SEO, content and one paid channel around a focused offer.', items: ['Everything in Foundation', 'Google Ads OR Microsoft Ads management', 'One campaign landing-page improvement / month', 'Two content deliverables / month', 'Monthly strategy and lead-quality review'], note: 'One search ad account, one market and up to $5,000 monthly media spend managed. New builds and dedicated SEO / AI search programs are separate. Media spend is additional.' },
  { name: 'Connected Growth', price: 3999, tag: 'Your connected marketing team', description: 'Coordinate two paid channels, organic social and website improvements with one monthly plan.', items: ['Everything in Foundation', 'Google Ads AND Meta Ads management', 'Four content deliverables / month', 'Eight organic social posts across 2 profiles', 'Creative testing and twice-monthly reviews'], note: 'One market, two ad accounts and up to $10,000 combined monthly media spend managed. A defined marketing allowance, not every studio service. New builds, specialist SEO / AI search and media spend are separate.' },
] as const;
