import {readFile} from 'node:fs/promises';
import sharp from 'sharp';
const covers=Object.values(JSON.parse(await readFile('src/lib/featured-covers.json','utf8')));
const failures=[];
for(const cover of covers){
 try{
  const file=`public${cover.src}`;const metadata=await sharp(file).metadata();
  if(metadata.width!==cover.width||metadata.height!==cover.height||metadata.format!=='webp')throw new Error('Dimensions or MIME mismatch');
  // The artwork must actually be present, not an empty area above a title strip.
  const stats=await sharp(file).extract({left:0,top:0,width:1440,height:580}).resize(144,58).stats();
  if(Math.max(...stats.channels.slice(0,3).map(c=>c.stdev))<8)throw new Error('Artwork area is blank or nearly uniform');
  if(!cover.alt||!cover.title||!cover.description)throw new Error('Missing descriptive image metadata');
 }catch(error){failures.push({src:cover.src,error:error.message});}
}
console.log(JSON.stringify({checked:covers.length,failures},null,2));
if(failures.length)process.exitCode=1;
