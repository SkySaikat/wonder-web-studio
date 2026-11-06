# Wonderweb Studio — Website and SEO Plan

Prepared: 6 November 2026  
Status: Planning only. Website design, implementation, content publication, and deployment have not started.  
Brand assets, final colors, domain, service details, and further website access are pending.

## 1. Objective and scope

Build Wonderweb Studio into a full-service digital agency website covering website creation and management, paid advertising, Meta campaigns, organic social media, content management, and creative production, including social media graphics and thumbnails. SEO is both a proposed agency service and a requirement for Wonderweb Studio’s own website.

Use the owner’s BuiltRight Digital and ITZ Digital search data to identify commercially relevant opportunities, then create original pages that answer those searches more effectively and convert visitors into qualified inquiries.

The coverage objective is to account for every supplied keyword and source page, and progressively cover all relevant search intents. Several keyword variations can belong to one page. Brand searches, URL variants, irrelevant queries, and unsupported services need an explicit disposition rather than an automatic new page.

Better SEO will mean clearer page targeting, stronger original evidence, useful content, consistent URLs, reliable indexing controls, fast accessible pages, and measurable leads. Ranking above the reference websites for every keyword cannot be guaranteed, especially on a new domain. This plan establishes the work and measurement needed to pursue that objective.

### Decisions already established

- Brand name: **Wonderweb Studio**.
- Positioning: a full-service agency, with substantial home-service expertise as the initial SEO focus.
- Reference properties: **builtrightdigital.com** and **itzdigital.co**, identified from the supplied files. The first domain is spelled “builtright,” although the initial brief says “BuildRight.”
- Deliverable now: local Markdown planning documents.
- Logos, images, and brand colors will be supplied later. Do not finalize a visual identity before those arrive.
- The two existing websites remain separate reference properties. This is a new website project, not an authorized migration of either existing site.

### Working assumptions to confirm before production

- English-language content, initially aimed at US businesses. This is inferred from the export geography, not a confirmed business restriction or a claim of a US office.
- Lead generation is the primary site purpose; ongoing service retainers and website projects are the principal offers.
- Home services receive the first substantial industry content investment. Other sectors remain in the roadmap.
- Pricing, guarantees, delivery timelines, office addresses, team biographies, and client results remain unspecified until supplied.
- Platform and hosting are not selected. The future implementation must support a large, editable, search-accessible content library.

## 2. Evidence reviewed and its limits

### Local source register

All files below are in the project root and remain unchanged by this planning work.

| ID | Source file | Contents and use |
| --- | --- | --- |
| BR-SEARCH | `builtrightdigital.com-Performance-on-Search-2026-11-03.zip` | Daily search performance; 1,000 query rows; 1,000 page rows; country, device, appearance, and filter tables |
| ITZ-SEARCH | `https___itzdigital.co_-Performance-on-Search-2026-11-03.zip` | Same search dimensions, with 1,000 queries and 1,000 pages |
| BR-COVERAGE | `builtrightdigital.com-Coverage-2026-11-03.zip` | Indexing trend and reason counts |
| ITZ-COVERAGE | `https___itzdigital.co_-Coverage-2026-11-03.zip` | Indexing trend and reason counts |
| BR-LINKS | `builtrightdigital.com-Latest links-2026-11-03.csv` | 6,059 linking-page records from 504 distinct hostnames; not 6,059 unique referring domains |
| BR-BREADCRUMBS | `builtrightdigital.com-Breadcrumbs-2026-11-03.zip` | Breadcrumb validity history and issues |
| BR-REVIEWS | `builtrightdigital.com-Review snippets-2026-11-03.zip` | Review markup validity history |
| BR-DISCOVER | `builtrightdigital.com-Performance-on-Discover-2026-11-03.zip` | No rows in the Pages or Countries tables; no actionable Discover page evidence |

The companion [SEO inventory](WONDERWEB_STUDIO_SEO_INVENTORY.md) preserves all 4,000 exported query/page rows with source row identifiers and preliminary topic labels. It is a research inventory, not a finished keyword-to-ranking-page join or an approved publication list.

### Search baseline

Totals below are sums of `Chart.csv`, not sums of page or query tables. CTR is total clicks divided by total impressions.

| Metric | BuiltRight Digital | ITZ Digital |
| --- | ---: | ---: |
| Actual daily data period | 10 Mar–31 Oct 2026 | 1 Jul 2025–31 Oct 2026 |
| Daily rows | 236 | 488 |
| Search clicks | 8,737 | 983 |
| Search impressions | 5,511,050 | 613,396 |
| Aggregate CTR | 0.1585% | 0.1603% |
| US share of impressions | 83.72% | 86.56% |
| Query rows with zero clicks | 331 of 1,000 | 962 of 1,000 |
| Exported query/page rows | 1,000 / 1,000 | 1,000 / 1,000 |

For a matched historical window of **10 March–31 October 2026**, BuiltRight has 8,737 clicks / 5,511,050 impressions; ITZ has 675 clicks / 583,969 impressions. Use matched dates and country/device segments in future comparisons.

Important interpretation rules:

1. Both export filters say “Last 16 months,” but their actual daily date ranges differ. The file date is also later than the final performance date.
2. The 2,000 query records contain **1,923 distinct queries** after trimming and lowercasing. Cross-property duplicates retain their own metrics.
3. Each query and page export reaches 1,000 rows. These files cannot establish all keywords or all ranking pages. Search Console also omits anonymized queries and limits visible data. Obtain additional query-by-page exports or API data when access arrives. [Google’s data limitations](https://support.google.com/webmasters/answer/17011259)
4. Queries and pages are separate aggregates. A query and a similarly named page are not a verified ranking pair. All proposed mappings below are editorial recommendations pending query-by-page validation.
5. Impressions indicate observed search exposure, not monthly keyword search volume. Average position is historical and aggregated, not a current rank check.
6. Page and query totals differ from property totals. For example, BuiltRight’s page rows sum to 8,871 clicks, versus 8,737 in its daily chart. Do not add dimensions together or force them to reconcile. [Search Console metric definitions](https://support.google.com/webmasters/answer/7576553)
7. Low CTR is an investigation opportunity, not proof that a title is bad or that equivalent traffic is available to a new website. Intent, geography, devices, ranking mix, and search-result features need inspection.

### Public website spot-checks

- [BuiltRight’s roofing page](https://builtrightdigital.com/roofers/) exposes navigation for Google Ads, SEO, Meta Ads, websites, and trade-specific solutions. Its website category includes management as well as design. Wonderweb therefore needs to explain its actual scope and working process clearly, rather than assuming these services alone differentiate it.
- [ITZ Digital’s homepage](https://itzdigital.co/) and [trade schools page](https://itzdigital.co/education/trade-schools/) expose industry families including legal, medical, real estate, education, automotive, and home services, alongside service categories.
- These were limited public text inspections, not full visual, technical, or authenticated audits. The BuiltRight homepage fetch timed out; its roofing page was readable. Current content quality and technical performance across both complete sites remain unaudited.

## 3. Findings that shape the plan

### 3.1 Prioritize service buyers in home services

BuiltRight’s largest observed query opportunities are roofing, HVAC, plumbing, and electrical. Create strong industry marketing hubs and distinct SEO, web design, Google Ads, and Meta Ads pages where the intent and supporting content justify them.

Examples from `BR-SEARCH / Queries.csv`:

| Exact exported query | Clicks | Impressions | Avg. position | Proposed Wonderweb owner |
| --- | ---: | ---: | ---: | --- |
| roofing seo | 17 | 25,539 | 10.35 | `/industries/roofing/seo/` |
| hvac marketing agency | 17 | 24,938 | 15.97 | `/industries/hvac/` |
| google ads roofers | 0 | 24,395 | 6.04 | `/industries/roofing/google-ads/` |
| hvac seo services | 11 | 18,046 | 5.73 | `/industries/hvac/seo/` |
| kitchen remodel seo services | 0 | 17,535 | 6.50 | `/industries/kitchen-remodeling/seo/` |
| roofing marketing agency | 18 | 16,864 | 19.38 | `/industries/roofing/` |
| electrician marketing | 2 | 16,177 | 15.68 | `/industries/electricians/` |
| plumbing marketing agency | 7 | 14,259 | 13.72 | `/industries/plumbing/` |
| electrician seo | 4 | 14,773 | 10.15 | `/industries/electricians/seo/` |
| hvac lead generation | 3 | 11,048 | 18.81 | Initially a section on `/industries/hvac/`; split only if intent warrants |
| plumbing seo | 6 | 8,389 | 11.37 | `/industries/plumbing/seo/` |
| pest control marketing agency | 10 | 7,387 | 14.84 | `/industries/pest-control/` |
| hvac website design | 13 | 3,655 | 9.37 | `/industries/hvac/web-design/` |
| roofing website design agency | 22 | 2,475 | 15.86 | `/industries/roofing/web-design/` |

Related phrases such as “roofing seo company,” “seo for roofers,” and “seo for roofing companies” should initially share the roofing SEO page. Do not create separate pages just for singular/plural or agency/company wording.

### 3.2 Use ITZ to expand beyond contractors

Examples from `ITZ-SEARCH / Queries.csv`:

| Exact exported query | Clicks | Impressions | Avg. position | Proposed Wonderweb owner |
| --- | ---: | ---: | ---: | --- |
| automotive marketing services | 0 | 3,465 | 23.61 | `/industries/automotive/` |
| chiropractor digital marketing | 0 | 2,990 | 36.09 | `/industries/chiropractors/` |
| window and door contractor marketing | 0 | 2,524 | 14.35 | `/industries/windows-and-doors/` |
| flooring marketing agency | 2 | 2,147 | 10.90 | `/industries/flooring/` |
| auto repair seo | 0 | 2,165 | 24.20 | `/industries/auto-repair/seo/` |
| med spa seo company | 2 | 2,039 | 13.27 | `/industries/med-spas/seo/` |
| digital marketing for criminal defense attorneys | 0 | 1,988 | 41.09 | `/industries/criminal-defense-lawyers/` |
| restoration marketing agency | 0 | 1,866 | 18.68 | `/industries/restoration/` |
| property management seo | 0 | 1,706 | 23.95 | `/industries/property-management/seo/` |
| seo for locksmiths | 0 | 1,662 | 15.48 | `/industries/locksmiths/seo/` |
| family law digital marketing | 0 | 1,478 | 53.22 | `/industries/family-lawyers/` |
| physical therapy seo | 0 | 1,408 | 22.25 | `/industries/physical-therapy/seo/` |
| ppc ads for urgent care clinics | 0 | 1,262 | 8.83 | `/industries/urgent-care/google-ads/` |
| trade school marketing | 1 | 1,224 | 24.22 | `/industries/trade-schools/` |
| car wash marketing agency | 1 | 1,220 | 9.45 | `/industries/car-washes/` |

These are expansion candidates, not evidence that Wonderweb currently has clients or expertise in every sector. Prioritize sectors where the team can supply real delivery knowledge and examples.

### 3.3 Create useful research content alongside service pages

BuiltRight has substantial exposure on agency comparisons, pricing explanations, practical guides, and lead-generation articles. These are different intents from hiring a service directly.

| Source page | Clicks | Impressions | Planned response |
| --- | ---: | ---: | --- |
| BR `/best-roofing-seo-agencies/` | 83 | 312,290 | Research-backed roofing SEO provider comparison, conditional on actual evaluation |
| BR `/best-hvac-seo-agencies/` | 81 | 213,983 | Separate HVAC comparison, using disclosed criteria |
| BR `/hvac-marketing-ideas/` | 26 | 157,696 | Practical HVAC marketing guide with channel examples |
| BR `/google-ads-cost-for-home-services/` | 68 | 144,638 | Cost guide with spend/fees distinctions and sourced scenarios |
| BR `/roofing-marketing-ideas/` | 91 | 106,321 | Roofing marketing guide, with budget and implementation examples |
| BR `/roofing-seo-cost/` | 116 | 101,022 | Roofing SEO pricing guide with scope comparisons |
| BR `/best-roofing-lead-generation-agencies/` | 223 | 83,496 | Lead provider comparison, distinct from general SEO services |
| BR `/meta-ads-kitchen-remodeling-guide/` | 57 | 58,779 | Meta campaign guide for kitchen remodelers |
| BR `/guide-to-facebook-ads-for-electricians/` | 35 | 56,681 | Electrician Meta guide with sample creative and lead qualification |
| BR `/roofing-meta-ads-guide/` | 111 | 49,377 | Roofing Meta campaign guide |
| BR `/meta-ads-for-plumbers-ultimate-guide/` | 95 | 37,287 | Plumbing Meta guide |
| ITZ `/top-3-restoration-marketing-agencies-for-high-intent-leads/` | 17 | 19,190 | Restoration provider comparison after research |
| ITZ `/top-5-flooring-marketing-agencies/` | 12 | 9,965 | Flooring provider comparison after research |
| ITZ `/education/trade-schools/` | 20 | 7,179 | A substantive commercial trade school marketing page |

Source shorthand resolves to the domains in the source register. Metrics refer to the exact exported paths, including trailing slash; variant rows have not been combined here.

Do not publish fabricated “best agency” rankings or automatically list Wonderweb first. Disclose ownership relationships when discussing the reference businesses, explain comparison criteria, verify claims, and date substantive reviews. A buyer’s checklist can be published first, but it is not automatically an equivalent answer to a ranked-comparison search.

### 3.4 Avoid carrying over URL and indexing problems

The latest coverage chart row is **23 October 2026** for both sites:

| Coverage measure | BuiltRight | ITZ |
| --- | ---: | ---: |
| Indexed pages | 1,179 | 1,057 |
| Not indexed pages | 476 | 2,209 |
| Crawled, currently not indexed | 83 | 708 |
| Duplicate, Google chose different canonical | 2 | 260 |
| 404 pages | 48 | 104 |
| Redirect errors | 3 | 2 |

The reason counts come from each archive’s `Critical issues.csv`, which has no per-reason observation date. Do not assume those counts reconcile to the final dated chart row. Redirects, intentional `noindex`, and valid canonical alternatives can be healthy exclusions. The exports alone do not prove why individual pages are excluded.

Stripping query strings and terminal slashes from the exported URL paths yields **987 BuiltRight path groups** and **696 ITZ path groups**. ITZ has 303 groups containing more than one URL variant. This is evidence of historical variants, not proof they all remain independently indexable today. The public ITZ trade schools URL currently redirects from the slash form to the non-slash form.

Wonderweb should select one URL format, use consistent internal links and sitemap URLs, and enforce canonical/redirect rules from launch. Repeated topic pages must be assessed for overlapping intent before publication. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### 3.5 Preserve context around links and structured data

- The link file lists linking pages and crawl dates only. It does not show destination pages, anchors, link attributes, referral conversions, or quality scores. It is not a ready-made Wonderweb link acquisition list.
- BuiltRight’s breadcrumb chart ends on 2 November 2026 with 273 valid and zero invalid items. A historical critical-issue label has zero current items; do not report it as an active fault.
- Its review chart ends with six valid items and zero invalid items. Valid markup does not establish eligibility for visible review stars. Self-serving organization/local-business reviews have restrictions. [Google review snippet guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- Wonderweb must earn its own legitimate mentions and links. Use genuine client work, useful resources, relevant partnerships, and accurately attributed portfolio credits. Avoid mass sitewide links among owned sites.

## 4. Positioning, navigation, and conversion journey

### Proposed positioning

**Wonderweb Studio helps businesses grow through websites, advertising, social media, content, and ongoing digital support.**

The homepage should make the full service range obvious while showing specific industry expertise. Claims about results, team experience, or response times require supplied evidence.

### Primary navigation

- **Services:** Websites; SEO; Paid Advertising; Social Media; Content & Creative.
- **Industries:** featured home-service trades first, with an accessible industry directory.
- **Our Work:** website projects, ad creative, social content, and documented case studies.
- **Resources:** guides, cost explainers, comparisons, and templates.
- **About** and **Contact**.
- Primary action: **Book a Strategy Call** or **Request a Proposal**, chosen after confirming the actual inquiry process.

Keep expanded navigation grouped and usable on mobile. Do not place hundreds of links into every menu or footer. Important pages should be reachable through relevant service and industry hubs.

### Conversion paths

1. Industry/service search → relevant landing page → evidence and scope → inquiry.
2. Cost/guide search → useful answer → related service page → consultation.
3. Social/creative visitor → relevant portfolio → recurring service scope → quote.
4. Referral visitor → homepage → work/case studies → contact.

Inquiry form: name, work email, business website if available, services of interest, and brief goals; optional budget range and phone. Show clear success/failure states, route submissions to the chosen CRM or inbox, prevent spam, and measure successful submissions rather than clicks on the submit button. A booking click is not a completed booking.

## 5. Proposed page architecture

Paths below are proposed relative URLs. Use a consistent trailing slash policy in this draft. The domain is not yet known.

### 5.1 Core pages

| Page | URL | Purpose |
| --- | --- | --- |
| Home | `/` | Brand positioning, service range, work, proof, conversion |
| About | `/about/` | Real team, experience, operating approach |
| Contact | `/contact/` | Inquiry and booking |
| Services | `/services/` | Clear service directory |
| Industries | `/industries/` | Browsable sector directory |
| Our Work | `/work/` | Website, design, and content portfolio |
| Case Studies | `/case-studies/` | Measured client outcomes and method |
| Individual Case Study | `/case-studies/{project}/` | Evidence, scope, dates, results, limitations |
| Resources | `/resources/` | Editorial hub with useful topic navigation |
| Pricing / Engagement Options | `/pricing/` | Approved packages or transparent scoping process |
| Privacy Policy | `/privacy-policy/` | Reflect actual data collection and vendors |
| Terms | `/terms/` | Reflect the actual business and website terms |

Publish portfolio and case study hubs when real entries exist. Do not publish empty galleries or invented client outcomes to complete a checklist. Form thank-you pages and internal search/filter results are utility pages, not keyword targets.

### 5.2 Service pages

**Brief** means explicitly requested by the owner. **Export** means related topics are present in the supplied data, not verified demand for the exact proposed broad keyword. **Conditional** means confirm the actual offer and distinct search intent first.

| Service and proposed URL | Intent / scope | Basis |
| --- | --- | --- |
| `/services/web-design/` | New websites and redesigns; UX, responsive design, content planning | Brief + Export |
| `/services/web-development/` | Custom development, integrations, complex builds | Brief; Conditional separate page |
| `/services/website-management/` | Ongoing updates, page edits, publishing, administration | Brief + Export |
| `/services/website-maintenance/` | Updates, backups, monitoring, fixes; explain support boundaries | Brief; Conditional separate page |
| `/services/landing-page-design/` | Campaign landing pages and conversion-focused builds | Export + scope fit |
| `/services/seo/` | Organic search strategy and execution | Export; confirm client-facing offer |
| `/services/local-seo/` | Local visibility, profiles, local pages | Export; confirm offer |
| `/services/technical-seo/` | Crawl/indexing, architecture, performance audits | Export; confirm offer |
| `/services/paid-advertising/` | Channel selection, paid media strategy, budget allocation | Brief + Export |
| `/services/google-ads/` | Google campaign setup, optimization, landing pages, measurement | Brief + Export |
| `/services/meta-ads/` | Facebook/Instagram campaigns, creative testing, lead quality | Brief + Export |
| `/services/social-media-management/` | Organic planning, scheduling, posting, approvals, reporting | Brief |
| `/services/content-creation/` | Website copy, articles, social captions, content production | Brief |
| `/services/content-management/` | Editorial operations, CMS updates, publishing, content upkeep | Brief |
| `/services/graphic-design/` | Campaign and social graphics, brand consistency, creative batches | Brief |
| `/services/thumbnail-design/` | Social/video thumbnails; show examples and format deliverables | Brief |
| `/services/conversion-optimization/` | Improve lead journeys and landing-page performance | Conditional; supporting topic evidence |
| `/services/analytics-and-tracking/` | Conversion setup, reporting, attribution boundaries | Conditional; supporting topic evidence |

Website management vs maintenance, creation vs management, and design vs development need genuinely different scopes. Merge them into sections if the actual offers and search results substantially overlap. Meta Ads owns paid Facebook/Instagram intent; social media management owns organic posting and operations. “Facebook ads agency” does not automatically require a duplicate of Meta Ads.

Email marketing, CRM automation, reputation management, Local Services Ads, programmatic ads, Bing/Microsoft Ads, LinkedIn Ads, video, and AI-search topics appear in source page slugs. Keep them in the research backlog; add service pages only if Wonderweb offers them. Do not promise AI citations or special AI-search rankings.

### 5.3 Industry rollout

Use `/industries/{industry}/` for the broad commercial hub. Group these pages in navigation without requiring extra URL nesting. A sector overview such as `/industries/automotive/` should explain multi-segment expertise and link to distinct trade pages.

| Stage | Industry hubs | Reason |
| --- | --- | --- |
| First cluster | Roofing; HVAC; Plumbing; Electricians | Strongest repeated commercial demand in BuiltRight data |
| Next home-service cluster | Kitchen remodeling; Bathroom remodeling; Landscaping; Pest control | Substantial related page/query evidence |
| Further home services | Windows and doors; Flooring; Restoration; Painting; Concrete contractors; Home builders; Home inspection; Moving companies; Dumpster rental; Junk removal | Observed topics, expanded as proof and capacity allow |
| Longer-tail home services | Concrete coating; Mold remediation; Siding; Solar; Appliance repair; Handyman; Pool/spa services; Window cleaning; Carpet/house cleaning; Septic; Fire safety; Fencing; Deck building; Drywall; Gutters; Security systems; Locksmiths | Preserve inventory coverage; validate scope and intent individually |
| Automotive | Automotive overview; Auto repair; Auto detailing; Collision repair; Car washes; Auto glass/windshields; Tire services | ITZ topic coverage |
| Medical/wellness | Medical overview; Chiropractors; Dentists; Med spas; Estheticians; Physical therapy; Urgent care; Massage therapy | ITZ topic coverage; use appropriate expert review for sector claims |
| Legal | Law firms overview; Criminal defense; Family/divorce; Personal injury; Immigration; Estate planning; Bankruptcy | ITZ topic coverage; family/divorce split needs intent validation |
| Education | Education overview; Trade schools; Private schools; Universities | ITZ topic coverage; trade schools have observed clicks |
| Real estate | Real estate overview; Agents/realtors; Property management; Investors | ITZ topic coverage |
| Review before adding | Other specialized audiences, franchises, multi-location brands, property-owner lead searches, and location pages | Requires a confirmed offer and a distinct useful page brief |

This is a staged sector list, not a requirement to launch every industry at once. The companion inventory retains additional terms for review.

### 5.4 Industry-specific service pages

Start with these proposed routes; validate them before the relevant publishing wave:

| Industry | Hub | SEO | Web design | Google Ads | Meta Ads |
| --- | --- | --- | --- | --- | --- |
| Roofing | `/industries/roofing/` | `/industries/roofing/seo/` | `/industries/roofing/web-design/` | `/industries/roofing/google-ads/` | `/industries/roofing/meta-ads/` |
| HVAC | `/industries/hvac/` | `/industries/hvac/seo/` | `/industries/hvac/web-design/` | `/industries/hvac/google-ads/` | `/industries/hvac/meta-ads/` |
| Plumbing | `/industries/plumbing/` | `/industries/plumbing/seo/` | `/industries/plumbing/web-design/` | `/industries/plumbing/google-ads/` | `/industries/plumbing/meta-ads/` |
| Electricians | `/industries/electricians/` | `/industries/electricians/seo/` | `/industries/electricians/web-design/` | `/industries/electricians/google-ads/` | `/industries/electricians/meta-ads/` |

Later add selected service children for other industries based on their keyword clusters. Do not multiply every service by every industry and every city. Each published child needs distinct buyer questions, deliverables, examples, and internal links. Google identifies substantially similar doorway pages and low-value scaled content as spam risks. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

## 6. Keyword coverage and content production process

### 6.1 Complete coverage ledger

Turn the companion inventory into a final editorial mapping after richer access arrives. Every exported record should receive one disposition:

- **Create:** a distinct relevant intent needs a new page.
- **Group:** covered by another primary page, with secondary keywords recorded.
- **Resource:** informational or comparison intent needs editorial content.
- **Brand/navigation:** searches for an existing business, person, or specific website; not a Wonderweb service keyword.
- **Variant:** duplicate or tracking URL, mapped to its underlying source topic.
- **Defer:** relevant opportunity, awaiting scope, expertise, evidence, or capacity.
- **Exclude:** irrelevant to the agency, with a recorded reason.
- **Investigate:** ambiguity cannot be resolved from these exports.

Examples needing judgment: “built right digital,” “itz digital,” named individuals, specific company domains, requests for the active ads of another business, and follower-count/post-date lookups. These do not justify pages pretending to be those businesses or claiming access to their private data. Competitor comparison content can be considered separately when useful and factual.

Final mapping fields:

`record ID → exact query/source URL → source property and period → country/device scope → intent → primary cluster → target Wonderweb URL → secondary terms → evidence/proof required → disposition/reason → priority → owner → content status → publication date → review date`

Keep query-to-source-page association **unverified** until actual query-by-page data supports it. For fuller coverage, use authorized Search Console exports/API pagination over suitable date segments, plus existing sitemaps/CMS lists. Even a larger export cannot reveal all anonymized searches. Bulk export can help future collection; it should not be assumed to restore unavailable historical data.

### 6.2 Prioritization rules

1. Confirm that Wonderweb actually provides the service and can serve the audience.
2. Separate hire intent, comparison intent, learning intent, and brand/navigation intent.
3. Look for relevant clicks, substantial impressions, and useful existing proof.
4. Review current search results in the target country for page type and intent overlap before finalizing a brief.
5. Prefer clusters that support a coherent service → industry → resource → case study journey.
6. Weigh effort and evidence requirements. An honest specific service page can be ready before a defensible national provider ranking.

Do not treat historical competitor position as Wonderweb’s expected starting rank. No keyword difficulty or search-volume estimates have been invented for this plan.

### 6.3 First editorial backlog

| Proposed resource URL | Intent | Connection |
| --- | --- | --- |
| `/resources/roofing-seo-cost/` | Cost research | Roofing SEO service |
| `/resources/hvac-seo-cost/` | Cost research | HVAC SEO service |
| `/resources/google-ads-cost-home-services/` | Budget planning | Google Ads + industry hubs |
| `/resources/roofing-marketing-ideas/` | Practical advice | Roofing hub |
| `/resources/hvac-marketing-ideas/` | Practical advice | HVAC hub |
| `/resources/electrician-marketing-ideas/` | Practical advice | Electrician hub |
| `/resources/facebook-ads-roofers/` | How-to | Roofing Meta Ads |
| `/resources/facebook-ads-plumbers/` | How-to | Plumbing Meta Ads |
| `/resources/facebook-ads-electricians/` | How-to | Electrician Meta Ads |
| `/resources/meta-ads-kitchen-remodelers/` | How-to | Kitchen remodeling hub + Meta Ads |
| `/resources/hvac-website-design-guide/` | Planning a website | HVAC web design |
| `/resources/plumbing-lead-generation/` | Lead-generation strategy | Plumbing hub + channel pages |
| `/resources/roofing-seo-agencies/` | Provider comparison | Separate comparison intent; original research required |
| `/resources/hvac-seo-agencies/` | Provider comparison | Original research required |
| `/resources/roofing-lead-generation-companies/` | Provider comparison | Explain lead models, ownership, qualification |
| `/resources/website-management-vs-maintenance/` | Service education | Owner-requested offering; fresh keyword validation needed |
| `/resources/social-media-content-calendar/` | Practical resource | Owner-requested offering; fresh keyword validation needed |
| `/resources/thumbnail-design-guide/` | Creative education | Owner-requested offering; fresh keyword validation needed |

Expand cost guides, comparisons, and channel guides to other sectors only after each receives a distinct brief. No minimum word count or publication-volume target substitutes for useful content.

### 6.4 Reusable page briefs

**Every page:** primary audience, intent, owning keyword cluster, unique promise, proof sources, draft title/H1, sections, CTA, parent hub, related pages, responsible reviewer, and status.

**Service page:** who it is for; concrete deliverables; what the client supplies; process; examples; scope boundaries; pricing factors; questions that affect a buying decision; next step.

**Industry hub:** industry-specific sales cycle and customer needs; appropriate channel mix; relevant website/content examples; lead qualification; seasonality where supported; service links; proof; inquiry.

**Industry/service child:** explain how that service changes for the trade. For example, a roofing Google Ads page should address repair vs replacement campaigns, service areas, qualification, landing pages, and measurement using verified examples.

**Guide/cost article:** direct answer; assumptions and audience; worked examples; credible sources; practical steps; author/reviewer; meaningful update date; related service CTA.

**Case study:** client permission; business context; starting point; dates; scope; actual work; measured outcomes; measurement source; limitations. Distinguish the team’s prior work from work performed under the Wonderweb brand.

**Social/creative page:** actual sample assets, formats, content calendar or approval example, revision process, recurring delivery scope, and ownership of final assets.

Original examples, analysis, and delivery knowledge should provide value beyond rewriting the reference sites. [Google’s helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## 7. SEO and content quality requirements

### On-page and internal linking

- One clear primary intent and descriptive H1 per page; natural supporting terms.
- Unique titles and descriptions written for the page’s audience. Avoid forced exact-match repetition.
- Useful headings, concise answers, relevant images with descriptive alt text, accessible media.
- Industry hub → relevant industry/service children; child → its hub and broad service page; resource → closely related service; case study → the service and industry actually demonstrated.
- Contextual descriptive anchors; no indiscriminate blocks linking every page to every other page.
- Every intended indexed page reachable from a useful hub; no orphan pages.
- Topic/category archives indexed only when they offer a useful curated destination. Thin tags, filters, search results, and utility pages should not multiply indexable content.
- Refresh factual information when it changes; do not simply change the year or displayed update date.

### Technical requirements for the build

- Important text, links, metadata, and canonical tags available in server-rendered or static HTML.
- HTTPS, one preferred hostname, lowercase slugs, a documented slash policy, and direct permanent redirects for genuine URL changes.
- Self-referencing canonical on intended unique pages; tracking parameters canonicalized to the clean page. Align internal links and XML sitemaps with that choice. [Canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- XML sitemaps generated from published canonical URLs, with accurate modification dates. Exclude redirects, errors, draft content, and intentionally non-indexed pages.
- Production robots/indexing settings verified after launch. Keep staging protected; do not accidentally transfer staging `noindex` settings to production. Robots blocking is not a substitute for a deliberate indexing strategy.
- Genuine 404 responses for missing URLs. Avoid redirecting unrelated missing pages to the homepage.
- Optimize images, fonts, script loading, and layouts. Target good field Core Web Vitals: LCP at or below 2.5 seconds, INP at or below 200 ms, CLS at or below 0.1. Evaluate at the 75th percentile when field data is sufficient; use lab checks before launch. [Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals)
- Functional mobile navigation, keyboard access, visible focus, labeled forms, readable contrast, and reduced-motion support.
- Structured data where accurate: Organization, BreadcrumbList, and Article for applicable content. Service markup may describe offers but is not a promised Google rich result. Use LocalBusiness only when the business facts fit. Validate supported types and rendered markup.
- Do not copy review ratings from the reference sites or assume FAQ/review markup earns visible search enhancements. [Review eligibility rules](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

### Location and multi-site strategy

Keep location pages deferred until actual target markets, operations, and evidence are confirmed. No invented offices or city-by-service-by-industry page matrix. A useful location page needs locally meaningful service information and a clear reason to exist.

Wonderweb needs its own brand voice, accurate business identity, proof, and content. Ownership of the reference sites does not transfer their authority or justify duplicating their pages. If a future migration is requested, prepare a separate URL-by-URL migration plan before changing those websites.

## 8. Visual design and content system

### Design direction to develop after assets arrive

- A confident, clear agency presentation with a strong service hierarchy and visible creative work.
- Responsive typography, generous spacing, readable long-form articles, and deliberate CTA placement.
- Real website screenshots, campaign examples, social post sets, and thumbnail comparisons where available.
- Establish palette, typography, spacing, buttons, cards, form states, icons, and image treatment from the supplied logo and brand direction.
- Subtle motion only where useful; preserve performance and readability.

Do not invent brand colors, fabricate client logos, or fill proof sections with made-up metrics. Approved placeholder wireframes may be created in a later design phase, but are outside this planning deliverable.

### Page templates

1. Homepage.
2. Service directory and detail.
3. Industry directory and hub.
4. Industry/service detail.
5. Resource index and article.
6. Comparison article with criteria and sources.
7. Work index and project detail.
8. Case study.
9. About, contact, pricing, and policy pages.

Templates provide layout consistency; the body content must remain specific to each audience and intent.

### CMS/content model

Store title, slug, page type, summary, SEO title/description, canonical override only when needed, publication status, indexability, author/reviewer, created/updated dates, hero/media, content sections, service/industry relationships, related resources, CTA, proof references, and schema fields.

Support drafts/previews, revisions, reusable components, redirects, image management, and relationship-based internal links. Prevent duplicate slugs. Editors should be able to add a useful page without editing application code.

Select the CMS/framework after reviewing the supplied build files and editing needs. Confirm how the chosen platform handles server rendering, metadata, redirects, backups, security updates, and content export before committing.

## 9. Measurement and definition of improvement

Set up a Wonderweb Search Console property and the chosen analytics/CRM integrations after the domain and tools are confirmed. Preserve UTMs through lead handling; avoid sending personal form data into analytics events.

| Area | Measure | How it will guide decisions |
| --- | --- | --- |
| Commercial outcome | Qualified inquiries, booked calls, opportunities, customers | Prioritize content that attracts suitable buyers |
| Organic acquisition | Non-brand clicks and impressions by cluster, country, device | Track relevant visibility rather than aggregate traffic alone |
| Search snippets | CTR within comparable position/intent/device groups | Identify pages needing better alignment |
| Coverage | Intended indexed URLs, exclusions, canonical disagreements | Diagnose publishing and indexing problems |
| Conversion | Successful form submissions and confirmed bookings by landing page | Improve page journeys and lead quality |
| Experience | Field Core Web Vitals when available; mobile/form reliability | Correct performance and usability issues |
| Editorial execution | Relevant intents mapped; approved briefs; evidence-complete published pages | Track progress without rewarding thin page volume |

Maintain separate brand/non-brand reporting for Wonderweb and each reference site. Do not count searches for BuiltRight or ITZ as realistic substitute-brand traffic.

After launch: review technical failures promptly, review early Search Console coverage weekly, and review content/lead performance monthly. Compare matched windows and account for seasonality. Establish numerical growth targets after a baseline exists; do not promise a traffic percentage or ranking deadline from these files alone.

## 10. Delivery phases and acceptance criteria

| Phase | Work | Completion condition |
| --- | --- | --- |
| 0 — Planning, this deliverable | Review exports; define architecture; preserve evidence; prioritize | Main plan and complete supplied query/page inventory saved; limits documented |
| 1 — Intake and deeper audit | Brand files, business details, site access, fuller GSC data, sitemaps/CMS, current search-result review | Geography/offers confirmed; priority records mapped; evidence and content gaps assigned |
| 2 — Brand and UX | Design system; navigation; wireframes; desktop/mobile samples | Representative home, service, industry, and article layouts reviewed against supplied brand |
| 3 — Foundation build | CMS/templates; navigation; forms; metadata; analytics plumbing | Representative page types work end to end; editors can manage content |
| 4 — First publishing set | Core offers; first home-service cluster; useful guides; real work | Content and technical acceptance checks pass for every intended launch page |
| 5 — Controlled expansion | Remaining priority trades; automotive/medical/legal/education/real estate; selected comparisons | New pages meet intent/proof criteria; indexing and leads reviewed before further expansion |
| 6 — Ongoing improvement | Refreshes, content gaps, conversion work, authority building | Monthly decisions linked to evidence and qualified lead outcomes |

No fixed delivery date is assumed. Scope depends on the asset handoff, content capacity, selected platform, and available proof.

### Suggested first publishing set

- Core navigation/business pages, with work and case studies only when populated.
- All confirmed primary service offers from the brief; combine overlapping offers where appropriate.
- Roofing, HVAC, plumbing, and electrician industry hubs.
- Four to eight strongest industry/service children, starting with demonstrated SEO and web-design demand.
- Four to eight useful resources from the initial backlog.
- One or more real project/case-study entries when evidence is available.

This suggests roughly **35–50 substantive pages** in a mature first release, depending on merged services and available proof. It is a planning range, not a quota or requirement to delay a smaller useful launch. Subsequent releases can grow well beyond 100 pages as the verified coverage map warrants.

### Launch acceptance checklist

- [ ] Logo, colors, imagery, business name, domain, contact details, and offers are correct.
- [ ] No invented credentials, testimonials, client logos, prices, addresses, or results.
- [ ] Every launch page has a distinct approved intent and useful original content.
- [ ] Titles, descriptions, headings, canonicals, internal links, image text, and applicable structured data checked.
- [ ] No broken internal links, accidental duplicate routes, orphan pages, or empty proof sections.
- [ ] Sitemap contains only intended public canonical URLs; production is crawlable and indexable as intended.
- [ ] Mobile and desktop navigation, keyboard interactions, forms, booking, and error/success states verified.
- [ ] A test inquiry reaches the intended destination and records one successful conversion.
- [ ] Analytics, consent behavior where applicable, and privacy text match the actual implementation.
- [ ] Representative pages pass performance/accessibility checks; field monitoring is ready for later data.
- [ ] Baseline dashboard, content owners, update process, and launch rollback/backup approach established.

## 11. Inputs needed at the next handoff

These are recorded for the later creation phase, not requests that block this plan.

| Input | What it determines |
| --- | --- |
| Logo variants, brand colors, fonts, visual references | Final design system |
| Photos, screenshots, social graphics, thumbnails, video assets | Portfolio and authentic visual evidence |
| Existing website creation files or preferred starter | Implementation starting point |
| Wonderweb domain and intended markets | Canonical URLs, geography, language and contact details |
| Exact services, deliverables, turnaround, pricing approach | Accurate service pages and conversion copy |
| Team details and relevant experience | About page and author credibility |
| Client permission, testimonials, project data, proof of outcomes | Work, case studies, and trust sections |
| Read access to the reference sites/CMS and Search Console | Full audit and verified query-by-page mapping |
| Analytics/CRM or booking preferences | Working lead capture and reporting |
| Publishing capacity and industry priorities | Practical release sequence |

## 12. Next action when assets arrive

Update this plan with the confirmed brand, business scope, target markets, and build context. Finalize the first release’s keyword ownership and page briefs, then create the design system and representative page designs before expanding production across the site.

The original exports remain the historical baseline. The companion inventory keeps every supplied search query and page visible so relevant opportunities can be assigned, grouped, deferred, or excluded with an explicit reason as the project progresses.
