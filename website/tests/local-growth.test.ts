import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {localWebBriefs,growthLocations} from '../src/lib/local-growth-content';
import {localGrowthArticles} from '../src/lib/local-growth-articles';
import {locations,locationServices} from '../src/lib/locations';
import {seoByPath,getPublicSeoPages,seoImagePath} from '../src/lib/seo-pages';
import {pageMarkdown} from '../src/lib/markdown-content';
import {pageGraph} from '../src/lib/schema';
import {featuredImagePath} from '../src/lib/featured-path';
import {locationServiceAnswers} from '../src/lib/location-answers';
import covers from '../src/lib/featured-covers.json';
import sitemap from '../src/app/sitemap';

const paths=[...localWebBriefs.map(b=>`/locations/${b.location}/web-design/`),...growthLocations.map(l=>`/locations/${l.slug}/`),...localGrowthArticles.map(a=>`/resources/${a.slug}/`)];
test('new buyer pages have complete schema, unique real media, Markdown and sitemap discovery',()=>{
 const hashes=new Set<string>();const urls=new Set(sitemap().map(s=>s.url));
 for(const path of paths){
  const page=seoByPath.get(path)!;assert.ok(page,path);assert.ok(getPublicSeoPages().includes(page));assert.ok(urls.has(`https://www.wonderwebstudio.com${path}`));
  const src=featuredImagePath(path);const cover=covers[src as keyof typeof covers];assert.ok(cover);assert.ok(existsSync(`public${seoImagePath(path)}`));
  const hash=createHash('sha256').update(readFileSync(`public${src}`)).digest('hex');assert.ok(!hashes.has(hash),`repeated image ${path}`);hashes.add(hash);
  assert.ok(pageGraph(path)['@graph'].some(n=>n['@type']==='ImageObject'));
  const md=pageMarkdown(page);assert.ok(md.includes('https://www.wonderwebstudio.com'+path));
  for(const match of md.matchAll(/\]\(https:\/\/www\.wonderwebstudio\.com(\/[^)#]+)\)/g))assert.ok(seoByPath.has(match[1])||match[1]==='/content/index.md'||existsSync(`public${match[1]}`),`unregistered Markdown link ${match[1]}`);
 }
 const texas=pageGraph('/locations/texas/web-design/')['@graph'].find(n=>n['@type']==='Service')!;
 assert.deepEqual(texas.areaServed,{'@type':'State',name:'Texas',containedInPlace:{'@type':'Country',name:'United States'}});
});
test('each local web-design page is linked from its hub and preserves its unique brief and FAQ answers',()=>{
 for(const brief of localWebBriefs){
  assert.ok(locations.find(l=>l.slug===brief.location)?.services.includes('web-design'));
  assert.ok(locationServices.some(s=>s.location===brief.location&&s.service==='web-design'));
  const md=pageMarkdown(seoByPath.get(`/locations/${brief.location}/web-design/`)!);
  for(const [title,body] of brief.sections){assert.ok(md.includes(title));assert.ok(md.includes(body));}
  for(const [question,answer] of locationServiceAnswers(brief.location,'web-design')){assert.ok(md.includes(question));assert.ok(md.includes(answer));}
  for(const market of brief.relatedMarkets)assert.ok(seoByPath.has(`/locations/${market}/web-design/`));
 }
});
