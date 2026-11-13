import {featuredImagePath} from './featured-path';
import entries from '@/data/migrated/index.json';
import seoTitles from '@/data/migration-seo-titles.json';

export type MigratedEntry = (typeof entries)[number];
export type MigratedDocument = MigratedEntry & {html:string; text:string; markdown:string; headings:{id:string;title:string}[]; faqs:[string,string][]; editorialReview?:{status:string;reviewed:string;source:string}};
export const migratedEntries: MigratedEntry[] = entries;
export const migrationPageSize = 24;
export function isReleased(entry: Pick<MigratedEntry,'published'>, now:Date|number=new Date()):boolean {
 const time=new Date(entry.published).getTime();
 return Number.isFinite(time)&&time<=Number(now);
}
export function publishedMigrations(kind?:string,now:Date|number=new Date()) {
 return migratedEntries.filter(e=>(!kind||e.kind===kind)&&isReleased(e,now)).sort((a,b)=>b.originalPublished.localeCompare(a.originalPublished)||a.slug.localeCompare(b.slug));
}
export const migratedByPath = new Map(migratedEntries.map(e=>[e.path,e]));
export function migrationCover(entry:MigratedEntry) {return featuredImagePath(entry.path);}
export function migrationLibraryPath(kind:string,page=1){return kind==='resources'?`/resources/library/${page}/`:page===1?'/solutions/':`/solutions/page/${page}/`;}

/** Keep search snippets concise while retaining the full editorial headline. */
export function migrationSeoTitle(entry:MigratedEntry) {return (seoTitles as Record<string,string>)[entry.path]||entry.title;}
