/** Offline asset generation. GEMINI_API_KEY is read only from the process environment. */
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import sharp from 'sharp';
const model='gemini-3.1-flash-image';
const key=process.env.GEMINI_API_KEY;
if(!key)throw new Error('Set GEMINI_API_KEY in the process environment.');
const jobs=JSON.parse(await readFile('scripts/editorial-image-prompts.json','utf8'));
await mkdir('public/editorial',{recursive:true});
const queue=jobs.filter(j=>!process.argv[2]||j.slug===process.argv[2]);
async function generate(job){
 const file=`public/editorial/${job.slug}.webp`;
 try{await readFile(file);console.log(`Already generated: ${job.slug}`);return}catch{}
 const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify({contents:[{parts:[{text:job.prompt}]}],generationConfig:{responseModalities:['IMAGE'],imageConfig:{aspectRatio:'16:9',imageSize:'1K'}}}),signal:AbortSignal.timeout(180000)});
 if(!response.ok)throw new Error(`Image API HTTP ${response.status} for ${job.slug}`);
 const result=await response.json();const part=result.candidates?.[0]?.content?.parts?.find(p=>p.inlineData);
 if(!part)throw new Error(`No image returned for ${job.slug}`);
 await sharp(Buffer.from(part.inlineData.data,'base64')).resize(1440,810,{fit:'cover'}).webp({quality:87}).toFile(file);
 console.log(`Generated: ${job.slug}`);
}
const failures=[];
await Promise.all(Array.from({length:3},async()=>{while(queue.length){const job=queue.shift();try{await generate(job)}catch(error){failures.push(job.slug);console.error(error.message)}}}));
if(failures.length){console.log('Failed jobs:',failures.join(', '));process.exitCode=1;}
