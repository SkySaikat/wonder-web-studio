import {NextRequest,NextResponse} from 'next/server';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import guides from '@/data/download-guides.json';
import {guideCookieName,guideSigningKey,verifyGuideGrant} from '@/lib/guide-access';

export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function GET(request:NextRequest,{params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const guide=guides.find(g=>g.slug===slug);
  const format=request.nextUrl.searchParams.get('format')||'pdf';
  const headers={'Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow'};
  if(!guide||!['pdf','csv'].includes(format)||(format==='csv'&&!('csv' in guide)))return NextResponse.json({message:'Guide not found.'},{status:404,headers});
  if(!verifyGuideGrant(slug,request.cookies.get(guideCookieName(slug))?.value||'',guideSigningKey()))return NextResponse.json({message:'Please complete the business-information form to get this guide.'},{status:403,headers});
  try{
    const file=await readFile(path.join(process.cwd(),'private','guides',`${slug}.${format}`));
    return new NextResponse(file,{headers:{...headers,'Content-Type':format==='pdf'?'application/pdf':'text/csv; charset=utf-8','Content-Disposition':`attachment; filename="wonderweb-${slug}.${format}"`}});
  }catch{return NextResponse.json({message:'The download is temporarily unavailable. Please try again.'},{status:503,headers});}
}
