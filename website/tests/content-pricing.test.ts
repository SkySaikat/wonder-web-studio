import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {articles} from '../src/lib/articles';
import {serviceGuides} from '../src/lib/service-guides';
import {services} from '../src/lib/content';
import {serviceDetails} from '../src/lib/service-details';
import {serviceReading} from '../src/lib/service-reading';
import {seoByPath} from '../src/lib/seo-pages';
import {pageGraph} from '../src/lib/schema';
import {pageMarkdown} from '../src/lib/markdown-content';
import {editorialImages} from '../src/lib/editorial-images';
import {servicePrices,customServicePrices,websiteProjects,pricingOffers} from '../src/lib/pricing';

const words=(text:string)=>text.trim().split(/\s+/).length;
test('every original service cluster contains six substantial, distinct, linked guides',()=>{
 assert.equal(serviceGuides.length,78);
 const counts=new Map<string,number>();
 for(const a of serviceGuides){
  counts.set(a.primaryService!,1+(counts.get(a.primaryService!)||0));
  assert.ok(words([...a.sections.map(s=>s.body),...a.checklist,...(a.faqs||[]).map(f=>f[1])].join(' '))>=1000,a.slug);
  assert.ok(a.sections.length>=6,a.slug);assert.ok((a.faqs?.length||0)>=3,a.slug);
  assert.equal(a.related[0],a.primaryService);assert.equal(a.published,'2026-11-13');
  assert.ok(!JSON.stringify(a).includes('\u2014'),a.slug);
  assert.ok(a.summary.length>=120&&a.summary.length<=165,a.slug);
  assert.ok(a.seoTitle&&a.seoTitle.length<=55,a.slug);
  const links=a.sections.flatMap(s=>s.links||[]);
  assert.ok(links.some(l=>l.href===`/services/${a.primaryService}/`),a.slug);
  assert.ok(links.some(l=>l.href==='/pricing/'),a.slug);
  for(const l of links)assert.ok(seoByPath.has(l.href.split('#')[0]),`${a.slug}: ${l.href}`);
  for(const s of a.related)assert.ok(services.some(v=>v.slug===s),`${a.slug}: ${s}`);
  assert.ok(editorialImages[a.slug].alt.length>20);
  const md=pageMarkdown(seoByPath.get(`/resources/${a.slug}/`)!);
  assert.ok(md.includes(a.sections[0].body));assert.ok(md.includes(`/services/${a.primaryService}/`));assert.ok(md.includes('/pricing/'));
 }
 assert.equal(counts.size,13);for(const [s,n]of counts)assert.equal(n,6,s);
 assert.equal(new Set(articles.map(a=>a.slug)).size,articles.length);
 assert.equal(new Set(serviceGuides.map(a=>a.title)).size,78);
});

test('every confirmed service has a page, scope, price path and bidirectional reading links',()=>{
 assert.equal(services.length,24);
 for(const s of services){
  assert.ok(serviceDetails[s.slug],s.slug);assert.ok(seoByPath.has(`/services/${s.slug}/`),s.slug);
  assert.ok(servicePrices.some(p=>p.service===s.slug)||customServicePrices.some(p=>p.service===s.slug)||s.slug==='web-design',s.slug);
  const guides=serviceReading(s.slug);assert.equal(guides.length,6,s.slug);
  for(const a of guides)assert.ok(a.related.includes(s.slug),`${s.slug} lacks return link from ${a.slug}`);
 }
});

test('pricing schema and Markdown match visible amounts and complete installment commitments',()=>{
 const graph=pageGraph('/pricing/')['@graph'] as Record<string,unknown>[];
 const catalog=graph.find(n=>n['@type']==='OfferCatalog')!;
 const offers=catalog.itemListElement as {name:string;priceSpecification?:{minPrice:number;billingDuration?:number}}[];
 assert.equal(offers.length,pricingOffers().length);
 for(const p of pricingOffers()){
  const o=offers.find(o=>o.name===p.name)!;assert.ok(o,p.name);
  if(p.price===undefined)assert.equal(o.priceSpecification,undefined);
  else assert.equal(o.priceSpecification?.minPrice,p.price,p.name);
  if(p.months)assert.equal(o.priceSpecification?.billingDuration,12,p.name);
 }
 const md=pageMarkdown(seoByPath.get('/pricing/')!);
 for(const p of websiteProjects){assert.ok(p.installment*p.months>p.price);assert.ok(md.includes((p.installment*p.months).toLocaleString('en-US')));}
 for(const p of servicePrices)assert.ok(md.includes(p.price.toLocaleString('en-US')),p.name);
 for(const p of customServicePrices)assert.ok(md.includes(p.name));
});

test('the expanded service brief backlog has six topics per confirmed new offering',()=>{
 const briefs=JSON.parse(readFileSync('scripts/expanded-service-briefs.json','utf8')) as Record<string,string[]>;
 assert.equal(Object.keys(briefs).length,11);
 for(const [slug,titles] of Object.entries(briefs)){assert.ok(services.some(s=>s.slug===slug));assert.equal(titles.length,6);assert.equal(new Set(titles).size,6);}
});
