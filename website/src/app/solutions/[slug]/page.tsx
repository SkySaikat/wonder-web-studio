import {notFound} from 'next/navigation';
import {migratedByPath,isReleased} from '@/lib/migrated-content';
import {MigratedGuide} from '@/components/migrated-guide';
import {metadata} from '@/lib/seo';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {const{slug}=await params;const e=migratedByPath.get(`/solutions/${slug}/`);if(!e||!isReleased(e))notFound();return metadata(e.title,e.summary,e.path);}
export default async function Page({params}:{params:Promise<{slug:string}>}) {const{slug}=await params;const e=migratedByPath.get(`/solutions/${slug}/`);if(!e||!isReleased(e))notFound();return <MigratedGuide entry={e}/>;}
