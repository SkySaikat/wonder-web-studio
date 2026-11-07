import type { NextConfig } from 'next';

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/results/coastal-bath-paid-search', destination: '/results/bathroom-paid-search-efficiency/', permanent: true },
      { source: '/blog', destination: '/resources/', permanent: true },
      { source: '/blog/:slug', destination: '/resources/:slug/', permanent: true },
      { source: '/contact-us', destination: '/contact/', permanent: true },
      { source: '/terms-of-use', destination: '/terms/', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/results/coastal-bath-paid-search', destination: '/results/bathroom-paid-search-efficiency/', permanent: true },{ source: '/:path*', headers: [
      { key: 'Link', value: '</llms.txt>; rel="describedby"; type="text/plain"' },
      ...(process.env.SITE_INDEXABLE === 'true' ? [] : [{key:'X-Robots-Tag',value:'noindex, nofollow'}]),
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }];
  },
};
export default config;
