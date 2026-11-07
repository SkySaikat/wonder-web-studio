# Local verification — 7 November 2026

## Automated checks

- Final production build passed, including TypeScript and 78 generated framework routes.
- Seven inquiry/booking tests passed. They cover required consent/contact data, provider receipt requirements, origin checks, malformed/oversized/honeypot payloads, missing configuration, preferred-time email formatting, invalid dates/times/zones and the time-zone-aware future booking window.
- Production HTTP crawl checked all 71 public sitemap URLs. All returned successfully with unique titles and descriptions, one H1, matching canonicals and valid JSON-LD. No missing local assets, duplicate IDs or unmapped internal paths were reported. Preview noindex remained enabled on every page.
- Repeatable command: `AUDIT_BASE_URL=http://127.0.0.1:3001 python3 scripts/audit-pages.py` from this directory. Results: `audit-results.json`.

## Browser review

Reviewed the homepage on desktop and a 390px mobile viewport. The vibrant project showcase and original artwork loaded; the page and mobile booking dialog had no horizontal overflow. The dialog starts at its top and retains a visible close control while scrolling. The founder title reads “Founder & CEO · Team Lead.”

Verified preferred date/time selection, a changed America/New_York time zone, the second-step summary, and the Growth pricing button's service preselection. Escape closes the dialog and returns focus to its trigger. A local test submission showed the truthful missing-delivery-configuration error and retained the entered fields. No live message was sent. Seven automated tests also verify that the requested time is included in the provider payload without claiming a confirmed reservation.

Verified the global motion control pauses the showcase animation using the keyboard. The development toolbar can overlap the lower-left motion control; this toolbar is absent from production. The dismissible scroll invitation was observed. Earlier interaction checks covered gallery filtering, service tabs and arrow-key navigation, FAQs and the normal inquiry form.

## Activation limits

Email/Turnstile credentials, GA4 ID, Search Console verification and Stripe/PayPal links are not configured. Inbox delivery, live analytics and production challenge verification remain untested until those accounts are connected. The site has not been deployed or connected to the live domain. Calendar availability is not connected; call requests require manual confirmation.

The browser injected `cz-shortcut-listen` and `bis_skin_checked` attributes that generated development hydration warnings. These external attributes were not added by the app, and hydration warnings were not globally suppressed. No Lighthouse or field Core Web Vitals score is claimed by this verification.

## Service and location expansion — 7 November 2026

The revised content adds 20 public URLs: one locations directory, 12 city guides, two state guides and five service/market pages. All 13 service pages now use per-service content and six visual families with distinct editorial layouts. Existing industry and industry/service pages include new customer-intent tables and planning content.

Browser checks covered desktop web design, SEO and social-media layouts; mobile web design, social-media and Tampa pages; and the Denver Google Ads route. The revised layouts showed no document-level horizontal overflow in those checks. The homepage chart was tested with channel selection, keyboard month navigation and its 12-row data table. A separate compact chart keeps the whole trend visible on mobile. All 3×/5× values remain explicitly synthetic, not measured results or guarantees.

A simultaneous development-server/build filesystem conflict interrupted one production rebuild. The owned development server was stopped before retrying the final build. No source data was deleted.

Final expansion checks: production build passed with 98 framework routes; HTTP/SEO audit passed for all 91 public URLs, with 91 unique titles and descriptions, no missing local images, no duplicate IDs and no unmapped internal links. Preview noindex is preserved. Sample main-content lengths: web design 1,092 words, social management 1,028, SEO 1,038, Tampa 940, Denver Google Ads 732 and roofing industry 727. Word counts describe the delivered content and are not ranking targets.

The final local preview runs the production build on port 3000. Form delivery is still unconfigured, and production origin/challenge checks are not relaxed for local testing. No remote deployment took place.

## SEO implementation — November 8, 2026

- 92 HTML routes audited: 91 public sitemap entries plus the deliberately noindex client-payment route.
- All routes have one H1, a self-referencing production canonical, unique title and description, unique 1200×630 Open Graph/Twitter image, image alt metadata, and valid JSON-LD.
- Every page has its own connected page graph. Types include WebPage, AboutPage, ContactPage, CollectionPage, BreadcrumbList, Service, BlogPosting, Article, CreativeWork, ItemList, OfferCatalog, ImageObject and visible FAQPage markup. Organization, WebSite and founder Person entities use consistent IDs. The home and about pages also describe the actual embedded introduction with VideoObject metadata.
- Checked JSON-LD references, type/property names and property applicability against the official current Schema.org vocabulary. This is local semantic validation, not a Google Rich Results Test or a promise of rich-result eligibility.
- Confirmed 92 distinct share images are served as PNG at 1200×630. XML sitemap lists 109 distinct associated images. Meaningful rendered images have alt text and titles; decorative images retain empty alt text. Article featured images have been added to their visible pages.
- Parsed and compared the 91 canonical entries in `/sitemap.xml` and `/llms.xml`; both match. `/llms.txt` and `/llms-full.txt` include every public URL and exclude the payment route. Tested MIME types, internal links, 404 behavior and robots policy.
- `npm test`: 12 tests passed, including five SEO regression tests for route coverage, graph references, crawl modes, discovery coverage and JSON-LD escaping.
- Production-mode local build and full crawl passed with `SITE_INDEXABLE=true`; output retained in `seo-audit-production.json`. This was tested on loopback only. No production deployment or external search-engine submission was made.
- Preview mode is restored with `SITE_INDEXABLE=false`. Its final audit is saved in `seo-audit-results.json`.
- Remaining live checks: deploy the approved build, configure production indexing, connect Search Console/GA4, submit the sitemap, then inspect representative live URLs in Google’s tools. The local preview intentionally cannot rank.

## Mobile and content follow-up — November 8, 2026

- Final production build passed with 109 generated framework routes. The existing 12 inquiry/SEO tests passed. `git diff --check` passed.
- Current preview crawl passed for all 100 HTML pages: 99 sitemap entries plus the noindex payment page. All 100 titles, descriptions and share images are unique. The image sitemap contains 117 distinct images. Schema vocabulary checks passed with zero page or discovery issues. Current report: `seo-audit-results.json`. The earlier `seo-audit-production.json` remains the historical 92-page production-indexing check, not a new production crawl.
- At a 390px browser viewport, result cards show subtle SVG arrows rather than emoji; the former oversized pseudo-element is absent. The header remains at viewport top while scrolling. Mobile menu navigation to Blog works and closes the menu. Search for “roofing” returns three matching articles; the SEO category returns five. The 20-article blog has no horizontal overflow in mobile or desktop checks.
- Desktop case-study review confirmed five chapters, seven FAQs and an expanding answer, with the header still at the viewport top. The roofing case study has 901 visible main-content words with one FAQ open; collapsed FAQ answers are additional content. Tampa has 1,217 visible main-content words and no desktop horizontal overflow. Counts document the review, not ranking criteria.
- `/blog/` returns a permanent 308 redirect to `/resources/`. Final browser review shows the Blog link, sticky header and all 20 article cards on the rebuilt app.
- Mobile review used viewport emulation, not a physical iPhone/Safari session. The emoji-specific cause was removed by using SVG for the large graphics.
- Local preview remains on port 3000 with indexing disabled. No deployment, Search Console submission, live form delivery or new account connection took place.
