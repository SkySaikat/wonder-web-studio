import {PageHero,CTA} from '@/components/ui';
import {ResultsSection} from '@/components/home-sections';
import {metadata as makeMetadata} from '@/lib/site';
export const metadata=makeMetadata('Campaign Results — Selected Marketing Projects','Read selected roofing and bathroom remodeling campaign stories, including the approach, historical outcomes and measurement context.','/results/');
export default function Results(){return <><PageHero eyebrow="THE APPROACH BEHIND THE NUMBERS" title="Useful work. Measurable outcomes." description="Selected campaign experience from our team’s portfolio. Read what changed, what was measured and the context behind each result." crumbs={[{label:'Campaign results'}]}/><ResultsSection/><CTA/></>}
