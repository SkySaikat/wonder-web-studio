import test from 'node:test';
import assert from 'node:assert/strict';
import nodemailer,{type SMTPSentMessageInfo,type SendMailOptions,type SMTPTransportOptions} from 'nodemailer';
import {leadDeliveryConfig,sendLead,type SmtpFactory} from '../src/lib/lead-delivery';
import {leadSchema,leadText} from '../src/lib/leads';
import {POST} from '../src/app/api/inquiry/route';
import {addDays,dateInZone} from '../src/lib/booking';

const env={LEAD_EMAIL_PROVIDER:'zoho',ZOHO_SMTP_HOST:'smtppro.zoho.com',ZOHO_SMTP_PORT:'465',ZOHO_SMTP_USER:'info@wonderwebstudio.com',ZOHO_SMTP_PASSWORD:'test-app-password'};
const lead=leadSchema.parse({name:'Routing Test',email:'visitor@example.com',service:'Website design',message:'Test submission for mail routing; no real customer.',consent:true,requestId:'438a6d50-4740-48f8-a438-e84bf6b55e80'});
const receipt:SMTPSentMessageInfo={messageId:'test-receipt',accepted:['info@wonderwebstudio.com'],rejected:[],pending:[],response:'250 accepted',envelope:{from:env.ZOHO_SMTP_USER,to:['info@wonderwebstudio.com']},envelopeTime:0,messageTime:0,messageSize:100};

test('all transports route to the studio inbox and incomplete settings fail closed',()=>{
  const config=leadDeliveryConfig({...env,LEAD_TO_EMAIL:'old-inbox@example.com'});
  assert.equal(config?.to,'info@wonderwebstudio.com');
  assert.equal(leadDeliveryConfig({...env,ZOHO_SMTP_PASSWORD:''}),null);
  assert.equal(leadDeliveryConfig({...env,ZOHO_SMTP_PORT:'25'}),null);
  assert.equal(leadDeliveryConfig({...env,ZOHO_SMTP_HOST:'https://example.com/'}),null);
  assert.equal(leadDeliveryConfig({...env,LEAD_EMAIL_PROVIDER:'unknown'}),null);
  const resend=leadDeliveryConfig({RESEND_API_KEY:'test',LEAD_FROM_EMAIL:'website@wonderwebstudio.com',LEAD_TO_EMAIL:'old@example.com'});
  assert.equal(resend?.provider,'resend');assert.equal(resend?.to,'info@wonderwebstudio.com');
});

test('Zoho preserves inquiry and booking details, visitor reply-to, TLS and recipient acceptance',async()=>{
  let options:SMTPTransportOptions|undefined,message:SendMailOptions|undefined,closed=0;
  const smtp:SmtpFactory=value=>{options=value;return {sendMail:async m=>{message=m;return receipt;},close:()=>{closed++;}};};
  const booking={...lead,booking:{date:addDays(dateInZone(new Date(),'Asia/Dhaka'),2),time:'14:30',timeZone:'Asia/Dhaka',durationMinutes:30 as const}};
  for(const item of [lead,booking]){
    assert.equal(await sendLead(item,leadDeliveryConfig(env)!,{smtp}),'test-receipt');
    assert.equal(message?.to,'info@wonderwebstudio.com');assert.equal(message?.replyTo,'visitor@example.com');
    assert.deepEqual(message?.from,{name:'Wonderweb Studio',address:'info@wonderwebstudio.com'});
    assert.equal(message?.text,leadText(item));assert.ok(message?.signal);
  }
  assert.equal(message?.subject,'New call request — Wonderweb Studio');assert.match(String(message?.text),/Status: REQUESTED/);
  assert.equal(options?.secure,true);assert.equal(options?.requireTLS,true);assert.equal(closed,2);
  await sendLead(lead,leadDeliveryConfig({...env,ZOHO_SMTP_PORT:'587'})!,{smtp});
  assert.equal(options?.secure,false);assert.equal(options?.requireTLS,true);
  for(const result of [{...receipt,accepted:[]},{...receipt,accepted:['someone-else@example.com']},{...receipt,messageId:''},{...receipt,rejected:['info@wonderwebstudio.com']}]){
    await assert.rejects(()=>sendLead(lead,leadDeliveryConfig(env)!,{smtp:()=>({sendMail:async()=>result,close:()=>{closed++;}})}));
  }
  let failureClosed=false;
  await assert.rejects(()=>sendLead(lead,leadDeliveryConfig(env)!,{smtp:()=>({sendMail:async()=>{throw new Error('SMTP offline');},close:()=>{failureClosed=true;}})}));
  assert.equal(failureClosed,true);
});

test('form endpoint sends through Zoho, ignores visitor recipients and retains production spam checks',async t=>{
  const keys=[...Object.keys(env),'NODE_ENV','TURNSTILE_SECRET_KEY'];
  const saved=Object.fromEntries(keys.map(key=>[key,process.env[key]]));
  let message:SendMailOptions|undefined,calls=0;
  t.mock.method(nodemailer,'createTransport',()=>({sendMail:async(m:SendMailOptions)=>{message=m;calls++;return receipt;},close:()=>{}}));
  const request=()=>new Request('https://www.wonderwebstudio.com/api/inquiry/',{method:'POST',headers:{origin:'https://www.wonderwebstudio.com','content-type':'application/json'},body:JSON.stringify({...lead,to:'injected@example.com'})});
  try{
    Object.assign(process.env,env,{NODE_ENV:'development'});delete process.env.TURNSTILE_SECRET_KEY;
    const response=await POST(request());assert.equal(response.status,200);assert.equal((await response.json()).ok,true);
    assert.equal(message?.to,'info@wonderwebstudio.com');assert.equal(calls,1);
    Object.assign(process.env,{NODE_ENV:'production'});
    assert.equal((await POST(request())).status,503);assert.equal(calls,1);
  } finally {for(const key of keys){if(saved[key]===undefined)delete process.env[key];else process.env[key]=saved[key];}}
});
