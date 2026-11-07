import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {services,industries,work} from '@/lib/content';
import {articles} from '@/lib/articles';
import {industryDetails} from '@/lib/industry-details';
export default function sitemap():MetadataRoute.Sitemap{const paths=['/','/about/','/contact/','/services/','/industries/','/pricing/','/work/','/resources/','/privacy-policy/','/terms/',...services.map(x=>`/services/${x.slug}/`),...industries.map(x=>`/industries/${x.slug}/`),...work.map(x=>`/work/${x.slug}/`),...articles.map(x=>`/resources/${x.slug}/`),...Object.keys(industryDetails).flatMap(slug=>['seo','web-design'].map(s=>`/industries/${slug}/${s}/`))];return paths.map(path=>({url:`${site.url}${path}`,lastModified:'2026-11-07'}))}
