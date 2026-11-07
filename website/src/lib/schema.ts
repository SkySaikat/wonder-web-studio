import {site, plans} from './site';
import {absoluteUrl} from './seo';
import {seoByPath, seoImagePath, type SeoPage} from './seo-pages';
import imageMetadata from './image-metadata.json';
import {articles} from './articles';

type Node=Record<string,unknown>;
const orgId=`${site.url}/#organization`;
const websiteId=`${site.url}/#website`;
const personId=`${site.url}/#founder`;
const ref=(id:string)=>({'@id':id});
export function imageSchema(path:string):Node{
 const image=imageMetadata[path as keyof typeof imageMetadata];
 if(!image)throw new Error(`Missing image metadata: ${path}`);
 const url=absoluteUrl(path);
 return {'@type':'ImageObject','@id':`${url}#image`,url,contentUrl:url,name:image.title,caption:image.description,description:image.description,encodingFormat:image.type,width:image.width,height:image.height};
}
export function organizationGraph(){return {'@context':'https://schema.org','@graph':[
 {'@type':'Organization','@id':orgId,name:site.name,url:`${site.url}/`,description:site.description,email:site.email,logo:ref(`${absoluteUrl('/brand/wonderweb-studio.svg')}#image`),sameAs:site.socials.map(s=>s.url),founder:ref(personId),contactPoint:{'@type':'ContactPoint',contactType:'sales inquiries',email:site.email,url:absoluteUrl('/contact/'),availableLanguage:'English'}},
 imageSchema('/brand/wonderweb-studio.svg'),
 {'@type':'WebSite','@id':websiteId,url:`${site.url}/`,name:site.name,description:site.description,publisher:ref(orgId),inLanguage:'en'},
 {'@type':'Person','@id':personId,name:'Saikat Chowdhury',jobTitle:'Founder & CEO · Team Lead',url:absoluteUrl('/about/'),image:absoluteUrl('/work/saikat.webp'),worksFor:ref(orgId)},
 ]};}
export function pageGraph(path:string){
 const page=seoByPath.get(path);if(!page)throw new Error(`No SEO entry for ${path}`);
 const url=absoluteUrl(path);const pageId=`${url}#webpage`;const entityId=`${url}#main-entity`;
 const imagePaths=[...new Set([seoImagePath(path),...(page.images||[])])];
 const pageNode:Node={'@type':page.type,'@id':pageId,url,name:page.title,description:page.description,isPartOf:ref(websiteId),publisher:ref(orgId),inLanguage:'en',primaryImageOfPage:ref(`${absoluteUrl(imagePaths[0])}#image`),image:imagePaths.map(p=>ref(`${absoluteUrl(p)}#image`))};
 if(page.modified)pageNode.dateModified=page.modified;
 const nodes:Node[]=[pageNode,...imagePaths.map(imageSchema)];
 if(path!=='/'){
  const parts=path.split('/').filter(Boolean);
  const breadcrumbs=['/',...parts.map((_,i)=>`/${parts.slice(0,i+1).join('/')}/`)];
  pageNode.breadcrumb=ref(`${url}#breadcrumb`);
  nodes.push({'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:breadcrumbs.map((p,i)=>({'@type':'ListItem',position:i+1,name:seoByPath.get(p)?.label||page.label,item:absoluteUrl(p)}))});
 }
 if(page.entity){pageNode.mainEntity=ref(entityId);nodes.push(mainEntity(page,entityId,pageId));}
 else if(page.type==='AboutPage')pageNode.mainEntity=ref(orgId);
 else if(page.type==='ContactPage')pageNode.about=ref(orgId);
 if(path==='/'||path==='/about/'){
  const videoId=`${site.url}/#studio-introduction`;
  pageNode.video=ref(videoId);
  nodes.push({'@type':'VideoObject','@id':videoId,name:'Wonder Web Studio',description:'The original Wonderweb Studio introduction, showing the studio’s creative roots.',thumbnailUrl:'https://i.ytimg.com/vi/vi4cH6cD3Sg/hqdefault.jpg',embedUrl:'https://www.youtube-nocookie.com/embed/vi4cH6cD3Sg',url:'https://www.youtube.com/watch?v=vi4cH6cD3Sg',uploadDate:'2023-11-05T08:08:25-08:00',duration:'PT1M15S',creator:ref(orgId)});
 }
 if(page.children){
  pageNode.mainEntity=ref(`${url}#list`);
  nodes.push({'@type':'ItemList','@id':`${url}#list`,name:page.title,numberOfItems:page.children.length,itemListElement:page.children.map((p,i)=>({'@type':'ListItem',position:i+1,name:seoByPath.get(p)?.label,url:absoluteUrl(p)}))});
 }
 return {'@context':'https://schema.org','@graph':nodes};
}
function mainEntity(page:SeoPage,id:string,pageId:string):Node{
 const base:Node={'@type':page.entity,'@id':id,name:page.label,description:page.description,url:absoluteUrl(page.path),mainEntityOfPage:ref(pageId),image:ref(`${absoluteUrl(seoImagePath(page.path))}#image`)};
 if(page.entity==='Service')return {...base,name:page.title,serviceType:page.serviceType,provider:ref(orgId),...(page.area?{areaServed:{'@type':page.area.kind,name:page.area.name,containedInPlace:{'@type':page.area.kind==='City'?'State':'Country',name:page.area.region}}}:{}),...(page.audience?{audience:{'@type':'BusinessAudience',audienceType:page.audience}}:{})};
 if(page.entity==='BlogPosting'||page.entity==='Article'){
  const a=articles.find(a=>page.path===`/resources/${a.slug}/`);
  return {...base,headline:page.label,inLanguage:'en',author:ref(orgId),publisher:ref(orgId),...(page.modified?{dateModified:page.modified}:{}),...(a?{articleSection:a.category,...(a.sources?{citation:a.sources.map(s=>s.url)}:{})}:{})};
 }
 if(page.entity==='CreativeWork')return {...base,creator:ref(orgId),inLanguage:'en',image:page.images?.map(p=>ref(`${absoluteUrl(p)}#image`))};
 if(page.entity==='OfferCatalog')return {...base,name:'Website and marketing starting plans',itemListElement:plans.map(p=>({'@type':'Offer',name:`${p.name} — monthly starting scope`,description:`${p.description} ${p.note} Starting price; final scope and quote agreed before purchase.`,url:absoluteUrl('/pricing/'),seller:ref(orgId),priceSpecification:{'@type':'UnitPriceSpecification',minPrice:p.price,priceCurrency:'USD',unitText:'month'},itemOffered:{'@type':'Service',name:`${p.name} marketing plan`,provider:ref(orgId),description:p.items.join('; ')}}))};
 return base;
}
