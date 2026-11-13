import Image from './content-image';
import {featuredImagePath} from '@/lib/featured-path';
import covers from '@/lib/featured-covers.json';

/** Server-rendered editorial media with a stable original URL and descriptive metadata. */
export function FeaturedImage({path,priority=false,className=''}:{path:string;priority?:boolean;className?:string}){
 const src=featuredImagePath(path);
 const image=covers[src as keyof typeof covers];
 if(!image)throw new Error(`Missing featured cover: ${path}`);
 return <figure className={`page-featured-image ${className}`}>
  <Image src={src} alt={image.alt} title={image.title} width={image.width} height={image.height} priority={priority} sizes="(max-width:700px) 92vw,(max-width:1100px) 80vw,850px"/>
 </figure>;
}
