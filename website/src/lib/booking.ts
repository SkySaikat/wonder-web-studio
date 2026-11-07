export type BookingRequest={date:string;time:string;timeZone:string;durationMinutes:30};
export function dateInZone(now:Date,timeZone:string){const parts=new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);return ['year','month','day'].map(type=>parts.find(p=>p.type===type)?.value).join('-')}
export function addDays(date:string,days:number){const d=new Date(`${date}T12:00:00Z`);d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10)}
export function validTimeZone(value:string){try{new Intl.DateTimeFormat('en',{timeZone:value}).format();return true}catch{return false}}
export function validBookingDate(date:string,timeZone:string,now=new Date()){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!validTimeZone(timeZone))return false;
 const parsed=new Date(`${date}T12:00:00Z`);if(!Number.isFinite(parsed.getTime())||parsed.toISOString().slice(0,10)!==date)return false;
 const today=dateInZone(now,timeZone);return date>=addDays(today,1)&&date<=addDays(today,90);
}
export function bookingDateLabel(date:string){return new Intl.DateTimeFormat('en',{weekday:'short',month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T12:00:00Z`))}
export function timeLabel(time:string){const[h,m]=time.split(':').map(Number);return `${h%12||12}:${String(m).padStart(2,'0')} ${h<12?'AM':'PM'}`}
