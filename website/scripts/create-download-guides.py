"""Rebuild the owner's supplied guide material in the Wonderweb design system.
Source PDFs/extracted.json are supplied through --source; originals stay outside deployment.
"""
import argparse, json, re, os, unicodedata, csv
from pathlib import Path
from guide_covers import render_guide_cover
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, KeepTogether, KeepInFrame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from fontTools.ttLib import TTFont as FontToolsFont
from fontTools.varLib.instancer import instantiateVariableFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

parser=argparse.ArgumentParser();parser.add_argument('--source',required=True);args=parser.parse_args()
root=Path(__file__).resolve().parents[1]; out=root/'private/guides';out.mkdir(parents=True,exist_ok=True)
records=json.loads((Path(args.source)/'extracted.json').read_text(encoding='utf8'))
guide_art=json.loads((root/'src/lib/guide-artwork.json').read_text(encoding='utf8'))
font_dir=root/'scripts/fonts';font_dir.mkdir(exist_ok=True)
for name,source,weight in [
 ('Studio','@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2',400),
 ('StudioBold','@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2',600),
 ('Editorial','@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2',None)]:
 target=font_dir/(name+'.ttf')
 if not target.exists():
  font=FontToolsFont(root/'node_modules'/source)
  if weight is not None:font=instantiateVariableFont(font,{'wght':weight},inplace=True)
  font.flavor=None;font.save(target)
 pdfmetrics.registerFont(TTFont(name,str(target)))
pdfmetrics.registerFontFamily('Studio',normal='Studio',bold='StudioBold',italic='Studio',boldItalic='StudioBold')
ink=HexColor('#191621');purple=HexColor('#2310b8');paper=HexColor('#eeece9');lilac=HexColor('#dcff64')
styles={
 'body':ParagraphStyle('body',fontName='Studio',fontSize=10.5,leading=15.5,textColor=ink,spaceAfter=7),
 'h1':ParagraphStyle('h1',fontName='Editorial',fontSize=44,leading=45,textColor=ink,spaceAfter=20),
 'h2':ParagraphStyle('h2',fontName='Editorial',fontSize=30,leading=32,textColor=ink,spaceAfter=14,keepWithNext=True),
 'h3':ParagraphStyle('h3',fontName='StudioBold',fontSize=11,leading=16,textColor=purple,spaceBefore=15,spaceAfter=6,keepWithNext=True),
 'small':ParagraphStyle('small',fontName='Studio',fontSize=8,leading=11,textColor=purple,spaceAfter=10),
 'cell':ParagraphStyle('cell',fontName='Studio',fontSize=9,leading=13,textColor=ink,spaceAfter=2),
}
def clean(s):
 mapping={0xe072:'1',0xe073:'2',0xe074:'3',0xe075:'4',0xe076:'5',0xe077:'6',0xe078:'7',0xe094:'.',0xe089:'-',0xe088:'-',0xe082:')',0xe081:'(',0xe092:':',0xe083:'[',0xe084:']'}
 s=''.join(mapping.get(ord(c),c) for c in s)
 s=unicodedata.normalize('NFKC',s).replace('ˮ','"').replace('–','-').replace('—','-').replace('‑','-')
 s=re.sub(r'Built-Right Digital ·[^\n]*','',s)
 s=re.sub(r'^\d+\s*$', '',s,flags=re.M)
 return s.replace('�',' / ').strip()
def p(s,style='body'):return Paragraph(escape(s),styles[style])
def footer(c,doc):
 c.saveState();c.setFillColor(paper);c.rect(0,0,612,792,fill=1,stroke=0)
 logo=root/'public/brand/guide-logo.png';c.drawImage(str(logo),48,742,width=138,height=40,mask='auto',preserveAspectRatio=True)
 c.setFillColor(purple);c.rect(0,724,612,3,fill=1,stroke=0)
 c.setFillColor(HexColor('#ff8a24'));c.rect(48,724,90,3,fill=1,stroke=0)
 c.setFillColor(ink);c.setFont('Studio',8);c.drawString(48,28,'WONDERWEB STUDIO / PUT GOOD IDEAS TO WORK')
 c.setFillColor(purple);c.circle(552,31,13,fill=1,stroke=0)
 c.setFillColor(HexColor('#ffffff'));c.setFont('StudioBold',8);c.drawCentredString(552,28,str(doc.page))
 c.restoreState()

def cover(c,doc):
 c.saveState();c.setFillColor(paper);c.rect(0,0,612,792,fill=1,stroke=0)
 art=slug
 c.drawImage(ImageReader(str(root/'scripts/pdf-art'/ (art+'.jpg'))),0,-15,width=612,height=459)
 c.setFillColor(paper);c.rect(0,446,612,346,fill=1,stroke=0)
 c.drawImage(str(root/'public/brand/guide-logo.png'),48,727,width=170,height=49,mask='auto',preserveAspectRatio=True)
 c.setFillColor(purple);c.setFont('StudioBold',9);c.drawString(48,693,industries[trade].upper()+' / PRACTICAL FIELD GUIDES')
 heading=Paragraph(escape(label[0].upper()+label[1:]+'.'),ParagraphStyle('cover',fontName='Editorial',fontSize=59,leading=57,textColor=ink))
 _,height=heading.wrap(490,150);heading.drawOn(c,48,658-height)
 deck=Paragraph(escape(subtitle),ParagraphStyle('deck',fontName='Studio',fontSize=14,leading=20,textColor=ink))
 _,dh=deck.wrap(420,70);deck.drawOn(c,48,650-height-dh-20)
 c.setFillColor(lilac);c.circle(510,446,52,fill=1,stroke=0)
 c.setFillColor(ink);c.setFont('StudioBold',9)
 for y,line in [(458,'MAKE THE'),(444,'WONDER'),(430,'HAPPEN.')]:c.drawCentredString(510,y,line)
 c.setFillColor(HexColor('#ffffff'));c.setFont('StudioBold',8);c.drawString(48,24,'WONDERWEBSTUDIO.COM');c.drawRightString(564,24,'2026 EDITION')
 c.restoreState()

def table(rows,widths):
 t=Table([[p(str(cell),'cell') for cell in row] for row in rows],colWidths=widths,repeatRows=1,hAlign='LEFT')
 t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),lilac),('ROWBACKGROUNDS',(0,1),(-1,-1),[HexColor('#fffdf8'),HexColor('#e8e6e0')]),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),11),('RIGHTPADDING',(0,0),(-1,-1),11),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8)]));return t
industries={'roofing':'Roofing','plumbing':'Plumbing','electrician':'Electrical','general-contractor':'General contractor'}
types={'seo-guide-v2':('SEO field guide','Build a stronger local search presence.'),'google-ads-guide-v2':('Google Ads field guide','Connect the right searches with the right jobs.'),'free-report-v2':('Lead journey checklist','Find the gaps before you buy more leads.'),'google-ads-scorecard':('Google Ads scorecard','Ten checks. A clearer campaign.'),'negative-keyword-vault':('Negative keyword workbook','Make your search budget more deliberate.')}
catalog=[]
for record in records:
 filename=record['file'];trade=next(t for t in industries if filename.startswith('built-right-'+t+'-'));kind=next(k for k in types if filename.endswith(k+'.pdf'))
 label,subtitle=types[kind];title=industries[trade]+' '+label;slug=trade+'-'+kind.replace('-v2','');text=clean('\n'.join(record['pages']))
 story=[Spacer(1,1),PageBreak()]

 if kind=='negative-keyword-vault':
  story += [p('Review before you exclude.','h2'),p('A negative keyword prevents an ad from appearing for matching searches. Start with your actual search terms and the work you do. This workbook is a review list: no entry is automatically safe for every account.'),p('Match types','h3'),table([['Type','How to use it'],['Broad','All negative-keyword words must be present; their order can vary.'],['Phrase','The phrase must appear in the same order. Keep quotation marks when importing.'],['Exact','Only the exact search is excluded. Keep square brackets when importing.']],[90,426]),Spacer(1,16),p('Negative keywords do not expand to all close variants. Review the terms appearing in your account, including relevant singular and plural forms. Avoid broad exclusions of words such as free, cost, reviews or your service type without checking how customers use them.'),p('Add a reviewed list','h3'),p('Open your account’s negative keyword or exclusion-list controls. Create a clearly named list, add only reviewed terms with the intended match type, and apply it to the appropriate Search campaigns. Check brand and service-specific campaigns separately. Record the date and inspect the impact before adding more.'),p('Official reference: https://support.google.com/google-ads/answer/2453972','small'),PageBreak(),p('Your keyword review list','h2'),p('Retain a term if it describes work you sell or a relevant customer question. Treat every term below as a candidate to review against your own business.')]
  terms=re.findall(r'^(.+?)\s+(Broad|Phrase|Exact)\s+(Safe to block|Check first)\s*$',text,re.M)
  rows=[['Candidate','Match','Review note']]+[[k,m,'Check service fit' if risk=='Check first' else 'Check actual intent'] for k,m,risk in terms]
  story += [p('Review recent search terms each week. Log changes and qualified inquiries; check the effect before excluding more terms. The companion CSV unlocks with this guide on our guides page.'),table(rows,[260,70,186])]
  with (out/(slug+'.csv')).open('w',newline='',encoding='utf-8-sig') as f:
   w=csv.writer(f);w.writerow(['Candidate','Match type','Review before applying']);w.writerows([k,m,'Check actual search intent and service fit'] for k,m,_ in terms)

 elif kind=='google-ads-scorecard':
  checks=[('Define the jobs you want','Write down priority services, excluded jobs and actual coverage.'),('Count real inquiries','Check what every conversion action measures. Separate clicks from accepted calls and forms.'),('Test every form','Send a test request and confirm it reaches the responsible person.'),('Test the ad phone number','Call during staffed and unstaffed hours. Check routing, voicemail and callbacks.'),('Assign missed-call follow-up','Give one person ownership and review the recent callback log.'),('Review search terms','Look for job seekers, DIY and unrelated services; evaluate negatives before applying them.'),('Verify geographic targeting','Check the location settings and where actual inquiries originate.'),('Match the page to the service','Send a service-specific ad to a useful page about that same service.'),('Check every claim','Confirm hours, offers, certifications and availability are accurate today.'),('Connect spend to sales','Review qualified leads, estimates and sold jobs. Include management and other costs in total acquisition cost.')]
  story += [p('Ten checks you can verify.','h2'),p('Give yourself one point for each check supported by evidence. An unknown is a follow-up task. This is an operational checklist, not a prediction of campaign performance.')]
  for i,(h,b) in enumerate(checks):story += [KeepTogether([p(str(i+1)+'. '+h,'h3'),p(b),p('Pass [   ]   Needs work [   ]   Owner: __________________','small')])]
  story += [Spacer(1,16),p('Your score: ____ / 10','h2'),p('9-10: keep checking monthly. 6-8: assign the gaps and review this month. 0-5: investigate tracking, routing and targeting before increasing spend.'),p('Two-minute call test','h3'),p('Call the advertised number with a realistic service inquiry. Record whether it was answered, whether contact details were collected and whether the next step was clear. Repeat outside office hours without pretending emergency service is available.'),p('Your first three actions','h3'),table([['Action','Owner / review date'],['1.',''],['2.',''],['3.','']],[350,166])]
 else:
  # The source uses numbered FIX/CHECK sections. Keep its practical substance,
  # replace promotional material, and reflow each section into readable typography.
  body=text.split('FROM THE BUILT-RIGHT TEAM')[0]
  chunks=re.split(r'\n(?:FIX|CHECK) (\d+) OF (\d+)\s*',body)
  if len(chunks)<4:raise ValueError('Cannot locate source sections: '+filename)
  for ix in range(1,len(chunks),3):
   number,total,chunk=chunks[ix:ix+3]
   if ix>1:story.append(PageBreak())
   chapter_start=len(story)
   chunk=chunk.split('FREE BONUS DOWNLOAD')[0].split('PUT IT TOGETHER')[0]
   lines=chunk.strip().splitlines();timing=lines.pop(0) if lines and lines[0].startswith('Time needed') else ''
   content='\n'.join(lines)
   boundary=re.search(r'\n(What to do|What to look at)\n',content)
   if not boundary:raise ValueError('Cannot locate source instructions: '+filename+' '+number)
   heading=re.sub(r'^(?:person\s+|[1-9]\s+(?=[A-Z]))', '', ' '.join(content[:boundary.start()].split()));rest=content[boundary.end():]
   story += [p(('CHECK' if kind=='free-report-v2' else 'ACTION')+' '+number+' / '+total,'small'),p(heading,'h2')]
   if timing:story.append(p(timing,'small'))
   # Preserve grouped source subsections, without splitting sentences at PDF line wraps.
   parts=re.split(r'\n(Why it matters|How to check you did it|You pass if|Copy-and-paste[^\n]*|Seasonal tip[^\n]*|Sources?:[^\n]*)\n?',rest)
   def body_paragraphs(value):
    value=value.replace('Google charges you for every click.','Search campaigns generally charge for clicks.').replace('Google also uses the phone version of your site to decide where you rank.','Google primarily uses the mobile version of your content for indexing and ranking.')
    value=re.sub(r'We\x27ve seen [^.]+\.', 'Missed inquiries can reduce the value of marketing spend.',value)
    value=re.sub(r'\b(?:Google Sheet|Sheet)\b','lead worksheet',value)
    items=re.split(r'\n(?=\d\.\s)',value)
    for item in items:
     flat=' '.join(item.split())
     if flat:story.append(p(flat))
   story.append(p('Put it into practice','h3'));body_paragraphs(parts[0])
   for j in range(1,len(parts),2):
    head=parts[j];value=parts[j+1] if j+1<len(parts) else ''
    if head.startswith(('Source:','Sources:')):story.append(p(head,'small'))
    else:story.append(p(head,'h3'));body_paragraphs(value)
   story += [Spacer(1,20),p('Make it your next move.','h3'),table([['Your observation','Next action / owner'],['\n\n','\n\n'],['Review date: __________________','Outcome to check: __________________']],[258,258])]
   chapter=story[chapter_start:];story[chapter_start:]=[KeepInFrame(516,620,chapter,mode='shrink')]
 story += [PageBreak(),p('Your next chapter.','h1'),p('Turn the checklist into a clear plan.','h2'),p('Pick the most useful change, assign an owner and agree how you will check it. Bring your findings to Wonderweb Studio if you want help connecting the website, search campaigns and follow-up.'),Spacer(1,15),p('A conversation first. Your scope, agreed together.','h3'),Paragraph('<link href="https://www.wonderwebstudio.com/contact/" color="#2310b8">Start a conversation at wonderwebstudio.com/contact/</link>',styles['body']),p('info@wonderwebstudio.com'),p('More free tools: wonderwebstudio.com/guides/','small'),Spacer(1,25),p('Useful official references','h3')]
 for url in ['https://support.google.com/business/answer/3038177','https://support.google.com/google-ads/answer/2453972','https://support.google.com/google-ads/answer/2472708','https://developers.google.com/search/docs/fundamentals/seo-starter-guide']:
  story.append(Paragraph('<link href="'+url+'">'+url+'</link>',styles['small']))
 doc=SimpleDocTemplate(str(out/(slug+'.pdf')),pagesize=(612,792),rightMargin=48,leftMargin=48,topMargin=90,bottomMargin=62,title=title,author='Wonderweb Studio',subject=subtitle+' A practical '+industries[trade].lower()+' marketing guide.',keywords='Wonderweb Studio, '+industries[trade]+', '+label);doc.build(story,onFirstPage=cover,onLaterPages=footer)
 check=PdfReader(out/(slug+'.pdf')); extracted=' '.join(pg.extract_text() for pg in check.pages)
 assert 'Built-Right' not in extracted and 'calendly' not in extracted and '4.9/5' not in extracted
 catalog.append({'slug':slug,'industry':industries[trade],'trade':trade,'title':title,'category':label,'description':subtitle,'pages':len(check.pages),'pdf':'/api/guides/'+slug+'/','cover':render_guide_cover(root,slug),'coverAlt':title+' cover: '+guide_art[slug]['alt'],'artwork':guide_art[slug]['src'],**({'csv':'/api/guides/'+slug+'/?format=csv'} if kind=='negative-keyword-vault' else {})})
(root/'src/data/download-guides.json').write_text(json.dumps(catalog,indent=2)+'\n',encoding='utf8')
print('Created',len(catalog),'guides;',sum(x['pages'] for x in catalog),'pages')
