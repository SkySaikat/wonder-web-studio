import test from 'node:test';
import assert from 'node:assert/strict';
import {migratedEntries,isReleased,publishedMigrations} from '../src/lib/migrated-content';
import {migratedDocument} from '../src/lib/migrated-body';
import {getPublicSeoPages,seoByPath} from '../src/lib/seo-pages';
import {GET} from '../src/app/content/[...slug]/route';
import {markdownPath} from '../src/lib/content-paths';

test('scheduled publication uses a UTC boundary and stays out of public discovery before release',async()=>{
 const scheduled=migratedEntries.filter(e=>e.scheduled);
 assert.ok(scheduled.length>0);
 for(const e of scheduled){
  const release=Date.parse(e.published);
  assert.equal(isReleased(e,release-1),false);assert.equal(isReleased(e,release),true);
  assert.ok(!publishedMigrations(undefined,release-1).some(x=>x.path===e.path));
  assert.ok(!getPublicSeoPages(release-1).some(x=>x.path===e.path));
  assert.ok(getPublicSeoPages(release).some(x=>x.path===e.path));
  if(!isReleased(e)){
   const path=markdownPath(e.path);
   const response=await GET(new Request('https://www.wonderwebstudio.com'+path),{params:Promise.resolve({slug:path.slice('/content/'.length).split('/')})});
   assert.equal(response.status,404);
  }
 }
 assert.equal(isReleased({published:'invalid'}),false);
});

test('every adaptation is sanitized, has provenance and links to real destinations',()=>{
 const allowedTags=new Set(['p','h2','h3','h4','ul','ol','li','strong','em','a','table','thead','tbody','tr','th','td','br','blockquote']);
 for(const e of migratedEntries){
  const doc=migratedDocument(e);
  assert.ok(e.summary.length>50,e.path);assert.ok(doc.words>=350,e.path);
  assert.match(e.originalPublished,/^\d{4}-\d{2}-\d{2}$/);assert.ok(Date.parse(e.published)>=Date.parse('2026-11-11T00:00:00Z'));
  assert.ok(doc.headings.length>=2,e.path);
  assert.ok(!/Google Ads management starts at \$999|Proof That Home Service Search Marketing Works|What Paid Search Delivers for Home Service Clients/i.test(doc.text),e.path);
  assert.ok(!/built[ -]?right|buildright|\bBRD\b|450\+|4\.9\/5|coastal bath|trustpilot/i.test(doc.html),e.path);
  assert.ok(!/\son\w+\s*=|style=|javascript:|(?:href|src)="data:|<script|<iframe|<form/i.test(doc.html),e.path);
  for(const match of doc.html.matchAll(/<\/?([a-z0-9]+)\b/gi))assert.ok(allowedTags.has(match[1]),`${e.path}: ${match[1]}`);
  for(const match of doc.html.matchAll(/href="([^"#]+)"/g)){
   const href=match[1].replaceAll('&amp;','&');
   if(href.startsWith('/'))assert.ok(seoByPath.has(href),`${e.path} → ${href}`);
   else assert.match(href,/^https:\/\//);
  }
 }
});
