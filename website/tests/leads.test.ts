import test from 'node:test';
import assert from 'node:assert/strict';
import { leadSchema,deliverLead,leadText } from '../src/lib/leads';
import { POST } from '../src/app/api/inquiry/route';
import {addDays,dateInZone,validBookingDate} from '../src/lib/booking';
const lead={name:'Test Person',email:'test@example.com',website:'example.com',service:'Website design',budget:'',message:'A clearly marked test inquiry for validation.',consent:true as const,companyFax:'',token:'',requestId:'438a6d50-4740-48f8-a438-e84bf6b55e80',source:'/contact/',utm:{utm_source:'test'}};
test('requires valid contact details and explicit inquiry consent',()=>{
  assert.equal(leadSchema.safeParse(lead).success,true);
  for(const invalid of [{...lead,email:'not-an-email'},{...lead,consent:false},{...lead,message:'short'},{...lead,requestId:'not-a-uuid'},{...lead,utm:{email:'private'}}])assert.equal(leadSchema.safeParse(invalid).success,false);
});
test('email receipt is required before delivery is reported',async()=>{
  const calls:{url:string;init:RequestInit|undefined}[]=[];
  const transport:typeof fetch=async(url,init)=>{calls.push({url:String(url),init});return Response.json({id:'provider-receipt'})};
  assert.equal(await deliverLead(lead,{key:'test-key',from:'website@example.com',to:'info@example.com'},transport),'provider-receipt');
  const payload=JSON.parse(String(calls[0].init?.body));
  assert.deepEqual(payload.to,['info@example.com']);assert.equal(payload.reply_to,lead.email);assert.equal(payload.text,leadText(lead));
  assert.equal((calls[0].init?.headers as Record<string,string>)['Idempotency-Key'],`lead-${lead.requestId}`);
  await assert.rejects(()=>deliverLead(lead,{key:'test',from:'a@example.com',to:'b@example.com'},async()=>Response.json({error:'unavailable'},{status:500})));
  await assert.rejects(()=>deliverLead(lead,{key:'test',from:'a@example.com',to:'b@example.com'},async()=>Response.json({})));
});
test('inquiry route rejects cross-origin requests before processing',async()=>{
  const response=await POST(new Request('https://www.wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://untrusted.example','content-type':'application/json'},body:JSON.stringify(lead)}));assert.equal(response.status,403);
});
test('inquiry route rejects malformed, oversized and honeypot input',async()=>{
  const request=(body:string)=>new Request('https://www.wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://www.wonderwebstudio.com','content-type':'application/json'},body});
  assert.equal((await POST(request('not json'))).status,400);
  assert.equal((await POST(request('x'.repeat(17000)))).status,413);
  assert.equal((await POST(request(JSON.stringify({...lead,companyFax:'bot'})))).status,400);
});
test('unconfigured delivery fails clearly without claiming success',async()=>{
  const saved={provider:process.env.LEAD_EMAIL_PROVIDER,password:process.env.ZOHO_SMTP_PASSWORD};process.env.LEAD_EMAIL_PROVIDER='zoho';delete process.env.ZOHO_SMTP_PASSWORD;
  try{const response=await POST(new Request('https://www.wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://www.wonderwebstudio.com','content-type':'application/json'},body:JSON.stringify(lead)}));assert.equal(response.status,503);assert.match((await response.json()).message,/has not been sent/)}finally{if(saved.provider===undefined)delete process.env.LEAD_EMAIL_PROVIDER;else process.env.LEAD_EMAIL_PROVIDER=saved.provider;if(saved.password===undefined)delete process.env.ZOHO_SMTP_PASSWORD;else process.env.ZOHO_SMTP_PASSWORD=saved.password;}
});
test('call requests retain their time zone and remain unconfirmed',async()=>{
  const date=addDays(dateInZone(new Date(),'America/New_York'),2);
  const request={...lead,booking:{date,time:'14:30',timeZone:'America/New_York',durationMinutes:30 as const}};
  const parsed=leadSchema.parse(request);
  assert.match(leadText(parsed),/Time zone: America\/New_York/);
  assert.match(leadText(parsed),/Status: REQUESTED/);
  assert.match(leadText(parsed),/No calendar reservation has been created/);
  let sent:Record<string,unknown>|undefined;
  await deliverLead(parsed,{key:'test',from:'a@example.com',to:'info@example.com'},async(_url,init)=>{sent=JSON.parse(String(init?.body));return Response.json({id:'booking-receipt'})});
  assert.equal(sent?.subject,'New call request — Wonderweb Studio');
  for(const booking of [{...request.booking,date:'2020-01-01'},{...request.booking,date:'2027-02-30'},{...request.booking,time:'25:00'},{...request.booking,time:'14:17'},{...request.booking,timeZone:'Not/AZone'},{...request.booking,durationMinutes:120}])assert.equal(leadSchema.safeParse({...lead,booking}).success,false);
});
test('booking window uses the requested time zone and a bounded future period',()=>{
  const now=new Date('2026-11-07T01:00:00Z');
  assert.equal(dateInZone(now,'America/Los_Angeles'),'2026-11-06');
  assert.equal(validBookingDate('2026-11-07','America/Los_Angeles',now),true);
  assert.equal(validBookingDate('2026-11-07','Asia/Dhaka',now),false);
  assert.equal(validBookingDate('2027-11-07','Asia/Dhaka',now),false);
});
