import Link from 'next/link';
import Image from './content-image';
import {notFound} from 'next/navigation';
import {PageSchema} from './page-schema';
import {PageHero,CTA} from './ui';
import {publishedMigrations,migrationPageSize,migrationCover,migrationLibraryPath} from '@/lib/migrated-content';
export function MigrationLibrary({kind,page=1}:{kind:'solutions'|'resources';page?:number}) {
 const entries=publishedMigrations(kind),count=Math.ceil(entries.length/migrationPageSize);
 if(!Number.isSafeInteger(page)||page<1||page>count)notFound();
 const path=migrationLibraryPath(kind,page);
 return <><PageSchema path={path}/><PageHero featuredPath={path} eyebrow={kind==='resources'?'THE RESOURCE LIBRARY':'INDUSTRY SERVICE GUIDES'} title={kind==='resources'?'Practical answers. More possibilities.':'Find the right plan for your trade.'} description="Explore detailed guidance for websites, search visibility, advertising and content. Choose a subject, understand the work involved and bring a clearer brief to your next conversation." crumbs={[{label:kind==='resources'?'Blog & guides':'Services',href:kind==='resources'?'/resources/':'/services/'},{label:`Guide library · page ${page}`}]} /><section className="section cream"><div className="container"><p className="library-count">Page {page} of {count} · {entries.length} guides</p><nav className="library-switch" aria-label="Guide collections"><Link href="/resources/">Latest Wonderweb articles</Link><Link href="/resources/library/1/">Resource library</Link><Link href="/solutions/">Industry service guides</Link></nav><div className="blog-grid">{entries.slice((page-1)*migrationPageSize,page*migrationPageSize).map(e=><Link className="blog-card" href={e.path} key={e.path} prefetch={false}><Image src={migrationCover(e)} alt={`${e.title} - editorial guide`} width={1440} height={810} sizes="(max-width:700px) 90vw,30vw"/><span className="small-label">{e.category} · {e.readTime}</span><h2>{e.title}</h2><p>{e.summary}</p><span>Original publication: {e.originalPublished}</span></Link>)}</div><nav className="library-pagination" aria-label="Guide pages">{Array.from({length:count},(_,i)=>i+1).map(n=><Link key={n} href={migrationLibraryPath(kind,n)} aria-current={page===n?'page':undefined} prefetch={false}>{n}</Link>)}</nav></div></section><CTA/></>;
}
