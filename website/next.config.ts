import type { NextConfig } from 'next';

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact/', permanent: true },
      { source: '/terms-of-use', destination: '/terms/', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/:path*', headers: [
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
