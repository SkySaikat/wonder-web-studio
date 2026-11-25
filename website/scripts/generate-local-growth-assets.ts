/** Original explanatory diagrams, drawn from the page brief. No stock photos or invented client results. */
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {growthLocations,localWebBriefs} from '../src/lib/local-growth-content';
import {localGrowthArticles} from '../src/lib/local-growth-articles';
import {featuredImagePath} from '../src/lib/featured-path';

const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function lines(s:string,max=24){const result:string[]=[];let line='';for(const word of s.split(' ')){if((line+' '+word).trim().length>max&&line){result.push(line);line=word;}else line=(line+' '+word).trim();}if(line)result.push(line);return result;}
const articleNodes=[['Brief','Page scope','Functionality','Ownership','Total commitment'],['Core services','Project proof','Real coverage','Contact flow','Lead review'],['Buyer question','Local facts','Unique content','Connected pages','Review evidence']];
const entries=[
 ...localWebBriefs.map(b=>({path:`/locations/${b.location}/web-design/`,market:b.location.replaceAll('-',' ').toUpperCase(),title:b.diagram.title,nodes:b.diagram.nodes,caption:b.diagram.caption})),
 ...growthLocations.map(l=>({path:`/locations/${l.slug}/`,market:l.name.toUpperCase(),title:l.focus,nodes:[l.name+' business',l.sectors[0],'Useful services','Real coverage','Right next step'],caption:`Planning diagram for ${l.name}: connect the business, relevant services, actual coverage and a useful inquiry. Remote service market, not a local office.`})),
 ...localGrowthArticles.map((a,i)=>({path:`/resources/${a.slug}/`,market:'THE WEBSITE FIELD NOTES',title:a.seoTitle!,nodes:articleNodes[i],caption:`Original planning diagram for ${a.title.toLowerCase()}: ${articleNodes[i].join(', ')}.`})),
];

async function main(){
 const covers=JSON.parse(await readFile('src/lib/featured-covers.json','utf8'));
 await mkdir('public/editorial/local-growth',{recursive:true});
 await mkdir('public/featured',{recursive:true});
 const accents=['#d6ff4d','#c5a3ff','#ffbc85','#8cd6fc','#a0e4c0'];
 for(const [i,entry] of entries.entries()){
  const accent=accents[i%accents.length];
  const branch=i%3!==2;
  const points=branch?[[80,350],[570,280],[570,490],[1060,280],[1060,490]]:[[80,330],[340,470],[600,330],[860,470],[1120,330]];
  const boxW=branch?300:235;
  const boxH=142;
  const edges=branch?[[0,1],[0,2],[1,3],[2,4]]:[[0,1],[1,2],[2,3],[3,4]];
  const connectors=edges.map(([from,to])=>{const [x,y]=points[from];const [tx,ty]=points[to];return `<path d="M ${x+boxW} ${y+boxH/2} C ${x+boxW+65} ${y+boxH/2}, ${tx-65} ${ty+boxH/2}, ${tx-14} ${ty+boxH/2}" stroke="#6552c7" stroke-width="5" fill="none" marker-end="url(#arrow)"/>`;}).join('');
  const boxes=entry.nodes.map((label,j)=>{const [x,y]=points[j];return `<g><rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="24" fill="${j===0?accent:j>2?'#292136':'#ffffff'}" stroke="${j>2?'#292136':'#d8d0c9'}" stroke-width="2"/><text x="${x+23}" y="${y+31}" fill="${j>2?'#d6ff4d':'#5d487b'}" font-size="15" letter-spacing="2">0${j+1}</text>${lines(label,branch?20:16).map((line,k)=>`<text x="${x+23}" y="${y+72+k*31}" fill="${j>2?'white':'#211d28'}" font-size="25" font-weight="600">${esc(line)}</text>`).join('')}</g>`;}).join('');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="810" viewBox="0 0 1440 810" role="img"><title>${esc(entry.title)}</title><desc>${esc(entry.caption)}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6552c7"/></marker></defs><rect width="1440" height="810" fill="#f0ede8"/><rect x="40" y="40" width="1360" height="730" rx="34" fill="#faf8f4" stroke="#d6cec6"/><g font-family="Arial, sans-serif"><circle cx="90" cy="94" r="7" fill="#6745d6"/><text x="112" y="100" fill="#5e4976" font-size="20" letter-spacing="3">${esc(entry.market)}</text>${lines(entry.title,49).map((l,j)=>`<text x="80" y="${172+j*53}" font-size="43" font-weight="600" fill="#201b27">${esc(l)}</text>`).join('')}${connectors}${boxes}<path d="M 80 690 H 1360" stroke="#d6cec6"/><text x="80" y="733" font-size="20" font-weight="600" fill="#292136">WONDERWEB STUDIO</text><text x="1360" y="733" text-anchor="end" font-size="16" fill="#6d6377">WEBSITE PLANNING EXAMPLE</text></g></svg>`;
  const stem=entry.path.slice(1,-1).replaceAll('/','--');
  const artwork=`/editorial/local-growth/${stem}.webp`;
  const src=featuredImagePath(entry.path);
  const buffer=await sharp(Buffer.from(svg)).webp({quality:90}).toBuffer();
  await writeFile(`public/editorial/local-growth/${stem}.svg`,svg);
  await writeFile(`public${artwork}`,buffer);
  await writeFile(`public${src}`,buffer);
  covers[src]={src,artwork,title:entry.title,alt:entry.caption,description:entry.caption+' Original Wonderweb explanatory diagram; not a project photograph or measured result.',width:1440,height:810,type:'image/webp',signature:createHash('sha256').update(svg).digest('hex')};
 }
 await writeFile('src/lib/featured-covers.json',JSON.stringify(covers,null,2)+'\n');
 console.log(JSON.stringify({created:entries.length,paths:entries.map(e=>e.path)}));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
