import {markdownIndex,markdownPages,pageMarkdown} from '@/lib/markdown-content';
import {absoluteUrl} from '@/lib/seo';

export const dynamic='force-static';
export const dynamicParams=false;
export function generateStaticParams(){
 return [...markdownPages.keys(),'/content/index.md'].map(path=>({slug:path.replace('/content/','').split('/')}));
}
export async function GET(_request:Request,{params}:{params:Promise<{slug:string[]}>}){
 const {slug}=await params;const path=`/content/${slug.join('/')}`;
 const page=markdownPages.get(path);const directory=path==='/content/index.md';
 if(!page&&!directory)return new Response('Not found',{status:404});
 return new Response(directory?markdownIndex():pageMarkdown(page!),{headers:{
  'Content-Type':'text/markdown; charset=utf-8',
  'Link':`${page?`<${absoluteUrl(page.path)}>; rel="canonical", `:''}<${absoluteUrl('/llms.txt')}>; rel="describedby"; type="text/plain"`,
 }});
}
