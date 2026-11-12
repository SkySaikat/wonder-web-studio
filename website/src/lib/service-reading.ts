import {articles,type Article} from './articles';
import {publishedMigrations} from './migrated-content';

/** A service's six original guides lead the cluster; the archive adds industry-specific depth. */
export function serviceReading(service:string):Article[]{
 const primary=articles.filter(a=>a.primaryService===service);
 const additional=articles.filter(a=>a.primaryService!==service&&a.related.includes(service));
 return [...primary,...additional].slice(0,6);
}
export function serviceArchiveReading(service:string){
 return publishedMigrations('resources').filter(e=>e.service===service).slice(0,4);
}
export function relatedArticles(article:Article):Article[]{
 const primary=article.primaryService||article.related[0];
 return articles.filter(a=>a.slug!==article.slug&&a.related.includes(primary))
  .sort((a,b)=>Number(b.primaryService===primary)-Number(a.primaryService===primary)).slice(0,3);
}
