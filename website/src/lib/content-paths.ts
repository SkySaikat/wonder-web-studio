// Separate from SEO/content imports so metadata can advertise its alternate safely.
export const markdownPath=(path:string)=>`/content/${path==='/'?'home':path.replace(/^\//,'').replace(/\/$/,'')}.md`;
