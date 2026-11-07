import Image, {type ImageProps} from 'next/image';
import imageMetadata from '@/lib/image-metadata.json';
/** Decorative images keep empty alt and no tooltip; meaningful images get a descriptive title. */
export default function ContentImage(props:ImageProps){
 const image=typeof props.src==='string'?imageMetadata[props.src as keyof typeof imageMetadata]:undefined;
 return <Image {...props} title={props.alt?(props.title||image?.title||props.alt):undefined}/>;
}
