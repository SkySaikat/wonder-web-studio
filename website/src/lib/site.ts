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
  { name: 'SEO Partnership', price: 7500, tag: 'Build demand through search', description: 'A dedicated SEO partnership for businesses ready to turn organic visibility into qualified opportunities.', items: ['Technical SEO, search strategy and conversion roadmap', '6 original articles or priority page updates / month', 'Up to 10 hours of technical SEO and website improvements', 'One brand, one website and one priority market', 'Monthly strategy and search-to-inquiry reporting'], note: 'A focused search partnership. Paid campaigns and organic social production are separate. Content and implementation allowances are agreed before work starts.' },
  { name: 'Growth Partnership', price: 15000, tag: 'Connect SEO, social and acquisition', description: 'Bring search, social media and one paid channel together around the services and customers you want to grow.', items: ['SEO strategy across up to 2 priority markets', '8 original articles or priority page updates / month', 'Up to 20 hours of technical SEO and website improvements', '16 social posts adapted across up to 3 profiles', 'Google Ads OR Meta Ads; up to $25,000 media spend managed', 'Twice-monthly strategy and qualified-inquiry reviews'], note: 'One brand and website. These are total monthly allowances. Media spend, new website builds, filming and third-party tools are separate.' },
  { name: 'Full Agency', price: 25000, tag: 'Your full agency partnership', description: 'A coordinated marketing team for ambitious businesses, with SEO at the center and social, paid campaigns and website improvements working together.', items: ['SEO and AI-search strategy across up to 3 priority markets', '12 original articles or priority page updates / month', 'Up to 30 hours of technical SEO and website improvements', '24 social posts adapted across up to 4 profiles', 'Google Ads AND Meta Ads; up to $75,000 media spend managed', 'Weekly strategy, creative planning and pipeline reporting'], note: 'One brand and website, with a defined delivery plan. These are total monthly allowances. Media spend, new website builds, filming and third-party tools are separate. Additional brands or markets receive a tailored scope.' },
] as const;
