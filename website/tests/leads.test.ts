import test from 'node:test';
import assert from 'node:assert/strict';
import { leadSchema,deliverLead,leadText } from '../src/lib/leads';
import { POST } from '../src/app/api/inquiry/route';
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
  const response=await POST(new Request('https://wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://untrusted.example','content-type':'application/json'},body:JSON.stringify(lead)}));assert.equal(response.status,403);
});
test('inquiry route rejects malformed, oversized and honeypot input',async()=>{
  const request=(body:string)=>new Request('https://wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://wonderwebstudio.com','content-type':'application/json'},body});
  assert.equal((await POST(request('not json'))).status,400);
  assert.equal((await POST(request('x'.repeat(17000)))).status,413);
  assert.equal((await POST(request(JSON.stringify({...lead,companyFax:'bot'})))).status,400);
});
test('unconfigured delivery fails clearly without claiming success',async()=>{
  const saved=process.env.RESEND_API_KEY;delete process.env.RESEND_API_KEY;
  try{const response=await POST(new Request('https://wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://wonderwebstudio.com','content-type':'application/json'},body:JSON.stringify(lead)}));assert.equal(response.status,503);assert.match((await response.json()).message,/has not been sent/)}finally{if(saved)process.env.RESEND_API_KEY=saved;}
});
