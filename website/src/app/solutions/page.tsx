import {MigrationLibrary} from '@/components/migration-library';
import {metadata as makeMetadata} from '@/lib/seo';
export const dynamic='force-dynamic';
export const metadata=makeMetadata('Industry Service Guides','Detailed website, SEO and advertising guides for home-service companies and small businesses.','/solutions/');
export default function Page(){return <MigrationLibrary kind="solutions"/>;}
