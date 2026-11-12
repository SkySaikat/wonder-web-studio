import webGuides from '@/data/service-guides-web.json';
import searchGuides from '@/data/service-guides-search.json';
import creativeGuides from '@/data/service-guides-creative.json';
import type {Article} from './articles';

/** Original editorial batch. Public dates reflect the Wonderweb edition, never a source site's age. */
const connectedServices:Record<string,string[]>={
 seo:['ai-search-optimization'],
 'local-seo':['local-services-ads','reputation-management'],
 'google-ads':['microsoft-ads','lead-generation'],
 'meta-ads':['linkedin-ads','digital-media-buying'],
 'content-creation':['email-marketing'],
 'landing-page-design':['conversion-rate-optimization'],
 'website-management':['franchise-marketing'],
 'web-development':['ai-workflow-automation'],
};
export const serviceGuides:Article[]=([...webGuides,...searchGuides,...creativeGuides] as unknown as Article[]).map(a=>({
 ...a,published:'2026-11-13',updated:'2026-11-13',
 related:[...new Set([...a.related,...(connectedServices[a.primaryService||'']||[])])],
}));
