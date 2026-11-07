(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,72021,12918,23857,e=>{var t=e.i(97939),o=e.i(91809);let a=new Map,i=0,r=0;function n(){if("u"<typeof document)return;let e=(0,o.k)();document.documentElement.classList.toggle("scroll-fermo",i>0),i>0?e?.stop():e?.start()}function l(e){let t=`${e}#${++r}`;a.set(t,(a.get(t)??0)+1),i++,n();let o=!1;return()=>{o||(o=!0,a.delete(t),i=Math.max(0,i-1),n())}}{window.__scrollBloccato=()=>[...a.keys()];let e=()=>{if(i>0)return;let e=(0,o.k)();e?.isStopped&&e.start();let t=document.documentElement;for(let e of(t.classList.contains("scroll-fermo")&&t.classList.remove("scroll-fermo"),[t,document.body]))e&&"hidden"===e.style.overflow&&(e.style.overflow="")};for(let t of["wheel","touchstart","keydown"])window.addEventListener(t,e,{capture:!0,passive:!0})}e.s(["r",0,l,"$",0,function(){i>0&&(0,o.k)()?.stop()},"B",0,()=>i>0],12918);var s=e.i(67013),c=e.i(99121),d=e.i(16352),u=e.i(51386),f=e.i(95399),p=e.i(92901);let m="var(--z-passaggio)",h=`
precision highp float;
uniform vec2 uRes;
uniform float uDpr;
uniform float uFase;   // 0 chiude, 1 attende, 2 apre
uniform float uU;      // avanzamento della fase (0..1)
uniform vec2 uO;       // il punto toccato, px CSS dall'alto
uniform float uT;      // s, l'ora dell'ambiente
uniform float uFess;   // quanto si vede la crepa (0..1)
uniform float uLung;   // quanto e' lunga (0..1)
uniform float uMano;   // 1 in mano: niente capelli, i fili sono piu' larghi

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec2 hash2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { v += a * vnoise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}

// le schegge: il campo di Voronoi con la distanza dal bordo della cella
vec3 schegge(vec2 x) {
  vec2 n = floor(x), f = fract(x), mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 r = g + 0.15 + 0.7 * hash2(n + g) - f;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mg = g; }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
    vec2 g = mg + vec2(float(i), float(j));
    vec2 r = g + 0.15 + 0.7 * hash2(n + g) - f;
    if (dot(mr - r, mr - r) > 1e-5) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
  }
  return vec3(md, n + mg);
}

// la materia: ossidiana con la grana del sito (avorio al 4%, un punto ogni 8 e
// ogni 13 px), le scintille e un riflesso largo che scorre. faccia e piega
// inclinano la luce per ogni scheggia
vec3 ossidiana(vec2 pc, vec2 scr, float faccia, vec2 piega) {
  vec3 c = mix(${(0,c.V)(c.d)}, ${(0,c.V)(c.$)}, 0.55 + 0.45 * faccia);
  vec2 g8 = mod(floor(pc), 8.0), g13 = mod(floor(pc) - vec2(4.0, 5.0), 13.0);
  float gr = (g8.x + g8.y < 0.5 ? 1.0 : 0.0) + (g13.x + g13.y < 0.5 ? 1.0 : 0.0);
  c = mix(c, ${(0,c.V)(c.e)}, min(gr, 1.0) * 0.04);
  vec2 cs = floor(pc / 3.0);
  float sc = step(0.9982, hash(cs + 3.1)) * (0.5 + 0.5 * sin(uT * (1.5 + 3.0 * hash(cs)) + 6.28 * hash(cs + 7.0)));
  c = mix(c, ${(0,c.V)(c.e)}, sc * 0.32);
  vec2 v = pc / scr;
  float s = dot(v + piega, normalize(vec2(0.82, -0.57)));
  float band = exp(-pow((s - (fract(uT * 0.045) * 2.2 - 0.6)) * 5.0, 2.0));
  c = mix(c, ${(0,c.V)(c.e)}, band * 0.035);
  return c;
}

// ── LA FERITA (5 novembre 2026, Lorenzo: \xabcome quelle nei mondi\xbb) ─────────
// Lo stesso linguaggio della luna (Spazio.tsx): bordi di celle su un dominio
// storto dal rumore, tratto che cambia e si assottiglia fino a niente, tratti
// che si interrompono. Una rete a tratto uguale si legge come una retina.
// Rende: x = px dal filo, y = quanto e' largo il filo (px), z = quanto c'e'.
// sfoltisci: la parte di spigoli tolti, deciso per ogni coppia di celle. I capelli
// sono celle piccole a spigoli tutti accesi, cioe' anellini chiusi: una cella ha
// circa sei lati, togliendone quasi la meta' il giro non si chiude piu', e il
// peso sta sullo spigolo e non sul punto, quindi il tratto resta intero.
vec3 ferita(vec2 pc, float cella, float sfoltisci) {
  vec2 q = pc / cella;
  vec2 w = q + (vec2(vnoise(q * 1.7 + 3.1), vnoise(q * 1.7 + 9.2)) - 0.5) * 0.62;
  w += (vec2(vnoise(q * 6.1 + 1.3), vnoise(q * 6.1 + 4.7)) - 0.5) * 0.09;
  vec2 i0 = floor(w), f = fract(w);
  float d1 = 9.0, d2 = 9.0;
  vec2 c1 = vec2(0.0), c2 = vec2(0.0);
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 o = vec2(float(i), float(j));
    // semi a distanza: due semi vicini fanno una cella minuscola, cioe un anellino acceso
    vec2 r = o + 0.22 + 0.56 * hash2(i0 + o) - f;
    float d = dot(r, r);
    if (d < d1) { d2 = d1; c2 = c1; d1 = d; c1 = i0 + o; } else if (d < d2) { d2 = d; c2 = i0 + o; }
  }
  float tratto = smoothstep(0.28, 0.82, vnoise(w * 2.3 + 9.0));
  float tiene = smoothstep(0.36, 0.56, vnoise(w * 0.8 + 5.0));
  // la coppia senza ordine: lo stesso spigolo visto dalle due celle vale uguale
  if (sfoltisci > 0.0) tiene *= step(sfoltisci, hash(c1 + c2 + abs(c1 - c2) * 0.37));
  return vec3((sqrt(d2) - sqrt(d1)) * cella * 0.5, mix(0.35, 2.3, tratto), tiene);
}
// la luce dentro: il filo avorio al centro, il caldo ai lati, il labbro di
// pietra in ombra appena fuori. x = forza del filo, y = alone, z = labbro
vec3 profilo(vec3 f, float apre) {
  float l = f.y * apre;
  float cuore = (1.0 - smoothstep(l * 0.5, l * 0.5 + 0.8, f.x)) * f.z * smoothstep(0.0, 0.1, apre);
  float alone = exp(-f.x / (1.1 + 1.3 * l)) * f.z * apre;
  float labbro = exp(-f.x / (1.6 + 1.6 * l)) * f.z * apre;
  return vec3(cuore, alone, labbro);
}
vec3 brace(vec3 c, vec3 p, float calore) {
  c *= 1.0 - p.z * 0.62;
  c = mix(c, ${(0,c.V)(c.o)}, clamp(p.y * 0.62 * calore, 0.0, 1.0));
  c = mix(c, mix(${(0,c.V)(c.o)}, mix(${(0,c.V)(c.B)}, ${(0,c.V)(c.e)}, smoothstep(0.55, 1.0, calore)), smoothstep(0.1, 0.6, calore)), clamp(p.x * min(1.0, calore * 1.5), 0.0, 1.0));
  return c;
}

// la crepa d'avorio: sottile, assottigliata in punta, con l'alone
float crepa(float dx, float dy, float meta, float spess) {
  float x = dx / max(meta, 1.0);
  if (x > 1.0) return 0.0;
  float punta = 1.0 - smoothstep(0.45, 1.0, x);
  float th = spess * punta;
  float cuore = 1.0 - smoothstep(th * 0.5, th * 0.5 + 0.9, abs(dy));
  float alone = exp(-abs(dy) / (4.0 + 12.0 * punta)) * punta * 0.32;
  return clamp(cuore + alone, 0.0, 1.0);
}

void main() {
  vec2 scr = uRes / uDpr;
  vec2 pc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  float mn = min(scr.x, scr.y);
  vec2 C = scr * 0.5;
  // la linea della crepa non e' dritta: piccole deviazioni, come il vetro
  float lineaY = C.y + (vnoise(vec2(pc.x / 120.0, 7.7)) - 0.5) * 26.0 + (vnoise(vec2(pc.x / 46.0, 1.3)) - 0.5) * 11.0 + (vnoise(vec2(pc.x / 11.0, 4.1)) - 0.5) * 3.4;
  float dy = pc.y - lineaY;
  float dx = abs(pc.x - C.x);
  vec3 luce = ${(0,c.V)(c.e)};

  // ── LA CHIUSURA ──────────────────────────────────────────────────────────
  if (uFase < 0.5) {
    vec2 q = pc - uO;
    float R = length(max(uO, scr - uO)) + 1.0;
    float d = length(q) / R;
    vec2 dir = d > 1e-4 ? q / length(q) : vec2(1.0, 0.0);
    float lobi = fbm(dir * 1.7 + vec2(3.1, 7.7));
    float w = d * (0.78 + 0.5 * lobi) + 0.05 * (fbm(pc / 80.0) - 0.5);
    float e = (uU * 1.32 - w) * R;            // px dentro il bordo
    // I FILI CORRONO AVANTI: la pietra non arriva con un orlo tondo, prima la
    // incrina la frattura e la lastra riempie dopo. Dietro il fronte le crepe
    // restano accese e si rimarginano, a lastra chiusa non ne resta niente
    float avanti = mn * 0.1;
    if (e < -avanti) discard;
    float spegne = 1.0 - smoothstep(0.78, 1.0, uU);
    float calore = exp(-max(e, 0.0) / (mn * 0.3)) * spegne;
    vec3 pr = vec3(0.0);
    if (calore > 0.004 || e < 0.0) {
      vec3 f = ferita(pc, mn * 0.17, 0.0);
      pr = profilo(f, 0.45 + 0.55 * calore);
      if (uMano < 0.5) {
        vec3 fine = ferita(pc + 37.0, mn * 0.055, 0.5);
        vec3 pf = profilo(vec3(fine.x, fine.y * 0.4, fine.z), calore);
        float vicino = exp(-f.x / (mn * 0.03));
        pf *= vicino; pf.x *= 1.4;
        pr = max(pr, pf * 0.5);
      }
    }
    vec3 c = ossidiana(pc, scr, 0.0, vec2(0.0));
    c = brace(c, pr, calore);
    // l'orlo: scuro e caldo appena, mai piu' il filo tondo d'avorio
    float orlo = smoothstep(-1.5, 0.5, e);
    c = mix(c, ${(0,c.V)(c.o)}, exp(-max(e, 0.0) / 34.0) * 0.1 * spegne);
    float fuori = (pr.x + pr.y * 0.35) * smoothstep(-avanti, -avanti * 0.25, e);
    float a = max(orlo, clamp(fuori, 0.0, 1.0));
    gl_FragColor = vec4(c * a, a);
    return;
  }

  // ── L'ATTESA ─────────────────────────────────────────────────────────────
  if (uFase < 1.5) {
    vec3 c = ossidiana(pc, scr, 0.0, vec2(0.0));
    if (uFess > 0.001) {
      float respiro = 0.5 + 0.5 * sin(uT * 6.2832 / 2.4);
      float meta = scr.x * (0.035 + 0.3 * uLung) * (0.6 + 0.4 * uFess);
      float k = crepa(dx, dy, meta, 1.1 + 0.7 * respiro) * uFess * (0.78 + 0.22 * respiro);
      // i rami che nascono dalla crepa e muoiono nella pietra, dove lei e' gia' passata
      float vicino = exp(-abs(dy) / (mn * 0.09)) * (1.0 - smoothstep(meta * 0.75, meta * 1.05, dx)) * uFess;
      if (vicino > 0.02) c = brace(c, profilo(ferita(pc, mn * 0.16, 0.0), vicino), vicino * (0.7 + 0.3 * respiro));
      c = mix(c, mix(luce, ${(0,c.V)(c.o)}, 0.32), k);
    }
    gl_FragColor = vec4(c, 1.0);
    return;
  }

  // ── L'APERTURA ───────────────────────────────────────────────────────────
  float u = uU;
  // la lastra viene appena incontro
  vec2 p2 = C + (pc - C) / (1.0 + 0.07 * u);
  float corre = smoothstep(0.0, 0.2, u);
  // l'occhio: la crepa si apre in verticale, larga al centro, chiusa in punta
  float metaX = scr.x * mix(0.38, 0.8, smoothstep(0.1, 0.9, u));
  float xn = dx / metaX;
  float apre = pow(smoothstep(0.16, 1.0, u), 1.9);
  float semi = scr.y * 0.8 * apre * sqrt(max(0.0, 1.0 - xn * xn));
  // il bordo dell'occhio e' strappato, non un'ellisse: piu' aperto, piu' strappi
  float strappo = (fbm(pc / 58.0 + 2.0) - 0.5) * 70.0 * smoothstep(0.0, 0.25, apre);
  float fuori = abs(dy) - semi + strappo * smoothstep(0.0, 6.0, semi);   // px oltre il bordo dell'occhio
  if (fuori < 0.0) discard;
  // le schegge
  float cella = max(46.0, mn * 0.13);
  vec3 v = schegge(p2 / cella);
  vec2 id = v.yz;
  vec2 seme = (id + 0.5) * cella;
  float h = hash(id + 0.37);
  float sx = abs(seme.x - C.x) / metaX;
  float distOcchio = (abs(seme.y - C.y) - scr.y * 0.8 * apre * sqrt(max(0.0, 1.0 - sx * sx))) / scr.y;
  float lp = clamp((u * 1.35 - 0.2 - max(distOcchio, 0.0) * 1.1 - h * 0.25) / 0.38, 0.0, 1.0);
  float bordo = v.x * cella;                  // px dal bordo della scheggia
  float consumo = lp * cella * 0.6;
  float e = bordo - consumo;
  if (lp >= 1.0 || e < 0.0) discard;
  vec3 c = ossidiana(pc, scr, h - 0.5, (hash2(id) - 0.5) * 0.6 * lp);
  // la scheggia che si stacca si inclina: una faccia prende la luce, l'altra
  // cade nel buio
  float inclina = (hash(id + 5.3) - 0.35) * lp;
  c = mix(c, inclina > 0.0 ? ${(0,c.V)(c.e)} : ${(0,c.V)(c.d)}, abs(inclina) * 0.18);
  // le crepe fra le schegge si accendono prima di staccarsi
  float vicino = 1.0 - smoothstep(0.0, 0.14, max(distOcchio, 0.0));
  float venatura = exp(-bordo / 0.8) * corre * vicino * vicino * 0.5;
  // dentro le schegge vicine alla luce i fili fini, col loro labbro
  // pesati dalla distanza vera dalla crepa: il peso per scheggia faceva una fascia
  // a bordi dritti, e tutti accesi insieme erano un blocco di luce
  float dalFilo = exp(-pow(abs(dy) / (mn * 0.16), 2.0)) * corre * (1.0 - apre);
  if (dalFilo > 0.03) c = brace(c, profilo(ferita(p2, mn * 0.13, 0.0), dalFilo), dalFilo * 0.7 * (1.0 - lp));
  // (5 novembre 2026) l'orlo basso: a piena forza ogni scheggia era un poligono
  // col contorno, un fil di ferro invece che pietra che se ne va
  float orlo = exp(-e / 1.0) * smoothstep(0.0, 0.15, lp) * (0.14 + 0.4 * vicino);
  float labbro = exp(-fuori / 3.0) * 0.7 + exp(-fuori / 28.0) * 0.12;
  // la crepa di prima che corre ai bordi
  float meta = scr.x * mix(0.05 + 0.3 * uLung, 0.9, corre);
  float k = crepa(dx, dy, meta, 1.8 + 2.5 * corre) * (1.0 - apre);
  float l = clamp(venatura + orlo + labbro * apre + k, 0.0, 1.0);
  // la luce e' avorio nel cuore dello strappo, calda appena se ne allontana
  c = mix(c, mix(${(0,c.V)(c.o)}, luce, exp(-fuori / 2.5) * 0.55 + k * 0.45), l);
  // (19 ottobre 2026, giro da giuria) una scheggia ancora ferma resta piena
  // fino al suo bordo: col bordo sfumato sempre, fra le schegge ai lati si
  // vedevano fili e punti della pagina prima che lo sgretolamento arrivasse
  float a = (1.0 - smoothstep(0.9, 1.0, u)) * mix(1.0, smoothstep(0.0, 1.0, e), smoothstep(0.0, 0.05, lp));
  gl_FragColor = vec4(c * a, a);
}
`,v=globalThis.__varco??={tela:null,gl:null,prog:null,u:{},rotto:!1,fase:"fermo",t0:0,ox:0,oy:0,senzaFessura:!1,coperto:0,pVero:0,lung:0,vis:0,ultimo:0,raf:0,fineChiude:null,fineApre:null,apriChiesto:!1},g=null;function w(){if(g)return g;let e=v.tela;e&&(v.tela=null,v.gl=null,requestAnimationFrame(()=>requestAnimationFrame(()=>e.remove())));let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),t.width=t.height=1,t.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;z-index:var(--z-passaggio);pointer-events:none;display:none",document.body.appendChild(t);let o=(0,d.f)()?t.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"low-power"}):null;if(!o)return t.remove(),v.rotto=!0,null;let a=!!o.getExtension("KHR_parallel_shader_compile"),i=(e,t)=>{let a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),a},r=o.createProgram();return o.attachShader(r,i(o.VERTEX_SHADER,"attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }")),o.attachShader(r,i(o.FRAGMENT_SHADER,h)),o.linkProgram(r),g={c:t,gl:o,prog:r,parallelo:a}}function b(){let e=g;if(!e)return!1;g=null;let{c:t,gl:o,prog:a}=e;if(!o.getProgramParameter(a,o.LINK_STATUS))return t.remove(),v.rotto=!0,!1;o.useProgram(a);let i=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,i),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);let r=o.getAttribLocation(a,"p");for(let e of(o.enableVertexAttribArray(r),o.vertexAttribPointer(r,2,o.FLOAT,!1,0,0),["uRes","uDpr","uFase","uU","uO","uT","uFess","uLung","uMano"]))v.u[e]=o.getUniformLocation(a,e);return t.addEventListener("webglcontextlost",()=>{v.tela===t&&(v.gl=null,"fermo"!==v.fase&&(t.style.background=c.d))}),v.tela=t,v.gl=o,v.prog=a,o.uniform1f(v.u.uFase,1),o.drawArrays(o.TRIANGLES,0,3),!0}function x(){return!v.rotto&&(!(!(v.gl&&v.tela?.isConnected)||v.gl.isContextLost())||!!w()&&b())}function y(){let e=v.tela,t=Math.min(window.innerWidth>1800?1:1.5,window.devicePixelRatio||1),o=Math.round(window.innerWidth*t),a=Math.round(window.innerHeight*t);(e.width!==o||e.height!==a)&&(e.width=o,e.height=a),e.style.display="block",e.style.pointerEvents="auto"}function E(){v.raf&&cancelAnimationFrame(v.raf),v.raf=0,v.fase="fermo";let e=v.tela;e&&(e.style.display="none",e.style.pointerEvents="none",e.style.zIndex=m,e.width=e.height=1),v.fineChiude?.(),v.fineChiude=null,v.fineApre?.(),v.fineApre=null}function C(e){if(!v.gl||v.gl.isContextLost()){if(!x())return void E();y()}let t=v.gl;if(!v.tela)return;let o=Math.min(100,e-(v.ultimo||e));v.ultimo=e;let a=1,i=0,r=e-v.t0;if("chiude"===v.fase){let t=Math.min(1,r/780);i=.55*t+.45*(0,u.u)(t),a=0,r>=780&&(v.fase="attende",v.t0=v.coperto=e,a=1,v.tela.style.zIndex=m,v.fineChiude?.(),v.fineChiude=null)}else"apre"===v.fase&&(a=2,i=.5*(i=Math.min(1,r/1450))+.5*(0,u.b)(i));if("attende"===v.fase){let t=e-v.coperto-260,r=v.senzaFessura?0:Math.max(0,Math.min(1,t/380));v.vis=r<v.vis?r:Math.min(r,v.vis+o/380),v.vis>0&&(v.lung+=(v.pVero-v.lung)*Math.min(1,o/(v.apriChiesto?88:220))),v.apriChiesto&&(0===v.vis||v.lung>.93)&&(v.fase="apre",v.t0=e,a=2,i=0)}let n=v.tela.width/window.innerWidth;if(t.viewport(0,0,v.tela.width,v.tela.height),t.uniform2f(v.u.uRes,v.tela.width,v.tela.height),t.uniform1f(v.u.uDpr,n),t.uniform1f(v.u.uFase,a),t.uniform1f(v.u.uU,i),t.uniform2f(v.u.uO,v.ox,v.oy),t.uniform1f(v.u.uT,(0,f.B)()/1e3),t.uniform1f(v.u.uFess,v.vis),t.uniform1f(v.u.uLung,v.lung),t.uniform1f(v.u.uMano,window.innerWidth<760||(0,p._)()?1:0),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,3),"apre"===v.fase&&(i>.25&&(v.tela.style.pointerEvents="none"),e-v.t0>=1450))return void E()}function A(e){v.raf=0,"fermo"!==v.fase&&(C(e),"fermo"!==v.fase&&(v.raf=requestAnimationFrame(A)))}function z(e){v.fase=e,v.t0=performance.now(),v.ultimo=0,y(),C(v.t0),v.raf||(v.raf=requestAnimationFrame(A))}function F(e){v.fineApre?.(),v.fineApre=null,v.apriChiesto=!1,v.senzaFessura=e,v.pVero=0,v.lung=0,v.vis=0}function L(e,t,o=!0){return x()?(F(!o),v.ox=e??window.innerWidth/2,v.oy=t??window.innerHeight/2,new Promise(e=>{v.fineChiude?.(),v.fineChiude=e,z("chiude")})):Promise.resolve()}function T(e){v.pVero=Math.max(v.pVero,e)}function k(){return"fermo"===v.fase?Promise.resolve():(v.apriChiesto=!0,v.pVero=1,new Promise(e=>{let t=v.fineApre;v.fineApre=()=>{t?.(),e()},v.raf||(v.raf=requestAnimationFrame(A))}))}var M=e.i(59640);let R={ossidiana:s.x.pietra,avorio:s.x.carta},S=globalThis.__velo??={tela:null,coperto:!1,corsa:0,materia:"ossidiana",segno:null},_=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||!(!v.rotto&&("u"<typeof document||x()));function P(){if(S.tela&&S.tela.isConnected)return S.tela;let e=document.createElement("canvas");return e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;z-index:var(--z-passaggio);pointer-events:none;display:block",document.body.appendChild(e),S.tela=e,e}function D(e,t){let o=P();t&&(S.materia=t);let a=++S.corsa;return o.width=o.height=1,o.style.pointerEvents="auto",o.style.background=R[S.materia],o.style.transition="none",o.style.opacity=e?"0":"1",o.offsetWidth,o.style.transition="opacity 0.2s var(--curva)",o.style.opacity=e?"1":"0",new Promise(t=>setTimeout(()=>{if(S.corsa!==a)return t();S.coperto=e,e||(o.style.pointerEvents="none",o.style.background="",o.width=o.height=0),t()},210))}function $(e,t,o,a=!0){if(_())return D(!0,o??"ossidiana");let i=++S.corsa;return S.materia=o??"ossidiana",L(e,t,a).then(()=>{S.corsa===i&&(S.coperto=!0)})}function I(e,t){if(_())return Promise.resolve();let o=++S.corsa;return S.materia="ossidiana",(function(e,t){if(!x())return Promise.resolve();let o=L(e,t,!0);return v.tela&&(v.tela.style.zIndex="calc(var(--z-passaggio) + 2)"),o})(e,t).then(()=>{S.corsa===o&&(S.coperto=!0)})}function q(e=!0){if("fermo"!==v.fase){let t=++S.corsa;return e&&(0,M.h)(),k().then(()=>{S.corsa===t&&(S.coperto=!1)})}return(V(null),S.coperto)?D(!1):Promise.resolve()}function B(e="ossidiana"){if(S.corsa++,S.materia=e,S.coperto=!0,!_())return void(x()&&(v.fineChiude?.(),v.fineChiude=null,F(!1),z("attende"),v.coperto=v.t0));let t=P();t.width=t.height=1,t.style.transition="none",t.style.opacity="1",t.style.pointerEvents="auto",t.style.background=R[e]}function V(e){if("u"<typeof document)return;if("fermo"!==v.fase){null!==e&&T(e);return}if(null===e){let e=S.segno;e&&(e.style.opacity="0",window.setTimeout(()=>{"0"===e.style.opacity&&e.remove(),S.segno===e&&(S.segno=null)},400));return}let t=S.segno;t&&t.isConnected||((t=document.createElement("div")).setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;left:var(--gutter,24px);right:var(--gutter,24px);bottom:calc(28px + env(safe-area-inset-bottom));z-index:var(--z-velo-scritta);pointer-events:none;opacity:0;transition:opacity var(--dur-stato) var(--curva);display:flex",t.innerHTML='<span style="position:relative;flex:1;height:1px;overflow:hidden"><span data-f style="position:absolute;inset:0;transform-origin:0 50%;transform:scaleX(0);transition:transform .5s var(--curva)"></span></span>',document.body.appendChild(t),S.segno=t,t.offsetWidth);let o="avorio"===S.materia,a=t.querySelector("[data-f]");a.style.background=o?c.t.inchiostro32:c.t.avorio32,a.parentElement.style.background=o?c.t.inchiostro10:c.t.avorio10,a.style.transform=`scaleX(${Math.max(0,Math.min(1,e)).toFixed(3)})`,t.style.opacity="1"}let j=()=>S.coperto,W=!1,U=()=>W;function O(){let e=S.tela;S.corsa++,S.coperto=!1,e&&(e.style.background="",e.style.pointerEvents="none",e.width=e.height=0),"fermo"!==v.fase&&"fermo"!==v.fase&&E()}e.s(["g",0,q,"m",0,$,"Y",0,B,"i",0,function(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=window;!function(e=e=>e()){e(()=>{if(v.rotto||v.gl&&v.tela?.isConnected&&!v.gl.isContextLost())return;let t=w();if(!t)return;let o=a=>e(()=>{g===t&&(!t.parallelo||t.gl.getProgramParameter(t.prog,37297)||a>20?b():o(a+1))});o(0)})}(t=>{e.requestIdleCallback?e.requestIdleCallback(t,{timeout:3e3}):window.setTimeout(t,60)})},"n",0,function(e=1600,t,o){_()?D(!0,"ossidiana").then(()=>window.setTimeout(()=>{D(!1)},e)):function(e=1600,t,o){L(t,o).then(()=>{let t=performance.now(),o=window.setInterval(()=>T(Math.min(.95,(performance.now()-t)/e)),120);window.setTimeout(()=>{window.clearInterval(o),k()},e)})}(e,t,o)},"e",0,I,"B",0,O,"l",0,V,"H",0,U,"I",0,j,"E",0,function(e){W=e}],23857);var H=e.i(11007);let N=globalThis.__passaggio??={router:null,atteso:!1,inAttesa:!1,daStoria:0,sicurezza:0,giro:0},Y=()=>{N.presa?.(),N.presa=null};function G(){if(X(window.location.pathname))try{sessionStorage.setItem("casa-y",String(Math.round(window.scrollY)))}catch{}}let K=!0;window.addEventListener("pagehide",G);let X=e=>/^\/(en|it)?\/?$/.test(e),Q=e=>X(e)?"avorio":"ossidiana";function Z(e,{x:o,y:a}={}){let i;if(!N.router)return!1;void 0===o&&performance.now()-eo.t<1200&&(o=eo.x,a=eo.y);let r=(0,t.R)(e,(0,t.K)());try{i=new URL(r,window.location.href)}catch{return!1}if(i.origin!==window.location.origin||/\.[a-z0-9]+$/i.test(i.pathname)||i.pathname.startsWith("/api"))return!1;if(N.atteso||N.inAttesa)return!0;if(i.pathname.replace(/\/$/,"")===window.location.pathname.replace(/\/$/,""))return!1;N.atteso=!0,N.versoCasa=0,G(),window.dispatchEvent(new Event("velo-cambia"));let n=i.pathname+i.search+i.hash;N.router.prefetch(i.pathname),(0,M.Y)(),Y(),N.presa=l("passaggio");let s=j(),c=++N.giro,d=X(i.pathname)&&!ea()&&!s;return d&&B("ossidiana"),(d?Promise.resolve():s?I(o,a):$(o,a,"ossidiana")).then(()=>{window.dispatchEvent(new Event("velo-coperto")),c===N.giro&&N.atteso&&(N.router?.push(n,{scroll:!0}),window.clearTimeout(N.sicurezza),N.sicurezza=window.setTimeout(()=>{N.atteso&&el("la pagina non e' arrivata")},6e3))}),!0}function J(){let e=document.documentElement;e.dataset.arrivo&&(delete e.dataset.arrivo,e.style.background=c.d)}let ee=!1,et=()=>!ee&&!!window.__arrivoLingua,eo={x:0,y:0,t:-1e9};window.addEventListener("pointerdown",e=>{eo.x=e.clientX,eo.y=e.clientY,eo.t=performance.now()},{capture:!0,passive:!0});let ea=()=>{try{return"1"===sessionStorage.getItem("entrata-scelta")}catch{return!1}};function ei(){let e=(0,o.k)();e?.scrollTo?.(0,{immediate:!0,force:!0}),window.scrollTo(0,0)}let er=()=>N.atteso||N.inAttesa;{let e=()=>{document.documentElement.dataset.velo=er()?"chiuso":"aperto"};window.addEventListener("velo-cambia",e),window.addEventListener("velo-aperto",e)}let en=0;function el(e){let t=window;t.__veloSbloccato=(t.__veloSbloccato||0)+1,t.__veloRagione=e,window.clearTimeout(N.sicurezza),N.atteso=!1,N.inAttesa=!1,J(),Y(),O(),q(),en=0,window.dispatchEvent(new Event("velo-aperto"))}window.addEventListener("velo-cambia",()=>{en=0}),window.setInterval(()=>{if(document.hidden||!(j()&&!U()||N.atteso||N.inAttesa)){en=0;return}if(!en){en=performance.now();return}performance.now()-en>7e3&&el(N.inAttesa?"attesa della pagina":N.atteso?"pagina mai arrivata":"velo rimasto dipinto")},500),window.addEventListener("pageshow",e=>{e.persisted&&J(),e.persisted&&(j()||N.atteso||N.inAttesa)&&el("ritorno dalla cache")}),e.s(["K",0,["/","/servizi","/progetti","/percorso","/pensiero","/parliamone"],"I",0,function(e){if(!er())return()=>{};let t=()=>{window.removeEventListener("velo-aperto",t),e()};return window.addEventListener("velo-aperto",t),()=>window.removeEventListener("velo-aperto",t)},"g",0,function(){if(N.inAttesa)return;let e=N.daStoria>0&&performance.now()-N.daStoria<1500,t=et();if(!N.atteso&&!e&&!t)return;if(t&&(ee=!0,B("ossidiana"),requestAnimationFrame(()=>requestAnimationFrame(J)),N.atteso=!0),window.clearTimeout(N.sicurezza),X(window.location.pathname)&&!ea()){O(),N.daStoria=0,N.atteso=!1,Y(),window.dispatchEvent(new Event("velo-cambia")),window.dispatchEvent(new Event("velo-aperto"));return}X(window.location.pathname)&&(N.versoCasa=performance.now()),N.atteso||B(Q(window.location.pathname)),N.daStoria=0,N.atteso=!1,N.inAttesa=!0,window.dispatchEvent(new Event("velo-cambia")),window.location.hash||e||ei();let a=performance.now();(0,H.M)({avanza:e=>{("fermo"!==v.fase||performance.now()-a>600)&&V(e)}}).then(()=>{let a;if(N.inAttesa=!1,window.location.hash||e||ei(),t&&X(window.location.pathname)){let e=0;try{e=Math.max(0,Number(sessionStorage.getItem("casa-y"))||0)}catch{}if(e>40){let t=(0,o.k)();t?.scrollTo?.(e,{immediate:!0,force:!0}),window.scrollTo(0,e)}}Y(),q(),(a=document.querySelector("main h1, h1, main"))&&(a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus({preventScroll:!0})),performance.now(),window.dispatchEvent(new Event("velo-aperto"))})},"M",0,function(){return!!ea()&&(!!et()||N.atteso||N.inAttesa||N.daStoria>0&&performance.now()-N.daStoria<1500||!!N.versoCasa&&performance.now()-N.versoCasa<2e4)},"u",0,function(e,t,o){let a;if(N.atteso||N.inAttesa)return;void 0===t&&performance.now()-eo.t<1200&&(t=eo.x,o=eo.y);try{a=new URL(e,window.location.href)}catch{window.location.assign(e);return}N.atteso=!0,G(),window.dispatchEvent(new Event("velo-cambia")),(0,M.Y)(),Y(),N.presa=l("passaggio");let i=j(),r=++N.giro,n=X(a.pathname)&&!ea()&&!i;n&&B("ossidiana"),(n?Promise.resolve():i?I(t,o):$(t,o,"ossidiana")).then(()=>{if(window.dispatchEvent(new Event("velo-coperto")),r===N.giro&&N.atteso){try{sessionStorage.setItem("lingua-cambiata",String(Date.now()))}catch{}window.location.assign(a.href),window.clearTimeout(N.sicurezza),N.sicurezza=window.setTimeout(()=>{N.atteso&&el("il documento nuovo non e' arrivato")},6e3)}})},"$",0,Z,"N",0,function(){let e=!1;try{if(e="1"===sessionStorage.getItem("casa-torna"),sessionStorage.removeItem("casa-torna"),K){let t=performance.getEntriesByType("navigation")[0];t?.type==="back_forward"&&(e=!0)}}catch{}if(K=!1,!e)return 0;try{return Math.max(0,Number(sessionStorage.getItem("casa-y"))||0)}catch{return 0}},"c",0,function(e){N.router=e},"Z",0,function(){if(N.daStoria=performance.now(),X(window.location.pathname))try{sessionStorage.setItem("casa-torna","1")}catch{}},"j",0,function(e,o,a){let i,r=(0,t.R)(e,(0,t.K)());if(!Z(r,{x:o,y:a})){try{i=new URL(r,window.location.href)}catch{window.location.assign(r);return}(0,M.Y)(),$(o,a,Q(i.pathname)).then(()=>window.location.assign(i.href))}},"z",0,er],72021)},67013,e=>{var t=e.i(99121);let o={fondo:t.t.fondo,pietra:t.t.pietra,ombra:t.D.ombra,bordo:t.D.bordo,materiale:t.D.materiale,lato:t.D.lato,latoChiaro:t.D.latoChiaro,rilievo:t.D.rilievo,luce:t.D.luce,acceso:t.t.caldo,accesoLuce:t.t.caldoChiaro,accesoAlto:t.t.caldoChiaro,accesoSx:t.t.caldo,accesoDx:t.t.caldo16,caldo:t.t.caldo,caldoChiaro:t.t.caldoChiaro,avorio:t.t.avorio,carta:t.t.carta,inchiostro:t.t.inchiostro},a=o.avorio,i=o.fondo,r="https://wa.me/27606360886?text="+encodeURIComponent("Ciao Lorenzo! Ho visto il tuo sito e vorrei parlarti di un progetto."),n="https://wa.me/27606360886?text="+encodeURIComponent("Hi Lorenzo, I saw your website and I’d like to talk to you about a project."),l="https://facebook.com/teodorwebsolutions",s="https://linkedin.com/teodor-web-solutions/",c="https://www.behance.net/lorenzolottici",d="https://github.com/lotticilorenzo",u=[{href:l,nome:"Facebook"},{href:s,nome:"LinkedIn"},{href:d,nome:"GitHub"},{href:c,nome:"Behance"}];e.s(["e",0,a,"d",0,c,"x",0,o,"v",0,"var(--font-grande)","L",0,[.16,1,.3,1],"E",0,"Book a consultation","O",0,d,"i",0,l,"W",0,s,"b",0,"var(--font-jetbrains-mono), ui-monospace, monospace","F",0,i,"P",0,"South Africa","g",0,u,"a",0,[{id:"servizi",label:"Cosa faccio",en:"What I do",href:"/servizi"},{id:"chi-sono",label:"Percorso",en:"Path",href:"/percorso"},{id:"lavori",label:"Progetti",en:"Work",href:"/progetti"},{id:"journal",label:"Pensiero",en:"Projects",href:"/pensiero"}],"p",0,(e,t)=>"en"===t?e.en:e.label,"q",0,e=>"en"===e?n:r])},97939,e=>{let t={servizi:"services",progetti:"work",profilo:"about",percorso:"path",parliamone:"lets-talk"},o=Object.fromEntries(Object.entries(t).map(([e,t])=>[t,e]));function a(e){return/^\/en(\/|$|\?|#)/.test(e)?"en":"it"}e.s(["N",0,["it","en"],"S",0,function(e,t,o){return"en"===e?o:t},"l",0,a,"K",0,function(){return a(window.location.pathname)},"R",0,function(e,a){let i;if(!e||!e.startsWith("/")||e.startsWith("//"))return e;let[r,n]=(i=e.search(/[?#]/))<0?[e,""]:[e.slice(0,i),e.slice(i)];if(/\.[a-z0-9]+$/i.test(r)||r.startsWith("/api")||r.startsWith("/_next"))return e;let l=r.split("/").filter(Boolean);return(("en"===l[0]||"it"===l[0])&&(l=l.slice(1)),l.length&&(l[0]=o[l[0]]??l[0]),"en"===a)?(l.length&&(l[0]=t[l[0]]??l[0]),"/en"+(l.length?"/"+l.join("/"):"")+n):"/"+l.join("/")+n},"g",0,function(e){"u">typeof document&&(document.cookie=`lingua=${e}; path=/; max-age=31536000; SameSite=Lax${"https:"===location.protocol?"; Secure":""}`)}])},51386,e=>{let t={stato:450,gesto:900,apri:950,chiudi:520,velo:600,cubetto:240,lampo:250};function o(e,t,o,a){let i=3*e,r=3*(o-e)-i,n=1-i-r,l=3*t,s=3*(a-t)-l,c=1-l-s,d=e=>((n*e+r)*e+i)*e,u=e=>(3*n*e+2*r)*e+i;return e=>{let t;if(e<=0)return 0;if(e>=1)return 1;let o=e;for(let t=0;t<6;t++){let t=u(o);if(1e-6>Math.abs(t))break;o-=(d(o)-e)/t}return((c*(t=o=Math.min(1,Math.max(0,o)))+s)*t+l)*t}}let a=o(.16,1,.3,1),i=o(.55,0,.75,.2),r=o(.65,0,.35,1),n={arriva:"cubic-bezier(0.16, 1, 0.3, 1)",va:"cubic-bezier(0.55, 0, 0.75, 0.2)",gira:"cubic-bezier(0.65, 0, 0.35, 1)",stacca:"cubic-bezier(0.32, 0, 0.67, 0)",cade:"cubic-bezier(0.55, 0, 1, 0.45)",salto:"cubic-bezier(0.3, 0, 0.2, 1)",ricade:"cubic-bezier(0.2, 0.8, 0.3, 1)"},l={stato:t.stato,breve:420,gesto:720,apri:t.apri},s={lettera:20,carattere:28,blocco:70},c={cascata:800,cascataCorta:360,cascataRiga:70,scia:120,atterra:140,glifiAvanti:3,glifo:60,riavvolge:420,batte:t.stato,sfuma:t.lampo,fretta:300,frettaCambi:3,frettaVelocita:1.5,freno:900,frenoFattore:.6},d={passaggio:540,tocco:l.breve};e.s(["L",0,c,"i",0,d,"$",0,n,"p",0,t,"x",0,l,"M",0,s,"u",0,a,"b",0,r,"Q",0,i,"B",0,()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,"A",0,()=>({"--su-curva":n.arriva,"--su-curva-via":n.va,"--su-stato":`${l.stato}ms`,"--su-gesto":`${l.gesto}ms`,"--su-apri":`${l.apri}ms`,"--su-passo-lettera":`${s.lettera}ms`,"--su-passo-carattere":`${s.carattere}ms`,"--su-passo-blocco":`${s.blocco}ms`})])},11007,e=>{let t=globalThis.__paginaPronta??={attese:new Set,prossimo:1,ascolta:new Set},o=()=>t.attese.size>0;e.s(["M",0,function({tetto:e=4500,minimo:a=220,avanza:i}={}){let r=performance.now(),n=[],l=e=>n.push([e,Math.round(performance.now()-r)]);return window.__pronta=n,new Promise(r=>{let n=!1,s=()=>{n||(l(o()?"tetto (trattenuta)":"fine"),n=!0,r())},c=0,d=()=>{c++,i?.(Math.min(.85,.22*c))};window.setTimeout(s,e),requestAnimationFrame(()=>requestAnimationFrame(async()=>{let e,r,c,u=document.fonts?document.fonts.ready.catch(()=>void 0):Promise.resolve(),f=new Promise(e=>setTimeout(e,1500));await Promise.all([u.then(()=>{l("caratteri"),d()}),Promise.race([(e=window.innerHeight,r=window.innerWidth,c=[],document.querySelectorAll("img").forEach(t=>{if(t.complete)return;let o=t.getBoundingClientRect();o.width<2||o.bottom<0||o.top>e||o.right<0||o.left>r||c.push(new Promise(e=>{t.addEventListener("load",e,{once:!0}),t.addEventListener("error",e,{once:!0})}))}),Promise.all(c)),f]).then(()=>{l("immagini"),d()}),new Promise(e=>setTimeout(e,a))]);let p=t.attese.size;for(;!n&&o();)await new Promise(e=>{let o=()=>{t.ascolta.delete(o),e()};t.ascolta.add(o),setTimeout(o,250)}),t.attese.size<p&&d(),p=t.attese.size;l("nessuno trattiene"),d(),await function(e=3,t=1500){return new Promise(o=>{window.setTimeout(o,t);let a=performance.now(),i=0,r=t=>{i=t-a<50?i+1:0,a=t,i>=e?o():requestAnimationFrame(r)};requestAnimationFrame(r)})}(),l("thread libero"),i?.(1),s()}))})},"C",0,function(e=8e3){let o=t.prossimo++;t.attese.add(o);let a=!1,i=()=>{a||(a=!0,t.attese.delete(o),t.ascolta.forEach(e=>e()))};return window.setTimeout(i,e),i}])},99121,e=>{let t="#070707",o="#0B0C0F",a="#F0EDE8",i="#D8B48C",r="#F3DCBD",n="#EAE5DA",l="#14140F",s=[{token:"pietra",da:"fondo",dL:.026,C:.0066,h:271,regola:"ossidiana schiarita, appena fredda"},{token:"inchiostro",da:"fondo",dL:.061,C:.0098,h:107,regola:"ossidiana schiarita e scaldata"},{token:"velo95",da:"fondo",alfa:.95,regola:"ossidiana al 95: il velo forte"},{token:"velo60",da:"fondo",alfa:.6,regola:"ossidiana al 60: il velo medio"},{token:"velo20",da:"fondo",alfa:.2,regola:"ossidiana al 20: il velo leggero"},{token:"inchiostro85",da:"inchiostro",alfa:.85,regola:"inchiostro all'85: il filo acceso sulla carta"},{token:"inchiostro32",da:"inchiostro",alfa:.32,regola:"inchiostro al 32: il filo sulla carta"},{token:"inchiostro10",da:"inchiostro",alfa:.1,regola:"inchiostro al 10: il separatore sulla carta"},{token:"inchiostro04",da:"inchiostro",alfa:.04,regola:"inchiostro al 4: il fondo tenue sulla carta"},{token:"avorio85",da:"avorio",alfa:.85,regola:"avorio all'85: il filo acceso"},{token:"avorio32",da:"avorio",alfa:.32,regola:"avorio al 32: il filo"},{token:"avorio10",da:"avorio",alfa:.1,regola:"avorio al 10: il separatore"},{token:"avorio04",da:"avorio",alfa:.04,regola:"avorio al 4: il fondo tenue, la grana"},{token:"carta",da:"avorio",dL:-.024,C:.0157,h:86,regola:"avorio smorzato"},{token:"caldo",da:"avorio",dL:-.155,C:.0678,h:70,regola:"avorio scaldato: meno luce, piu' croma, verso l’ambra"},{token:"caldoChiaro",da:"avorio",dL:-.042,C:.0482,h:75,regola:"avorio scaldato poco: il bordo illuminato"},{token:"caldo16",da:"caldo",alfa:.16,regola:"caldo al 16: il riempimento tenue"}],c={forte:.95,medio:.6,leggero:.2},d=[t,t,o],u={fondo:t,pietra:o,avorio:a,caldo:i,caldoChiaro:r,carta:n},f=(e,t=1)=>{let o;return[(o=parseInt(u[e].slice(1),16))>>16&255,o>>8&255,255&o].map(e=>e/255).map(e=>+(e*t).toFixed(4))};e.s(["e",0,a,"y",0,d,"o",0,i,"B",0,r,"a",0,n,"N",0,{ombra:"#D6D1C6",mezzo:n,luce:"#F8F5EE"},"P",0,s,"C",0,e=>{if("fondo"===e)return"ossidiana";if("avorio"===e)return"avorio";let t=s.find(t=>t.token===e);for(;t&&"fondo"!==t.da&&"avorio"!==t.da;){let e=t.da;t=s.find(t=>t.token===e)}return t?.da==="avorio"?"avorio":"ossidiana"},"f",0,[["#080808","#0C0C0C","#21201E"],["#0A0808","#161011","#2C1A15"],["#070707","#0F0E0D","#211F1C"],["#070707","#0E0E0C","#1F1D1B"],["#070707","#0D0D0C","#1F1E1C"],["#070707","#0C0C0B","#1E1D1B"],["#080808","#0F0E0D","#21201E"]],"d",0,t,"l",0,l,"D",0,{ombra:"#07080B",bordo:"#08090C",materiale:"#0D0E12",lato:"#0F1116",latoChiaro:"#15171D",rilievo:"#2C3039",luce:"#3A3E48",cubo:"#101115"},"t",0,{fondo:t,pietra:o,avorio:a,avorio85:"rgba(240, 237, 232, 0.85)",avorio32:"rgba(240, 237, 232, 0.32)",avorio10:"rgba(240, 237, 232, 0.1)",avorio04:"rgba(240, 237, 232, 0.04)",caldo:i,caldoChiaro:r,caldo16:"rgba(216, 180, 140, 0.16)",carta:n,inchiostro:l,inchiostro85:"rgba(20, 20, 15, 0.85)",inchiostro32:"rgba(20, 20, 15, 0.32)",inchiostro10:"rgba(20, 20, 15, 0.1)",inchiostro04:"rgba(20, 20, 15, 0.04)",velo95:"rgba(7, 7, 7, 0.95)",velo60:"rgba(7, 7, 7, 0.6)",velo20:"rgba(7, 7, 7, 0.2)"},"$",0,o,"E",0,{alto:"#EEEBE6",lato:"#C0BDB8",taglio:"#E6E4E1",ambiente:"#73716D",basso:"#64625F"},"L",0,e=>`rgba(240, 237, 232, ${e})`,"V",0,e=>{let t=parseInt(e.slice(1),16),o=e=>(e/255).toFixed(3);return`vec3(${o(t>>16&255)}, ${o(t>>8&255)}, ${o(255&t)})`},"s",0,(e,t=1)=>`vec3(${f(e,t).map(e=>e.toFixed(4)).join(", ")})`,"w",0,f,"G",0,e=>`rgba(7, 7, 7, ${c[e]})`])},92901,e=>{let t=!1;if("u">typeof navigator)try{let e=navigator;e.getBattery?.().then(e=>{let o=()=>{t=!e.charging&&e.level<.2};o(),e.addEventListener("levelchange",o),e.addEventListener("chargingchange",o)}).catch(()=>{})}catch{}function o(){if("u"<typeof navigator)return!1;let e=navigator.connection;return!!e?.saveData||t}function a(){if("u"<typeof navigator)return!1;let e=navigator.userAgent||"";return/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&(navigator.maxTouchPoints||0)>1}function i(){return a()?Math.max(.75,Math.floor(4*Math.sqrt(4e6/Math.max(1,window.innerWidth*window.innerHeight)))/4):1/0}e.s(["D",0,function(e=2){if(!a())return!0;let t=Math.min(window.devicePixelRatio||1,e);return window.innerWidth*window.innerHeight*t*t<=4e6},"A",0,function(e,t=1){let a=e;return(window.matchMedia?.("(pointer: coarse)").matches||700>Math.min(window.innerWidth,window.innerHeight))&&(a=Math.max(2,Math.min(e,2.5))),o()&&(a=Math.min(a,1.25)),[Math.min(t,a=Math.min(a,i())),a]},"_",0,o,"j",0,i,"l",0,a])},16352,e=>{let t=null,o=/swiftshader|llvmpipe|softpipe|software|basic render driver|microsoft basic/i;window.addEventListener("unhandledrejection",e=>{let o=e.reason,a=o&&"string"==typeof o.message?o.message:"";/WebGL context/i.test(a)&&(e.preventDefault(),t=!1)}),e.s(["f",0,function(){if(null!==t)return t;try{let e=document.createElement("canvas"),a=e.getContext("webgl2")||e.getContext("webgl");t=!!a&&!function(e){try{let t=e.getExtension("WEBGL_debug_renderer_info"),a=String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER)??"");if(o.test(a))return!0}catch{}let t=navigator;return"number"==typeof t.deviceMemory&&t.deviceMemory<=1&&(t.hardwareConcurrency??8)<=2}(a),/Firefox\//.test(navigator.userAgent)?(e.width=1,e.height=1):a?.getExtension("WEBGL_lose_context")?.loseContext()}catch{t=!1}return t}])}])})();