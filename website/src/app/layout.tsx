import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/dm-sans';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import { site,indexable,jsonLd } from '@/lib/site';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'Wonderweb Studio | Websites, Marketing & Creative',template:'%s | Wonderweb Studio'},description:site.description,robots:{index:indexable,follow:indexable},verification:process.env.GOOGLE_SITE_VERIFICATION?{google:process.env.GOOGLE_SITE_VERIFICATION}:undefined,openGraph:{siteName:site.name,locale:'en_US',type:'website',images:['/opengraph-image']},twitter:{card:'summary_large_image'},icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><Analytics/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({'@context':'https://schema.org','@type':'Organization','@id':`${site.url}/#organization`,name:site.name,url:site.url,logo:`${site.url}/brand/wonderweb-studio.svg`,email:site.email,sameAs:site.socials.map(x=>x.url)})}}/></body></html>}
