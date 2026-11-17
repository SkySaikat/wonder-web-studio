import {decisionBriefs} from '@/lib/decision-briefs';

export function ArticleDecision({slug}:{slug:string}){
 const brief=decisionBriefs[slug];if(!brief)return null;
 return <div className="article-decision"><div className="article-direct-answer"><span className="small-label">THE PRACTICAL ANSWER</span><p>{brief.answer}</p></div><h2>{brief.title}</h2><p className="decision-method">{brief.method}</p><div className="decision-table-scroll" tabIndex={0} role="region" aria-label={brief.title}><table><caption>{brief.title}</caption><thead><tr>{brief.columns.map(c=><th key={c} scope="col">{c}</th>)}</tr></thead><tbody>{brief.rows.map(([label,...cells])=><tr key={label}><th scope="row">{label}</th>{cells.map(cell=><td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div>;
}
