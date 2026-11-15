import test from 'node:test';
import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';
import {NextRequest} from 'next/server';
import {existsSync} from 'node:fs';
import guides from '../src/data/download-guides.json';
import {leadSchema,leadText} from '../src/lib/leads';
import {createGuideGrant,verifyGuideGrant,guideCookieName} from '../src/lib/guide-access';
import {POST} from '../src/app/api/inquiry/route';
import {GET} from '../src/app/api/guides/[slug]/route';
const slug='roofing-google-ads-guide';
const lead={name:'Guide Test',email:'guide-test@example.com',service:'Guide: Google Ads field guide',message:'Requested the roofing campaign guide.',consent:true,requestId:'438a6d50-4740-48f8-a438-e84bf6b55e80',guide:{slug,businessName:'Example Roofing',phone:'+1 (555) 010-1234',market:'Austin, TX',goal:'More qualified leads'}};
test('guide leads require complete business details and identify the resource in the lead email',()=>{
 const parsed=leadSchema.parse(lead);assert.match(leadText(parsed),/Example Roofing/);assert.match(leadText(parsed),/Requested guide: Roofing Google Ads field guide/);assert.match(leadText(parsed),/Austin, TX/);
 for(const change of [{slug:'unknown'},{businessName:''},{phone:'not-a-phone'},{market:''},{goal:''}])assert.equal(leadSchema.safeParse({...lead,guide:{...lead.guide,...change}}).success,false);
});
test('download grants are signed, expire, and cannot unlock another guide',()=>{
 const now=1800000000000;const token=createGuideGrant(slug,'test-secret',now);
 assert.equal(verifyGuideGrant(slug,token,'test-secret',now),true);
 assert.equal(verifyGuideGrant('plumbing-seo-guide',token,'test-secret',now),false);
 assert.equal(verifyGuideGrant(slug,token+'x','test-secret',now),false);
 assert.equal(verifyGuideGrant(slug,token,'wrong-secret',now),false);
 assert.equal(verifyGuideGrant(slug,token,'test-secret',now+86400001),false);
 assert.equal(verifyGuideGrant(slug,token,'',now),false);
});
test('every guide file is private while its cover remains public',()=>{
 for(const guide of guides){assert.ok(existsSync('private/guides/'+guide.slug+'.pdf'));assert.ok(!existsSync('public/guides/'+guide.slug+'.pdf'));assert.ok(existsSync('public'+guide.cover));if('csv' in guide){assert.ok(existsSync('private/guides/'+guide.slug+'.csv'));assert.ok(!existsSync('public/guides/'+guide.slug+'.csv'));}}
});
test('lead acceptance unlocks only the requested files; delivery failure never grants access',async t=>{
 const env={NODE_ENV:'development',LEAD_EMAIL_PROVIDER:'zoho',ZOHO_SMTP_HOST:'smtppro.zoho.com',ZOHO_SMTP_USER:'info@wonderwebstudio.com',ZOHO_SMTP_PASSWORD:'test-password',ZOHO_SMTP_PORT:'465',GUIDE_DOWNLOAD_SECRET:'test-secret',TURNSTILE_SECRET_KEY:''};
 const saved=Object.fromEntries(Object.keys(env).map(k=>[k,process.env[k]]));let sent:Record<string,unknown>|undefined;let fail=false;
 t.mock.method(nodemailer,'createTransport',()=>({sendMail:async(message:Record<string,unknown>)=>{sent=message;if(fail)throw new Error('Provider unavailable');return {messageId:'receipt',accepted:['info@wonderwebstudio.com'],rejected:[]}},close:()=>{}}));
 const request=(body=lead)=>new Request('http://127.0.0.1:3000/api/inquiry/',{method:'POST',headers:{origin:'http://127.0.0.1:3000','content-type':'application/json'},body:JSON.stringify(body)});
 const download=(name:string,cookie='')=>GET(new NextRequest('http://127.0.0.1:3000/api/guides/'+name+'/',{headers:{cookie}}),{params:Promise.resolve({slug:name})});
 try{
  Object.assign(process.env,env);
  assert.equal((await download(slug)).status,403);
  const response=await POST(request());assert.equal(response.status,200);
  const cookie=response.headers.get('set-cookie')!;assert.ok(cookie.includes(guideCookieName(slug)));assert.match(cookie,/HttpOnly/);assert.match(cookie,/SameSite=lax/i);
  assert.equal(sent?.to,'info@wonderwebstudio.com');assert.equal(sent?.subject,'New guide lead - Wonderweb Studio');assert.match(String(sent?.text),/Example Roofing/);
  const file=await download(slug,cookie.split(';')[0]);assert.equal(file.status,200);assert.equal(file.headers.get('content-type'),'application/pdf');assert.equal(file.headers.get('cache-control'),'private, no-store');assert.equal(Buffer.from(await file.arrayBuffer()).subarray(0,4).toString(),'%PDF');
  assert.equal((await download('plumbing-seo-guide',cookie.split(';')[0])).status,403);
  assert.equal((await download('not-a-guide',cookie)).status,404);
  fail=true;const failure=await POST(request());assert.equal(failure.status,502);assert.equal(failure.headers.get('set-cookie'),null);
 }finally{for(const key of Object.keys(env)){if(saved[key]===undefined)delete process.env[key];else process.env[key]=saved[key]}}
});
