import {loadEnvConfig} from '@next/env';
import nodemailer from 'nodemailer';
import {leadDeliveryConfig,zohoTransportOptions} from '../src/lib/lead-delivery';

loadEnvConfig(process.cwd());
async function check(){
  const config=leadDeliveryConfig();
  if(!config){console.error('Mail is not configured. Check the provider, SMTP host, username and app password in .env.local.');process.exitCode=1;return;}
  console.log(`Recipient: ${config.to}. Provider: ${config.provider}.`);
  if(config.provider!=='zoho'){console.log('Resend configuration is present. This check does not send mail or verify inbox delivery.');return;}
  const transport=nodemailer.createTransport(zohoTransportOptions(config));
  try{await transport.verify();console.log('Zoho SMTP connection and authentication succeeded. No email was sent; inbox receipt still requires a test submission.');}
  catch(error){const code=(error as {code?:string}).code;console.error(`SMTP verification failed${code?` (${code})`:''}. Check Zoho server settings, SMTP access and the app password.`);process.exitCode=1;}
  finally{transport.close();}
}
void check();
