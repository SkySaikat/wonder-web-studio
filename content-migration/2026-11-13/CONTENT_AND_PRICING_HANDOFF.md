# Wonderweb Studio content and pricing handoff

Prepared 13 November 2026. All changes were made and verified locally. No deployment, external sitemap submission, payment or campaign launch was performed.

## Completed content

- 78 original articles, six for each of the original thirteen services. Their substantive bodies, checklists and FAQ answers total 80,920 words; individual guides contain 1,001 to 1,112 words before headings, summaries and source lists.
- Every article has a distinct title, search description, practical examples, a checklist, FAQs, contextual service and pricing links, related reading and a featured title-card image.
- Four high-priority imported resources were fully rewritten, preserving URLs and original publication provenance: roofing Meta Ads (2,267 words), plumbing Meta Ads (2,161), kitchen remodeling marketing ideas (2,606), and roofing marketing ideas (3,099).
- The library now has 98 curated articles, plus the existing imported resource and industry-guide libraries. Service filters and incremental loading make the larger collection easier to browse.
- Removed em dashes from first-party public source content, including HTML/Markdown data, metadata and email copy. Raw owner-supplied source exports remain intact.

## Expanded service coverage

The studio now has 24 service pages. Eleven additions cover AI search/AEO/GEO, Google Local Services Ads, Microsoft Advertising, LinkedIn advertising, email marketing, reputation management, conversion optimization, lead generation, digital media buying (including programmatic and streaming TV), franchise/multi-location marketing, and AI workflow automation.

Each new service has a specific scope, a distinct process, useful inputs and measurement criteria, FAQs, a pricing path and six related practical guides. These supporting guides are linked back to the service. Six dedicated future article briefs per newly confirmed service are recorded separately, totaling 66 briefs; they are not represented as finished articles.

Navigation, inquiry selections, service directories, metadata, schema, sitemap and Markdown discovery include the expanded service catalog. Platform availability, campaign eligibility and custom integration requirements are checked during scoping. No fictional offices or unsupported platform relationships are claimed.

## Pricing

The page now separates 20 priced standalone services, three bespoke quote categories, three website projects and three monthly partnerships. Website projects can be paid in full or through twelve payments, with the entire installment commitment shown beside the lower upfront total.

| Comparable published fee | BuildRight reference | Wonderweb starting fee |
| --- | ---: | ---: |
| Local SEO, monthly | $499 | $399 |
| Google Local Services Ads, monthly | $499 | $399 |
| Google Ads management, monthly | $999 | $799 |
| Meta Ads management, monthly | $1,999 | $1,599 |
| Expanded SEO, monthly | $3,499 | $2,799 |
| AEO/AIO, monthly | $2,999 | $2,399 |
| Entry website, upfront | $5,750 | $4,500 |
| Mid-level website, upfront | $9,590 | $7,500 |
| Advanced website, upfront | $14,390 | $11,500 |
| Entry website, twelve monthly payments | $599 | $479 |
| Mid-level website, twelve monthly payments | $999 | $799 |
| Advanced website, twelve monthly payments | $1,499 | $1,199 |
| Entry monthly partnership | $1,499 | $1,199 |
| Mid-level monthly partnership | $2,499 | $1,999 |
| Higher monthly partnership | $4,999 | $3,999 |

Reference: [BuildRight pricing](https://builtrightdigital.com/pricing/), checked 13 November 2026. The comparison uses the current rendered main offers, not conflicting legacy comparison markup or stale search snippets. Comparable fees are approximately 20% to 22% lower. Service scopes are Wonderweb's own defined allowances and are not claimed to be identical. New creative, email, support and specialist prices are studio-defined scopes, not independently established market averages.

Website payment totals are $5,748, $9,588 and $14,388. Media spend, hosting, software, taxes and extra implementation are explained separately. There is no automatic subscription after the final website payment. Buttons start a call request; a written proposal and approved invoice precede payment.

## Two-week rollout

[TWO_WEEK_CONTENT_PLAN.md](TWO_WEEK_CONTENT_PLAN.md) assigns every one of the 662 imported adaptations to a revision/release slot between 14 and 27 November. Historical Search Console clicks and impressions determine priority. Four days have 48 items; ten have 47. At 30 daily, 662 items would require at least 23 days.

This is an editorial work plan, not an assertion that 662 original rewrites are complete. Existing public URLs and dates are retained. The actual modification date changes only when the revision is finished and deployed. There is no unattended publishing job, fabricated backdating or date-only refresh.

[EXPANDED_SERVICE_CONTENT_PLAN.md](EXPANDED_SERVICE_CONTENT_PLAN.md) records 66 dedicated topic briefs for newly confirmed services. There are also 176 specialist source items previously excluded under the narrower launch scope. The local JSON backlog maps these to the expanded services for review and consolidation. They are additional candidates, not automatically published pages or extra completed work.

## Verification

- Production build and TypeScript checks passed.
- All 26 automated tests passed, including substantive article coverage, service-to-guide links, pricing math/schema/Markdown consistency, publication gates, content sanitation and mocked inquiry delivery.
- Rendered local production audit: 879 pages checked, 878 public sitemap/Markdown URLs, 1,000 sitemap image URLs, unique metadata and social images, and Schema.org vocabulary checks. No page or discovery issues reported.
- Desktop and mobile checks covered pricing controls, installment totals, service filters, article navigation, FAQ expansion, service reading cards and horizontal overflow.
- All 26 unique primary reference URLs for the new guides were checked. Twenty-five returned HTTP 200 directly; Adobe blocked the automated request with 403, and its exact official page was separately verified through web retrieval.
- Featured images and social previews have descriptive metadata. The 78 new title-card images total about 2.15 MB before framework image optimization.

This work improves content and technical discoverability. It does not establish that the live site has changed, that search engines have indexed every URL, or that rankings or revenue are guaranteed.

## Reproduce locally

From the `website` directory:

```sh
npm run typecheck
npm run test
npm run build
npm run dev
```

Editorial image generation: `node --import tsx scripts/generate-service-guide-images.tsx`, then `npm run seo:images`. To regenerate the private calendar, run `python3 website/scripts/plan-content-rollout.py` from the repository root. Do not rerun the legacy WordPress importer over the reviewed hand-edited articles.
