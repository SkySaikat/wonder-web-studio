import type { NextConfig } from 'next';
import {isSiteIndexable} from './src/lib/indexing';
import guides from './src/data/download-guides.json';

const config: NextConfig = {
  trailingSlash: true,
  serverExternalPackages: ['nodemailer'],
  outputFileTracingIncludes: {'/*':['./src/data/migrated/*.json'],'/api/guides/*':['./private/guides/*']},
  poweredByHeader: false,
  async redirects() {
    return [
      {source:'/resources/local-seo-best-practices-boosting-your-home-improvement-business-with-built-right-digital',destination:'/resources/local-seo-home-improvement-checklist/',permanent:true},
      {source:'/content/resources/local-seo-best-practices-boosting-your-home-improvement-business-with-built-right-digital.md',destination:'/content/resources/local-seo-home-improvement-checklist.md',permanent:true},
      ...guides.flatMap(guide=>[`${guide.slug}.pdf`,...('csv' in guide?[`${guide.slug}.csv`]:[])].map(file=>({source:`/guides/${file}`,destination:`/guides/${guide.slug}/`,permanent:false}))),
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: '/results/coastal-bath-paid-search', destination: '/results/bathroom-paid-search-efficiency/', permanent: true },
      { source: '/blog', destination: '/resources/', permanent: true },
      { source: '/blog/:slug', destination: '/resources/:slug/', permanent: true },
      { source: '/contact-us', destination: '/contact/', permanent: true },
      { source: '/terms-of-use', destination: '/terms/', permanent: true },
    ];
  },
  async headers() {
    return [{source:'/:path((?!content/).*)',headers:[
      {key:'Link',value:'</llms.txt>; rel="describedby"; type="text/plain"'},
    ]},{ source: '/:path*', headers: [
      ...(isSiteIndexable() ? [] : [{key:'X-Robots-Tag',value:'noindex, nofollow'}]),
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }];
  },
};
export default config;
