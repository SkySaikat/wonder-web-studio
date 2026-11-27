"""One-off SEO cleanup (28 Nov 2026).

1. Rewrites templated "Choosing ... - A Practical Guide" headlines into natural titles.
2. Replaces truncated "Title. First words…" summaries with complete-sentence meta descriptions.
3. Removes placeholder (555) phone numbers from migrated content.

Run from the website folder: python scripts/seo-cleanup-2026-11-28.py [--dry]
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src/data/migrated'
DRY = '--dry' in sys.argv

BOILERPLATE = ('Use this guide to compare scope', 'The focus is on evaluation criteria')
TRADE_FIXES = [
    (r'\bRemodeling company\b', 'Remodeling Companies'), (r'\bRoofing company\b', 'Roofing Companies'),
    (r'\bSiding company\b', 'Siding Companies'), (r'\bBathroom Remodeling company\b', 'Bathroom Remodeling Companies'),
    (r'\bagency company\b', 'Agency'), (r'\bcompany and agency\b', 'Company'), (r'\bCompany Options\b', 'Company'),
]


def tidy(t: str) -> str:
    t = re.sub(r'\s+-\s+A Practical Guide$', '', t)
    t = re.sub(r'\s+(to Dominate (Your )?Local (Market|Feeds)|to Book More Jobs|for Booked Jobs)\b', '', t)
    t = re.sub(r'\s*\b(in )?20(26|27)( Pricing Guide)?\b', '', t)
    t = re.sub(r'\s+Guide$', '', t) if 'Cost' in t else t
    for pat, rep in TRADE_FIXES:
        t = re.sub(pat, rep, t)
    t = re.sub(r'\bagency\b', 'Agency', t)
    t = re.sub(r'\bcompany\b', 'Company', t)
    t = re.sub(r'\bpartner\b', 'Partner', t)
    return re.sub(r'\s{2,}', ' ', t).strip(' -?') + ('?' if t.rstrip().endswith('?') else '')


def clean_title(title: str) -> str:
    if not title.startswith('Choosing '):
        return title
    t = title[len('Choosing '):]
    t = re.sub(r'\s+-\s+A Practical Guide$', '', t)
    m = re.match(r'How Much Does (.+?) Cost for (.+?)\?', t)
    if m:
        return tidy(f'How Much Does {m.group(1)} Cost for {m.group(2)}?')
    if re.search(r'Best Practices|Tips|Tools|Platforms', t) or re.search(r'\bCost\b', t):
        out = tidy(t)
        if re.search(r'Tips and Top Agency|Cost & Top Agency', out):
            out = out.replace(' and Top Agency', '').replace(' & Top Agency', '')
        out = out.replace('Digital Agency Core Cost for Roofers', 'Digital Marketing Costs for Roofers')
        if out.startswith('Cost of '):
            out = out[len('Cost of '):] + ' Cost'
        return out
    if re.match(r'SEO for ', t):
        return tidy('How to Choose an ' + t.replace('SEO for ', 'SEO Company for '))
    core = tidy(t)
    article = 'an' if re.match(r'(HVAC|SEO|Electrician|Email|[AEIOU])', core) else 'a'
    return f'How to Choose {article} {core}'


REFERENTIAL = ('This ', 'These ', 'That ', 'Those ', 'Each ', 'It ', 'They ', 'You know', 'Here ', 'Together', 'So ', 'And ', 'But ')
STOP = {'how', 'to', 'choose', 'a', 'an', 'the', 'for', 'and', 'of', 'in', 'what', 'does', 'much', 'cost', 'best', 'tips',
        'guide', 'agency', 'company', 'companies', 'services', 'marketing', 'your', 'with', 'practices', 'management'}


def sentences(text: str):
    for para in text.split(chr(10)):
        para = para.strip()
        if len(para) < 70 or para.startswith(BOILERPLATE):
            continue
        for s in re.split(r'(?<=[.!])\s+', para):
            s = re.sub(r'\s+([?.,!])', lambda m: m.group(1), s.strip())
            if 50 <= len(s) <= 150 and s[-1] in '.!' and not s.startswith(REFERENTIAL) and not s.startswith(BOILERPLATE):
                yield s


def describe(title: str, kind: str, text: str, limit=158) -> str:
    title = title.rstrip('?') if not title.endswith('?') else title
    keys = {w for w in re.findall(r'[a-z]+', title.lower()) if w not in STOP and len(w) > 2}
    cands = list(sentences(text))[:12]
    hit = [c for c in cands if keys & set(re.findall(r'[a-z]+', c.lower()))]
    for c in hit + cands:
        joined = f'{title}: {c}' if not title.endswith('?') else f'{title} {c}'
        if len(joined) <= limit:
            return joined
    for c in hit:
        return c
    if kind == 'solutions':
        return f'{title} from Wonderweb Studio: websites, SEO and ads planned around the jobs you want, with clear scope and lead tracking.'[:limit]
    return f'{title}: practical steps, costs and questions to ask, written for U.S. contractors and home-service business owners.'[:limit]


SHORT = [('Conversion Rate Optimization', 'CRO'), ('Google Business Profile Management', 'Google Business Profile'),
         ('Remodeling Companies', 'Remodelers'), ('Roofing Companies', 'Roofers'), ('Digital Marketing Agency Core Services Cost', 'Marketing Costs'),
         ('Website Build Tools and Technology', 'Website Build Tools'), ('Google Local Services Ads', 'Local Services Ads'),
         ('Call Tracking and Attribution', 'Call Tracking'), ('Remodeling Contractors', 'Remodelers')]


def seo_short(title: str) -> str:
    for a, b in SHORT:
        if len(title) <= 60:
            break
        title = title.replace(a, b)
    return title


PHONE = re.compile(r'\(555\)\s?\d{3}-\d{4}')


def main():
    index = json.loads((DATA / 'index.json').read_text(encoding='utf-8'))
    seo_titles_path = ROOT / 'src/data/migration-seo-titles.json'
    seo_titles = json.loads(seo_titles_path.read_text(encoding='utf-8'))
    changed_titles, changed_desc, phones = [], 0, 0
    for e in index:
        f = DATA / f"{e['kind']}-{e['id']}.json"
        doc = json.loads(f.read_text(encoding='utf-8'))
        new_title = clean_title(e['title'])
        if new_title != e['title']:
            changed_titles.append((e['path'], e['title'], new_title))
            e['title'] = doc['title'] = new_title
            short = seo_short(new_title)
            if short != new_title:
                seo_titles[e['path']] = short
            elif e['path'] in seo_titles:
                del seo_titles[e['path']]
        if e['summary'].endswith('…') or e['summary'].endswith('...'):
            d = describe(seo_titles.get(e['path']) or e['title'], e['kind'], doc.get('text', ''))
            e['summary'] = doc['summary'] = d
            changed_desc += 1
        for key in ('html', 'text', 'markdown'):
            if isinstance(doc.get(key), str) and PHONE.search(doc[key]):
                phones += len(PHONE.findall(doc[key]))
                doc[key] = PHONE.sub('your main business number', doc[key])
        if not DRY:
            f.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    for path, old, new in changed_titles:
        print(f'{len(new):3} {new}  ->  {seo_titles.get(path, "")}')
    import random
    random.seed(1)
    for e in random.sample(index, 14):
        print('DESC', len(e['summary']), e['summary'])
    print(f'titles: {len(changed_titles)}  descriptions: {changed_desc}  placeholder phones: {phones}')
    if not DRY:
        (DATA / 'index.json').write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        seo_titles_path.write_text(json.dumps(seo_titles, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
