import React from 'react';
import {ImageResponse} from 'next/og';
import sharp from 'sharp';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {services} from '../src/lib/content';

type Guide={slug:string;title:string;seoTitle:string;primaryService:string};
async function main(){
 const groups=await Promise.all(['web','search','creative'].map(async group=>JSON.parse(await readFile(`src/data/service-guides-${group}.json`,'utf8')) as Guide[]));
 const guides=groups.flat();const palettes=['#d7b9f5','#cce790','#ffbc94','#a5ccef','#f5b6cf','#bce4d8'];
 await mkdir('public/editorial/guides',{recursive:true});
 for(const [i,a] of guides.entries()){
  const service=services.find(s=>s.slug===a.primaryService)!;
  const accent=palettes[i%palettes.length];
  const response=new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',background:'#f5f1ea',padding:74,color:'#20201e',flexDirection:'column',justifyContent:'space-between'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:22,letterSpacing:3}}><span>WONDERWEB STUDIO</span><span style={{fontSize:18,letterSpacing:1}}>THE FIELD GUIDE</span></div>
   <div style={{display:'flex',gap:50,alignItems:'center',flex:1}}><div style={{display:'flex',flexDirection:'column',width:'64%',gap:30}}><span style={{fontSize:22,color:'#625270'}}>{service.title.toUpperCase()}</span><div style={{fontSize:76,lineHeight:1.1,letterSpacing:-3}}>{a.seoTitle||a.title}</div></div>
   <div style={{display:'flex',width:330,height:390,position:'relative',alignItems:'center',justifyContent:'center'}}>
    <div style={{position:'absolute',display:'flex',width:300,height:300,background:accent,borderRadius:i%2?150:48,transform:'rotate(-9deg)',border:'2px solid #292824'}}/>
    <div style={{display:'flex',position:'absolute',left:0,top:38,background:'#fffdf8',border:'2px solid #292824',borderRadius:14,padding:'15px 20px',fontSize:19,transform:'rotate(-9deg)'}}>A clear brief</div>
    <div style={{display:'flex',position:'absolute',right:0,bottom:28,background:'#24221f',color:'white',borderRadius:14,padding:'15px 20px',fontSize:19,transform:'rotate(6deg)'}}>A useful next step</div>
    <svg width="150" height="150" viewBox="0 0 150 150"><path d="M35 110L112 33M42 33H112V103" fill="none" stroke="#24221f" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg>
   </div></div>
   <div style={{display:'flex',borderTop:'1px solid #c9c1b6',paddingTop:25,justifyContent:'space-between',fontSize:20}}><span>Practical examples. Better decisions.</span><span>wonderwebstudio.com</span></div>
  </div>,{width:1440,height:810});
  await writeFile(`public/editorial/guides/${a.slug}.webp`,await sharp(Buffer.from(await response.arrayBuffer())).webp({quality:82}).toBuffer());
 }
 console.log(`Created ${guides.length} original editorial title-card images.`);
}
main().catch(error=>{console.error(error);process.exitCode=1;});
