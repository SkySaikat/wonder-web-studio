import nodemailer, {type SMTPTransportOptions, type SMTPSentMessageInfo, type SendMailOptions} from 'nodemailer';
import {deliverLead, leadText, type Lead} from './leads';
import {site} from './site';

type ZohoConfig = {provider:'zoho'; host:string; port:465|587; user:string; password:string; to:string};
type ResendConfig = {provider:'resend'; key:string; from:string; to:string};
export type LeadDeliveryConfig = ZohoConfig | ResendConfig;
type SmtpTransport = {sendMail:(message:SendMailOptions)=>Promise<SMTPSentMessageInfo>; close:()=>void};
export type SmtpFactory = (options:SMTPTransportOptions)=>SmtpTransport;

/** The recipient is controlled by the studio, never by a submitted form or stale recipient override. */
export function leadDeliveryConfig(env:Readonly<Record<string,string|undefined>>=process.env):LeadDeliveryConfig|null {
  const provider=env.LEAD_EMAIL_PROVIDER || (env.ZOHO_SMTP_PASSWORD?'zoho':env.RESEND_API_KEY?'resend':'zoho');
  if(provider==='resend') {
    if(!env.RESEND_API_KEY||!env.LEAD_FROM_EMAIL)return null;
    return {provider,key:env.RESEND_API_KEY,from:env.LEAD_FROM_EMAIL,to:site.email};
  }
  if(provider!=='zoho')return null;
  const host=env.ZOHO_SMTP_HOST?.trim().toLowerCase();
  const user=env.ZOHO_SMTP_USER?.trim();
  const password=env.ZOHO_SMTP_PASSWORD;
  const port=Number(env.ZOHO_SMTP_PORT||465);
  if(!host||!/^([a-z0-9-]+\.)+[a-z]{2,}$/.test(host)||!user||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user)||!password?.trim()||(port!==465&&port!==587))return null;
  return {provider,host,port,user,password,to:site.email};
}

export function zohoTransportOptions(config:ZohoConfig):SMTPTransportOptions {
  return {
    host:config.host,port:config.port,secure:config.port===465,requireTLS:true,
    auth:{user:config.user,pass:config.password},tls:{minVersion:'TLSv1.2'},
    connectionTimeout:10000,greetingTimeout:10000,dnsTimeout:10000,socketTimeout:30000,
    disableFileAccess:true,disableUrlAccess:true,
  };
}

export async function sendLead(lead:Lead,config:LeadDeliveryConfig,dependencies:{smtp?:SmtpFactory;fetch?:typeof fetch}={}) {
  if(config.provider==='resend')return deliverLead(lead,config,dependencies.fetch);
  const transport=(dependencies.smtp||nodemailer.createTransport)(zohoTransportOptions(config));
  try {
    const receipt=await transport.sendMail({
      from:{name:site.name,address:config.user},to:config.to,replyTo:lead.email,
      subject:lead.booking?'New call request — Wonderweb Studio':'New website inquiry — Wonderweb Studio',
      text:leadText(lead),messageId:`<lead-${lead.requestId}@wonderwebstudio.com>`,
      // Zoho may deliver the message before its final SMTP acknowledgement arrives.
      // Keep this bounded, but allow time for that acknowledgement before reporting failure.
      signal:AbortSignal.timeout(40000),
    });
    if(!receipt.messageId||!receipt.accepted.some(address=>address.toLowerCase()===config.to.toLowerCase())||receipt.rejected.length)throw new Error('Email provider did not accept the inquiry recipient');
    return receipt.messageId;
  } finally {transport.close();}
}
