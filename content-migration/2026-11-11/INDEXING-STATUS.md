# Indexing checks — 11 November 2026

## Verified live

- Production `https://www.wonderwebstudio.com/robots.txt` returned HTTP 200, allowed `/`, and only disallowed `/api/`.
- Homepage, `/resources/roofing-seo-cost/`, sitemap and sample WebP returned HTTP 200. HTML had `index, follow`, correct www canonicals and no X-Robots-Tag block.
- Google Search Console: current `/sitemap.xml` **Success**, last read 10 November, **101 discovered pages**.
- Google URL Inspection: homepage **URL is on Google / Page is indexed**.
- Google URL Inspection: roofing SEO cost article **URL is on Google / Page is indexed**, valid Breadcrumbs detected.
- The aggregate Pages report was last updated 6 November. Its 0-indexed total is stale relative to the URL inspection results.
- An old `/sitemap_index.xml` entry from 2023 still reported Couldn't fetch. The app now redirects that legacy path to the current sitemap.
- Bing Webmaster Tools: submitted the current www sitemap in the existing Wonderweb property. It reports **101 discovered URLs**, **0 errors**, **0 warnings**, with status **Processing**.

These observations verify access, discovery and two indexed URLs. They do not prove every page/image is indexed or guarantee rankings. New content must be deployed, crawled and selected by the search engines.

## References

- [Google: robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google: image discovery](https://developers.google.com/search/docs/appearance/google-images)
- [Google: publication dates](https://developers.google.com/search/docs/appearance/publication-dates)

No SSL or firewall change was needed for the successful checks above. Preview deployments remain noindex.
