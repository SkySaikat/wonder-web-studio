# Pricing refinements and live booking verification

Verified 13 November 2026. This update supersedes the pricing values in CONTENT_AND_PRICING_HANDOFF.md.

## Website changes

- Pricing now has three accessible tabs: standalone services, website projects and monthly partnerships. Standalone services have five smaller category tabs. Website installments remain switchable, with full commitment totals shown.
- The compact pricing introduction and centered tab labels have proper spacing. The three monthly options appear side by side on desktop and stack on mobile.
- The $3,999 monthly package is now Connected Growth, with defined account, market, content and social allowances. It does not imply that every studio service or a new website build is included.
- Homepage pricing links directly to monthly partnerships. Service prices, structured offers and Markdown representations use the same data.
- The homepage hero tilts two degrees on desktop and straightens on hover or keyboard focus. Reduced-motion preferences are respected.
- Desktop Services opens on hover, retains click behavior for touch, and closes on Escape or departure. Navigation text is larger.
- Blog and FAQ headings are distinct. The FAQ call card uses subdued plum; the inquiry section uses soft lavender and an accented form border.
- The illustrative growth chart has four uneven paths, channel selection and a month scrubber. It has a starting-point arrow, no numerical return scale and no exact 3x/5x claims.

## Current starting prices

All amounts are USD. Media spend, taxes, software and additional scope are separate.

| Offer | Price |
| --- | ---: |
| Foundation monthly partnership | $1,199/month |
| Growth monthly partnership | $1,999/month |
| Connected Growth monthly partnership | $3,999/month |
| AI search program | $2,249/month |
| Entry website, paid upfront | $4,300 |
| Mid-level website, paid upfront | $7,200 |
| Integrated website build, paid upfront | $10,800 |
| Entry website installments | $449 x 12 = $5,388 |
| Mid-level website installments | $749 x 12 = $8,988 |
| Integrated website installments | $1,125 x 12 = $13,500 |

## Production form repair

The live deployment had no mail-delivery or Turnstile environment settings, although local mail configuration worked. The production API deliberately rejects submissions when those settings are missing.

Created a managed Cloudflare Turnstile widget for wonderwebstudio.com and www.wonderwebstudio.com. Saved the site key and private secret locally, and saved the required production Zoho and Turnstile variables in the existing Vercel project. No DNS changes were made. Credentials are not included in this report.

The user's pushes produced ready Vercel deployments for commits 47efc02 and 1a18618. The live domain was checked after deployment. A separate manual redeploy and identity verification were no longer needed.

Two authorized, clearly labeled test submissions were made through the public website:

| Test | Result | Reference |
| --- | --- | --- |
| Preferred-time call request | Zoho SMTP accepted the message for info@wonderwebstudio.com; live confirmation displayed | 75686410 |
| Homepage inquiry | Zoho SMTP accepted the message for info@wonderwebstudio.com; live confirmation displayed | 64c2e47a |

The call request explicitly says it is a test and should not create a real meeting. These checks establish provider acceptance, not an independently observed inbox read. Both forms continue to require spam verification. Success is returned only after the configured email recipient is accepted by SMTP.

## Verification

- Final optimized Next.js production build and TypeScript check passed.
- All 26 automated tests passed, including inquiry validation/delivery and pricing/schema/Markdown consistency.
- Full rendered production-mode SEO audit: 879 pages, 878 sitemap and Markdown URLs, 1,000 sitemap image URLs. No page or discovery issues. Unique titles, descriptions and share images on all 879 audited pages. Schema.org vocabulary checks passed.
- Local production audit uses SITE_INDEXABLE=true at both build and runtime; local preview defaults remain protected from indexing.
- Mobile checks at 390px found no horizontal overflow. Pricing tabs, FAQ expansion, graph channel selection and month controls worked.
- Desktop checks confirmed the hover Services menu and hero straightening. Pricing was reviewed at 1280px and 1440px.
- Proof screenshots are in refinements/ beside this file.

## Repository cleanup

A temporary Next.js build-cache backup was inadvertently included in the user's commit. It has been moved outside the repository to /tmp/wonderweb-next-pricing-backup-20261113, and .next-*/ is now ignored. Local commit 60865d9 removes the generated cache files without changing website behavior or rewriting Git history.

The CLI push for this cleanup commit was rejected by GitHub with HTTP 403 for its configured account. The functional website changes and live mail settings are already deployed. Only this cleanup commit still needs a push from the owner's authenticated GitHub client. The report, fresh audit result and final live-test screenshots remain local.
