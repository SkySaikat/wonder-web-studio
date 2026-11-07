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
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, normally `https://wonderwebstudio.com`, no trailing slash |
| `SITE_INDEXABLE` | `false` on previews; `true` only on the final public production site |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 identifier beginning `G-`; blank disables GA |
| `GOOGLE_SITE_VERIFICATION` | Search Console URL-prefix verification token, if using HTML verification |
| `RESEND_API_KEY` | Server-only email credential |
| `LEAD_FROM_EMAIL` | Verified sender, e.g. `Wonderweb Studio <website@wonderwebstudio.com>` |
| `LEAD_TO_EMAIL` | `info@wonderwebstudio.com` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public challenge key for the allowed deployed host |
| `TURNSTILE_SECRET_KEY` | Server-only verification secret; required in production |
| `STRIPE_PAYMENT_LINK` | Approved hosted Stripe link, optional |
| `PAYPAL_PAYMENT_LINK` | Approved hosted PayPal link, optional |

### Inquiry delivery

The browser posts JSON to `/api/inquiry/`. The server validates origin, content type, payload size, fields, consent and honeypot; verifies Turnstile in production; then sends a plain-text inquiry through Resend. A provider receipt is required before success is shown. Provider acceptance does not prove inbox delivery, so an inbox check is required during activation.

Failed submissions preserve the input and show an email fallback. No email credentials have been supplied or live inbox delivery verified. A missing configuration produces a truthful 503 response. Tests mock the provider; they do not send messages. The site does not yet persist leads in a CRM/database.

Allowed origins include `NEXT_PUBLIC_SITE_URL` and the exact `VERCEL_URL` deployment hostname. Production aliases must be configured consistently; redirect `www` to the canonical host or intentionally extend the origin list. Do not loosen this to arbitrary origins.

Activate by verifying the sender domain in Resend, setting both Turnstile keys for the actual host, deploying, and submitting an authorized test inquiry. Confirm the inbox receipt, reply-to address, field formatting and successful UI. Also verify rejected/expired challenge behavior and a provider failure path. Use provider/platform rate controls if traffic requires additional protection.

### Preferred call requests

Header, hero, pricing, closing CTAs and a sitewide floating button open the shared call dialog. A dismissible invitation appears after substantial scrolling; dismissal lasts for the browser session. The native dialog supports Escape, focus restoration and a persistent close control. Motion has a pause control and respects reduced-motion preferences.

Visitors choose their time zone, a date from tomorrow through 90 days ahead, and a preferred half-hour start time. These are request options, **not live availability**. The second step collects contact details and project scope. The validated date, time, IANA time zone and 30-minute duration are included in the inquiry email. No calendar reservation is created. The success wording requires a subsequent email confirmation from the team.

The founder card and booking introduction use **Founder & CEO · Team Lead**. Booking analytics use `generate_lead` with method `call_request` only after provider acceptance; appointment details are not sent to analytics.

### Google Analytics and Search Console

GA4 loads only after optional analytics consent and only with a valid configured measurement ID. Pageviews are sent manually on route changes with `send_page_view: false`; `generate_lead` fires only after accepted form delivery. The event does not include the name, email or message. URLs sent for pageviews omit query strings.

In GA4, turn off duplicate automatic page-change measurement (Enhanced Measurement → Page views → advanced browser-history page changes) and automatic form-interaction measurement if enabled. Use the single explicit `generate_lead` as the inquiry event. Mark it as a key event, then verify exactly one event for one successful accepted inquiry in DebugView/Realtime. Declining analytics must leave the form usable.

For Search Console, prefer a domain property verified through the account’s DNS flow; the included meta token supports a URL-prefix property. No Search Console property or GA4 property has been connected yet. Once production is live and indexable, submit `/sitemap.xml` and inspect representative URLs. A valid sitemap does not guarantee indexing or rankings.

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
