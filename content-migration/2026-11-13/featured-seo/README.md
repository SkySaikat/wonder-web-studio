# Featured imagery and search discovery update

Completed locally on 2026-11-13. Website implementation is in commit `a62f669` (following `0a9082d`). This report records final verification, not a claim of live deployment or search-engine indexing.

## Delivered

- 29 new Gemini-generated editorial illustrations covering every service and general studio, industry, market-planning and resource topics.
- 882 individually titled 1440 × 810 WebP featured covers, combining 69 artwork sources. These reuse relevant illustrations across related topics; they are not 882 separately generated illustrations. Existing project screenshots and earlier editorial artwork are retained where appropriate.
- A distinct 1200 × 630 social/share image for each page.
- 1,839 catalogued image assets with descriptive names, descriptions, MIME types and dimensions. Featured images have meaningful HTML alt text and titles. Decorative graphics retain empty alt text.
- Featured covers integrated into service, location, industry and resource layouts. Existing homepage hero, portfolio screenshots and case-study imagery remain in place.
- US-focused positioning in shared organization metadata, schema, the homepage/about copy, footer, Markdown content and LLM discovery files. The studio is described as fully remote, primarily serving US small businesses and home-service companies, with worldwide service including Canada and Australia. No US headquarters or physical office is invented.
- Page-appropriate WebPage, Service, BlogPosting/Article, CollectionPage, CreativeWork, breadcrumb and image structured data, alongside the shared Organization/WebSite graph.
- Canonical URLs, unique SEO titles/descriptions, Open Graph and Twitter cards, image previews, and a linked Markdown version for every published page.
- Production sitemap includes all published pages and their relevant image URLs. Public payment-information page is now indexable. API endpoints, unpublished scheduled content and non-production previews retain appropriate restrictions.

## Verification

- `npm test`: 26 passed, 0 failed.
- `SITE_INDEXABLE=true npm run build`: passed, including TypeScript.
- `node scripts/check-featured-images.mjs`: 882 covers checked; correct dimensions and actual visible artwork; no failures.
- Full rendered production-mode audit: 879 public pages, 879 Markdown pages, 879 unique titles, descriptions and share images, and 1,802 sitemap image URLs. Schema.org vocabulary checks passed. No page or discovery issues.
- Browser: desktop blog, service and directory images plus mobile directory/location images loaded correctly, with descriptive alt text and no horizontal overflow at 390px.
- Source image URLs use the `-v2.webp` suffix so earlier optimized-image caches cannot retain the interim blank cover rendition.
- Gemini key remains in the ignored private environment file, outside the repository and generated artifacts.

## Discovery URLs after deployment

- https://www.wonderwebstudio.com/sitemap.xml
- https://www.wonderwebstudio.com/robots.txt
- https://www.wonderwebstudio.com/llms.txt
- https://www.wonderwebstudio.com/llms-full.txt
- https://www.wonderwebstudio.com/llms.xml
- https://www.wonderwebstudio.com/content/index.md

Live probes during verification returned HTTP 200 for robots.txt, sitemap.xml, the homepage and its Markdown version, with no HTTP noindex header. Robots allowed crawling except `/api/`. The new versioned cover URL was not yet live. The final implementation must deploy before its new metadata, images and positioning can be crawled.

After deployment, submit or refresh the canonical sitemap in Google Search Console and Bing Webmaster Tools and inspect representative page URLs. Crawlability and a valid sitemap do not guarantee that every URL or image will be indexed. Markdown/LLM files are supplementary discovery formats, not a guaranteed ranking or recommendation mechanism. Three future-scheduled pages remain outside the public sitemap until their release dates.

## Image regeneration

Run inside `website/`:

```sh
node scripts/generate-featured-art.mjs
npx tsx scripts/generate-featured-covers.tsx
npm run seo:images
node scripts/check-featured-images.mjs
```

The first command uses the private Gemini key and can incur provider charges for missing/new illustrations. Existing images are reused. Artwork prompts and provenance are stored in `scripts/featured-art-catalog.json` and `scripts/featured-art-provenance.json`. When changing the composition/rendering pipeline, version the cover URL to avoid stale optimized-image caches.

## Evidence

- [Audit summary](audit-summary.json)
- [Desktop article](blog-cover-desktop.png)
- [Mobile location directory](location-mobile.png)
