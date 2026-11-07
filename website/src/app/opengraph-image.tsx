import { ImageResponse } from 'next/og';
export const alt='Wonderweb Studio — Websites, marketing and creative';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#171715',color:'#f5f3ed',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:80,justifyContent:'space-between'}}><div style={{display:'flex',fontSize:30}}>WONDERWEB STUDIO <span style={{marginLeft:'auto',fontSize:20,color:'#c0bfb8'}}>WORKING WORLDWIDE</span></div><div style={{fontSize:86,lineHeight:1.05,display:'flex',flexDirection:'column',letterSpacing:-4}}><span>Built to stand out.</span><span style={{color:'#ff997f'}}>Made to bring business in.</span></div><div style={{fontSize:24,display:'flex'}}>Websites · SEO · Paid ads · Social & creative</div></div>,size)}
