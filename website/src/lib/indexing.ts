type IndexingEnvironment = { SITE_INDEXABLE?: string; VERCEL_ENV?: string };

/** One policy for robots.txt, HTML metadata and HTTP headers. */
export function isSiteIndexable(env: IndexingEnvironment = {SITE_INDEXABLE:process.env.SITE_INDEXABLE,VERCEL_ENV:process.env.VERCEL_ENV}): boolean {
  // A production-scoped setting must never open a Vercel preview to indexing.
  if (env.VERCEL_ENV && env.VERCEL_ENV !== 'production') return false;
  if (env.SITE_INDEXABLE === 'false') return false;
  if (env.SITE_INDEXABLE === 'true') return true;
  // Local production builds remain private; actual Vercel production is public.
  return env.VERCEL_ENV === 'production';
}
