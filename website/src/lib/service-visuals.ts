import artwork from './service-artwork.json';
export function serviceVisual(slug:string){
 const image=artwork[slug as keyof typeof artwork];
 if(!image)throw new Error(`Missing service artwork: ${slug}`);
 return image;
}
