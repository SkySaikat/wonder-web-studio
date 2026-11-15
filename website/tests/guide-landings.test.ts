import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import guides from '../src/data/download-guides.json';
import {guideLandings,guideLandingBySlug,guidePath,relatedGuideLandings} from '../src/lib/guide-landings';
import {seoByPath,getPublicSeoPages} from '../src/lib/seo-pages';
import {metadata} from '../src/lib/seo';
import {pageGraph} from '../src/lib/schema';
import {pageMarkdown} from '../src/lib/markdown-content';
import sitemap from '../src/app/sitemap';
import nextConfig from '../next.config';

test('every protected PDF has its own public, service-led destination',()=>{
 assert.equal(guideLandings.length,guides.length);
 assert.equal(new Set(guideLandings.map(p=>p.path)).size,guides.length);
 const sitemapUrls=new Set(sitemap().map(row=>new URL(row.url).pathname));
 for(const guide of guides){
  const landing=guideLandingBySlug.get(guide.slug)!;assert.ok(landing,guide.slug);
  assert.equal(landing.path,guidePath(guide.slug));assert.equal(landing.guide.pdf,guide.pdf);
  const page=seoByPath.get(landing.path)!;assert.ok(page);
  assert.ok(getPublicSeoPages().includes(page));assert.ok(sitemapUrls.has(landing.path));
  assert.equal(metadata('','',landing.path).alternates?.canonical,'https://www.wonderwebstudio.com'+landing.path);
  assert.ok(seoByPath.has(`/services/${landing.service}/`));assert.ok(seoByPath.has(landing.trade.industryPath));
  assert.ok(existsSync('private/guides/'+guide.slug+'.pdf'));
  assert.ok(page.images?.includes(guide.artwork));assert.ok(page.images?.includes(guide.cover));
  const graph=pageGraph(landing.path)['@graph'];
  const service=graph.find(n=>n['@type']==='Service')!;assert.equal(service.serviceType,landing.serviceLabel);
  const doc=graph.find(n=>n['@type']==='DigitalDocument')!;
  assert.equal(doc.name,guide.title);assert.equal(doc.url,'https://www.wonderwebstudio.com'+landing.path+'#free-guide');
  assert.equal(doc.isAccessibleForFree,true);assert.match(String(doc.conditionsOfAccess),/business-details form/);
  assert.ok(!JSON.stringify(graph).includes('/api/guides/'));
 }
 assert.equal(guideLandingBySlug.get('missing-guide'),undefined);
});

test('guide discovery content contains the matching advice, services and form, never a direct download',()=>{
 const library=pageMarkdown(seoByPath.get('/guides/')!);
 const scenarios=new Set<string>();
 for(const p of guideLandings){
  scenarios.add(p.context.body);
  const md=pageMarkdown(seoByPath.get(p.path)!);
  assert.ok(library.includes(`https://www.wonderwebstudio.com${p.path}`));
  for(const text of [p.intro,p.context.body,...p.steps.map(s=>s.body),...p.dos,...p.donts,...p.help,...p.inside])assert.ok(md.includes(text),p.path);
  assert.ok(md.includes(`/services/${p.service}/`));assert.ok(md.includes(p.path+'#free-guide'));
  assert.ok(!md.includes('/api/guides/'));assert.ok(!md.includes('.pdf)'));
  const related=relatedGuideLandings(p.guide.slug);assert.equal(related.length,4);
  assert.ok(related.every(other=>other.guide.trade===p.guide.trade&&other.path!==p.path));
 }
 assert.equal(scenarios.size,guides.length,'Each trade/topic should have its own practical scenario.');
});

test('legacy PDF and CSV links lead to the matching page, preserving lead capture',async()=>{
 const redirects=await nextConfig.redirects!();
 for(const guide of guides){
  for(const extension of ['pdf',...('csv' in guide?['csv']:[])]){
   assert.equal(redirects.find(r=>r.source===`/guides/${guide.slug}.${extension}`)?.destination,guidePath(guide.slug));
  }
 }
});
