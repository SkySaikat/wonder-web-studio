// Only verified editorial dates belong in content. Never use build time or random dates.
export function formatEditorialDate(value:string){
 const date=new Date(`${value}T00:00:00Z`);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value)||Number.isNaN(date.getTime())||date.toISOString().slice(0,10)!==value)throw new Error(`Invalid editorial date: ${value}`);
 return new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(date);
}
