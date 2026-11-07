import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {existsSync} from 'node:fs';
import {publicSeoPages,seoPages,seoImagePath} from '../src/lib/seo-pages';
import {pageGraph,organizationGraph} from '../src/lib/schema';
import {metadata} from '../src/lib/seo';
import {jsonLd} from '../src/lib/site';
import {isSiteIndexable} from '../src/lib/indexing';
import nextConfig from '../next.config';
import {llmsText,llmsFullText} from '../src/lib/discovery';

test('all editorial URLs have unique metadata and actual generated images',()=>{
 for(const field of ['path','title','description'] as const)assert.equal(new Set(seoPages.map(p=>p[field])).size,seoPages.length,`duplicate ${field}`);
 for(const p of seoPages){assert.match(p.path,/^\/(?:[a-z0-9-]+\/)*$/);assert.ok(existsSync(`public${seoImagePath(p.path)}`));const m=metadata('fallback','fallback',p.path);assert.deepEqual(m.title,{absolute:`${p.title} | Wonderweb Studio`});assert.equal(m.description,p.description);}
 assert.ok(!publicSeoPages.some(p=>p.path==='/payments/'));
});
test('page graph identifiers resolve locally and location pages represent service areas',()=>{
 for(const p of seoPages){
  const graphs=[...organizationGraph()['@graph'],...pageGraph(p.path)['@graph']];
  const nodes:Record<string,unknown>[]=[];
  const walk=(v:unknown)=>{if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object'){nodes.push(v as Record<string,unknown>);Object.values(v).forEach(walk);}};walk(graphs);
  const ids=new Set(nodes.filter(n=>n['@type']).map(n=>n['@id']));
  for(const n of nodes){if(Object.keys(n).length===1&&n['@id'])assert.ok(ids.has(n['@id']),`unresolved reference ${n['@id']}`);assert.notEqual(n['@type'],'LocalBusiness');assert.equal(n.aggregateRating,undefined);}
  if(p.area){const service=graphs.find(n=>n['@type']==='Service')!;assert.deepEqual((service.areaServed as Record<string,unknown>).name,p.area.name);assert.equal(service.address,undefined);}
 }
});
test('discovery files cover public pages and exclude client payment route',()=>{
 for(const content of [llmsText(),llmsFullText()]){for(const p of publicSeoPages)assert.ok(content.includes(`wonderwebstudio.com${p.path}`));assert.ok(!content.includes('/payments/'));}
});
test('preview and launch modes produce opposite crawl directives while payments stay noindex',()=>{
 const script="const {metadata}=require('./src/lib/seo.ts');const robots=require('./src/app/robots.ts').default;console.log(JSON.stringify({home:metadata('','','/').robots,payment:metadata('','','/payments/').robots,robots:robots()}))";
 for(const enabled of [false,true]){
  const output=execFileSync(process.execPath,['--import','tsx','-e',script],{env:{...process.env,SITE_INDEXABLE:String(enabled),VERCEL_ENV:''},encoding:'utf8'});
  const r=JSON.parse(output);assert.equal(r.home.index,enabled);assert.equal(r.payment.index,false);assert.equal(r.robots.rules.allow,enabled?'/':undefined);assert.deepEqual(r.robots.rules.disallow,enabled?['/api/']:'/');
 }
});
test('JSON-LD escapes content that could otherwise break out of the script element',()=>{
 const raw=jsonLd({name:'</script><script>alert(1)</script>'});assert.ok(!raw.includes('<'));assert.equal(JSON.parse(raw).name,'</script><script>alert(1)</script>');
});


test('production indexing defaults and preview isolation stay consistent across all crawl controls',async()=>{
 const saved={flag:process.env.SITE_INDEXABLE,deployment:process.env.VERCEL_ENV};
 try{
  const cases=[
   {deployment:'production',flag:undefined,expected:true},
   {deployment:'production',flag:'',expected:true},
   {deployment:'production',flag:'true',expected:true},
   {deployment:'production',flag:'false',expected:false},
   {deployment:'preview',flag:'true',expected:false},
   {deployment:'preview',flag:undefined,expected:false},
   {deployment:'development',flag:'true',expected:false},
   {deployment:undefined,flag:undefined,expected:false},
   {deployment:undefined,flag:'true',expected:true},
  ];
  for(const c of cases){
   if(c.deployment===undefined)delete process.env.VERCEL_ENV;else process.env.VERCEL_ENV=c.deployment;
   if(c.flag===undefined)delete process.env.SITE_INDEXABLE;else process.env.SITE_INDEXABLE=c.flag;
   assert.equal(isSiteIndexable(),c.expected);
   const headers=await nextConfig.headers!();
   assert.equal(headers.some(rule=>rule.headers.some(h=>h.key.toLowerCase()==='x-robots-tag'&&h.value.includes('noindex'))),!c.expected);
   const script="const {metadata}=require('./src/lib/seo.ts');const robots=require('./src/app/robots.ts').default;console.log(JSON.stringify({home:metadata('','','/'),payment:metadata('','','/payments/').robots,robots:robots()}))";
   const r=JSON.parse(execFileSync(process.execPath,['--import','tsx','-e',script],{env:process.env,encoding:'utf8'}));
   assert.equal(r.home.robots.index,c.expected);
   assert.equal(r.payment.index,false);
   assert.deepEqual(r.robots.rules.disallow,c.expected?['/api/']:'/');
   assert.equal(r.home.alternates.canonical,'https://www.wonderwebstudio.com/');
   assert.equal(r.robots.sitemap,'https://www.wonderwebstudio.com/sitemap.xml');
  }
 }finally{
  if(saved.flag===undefined)delete process.env.SITE_INDEXABLE;else process.env.SITE_INDEXABLE=saved.flag;
  if(saved.deployment===undefined)delete process.env.VERCEL_ENV;else process.env.VERCEL_ENV=saved.deployment;
 }
});
