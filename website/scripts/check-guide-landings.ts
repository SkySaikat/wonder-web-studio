import assert from 'node:assert/strict';
import {guideLandings} from '../src/lib/guide-landings';
import {seoImagePath} from '../src/lib/seo-pages';
import {markdownPath} from '../src/lib/content-paths';

const base=process.argv[2]||'http://127.0.0.1:3001';
const production=new URL(base).hostname==='www.wonderwebstudio.com';
const request=(path:string)=>fetch(new URL(path,base),{signal:AbortSignal.timeout(30000)});
async function main(){
 const [sitemap,llms]=await Promise.all(['/sitemap.xml','/llms.txt'].map(async path=>{
  const response=await request(path);assert.equal(response.status,200,path);return response.text();
 }));
 for(let index=0;index<guideLandings.length;index+=4){
  await Promise.all(guideLandings.slice(index,index+4).map(async p=>{
   const response=await request(p.path);assert.equal(response.status,200,p.path);
   const html=await response.text();
   assert.equal((html.match(/<h1[ >]/g)||[]).length,1,p.path);
   assert.ok(html.includes(`rel="canonical" href="https://www.wonderwebstudio.com${p.path}"`),p.path);
   assert.ok(html.includes('id="free-guide"')&&html.includes('guide-lead-form'),p.path);
   for(const field of ['name','email','businessName','phone','market','goal','consent'])assert.ok(html.includes(`name="${field}"`),p.path+': '+field);
   assert.ok(!html.includes('class="guide-unlocked"'),p.path);
   assert.ok(!/<a[^>]*href="\/api\/guides\//.test(html),p.path);
   const graphs=Array.from(html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),match=>JSON.parse(match[1]));
   const nodes=graphs.flatMap(g=>g['@graph']||[g]);
   assert.ok(nodes.some(n=>n['@type']==='Service'),p.path);
   assert.ok(nodes.some(n=>n['@type']==='DigitalDocument'&&n.name===p.guide.title),p.path);
   assert.ok(sitemap.includes(`https://www.wonderwebstudio.com${p.path}</loc>`),p.path);
   assert.ok(llms.includes(`https://www.wonderwebstudio.com${p.path}`),p.path);
   if(production){assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag')||''),p.path);assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html),p.path);}
   const [md,asset,pdf]=await Promise.all([request(markdownPath(p.path)),request(seoImagePath(p.path)),request(p.guide.pdf)]);
   assert.equal(md.status,200);assert.ok((await md.text()).includes(p.context.body));
   assert.equal(asset.status,200);assert.match(asset.headers.get('content-type')||'',/image\/png/);await asset.body?.cancel();
   assert.equal(pdf.status,403,'Anonymous download must stay locked: '+p.guide.slug);await pdf.body?.cancel();
  }));
 }
 assert.equal((await request('/guides/not-a-real-guide/')).status,404);
 console.log(JSON.stringify({base,pages:guideLandings.length,canonical:'pass',forms:'pass',schema:'pass',markdown:'pass',sitemap:'pass',socialImages:'pass',anonymousDownloads:'blocked',unknownGuide:404,productionIndexing:production?'pass':'not tested on local build'},null,2));
}
main().catch(error=>{console.error(error);process.exitCode=1});
