import {getPublicSeoPages} from './seo-pages';
import {absoluteUrl} from './seo';
import {site} from './site';
import {markdownPath} from './content-paths';
import {pageMarkdown} from './markdown-content';

const intro=`# Wonderweb Studio

> ${site.description}

${site.positioning} Its founder, CEO and team lead is Saikat Chowdhury. The team works remotely across locations. Market pages describe remotely delivered services for businesses in those markets; they do not represent local offices.

Contact: ${site.email}. Call bookings are preferred date/time requests, confirmed separately by the studio. Prices are in USD; starting scopes and final quotes are agreed on a call. Advertising spend and third-party costs are separate. Portfolio pages distinguish project work, creative explorations and historical campaign results. Illustrative growth charts are not measured client results or forecasts. Rankings, traffic and revenue are not guaranteed.
`;
export function llmsText(){
 const publicSeoPages=getPublicSeoPages();
 const groups=[['Start here',publicSeoPages.filter(p=>p.path.split('/').filter(Boolean).length<=1&&!['/privacy-policy/','/terms/'].includes(p.path))],
 ['Services',publicSeoPages.filter(p=>p.path.startsWith('/services/')&&p.path!=='/services/')],
 ['Industry guides',publicSeoPages.filter(p=>p.path.startsWith('/industries/')&&p.path!=='/industries/')],
 ['Location guides',publicSeoPages.filter(p=>p.path.startsWith('/locations/')&&p.path!=='/locations/')],
 ['Portfolio',publicSeoPages.filter(p=>p.path.startsWith('/work/')&&p.path!=='/work/')],
 ['Campaign case studies',publicSeoPages.filter(p=>p.path.startsWith('/results/')&&p.path!=='/results/')],
 ['Marketing resources',publicSeoPages.filter(p=>p.path.startsWith('/resources/')&&p.path!=='/resources/')],
 ['Industry service guides',publicSeoPages.filter(p=>p.path.startsWith('/solutions/')&&p.path!=='/solutions/')],
 ['Policies',publicSeoPages.filter(p=>['/privacy-policy/','/terms/'].includes(p.path))]] as const;
 return intro+'\n'+groups.map(([name,pages])=>`## ${name}\n\n${pages.map(p=>`- [${p.title}](${absoluteUrl(p.path)}): ${p.description} ([Markdown](${absoluteUrl(markdownPath(p.path))}))`).join('\n')}`).join('\n\n')+`\n\n## Machine-readable references\n\n- [Markdown directory](${absoluteUrl('/content/index.md')}): Individual content guides with canonical website links.\n- [Expanded content guide](${absoluteUrl('/llms-full.txt')}): Plain-text service, project and article content.\n- [XML sitemap](${absoluteUrl('/sitemap.xml')}): Canonical public page and image URLs.\n`;
}
export function llmsFullText(){return intro+'\n'+getPublicSeoPages().map(p=>p.availableAt?`# ${p.title}\n\n${p.description}\n\nCanonical: ${absoluteUrl(p.path)}\nMarkdown: ${absoluteUrl(markdownPath(p.path))}\n`:pageMarkdown(p)).join('\n\n')+'\n';}
export const xmlEscape=(s:string)=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
