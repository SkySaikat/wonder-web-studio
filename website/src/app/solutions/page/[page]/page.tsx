import {MigrationLibrary} from '@/components/migration-library';
import {metadata} from '@/lib/seo';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{page:string}>}){const{page}=await params;return metadata(`Industry Service Guides - Page ${page}`,'Explore practical service guides for your industry.',`/solutions/page/${page}/`);}
export default async function Page({params}:{params:Promise<{page:string}>}){const{page}=await params;return <MigrationLibrary kind="solutions" page={Number(page)}/>;}
