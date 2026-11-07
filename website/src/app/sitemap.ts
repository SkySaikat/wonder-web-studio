import {locations,locationServices} from '@/lib/locations';
import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {services,industries,work} from '@/lib/content';
import {articles} from '@/lib/articles';
import {campaignStories} from '@/lib/projects';
import {industryDetails} from '@/lib/industry-details';
export default function sitemap():MetadataRoute.Sitemap{const paths=['/locations/',...locations.map(l=>`/locations/${l.slug}/`),...locationServices.map(l=>`/locations/${l.location}/${l.service}/`),'/','/about/','/contact/','/services/','/industries/','/pricing/','/work/','/resources/','/privacy-policy/','/terms/','/results/',...campaignStories.map(x=>`/results/${x.slug}/`),...services.map(x=>`/services/${x.slug}/`),...industries.map(x=>`/industries/${x.slug}/`),...work.map(x=>`/work/${x.slug}/`),...articles.map(x=>`/resources/${x.slug}/`),...Object.keys(industryDetails).flatMap(slug=>['seo','web-design'].map(s=>`/industries/${slug}/${s}/`))];return paths.map(path=>({url:`${site.url}${path}`,lastModified:'2026-11-07'}))}
