"""Reproducible original Wonderweb launch motion graphics and instrumental audio."""
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageOps
from fontTools.ttLib import TTFont
import numpy as np
import math,subprocess,wave
import imageio_ffmpeg
ROOT=Path(__file__).resolve().parents[2]; OUT=ROOT/'social-launch'; SRC=OUT/'sources'
W,H,FPS,DURATION=1080,1920,30,20
CREAM='#f7f2e9'; INK='#201729'; LILAC='#e0cbfa'; LIME='#dafa71'
for name,source in [('sans','website/node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2'),('serif','website/node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2')]:
 font=TTFont(ROOT/source);font.flavor=None;font.save(SRC/f'{name}.ttf')
font_cache={}
def font(size,serif=False):
 key=(size,serif)
 if key not in font_cache:
  f=ImageFont.truetype(str(SRC/('serif.ttf' if serif else 'sans.ttf')),size)
  if not serif:
   try:f.set_variation_by_axes([550])
   except Exception:pass
  font_cache[key]=f
 return font_cache[key]
def text(im,xy,words,size=60,color=INK,serif=False,anchor=None):
 ImageDraw.Draw(im).text(xy,words,font=font(size,serif),fill=color,anchor=anchor,stroke_width=0)
def rr(im,box,fill,r=28,outline=None,width=2):ImageDraw.Draw(im).rounded_rectangle(tuple(map(int,box)),radius=r,fill=fill,outline=outline,width=width)
def arrow(im,x,y,size=30,color=INK):
 d=ImageDraw.Draw(im);d.line([(x,y+size),(x+size,y)],fill=color,width=5);d.line([(x,y),(x+size,y),(x+size,y+size)],fill=color,width=5)
def ease(t):return 1-(1-max(0,min(1,t)))**3
def image_round(im,pic,box,radius=35):
 x,y,w,h=map(int,box);p=ImageOps.fit(pic,(w,h),method=Image.Resampling.LANCZOS);mask=Image.new('L',(w,h));ImageDraw.Draw(mask).rounded_rectangle((0,0,w,h),radius,fill=255);im.paste(p,(x,y),mask)
flow=Image.open(ROOT/'website/public/art/wonder-color-flow.webp').convert('RGB')
warm=Image.open(ROOT/'website/public/art/wonder-citrus-flow.webp').convert('RGB')
flow_full=ImageOps.fit(flow,(1200,2100));warm_full=ImageOps.fit(warm,(1200,2100))
logo=Image.open(SRC/'logo.png').convert('RGBA');logo.thumbnail((350,110))
def bg(t,dark=False):
 if dark:
  x=int(50+35*math.sin(t*.35));y=int(70+50*math.cos(t*.25));im=flow_full.crop((x,y,x+W,y+H)).convert('RGBA');im=Image.alpha_composite(im,Image.new('RGBA',(W,H),(19,7,44,85)))
 else:im=Image.new('RGBA',(W,H),CREAM)
 return im

def header(im,scene,dark=False):
 if dark:
  rr(im,(86,165,465,292),'#fff8ef',22);im.alpha_composite(logo,(100,178))
 else:im.alpha_composite(logo,(90,180))
 text(im,(950,208),f'0{scene+1} / 04',24,'#ffffff' if dark else '#75667f',anchor='ra')
 text(im,(90,1695),'WONDERWEB STUDIO',23,'#ffffff' if dark else '#695772')
 text(im,(90,1740),'wonderwebstudio.com',37,'#ffffff' if dark else INK)
 # Small progress line safely above platform interface overlays.
 d=ImageDraw.Draw(im);d.line((90,1630,950,1630),fill='#ffffff55' if dark else '#d9cddf',width=2)
 for i in range(4):rr(im,(90+i*56,1592,126+i*56,1598),('#e2fc72' if dark else '#713fe3') if i==scene else ('#ffffff55' if dark else '#d7cbdc'),3)

def scene_frame(scene,u,t):
 im=bg(t,scene==3);header(im,scene,scene==3)
 dy=int(55*(1-ease(u/.7)))
 if scene==0:
  rr(im,(90,350+dy,385,412+dy),INK,31);text(im,(238,360+dy),'NEW WEBSITE',25,'white',anchor='ma')
  text(im,(84,470+dy),'A new home.',116)
  text(im,(88,610+dy),'A little more',93)
  text(im,(80,700+dy),'wonder.',180,serif=True)
  yy=985+int(75*(1-ease((u-.25)/.9)))
  image_round(im,flow,(90,yy,900,490),40)
  rr(im,(90,yy,990,yy+62),'#ffffff',30)
  for j,col in enumerate(['#ff644f','#f5ca44','#c5e978']):ImageDraw.Draw(im).ellipse((122+j*31,yy+23,136+j*31,yy+37),fill=col)
  text(im,(245,yy+19),'wonderwebstudio.com',24,'#665373')
  text(im,(142,yy+175),'Design.',90,'white');text(im,(142,yy+272),'Build. Grow.',90,'white')
  arrow(im,875,yy+370,43,'white')
 elif scene==1:
  text(im,(85,390+dy),'Your next',123)
  text(im,(80,515+dy),'digital team.',146,serif=True)
  text(im,(90,708),'One studio. Built around your business.',38)
  labels=[('Websites','#f8f2e9'),('SEO',LIME),('Google &','#e0cbfa'),('Social media','#ff8ecf'),('Content',LIME),('Creative','#f8f2e9')]
  rr(im,(70,820,1010,1495),INK,45)
  for i,(label,col) in enumerate(labels):
   shift=int(70*(1-ease((u-.25-i*.12)/.65)));x=96+(i%2)*452;y=855+(i//2)*205+shift
   rr(im,(x,y,x+434,y+180),col,26)
   text(im,(x+30,y+35),label,43)
   if i==2:text(im,(x+30,y+88),'Meta Ads',43)
   else:arrow(im,x+358,y+113,30)
 elif scene==2:
  text(im,(85,385+dy),'Built for your',107)
  text(im,(80,507+dy),'next chapter.',146,serif=True)
  image_round(im,warm,(85,755,910,755),45)
  # Dark translucent foreground keeps every line readable over the art.
  overlay=Image.new('RGBA',(W,H));rr(overlay,(115,795,965,1468),(27,13,46,220),35);im=Image.alpha_composite(im,overlay)
  entries=[('Explore our work.','Websites, campaigns & creative.'),('Find your fit.','Services shaped around your business.'),('Let’s talk.','Request an introductory call.')]
  for i,(head,sub) in enumerate(entries):
   y=855+i*190+int(30*(1-ease((u-.25-i*.15)/.6)))
   text(im,(155,y),head,57,'white');text(im,(155,y+78),sub,29,'#e0d7ea');arrow(im,870,y+20,32,LIME)
   if i<2:ImageDraw.Draw(im).line((155,y+145,925,y+145),fill='#735c85',width=2)
 elif scene==3:
  rr(im,(90,365+dy,540,433+dy),'#e2fc72',34);text(im,(315,379+dy),'OUR NEW WEBSITE IS HERE',24,INK,anchor='ma')
  text(im,(85,500+dy),'Good things',120,'white')
  text(im,(80,635+dy),'start here.',174,'#fff8df',serif=True)
  text(im,(92,905),'Websites. Marketing. Creative.',43,'white')
  text(im,(92,973),'A little wonder for your business.',36,'#fff5ef')
  rr(im,(85,1135,995,1305),'#fff9f0',30)
  text(im,(125,1160),'EXPLORE THE NEW WEBSITE',24,'#61506e')
  text(im,(125,1207),'wonderwebstudio.com',55,INK)
  arrow(im,907,1193,35,INK)
  text(im,(92,1385),'Discover the work. Book a conversation.',35,'white')
 return im.convert('RGB')

# Four original chords, soft arpeggios and understated percussion (no third-party audio).
sr=48000;n=sr*DURATION;audio=np.zeros(n,dtype=np.float64);rng=np.random.default_rng(20261109)
chords=[[261.63,329.63,392],[220,261.63,329.63],[174.61,220,261.63],[196,246.94,293.66]]
for ci,chord in enumerate(chords):
 start=ci*5;tt=np.arange(sr*5)/sr;env=np.minimum(tt/.5,1)*np.minimum((5-tt)/.65,1)
 pad=sum(np.sin(2*np.pi*f*tt+.15*np.sin(tt*.9)) for f in chord)/3
 audio[int(start*sr):int((start+5)*sr)]+=pad*env*.1
for k in range(40):
 start=k*.5;chord=chords[min(3,int(start/5))];f=chord[k%3]*2;tt=np.arange(int(sr*.8))/sr;note=(np.sin(2*np.pi*f*tt)+.2*np.sin(2*np.pi*2*f*tt))*np.exp(-tt*7)*np.minimum(tt/.008,1)*.1
 idx=int(start*sr);end=min(n,idx+len(note));audio[idx:end]+=note[:end-idx]
for k in range(32):
 start=k*.6;tt=np.arange(int(sr*.3))/sr;kick=np.sin(2*np.pi*(48*tt+6*(1-np.exp(-tt*22))))*np.exp(-tt*20)*.15;idx=int(start*sr);end=min(n,idx+len(kick));audio[idx:end]+=kick[:end-idx]
 if k%2:
  noise=rng.normal(0,1,len(tt));noise=np.concatenate(([0],np.diff(noise)));snare=noise*np.exp(-tt*35)*.012;audio[idx:end]+=snare[:end-idx]
audio*=np.minimum(np.arange(n)/sr/.6,1)*np.minimum((n-np.arange(n))/sr/.9,1)
audio=np.clip(audio,-.8,.8)
with wave.open(str(SRC/'original-launch-music.wav'),'wb') as wav:wav.setnchannels(1);wav.setsampwidth(2);wav.setframerate(sr);wav.writeframes((audio*32767).astype('<i2').tobytes())
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
cmd=[ffmpeg,'-y','-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r',str(FPS),'-i','-','-i',str(SRC/'original-launch-music.wav'),'-c:v','libx264','-preset','fast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-movflags','+faststart','-t',str(DURATION),str(OUT/'03-website-launch-reel.mp4')]
with open(SRC/'render.log','w') as log:
 p=subprocess.Popen(cmd,stdin=subprocess.PIPE,stderr=log)
 for frame in range(FPS*DURATION):
  t=frame/FPS;s=min(3,int(t/5));u=t-s*5;im=scene_frame(s,u,t)
  if s>0 and u<.35:im=Image.blend(scene_frame(s-1,4.95,t),im,ease(u/.35))
  p.stdin.write(im.tobytes())
  if frame in [60,210,360,510]:im.save(SRC/f'video-frame-{s+1}.jpg',quality=93)
  if frame%150==0:print(f'Rendered {frame}/{FPS*DURATION} frames',flush=True)
 p.stdin.close();code=p.wait()
 if code:raise RuntimeError(f'ffmpeg failed: see {SRC}/render.log')
# Useful reel cover: exact first frame layout, without interface overlays.
scene_frame(0,2,2).save(OUT/'video-cover.jpg',quality=94)
print('Completed 1080×1920, 20-second H.264/AAC video.',flush=True)
