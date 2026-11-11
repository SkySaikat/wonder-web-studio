import sitemap from '../sitemap';
import {xmlEscape} from '@/lib/discovery';
// Requested XML companion: ordinary Sitemap XML, not a separate AI ranking standard.
export const dynamic='force-dynamic';
export function GET(){
 const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+sitemap().map(p=>`  <url><loc>${xmlEscape(p.url)}</loc><lastmod>${p.lastModified}</lastmod></url>`).join('\n')+'\n</urlset>\n';
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
