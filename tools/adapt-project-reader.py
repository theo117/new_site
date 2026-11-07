from pathlib import Path
import json
projects={
 'visione':dict(corto='Business website',titolo='Financial Technology Advisory Services',alt='Financial Technology Advisory Services website',descrizione='A professional advisory website with clear positioning and service-led navigation.',risposta='Professional positioning. A clear path to an enquiry.',sezioni=[dict(h='The project',p=['A professional fintech advisory website with clear positioning and service-led navigation. Built around responsive presentation and a strong first impression.']),dict(h='The build',p=['Custom front-end development with HTML, CSS and JavaScript. Designed to present the business and its services clearly across desktop and mobile.'])]),
 'caos':dict(corto='WordPress',titolo='Wedding Website',alt='Wedding website with sunset photography',descrizione='Elegant WordPress presentation with a clear guest journey.',risposta='Considered design. A clear guest journey.',sezioni=[dict(h='The project',p=['An elegant event website built in WordPress, with a visual direction shaped around the event and its audience.']),dict(h='The build',p=['Responsive presentation, clear event information and a considered guest journey.'])]),
 'cubi':dict(corto='Custom front-end',titolo='Ferrari Fan Page Website',alt='Ferrari fan page website',descrizione='A bold fan project built with HTML, CSS and JavaScript.',risposta='Bold visual design, built in code.',sezioni=[dict(h='The project',p=['A Ferrari fan page with a bold visual identity and strong presentation. A personal fan project demonstrating custom front-end design.']),dict(h='The build',p=['Built with HTML, CSS and JavaScript, with responsive layouts and a design focused on the brand.'])])
}
for p in Path('_next/static/immutable/chunks').glob('*.js'):
 s=p.read_text();mod=s.find('56936,e=>')
 if mod<0:continue
 start=s.find('let t={',mod)
 if start<0:continue
 start+=6;level=0;quote=None;escape=False;end=None
 for i in range(start,len(s)):
  c=s[i]
  if quote:
   if escape:escape=False
   elif c=='\\':escape=True
   elif c==quote:quote=None
  elif c in ['"',"'",'`']:quote=c
  elif c=='{':level+=1
  elif c=='}':
   level-=1
   if level==0:end=i+1;break
 if end:p.write_text(s[:start]+json.dumps(projects,ensure_ascii=False,separators=(',',':'))+s[end:]);print('Updated original native project reader',p.name)
