import {articles} from './articles';
import {locations} from './locations';

export function locationReading(slug:string,service?:string){
 const location=locations.find(l=>l.slug===slug)!;
 const priorities=service?[service]:location.services;
 return articles.map(article=>({article,score:article.related.filter(s=>priorities.includes(s)).length}))
  .filter(item=>item.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(item=>item.article);
}
