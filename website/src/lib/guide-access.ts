import {createHmac,timingSafeEqual} from 'node:crypto';

export const guideAccessSeconds=60*60*24;
export const guideCookieName=(slug:string)=>`ww-guide-${slug}`;
export function guideSigningKey(env:Readonly<Record<string,string|undefined>>=process.env){
  return env.GUIDE_DOWNLOAD_SECRET||env.TURNSTILE_SECRET_KEY||env.ZOHO_SMTP_PASSWORD||env.RESEND_API_KEY||'';
}
export function createGuideGrant(slug:string,key:string,now=Date.now()){
  if(!key)throw new Error('Guide access is not configured');
  const expires=Math.floor(now/1000)+guideAccessSeconds;
  const signature=createHmac('sha256',key).update(`${slug}:${expires}`).digest('base64url');
  return `${expires}.${signature}`;
}
export function verifyGuideGrant(slug:string,token:string,key:string,now=Date.now()){
  if(!key)return false;
  const match=/^(\d{10})\.([A-Za-z0-9_-]{43})$/.exec(token);
  if(!match)return false;
  const expires=Number(match[1]);
  if(expires<=Math.floor(now/1000)||expires>Math.floor(now/1000)+guideAccessSeconds)return false;
  const expected=createHmac('sha256',key).update(`${slug}:${expires}`).digest('base64url');
  return timingSafeEqual(Buffer.from(expected),Buffer.from(match[2]));
}
