import {MigrationLibrary} from '@/components/migration-library';
import {metadata} from '@/lib/seo';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{page:string}>}){const{page}=await params;return metadata(`Marketing Resource Library - Page ${page}`,'Explore practical marketing guides and checklists.',`/resources/library/${page}/`);}
export default async function Page({params}:{params:Promise<{page:string}>}){const{page}=await params;return <MigrationLibrary kind="resources" page={Number(page)}/>;}
