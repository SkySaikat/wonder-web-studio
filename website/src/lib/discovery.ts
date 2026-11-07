import {caseStudyDetails} from './case-study-details';
import {marketBriefs} from './location-depth';
import {publicSeoPages} from './seo-pages';
import {absoluteUrl} from './seo';
import {site,plans} from './site';
import {services,industries,work} from './content';
import {articles} from './articles';
import {locations} from './locations';
import {campaignStories} from './projects';

const intro=`# Wonderweb Studio

> Websites, SEO, paid advertising, social media and creative content for small businesses and home-service companies.

Wonderweb Studio works remotely with businesses worldwide. Its founder, CEO and team lead is Saikat Chowdhury, based in Chattogram, Bangladesh. US market pages describe remotely delivered services; they do not represent local offices.

Contact: ${site.email}. Call bookings are preferred date/time requests, confirmed separately by the studio. Prices are in USD; starting scopes and final quotes are agreed on a call. Advertising spend and third-party costs are separate. Portfolio pages distinguish project work, creative explorations and historical campaign results. Illustrative growth charts are not measured client results or forecasts. Rankings, traffic and revenue are not guaranteed.
`;
export function llmsText(){
 const groups=[['Start here',publicSeoPages.filter(p=>p.path.split('/').filter(Boolean).length<=1&&!['/privacy-policy/','/terms/'].includes(p.path))],
 ['Services',publicSeoPages.filter(p=>p.path.startsWith('/services/')&&p.path!=='/services/')],
 ['Industry guides',publicSeoPages.filter(p=>p.path.startsWith('/industries/')&&p.path!=='/industries/')],
 ['Location guides',publicSeoPages.filter(p=>p.path.startsWith('/locations/')&&p.path!=='/locations/')],
 ['Portfolio',publicSeoPages.filter(p=>p.path.startsWith('/work/')&&p.path!=='/work/')],
 ['Campaign case studies',publicSeoPages.filter(p=>p.path.startsWith('/results/')&&p.path!=='/results/')],
 ['Marketing resources',publicSeoPages.filter(p=>p.path.startsWith('/resources/')&&p.path!=='/resources/')],
 ['Policies',publicSeoPages.filter(p=>['/privacy-policy/','/terms/'].includes(p.path))]] as const;
 return intro+'\n'+groups.map(([name,pages])=>`## ${name}\n\n${pages.map(p=>`- [${p.title}](${absoluteUrl(p.path)}): ${p.description}`).join('\n')}`).join('\n\n')+`\n\n## Machine-readable references\n\n- [Expanded content guide](${absoluteUrl('/llms-full.txt')}): Plain-text service, project and article content.\n- [XML sitemap](${absoluteUrl('/sitemap.xml')}): Canonical public page and image URLs.\n`;
}
export function llmsFullText(){return intro+'\n'+publicSeoPages.map(p=>{
 const parts=p.path.split('/').filter(Boolean);const slug=parts[1];
 let body='';
 if(parts[0]==='services'&&slug){const s=services.find(s=>s.slug===slug)!;body=s.sections.map(s=>`### ${s.title}\n\n${s.body}`).join('\n\n')+'\n\nDeliverables: '+s.deliverables.join('; ');}
 if(parts[0]==='resources'&&slug){const a=articles.find(a=>a.slug===slug)!;body=a.sections.map(s=>`### ${s.title}\n\n${s.body}`).join('\n\n')+'\n\nChecklist:\n'+a.checklist.map(c=>`- ${c}`).join('\n');}
 if(parts[0]==='locations'&&slug){const l=locations.find(l=>l.slug===slug)!;body=l.sections.map(([h,b])=>`### ${h}\n\n${b}`).join('\n\n');const brief=marketBriefs[slug];body+=`\n\nPlanning scenario (not a client result): ${brief.scenario}\n\n${brief.decision}\n\n${brief.proof}`;}
 if(parts[0]==='industries'&&slug){const i=industries.find(i=>i.slug===slug)!;body=i.needs.map(s=>`### ${s.title}\n\n${s.body}`).join('\n\n');}
 if(parts[0]==='work'&&slug){const w=work.find(w=>w.slug===slug)!;body='challenge' in w?`Brief: ${w.challenge}\n\nApproach: ${w.approach}\n\nDeliverables: ${w.deliverables.join('; ')}`:'A creative exploration from the studio’s earlier portfolio; not a measured campaign result.';}
 if(parts[0]==='results'&&slug){const s=campaignStories.find(s=>s.slug===slug)!;body=`${s.period}\n\n${s.challenge}\n\n${s.approach}\n\n${s.results.map(([value,label])=>`${value} ${label}`).join('; ')}\n\n${s.context}`;const detail=caseStudyDetails[slug];body+='\n\n'+detail.chapters.map(([title,text])=>`### ${title}\n\n${text}`).join('\n\n')+'\n\n'+detail.lessons;}
 if(p.path==='/pricing/')body=plans.map(p=>`${p.name}: from $${p.price} USD per month. ${p.description} ${p.items.join('; ')}. ${p.note}`).join('\n\n');
 return `## ${p.label}\n\nSource: ${absoluteUrl(p.path)}\n\n${p.description}${body?'\n\n'+body:''}`;
 }).join('\n\n')+'\n';}
export const xmlEscape=(s:string)=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
