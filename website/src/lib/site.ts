
export const site = {
  name: 'Wonderweb Studio',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderwebstudio.com').replace(/\/+$/, ''),
  email: 'info@wonderwebstudio.com',
  description: 'Websites, SEO, paid ads, social media and creative content for ambitious small businesses. One studio, a connected plan, and a clearer path to your next customer.',
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/wonderwebstudio' },
    { name: 'Facebook', url: 'https://www.facebook.com/wonderwebstudioltd' },
    { name: 'YouTube', url: 'https://www.youtube.com/@WonderWebStudio' },
    { name: 'Threads', url: 'https://www.threads.com/@wonderwebstudio' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/wonderwebstudioltd/' },
  ],
};
export const indexable = process.env.SITE_INDEXABLE === 'true';
export function jsonLd(value: unknown) { return JSON.stringify(value).replace(/</g, '\\u003c'); }
export const plans = [
  { name: 'Foundation', price: 1199, tag: 'Build your presence', description: 'For businesses that need a stronger website and a clear local search foundation.', items: ['One business location', 'Website care & up to 2 hours of edits', 'Local profile and on-page SEO review', 'One priority content or page update / month', 'Monthly performance summary'], note: 'Paid campaign management and ad spend are separate.' },
  { name: 'Growth', price: 1999, tag: 'Create more opportunities', description: 'Connect local SEO, content and one paid channel around a focused offer.', items: ['Everything in Foundation', 'Google Ads OR Meta Ads management', 'One campaign landing-page improvement / month', 'Two content deliverables / month', 'Monthly strategy and lead-quality review'], note: 'One ad account, one market and up to $5,000 monthly ad spend managed. Ad spend paid separately.' },
  { name: 'Full Studio', price: 3999, tag: 'Your connected marketing team', description: 'Bring your website, search, ads and social content into one coordinated plan.', items: ['Everything in Foundation', 'Google Ads AND Meta Ads management', 'Four content deliverables / month', 'Eight organic social posts across 2 profiles', 'Creative testing and twice-monthly reviews'], note: 'One market, two ad accounts and up to $10,000 combined monthly ad spend managed. Ad spend paid separately.' },
] as const;
