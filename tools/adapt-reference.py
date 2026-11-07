from pathlib import Path
import re,shutil,json
root=Path(__file__).resolve().parents[1]
replacements={
 'AI & automation':'Web & Android apps','Websites & e-commerce':'Business websites','AI Agents':'Android apps','RAG & Company Brain':'Business web apps','LLM Integration':'Custom integrations','Headless E-commerce':'WordPress Development',
 'Lorenzo Lottici':'teodor dev tech','Creative Developer & Automation Architect':'Websites, Web Apps & Android Development','Creative Developer &amp; Automation Architect':'Websites, Web Apps &amp; Android Development',
 'lorenzo@lorenzolottici.it':'Book a consultation','mailto:Book a consultation':'https://calendly.com/theodorelnelson/30min',
 'https://www.linkedin.com/in/lorenzo-lottici/':'https://linkedin.com/teodor-web-solutions/',
 'https://www.instagram.com/lorenzolottici.ai':'https://facebook.com/teodorwebsolutions',
 '393317073944':'27606360886','Hi%20Lorenzo':'Hi%20teodor',
 'IT03146830348':'South Africa','VAT no. ':'','VAT no.':'','Felino (PR)':'South Africa',
 'Thinking':'Projects','Instagram':'Facebook','How I gave this space a shape.':'Different businesses. The same attention to detail.',
 'Order isn’t control. It’s making room.':'Financial Technology Advisory Services',
 'The illusion of order':'Wedding Website','Everything starts from a single piece.':'Ferrari Fan Page Website',
 'Having vision means seeing the finished shape before you move the first piece.':'A professional advisory website with clear positioning and service-led navigation.',
 'My job is to build something that holds up when the mess comes back.':'Elegant WordPress presentation with a clear guest journey.',
 'Nothing complex is born whole. You build it one piece at a time.':'A bold fan project built with HTML, CSS and JavaScript.',
 'Order in the chaos of your processes.':'A stronger digital presence for your business.',
 'Order in the chaos':'A stronger presence','of your ideas.':'for your business.','of your processes.':'for your business.',
 'Let’s bring order':'Let’s build something',
 '/images/fotoio-cutout.webp':'/assets/image1.png',
}
def adapt(s):
 for a,b in replacements.items():s=s.replace(a,b)
 # Metadata and canonical URLs use the business domain.
 s=s.replace('https://lorenzolottici.it','https://www.teodordev.co.za').replace('https://www.lorenzolottici.it','https://www.teodordev.co.za')
 s=re.sub(r'("className":"iLAgaa_lettera","style":\{"--i":([0-7]),[^}]*\},"children":")[^"](")',lambda m:m[1]+'Projects'[int(m[2])]+m[3],s)
 s=re.sub(r'(<span class="iLAgaa_lettera" style="--i:([0-7]);[^>]*>)[^<](</span>)',lambda m:m[1]+'Projects'[int(m[2])]+m[3],s)
 return s

import json
def patch(source):
 matches=[]
 for m in re.finditer(r'self\.__next_f\.push\(',source):
  try:
   value,length=json.JSONDecoder().raw_decode(source[m.end():]);end=m.end()+length+1
   if value[0]==1:matches.append((m.start(),end,value[1]))
  except (ValueError,IndexError):pass
 stream=''.join(x[2] for x in matches).encode();out=bytearray();pos=0
 while pos<len(stream):
  m=re.match(rb'([0-9a-f]+):T([0-9a-f]+),',stream[pos:])
  if m:
   start=pos+m.end();end=start+int(m[2],16);text=adapt(stream[start:end].decode()).encode();out.extend(m[1]+b':T'+format(len(text),'x').encode()+b','+text);pos=end
  else:
   end=stream.find(b'\n',pos)
   if end<0:end=len(stream)
   else:end+=1
   out.extend(adapt(stream[pos:end].decode()).encode());pos=end
 # Preserve stream byte lengths when business copy differs from the reference.
 for i,(start,end,_) in reversed(list(enumerate(matches))):source=source[:start]+f'REPLICA_FLIGHT_{i}_TOKEN'+source[end:]
 source=adapt(source)
 source=source.replace('REPLICA_FLIGHT_0_TOKEN','self.__next_f.push('+json.dumps([1,out.decode()],ensure_ascii=False).replace('</script','<\\/script')+')')
 for i in range(1,len(matches)):source=source.replace(f'REPLICA_FLIGHT_{i}_TOKEN','self.__next_f.push([1,""])')
 source=source.replace('<head>','<head><script src="/replica-bridge.js"></script>').replace('</head>','<link rel="stylesheet" href="/replica-bridge.css"></head>')
 source=source.replace('Instagram','Facebook')
 return source
data=patch((root/'tools/reference-source/fresh.html').read_text())
data=data.replace('<head>','<head><script src="/scene-driver.js?v=20261107-scene-2" defer></script><link rel="stylesheet" href="/scene-only.css?v=20261107-scene-2">')
p=root/'en/scene/index.html'
p.parent.mkdir(parents=True,exist_ok=True)
p.write_text(data)
