import {llmsText} from '@/lib/discovery';
export const dynamic='force-dynamic';
export function GET(){return new Response(llmsText(),{headers:{'Content-Type':'text/plain; charset=utf-8'}});}
