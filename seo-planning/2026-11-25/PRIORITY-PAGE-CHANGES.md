# Three buyer pages improved locally

Completed November 25, 2026. No commit, push or production deployment was performed for this implementation. Preview: http://127.0.0.1:3010.

## Pages to review

| Page | Main change | Search title |
| --- | --- | --- |
| /solutions/appliance-repair-marketing/ | Replaced repetitive copy and the content-management mismatch with appliance-specific services, job-fit examples, dispatch handoff, costs and the approved paid-campaign guarantee | Appliance Repair Marketing Agency: SEO & Ads |
| /solutions/landscaping-ppc-management/ | Separated maintenance, installation and commercial inquiries; clarified campaign scope, targeting, lead qualification, costs and the approved guarantee | Landscaping PPC Agency: Google Ads Management |
| /resources/custom-home-builder-seo-tips/ | Preserved the topic and URL; expanded nine priorities around build types, project evidence, real coverage, buyer questions and qualified inquiries | SEO for Custom Home Builders: 9 Priorities |

The studio name is appended to each search title. Descriptions were rewritten to explain the service and intended U.S. buyer. Google can choose a different title or snippet; these are proposed search metadata, not a preview of a guaranteed result.

## Content and conversion

- Each page keeps its existing URL and the site's paper, cobalt, citrus and lavender design.
- Each has one H1, 8–9 substantive content sections with H2 headings, H3 subsections where useful, and seven visible FAQs.
- Native call-request buttons now appear in the hero and contextual callout. Pricing and relevant service links help a visitor evaluate scope before contact.
- The appliance-repair page's primary service relationship now points to Google Ads instead of unrelated content management. Its content also links explicitly to appliance SEO and website work.
- The two service pages use Service structured data with the real remote agency provider; the builder resource remains BlogPosting. No invented local address was added.
- FAQ answers are supplied to both visible content and JSON-LD. Markdown retains the rewritten text, tables, FAQs, supporting images and service paths.
- Dates record the November 25 revision while retaining original publication provenance. Last-modified dates and image entries flow into the existing sitemap.
- The approved paid-campaign guarantee retains its eligibility, definition, conditions and remedy. No new promise of sales or rankings was introduced.

## Images and provenance

Three distinct concept covers were generated with the **built-in image_gen tool**. The user's API key was not needed. The complete prompts and generation source paths are saved in `website/scripts/priority-art-provenance.json`.

Project assets:

- `website/public/editorial/buyer-guides/appliance-repair-concept.webp` — refrigerator, washer, tools, local search and a phone.
- `website/public/editorial/buyer-guides/landscaping-ppc-concept.webp` — landscaped garden, work van, search and location targeting.
- `website/public/editorial/buyer-guides/custom-home-builder-concept.webp` — model home, architectural plans and discoverability.
- Three original explanatory SVG/WebP diagrams in the same folder: appliance-lead-journey, landscaping-campaign-map and builder-site-structure.

Every target page now has a unique hero and a supporting explanatory image. The covers are optimized 1440×810 WebP files; their approximate file sizes are 61 KB, 227 KB and 130 KB. They are conceptual artwork, not client-project evidence. HTML and image metadata describe them accordingly. New 1200×630 social previews were also generated.

The hero uses responsive image delivery and priority loading; supporting diagrams load lazily with explicit dimensions. The general cover generator preserves these selected custom covers instead of replacing them with shared topic images.

## SEO guidance applied

There is no fixed quota of words, headings, images or sections that earns a ranking. One clear H1 is the editorial convention used here; H2 and H3 reflect the document structure. Images explain a buying decision and complement visible text. Repeating keyword variants or adding decorative images merely to increase their count is not the strategy.

Schema describes visible facts and can help systems interpret content. Markdown is an aligned alternate representation, not a Google ranking requirement. Google states that its AI features use the same foundational SEO practices and do not require special AI files or schema. Eligibility and technical readiness do not guarantee indexing, ranking, image display or citations.

Sources reviewed November 25:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google snippets and descriptions](https://developers.google.com/search/docs/appearance/snippet)
- [Google Images best practices](https://developers.google.com/search/docs/appearance/google-images)
- [Google AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Business Profile representation rules](https://support.google.com/business/answer/3038177)
- [Google Ads location targeting](https://support.google.com/google-ads/answer/1722043)
- [Google Ads Ad Rank](https://support.google.com/google-ads/answer/1722122)

## Verification

- TypeScript and production build passed; all 43 automated tests passed.
- Three local HTML and Markdown routes passed response, canonical, schema, FAQ and sitemap checks.
- All 17 distinct internal destinations and 14 referenced image assets checked returned successfully.
- Desktop and 390px mobile review: one H1 per page, no heading-level skips, no page overflow, images loaded, FAQ toggles worked.
- All three hero calls to action opened the existing request-time dialog. Nothing was submitted. This remains a meeting request, not an automatically confirmed calendar reservation.
- Local preview remains noindex. Google indexing, rankings, CTR and leads after publication have not been claimed or measured.

Evidence: priority-test-results.txt, priority-build-results.txt and priority-route-validation.json.

## Evaluate after the owner publishes

Verify the three production URLs, canonical metadata, artwork and sitemap. Inspect the existing URLs in Search Console after deployment. Save the launch date and compare equivalent U.S. query/page windows after enough fresh data accumulates; record any changes in average position, relevant clicks and accepted inquiries. Because content, titles and page presentation changed together, a change in CTR alone cannot isolate the effect of one element.

Prioritize agency-intent queries already observed: appliance repair marketing agency; landscaping PPC agency; landscaper PPC services; SEO for custom home builders. Do not infer market search volume from Wonderweb's impressions or promise a first-page deadline. Continue gathering permissioned project evidence and real sales questions to improve these pages further.
