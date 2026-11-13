/** Offline Gemini generation. Credentials stay in the ignored .env.local file. */
import {readFile,writeFile,mkdir,access} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import sharp from 'sharp';
const require=createRequire(import.meta.url);
require('@next/env').loadEnvConfig(process.cwd());
const key=process.env.GEMINI_API_KEY;
if(!key)throw new Error('GEMINI_API_KEY is not configured.');
const model='gemini-3.1-flash-image';
const catalog=JSON.parse(await readFile('scripts/featured-art-catalog.json','utf8'));
await mkdir('public/editorial/topics',{recursive:true});
const queue=Object.entries(catalog).filter(([slug])=>!process.argv[2]||slug===process.argv[2]);
const failures=[];
const style='Create a polished editorial illustration for Wonderweb Studio, a remote web design and digital marketing agency focused on US small businesses and serving clients worldwide. Landscape 16:9. Sophisticated tactile 3D paper-and-ceramic forms, fine sand-like grain, soft studio shadows, warm ivory background, cobalt and lavender with a restrained lime accent. Distinct thoughtful composition, objects large and readable on mobile, elegant professional design. No text, letters, numbers, logos, watermarks, flags, fake metrics, money piles or growth promises. Conceptual artwork, not a photograph of a real client or office.';
const provenance={model,generated:'2026-11-13',provider:'Google Gemini API',style,assets:[]};
await Promise.all(Array.from({length:3},async()=>{
 while(queue.length){
  const [slug,scene]=queue.shift();const file=`public/editorial/topics/${slug}.webp`;
  try{await access(file);console.log(`Exists: ${slug}`);continue}catch{}
  try{
   const prompt=`${style}\nSubject: ${scene}`;
   const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{responseModalities:['IMAGE'],imageConfig:{aspectRatio:'16:9',imageSize:'1K'}}}),signal:AbortSignal.timeout(180000)});
   if(!response.ok)throw new Error(`Gemini HTTP ${response.status}`);
   const result=await response.json();const image=result.candidates?.[0]?.content?.parts?.find(p=>p.inlineData)?.inlineData;
   if(!image)throw new Error('Gemini returned no image');
   await sharp(Buffer.from(image.data,'base64')).resize(1440,810,{fit:'cover'}).webp({quality:87}).toFile(file);
   console.log(`Generated: ${slug}`);
  }catch(error){failures.push(slug);console.error(`${slug}: ${error.message}`);}
 }
}));
for(const [slug,scene] of Object.entries(catalog)){
 try{const bytes=await readFile(`public/editorial/topics/${slug}.webp`);provenance.assets.push({slug,file:`/editorial/topics/${slug}.webp`,scene,prompt:`${style}\nSubject: ${scene}`,sha256:createHash('sha256').update(bytes).digest('hex')});}catch{}
}
await writeFile('scripts/featured-art-provenance.json',JSON.stringify(provenance,null,2)+'\n');
console.log(JSON.stringify({completed:provenance.assets.length,failed:failures}));
if(failures.length)process.exitCode=1;
