# Migration and indexing delivery

## Current content

- 662 adapted items: 396 blog guides and 266 industry service guides.
- 659 items eligible for publication now; 3 scheduled releases.
- 84 agency-comparison sources rewritten as selection frameworks; unsupported vendor rankings and promotional profiles removed.
- Original source dates are shown separately from the Wonderweb adaptation date.
- 1,689 link occurrences mapped, including 156 external references. Useful links retained; malformed links and advertising redirects normalized. One confirmed 404 reference removed. Other blocked or TLS-failing external checks are recorded as unverified.
- Every adapted route has metadata, a canonical URL, a featured cover, Article/BlogPosting and breadcrumb schema, and a Markdown equivalent.
- The existing source-company rating badges, client counts and borrowed campaign-result blocks were removed.

## Scheduled releases

- 2026-11-14T12:00:45Z: Deck Builder Web Design (/solutions/deck-builder-web-design/)
- 2026-11-13T12:10:00Z: SEO for Custom Home Builders: 9 Tips for Better Leads (/resources/custom-home-builder-seo-tips/)
- 2026-11-14T12:10:00Z: Deck Builder Software: The Tools Deck Companies Use to Win Projects (/resources/deck-builder-software-tools/)

## Source decisions

See `migration-decisions.csv` for every source item and its destination or exclusion reason. The raw source bodies stay local and outside the public app.

Items held from publication include drafts, empty templates, company/legal material, unconfirmed specialist offerings, unverified comparisons, and content without enough coherent material after removing unsupported claims. These are not silently published as Wonderweb facts.

## Indexing

See `INDEXING-STATUS.md` for observed Google and Bing results. The current live sitemap was successful in Google, the homepage and sampled blog were indexed, and Bing accepted the sitemap. Newly deployed URLs still require search-engine crawling and selection.

## Hero

See `HERO-ART.md` for the original generated background, exact prompt and local WebP path.

## Validation

- TypeScript check, 18 automated tests and production build passed.
- Full local HTTP crawl: 789 public HTML URLs, 789 Markdown counterparts, 833 sitemap image URLs; unique titles, descriptions and share images; no SEO/discovery issues.
- JSON-LD reference/type checks passed. The optional online Schema.org vocabulary was unavailable, so this is not a claim of Google Rich Results approval.
- Scheduled HTML and Markdown routes return 404 before their release; tests check the UTC release boundary.
- Mobile/desktop hero and representative migrated article/library layouts checked in the browser.
- Production publication and follow-up verification are pending.
