import {featuredImagePath} from './featured-path';
import {serviceGuides} from './service-guides';
/* Gemini-generated conceptual artwork. Prompts and provenance: scripts/editorial-image-prompts.json. */
export const editorialImages:Record<string,{src:string;alt:string}>={
  ...Object.fromEntries(serviceGuides.map(a=>[a.slug,{src:featuredImagePath(`/resources/${a.slug}/`),alt:`Wonderweb Studio field guide: ${a.seoTitle||a.title}`}])),
  "google-ads-cost-home-services": {
    "src": "/editorial/google-ads-cost-home-services.webp",
    "alt": "Home-service advertising budget illustrated with a house, search panel and budget dial."
  },
  "roofing-seo-cost": {
    "src": "/editorial/roofing-seo-cost.webp",
    "alt": "Roofing search planning illustrated with a roof model, magnifying glass and budget tokens."
  },
  "website-management-vs-maintenance": {
    "src": "/editorial/website-management-vs-maintenance.webp",
    "alt": "Website content management and technical maintenance shown as paired browser models."
  },
  "social-media-content-calendar": {
    "src": "/editorial/social-media-content-calendar.webp",
    "alt": "A colorful calendar, camera and content cards representing monthly social planning."
  },
  "website-redesign-checklist": {
    "src": "/editorial/website-redesign-checklist.webp",
    "alt": "Layered browser panels and design tools illustrating a website redesign checklist."
  },
  "google-ads-vs-meta-ads": {
    "src": "/editorial/google-ads-vs-meta-ads.webp",
    "alt": "Search and social advertising represented by two routes to a small storefront."
  },
  "home-service-marketing-ideas": {
    "src": "/editorial/home-service-marketing-ideas.webp",
    "alt": "Homes, a location pin and a megaphone illustrating home-service marketing ideas."
  },
  "small-business-website-trust-signals": {
    "src": "/editorial/small-business-website-trust-signals.webp",
    "alt": "A storefront, shield and checkmark representing website trust signals."
  },
  "website-conversion-improvements": {
    "src": "/editorial/website-conversion-improvements.webp",
    "alt": "A cursor and browser panels illustrating a clearer website inquiry journey."
  },
  "social-media-post-ideas-small-business": {
    "src": "/editorial/social-media-post-ideas-small-business.webp",
    "alt": "Social content cards and a camera illustrating reusable post ideas."
  },
  "questions-before-hiring-marketing-agency": {
    "src": "/editorial/questions-before-hiring-marketing-agency.webp",
    "alt": "Conversation bubbles and a project brief representing agency selection questions."
  },
  "youtube-thumbnail-design-checklist": {
    "src": "/editorial/youtube-thumbnail-design-checklist.webp",
    "alt": "A video frame, play symbol and crop tool illustrating thumbnail composition."
  },
  "choosing-roofing-seo-agency": {
    "src": "/editorial/choosing-roofing-seo-agency.webp",
    "alt": "A roofing model and checklist illustrating the selection of an SEO agency."
  },
  "hvac-seo-planning-guide": {
    "src": "/editorial/hvac-seo-planning-guide.webp",
    "alt": "An HVAC unit, airflow and search panel illustrating service-page planning."
  },
  "electrician-seo-checklist": {
    "src": "/editorial/electrician-seo-checklist.webp",
    "alt": "Electrical tools and a browser checklist illustrating electrician SEO."
  },
  "kitchen-remodeling-facebook-ads": {
    "src": "/editorial/kitchen-remodeling-facebook-ads.webp",
    "alt": "An illustrated kitchen inside a social-content card for remodeling advertising."
  },
  "roofing-facebook-ads-guide": {
    "src": "/editorial/roofing-facebook-ads-guide.webp",
    "alt": "A roof model, social-content card and camera illustrating roofing advertising."
  },
  "restoration-seo-agency-checklist": {
    "src": "/editorial/restoration-seo-agency-checklist.webp",
    "alt": "A house, protective shield and search panel illustrating restoration marketing."
  },
  "auto-repair-website-planning-guide": {
    "src": "/editorial/auto-repair-website-planning-guide.webp",
    "alt": "A car, booking calendar and browser frame illustrating auto-repair website planning."
  },
  "siding-marketing-agency-checklist": {
    "src": "/editorial/siding-marketing-agency-checklist.webp",
    "alt": "A siding-clad home and material samples illustrating a marketing brief."
  },
  "case-roofing-local-search": {
    "src": "/editorial/case-roofing-local-search.webp",
    "alt": "Illustration of a roofing neighborhood, location pin and appointment calendar."
  },
  "case-bathroom-paid-search": {
    "src": "/editorial/case-bathroom-paid-search.webp",
    "alt": "Illustration of a bathroom remodeling scene and campaign-planning elements."
  },
  "case-remodeling-lead-cost": {
    "src": "/editorial/case-remodeling-lead-cost.webp",
    "alt": "Conceptual bathroom renovation and balanced campaign elements illustrating lead-cost efficiency."
  },
  "case-remodeling-two-year-search": {
    "src": "/editorial/case-remodeling-two-year-search.webp",
    "alt": "Conceptual bathroom showroom, search lens and calendars illustrating a sustained search program."
  }
};

export const caseImageKeys:Record<string,string>={
 "roofing-local-search":"case-roofing-local-search",
 "bathroom-paid-search-efficiency":"case-bathroom-paid-search",
 "remodeling-lower-lead-cost":"case-remodeling-lead-cost",
 "remodeling-search-two-year-results":"case-remodeling-two-year-search"
};
export const caseImage=(slug:string)=>editorialImages[caseImageKeys[slug]];
