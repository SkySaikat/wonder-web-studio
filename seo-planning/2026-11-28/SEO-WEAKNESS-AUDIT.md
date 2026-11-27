# Wonderweb Studio — SEO weakness audit & lead plan

Prepared 28 November 2026.

## Data used

- **Live crawl, 28 Nov:** all 916 sitemap URLs on wonderwebstudio.com. Collected title, meta description, H1, canonical, robots, word count, images, schema and contact elements.
- **OpenSEO + Search Console (U.S.), 22 Aug–22 Nov:** 420 pages, 1,715 queries. Pulled through OpenSEO on 25 Nov. OpenSEO is not connected in this session, and its keyword and domain tools returned `INSUFFICIENT_CREDITS` on 25 Nov.
- **Ahrefs free Domain Rating check, 28 Nov.**
- **Not measured:** search volumes and Core Web Vitals. The PageSpeed API quota was exhausted.

## The headline

| Metric | Value |
|---|---|
| Pages in sitemap | 916 (514 resources, 278 solutions, 32 locations, 25 services, 21 guides, 18 industries) |
| U.S. impressions (3 months) | ~10,450 |
| **U.S. organic clicks (3 months)** | **0** |
| Median average position | ~60 (page 6) |
| **Domain Rating (Ahrefs)** | **0** |
| Competitors' DR | dallaswebdesign.io 13 · Black Anchor 31 · Red Spot 73 · Hook Agency 74 · Scorpion 84 |

**Diagnosis:** the technical setup is mostly clean, so it is not what's holding the site back. The two main problems are:

1. **Authority.** The domain has essentially no backlinks.
2. **Breadth without depth.** About 900 pages spread over 40+ trade niches (windows, mold, septic, solar, fire protection, pest control, and more). Google can see the pages but doesn't trust them enough to rank them above page 5.

Adding more pages will not fix this. Fewer, stronger pages plus real links and proof will.

## What is already good (keep it)

- Every page returns 200 and is indexable. Canonicals all match. robots.txt is correct and blocks only `/api/`.
- Exactly one H1 per page. No duplicate titles. No duplicate or missing meta descriptions.
- Schema: Organization, WebSite, Breadcrumb, FAQPage (600 pages), Service, BlogPosting.
- Median page length is 1,167 words. Only 18 pages are under 400 words.
- Real case-study pages exist under /results/ (for example "Roofing SEO: 53 Booked Appointments" and "59.19% Lower Lead Costs"). These are the site's strongest trust asset.

## Weak points, in priority order

### 1. Zero authority (DR 0) — the #1 ranking blocker
No amount of on-page work will move position-60 pages to page 1 without links.

- **Do:** aim for 15–30 relevant referring domains in 90 days:
  - Clutch, DesignRush, GoodFirms, UpCity and Sortlist profiles. Get client reviews on Clutch.
  - Google Business Profile, Bing Places, BBB and the Chamber of Commerce.
  - Partner/vendor pages: Workiz (already a client), CallRail, ServiceTitan or Jobber partner directories.
  - "Built by Wonderweb Studio" footer credits on client sites. Make sure the client approves each one.
  - Guest posts and podcasts in contractor trade media (Roofing Contractor, Contracting Business, Remodeling, PHC News).
  - Original data. For example: "We audited 100 roofing websites in Texas…" That kind of study earns links naturally.
- **Avoid:** bought link packages and PBNs.

### 2. Too many thin, templated niche pages (scaled-content risk)
- 278 /solutions/ pages (median 842 words) and 514 /resources/ pages cover dozens of trades with the same structure.
- Many titles read as machine-generated. Examples:
  - "Choosing Plumbing PPC Management agency to Dominate Your Local Market - A Practical Guide"
  - "Choosing Cost of Roofing Reputation Management - A Practical Guide"
  - 27 titles use this "Choosing … – A Practical Guide" pattern.
- 12 paginated "Industry Service Guides – Page N" pages are in the sitemap.
- **Do:**
  - **Pick 4–5 core trades:** roofing, HVAC, plumbing, electrical and remodeling. Those match your free guides.
  - For other trades, merge or 301-redirect pages with no impressions into the strongest page. Two options:
    - Use the GSC export: keep any page with impressions, and prune or merge pages with 0 impressions over 3 months that also don't target a core trade.
    - Or set the weakest to `noindex` until they're rewritten.
  - Rewrite the 27 "Choosing … – A Practical Guide" titles into natural titles.
  - Remove paginated listing pages from the sitemap.

### 3. No phone number / weak lead capture on ~every page
- 915 of 916 pages have **no `tel:` click-to-call link**. Contractors and small-business owners call.
- Only 22 pages contain a form. The rest rely on a "request a time" dialog.
- **Do:**
  - Add a tracked phone number in the header, sticky on mobile, plus `telephone` in Organization schema.
  - Add a short 3-field inline form ("Get a free website/marketing audit") at the bottom of every solutions, resources and location page.
  - Add a lead magnet CTA that matches the page's trade. You already have trade-specific PDFs (roofing, plumbing, electrician and general-contractor SEO and Google Ads guides). Make sure each page's CTA points to the right one.

### 4. Keyword-less H1s on money pages
| Page | Current H1 | Suggested H1 |
|---|---|---|
| Home | "Websites & marketing, built to grow." | "Web Design & Marketing for Contractors and Home-Service Businesses" (keep the slogan as a subhead) |
| /services/web-design/ | "Website Design — A website that looks the part…" | "Website Design for Contractors & Small Businesses" |
| /pricing/ | "A bigger ambition. The right team." | "Website & Marketing Pricing (Packages from $X)" |
| /solutions/windows-doors-marketing/ | "Windows & Doors Marketing" | "Marketing for Window & Door Companies: SEO, Ads & Websites" |

### 5. Titles getting cut off in Google
- 393 of 916 titles are over 60 characters. The " | Wonderweb Studio" suffix uses 19 of them.
- **Do:** shorten the suffix to " | Wonderweb", or drop it on long article titles. Put the keyword first.

### 6. Weak trust signals (E-E-A-T) for a "who do I hire" decision
- /about/ has 340 words. Name the founder and team, with photos, experience and LinkedIn links. Add `Person` schema.
- The 13 /work/ project pages have ~175 words each. Most portfolio pieces are non-contractor brands (anime, olive oil, fashion), which doesn't support the contractor positioning.
  - Expand the contractor-relevant ones (Workiz, plus any trade clients) into 800+ word case studies: problem → what you built → results → quote.
  - Consider `noindex` for the "design study" explorations.
- No visible reviews or star ratings were detected. Collect Google and Clutch reviews and show them near CTAs.
- Link /results/ case studies from every matching solutions page. Roofing results should appear on roofing pages, and so on.

### 7. Location pages: real competition, low visibility
- 32 location pages earned only 76 impressions in 3 months.
- Dallas, Plano, Fort Worth and Austin all have dedicated competitors with higher DR.
- **Do:** keep them, but don't expect page-1 rankings until authority improves. For each city, add something only you can say: a local client, a local project, or local data. Without that, they read as city-name swaps. Don't add more cities yet.

### 8. Performance / page weight (to verify)
- The homepage HTML is 350 KB (436 KB max on other pages), with 31 images. The site-wide median is 93 KB.
- Run PageSpeed Insights manually. The API quota was exhausted. Check LCP and INP on mobile.
- 88 images on 25 pages have no alt text. 6 of them are on the homepage.

## Keywords to target

Search volumes are not validated because OpenSEO is out of credits. Priorities below come from your own Search Console data plus buyer intent.

### A. Quick wins: you already rank 7–20, so push to the top 5
Refresh each page: keyword in the title and H1, a direct answer up top, a case study, an FAQ, and 3–5 internal links from related pages.

| Query (U.S.) | Position | Page to strengthen |
|---|---|---|
| seo for custom home builders | 14.4 | /resources/custom-home-builder-seo-tips/ |
| landscaping reputation management | 17.6 | /solutions/landscaping-reputation-management/ |
| website maintenance services for hvac contractors | 10.3 | HVAC website maintenance page |
| mold remediation seo / seo for mold remediation | 11–15 | mold remediation SEO page |
| septic company website designer | 18.8 | septic web design page |
| digital marketing agency for flooring contractors | 10.8 | flooring page |
| google business profile management for remodeling companies | 12.8 | remodeling GBP page |
| link building services for plumbing website | 7.8 | plumbing link building page |
| appliance repair digital marketing agency | 9.3 / 29 | /solutions/appliance-repair-marketing/ |
| fence company ppc management | 19.3 | fence PPC page |
| siding contractor seo | 19.7 | siding SEO page |

These are low-volume but high-intent. A searcher there is looking to hire, not to learn.

### B. Core money keywords: build authority over 3–6 months
These are where the leads are.

- **Web design:** contractor website design, roofing website design, HVAC website design, plumbing website design, electrician website design, remodeling contractor website design.
- **SEO:** roofing SEO, HVAC SEO, plumbing SEO, electrician SEO, local SEO for contractors.
- **Paid ads:** Google Ads for contractors, roofing PPC, HVAC PPC management, plumbing PPC agency, Local Services Ads management.
- **Cost / comparison (high conversion):** how much does a contractor website cost, roofing website cost, HVAC marketing cost per lead, best marketing agency for roofers.

### C. High impressions but position 50–80
These pages are visible but weak. Merge overlapping pages into one strong page per topic.

| Query | Impressions | Position |
|---|---|---|
| home builder seo | 129 | 53 |
| hvac site retargeting | 109 | 81 |
| siding contractor leads | 83 | 62 |
| bathroom remodeling marketing | 79 | 69 |
| kitchen remodeling marketing | 79 | 69 |
| roofing seo keywords | 63 | 74 |
| lead generation for window and door contractors | 56 | 53 |

Example of the merge: /solutions/windows-doors-marketing/ and /solutions/window-door-lead-generation/ compete with each other. Make one canonical page.

### D. Branded
- "wonder web development" has 64 impressions at position 39.
- You don't rank #1 for something close to your own name. Fix this with a consistent NAP, a Google Business Profile, social profiles linked via `sameAs` in schema, and directory listings.

## How to get to the front page — realistic timeline

| Window | Actions | Expected result |
|---|---|---|
| Week 1–2 | Phone + forms on every page; H1/title fixes; Google Business Profile; Clutch/DesignRush/UpCity/BBB profiles; ask 5 clients for reviews | Lead capture works; first referring domains |
| Week 2–6 | Refresh the 11 quick-win pages; merge/prune non-core thin pages; expand 3–4 contractor case studies; link /results/ from solutions pages | Long-tail terms move from 10–20 into the top 10 |
| Month 2–3 | 2–4 links/month from trade media, partners and client credits; one original data study; one strong guide per core trade per month | DR climbs past ~10–15; first organic clicks and inquiries |
| Month 3–6 | Push the core trade pages (roofing/HVAC/plumbing web design & SEO) | Page 1 for mid-competition niche terms becomes realistic |

**Leads *soon* won't come from SEO alone.** With DR 0, organic will take 3–6 months to produce steady leads. For near-term leads, run:
- Google Ads and LSA on 3–5 exact high-intent terms, such as "roofing website design" and "contractor web design company".
- Direct outreach to contractors, using the free audit as the hook.
- Clutch/UpCity listings, which generate leads directly.
