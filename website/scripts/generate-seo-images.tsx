import React from 'react';
import {ImageResponse} from 'next/og';
import sharp from 'sharp';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {seoPages,seoImagePath} from '../src/lib/seo-pages';
import {editorialImages} from '../src/lib/editorial-images';
import {work} from '../src/lib/content';

async function main(){
 await mkdir('public/seo',{recursive:true});
 const palettes=['#c4a2ff','#d4ef87','#ffbc85','#ffabd2','#a7d9f8','#9be0c4'];
 for(const [i,page] of seoPages.entries()){
  const output=`public${seoImagePath(page.path)}`;
  const title=page.title.replace(' — Website Project','').replace(' — Design Study','');
  const project=(page.path.startsWith('/work/')||page.entity==='BlogPosting'||page.entity==='Article')&&page.images?.[0];
  const thumbnail=project?`data:image/png;base64,${(await sharp(await readFile(`public${project}`)).resize(430,450,{fit:'cover',position:'top'}).png().toBuffer()).toString('base64')}`:undefined;
  const response=new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',background:'#f2efeb',color:'#202020',padding:58,flexDirection:'column',justifyContent:'space-between'}}>
   <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:24}}><span>WONDERWEB STUDIO</span><span style={{fontSize:18}}>WEBSITES · MARKETING · CREATIVE</span></div>
   <div style={{display:'flex',gap:32,alignItems:'center',flex:1}}><div style={{display:'flex',flexDirection:'column',flex:1}}><span style={{fontSize:18,marginBottom:22,color:'#66527d'}}>{page.category.toUpperCase()}</span><div style={{fontSize:title.length>65?52:title.length>45?60:70,lineHeight:1.06,letterSpacing:-2}}>{title}</div></div>
    {thumbnail?<img src={thumbnail} width={360} height={375} style={{objectFit:'cover',borderRadius:20,border:'2px solid #202020'}}/>:<div style={{display:'flex',width:215,height:250,background:palettes[i%palettes.length],borderRadius:28,alignItems:'center',justifyContent:'center',transform:'rotate(-7deg)',border:'2px solid #202020',fontSize:150}}>↗</div>}
   </div><div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid #c9c1b8',paddingTop:22,fontSize:20}}><span>wonderwebstudio.com</span><span>Good ideas. A connected presence.</span></div>
  </div>,{width:1200,height:630});
  await writeFile(output,Buffer.from(await response.arrayBuffer()));
 }
 const records:Record<string,{title:string;description:string;width:number;height:number;type:string}>={};
 const sources=[...Object.values(editorialImages).map(image=>({src:image.src,title:image.alt,description:image.alt+' AI-generated conceptual editorial artwork; not a client project photograph.'})),...work.map(w=>({src:w.image,title:`${w.label} — ${w.category}`,description:`${w.label} project preview. ${w.description}`})),
  {src:'/work/saikat.webp',title:'Saikat Chowdhury, Founder & CEO',description:'Portrait of Saikat Chowdhury, Wonderweb Studio founder, CEO and team lead.'},
  {src:'/brand/wonderweb-studio.svg',title:'Wonderweb Studio logo',description:'Wonderweb Studio brand logo.'},
  {src:'/art/wonder-sculpture.png',title:'Wonderweb Studio creative artwork',description:'Abstract blue and lilac sculptural artwork created for the Wonderweb Studio homepage.'},
  {src:'/art/wonder-color-flow.webp',title:'Wonderweb color flow',description:'Original grain-textured abstract folds in electric blue, magenta and citrus orange, created for Wonderweb Studio.'},
  {src:'/art/wonder-citrus-flow.webp',title:'Wonderweb citrus flow',description:'Original golden-yellow, orange and violet color-field artwork for Wonderweb Studio’s conversation card.'},
  ...seoPages.map(p=>({src:seoImagePath(p.path),title:`${p.label} — Wonderweb Studio`,description:`Featured social preview for ${p.label}. ${p.description}`}))];
 for(const source of sources){const m=await sharp(`public${source.src}`).metadata();records[source.src]={title:source.title,description:source.description,width:m.width!,height:m.height!,type:source.src.endsWith('.svg')?'image/svg+xml':`image/${m.format}`};}
 await writeFile('src/lib/image-metadata.json',JSON.stringify(records,null,2)+'\n');
 console.log(`Generated ${seoPages.length} unique 1200 × 630 social images; catalogued ${Object.keys(records).length} image assets.`);
}
main().catch(error=>{console.error(error);process.exitCode=1;});
