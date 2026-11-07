import {Facebook, Instagram, Youtube} from 'lucide-react';

/** Decorative platform marks; the adjacent link text supplies the accessible name. */
export function SocialIcon({name}:{name:string}){
 const props={className:'social-icon','aria-hidden':true as const,size:18};
 if(name==='Facebook')return <Facebook {...props}/>;
 if(name==='Instagram')return <Instagram {...props}/>;
 if(name==='YouTube')return <Youtube {...props}/>;
 if(name==='Pinterest')return <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.64 19.32c-.04-.8-.01-1.76.2-2.62l1.29-5.45s-.32-.64-.32-1.59c0-1.49.86-2.6 1.93-2.6.91 0 1.35.69 1.35 1.52 0 .93-.59 2.32-.89 3.61-.25 1.08.54 1.95 1.61 1.95 1.93 0 3.23-2.48 3.23-5.42 0-2.24-1.51-3.92-4.26-3.92-3.1 0-5.03 2.31-5.03 4.88 0 .89.26 1.52.67 2.01.19.22.21.31.14.56l-.2.81c-.06.26-.28.35-.52.25-1.42-.58-2.08-2.13-2.08-3.87 0-2.88 2.43-6.34 7.25-6.34 3.88 0 6.43 2.81 6.43 5.82 0 3.99-2.22 6.97-5.49 6.97-1.1 0-2.14-.59-2.5-1.26l-.68 2.69c-.25.91-.73 1.82-1.17 2.53A10 10 0 1 0 12 2Z"/></svg>;
 return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7c-1.1-3.4-3.7-5-7.4-5C6.9 2 4 5.5 4 12s2.9 10 8.6 10c4.7 0 7.4-2.8 7.4-6.1 0-3.4-2.9-5.4-6.7-5.4-3 0-4.7 1.2-4.7 3.2 0 1.7 1.3 2.8 3.1 2.8 2.7 0 4.1-1.8 4.1-5.1 0-3.4-1.6-5.2-4.1-5.2-1.5 0-2.8.6-3.6 1.7"/></svg>;
}
