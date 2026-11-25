import Link from 'next/link';
import {GuideLibrary} from '@/components/guide-library';
import {metadata as makeMetadata} from '@/lib/seo';
import {PageSchema} from '@/components/page-schema';
import {PageHero,CTA} from '@/components/ui';
export const metadata=makeMetadata('Free Contractor Marketing Guides','Get practical SEO and Google Ads guides, lead checklists and campaign worksheets for your home-service business. Free with business signup.','/guides/');
export default function Guides(){return <><PageSchema path="/guides/"/><PageHero eyebrow="A LITTLE KNOWLEDGE GOES A LONG WAY" title="Good ideas. Ready to put to work." description="Practical field guides for the people growing home-service businesses. Pick your trade, share a few business details, and unlock your next useful step." crumbs={[{label:'Free guides'}]}/><section className="section"><div className="container"><h2>Choose your free marketing guide</h2><GuideLibrary/><p className="proof-context">Every guide is free with business signup. Keyword worksheets should be reviewed against your actual services and search terms. Looking for ongoing support? <Link href="/services/">Explore our services.</Link></p></div></section><CTA/></>}
