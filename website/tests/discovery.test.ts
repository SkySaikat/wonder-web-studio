import test from 'node:test';
import assert from 'node:assert/strict';
import {articles} from '../src/lib/articles';
import {markdownPath} from '../src/lib/content-paths';
import {formatEditorialDate} from '../src/lib/editorial-dates';
import {markdownIndex,markdownPages,pageMarkdown} from '../src/lib/markdown-content';
import {publicSeoPages,seoByPath} from '../src/lib/seo-pages';
import {metadata,absoluteUrl} from '../src/lib/seo';
import {pageGraph} from '../src/lib/schema';
import {GET} from '../src/app/content/[...slug]/route';

test('every public page has a discoverable Markdown guide with a canonical response',async()=>{
 assert.ok(markdownPages.size>=publicSeoPages.length);
 for(const p of publicSeoPages){
  const path=markdownPath(p.path);assert.equal(markdownPages.get(path),p);
  assert.ok(markdownIndex().includes(absoluteUrl(path)));
  assert.equal(metadata('','',p.path).alternates?.types?.['text/markdown'],absoluteUrl(path));
  const response=await GET(new Request(absoluteUrl(path)),{params:Promise.resolve({slug:path.slice('/content/'.length).split('/')})});
  assert.equal(response.status,200);assert.match(response.headers.get('Content-Type')!,/^text\/markdown/);
  assert.ok(response.headers.get('Link')?.includes(`<${absoluteUrl(p.path)}>; rel="canonical"`));
  const body=await response.text();assert.ok(body.includes(p.description));assert.ok(!body.includes('undefined'));
  // All internal links must point to a known public page, guide or actual asset.
  for(const match of body.matchAll(/\]\((https:\/\/www\.wonderwebstudio\.com[^)]+)\)/g)){
   const target=new URL(match[1]).pathname;
   if(!target.match(/\.(webp|png)$/))assert.ok(seoByPath.has(target)||markdownPages.has(target)||target==='/content/index.md',`broken internal reference: ${target}`);
  }
 }
 assert.equal((await GET(new Request('https://example.com'),{params:Promise.resolve({slug:['payments.md']})})).status,404);
 assert.equal((await GET(new Request('https://example.com'),{params:Promise.resolve({slug:['unknown.md']})})).status,404);
});

test('article dates and content agree across visible data, schema and Markdown',()=>{
 for(const a of articles){
  const path=`/resources/${a.slug}/`;const p=seoByPath.get(path)!;const md=pageMarkdown(p);
  assert.ok(formatEditorialDate(p.modified!));assert.ok(md.includes(`Updated: ${p.modified}`));
  const entity=pageGraph(path)['@graph'].find(n=>n['@type']==='BlogPosting')!;
  assert.equal(entity.dateModified,p.modified);assert.equal(entity.datePublished,a.published);
  assert.equal(md.includes('Published:'),Boolean(a.published));
  for(const [q,answer] of a.faqs||[]){assert.ok(md.includes(q));assert.ok(md.includes(answer));}
  for(const source of a.sources||[])assert.ok(md.includes(source.url));
 }
 assert.equal(formatEditorialDate('2026-05-12'),'May 12, 2026');
 assert.throws(()=>formatEditorialDate('2026-02-30'));
});

test('local service guides retain distinct scope and remote-delivery facts',()=>{
 const seo=pageMarkdown(seoByPath.get('/locations/phoenix/seo/')!);
 const ads=pageMarkdown(seoByPath.get('/locations/phoenix/google-ads/')!);
 assert.notEqual(seo,ads);assert.match(seo,/Make service discovery useful/);assert.match(ads,/Start with a service, a territory/);
 for(const page of publicSeoPages.filter(p=>p.path.startsWith('/locations/')&&p.area)){
  const md=pageMarkdown(page);assert.match(md,/does not represent a local office/);assert.match(md,/Prepare your marketing brief/);
 }
});
