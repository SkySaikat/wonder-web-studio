import Image, {type ImageProps} from 'next/image';
/** Decorative images keep empty alt and no tooltip; meaningful images get a descriptive title. */
export default function ContentImage(props:ImageProps){
 return <Image {...props} title={props.alt?(props.title||props.alt):undefined}/>;
}
