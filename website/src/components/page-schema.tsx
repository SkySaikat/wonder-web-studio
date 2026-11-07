import {pageGraph} from '@/lib/schema';
import {jsonLd} from '@/lib/site';
export function PageSchema({path}:{path:string}){
 return <script type="application/ld+json" data-page-schema dangerouslySetInnerHTML={{__html:jsonLd(pageGraph(path))}}/>;
}
