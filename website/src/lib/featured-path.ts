/** Stable, crawlable source asset. All public pages receive their own cover URL. */
export const featuredImagePath=(path:string)=>`/featured/${path==='/'?'home':path.replace(/^\//,'').replace(/\/$/,'').replaceAll('/','--')}-v2.webp`;
