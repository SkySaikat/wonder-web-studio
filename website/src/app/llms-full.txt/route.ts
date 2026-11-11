import {llmsFullText} from '@/lib/discovery';
export const dynamic='force-dynamic';
export function GET(){return new Response(llmsFullText(),{headers:{'Content-Type':'text/plain; charset=utf-8'}});}
