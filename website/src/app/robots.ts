import type {MetadataRoute} from 'next';
import {site,indexable} from '@/lib/site';
export default function robots():MetadataRoute.Robots{return {rules:indexable?{userAgent:'*',allow:'/',disallow:['/api/','/payments/']}:{userAgent:'*',disallow:'/'},sitemap:`${site.url}/sitemap.xml`}}
