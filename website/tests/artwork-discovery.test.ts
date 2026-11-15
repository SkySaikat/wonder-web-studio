import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {services} from '../src/lib/content';
import {serviceVisual} from '../src/lib/service-visuals';
import guides from '../src/data/download-guides.json';
import guideArt from '../src/lib/guide-artwork.json';
import metadata from '../src/lib/image-metadata.json';
import {pageGraph} from '../src/lib/schema';
import {getPublicSeoPages,seoByPath} from '../src/lib/seo-pages';
import {serviceDetails} from '../src/lib/service-details';
import {pageMarkdown} from '../src/lib/markdown-content';
import sitemap from '../src/app/sitemap';

test('every service and downloadable guide has genuinely distinct artwork and complete image metadata',()=>{
 const assets=[...services.map(s=>serviceVisual(s.slug)),...Object.values(guideArt)];
 assert.equal(assets.length,44);assert.equal(new Set(assets.map(a=>a.src)).size,44);
 const hashes=assets.map(a=>createHash('sha256').update(readFileSync(`public${a.src}`)).digest('hex'));
 assert.equal(new Set(hashes).size,44,'Reused image bytes under different filenames');
 for(const asset of assets){const record=metadata[asset.src as keyof typeof metadata];assert.ok(record?.description.length>25,asset.src);assert.ok(asset.alt.length>25,asset.src);assert.ok(record.width>=1000&&record.height>=700,asset.src);}
 const coverHashes=guides.map(guide=>{
  assert.ok(guide.coverAlt.length>30);assert.ok(guideArt[guide.slug as keyof typeof guideArt]);assert.ok(metadata[guide.cover as keyof typeof metadata]);
  const hash=createHash('sha256').update(readFileSync(`public${guide.cover}`)).digest('hex');
  assert.ok(guide.cover.endsWith(`-cover-${hash.slice(0,12)}.webp`),'A changed PDF cover needs a fresh image-cache URL: '+guide.slug);
  return hash;
 });
 assert.equal(new Set(coverHashes).size,guides.length,'Guide cover previews must also be distinct');
});

test('sitemap retains all public HTML routes and nests their service and guide images',()=>{
 const rows=sitemap();const publicPages=getPublicSeoPages();
 assert.deepEqual(new Set(rows.map(r=>new URL(r.url).pathname)),new Set(publicPages.map(p=>p.path)));
 assert.ok(rows.every(row=>!row.url.match(/\.(png|webp|pdf|csv|md)$/)));
 for(const prefix of ['/services/','/locations/','/industries/','/resources/','/solutions/','/results/'])assert.ok(rows.some(row=>new URL(row.url).pathname.startsWith(prefix)),prefix);
 for(const service of services){const path=`/services/${service.slug}/`;const image=serviceVisual(service.slug);assert.ok(rows.find(row=>new URL(row.url).pathname===path)?.images?.some(src=>src.endsWith(image.src)));assert.ok(pageGraph(path)['@graph'].some(n=>n['@type']==='ImageObject'&&String(n.contentUrl).endsWith(image.src)));}
 const guideRow=rows.find(row=>new URL(row.url).pathname==='/guides/')!;
 for(const guide of guides)assert.ok(guideRow.images?.some(src=>src.endsWith(guide.cover)));
 assert.ok(!rows.some(row=>row.url.includes('/api/')||row.url.includes('/payments/')));
});

test('guide schema describes signup access and service Markdown preserves visible FAQs and artwork',()=>{
 const graph=pageGraph('/guides/')['@graph'];const list=graph.find(n=>n['@type']==='ItemList')!;
 assert.equal(list.numberOfItems,20);
 for(const row of list.itemListElement as {item:{conditionsOfAccess:string;encodingFormat:string;url:string}}[]){assert.match(row.item.conditionsOfAccess,/signup/);assert.equal(row.item.encodingFormat,'application/pdf');assert.ok(seoByPath.has(new URL(row.item.url).pathname));assert.match(row.item.url,/\/guides\/[a-z-]+\/$/);}
 for(const service of services){const md=pageMarkdown(seoByPath.get(`/services/${service.slug}/`)!);assert.ok(md.includes(serviceVisual(service.slug).src));for(const [q,a]of [...service.faq,...serviceDetails[service.slug].faq]){assert.ok(md.includes(q));/* First visible answer wins when a question is repeated. */if(!service.faq.some(([other])=>other===q))assert.ok(md.includes(a));}}
});
