import { z } from 'zod';
import {validBookingDate,validTimeZone} from './booking';

const bookingSchema=z.object({
  date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time:z.string().regex(/^(?:[01]\d|2[0-3]):(?:00|30)$/),
  timeZone:z.string().max(100).refine(validTimeZone),
  durationMinutes:z.literal(30),
}).refine(value=>validBookingDate(value.date,value.timeZone),{message:'Choose a date from tomorrow through the next 90 days.'});

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  website: z.string().trim().max(300).default(''),
  service: z.string().trim().min(2).max(100),
  budget: z.string().trim().max(80).default(''),
  message: z.string().trim().min(15).max(4000),
  consent: z.literal(true),
  companyFax: z.string().max(200).default(''),
  token: z.string().max(4096).default(''),
  requestId: z.uuid(),
  booking: bookingSchema.optional(),
  source: z.string().max(250).default('/contact/'),
  utm: z.record(z.string(),z.string().max(120)).refine(v=>Object.keys(v).every(k=>['utm_source','utm_medium','utm_campaign'].includes(k))).default({}),
});
export type Lead = z.infer<typeof leadSchema>;
export function leadText(lead: Lead){
  return [lead.booking?'New Wonderweb Studio call request':'New Wonderweb Studio inquiry', `Name: ${lead.name}`, `Email: ${lead.email}`, `Business website: ${lead.website || 'Not supplied'}`, `Service: ${lead.service}`, `Budget: ${lead.budget || 'Not supplied'}`, ...(lead.booking?['',`Preferred date: ${lead.booking.date}`,`Preferred time: ${lead.booking.time}`,`Time zone: ${lead.booking.timeZone}`,`Duration: ${lead.booking.durationMinutes} minutes`,'Status: REQUESTED - confirm availability and send the meeting details by email. No calendar reservation has been created.']:[]), '', 'Project details:', lead.message, '', `Source path: ${lead.source}`, ...Object.entries(lead.utm).map(([k,v])=>`${k}: ${v}`), `Reference: ${lead.requestId}`, 'Contact consent: given for this inquiry.'].join('\n');
}
export async function deliverLead(lead: Lead, config:{key:string;from:string;to:string}, transport:typeof fetch=fetch){
  const response=await transport('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${config.key}`,'Content-Type':'application/json','Idempotency-Key':`lead-${lead.requestId}`},body:JSON.stringify({from:config.from,to:[config.to],reply_to:lead.email,subject:lead.booking?'New call request - Wonderweb Studio':'New website inquiry - Wonderweb Studio',text:leadText(lead)}),signal:AbortSignal.timeout(12000)});
  if(!response.ok) throw new Error('Email provider did not accept the inquiry');
  const result=await response.json();
  if(typeof result.id!=='string'||!result.id)throw new Error('Missing email receipt');
  return result.id as string;
}
