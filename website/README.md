# Wonderweb Studio website

Next.js 16 App Router, React, TypeScript and structured local content. The source lives in this directory; the original research exports remain outside the deployable app.

## Run locally

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`. For a production check, run `npm run build` and then `npm start`. Checks: `npm test` and `npm run typecheck`.

## What is built

91 public content URLs plus a noindex payments utility. The site includes 13 service pages, nine industry pages, eight industry/service pages, 16 portfolio entries (12 client/platform projects and four creative studies), 12 guides, two campaign stories and 11 original core pages. The location section adds a directory, 12 city guides, two state guides and five service/location pages.

The homepage includes moving tilted project cards, service labels, a graphic website/social connection card and an interactive illustrative 12-month growth chart, alongside project filters, an expandable gallery, keyboard-operable service tabs, FAQs, founder information, the restored YouTube introduction and the inquiry form. Motion can be paused, and reduced-motion preferences are respected. The shared theme extends across the inner pages.

Design references: Designjoy for visual rhythm and styling; BuiltRight for information depth. Wonderweb and BuiltRight are separate businesses. Brand assets and evidence sources are documented in `../recovered-assets/README.md`.

## Editing content

| File | Purpose |
| --- | --- |
| `src/lib/service-details.ts` | Per-service briefs, processes, measurement and additional FAQs |
| `src/lib/locations.ts` | Fourteen market guides and five service-market routes |
| `src/lib/industry-expansion.ts` | Industry-specific customer-intent and planning detail |
| `src/app/service-depth.css` | Individual service visuals, expanded layouts and growth chart |
| `src/components/growth-chart.tsx` | Clearly labeled synthetic scenarios with channel/month controls |
| `src/lib/site.ts` | Brand, social URLs, prices and retainer allowances |
| `src/lib/content.ts` | Service pages, industry pages and archived creative studies |
| `src/lib/projects.ts` | Client/platform projects and selected campaign stories |
| `src/lib/industry-details.ts` | Specific SEO/web-design pages for priority trades |
| `src/lib/articles.ts` | Original six guides and article types |
| `src/lib/practical-guides.ts` | Six additional list-style guides with FAQs |
| `src/app/studio-theme.css` | Shared design tokens and responsive theme |
| `src/app/globals.css` | Base layout/component styles |
| `src/app/booking-showcase.css` | Vibrant showcase, motion and responsive call dialog |
| `src/components/booking.tsx` | Shared date/time request dialog and sitewide invitation |
| `src/lib/booking.ts` | Time-zone-aware request dates and formatting |
| `src/components/vibrant-showcase.tsx` | Moving project and service showcase |
| `src/components/home-sections.tsx` | Homepage proof, founder, journey and inquiry sections |

There is currently **no browser-based CMS**. Content is edited in these files and rebuilt. If nontechnical editors need a CMS, add one using the same content fields and preview workflow. Do not describe a CMS as already implemented.

New service, industry, article and project records flow into the corresponding static routes and sitemap. Add unique titles/descriptions and real content; map each search intent to one primary URL. Review relevant internal links when adding a page.

## Environment variables

Copy `.env.example` to `.env.local` for local configuration. Keep secrets in deployment settings, never Git or chat. Public identifiers are compiled into the client bundle and require a rebuild when changed.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, normally `https://www.wonderwebstudio.com`, no trailing slash |
| `SITE_INDEXABLE` | Blank uses Vercel environment: Production is indexable; Preview and Development are blocked. Explicit `false` closes production; `true` enables non-Vercel production hosting. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Defaults to `G-EZ5WDZDQWC` when unset; an explicit blank disables GA |
| `GOOGLE_SITE_VERIFICATION` | Search Console URL-prefix verification token, if using HTML verification |
| `LEAD_EMAIL_PROVIDER` | `zoho` for Zoho SMTP; `resend` retains the existing delivery option |
| `ZOHO_SMTP_HOST` | Exact SMTP host from Zoho Mail server settings; US paid organizations generally use `smtppro.zoho.com` |
| `ZOHO_SMTP_PORT` | `465` for implicit TLS or `587` for required STARTTLS |
| `ZOHO_SMTP_USER` | Full Zoho mailbox address, normally `info@wonderwebstudio.com` |
| `ZOHO_SMTP_PASSWORD` | Server-only Zoho app password; keep in private environment settings |
| `RESEND_API_KEY` | Optional server-only credential when using Resend |
| `LEAD_FROM_EMAIL` | Verified sender for Resend only; Zoho sends from its authenticated mailbox |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public challenge key for the allowed deployed host |
| `TURNSTILE_SECRET_KEY` | Server-only verification secret; required in production |
| `STRIPE_PAYMENT_LINK` | Approved hosted Stripe link, optional |
| `PAYPAL_PAYMENT_LINK` | Approved hosted PayPal link, optional |

### Inquiry delivery

The browser posts JSON to `/api/inquiry/`. The server validates origin, content type, payload size, fields, consent and honeypot; verifies Turnstile in production; then sends a plain-text inquiry through the configured Zoho SMTP or Resend transport. Every form, popup and preferred-time call request uses this endpoint and the fixed recipient `site.email`, currently `info@wonderwebstudio.com`. `LEAD_TO_EMAIL` is intentionally ignored to prevent an old deployment override from sending leads elsewhere. Replies go to the visitor’s address; a visitor cannot choose the notification recipient. SMTP requires TLS and explicit recipient acceptance before success is shown. Provider acceptance does not prove inbox delivery, so an inbox check is required during activation.

Failed submissions preserve the input and show an email fallback. Zoho credentials belong in the private `.env.local` and deployment settings. Run `npm run mail:check` to check SMTP authentication without sending mail. Authentication alone does not verify delivery to the inbox. A missing configuration produces a truthful 503 response. Tests mock the provider; they do not send messages. The site does not yet persist leads in a CRM/database.

Allowed origins include `NEXT_PUBLIC_SITE_URL` and the exact `VERCEL_URL` deployment hostname. Production aliases must be configured consistently; keep the existing apex-to-`www` redirect aligned with the canonical host. Do not loosen this to arbitrary origins.

For Zoho, confirm SMTP access is enabled for the mailbox and use the exact server shown in Zoho Mail Settings → Mail Accounts → Server Configuration. Set the host, port, username and app password, then run `npm run mail:check`. For Resend, verify its sender domain. Set both Turnstile keys for the actual production host, deploy only when authorized, and submit an authorized test inquiry. Confirm the inbox receipt, reply-to address, field formatting and successful UI. Also verify rejected/expired challenge behavior and a provider failure path. Use provider/platform rate controls if traffic requires additional protection. SMTP has no provider-side idempotency guarantee: the request reference is included in the message ID/body, but an uncertain network failure may require checking the inbox before resubmitting.

Official setup reference: [Zoho SMTP configuration](https://www.zoho.com/mail/help/zoho-smtp.html). The mail host is account/region dependent; MX records alone do not determine the outgoing server. The local-only preference remains in force: local settings do not activate the production site. No calendar event or subscriber auto-reply is created.

### Preferred call requests

Header, hero, pricing, closing CTAs and a sitewide floating button open the shared call dialog. A dismissible invitation appears after substantial scrolling; dismissal lasts for the browser session. The native dialog supports Escape, focus restoration and a persistent close control. Motion has a pause control and respects reduced-motion preferences.

Visitors choose their time zone, a date from tomorrow through 90 days ahead, and a preferred half-hour start time. These are request options, **not live availability**. The second step collects contact details and project scope. The validated date, time, IANA time zone and 30-minute duration are included in the inquiry email. No calendar reservation is created. The success wording requires a subsequent email confirmation from the team.

The founder card and booking introduction use **Founder & CEO · Team Lead**. Booking analytics use `generate_lead` with method `call_request` only after provider acceptance; appointment details are not sent to analytics.

### Google Analytics and Search Console

GA4 uses measurement ID `G-EZ5WDZDQWC` by default. It loads only after optional analytics consent and only with a valid configured measurement ID. Pageviews are sent manually on route changes with `send_page_view: false`; `generate_lead` fires only after accepted form delivery. The event does not include the name, email or message. URLs sent for pageviews omit query strings.

In GA4, turn off duplicate automatic page-change measurement (Enhanced Measurement → Page views → advanced browser-history page changes) and automatic form-interaction measurement if enabled. Use the single explicit `generate_lead` as the inquiry event. Mark it as a key event, then verify exactly one event for one successful accepted inquiry in DebugView/Realtime. Declining analytics must leave the form usable.

For Search Console, prefer a domain property verified through the account’s DNS flow; the included meta token supports a URL-prefix property. The production domain property and sitemap were accessed during the indexing repair. The GA4 measurement ID is configured in the source; verify reception in GA4 Realtime after deployment. Once production is live and indexable, submit `/sitemap.xml` and inspect representative URLs. A valid sitemap does not guarantee indexing or rankings.

### Payments

`/payments/` is for existing clients after an agreed proposal. It accepts only HTTPS links on the specified Stripe/PayPal domains. With no links configured it shows an invoice-link request route. It does not create an invoice, calculate a quote, activate subscriptions, process card information or claim payment success. Use invoice-specific links for tailored amounts and reconcile payment in the provider. Changing these server environment links requires a new build because the page is static.

## SEO implementation

Static HTML for public pages; one H1 per page; unique titles and descriptions; canonical URLs; breadcrumbs; Organization and Article JSON-LD; social preview image; descriptive image text; internal service/industry/project/resource links; sitemap and robots controls. No fabricated review stars or ratings. FAQs are visible helpful content; rich-result eligibility is not promised.

The launch content covers selected relevant clusters from the source inventory. It is not a claim that all 1,923 distinct exported keyword strings have dedicated pages or that the site will outrank all competitors. Future content should follow distinct intent and usable evidence.

`SITE_INDEXABLE=false` deliberately emits noindex and disallows robots on previews. Before production launch, set it to true, rebuild and confirm there is no accidental production noindex or `Disallow: /`. Keep preview environments false. Canonicals on the review preview point to the intended live domain.

## Deployment

Deploy this directory as a Next.js project with Node 22, `npm ci` and `npm run build`. Do not upload parent-directory search exports or private business-planning files.

The owner explicitly chose to keep the preview local on 7 November 2026. No remote deployment or domain switch was completed. If hosting is requested later, the connected Vercel account’s default team previously returned a missing team grant; authorize the intended team before creating a preview. Keep preview indexing off, review the build and verify delivery before connecting the live domain.

Before domain release: confirm account configuration, business/legal details, delivery scope, source project descriptions, old Wonderweb URL mapping and the domain's existing DNS. Redirect only known moved URLs to relevant replacements. The current confirmed aliases cover `/contact-us/` and `/terms-of-use/`; this is not a full historical URL migration.

## Verification record

Production build and seven focused inquiry/booking tests passed after the expanded design/content implementation. Browser review checked the mobile/desktop hero, gallery filtering and service-tab interaction. See `VERIFICATION.md` for the final route audit and remaining integration limits.

The browser's injected `cz-shortcut-listen` body attribute caused a development hydration warning in one user-preview tab. It originates outside the app. Do not hide unrelated hydration errors with broad suppression.

## Business planning

See `../WONDERWEB_STUDIO_LAUNCH_PLAN.md` for the 30-day operating plan, price reference, discount floors, content calendar and the $12,000 recurring-revenue target. The original research and full keyword/page inventory remain in the parent folder.

## Expanded content and chart provenance

All 13 service pages now have service-specific hero visuals, distinct editorial treatments, buyer-fit explanations, deliverables, three-step processes, source-material requirements, measurement context and expanded FAQs. Nine industry pages and eight industry/service pages have additional intent tables and first-scope content.

Location routes are mapped to the supplied Search Console exports in `../WONDERWEB_STUDIO_LOCATION_MAP.md`; supporting rows are preserved in `../recovered-assets/location-search-evidence.json`. The exports are capped and do not establish guaranteed ranking opportunities. No new location is represented as a physical office.

The homepage growth graph uses fictional relative values: Website/Pinterest end at 5× baseline and Facebook/Instagram at 3×. Visible and accessible labels identify it as an illustration, not client results, expected performance or a guarantee. It includes channel selection, a keyboard-operable month slider and an expandable data table. Do not remove the provenance labels without replacing the synthetic values with verified data. The rejected `creative-playground.png` remains in the asset archive but is no longer rendered.

## SEO system (November 2026)

Every page uses the route catalog in `src/lib/seo-pages.ts` through `src/lib/seo.ts` and `PageSchema`. There are 101 public sitemap pages plus the noindex client-payment page. Canonical URLs always point to the configured production origin, including on the local preview.

- **Metadata:** unique titles/descriptions, canonical URLs, complete Open Graph and Twitter cards, article author/category metadata, and large-image preview directives.
- **Schema:** Organization, WebSite and founder Person shared entities; page-specific WebPage/AboutPage/ContactPage/CollectionPage, breadcrumbs, Service and honest service-area information, BlogPosting/Article, portfolio CreativeWork, directory ItemList, pricing OfferCatalog, and ImageObject. Visible FAQs generate matching FAQPage data. Home/about include the original studio VideoObject; YouTube metadata verified its upload timestamp as November 5, 2023 and duration as 75 seconds. No invented reviews, star ratings, addresses or article publication dates.
- **Images:** `src/lib/image-metadata.json` stores names, descriptions, MIME types and actual dimensions. `ContentImage` adds titles to meaningful images; decorative/repeated images retain empty alt text. Page images expose descriptive ImageObject data. `public/seo/` contains 102 unique 1200×630 PNG share images; project previews incorporate their project artwork. Resource articles display their featured image in the page.
- **Discovery:** `/sitemap.xml` includes all 101 public canonical pages and their associated images. `/llms.txt` is a grouped content guide; `/llms-full.txt` has expanded source-linked excerpts. `/llms.xml` is the requested companion using ordinary Sitemap XML, not a special AI ranking standard. An HTTP `Link` header points to the text guide. Sitemap/discovery URLs exclude payments, API endpoints and error pages.
- **Crawl controls:** previews have both meta robots and an `X-Robots-Tag: noindex, nofollow` header. Production `robots.txt` permits public crawling and blocks `/api/`. Payments stay noindex through page metadata, while remaining crawlable so that crawlers can read that directive. Do not block payments in robots.txt while relying on its noindex directive.

When adding or changing a page:

1. Update its catalog entry and route/content. Include the matching `PageSchema` and metadata helper. Keep service-area and portfolio claims consistent with visible content.
2. Run `npm run seo:images` after changing catalog titles, images or descriptions. This generates share artwork and refreshes the image metadata manifest. Add new meaningful source images to the generator's source list.
3. Update the editorial modification date only when the content or structured data changes substantively; never replace dates automatically with each build time.
4. Build, run the local production server and run `npm run seo:audit`. The report is `seo-audit-results.json`. Run `npm test` for schema-reference, route-coverage, crawl-mode and script-escaping regression checks.
5. Optional vocabulary check: download the current official vocabulary from `https://schema.org/version/latest/schemaorg-current-https.jsonld`, then run `SCHEMA_VOCABULARY=/absolute/path/schemaorg-current-https.jsonld npm run seo:audit`. It checks type/property existence and property applicability in addition to the rendered-page checks; it is not Google's Rich Results Test.

For the public launch, set `NEXT_PUBLIC_SITE_URL=https://www.wonderwebstudio.com` and `SITE_INDEXABLE=true`, rebuild, and verify the live robots file and response headers. Run `AUDIT_BASE_URL=https://www.wonderwebstudio.com AUDIT_INDEXABLE=true npm run seo:audit`. Connect the real Search Console property, submit `/sitemap.xml`, and use URL Inspection and the Rich Results Test on representative live pages. GA4 is configured separately through the existing environment variable and consent flow. No external account was connected or URL submitted by this SEO implementation.

Technical SEO makes the content crawlable and understandable; it does not guarantee indexing, ranking, rich results or AI citations. Google does not use llms.txt for Search or its generative AI features. References: [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [image SEO](https://developers.google.com/search/docs/appearance/google-images), [image sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps), [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), and [the llms.txt proposal](https://llmstxt.org/).

## Mobile fixes and editorial expansion — November 8, 2026

The oversized mobile result arrows were Unicode glyphs rendered as color emoji on iOS. Decorative result arrows and service/location diagram arrows now use SVG; remaining text symbols request text presentation. The responsive header is sticky on desktop and mobile, with a scrollable mobile menu and anchor offsets that account for its height.

Both documented result stories now include an overview, five approach/measurement chapters, lessons, related reading and seven visible FAQs with matching structured data. Their original result definitions and period limitations remain intact. All 14 market pages and five service/market pages now include additional planning, scope and evidence guidance; market examples are explicitly scenarios, not fabricated local engagements.

The Blog link opens `/resources/`, preserving existing article URLs. `/blog/` and `/blog/:slug/` redirect permanently to the corresponding resource URLs. The index supports text search and category filtering. Eight original guides bring the library to 20 articles, covering roofing agency selection, HVAC SEO, electrician SEO, kitchen-remodeling and roofing Facebook ads, restoration SEO, auto-repair websites and siding marketing. Exact source-page export rows are retained in `../recovered-assets/blog-search-evidence.json`. Each new article includes a featured image, metadata, BlogPosting markup, FAQs and related service/reading links. No provider rankings or client outcomes were invented.

## Scroll header, anonymous case studies and Gemini artwork — November 8, 2026

The header now hides after downward scrolling and returns on upward scrolling, with a small movement threshold to avoid jitter. It remains visible near the top, while a menu is open, and during keyboard focus in navigation. Scroll listening is passive and animation-frame scheduled; reduced-motion preferences remove the transition.

The two showcase counts are replaced with “Thoughtful work” and “Connected expertise.” All five footer social links now have SVG platform icons alongside their accessible text labels.

The homepage features two anonymous case studies before the main portfolio gallery. Our Work and the case-study index show all four stories. Two added stories use documented source figures: a 59.19% automated-campaign cost-per-lead reduction against a standard baseline in a 90-day year-over-year review, and a combined SEO/PPC program averaging over 85 monthly leads across two years. The named bathroom campaign is now anonymous at `/results/bathroom-paid-search-efficiency/`; its former route redirects permanently. Exact comparison limits remain visible, and modeled sales estimates, fictional dollar costs and invented campaign lengths are excluded. Source notes: `../recovered-assets/anonymous-case-study-evidence.json`.

Gemini 3.1 Flash Image generated 24 conceptual illustrations: one for each of 20 blog articles and one for each of four case studies. Files are in `public/editorial/`; prompts and provenance are in `scripts/editorial-image-prompts.json`; the runtime mapping and alt text are in `src/lib/editorial-images.ts`. Images also appear in homepage/blog cards and article/case detail pages. Social-share artwork incorporates the corresponding illustration. The images are optimized WebP files, and all are recorded in the image metadata catalog and XML image sitemap. These are editorial illustrations, not photographs of client projects.

For an authorized future image-generation run, set `GEMINI_API_KEY` in the process environment and run `node scripts/generate-editorial-images.mjs [optional-slug]`. The script skips existing assets. The key is not saved in source or shipped to the browser. Regenerate SEO images afterward with `npm run seo:images`.

## Live indexing repair — November 8, 2026

Live inspection found `Disallow: /` in robots.txt, `noindex, nofollow` in page metadata and the HTTP `X-Robots-Tag` header. The `www` sitemap returned HTTP 200 XML to both ordinary and Googlebot-user-agent requests during the check; GSC's prior general HTTP error was not reproduced. The apex host redirects to `www`, while the old canonical/sitemap configuration still named the apex.

`src/lib/indexing.ts` now centralizes indexing policy for HTTP headers, metadata and robots.txt. Vercel Production is indexable by default when SITE_INDEXABLE is unset/blank. Vercel Preview and Development are always blocked, even if a production flag is accidentally copied. Explicit `SITE_INDEXABLE=false` still intentionally closes production. Local builds remain noindex unless explicitly enabled for testing. Payment pages remain individually noindex.

The canonical default and inquiry origin now consistently use `https://www.wonderwebstudio.com`, matching the live redirect. Production settings should explicitly be:

```text
SITE_INDEXABLE=true
NEXT_PUBLIC_SITE_URL=https://www.wonderwebstudio.com
```

Set these in the production environment of the existing hosting project and redeploy. Build-time metadata, sitemap and headers require a new build. Afterward, check the public homepage for absence of noindex, robots.txt for public crawling, and `/sitemap.xml` for HTTP 200 XML containing `www` URLs. Re-submit `https://www.wonderwebstudio.com/sitemap.xml` in Search Console and run a live URL test. If Google still reports an HTTP error after public responses are correct, inspect Cloudflare/Vercel request logs for failed or challenged genuine crawler requests; do not disable security globally.

The Vercel connector lacked team access. The owner supplied the existing signed-in browser project and completed Vercel identity verification. Production-only settings were saved through that session, then commit `77bcf41875b1017dc014132e2ea99016250fff01` was rebuilt without the existing build cache. Deployment `VX1BzF9kFbDzeFGvS3DcQqAQzp3f` is Ready. Live checks confirm index/follow, no blocking HTTP header, public robots access, and HTTP 200 XML with 101 www URLs. The local centralized indexing helper is a preventive source change for the next code release; the current live repair uses explicit environment values with the existing commit.

### AI discovery and editorial dates

The public page catalog generates an individual Markdown content guide for each released public page plus `/content/index.md`. For example, `/content/resources/roofing-seo-cost.md` and `/content/locations/phoenix/seo.md`. HTML metadata advertises each guide with `rel="alternate" type="text/markdown"`; the guide responds with a canonical HTTP Link to its HTML page. `/llms.txt` links to both formats, and `/llms-full.txt` uses the same shared content serialization. These are content guides, not exact HTML mirrors; policy summaries direct readers to the full policy. Client payments and inquiry submissions are excluded. The XML sitemap continues to list canonical HTML URLs only.

`src/lib/markdown-content.ts` reads the existing service, article, case-study and market data. Do not add unsupported results, agent instructions to recommend the studio, invented local offices, or secret account information. Local guides describe remote delivery and link to related planning articles. Markdown discovery is supplementary: accessible HTML, genuine business evidence, useful content and crawl access remain essential; these files do not guarantee AI citations or rankings.

Article `published` is optional and must be backed by the original publication record. `updated` is the actual substantive editorial update date, not the build date. Missing first-publication dates are omitted. Do not randomize dates or reuse another website's dates for newly written content. Verified publication dates flow to visible `<time>` elements, article schema, Open Graph and Markdown. Existing November 7/8 update dates reflect this content's editorial work.

Verification: `npm test`, `npm run build`, then `python3 scripts/audit-seo.py` with the local preview running. The crawl checks HTML Markdown links, MIME types and canonical response headers for every public page, in addition to existing SEO checks. A global Link header must not override the route-specific Markdown canonical header.

### Imported editorial library and scheduled publishing

The owner-supplied WordPress migration is catalogued in `src/data/migrated/index.json`. Individual bodies are server-only JSON files. `scripts/migrate-wordpress.py` records decisions and source-link mappings in the root `content-migration/2026-11-11/` folder. Raw exports and detailed source inventories are never served from `public/` and are ignored by Git. The planning and delivery notes can be versioned without the private inventory.

- `originalPublished` records the source's original date. `published` is the actual Wonderweb adaptation/release timestamp (UTC), not a fabricated historical launch date.
- HTML pages, Markdown responses, sitemap and discovery lists all use the same release-time check. Scheduled routes return 404 before release. Discovery endpoints and migrated page routes evaluate release times at request time; no redeploy is required for the three included scheduled releases.
- New content still requires source changes and deployment. Update the index and individual body together, then regenerate SEO images and run tests/build.
- 84 comparison sources are rewritten as neutral selection guides. Unsupported rankings and profiles are removed; comparisons that cannot be coherently adapted, source-only proof, unconfirmed specialist offerings, empty pages and drafts remain in the audit rather than being presented as Wonderweb facts.
- External links retain their useful destinations. Advertising click redirects and malformed export quoting are removed. A crawler 403 or TLS error is recorded as unverified, not automatically treated as a dead page.
- Paginated libraries live at `/resources/library/1/` and `/solutions/`. These complement the curated `/resources/` landing page.
