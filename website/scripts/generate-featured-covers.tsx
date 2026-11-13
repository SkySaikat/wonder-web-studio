import React from 'react';
import {ImageResponse} from 'next/og';
import sharp from 'sharp';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {seoPages} from '../src/lib/seo-pages';
import {featuredImagePath} from '../src/lib/featured-path';
import {articles} from '../src/lib/articles';
import {migratedByPath} from '../src/lib/migrated-content';
import {editorialImages,caseImage} from '../src/lib/editorial-images';
import catalog from './featured-art-catalog.json';

type Cover={src:string;artwork:string;title:string;alt:string;description:string;width:number;height:number;type:string;signature:string};
const articleByPath=new Map(articles.map(a=>[`/resources/${a.slug}/`,a]));
function artwork(page:(typeof seoPages)[number]){
 const [kind,slug,service]=page.path.split('/').filter(Boolean);
 if(kind==='work'&&slug){const src=page.images?.find(p=>p.startsWith('/work/'));if(src)return {src,alt:`Selected ${page.label} website project preview.`,concept:false};}
 if(kind==='results'&&slug){const image=caseImage(slug);if(image)return {...image,concept:true};}
 const article=articleByPath.get(page.path);const existing=article&&editorialImages[article.slug];
 if(existing&&!existing.src.includes('/guides/')&&!existing.src.startsWith('/featured/'))return {...existing,concept:true};
 let topic=migratedByPath.get(page.path)?.service||article?.primaryService||article?.related[0]||'';
 if(kind==='services'&&slug)topic=slug;
 else if((kind==='locations'||kind==='industries')&&service)topic=service;
 else if(!topic)topic=kind==='locations'?'market-planning':kind==='industries'?'home-services':kind==='resources'||kind==='solutions'?'editorial-library':['terms','privacy-policy','payments'].includes(kind)?'project-agreement':'remote-studio';
 if(!(topic in catalog))topic='remote-studio';
 return {src:`/editorial/topics/${topic}.webp`,alt:catalog[topic as keyof typeof catalog],concept:true};
}
async function main(){
 await mkdir('public/featured',{recursive:true});
 let previous:Record<string,Cover>={};try{previous=JSON.parse(await readFile('src/lib/featured-covers.json','utf8'))}catch{}
 const covers:Record<string,Cover>=process.argv[2]?{...previous}:{};let generated=0;
 const artworkCache=new Map<string,Buffer>();
 for(const page of seoPages){
  if(process.argv[2]&&page.path!==process.argv[2])continue;
  const art=artwork(page);const src=featuredImagePath(page.path);const title=page.title;
  let bytes=artworkCache.get(art.src);if(!bytes){bytes=await readFile(`public${art.src}`);artworkCache.set(art.src,bytes);}
  const signature=createHash('sha256').update(bytes).update(JSON.stringify({v:2,title,category:page.category})).digest('hex');
  const visualDescription=art.alt.replace(/\s+No(?:\s| fake)[^.]*\.?/g,'').trim();
  const alt=`${title}. ${visualDescription}`;
  covers[src]={src,artwork:art.src,title:`${title} | Wonderweb Studio`,alt,description:`${visualDescription} Featured cover for ${title}. ${art.concept?'Conceptual editorial artwork generated with Gemini; not a client photograph or measured result.':'Portfolio image from the selected project.'}`,width:1440,height:810,type:'image/webp',signature};
  if(previous[src]?.signature===signature){try{await readFile(`public${src}`);continue}catch{}}
  const photo=`data:image/png;base64,${(await sharp(bytes).resize(1440,610,{fit:'cover'}).png().toBuffer()).toString('base64')}`;
  const response=new ImageResponse(<div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',background:'#f4f0ea',color:'#25202d'}}>
   <img src={photo} width={1440} height={610} style={{objectFit:'cover'}}/>
   <div style={{display:'flex',padding:'26px 48px',flex:1,gap:18,flexDirection:'column',justifyContent:'center',borderTop:'1px solid #e3dbe9'}}>
    <div style={{display:'flex',justifyContent:'space-between',fontSize:17,letterSpacing:2,color:'#66527c'}}><span>WONDERWEB STUDIO</span><span>{page.category.toUpperCase()}</span></div>
    <div style={{display:'flex',fontSize:title.length>58?40:48,lineHeight:1.1,letterSpacing:-1}}>{title}</div>
   </div>
  </div>,{width:1440,height:810});
  await sharp(Buffer.from(await response.arrayBuffer())).webp({quality:84}).toFile(`public${src}`);generated++;
 }
 await writeFile('src/lib/featured-covers.json',JSON.stringify(covers,null,2)+'\n');
 console.log(JSON.stringify({pageCovers:Object.keys(covers).length,generated,artworkSources:artworkCache.size}));
}
main().catch(error=>{console.error(error.message);process.exitCode=1});
