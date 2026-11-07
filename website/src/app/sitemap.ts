import type {MetadataRoute} from 'next';
import {publicSeoPages,seoImagePath,contentUpdated} from '@/lib/seo-pages';
import {absoluteUrl} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{
 return publicSeoPages.map(page=>({url:absoluteUrl(page.path),lastModified:page.modified||contentUpdated,images:[...new Set([seoImagePath(page.path),...(page.images||[])])].map(absoluteUrl)}));
}
