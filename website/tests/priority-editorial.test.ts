import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {priorityPagePresentation} from '../src/lib/priority-page-presentation';
import {migratedByPath} from '../src/lib/migrated-content';
import {migratedDocument} from '../src/lib/migrated-body';
import {seoByPath} from '../src/lib/seo-pages';
import {pageGraph} from '../src/lib/schema';
import {pageMarkdown} from '../src/lib/markdown-content';
import {leadGuarantee} from '../src/lib/studio-commitment';
import {featuredImagePath} from '../src/lib/featured-path';

test('priority commercial pages retain their URLs and real service intent across discovery formats',()=>{
 const imageHashes=new Set<string>();
 for(const [path,layout]of Object.entries(priorityPagePresentation)){
  const entry=migratedByPath.get(path)!;const page=seoByPath.get(path)!;const doc=migratedDocument(entry);const md=pageMarkdown(page);
  const entity=pageGraph(path)['@graph'].find(n=>n['@id']===`https://www.wonderwebstudio.com${path}#main-entity`)!;
  assert.equal(entity['@type'],layout.intent==='service'?'Service':'BlogPosting');
  if(layout.intent==='service'){
   assert.equal(entry.service,'google-ads','Buyer pages must not route to unrelated content management');
   assert.ok(doc.text.includes(leadGuarantee.summary));assert.ok(md.includes(leadGuarantee.remedy));
   assert.equal(entity.serviceType,layout.serviceType);
  }
  for(const [question,answer]of doc.faqs){assert.ok(md.includes(question));assert.ok(md.includes(answer));}
  for(const h of doc.headings){assert.ok(doc.html.includes(`id="${h.id}"`));assert.ok(md.includes(h.title));}
  for(const image of layout.illustrations){assert.ok(existsSync(`public${image.src}`));assert.ok(page.images?.includes(image.src));assert.ok(md.includes(image.src));assert.ok(md.includes(image.alt));}
  for(const link of layout.related)assert.ok(seoByPath.has(link.href),`${path}: broken contextual link ${link.href}`);
  assert.equal(page.modified,'2026-11-25');assert.equal(doc.originalPublished,entry.originalPublished);
  imageHashes.add(createHash('sha256').update(readFileSync(`public${featuredImagePath(path)}`)).digest('hex'));
 }
 assert.equal(imageHashes.size,3,'Each priority page needs its own cover');
});
