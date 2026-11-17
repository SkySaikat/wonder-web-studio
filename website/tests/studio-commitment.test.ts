import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {publicSeoPages,seoByPath} from '../src/lib/seo-pages';
import {pageMarkdown,markdownIndex} from '../src/lib/markdown-content';
import {pageGraph} from '../src/lib/schema';
import {metadata} from '../src/lib/seo';
import {leadGuarantee,leadGuaranteeFaq,guaranteeServices,studioPartners} from '../src/lib/studio-commitment';
import {homeFaqs} from '../src/lib/home-faqs';
import {pricingFaqs,pricingOffers} from '../src/lib/pricing';
import {decisionBriefs} from '../src/lib/decision-briefs';

test('public discovery content and image descriptions keep the studio identity independent',()=>{
 const otherBrand=/built[\s-]?right|builtrightdigital/i;
 for(const page of publicSeoPages){
  assert.doesNotMatch(pageMarkdown(page),otherBrand,page.path);
  assert.doesNotMatch(JSON.stringify(metadata('','',page.path)),otherBrand,page.path);
  assert.doesNotMatch(JSON.stringify(pageGraph(page.path)),otherBrand,page.path);
 }
 assert.doesNotMatch(markdownIndex(),otherBrand);
 assert.ok(seoByPath.has('/resources/local-seo-home-improvement-checklist/'));
 for(const partner of studioPartners){
  assert.ok(partner.src.startsWith('/partners/'));
  assert.ok(existsSync(`public${partner.src}`));
 }
});

test('the approved paid-campaign guarantee has matching FAQ and complete discovery terms',()=>{
 assert.ok(homeFaqs.some(([q,a])=>q===leadGuaranteeFaq[0]&&a===leadGuaranteeFaq[1]));
 assert.ok(pricingFaqs.some(([q,a])=>q===leadGuaranteeFaq[0]&&a===leadGuaranteeFaq[1]));
 for(const path of ['/','/pricing/',...[...guaranteeServices].map(s=>`/services/${s}/`)]){
  const md=pageMarkdown(seoByPath.get(path)!);
  for(const term of [leadGuarantee.summary,leadGuarantee.scope,leadGuarantee.qualification,leadGuarantee.conditions,leadGuarantee.remedy])assert.ok(md.includes(term),`${path}: missing guarantee term`);
  assert.ok(md.includes(leadGuaranteeFaq[1]),path);
 }
 const seo=pageMarkdown(seoByPath.get('/services/seo/')!);
 assert.ok(!seo.includes(leadGuaranteeFaq[0]),'paid-campaign guarantee must not become a ranking guarantee');
});

test('approved monthly tier names and prices reach structured offers and Markdown',()=>{
 const offers=pricingOffers();const md=pageMarkdown(seoByPath.get('/pricing/')!);
 for(const [name,price] of [['Growth Engine',3000],['Market Leader',8000],['Omnipresence',15000]] as const){
  const offer=offers.find(o=>o.name.includes(name));assert.ok(offer,name);assert.equal(offer.price,price);
  assert.ok(md.includes(name));assert.ok(md.includes(price.toLocaleString('en-US')));
 }
 assert.ok(md.includes('prioritized delivery queue'));
 assert.ok(md.includes('25,000'));
});

test('practical decision tables retain their answer, criteria and methodology in Markdown',()=>{
 for(const [slug,brief] of Object.entries(decisionBriefs)){
  const md=pageMarkdown(seoByPath.get(`/resources/${slug}/`)!);
  assert.ok(md.includes(brief.answer),slug);assert.ok(md.includes(brief.method),slug);
  for(const row of brief.rows)for(const cell of row)assert.ok(md.includes(cell),`${slug}: ${cell}`);
 }
});
