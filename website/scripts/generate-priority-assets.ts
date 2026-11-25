import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import manifest from './priority-art-provenance.json';
import {featuredImagePath} from '../src/lib/featured-path';
import {priorityPagePresentation} from '../src/lib/priority-page-presentation';
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const diagrams=[
 {title:'From local search to a repair inquiry',labels:['Search locally','Explain the repair','Check job fit','Arrange next step'],details:[['Accepted services','Real coverage'],['Appliances & brands','Clear contact path'],['Appliance + ZIP code','Usable contact details'],['Dispatch follow-up','Record the outcome']]},
 {title:'One business. Different buying journeys.',labels:['Maintenance','Installations','Commercial'],details:[['Property + coverage','Recurring service request'],['Project + timing','Installation conversation'],['Site + scope','Contract review']]},
 {title:'A website a serious buyer can explore',labels:['Build types','Actual coverage','Project stories','Consultation'],details:[['Explain the service','Answer fit questions'],['Where you build','Useful local context'],['Approved photography','Brief + decisions'],['Explain the process','Qualify the inquiry']]},
];
async function main(){
 await mkdir('public/editorial/buyer-guides',{recursive:true});
 const covers=JSON.parse(await readFile('src/lib/featured-covers.json','utf8'));
 const metadata=JSON.parse(await readFile('src/lib/image-metadata.json','utf8'));
 for(const [index,entry]of manifest.entries()){
  const artwork=`/editorial/buyer-guides/${entry.key}-concept.webp`;
  // Reuse the saved project asset on another machine; source is the local generation provenance.
  let input:Buffer;try{input=await readFile(entry.source)}catch{input=await readFile('public'+artwork)}
  const bytes=await sharp(input).resize(1440,810,{fit:'cover'}).webp({quality:86}).toBuffer();
  await writeFile('public'+artwork,bytes);
  const src=featuredImagePath(entry.path);await writeFile('public'+src,bytes);
  const description=entry.alt+' AI-generated conceptual artwork for Wonderweb Studio; not a completed client project or measured outcome.';
  covers[src]={src,artwork,title:entry.title,alt:entry.alt,description,width:1440,height:810,type:'image/webp',signature:createHash('sha256').update(bytes).digest('hex')};
  for(const path of [src,artwork])metadata[path]={title:entry.title,description,width:1440,height:810,type:'image/webp'};
  const figure=priorityPagePresentation[entry.path].illustrations[0];const d=diagrams[index];
  const palette=['#d9ff58','#cab5ff','#b9dafb','#272137'];
  const positions=index===1?[[72,230],[72,400],[72,570]]:[[72,220],[630,220],[72,470],[630,470]];
  const cards=d.labels.map((label,i)=>{const[x,y]=positions[i];const dark=index!==1&&i===3;return `<g><rect x="${x}" y="${y}" width="${index===1?1056:498}" height="${index===1?138:192}" rx="24" fill="${palette[i]}"/><text x="${x+28}" y="${y+47}" font-size="30" font-weight="700" fill="${dark?'#fff':'#211d29'}">${esc(label)}</text>${d.details[i].map((line,j)=>`<text x="${x+(index===1?480:28)}" y="${y+(index===1?50:94)+j*36}" font-size="26" fill="${dark?'#e1d8ef':'#463d55'}">${esc(line)}</text>`).join('')}${index===1?`<path d="M ${x+360} ${y+66} h65 m-18 -18 l18 18 -18 18" stroke="#4b2acc" stroke-width="4" fill="none"/>`:''}</g>`;}).join('');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><title>${esc(d.title)}</title><desc>${esc(figure.alt)}</desc><rect width="1200" height="800" rx="32" fill="#f0ede8"/><g font-family="Arial, sans-serif"><text x="72" y="75" font-size="17" letter-spacing="3" fill="#4b2acc">WONDERWEB / A PRACTICAL EXAMPLE</text><text x="72" y="146" font-size="40" font-weight="700" fill="#211d29">${esc(d.title)}</text>${cards}<text x="72" y="754" font-size="18" fill="#5e5268">Clear decisions. Relevant inquiries. A useful next step.</text></g></svg>`;
  await writeFile('public'+figure.src.replace('.webp','.svg'),svg);
  await sharp(Buffer.from(svg)).webp({quality:90}).toFile('public'+figure.src);
  metadata[figure.src]={title:d.title,description:figure.caption+' '+figure.alt,width:1200,height:800,type:'image/webp'};
  console.log(`${entry.key}: ${(bytes.length/1024).toFixed(0)} KB hero + original supporting diagram`);
 }
 await writeFile('src/lib/featured-covers.json',JSON.stringify(covers,null,2)+'\n');
 await writeFile('src/lib/image-metadata.json',JSON.stringify(metadata,null,2)+'\n');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
