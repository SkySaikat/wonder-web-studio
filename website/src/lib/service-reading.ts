import {articles,type Article} from './articles';
import {publishedMigrations} from './migrated-content';

/** A service's six original guides lead the cluster; the archive adds industry-specific depth. */
const supportingServices:Record<string,string[]>={'digital-media-buying':['google-ads','meta-ads'],'franchise-marketing':['local-seo','content-management'],'ai-workflow-automation':['web-development','content-management'],'ai-search-optimization':['seo','content-creation'],'local-services-ads':['google-ads','local-seo'],'microsoft-ads':['google-ads'],'linkedin-ads':['meta-ads','content-creation'],'email-marketing':['content-creation','content-management'],'reputation-management':['local-seo'],'conversion-rate-optimization':['landing-page-design','web-design'],'lead-generation':['google-ads','landing-page-design']};
export function serviceReading(service:string):Article[]{
 const primary=articles.filter(a=>a.primaryService===service);
 const additional=articles.filter(a=>a.primaryService!==service&&a.related.includes(service));
 const supporting=articles.filter(a=>!primary.includes(a)&&!additional.includes(a)&&(supportingServices[service]||[]).some(s=>a.primaryService===s));
 return [...primary,...additional,...supporting].slice(0,6);
}
export function serviceArchiveReading(service:string){
 return publishedMigrations('resources').filter(e=>e.service===service).slice(0,6);
}
export function relatedArticles(article:Article):Article[]{
 const primary=article.primaryService||article.related[0];
 return articles.filter(a=>a.slug!==article.slug&&a.related.includes(primary))
  .sort((a,b)=>Number(b.primaryService===primary)-Number(a.primaryService===primary)).slice(0,3);
}
