# SEO and lead fixes implemented — 28 Nov 2026

Verified locally: typecheck, production build, 43/43 tests and rendered pages on desktop and 375px mobile. Not deployed by Claude.

## Titles and descriptions
- **83 templated headlines rewritten.** These were the "Choosing … – A Practical Guide" headlines (H1 and title). For example: "How to Choose a Plumbing PPC Management Agency" and "How Much Does Digital Marketing Cost for Remodelers?". The rules are in `website/scripts/seo-cleanup-2026-11-28.py`.
- **652 meta descriptions rebuilt.** They used to be truncated "Title. First words…" text. Now each is a complete sentence from the page that matches the topic, ≤158 characters.
- **Search titles kept within 60 characters.** The " | Wonderweb Studio" suffix is used when it fits, then " | Wonderweb", then the keyword alone (`searchTitle` in `src/lib/seo.ts`).
- **Main headings (H1) rewritten:**

| Page | New H1 |
|---|---|
| Home | "Web design & marketing, built to grow." Eyebrow: "For contractors, home-service & small businesses" |
| Web design | "Website Design for Contractors & Small Businesses" |
| SEO, Local SEO, Google Ads, LSA, Meta, landing pages, lead generation | Similar keyword-led H1s |
| Pricing | "Website & Marketing Pricing for Small Businesses" |
| About | "About Wonderweb Studio: the team behind the work" |
| Windows & doors | "Window & Door Marketing & Lead Generation" |

- **Social share images regenerated** for the changed titles (82 files).

## Lead capture
- **Free website & marketing audit form** (name, email, website, optional note) with matching case-study proof. It is now at the end of:
  - all ~660 guide and solution pages
  - location and location-service pages
  - industry and industry-service pages
- Submissions go through the existing `/api/inquiry/` endpoint as service "Free website & marketing audit".
- **Click-to-call support** in the header, mobile menu, floating button and Organization schema. It is hidden until `NEXT_PUBLIC_PHONE` is set (US number).
- **Pop-up suppressed on audit-form pages.** The "What's next for your business?" pop-up no longer appears on those pages, because it covered the form.

## Index focus (pages remain live; nothing deleted)
- **127 off-focus pages set to noindex, follow and removed from the sitemap.** These are non-core trades with zero U.S. impressions from 22 Aug to 22 Nov. The list is in `src/data/seo-consolidation.json`. To restore a page, delete its line.
- **11 paginated library pages and 4 design-study portfolio pages** set to noindex, follow.
- **One merge:** `/solutions/window-door-lead-generation/` now 301/308-redirects to `/solutions/windows-doors-marketing/`.
- **Sitemap:** 916 → 757 URLs.

## Trust
- Founder section with photo and role added to /about/.
- `Person` schema for Saikat Chowdhury, linked as the Organization's `founder`.
- 6 placeholder "(555) 014-2290" phone numbers removed from two published solution pages.
- **Checked, no change needed:** the earlier crawl flagged images with empty alt text. They are decorative or `aria-hidden` duplicates, which is correct.

## Owner to-do before or after deploy
1. Get a US number. Set `NEXT_PUBLIC_PHONE` in Vercel, then redeploy. The number is baked in at build time.
2. Deploy. In Search Console, resubmit `https://www.wonderwebstudio.com/sitemap.xml`.
3. Submit one real audit-form test from production, and confirm it arrives in info@wonderwebstudio.com.
4. Confirm the audit promise ("reviewed by a person… three changes") matches how you'll actually deliver it.
5. Backlinks (owner doing later), plus Google Business Profile and Clutch reviews.
