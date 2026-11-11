import type {MetadataRoute} from 'next';
import {getPublicSeoPages,seoImagePath,contentUpdated} from '@/lib/seo-pages';
import {absoluteUrl} from '@/lib/seo';
export const dynamic='force-dynamic';
export default function sitemap():MetadataRoute.Sitemap{
 return getPublicSeoPages().map(page=>({url:absoluteUrl(page.path),lastModified:page.modified||contentUpdated,images:[...new Set([seoImagePath(page.path),...(page.images||[])])].map(absoluteUrl)}));
}
