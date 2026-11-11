import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/leads';
import {leadDeliveryConfig,sendLead} from '@/lib/lead-delivery';
import {site} from '@/lib/site';
export const runtime='nodejs';
export const dynamic='force-dynamic';
const respond=(message:string,status:number)=>NextResponse.json({message},{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request){
  const allowed=new Set([site.url,...(process.env.VERCEL_URL?[`https://${process.env.VERCEL_URL}`]:[])]);
  if(process.env.NODE_ENV!=='production') {allowed.add('http://127.0.0.1:3000');allowed.add('http://localhost:3000');}
  const origin=request.headers.get('origin');
  if(!origin||!allowed.has(origin))return respond('Please submit the form from our website.',403);
  if(!request.headers.get('content-type')?.includes('application/json'))return respond('Unsupported request format.',415);
  const reader=request.body?.getReader();if(!reader)return respond('Please complete the form.',400);
  let raw='';let bytes=0;const decoder=new TextDecoder();
  try {while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>16000){await reader.cancel();return respond('Your message is too long.',413);}raw+=decoder.decode(value,{stream:true});}raw+=decoder.decode();}catch{return respond('Please try again.',400);}
  let input;try{input=JSON.parse(raw)}catch{return respond('Please complete the form.',400)}
  const parsed=leadSchema.safeParse(input);
  if(!parsed.success)return respond('Check your name, email, service, project details, consent and any preferred call time.',400);
  const lead=parsed.data;
  if(lead.companyFax)return respond('Unable to submit this request.',400);
  const config=leadDeliveryConfig();const secret=process.env.TURNSTILE_SECRET_KEY;
  if(!config||(process.env.NODE_ENV==='production'&&!secret))return respond('The form is temporarily unavailable. Please email info@wonderwebstudio.com; your message has not been sent.',503);
  if(secret){
    if(!lead.token)return respond('Please complete the security check.',400);
    try{
      const verification=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret,response:lead.token}),signal:AbortSignal.timeout(8000)});
      const result=await verification.json();
      if(!result.success||result.action!=='inquiry'||result.hostname!==new URL(origin).hostname)return respond('The security check expired. Please try again.',400);
    }catch{return respond('The security check could not complete. Please try again.',503);}
  }
  try {await sendLead(lead,config);return NextResponse.json({ok:true,reference:lead.requestId},{headers:{'Cache-Control':'no-store'}});}
  catch{return respond('We could not confirm delivery. Please retry or email info@wonderwebstudio.com. Your details are still in the form.',502);}
}
