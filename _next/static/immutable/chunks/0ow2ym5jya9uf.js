(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42055,a=>{var e=a.i(43476),o=a.i(1119),t=a.i(71645),i=a.i(25234),r=a.i(90072),l=a.i(1892),n=a.i(23020),s=a.i(86715),u=a.i(95399),c=a.i(42597),f=a.i(87105),p=a.i(92111),m=a.i(99121),d=a.i(84910),v=a.i(72020);let h=new r.nd,g=new r.nd,x=new r.nd,b=new r.cE,M=new r.cE;function C({storyline:a,reduce:o,rottura:l,suolo:n}){let s=(0,t.useRef)(null),c=(0,v.f)(),f=(0,t.useMemo)(()=>new r.kG(d.r,d.r,d.e,6,6,1),[]),y=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,side:r.tw,uniforms:{uPeso:{value:0},uT:{value:0},uPiano:{value:new r.$i(0,1,0,1.27)},uScossa:{value:0}},vertexShader:`
      uniform float uT;
      uniform float uScossa;
      uniform vec4 uPiano;
      varying float vGiu;
      void main() {
        vec4 w = instanceMatrix * vec4(position, 1.0);
        // quanto sta sotto il pelo dell'acqua: a filo fermo, piu' giu' ondula di piu'
        float giu = -(dot(uPiano.xyz, w.xyz) + uPiano.w);
        vGiu = giu;
        float ampio = (0.008 + max(giu, 0.0) * 0.03) * (1.0 + uScossa * 2.2);
        w.x += (sin(giu * 8.0 + uT * 0.9 + w.x * 1.3) + 0.55 * sin(giu * 17.0 - uT * 1.35)) * ampio;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uPeso;
      uniform float uT;
      varying float vGiu;
      void main() {
        if (vGiu < 0.0) discard;
        // si perde come la luna: pieno al piede, spezzato a strisce sottili piu' giu'
        float a = exp(-vGiu * 0.62);
        a *= 0.86 + 0.14 * sin(vGiu * 46.0 + uT * 0.8) * smoothstep(0.1, 0.8, vGiu);
        // SULL'ACQUA NERA IL NERO NON SI VEDE (a 1440 il riflesso spariva). Provati
        // i punti di luce della pietra, allungati: sotto l'ondulazione erano tacche
        // da lavagna, via. Resta la massa, appena piu' chiara del nero che sta sotto:
        // dove l'acqua ha luce (la colonna della luna) e' un'ombra, dove non ne ha
        // e' il riflesso spento di una pietra.
        gl_FragColor = vec4(${(0,m.s)("avorio",.042)}, a * 0.82 * uPeso);
      }`}),[]);return((0,t.useEffect)(()=>()=>{f.dispose(),y.dispose()},[f,y]),(0,i.f)(()=>{let e=s.current,t=n.current;if(!e||!t)return;let i=a.current,r=a=>{let e=Math.max(0,Math.min(1,a));return e*e*(3-2*e)},c=Math.max(0,Math.min(1,i.ritorno??0)),f=Math.max(1-r((i.k-.3)/.3),r((c-.55)/.3)),m=t.uniforms.uPeso.value*f,d=p.f.cubi;if(e.visible=m>.004&&!!d,!e.visible||!d)return;let v=y.uniforms;v.uPeso.value=m,v.uT.value=o?0:(0,u.B)()/1e3,v.uScossa.value=o?0:l?.current.scarica??0,x.set(1,0,0,0,0,-1,0,2*p.f.quota,0,0,1,0,0,0,0,1),h.copy(p.f.m).multiply(x).multiply(p.f.inv),b.set(0,1,0).transformDirection(p.f.m),M.set(0,p.f.quota,0).applyMatrix4(p.f.m),v.uPiano.value.set(b.x,b.y,b.z,-b.dot(M));for(let a=0;a<23;a++){let o=d[a];o&&(o.updateWorldMatrix(!0,!1),e.setMatrixAt(a,g.multiplyMatrices(h,o.matrixWorld)))}e.instanceMatrix.needsUpdate=!0}),"low"===c)?null:(0,e.jsx)("instancedMesh",{ref:s,args:[f,y,23],frustumCulled:!1,renderOrder:-800,visible:!1})}let y=new r.wq(9,9);a.s(["f",0,function({storyline:a,reduce:d,rottura:v,mobile:h=!1,fisso:g}){let x=(0,t.useRef)(null),b=(0,t.useRef)(null),M=(0,t.useRef)(null),z=(0,t.useRef)(null),P=(0,t.useRef)(null),L=(0,t.useRef)(-1),w=(0,t.useRef)(0),T=(0,t.useRef)(0),A=(0,t.useRef)(1e6),q=(0,t.useRef)(0),S=(0,t.useMemo)(()=>{let a=new Float32Array(3300),e=new Float32Array(1100),o=0x135283b,t=()=>(o=1664525*o+0x3c6ef35f>>>0)/0x100000000;for(let o=0;o<1100;o++){let i=o<600?14+20*t():38+32*t(),r=t()*Math.PI*2,l=.04+.85*t();a[3*o]=Math.cos(r)*i,a[3*o+1]=-1.27+l*i*.7,a[3*o+2]=-Math.abs(Math.sin(r))*i-6,e[o]=o<600?.012+t()*t()*t()*.1:.02+t()*t()*.07}let i=new r.ld;return i.setAttribute("position",new r.f5(a,3)),i.setAttribute("gran",new r.f5(e,1)),i},[]),O=(0,t.useRef)(null),E=(0,t.useRef)(0),R=(0,t.useMemo)(()=>{let a=new r.ld;return a.setAttribute("position",new r.f5(new Float32Array(3),3)),a},[]),I=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0}},vertexShader:`
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = 3.6;
      }`,fragmentShader:`
      uniform float uPeso;
      void main() {
        float a = smoothstep(0.5, 0.1, length(gl_PointCoord - 0.5));
        gl_FragColor = vec4(${(0,m.s)("avorio",.95)}, a * uPeso * 0.9);
        if (gl_FragColor.a < 0.004) discard;
      }`}),[]),j=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0},uT:{value:0},uTira:{value:0},uCaldo:{value:0},uColpo:{value:0}},vertexShader:`
      attribute float gran;
      varying float vG;
      varying float vProf;
      uniform float uT;
      uniform float uTira;
      void main() {
        vG = gran;
        // tenendo premuto il cielo viene tirato verso il marchio che si apre:
        // ogni stella di un tratto suo, le vicine di piu'
        vec3 p = position;
        float quanto = uTira * (0.18 + 0.32 * fract(gran * 37.1));
        p.xy = mix(p.xy, vec2(0.0, 2.0), quanto);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vProf = clamp((-mv.z - 16.0) / 50.0, 0.0, 1.0);
        // la taglia in pixel tiene conto della distanza: una stella lontana
        // resta un punto, non un disco
        gl_PointSize = gran * 620.0 * (1.0 + uTira * 0.9) / max(1.0, -mv.z);
      }`,fragmentShader:`
      varying float vG;
      varying float vProf;
      uniform float uPeso;
      uniform float uT;
      // dichiarata anche qui: senza, dal 2 ottobre il frammento non compilava
      // e il cielo intero spariva ("useProgram: program not valid" a ogni giro)
      uniform float uTira;
      uniform float uCaldo;
      uniform float uColpo;
      void main() {
        // un punto tondo con il bordo morbido: un quadrato duro a un pixel
        // si legge come un artefatto, non come una stella
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d);
        float a = smoothstep(0.5, 0.06, r);
        // e respirano appena, ognuna col suo passo: un cielo immobile e' una
        // texture. Il battito e' lentissimo, si nota solo di sottecchi.
        float fase = fract(vG * 91.7) * 6.283;
        // le lontane respirano piu' piano e brillano meno: e' la profondita'
        a *= 0.55 + 0.45 * sin(uT * mix(0.6, 0.35, vProf) + fase);
        a *= mix(1.1, 0.45, vProf);
        // nella Frattura la luce del sole riempie l'aria e le stelle scendono
        // al trenta per cento: e' il cielo di un tramonto, non della notte
        vec3 sc = mix(mix(${(0,m.s)("avorio",1.023)}, ${(0,m.s)("avorio",.803)}, max(uTira, vProf * 0.6)), ${(0,m.s)("caldoChiaro",1.009)}, uCaldo);
        gl_FragColor = vec4(sc, a * uPeso * (0.9 + uTira * 0.6) * (1.0 - uCaldo * 0.7) * (1.0 - uColpo * 0.95));
        if (gl_FragColor.a < 0.004) discard;
      }`}),[]),V=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0},uT:{value:0},uAperto:{value:0},uCaldo:{value:0},uColpo:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uT;
      uniform float uAperto;
      uniform float uCaldo;
      uniform float uColpo;
      void main() {
        vec2 d = (vUv - vec2(0.5, 0.46)) * vec2(1.35, 1.0);
        float r = length(d) * 2.0;
        // curva morbida e senza bordo: la potenza alta tiene il centro pieno
        // e fa morire la coda molto prima del bordo del piano, cosi' non si
        // vede mai il rettangolo su cui e' disegnato
        float a = pow(max(0.0, 1.0 - r), 3.2);
        // respira lentissimo: un alone fisso si legge come una vignettatura
        // al contrario, uno che respira si legge come aria
        a *= 0.90 + 0.10 * sin(uT * 0.21);
        // freddo, e con un filo di blu del sito nel cuore: e' l'unica luce
        // della schermata e deve sembrare la stessa famiglia dell'accento
        vec3 col = mix(${(0,m.s)("avorio",.366)}, ${(0,m.s)("avorio",.347)}, smoothstep(0.55, 0.0, r));
        // cresce mentre il monumento si apre: la stessa luce di prima, che
        // adesso passa attraverso invece di essere fermata
        // LA FRATTURA: la luce diventa radente e calda. Non cambia da dove
        // viene: e' la stessa, con il pianeta davanti al sole e l'aria piena
        // della sua luce bassa. L'alone si apre in basso, sull'orizzonte.
        float basso = pow(max(0.0, 1.0 - length((vUv - vec2(0.62, 0.30)) * vec2(0.9, 2.4))), 2.4);
        // …E MUORE PRIMA DEI BORDI DEL PIANO (6 ottobre 2026): al bordo destro
        // valeva ancora un terzo, al bordo basso un ventesimo, e il piano si
        // tagliava di netto — una fascia di colore diverso in basso a destra,
        // \xabuna cosa non a tutto schermo\xbb. Ora si spegne a zero lungo i quattro lati.
        vec2 lato = min(vUv, 1.0 - vUv);
        basso *= smoothstep(0.0, 0.22, lato.x) * smoothstep(0.0, 0.22, lato.y);
        col = mix(col, ${(0,m.s)("caldo",.732)}, uCaldo * 0.45);
        // IL COLPO: per un battito la luce radente riempie l'aria, bassa e calda
        // (il velo vero sta in materiaColpo, a tutto schermo: disegnato su
        // questo piano si vedeva il rettangolo, mezzo schermo in basso)
        col = mix(col, ${(0,m.s)("caldoChiaro",1.075)}, uColpo * 0.8);
        gl_FragColor = vec4(col, (a * (0.30 + uAperto * 0.28) * (1.0 - uCaldo * 0.35) + basso * uCaldo * 0.12) * uPeso);
        if (gl_FragColor.a < 0.002) discard;
      }`}),[]),$=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0},uT:{value:0},uCaldo:{value:0},uLunaV:{value:new r.wq(15,8)}},vertexShader:`
      varying vec2 vL;
      void main() {
        vL = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vL;
      uniform float uPeso;
      uniform float uT;
      uniform float uCaldo;
      uniform vec2 uLunaV;
      ${n.f}
      float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      void main() {
        float y = vL.y;
        if (y < -0.3) discard;
        vec2 p = vL / 26.0;
        float t = uT * 0.004;
        float f = n2(p * 2.0 + vec2(t, 0.0)) * 0.55 + n2(p * 4.3 - vec2(0.0, t)) * 0.3 + n2(p * 9.1 + t) * 0.15;
        // una fascia diagonale, larga: la nebulosa ha una direzione
        float fascia = exp(-pow((p.y - p.x * 0.35 - 0.5) / 0.32, 2.0));
        float neb = smoothstep(0.45, 0.9, f) * fascia * smoothstep(1.0, 6.0, y);
        vec3 col = mix(${(0,m.s)("avorio",.35)}, ${(0,m.s)("caldo",.5)}, smoothstep(0.6, 0.9, f)) * neb * 0.09;
        // LA LUCE DELL'ORIZZONTE e' quella del mondo (scena/mondo.ts): la
        // stessa lama, nebbia e foschia in tutta la home. Il piano sta a 48
        // unita' dalla camera: un'altezza di schermo vale 36.9 unita'.
        col += mondoOrizzonte(y / 36.9, vL.x / 36.9, uT);
        // LA SCIA (15 ottobre 2026, sera): ogni quaranta secondi d'ambiente
        // un filo caldo attraversa il cielo alto, lento, da destra a
        // sinistra, e si spegne. Una sola alla volta, mai sopra il testo
        // (passa in alto e muore prima della colonna di sinistra).
        float giroS = uT / 40.0;
        float fase = fract(giroS);
        float semeS = fract(sin(floor(giroS) * 12.9898) * 43758.5453);
        if (fase < 0.32) {
          float a = fase / 0.32;
          vec2 da = vec2(34.0, 20.0 + semeS * 6.0), verso = normalize(vec2(-1.0, -0.22));
          vec2 testa = da + verso * a * 52.0;
          vec2 rel = vL - testa;
          float lungo = -dot(rel, verso);
          float lato = abs(rel.x * verso.y - rel.y * verso.x);
          float coda = smoothstep(9.0, 0.0, lungo) * step(0.0, lungo);
          float scia = coda * exp(-pow(lato / 0.05, 2.0)) * sin(a * 3.14159) * smoothstep(-20.0, -8.0, vL.x);
          col += ${(0,m.s)("caldoChiaro",1)} * scia * 0.5;
        }
        // ── IL CIELO PIU' RICCO (15 ottobre 2026, Lorenzo: \xabmolto piu'
        // creativo, piu' dettagli\xbb) ───────────────────────────────────────
        // Dietro il marchio tutto si fa piu' quieto: il protagonista respira.
        float quieto = 1.0 - 0.75 * exp(-pow(vL.x / 8.0, 2.0) - pow((y - 3.0) / 6.0, 2.0));
        // LA VIA LATTEA: una fascia fine in alto a destra, polvere di stelle
        // a celle sotto il pixel e una corsia di polvere scura nel mezzo
        float vd = (y - (24.0 - 0.4 * vL.x)) / 1.08;
        float via = exp(-pow(vd / 3.4, 2.0)) * smoothstep(2.0, 8.0, y);
        float corsia = 1.0 - 0.7 * exp(-pow((vd + (f - 0.5) * 1.6) / 0.7, 2.0));
        vec2 cs = floor(vL / 0.13);
        float st = h(cs);
        vec2 fc = fract(vL / 0.13) - 0.5 - (vec2(h(cs + 3.7), h(cs + 9.1)) - 0.5) * 0.5;
        float punto = smoothstep(0.32, 0.0, length(fc)) * step(1.0 - via * 0.16 - 0.006, st);
        col += (${(0,m.s)("avorio",.55)} * via * (0.09 + f * 0.12) * corsia + ${(0,m.s)("avorio",.9)} * punto * (0.55 + 0.45 * sin(uT * 0.4 + st * 40.0)) * 0.7) * quieto;
        gl_FragColor = vec4(col * uPeso, 1.0);
      }`}),[]),U=(0,t.useMemo)(()=>{let a=new Float32Array(600),e=0x1352896,o=()=>(e=1664525*e+0x3c6ef35f>>>0)/0x100000000;for(let e=0;e<200;e++)a[3*e]=(o()-.5)*22,a[3*e+1]=-1.07+7.5*o(),a[3*e+2]=3.5-18*o();let t=new r.ld;return t.setAttribute("position",new r.f5(a,3)),t},[]),_=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0},uT:{value:0},uK:{value:0},uPunta:{value:new r.wq(9,9)}},vertexShader:`
      uniform float uT;
      uniform float uK;
      uniform vec2 uPunta;
      varying float vA;
      void main() {
        vec3 p = position;
        float seme = fract(sin(dot(p.xz, vec2(12.9, 78.2))) * 4375.5);
        p.x += sin(uT * 0.05 + seme * 6.28) * 0.35;
        p.y += cos(uT * 0.04 + seme * 4.1) * 0.22;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float z = max(0.6, -mv.z);
        // la parallasse dello scroll: piu' vicino, piu' corre
        mv.y += uK * 6.0 / z;
        gl_Position = projectionMatrix * mv;
        // e si scansa attorno al puntatore, come aria mossa da una mano
        vec2 nd = gl_Position.xy / gl_Position.w - uPunta;
        float sc = exp(-dot(nd, nd) / 0.03);
        gl_Position.xy += normalize(nd + 1e-4) * sc * 0.08 * gl_Position.w;
        gl_PointSize = clamp((1.2 + seme * 2.4) * 14.0 / z, 1.0, 6.0);
        vA = (0.35 + 0.65 * seme) * smoothstep(0.8, 3.0, z) * (1.0 - smoothstep(12.0, 22.0, z));
      }`,fragmentShader:`
      uniform float uPeso;
      varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, r) * vA * uPeso * 0.22;
        if (a < 0.003) discard;
        gl_FragColor = vec4(${(0,m.s)("avorio",.9)}, a);
      }`}),[]),F=(0,t.useRef)(null),N=(0,t.useRef)(null),G=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,depthTest:!1,blending:r.tq,uniforms:{uColpo:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uColpo;
      void main() {
        // non uno schermo che si schiarisce: una lama di luce bassa che corre
        // lungo l'orizzonte, da bordo a bordo, e muore in alto e in basso
        float y = (vUv.y - 0.45) / 0.10;
        float lama = exp(-y * y);
        float a = uColpo * (lama * 0.16 + 0.03);
        vec3 col = mix(${(0,m.s)("caldo",1.041)}, ${(0,m.s)("caldoChiaro",1.075)}, lama);
        gl_FragColor = vec4(col, a);
        if (gl_FragColor.a < 0.002) discard;
      }`}),[]),W=(0,t.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.UM,blendSrc:r.Vt,blendDst:r.oL,uniforms:{uPeso:{value:0},uT:{value:0},uTaglio:{value:h?.35:.455},uCaldo:{value:0},uColpo:{value:0},uSole:{value:new r.cE(.9,.25,.2).normalize()},uCorona:{value:0},uScuro:{value:0},uVivo:{value:0},uCrepa:{value:0},uCrepaFissa:{value:0},uManoL:{value:+!!h}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uT;
      uniform float uTaglio;
      uniform float uCaldo;
      uniform float uColpo;
      uniform vec3 uSole;
      uniform float uCorona, uScuro;
      uniform float uVivo;
      uniform float uCrepa;
      uniform float uCrepaFissa;
      uniform float uManoL;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float rumore(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
      }
      void main() {
        // ── LA LUNA, TERZA MANO (15 ottobre 2026) ──────────────────────────
        // Lorenzo: niente linee ne' tratteggi nel mondo (\xabda Awwwards\xbb). Era
        // un disco nero enorme coi cerchi incisi: pesava, e il marchio lo
        // toccava. Ora e' piu' piccola e lontana, appoggiata dietro la
        // foschia calda dell'orizzonte: materia e luce. Il disco occupa i
        // tre quarti del quadrato, il resto e' l'alone.
        vec2 d = vUv - 0.5;
        float r = length(d) * 2.0 / 0.75;
        if (r > 1.33) discard;
        float rc = min(r, 1.0);
        vec2 dn = d * 2.0 / 0.75;
        vec3 n = normalize(vec3(dn, sqrt(max(0.0, 1.0 - rc * rc))));
        // la stella e' a destra, appena dietro: una falce, col terminatore
        // MORBIDO (la luce muore su un quarto di sfera, non su una riga)
        vec3 sole = normalize(uSole);
        float lr = dot(n, sole);
        float ter = smoothstep(-0.12, 0.55, lr);
        // la superficie: ossidiana con una grana finissima d'avorio, a
        // celle ferme sulla sfera (si legge come pietra, non come crateri)
        // ruota lentissima: la grana scorre sulla sfera
        vec2 s = n.xy / (0.35 + 0.65 * n.z) + vec2(uT * 0.004, 0.0);
        float grana = hash(floor(s * 70.0));
        // LE CREPE E LA SUPERFICIE SI CONTANO SOLO DOVE SERVONO (3 novembre
        // 2026): due reti di Voronoi 3x3 e otto rumori per frammento giravano
        // anche a crepa spenta e fuori dal disco, dove ogni termine che li
        // usa e' moltiplicato per zero (disco, o cr). Il risultato e' lo
        // stesso al bit; il costo in mano, nel cielo dell'hero, no
        float cr = max(uCrepa * uVivo, uCrepaFissa);
        bool dentro = r < 1.0;
        float albedo = 0.0;
        if (dentro) {
          float macchie = rumore(s * 3.0 + 2.0) * 0.6 + rumore(s * 7.0) * 0.4;
          albedo = 0.55 + 0.25 * macchie + (step(0.86, grana) * 0.5 - 0.05);
        }
        // ── LO SPAZIO VIVO (31 ottobre 2026, Lorenzo: \xabpiu' dettagli nello
        // spazio, il pianeta che fa qualcosa\xbb). Prima la grana scivolava
        // piatta sul disco (uT * 0.004): non si leggeva come una sfera che
        // gira. Ora la superficie e' scritta in longitudine e latitudine
        // attorno a un asse appena inclinato e gira davvero: un giro ogni
        // nove minuti circa, si vede solo tornando a guardarla. Le macchie
        // larghe sono mari, piu' scuri; ai poli si stringono come su un globo.
        float ci = 0.94, si = 0.34;
        vec3 nq = vec3(n.x * ci + n.y * si, -n.x * si + n.y * ci, n.z);
        float lon = atan(nq.x, nq.z) + uT * 0.0116;
        float lat = asin(clamp(nq.y, -1.0, 1.0));
        vec2 sf = vec2(lon * 1.6, lat * 1.9);
        if (dentro && uVivo > 0.0) {
          float mari = rumore(sf * 1.3 + 5.0) * 0.65 + rumore(sf * 3.1 + 1.0) * 0.35;
          float albedoV = 0.6 + 0.3 * smoothstep(0.35, 0.7, mari) - 0.22 * smoothstep(0.62, 0.42, mari) + (step(0.86, grana) * 0.4 - 0.05);
          albedo = mix(albedo, albedoV, uVivo);
        }
        // LE CREPE: la stessa ferita della piana e dei servizi, sulla luna.
        // Bordi di celle sulla sfera (che girano con lei); a riposo non si
        // vedono, al tocco del marchio la luce le attraversa da dentro
        // CREPE VERE (31 ottobre, sera): una rete di celle a tratto uguale si
        // leggeva come una retina. Ora il dominio e' storto dal rumore (i
        // bordi vagano), la larghezza cambia lungo il bordo e si assottiglia
        // fino a niente, e accanto al filo acceso c'e' un labbro scuro: la
        // crepa e' incisa nella pietra, non disegnata sopra.
        float crepa = 0.0, labbro = 0.0, nucleo = 0.0;
        if (cr > 0.0) {
          vec2 sw = sf + (vec2(rumore(sf * 2.6 + 11.0), rumore(sf * 2.6 + 4.0)) - 0.5) * 0.55;
          // IN MANO LA LUNA E' PICCOLA (5 novembre 2026): meno celle e, sotto,
          // il filo non scende mai sotto il pixel. Prima a 390 si perdevano
          vec2 cq = sw * mix(2.2, 1.45, uManoL); vec2 ci0 = floor(cq); float d1 = 9.0, d2 = 9.0;
          for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
            vec2 o = vec2(float(i), float(j));
            vec2 pt = o + vec2(hash(ci0 + o), hash(ci0 + o + 7.3)) - fract(cq);
            float dd = dot(pt, pt);
            if (dd < d1) { d2 = d1; d1 = dd; } else if (dd < d2) d2 = dd;
          }
          float bordoC = sqrt(d2) - sqrt(d1);
          float largo = 0.012 + 0.07 * smoothstep(0.25, 0.8, rumore(sw * 3.3 + 9.0));
          largo = max(largo, fwidth(bordoC) * 0.9 * (0.6 + 0.8 * uManoL));
          float tiene = smoothstep(0.3, 0.6, rumore(sf * 1.7 + 3.0));
          crepa = smoothstep(largo, largo * 0.15, bordoC) * tiene;
          labbro = smoothstep(largo * 3.5, largo, bordoC) * (1.0 - crepa) * tiene;
          // la brace dentro: il cuore del filo e' piu' chiaro dei suoi lati
          nucleo = smoothstep(largo * 0.5, largo * 0.05, bordoC) * tiene;
          // i capelli: una seconda rete piu' fitta che si apre solo quando la
          // luce spinge forte, e solo vicino alle crepe grandi (ne nascono)
          vec2 hq = sw * 6.0; vec2 hi0 = floor(hq); float h1 = 9.0, h2 = 9.0;
          for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
            vec2 o = vec2(float(i), float(j));
            vec2 pt = o + vec2(hash(hi0 + o + 3.1), hash(hi0 + o + 5.7)) - fract(hq);
            float dd = dot(pt, pt);
            if (dd < h1) { h2 = h1; h1 = dd; } else if (dd < h2) h2 = dd;
          }
          float hb = sqrt(h2) - sqrt(h1);
          float capelli = smoothstep(max(0.035, fwidth(hb) * 0.8), 0.0, hb) * smoothstep(0.2, 0.0, bordoC) * tiene * smoothstep(0.55, 0.9, max(uCrepa, uCrepaFissa));
          crepa = max(crepa, capelli * 0.6);
        }
        float disco = smoothstep(1.0, 1.0 - fwidth(r) * 1.5 - 1e-4, r);
        float faccia = ter * albedo * disco * (1.0 - labbro * 0.55 * max(uCrepa * uVivo, uCrepaFissa));
        // la falce calda sfumata, e l'alone che esce dal bordo illuminato
        // e la falce respira
        float falce = pow(max(0.0, lr), 3.0) * smoothstep(0.55, 1.0, r) * disco * (0.85 + 0.15 * sin(uT * 0.35));
        vec2 dir = normalize(dn + 1e-5);
        float lato = max(0.0, dot(dir, normalize(sole.xy)));
        float alone = (1.0 - disco) * exp(-pow((r - 1.0) / 0.13, 2.0)) * (0.25 + 0.75 * pow(lato, 2.0));
        float sopra = smoothstep(0.0, 0.04, vUv.y - uTaglio);
        // e la foschia: la meta' bassa sfuma dentro la luce dell'orizzonte
        float nebbia = smoothstep(0.0, 0.18, vUv.y - uTaglio);
        float a = (faccia * 0.5 * (1.0 - uScuro) + falce * 0.9 * (1.0 - uScuro * 0.6) + alone * 0.45) * sopra * (0.45 + 0.55 * nebbia);
        // LA CORONA DELL'ECLISSI: un filo d'avorio sul bordo, piu' acceso dal
        // lato da cui arriva la luce, che sfuma appena fuori dal disco
        float latoC = 0.2 + 0.8 * pow(max(0.0, dot(dir, normalize(sole.xy + 1e-4))), 1.6);
        float filoC = exp(-pow((r - 1.0) / 0.018, 2.0)) + exp(-pow((r - 1.0) / 0.07, 2.0)) * 0.35 + (1.0 - disco) * exp(-(r - 1.0) / 0.12) * 0.25;
        a += filoC * latoC * uCorona * sopra;
        // LA LUCE CINEREA: il lato buio non e' morto. La piana d'ossidiana
        // rimanda un niente di luce, e i mari si intravedono nell'ombra
        float cinerea = (1.0 - ter) * disco * (0.05 + 0.07 * smoothstep(0.3, 0.75, albedo)) * uVivo;
        // L'ATMOSFERA: un velo sottilissimo sul bordo, solo dal lato del
        // sole; e' piu' stretto dell'alone e non respira (e' aria, non luce)
        float atmo = exp(-pow((r - 1.005) / 0.022, 2.0)) * pow(max(0.0, dot(dir, normalize(sole.xy))), 1.4) * uVivo;
        a += (cinerea + atmo * 0.55) * sopra * (0.45 + 0.55 * nebbia);
        // la luce che filtra dalle crepe si legge nel lato buio, non nella falce
        float filtra = crepa * disco * (1.0 - ter * 0.8) * max(uCrepa * uVivo, uCrepaFissa);
        // e la luce esce: oltre il bordo la crepa continua per un soffio
        // (fuori dal disco sf resta quello del lembo), come un raggio che
        // sfugge da una fessura sul profilo
        float sfugge = crepa * (1.0 - disco) * exp(-(r - 1.0) / 0.06) * max(uCrepa * uVivo, uCrepaFissa);
        a += (filtra * 0.85 + sfugge * 0.5) * sopra;
        // ── LA LUNETTA: un sasso piccolo le gira attorno, su un'orbita
        // inclinata (un giro ogni settanta secondi). Dietro il disco non si
        // vede (passa dietro, non sparisce), davanti si stacca nera sulla
        // faccia; la luce le arriva dallo stesso sole, una falce sua.
        float fo = uT * 0.09;
        vec3 lp = vec3(cos(fo) * 1.22, sin(fo) * 0.22 + cos(fo) * 0.1, sin(fo));
        vec2 dl = (dn - lp.xy) / 0.045;
        float rl = length(dl);
        float sasso = smoothstep(1.0, 0.8, rl) * uVivo;
        float dietro = step(lp.z, 0.0) * disco;
        sasso *= 1.0 - dietro;
        vec3 nl = normalize(vec3(dl, sqrt(max(0.0, 1.0 - min(rl, 1.0) * min(rl, 1.0)))));
        float luceL = smoothstep(-0.1, 0.5, dot(nl, sole));
        a = mix(a, luceL * 0.75, sasso);

        // IL PIANETA DAVANTI AL SOLE: nella Frattura il disco si fa controluce
        float lam = max(0.0, lr);
        float corona = smoothstep(1.0, 0.9, rc) * smoothstep(0.62, 1.0, rc) * (0.12 + 0.88 * pow(lam, 2.5));
        a += corona * (uCaldo * 0.45 + uColpo * 2.4) * sopra * disco;
        a += uColpo * 1.2 * smoothstep(1.0, 0.9, rc) * pow(lam, 4.0) * disco;
        vec3 col = mix(${(0,m.s)("avorio",.62)}, ${(0,m.s)("caldo",1)}, clamp(falce * 1.2 + alone * 2.0 + (1.0 - ter) * 0.3, 0.0, 1.0));
        float cor = clamp(corona * 3.0, 0.0, 1.0);
        col = mix(col, ${(0,m.s)("caldo",1.041)}, uCaldo * 0.5 * cor);
        col = mix(col, ${(0,m.s)("caldoChiaro",1.085)}, uColpo * 0.8);
        // premoltiplicato: luce in rgb, copertura in alfa; la foschia la
        // copre meno in basso, cosi' l'orizzonte le passa davanti
        // la corona e' d'avorio: dove c'e' lei il colore va verso la luce
        col = mix(col, ${(0,m.s)("avorio",1)}, clamp(filoC * latoC * uCorona, 0.0, 1.0) * 0.85);
        // l'aria e la lunetta sono d'avorio freddo, non della falce calda
        col = mix(col, ${(0,m.s)("avorio",.9)}, clamp(atmo * 0.6 + sasso, 0.0, 1.0) * uVivo);
        col = mix(col, ${(0,m.s)("caldo",1)}, clamp(filtra * 3.0, 0.0, 1.0));
        col = mix(col, ${(0,m.s)("caldoChiaro",1.15)}, nucleo * clamp(filtra * 2.0, 0.0, 1.0));
        float copre = max(disco, sasso) * sopra * uPeso * (0.35 + 0.65 * nebbia) * (1.0 - uColpo * 0.5);
        gl_FragColor = vec4(col * a * uPeso * (0.55 + uCaldo * 0.3 + uColpo * 1.6), copre);
        if (gl_FragColor.a < 0.002 && a * uPeso < 0.002) discard;
      }`}),[]),D=(0,t.useMemo)(()=>new r.Zg({polygonOffset:!0,polygonOffsetFactor:50,polygonOffsetUnits:50,transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0},uT:{value:0},uCompatto:{value:1},uMano:{value:+!!h},uOnda:{value:-1},uCaldo:{value:0},uLampo:{value:-1},uRete:{value:0},uCopre:{value:0},uPozza:{value:1},uLuna:{value:new r.cE(8.2,2,-30)},uLunaPeso:{value:0},uLunaCrepa:{value:0},uTocco:{value:new r.cE(0,0,0)}},vertexShader:`
      varying vec3 vW;
      varying vec2 vL;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        // le coordinate della piana sono le SUE, non del mondo: quando in
        // fondo all'atto il mondo bascula, creste e luce restano attaccate
        // al terreno (il piano e' a z -25, ruotato di -90 gradi)
        vL = vec2(position.x, -position.y - 25.0);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      varying vec3 vW;
      varying vec2 vL;
      uniform float uRete;
      uniform float uCopre;
      uniform float uPeso;
      uniform float uT;
      uniform float uCompatto;
      uniform float uPozza;
      uniform float uMano;
      uniform float uOnda;
      uniform float uCaldo;
      uniform float uLampo;
      uniform vec3 uLuna;
      uniform float uLunaPeso;
      uniform float uLunaCrepa;
      uniform vec3 uTocco;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      // rumore a valore con interpolazione morbida: piu' che sufficiente per
      // un terreno visto di scorcio, e costa un quarto di un Perlin
      float rumore(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      // QUATTRO OTTAVE E NON SEI: dalla quinta in giu' i dettagli sono piu'
      // piccoli di un pixel a questa distanza, quindi si pagano e non si vedono.
      float quota(vec2 p) {
        float a = 0.5, s = 0.0;
        for (int o = 0; o < 4; o++) { s += rumore(p) * a; p *= 2.07; a *= 0.5; }
        return s;
      }

      void main() {
        vec2 P = vL;
        float d = length(P);

        // ── IL RILIEVO E LA SUA NORMALE ────────────────────────────────────
        // Il passo del campione cresce con la distanza: vicino serve dettaglio,
        // lontano no, e campionare fine a venti unita' produce solo scintillio
        // (aliasing) perche' il terreno cambia piu' in fretta dei pixel.
        float e = 0.06 + d * 0.012;
        float h  = quota(P * 0.42);
        float hx = quota((P + vec2(e, 0.0)) * 0.42);
        float hz = quota((P + vec2(0.0, e)) * 0.42);
        vec3 n = normalize(vec3((h - hx) / e * 0.55, 1.0, (h - hz) / e * 0.55));

        // ── LA LUCE: una sola, bassa, DIETRO ───────────────────────────────
        // Stessa direzione da cui viene l'alone e da cui sta il pianeta: la
        // scena ha una sorgente e tutto le obbedisce. Una seconda luce
        // \xabper far vedere meglio\xbb e' il modo piu' rapido di far sembrare finto
        // un ambiente.
        vec3 sole = normalize(vec3(0.22, 0.13, -1.0));
        float diff = max(0.0, dot(n, sole));
        // la radente esalta le creste: elevare a potenza stringe la luce sui
        // versanti esposti e lascia il resto nero, che e' come si vede una
        // pianura al tramonto
        float cresta = pow(diff, 2.6);

        // ── LE CREPE ───────────────────────────────────────────────────────
        float c = quota(P * 0.9 + 31.7);
        float crepaV = 1.0 - abs(c * 2.0 - 1.0);
        // (5 novembre 2026) sono curve di livello, quindi si chiudono ad anello e hanno
        // lo stesso tratto dappertutto. Un rumore lento le interrompe e le assottiglia
        // fino a niente, come le crepe dei mondi
        float aperta = rumore(P * 0.55 + 11.3);
        float crepa = smoothstep(mix(0.998, 0.982, aperta), 1.0, crepaV) * smoothstep(0.26, 0.48, aperta);
        // solo dove il terreno e' alto: il vetro si spacca sulle gobbe
        crepa *= smoothstep(0.42, 0.72, h);
        // il labbro: appena fuori dal filo la pietra perde luce, e la crepa ha un fondo
        float labbroP = smoothstep(0.945, 0.985, crepaV) * smoothstep(0.26, 0.48, aperta) * smoothstep(0.42, 0.72, h);

        // ── LA POLVERE ─────────────────────────────────────────────────────
        // grana fine che vive solo nella fascia media: vicino sarebbe rumore
        // sullo schermo, lontano un formicolio
        float polvere = rumore(P * 9.0) * smoothstep(2.0, 6.0, d) * (1.0 - smoothstep(12.0, 22.0, d));

        // ── DOVE LA PIANA VIVE ─────────────────────────────────────────────
        // muore all'orizzonte e non comincia addosso alla camera: il primo
        // piano resta nero anche per la luce radente, questo e' solo il taglio
        float lontano = 1.0 - smoothstep(8.0, 34.0, d);
        // misurata dall'obiettivo (5.6 e' la distanza camera-centro nell'hero,
        // dove le due misure coincidono): quando la ripresa arretra il primo
        // piano resta in ombra, se no la radente accendeva pozze sotto le parole
        float vicino = mix(smoothstep(1.0, 4.0, length(vW - cameraPosition) - 5.6), smoothstep(0.0, 1.4, d), uMano);
        // quando la piana si alza a parete il primo piano non e' piu' in
        // ombra: e' tutto davanti agli occhi, creste fino al bordo
        vicino = mix(vicino, 1.0, uCopre);
        lontano = mix(lontano, 1.0, uCopre * 0.8);

        // ── LA POZZA COL BUCO: la posatura ─────────────────────────────────
        // Su fondale nero un'ombra non si puo' disegnare — togliere luce dal
        // nero non da' niente — quindi l'ombra e' il BUCO dentro la luce: la
        // pozza cresce fino a un anello e cala verso il centro, e si legge come
        // \xabqui sotto c'e' qualcosa che la blocca\xbb.
        float anello = exp(-pow((d - 2.3) / 1.6, 2.0));
        float buco = 1.0 - uCompatto * exp(-pow(d / 1.6, 2.0)) * 0.95;

        // ── E LA RIGA DELL'ORIZZONTE ───────────────────────────────────────
        float orizzonte = exp(-pow((d - 24.0) / 8.0, 2.0));

        // ── E LA PIANA SI ACCENDE MENTRE IL MONUMENTO SI APRE ──────────────
        // NOTA: qui dentro niente apici inversi — questo e' il sorgente GLSL
        // dentro una stringa template, e un apice inverso la chiude.
        // uCompatto vale uno col marchio intero e scende mentre i ventitre
        // si allontanano. Il buco nella pozza si chiude gia' per conto suo —
        // se non c'e' piu' niente sopra, non c'e' piu' niente che faccia
        // ombra — ma la conseguenza vera e' piu' larga di quella: la luce che
        // il monumento stava BLOCCANDO adesso arriva al suolo. Quindi non si
        // riempie solo l'incavo, si alza tutta la pianura, e l'orizzonte si
        // apre. Chi tiene premuto non vede un effetto sullo sfondo: vede il
        // posto reagire alla cosa che gli sta succedendo sopra.
        float aperto = 1.0 - uCompatto;
        // Il guadagno sulle creste e' MINORE di quello sull'orizzonte, e non
        // per timidezza: le creste stanno anche nella fascia media, cioe'
        // dietro le etichette dei contatti, mentre l'orizzonte e' lontano e
        // non ha testo sopra. Il dramma si mette dove non fa danno.
        // quando la ripresa arretra il terreno vicino alla camera non e' piu'
        // quello vicino al centro: le crepe si misurano dall'obiettivo, se no
        // una crepa larga diventava una pozza arancione sotto le parole
        float lenti = mix(smoothstep(8.0, 14.0, length(vW - cameraPosition)), 1.0, uMano);
        float luce = (cresta * (0.42 + aperto * 0.16) * (1.0 - labbroP * 0.7) + crepa * lenti * (0.5 + aperto * 0.4) + polvere * 0.045) * lontano * vicino
                   // la pozza si spegne quando il marchio se ne va: senza
                   // niente sopra restava una luce sola in mezzo allo
                   // schermo, fra la banda e la cava (6 ottobre 2026)
                   + anello * buco * 0.30 * vicino * uPozza
                   + orizzonte * (0.20 + aperto * 0.26)
                   // ── IN MANO LA PIANA ARRIVA FINO AI PIEDI ─────────────
                   // Su uno schermo alto la meta' bassa e' tutta primo piano,
                   // e il primo piano per la luce radente e' buio: si vedeva
                   // una fascia nera sotto l'orizzonte, come se il mondo
                   // finisse li'. Qui il terreno vicino prende un riflesso
                   // freddo e basso, quanto basta perche' si legga come suolo.
                   + uMano * (0.07 + cresta * 0.10 + crepa * 0.2) * (1.0 - smoothstep(4.0, 12.0, d));

        // ── IL COLORE ──────────────────────────────────────────────────────
        // Ossidiana: quasi nera, freddissima. Verso l'orizzonte si scalda
        // appena, perche' li' c'e' la luce — e' l'unico accenno di calore del
        // sito, e serve a dire che una stella c'e', da qualche parte, bassa.
        vec3 col = mix(${(0,m.s)("avorio",.538)}, ${(0,m.s)("caldo",.853)}, smoothstep(12.0, 30.0, d));
        // LA FERITA: sotto il monumento che si apre le crepe prendono brace,
        // piu' forte vicino al centro
        float ferita = (1.0 - uCompatto) * crepa * exp(-pow(d / 7.0, 2.0)) * lontano * lenti;
        col = mix(col, ${(0,m.s)("caldo",1.041)}, clamp(ferita * 1.2, 0.0, 1.0));
        luce += ferita * 0.4;
        // IL RITORNO: un'onda che corre dal centro all'orizzonte, una volta
        if (uOnda >= 0.0) {
          // un filo che corre lungo le crepe, non una macchia: con la
          // fascia larga e il colore pieno il suolo vicino diventava una
          // nebbia lattiginosa (filmato il 3 ottobre, gesto-film.mjs)
          float fronte = 1.5 + uOnda * 16.0;
          float onda = exp(-pow((d - fronte) / 0.5, 2.0)) * (1.0 - smoothstep(0.5, 1.5, uOnda)) * lontano;
          luce += onda * (0.06 + crepa * 0.9 + cresta * 0.25);
          col = mix(col, ${(0,m.s)("avorio",.803)}, clamp(onda * (0.3 + crepa), 0.0, 1.0));
        }
        // ── LA FRATTURA: LA PIANA SI INCRINA ───────────────────────────────
        // Il marchio si rompe e il terreno sotto di lui risponde: lungo le
        // linee del reticolo (il passo dei cubetti, quattro volte) si aprono
        // crepe di luce calda. Non tutte: solo i tratti dove il rumore lo
        // concede, cosi' e' una spaccatura e non una griglia.
        if (uRete > 0.001) {
          // RAGGI CHE PARTONO DAL MARCHIO: l'angolo attorno al centro, storto
          // dal rumore, divide la piana in spicchi irregolari; il bordo di
          // ogni spicchio e' una crepa. Poi rami piu' fitti, che si aprono
          // solo a tratti e solo lontano: cosi' si dirama e non e' una griglia.
          float an = atan(P.y, P.x) / 6.2832;
          float st = (quota(P * 0.16 + 7.3) - 0.5) * 0.22;
          float x1 = an * 11.0 + st * 11.0;
          float l1 = abs(fract(x1) - 0.5);
          float dist1 = (0.5 - l1) / 11.0 * 6.2832 * d;
          float x2 = an * 29.0 + (quota(P * 0.31 + 2.1) - 0.5) * 3.2;
          float l2 = abs(fract(x2) - 0.5);
          float dist2 = (0.5 - l2) / 29.0 * 6.2832 * d;
          float ramo = smoothstep(0.45, 0.62, rumore(vec2(floor(x2) * 3.7, d * 0.28))) * smoothstep(3.0, 8.0, d);
          float w = (0.018 + d * 0.0022) * mix(1.8, 1.0, uMano);
          float l = max(1.0 - smoothstep(0.0, w, dist1), (1.0 - smoothstep(0.0, w * 0.7, dist2)) * ramo);
          // i raggi non sono continui: si interrompono e riprendono
          l *= smoothstep(0.25, 0.4, rumore(vec2(floor(x1) * 5.1, d * 0.45)));
          // e crescono dal centro verso l'orizzonte mentre l'atto avanza
          float fronte = uRete * 30.0;
          l *= smoothstep(fronte, fronte - 3.0, d) * mix(smoothstep(4.0, 9.0, length(vW - cameraPosition)), smoothstep(0.6, 1.6, d), uMano) * (1.0 - smoothstep(10.0, 30.0, d));
          // la crepa vecchia vicino alla camera era una pozza arancione: lontano solo
          // la crepa vecchia del rumore resta solo nella fascia media: vicino
          // alla camera diventava una pozza arancione sotto \xabPassione\xbb
          float brace = (l * 0.9 + crepa * 0.6 * uCaldo * lenti * vicino * (1.0 - smoothstep(9.0, 16.0, d))) * mix(1.6, 1.0, uMano);
          float calda = max(uCaldo, 0.25);
          // sul computer la brace non arriva mai addosso all'obiettivo, nemmeno
          // quando la piana bascula: vicino era una macchia fusa sotto \xabPassione\xbb
          brace *= mix(smoothstep(7.0, 12.0, length(vW - cameraPosition)), 1.0, uMano);
          luce += cresta * uCaldo * 0.14 * lontano * vicino + brace * calda * lontano * 0.4;
          col = mix(col, ${(0,m.s)("caldo",.934)}, uCaldo * 0.2);
          // la brace si raffredda in vetro quando la piana si alza: resta la
          // traccia della crepa, fredda come il resto dell'ossidiana
          col = mix(col, mix(${(0,m.s)("avorio",.709)}, ${(0,m.s)("caldo",.934)}, uCaldo * 0.6), clamp(brace * 1.2, 0.0, 1.0));
          // L'IMPATTO: la luce corre lungo i raggi dal centro, una volta
          if (uLampo >= 0.0) {
            float fr = 0.6 + uLampo * 26.0;
            float corre = exp(-pow((d - fr) / (0.8 + uLampo * 2.0), 2.0)) * (1.0 - smoothstep(0.55, 1.0, uLampo));
            luce += corre * (l * 2.4 + crepa * 2.0 + cresta * 0.5) * lontano;
            col = mix(col, ${(0,m.s)("caldo",1.143)}, clamp(corre * l, 0.0, 1.0));
          }
        }
        // LA PARETE: quando la piana e' alzata le creste si leggono come
        // nell'hero, fredde, e coprono lo schermo
        luce += uCopre * (cresta * 0.32 + polvere * 0.05 + crepa * 0.3) * (1.0 - smoothstep(18.0, 40.0, d));

        // ── LA PIANA BAGNATA (15 ottobre 2026) ──────────────────────────────
        // L'ossidiana lucida fa da specchio; sopra, il reticolo dei cubetti
        // con la luce calda che ci corre a onde lente. Mai addosso all'obiettivo.
        vec3 extra = vec3(0.0);
        float dc = length(vW - cameraPosition);
        float eroe = (1.0 - uCopre) * (1.0 - uMano * 0.25);
        // LE LASTRE (terza mano: niente contorni accesi, \xabeffetto Tron\xbb).
        // Il suolo e' diviso in lastre col passo dei cubetti, ma non si
        // disegnano: si leggono solo perche' ognuna riflette un po' diverso,
        // come vetro posato a mano. Lontano sono in fila; sotto il marchio
        // ruotano e si scostano, e solo li', nelle fessure, filtra un filo
        // di luce calda che svanisce allontanandosi.
        vec2 G = P / 0.68;
        vec2 gi = floor(G);
        vec2 gl = fract(G) - 0.5;
        float caos = 1.0 - smoothstep(0.6, 2.8, length((gi + 0.5) * 0.68));
        float hh = hash(gi * 1.31 + 0.7);
        float ang = (hh - 0.5) * 1.3 * caos;
        vec2 sp = (vec2(hash(gi + 2.7), hash(gi + 5.1)) - 0.5) * 0.3 * caos;
        vec2 q = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * (gl - sp) * (1.0 + caos * 0.4);
        float eg = 0.5 - max(abs(q.x), abs(q.y));
        float fitto = max(fwidth(G.x), fwidth(G.y));
        // quanto riflette questa lastra: una differenza di tono, non un bordo
        float lastra = 0.88 + 0.24 * hh;
        lastra = mix(1.0, lastra, 1.0 - smoothstep(0.08, 0.3, fitto));
        // la fessura calda: solo sotto il marchio, morbida, larga due pixel
        float fes = (1.0 - smoothstep(0.0, fwidth(eg) * 1.5 + 1e-4, abs(eg))) * caos * caos;
        float vivo = smoothstep(2.0, 5.0, dc) * (1.0 - smoothstep(0.1, 0.3, fitto));
        // solo dalla base del marchio in la': davanti, verso chi guarda, niente
        // (15 ottobre 2026, sera) le fessure accese si leggevano come
        // rettangoli a linee: tolte. Le lastre restano solo nel riflesso.
        fes *= 0.0;
        // il vetro: un riflesso tenue e largo del cielo chiaro sull'orizzonte
        extra += ${(0,m.s)("avorio",.5)} * (lastra - 0.88) * 0.03 * smoothstep(3.0, 10.0, dc) * (1.0 - smoothstep(16.0, 30.0, d));
        // lo specchio: la piana e' vetro, riflette la lama dell'orizzonte e
        // la falce della luna (una colonna di luce, spezzata dal reticolo)
        // IL VELO D'ACQUA (15 ottobre 2026, sera, Lorenzo: \xabpiu' animato\xbb):
        // i riflessi ondeggiano piano sull'ora d'ambiente, e dove passa il
        // puntatore (o il dito) parte un'increspatura ad anelli che si spegne
        vec2 ond = vec2(sin(P.x * 0.9 + uT * 0.55) + sin(P.y * 1.7 - uT * 0.4), cos(P.y * 1.1 + uT * 0.5) + sin(P.x * 2.3 + uT * 0.35)) * 0.006;
        float dT = length(vW.xz - uTocco.xy);
        float anelli = sin(dT * 7.0 - uT * 3.2) * exp(-dT * 0.6) * uTocco.z;
        vec2 incr = (vW.xz - uTocco.xy) / max(dT, 1e-3) * anelli * 0.035;
        vec3 nw = normalize(vec3((h - hx) * 0.8 + ond.x + incr.x, 1.0, (h - hz) * 0.8 + ond.y + incr.y));
        vec3 vista = normalize(vW - cameraPosition);
        vec3 rif = reflect(vista, nw);
        // riflessi lunghi e morbidi: stretti di traverso, lunghi verso chi guarda
        float specO = exp(-pow(rif.y / 0.07, 2.0)) * exp(-pow(rif.x / 0.9, 2.0)) * lastra;
        extra += mix(${(0,m.s)("caldo",.9)}, ${(0,m.s)("caldoChiaro",1)}, 0.5) * specO * 0.07 * smoothstep(5.0, 12.0, dc);
        vec3 aL = normalize(uLuna - vW);
        vec3 rifL = normalize(vec3(rif.x * 3.0, rif.y, rif.z));
        // quando la luce esce dalle crepe della luna l'acqua la prende: il
        // riflesso si allunga verso chi guarda e si scalda, poi torna
        // sottile insieme alle crepe (stesso inseguimento, nessun lampo)
        float specL = pow(max(0.0, dot(rifL, normalize(vec3(aL.x * 3.0, aL.y, aL.z)))), mix(120.0, 34.0, uLunaCrepa)) * lastra;
        extra += mix(${(0,m.s)("caldo",1)}, ${(0,m.s)("caldoChiaro",1)}, uLunaCrepa * 0.6) * specL * uLunaPeso * (0.35 + uLunaCrepa * 0.9);
        extra *= eroe * lontano;
        luce = max(luce, 1e-4);
        vec3 somma = col * luce + extra;
        float tot = clamp(max(luce, max(somma.r, max(somma.g, somma.b))), 0.0, 1.0);
        col = somma / max(tot, 1e-4);
        luce = tot;
        gl_FragColor = vec4(col, luce * uPeso);
        if (gl_FragColor.a < 0.003) discard;
      }`}),[]);(0,t.useEffect)(()=>()=>{for(let a of(S.dispose(),U.dispose(),R.dispose(),I.dispose(),[j,V,G,W,D,$,_]))a.dispose()},[S,U,R,I,j,V,G,W,D,$,_]);let Z=(0,t.useRef)(0),k=(0,t.useRef)(null),B=(0,t.useRef)(!0),H=(0,t.useMemo)(()=>new r.cE,[]),K=()=>{if(x.current&&P.current&&z.current&&(P.current.getWorldPosition(H),H.x+=P.current.scale.x*(h?6:11)*.25,x.current.uniforms.uLuna.value.copy(H),x.current.uniforms.uLunaPeso.value=z.current.uniforms.uPeso.value,x.current.uniforms.uLunaCrepa.value=z.current.uniforms.uCrepa.value*z.current.uniforms.uVivo.value,F.current)){let a=P.current.position,e=48.1/(4.1-a.z);F.current.uniforms.uLunaV.value.set(a.x*e,a.y*e- -1.27)}},Q=(0,t.useRef)(new r.wq);return(0,t.useRef)(new r.wq(9,9)),(0,t.useRef)({x:0,z:0,forza:0}),(0,t.useMemo)(()=>new r.zx,[]),(0,t.useMemo)(()=>new r._m(new r.cE(0,1,0),1.27),[]),(0,t.useMemo)(()=>new r.cE,[]),(0,i.f)((e,t)=>{if(g||!a){let a=g?.current;if(!a)return;let e=(0,u.B)()/1e3;if(k.current&&!d&&k.current.position.set(.06*Math.sin(.11*e),.035*Math.sin(.17*e),.12*Math.sin(.07*e)),P.current&&(P.current.position.set(a.x+(d?0:.35*Math.sin(.05*e)),a.y+(d?0:.15*Math.sin(.04*e)),-30),P.current.scale.setScalar(a.scala)),z.current){let o=z.current.uniforms;o.uPeso.value=a.peso*a.pianeta,o.uTaglio.value=a.taglio??0,o.uT.value=e,o.uCaldo.value=a.caldo,o.uColpo.value=.25*a.caldo,a.sole&&o.uSole.value.copy(a.sole),o.uCorona.value=a.corona??0,o.uScuro.value=a.scuro??0,o.uCrepaFissa.value=a.crepa??0}if(x.current){let o=x.current.uniforms;o.uPeso.value=a.peso,o.uT.value=e,o.uCompatto.value=1,o.uCaldo.value=0,o.uRete.value=0,o.uCopre.value=0,o.uOnda.value=-1,o.uLampo.value=-1}if(M.current){let o=M.current.uniforms;o.uPeso.value=.75*a.peso,o.uT.value=e,o.uCaldo.value=.4*a.caldo,o.uColpo.value=0,o.uAperto.value=0}if(b.current){let o=b.current.material.uniforms;o.uPeso.value=a.peso,o.uT.value=e,o.uTira.value=0,o.uCaldo.value=0,o.uColpo.value=0}K();return}let i=a.current.k,r=(a,e)=>{let o=Math.max(0,Math.min(1,(i-a)/(e-a)));return o*o*(3-2*o)},l=Math.max(0,Math.min(1,a.current.ritorno??0)),n=Math.min(1,l/.45),m=d?0:(0,o.t)(i),C=Math.max(n,m*m*(3-2*m)),S=1-r(1.3,1.9),R=d?0:r(.45,1.15)*(1-n)*S,I=d?0:r(1,1.28)*(1-n)*S,j=x.current?x.current.uniforms.uLampo.value:-1,V=j<0?0:j<.03?j/.03:j<.34?1:Math.exp(-(4*(j-.34)));window.__colpo=V;let $=r(.58,.86)*(1-r(1.08,1.3))*(1-n);window.__kSpazio=i,(a.current.cartaVista??a.current.carta??0)<c.x.sogliaLuce&&L.current<0&&(L.current=1,!d&&(0,f.A)((0,c.L)())&&(T.current=f.m),a.current.giaPosata&&(w.current=60)),L.current>0&&(w.current+=Math.min(.05,t)*(a.current.entrataSvelta?c.O:1)/(0,c.C)());let U=w.current;q.current!==(0,c.k)()&&(q.current=(0,c.k)(),A.current=0),A.current<1e5&&(A.current+=Math.min(.05,t)*(a.current.entrataSvelta?c.O:1)/(0,c.C)());let _=Math.min(1,U/c.G.camera),W=d?0:1-_*_*_*(_*(6*_-15)+10);if(k.current){let a=d?0:1-r(.2,.6),e=d?0:(0,f.n)((0,c.L)());k.current.position.set(-(.35*Q.current.x)*a,-R*(h?.9:1.3)-W*(h?.5:.8)-.18*Q.current.y*a,-(11*R)-4*W-e*f.C),k.current.rotation.x=I*(h?.62:.5),k.current.scale.setScalar(1)}let D=(a,e)=>d?0:Math.max(1-Math.max(0,Math.min(1,(i-1.06)/.24)),Math.max(0,Math.min(1,(l-a)/(e-a)))),H=+!d,X=(0,s.A)(Math.max(0,Math.min(6,a.current.kc??i))),J=1-Math.pow(.001,Math.min(.05,t)/.55),Y=(0,u.B)()/1e3,aa=Math.min(1,(a.current.cartaVista??a.current.carta??0)*1.4),ae=(a,e)=>{let o=Math.max(0,Math.min(1,(U+T.current-a)/(e-a)));return o*o*o*(o*(6*o-15)+10)};if(P.current){var ao;let a,e=Math.min(ae(...c.G.pianetaSale),1,(ao=c.G.pianetaSale[1]-c.G.pianetaSale[0],(a=Math.max(0,Math.min(1,A.current/ao)))*a*a*(a*(6*a-15)+10))),o=h?8.6:.9,t=d?0:r(.4,.68)*(1-C),i=d?0:r(.72,1.15)*(1-C);P.current.scale.setScalar((h?.78:1)*(1+t*(h?.15:.1))*(1-.62*i)),P.current.position.y=o-(1-(1-Math.pow(1-e,3)))*4.2+t*(h?7.2:5.6)-i*(h?5.6:5),P.current.position.z=-30,P.current.position.x=(h?3.6:13)+(d?0:r(.4,.58)*(1-C))*(h?-3.6:-16)+2*!h*i-.9*Q.current.x,z.current.uniforms.uTaglio.value=Math.max(0,Math.min(1,(-1.27-P.current.position.y)/((h?6:11)*P.current.scale.y)+.5))}if(x.current){let a=x.current.uniforms,e=Math.max(1-r(1.06,1.3),d?r(4.7,5):(0,o.t)(i),+(l>0));a.uPeso.value+=(H*e*(1-aa)*ae(...c.G.piana)-a.uPeso.value)*J,a.uT.value=Y;let n=v?v.current.tieni:0,s=1-n;a.uCompatto.value+=(s-a.uCompatto.value)*J,a.uPozza.value=1-r(.3,.62),Z.current<0&&(n<.02||n>-Z.current+.02)&&(Z.current=0),Z.current>=0&&n>Z.current&&(Z.current=n),Z.current>.3&&n<Z.current-.12?(a.uOnda.value=0,Z.current=-Math.max(.02,n),window.__ondaT=performance.now()):Z.current<0&&(Z.current=-Math.min(-Z.current,Math.max(.02,n))),a.uOnda.value>=0&&(a.uOnda.value+=t,a.uOnda.value>1.8&&(a.uOnda.value=-1)),a.uCaldo.value+=($-a.uCaldo.value)*J,a.uRete.value+=((d?0:r(.64,1)*(1-C))-a.uRete.value)*J,a.uCopre.value=I,i<.6&&(B.current=!0),B.current&&i>.66&&i<1.1&&!d&&(B.current=!1,a.uLampo.value=0),a.uLampo.value>=0&&(a.uLampo.value+=t/1.9,a.uLampo.value>1&&(a.uLampo.value=-1))}if(z.current){let a=1-.8*(x.current?1-x.current.uniforms.uCompatto.value:0);z.current.uniforms.uPeso.value+=(Math.max(D(.38,.5)*(1-aa)*ae(...c.G.pianeta)*a,d?0:(0,o.t)(i))-z.current.uniforms.uPeso.value)*J,z.current.uniforms.uT.value=Y,z.current.uniforms.uCaldo.value+=($-z.current.uniforms.uCaldo.value)*J,z.current.uniforms.uColpo.value=V}if(M.current&&(M.current.uniforms.uPeso.value+=(D(.5,.82)*(1-aa)*ae(...c.G.alone)-M.current.uniforms.uPeso.value)*J,M.current.uniforms.uT.value=Y,M.current.uniforms.uCaldo.value+=($-M.current.uniforms.uCaldo.value)*J,M.current.uniforms.uColpo.value=V,G.uniforms.uColpo.value=V*M.current.uniforms.uPeso.value,M.current.uniforms.uAperto.value=1-(x.current?x.current.uniforms.uCompatto.value:1)),F.current&&N.current){let a=F.current.uniforms;a.uPeso.value+=(!d*(1-X)*(1-aa)*ae(...c.G.alone)-a.uPeso.value)*J,a.uT.value=Y,a.uCaldo.value+=($-a.uCaldo.value)*J;let e=N.current.uniforms;e.uPeso.value+=(!d*(1-X)*(1-aa)*ae(...c.G.stelle)-e.uPeso.value)*J,e.uT.value=Y,e.uK.value=Math.min(1.5,i),e.uPunta.value.copy(y)}if(b.current){let a=b.current.material;a.uniforms.uPeso.value+=(!d*(1-X)*(1-aa)*ae(...c.G.stelle)-a.uniforms.uPeso.value)*J;let e=x.current?1-x.current.uniforms.uCompatto.value:0;a.uniforms.uTira.value+=((d?0:e)-a.uniforms.uTira.value)*J,a.uniforms.uT.value=Y,a.uniforms.uCaldo.value+=($-a.uniforms.uCaldo.value)*J,a.uniforms.uColpo.value=V}if(z.current){let a=z.current.uniforms;a.uVivo.value=+!d;let e=d?0:Math.sin(2*Math.PI/720*Y);a.uSole.value.set(.9,.25+.18*e,.2+.45*e).normalize();let o=0>E.current?1-Math.pow(.002,Math.min(.05,t)/.5):1-Math.pow(.002,Math.min(.05,t)/4),r=d?0:Math.max(0,Math.min(1,h?(i-.07)/.14:(i-.3)/.3))*(1-Math.max(0,Math.min(1,(i-(h?.6:.9))/.3)));E.current+=(Math.max(0,.8*r)-E.current)*o,a.uCrepa.value=E.current}if(O.current&&b.current){let a=Y%120/48,e=!d&&a<1&&b.current.visible;if(O.current.visible=e,e){let e=Math.floor(Y/120);O.current.position.set((140*a-70)*(e%2?-1:1)*.8,-1.27+(7+7*e%5*.9)-2*a,-40+3*Math.sin(3.1*a)),O.current.material.uniforms.uPeso.value=b.current.material.uniforms.uPeso.value*(1-b.current.material.uniforms.uCaldo.value)}}K();let at=X>.98;x.current&&(x.current.visible=!at&&x.current.uniforms.uPeso.value>.003);let ai=i>3.9&&i<4.45;F.current&&(F.current.visible=!at&&!ai),b.current&&(b.current.visible=!at),k.current&&(k.current.visible=o.S.v<.995),k.current&&x.current&&(k.current.updateMatrixWorld(),p.f.m.copy(k.current.matrixWorld),p.f.inv.copy(p.f.m).invert(),p.f.quota=-1.27,p.f.peso=k.current.visible&&x.current.visible?x.current.uniforms.uPeso.value:0)}),(0,e.jsxs)("group",{renderOrder:-800,ref:k,children:[(0,e.jsxs)("mesh",{ref:P,position:h?[3.6,8.6,-30]:[13,.9,-30],renderOrder:-801,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:h?[6,6,1,1]:[11,11,1,1]}),(0,e.jsx)("primitive",{object:W,ref:z,attach:"material"})]}),(0,e.jsxs)("mesh",{position:h?[0,.15,-12]:[0,-.1,-12],renderOrder:-803,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:h?[18,20,1,1]:[26,22,1,1]}),(0,e.jsx)("primitive",{object:V,ref:M,attach:"material"})]}),(0,e.jsxs)("mesh",{renderOrder:-799,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,e.jsx)("primitive",{object:G,attach:"material"})]}),(0,e.jsxs)("mesh",{position:[0,-1.27,-44],renderOrder:-804,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:[150,60,1,1]}),(0,e.jsx)("primitive",{object:$,ref:F,attach:"material"})]}),(0,e.jsx)("points",{ref:b,geometry:S,material:j,frustumCulled:!1,renderOrder:-802}),(0,e.jsx)("points",{ref:O,geometry:R,material:I,frustumCulled:!1,renderOrder:-802,visible:!1}),(0,e.jsx)("points",{geometry:U,frustumCulled:!1,renderOrder:-790,children:(0,e.jsx)("primitive",{object:_,ref:N,attach:"material"})}),(0,e.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-1.27,-25],renderOrder:-801,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:[90,90,1,1]}),(0,e.jsx)("primitive",{object:D,ref:x,attach:"material"})]}),a&&(0,e.jsx)(C,{storyline:a,reduce:d,rottura:v,suolo:x}),a&&(0,e.jsx)(l.f,{storyline:a,reduce:d,rottura:v,mobile:h,suolo:x})]})}],42055)},1892,a=>{var e=a.i(43476),o=a.i(71645),t=a.i(25234),i=a.i(28600),r=a.i(90072),l=a.i(99121),n=a.i(68194),s=a.i(68366);let u=new r.wq(.6,-.28),c=new r.wq(.74,-.09),f=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
`;a.s(["f",0,function({storyline:a,reduce:p,rottura:m,mobile:d=!1,suolo:v}){let{camera:h,size:g}=(0,i.f)(),x=(0,o.useRef)(null),b=(0,o.useRef)(null),M=(0,o.useRef)(null),C=(0,o.useRef)(null),y=(0,o.useRef)(""),z=(0,o.useRef)(!1),P=(0,o.useRef)(0),L=(0,o.useRef)(-99),w=(0,o.useRef)(0),T=(0,o.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,uniforms:{uPeso:{value:0},uT:{value:0},uLuce:{value:1},uAlto:{value:.2},uSguardo:{value:0},uVolta:{value:0}},vertexShader:`
      uniform float uAlto;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        // sempre dritto davanti all'obiettivo: e' una figura, non un cartello
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += vec2(position.x * 1.1 - 0.2, (position.y + 0.5) * 2.05 - 0.45) * uAlto;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uT;
      uniform float uLuce;
      uniform float uSguardo;
      uniform float uVolta;
      ${f}
      ${n.f}
      float capsula(vec2 p, vec2 a, vec2 b, float r) {
        vec2 pa = p - a, ba = b - a;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        return length(pa - ba * h) - r;
      }
      float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
      }
      float ellisse(vec2 p, vec2 r) {
        float k = length(p / r);
        return (k - 1.0) * min(r.x, r.y);
      }
      // LA SAGOMA, di spalle. Proporzioni di una persona vera (sette teste e
      // mezza, spalle larghe un quarto dell'altezza), con la felpa che le
      // allarga appena e il cappuccio su. Le mani in tasca si leggono dai
      // gomiti: le braccia scendono lungo il fianco e piegano verso il centro.
      float sagoma(vec2 p, float fiato) {
        // il respiro: solo il busto, le spalle salgono di un niente
        if (p.y > 0.45) p.y = 0.45 + (p.y - 0.45) / (1.0 + fiato);
        // ALZA GLI OCCHI (31 ottobre): quando la luna si incrina il busto si
        // tira indietro di un niente, il peso sul piede dietro
        p.x += uSguardo * 0.022 * smoothstep(0.42, 0.95, p.y);
        // si volta verso il marchio, che gli sta a sinistra: spalle e testa
        p.x += uVolta * 0.03 * smoothstep(0.4, 0.95, p.y);
        // le gambe: jeans, leggermente aperte, il peso un po' a destra
        float g1 = capsula(p, vec2(-0.052, 0.035), vec2(-0.046, 0.46), 0.041 + p.y * 0.012);
        float g2 = capsula(p, vec2(0.058, 0.035), vec2(0.047, 0.46), 0.041 + p.y * 0.012);
        float d = min(g1, g2);
        // le scarpe
        d = min(d, ellisse(p - vec2(-0.054, 0.02), vec2(0.046, 0.024)));
        d = min(d, ellisse(p - vec2(0.06, 0.02), vec2(0.046, 0.024)));
        // la felpa: un busto che si allarga verso le spalle, orlo morbido
        float lx = 0.112 + clamp(p.y - 0.44, 0.0, 0.34) * 0.075;
        vec2 q = vec2(abs(p.x), p.y - 0.615);
        vec2 b = vec2(lx - 0.035, 0.165);
        float busto = length(max(abs(q) - b, 0.0)) + min(max(abs(q.x) - b.x, abs(q.y) - b.y), 0.0) - 0.035;
        d = smin(d, busto, 0.025);
        // le braccia: dalla spalla al gomito, appena fuori, poi la mano in tasca
        float br = 1e3;
        for (int s = 0; s < 2; s++) {
          float sg = s == 0 ? -1.0 : 1.0;
          br = min(br, capsula(p, vec2(0.128 * sg, 0.755), vec2(0.168 * sg, 0.6), 0.036));
          br = min(br, capsula(p, vec2(0.168 * sg, 0.6), vec2(0.1 * sg, 0.515), 0.033));
        }
        d = smin(d, br, 0.018);
        // il cappuccio: un po' alzato e girato verso il pianeta, in alto a destra
        // e il cappuccio si alza verso la luna: la testa ruota indietro e il
        // centro sale e arretra, come chi guarda in su
        vec2 c = p - vec2(0.008 + uSguardo * 0.014 - uVolta * 0.018, 0.892 + uSguardo * 0.01);
        float an = -0.16 - uSguardo * 0.5 + uVolta * 0.46;
        c = mat2(cos(an), -sin(an), sin(an), cos(an)) * c;
        float cap = ellisse(c, vec2(0.074, 0.092));
        // e ricade sulle spalle: il collo non si vede
        cap = smin(cap, ellisse(p - vec2(0.0, 0.79), vec2(0.1, 0.05)), 0.03);
        d = smin(d, cap, 0.03);
        return d;
      }
      void main() {
        // fuori dall'hero il peso e' zero ma il quadratino si disegna lo
        // stesso (resta acceso per non compilare a meta' corsa): niente conti
        if (uPeso < 0.002) discard;
        // il quadratino va da -0.75 a 0.35 in larghezza: a sinistra c'e' il
        // vento, dove va la polvere
        vec2 p = vec2(vUv.x * 1.1 - 0.75, vUv.y * 2.05 - 0.45);
        // IL PESO CHE PASSA (5 novembre 2026): piano, da una gamba all'altra; i
        // piedi restano dove sono. Sull'ora d'ambiente: col movimento ridotto e' fermo
        p.x += sin(uT * 0.29) * 0.006 * smoothstep(0.05, 0.75, p.y);
        float fiato = 0.009 * sin(uT * 1.25);
        float d = sagoma(p, fiato);
        // il bordo si misura sulla sagoma pulita: col rumore dentro, fwidth vedeva i
        // salti della grana e la figura usciva a gradini, senza piu' il filo di luce
        float d0 = d;
        // ── EVAPORA ─────────────────────────────────────────────────────────
        // Si sfalda di piu' in alto e sul lato lontano dal pianeta (sinistra);
        // la parte bassa resta solida. Il bordo e' una sabbia: un rumore che
        // scorre verso l'alto e a sinistra, piu' una grana a celle che si
        // accende e si spegne, cosi' il contorno e' granuloso e mai netto.
        float sfalda = smoothstep(0.38, 1.0, p.y) * 0.75 + smoothstep(0.02, -0.16, p.x) * smoothstep(0.3, 0.7, p.y) * 0.35;
        vec2 vento = vec2(uT * 0.05, -uT * 0.11);
        float n = rumore(p * vec2(26.0, 20.0) + vento * 3.0);
        float n2 = rumore(p * vec2(64.0, 52.0) + vento * 6.0 + 3.1);
        vec2 cella = floor(p * 150.0);
        float gran = hash(cella + floor(uT * 1.5 + hash(cella) * 7.0));
        d += (n * 0.6 + n2 * 0.4 - 0.4) * (0.004 + sfalda * 0.05) + (gran - 0.5) * (0.004 + sfalda * 0.03);
        float aa = max(fwidth(d0), 1e-4);
        float dentro = 1.0 - smoothstep(-aa * 0.6, aa * 0.6, d);
        // e dentro, vicino al bordo alto, qualche granello e' gia' andato
        float buchi = step(0.78 - sfalda * 0.25, gran) * smoothstep(-0.03 - sfalda * 0.02, 0.0, d) * sfalda;
        dentro *= 1.0 - buchi;
        // il bordo che guarda il pianeta: una normale dalla sagoma stessa
        float e = 0.006;
        vec2 gr = vec2(sagoma(p + vec2(e, 0.0), fiato) - sagoma(p - vec2(e, 0.0), fiato),
                       sagoma(p + vec2(0.0, e), fiato) - sagoma(p - vec2(0.0, e), fiato));
        vec2 nn = normalize(gr + 1e-6);
        float verso = max(0.0, dot(nn, normalize(vec2(0.8, 0.6))));
        float banda = smoothstep(-aa * 4.5, -aa * 0.4, d0) * dentro;
        float filo = banda * pow(verso, 2.5) * uLuce * (0.25 + 0.75 * smoothstep(0.4, 0.75, p.y));
        // l'ossidiana: quasi nera, fredda, con la grana del sito; in basso
        // appena piu' piena
        // e il cielo freddo lo tocca dall'alto: un controluce sottile su
        // spalle e cappuccio, cosi' la sagoma si stacca dalla piana scura
        float cielo = banda * smoothstep(0.1, 0.9, nn.y) * smoothstep(0.45, 0.8, p.y);
        // la tinta e' quella dell'omino unico (lib/omino.ts)
        vec3 col = tintaOmino(filo, cielo, hash(floor(p * 220.0)), uLuce);
        // I SOLCHI: la figura non e' una macchia. L'orlo della felpa, il cappuccio che
        // ricade, il braccio staccato dal fianco, la riga fra le gambe. Tolgono luce e
        // basta, e il volume lo da' la luce che cala verso il basso
        float ax = abs(p.x);
        float solchi = exp(-pow((p.y - 0.452) / 0.009, 2.0)) * step(ax, 0.13)
                     + exp(-pow((p.y - 0.8) / 0.008, 2.0)) * step(ax, 0.075)
                     + exp(-pow((ax - 0.128) / 0.006, 2.0)) * step(0.53, p.y) * step(p.y, 0.72)
                     + exp(-pow((p.x - 0.004) / 0.006, 2.0)) * step(p.y, 0.44);
        col *= (1.0 - 0.62 * min(solchi, 1.0)) * (0.72 + 0.42 * smoothstep(0.1, 0.8, p.y));
        // la luce delle crepe lo prende sul bordo che guarda la luna
        col = mix(col, ${(0,l.s)("caldoChiaro",1)}, clamp(filo * uSguardo * 0.8 + cielo * uSguardo * 0.25, 0.0, 1.0));
        // ── LA POLVERE CHE SE NE VA ──────────────────────────────────────────
        // Granelli che si staccano dalle spalle, dal cappuccio e dal fianco
        // sinistro, salgono piano e derivano nel vento verso sinistra
        // sfumando. Ogni tanto uno piu' grande: un frammento.
        float pol = 0.0;
        vec3 polC = vec3(0.0);
        // I granelli partono fra x -0.16 e 0.11 e fra y 0.5 e 0.96, vanno
        // solo a sinistra e salgono al piu' di 0.34, tremano di 0.012 e sono
        // grandi al piu' 0.011: fuori da questa scatola nessuno arriva mai, e
        // il giro di ottanta si salta. Era due terzi del quadratino.
        bool aria = p.x < 0.14 && p.y > 0.47 && p.y < 1.34;
        for (int i = 0; i < 80; i++) {
          if (!aria) break;
          float fi = float(i);
          float h1 = hash(vec2(fi, 1.7)), h2 = hash(vec2(fi, 9.3)), h3 = hash(vec2(fi, 4.1)), h4 = hash(vec2(fi, 6.6));
          float durata = 7.0 + h3 * 6.0;
          float fase = uT / durata + h1;
          float vita = fract(fase);
          float giro = floor(fase);
          // dove si stacca cambia a ogni giro, sempre sul corpo alto
          float hx = hash(vec2(fi, giro * 1.3)), hy = hash(vec2(giro * 0.7, fi));
          vec2 o = vec2(mix(-0.13, 0.11, hx) - hy * 0.03, 0.5 + hy * 0.46);
          // la meta' esce dal lato lontano dal pianeta
          if (h4 < 0.45) o.x = -0.11 - hy * 0.04;
          vec2 q = o + vec2(-vita * (0.22 + h2 * 0.2) - vita * vita * 0.12, vita * (0.16 + h1 * 0.18))
                     + vec2(sin(uT * 0.9 + fi * 2.1), cos(uT * 0.7 + fi)) * 0.012 * vita;
          bool pezzo = mod(fi, 19.0) < 1.0;
          float r = pezzo ? 0.011 : mix(0.0035, 0.0068, h2);
          r *= 1.0 - vita * 0.5;
          vec2 dq = p - q;
          float dd = pezzo ? max(abs(dq.x), abs(dq.y)) : length(dq);
          float g = 1.0 - smoothstep(r * 0.35, r, dd);
          float v = smoothstep(0.0, 0.06, vita) * pow(1.0 - vita, 1.3);
          float acceso = step(0.62, h3) * uLuce;
          polC += g * v * mix(${(0,l.s)("avorio",.603)}, ${(0,l.s)("caldoChiaro",1.04)}, acceso);
          pol += g * v * mix(0.8, 1.0, acceso);
        }
        vec3 cp = clamp(polC / max(pol, 1e-4), 0.0, 1.0);
        pol = clamp(pol, 0.0, 1.0) * (1.0 - dentro);
        vec3 fin = (col * dentro + cp * pol) / max(dentro + pol, 1e-4);
        float af = max(dentro, pol);
        // ── IL RIFLESSO SULLA PIANA LUCIDA ─────────────────────────────────
        // Sotto i piedi l'ossidiana e' vetro: la sagoma si specchia corta,
        // mossa appena, e quello che si vede di piu' e' il filo di luce.
        if (p.y < 0.0) {
          vec2 pr = vec2(p.x + sin(p.y * 70.0 + uT * 1.1) * 0.006, -p.y * 1.25);
          float dr = sagoma(pr, fiato);
          float aar = max(fwidth(dr), 1e-4);
          float dentroR = 1.0 - smoothstep(-aar, aar, dr);
          float bordoR = smoothstep(-aar * 3.0, -aar * 0.5, dr) * dentroR * smoothstep(-0.02, 0.06, pr.x) * smoothstep(0.35, 0.8, pr.y);
          float sfuma = exp(p.y * 7.0);
          fin = mix(${(0,l.s)("pietra",.468)}, ${(0,l.s)("avorio",.821)}, clamp(bordoR * uLuce * 1.4, 0.0, 1.0));
          af = (dentroR * 0.4 + bordoR * uLuce * 0.5) * sfuma;
        }
        gl_FragColor = vec4(fin, af * uPeso);
        if (gl_FragColor.a < 0.004) discard;
      }`}),[]),A=(0,o.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,uniforms:{uPeso:{value:0},uLuce:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uLuce;
      void main() {
        float s = vUv.y;
        float w = abs(vUv.x - 0.5) * 2.0;
        float largo = mix(0.32, 0.62, smoothstep(0.0, 0.5, s)) * mix(1.0, 0.7, smoothstep(0.75, 1.0, s));
        float a = (1.0 - smoothstep(largo * 0.5, largo, w)) * pow(1.0 - s, 1.3) * smoothstep(0.0, 0.03, s);
        gl_FragColor = vec4(0.0, 0.0, 0.0, a * 0.7 * uPeso * (0.4 + 0.6 * uLuce));
        if (gl_FragColor.a < 0.004) discard;
      }`}),[]),q=(0,o.useMemo)(()=>new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uPeso:{value:0},uTesta:{value:0},uScia:{value:.35},uLpx:{value:400},uWpx:{value:18},uTraccia:{value:0},uT:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uTesta;
      uniform float uScia;
      uniform float uLpx;
      uniform float uWpx;
      uniform float uTraccia;
      uniform float uT;
      float hash1(float n){ return fract(sin(n) * 43758.5453); }
      void main() {
        // x lungo la corsa (0 partenza, 1 arrivo, piu' un margine), y in pixel
        float m = 0.06;
        float x = vUv.x * (1.0 + 2.0 * m) - m;
        float y = (vUv.y - 0.5) * uWpx;
        float h = uTesta;
        float dx = h - x;
        // la scia: solo dietro la testa, sottilissima, piu' fine in coda
        float dietro = smoothstep(-0.004, 0.0, dx);
        float u = clamp(dx / uScia, 0.0, 1.0);
        float sig = mix(0.75, 0.32, u);
        float scia = dietro * exp(-dx / (uScia * 0.6)) * exp(-y * y / (2.0 * sig * sig)) * step(0.0, x);
        // la testa, con un alone corto
        float r = length(vec2(dx * uLpx, y));
        float testa = exp(-r * r / 1.6) * 1.6 + exp(-r / 3.2) * 0.22;
        // l'accensione: piano all'inizio, un piccolo lampo, si spegne prima
        float acc = smoothstep(0.0, 0.18, h) * (1.0 - smoothstep(0.82, 1.0, h)) + 0.55 * exp(-pow((h - 0.72) / 0.06, 2.0));
        // le scintille: puntini che restano dietro la testa e muoiono subito
        float sc = 0.0;
        for (int i = 0; i < 6; i++) {
          float fi = float(i);
          float off = fract(uT * (2.0 + hash1(fi) * 2.0) + hash1(fi + 3.0)) * 0.12;
          vec2 q = vec2((dx - off) * uLpx, y - (hash1(fi + 7.0) - 0.5) * 3.0 * off / 0.12);
          sc += exp(-dot(q, q) / 0.5) * (1.0 - off / 0.12) * 0.5;
        }
        sc *= step(0.25, h) * step(h, 0.95);
        // la traccia persistente: dove e' passata, un filo che trema e sfuma
        float fatto = smoothstep(0.0, 0.03, min(h, 1.0) - x) * step(0.0, x);
        float trema = 0.6 + 0.4 * sin(x * 60.0 + uT * 3.0) * sin(x * 23.0 - uT * 2.0);
        float traccia = uTraccia * fatto * exp(-y * y / 4.5) * trema * 0.17 * (1.0 - smoothstep(0.85, 1.0, x));
        vec3 bianco = ${(0,l.s)("avorio",1.054)};
        vec3 verde = ${(0,l.s)("avorio",.977)};
        vec3 freddo = ${(0,l.s)("avorio",.857)};
        vec3 colScia = mix(verde, freddo, smoothstep(0.04, 0.4, u));
        vec3 col = bianco * testa * acc + colScia * scia * acc * 0.85 + bianco * sc * acc + ${(0,l.s)("avorio",.764)} * traccia;
        col *= uPeso;
        float a = max(col.r, max(col.g, col.b));
        if (a < 0.002) discard;
        gl_FragColor = vec4(col, a);
      }`}),[]);(0,o.useEffect)(()=>()=>{T.dispose(),A.dispose(),q.dispose()},[T,A,q]),(0,o.useRef)(0x135288c);let S=(0,o.useRef)(-1);(0,o.useRef)(null),(0,o.useRef)(-1),(0,o.useEffect)(()=>{window.__cometa=()=>{S.current=.001}},[]),(0,o.useMemo)(()=>({v:new r.cE,o:new r.cE,d:new r.cE}),[]);let O=(0,o.useRef)(0);return(0,t.f)(()=>{let e=performance.now()/1e3,o=a.current,t=o.k,i=Math.max(0,Math.min(1,o.ritorno??0)),l=a=>{let e=Math.max(0,Math.min(1,a));return e*e*(3-2*e)},n=Math.max(1-l((t-.4)/.25),l((i-.55)/.3)),f=v.current?v.current.uniforms.uPeso.value:0,M=v.current?v.current.uniforms.uCompatto.value:1,T=C.current,A=`${g.width}x${g.height}`,q=t<.02&&i<=0&&(!m||m.current.tieni<.01);if(T&&x.current&&b.current&&q&&(y.current!==A||!z.current||f<.95)&&f>.02){let a=d?c:u,e=g.width/Math.max(1,g.height),o=Math.tan(h.fov*Math.PI/360),t=(0,s.c)(5.5,e,s.V)*(1-.13*Math.max(0,Math.min(1,(.78-e)/.3))),i=-1.27/(a.y*o);if(i>0){let l=new r.cE(a.x*o*e*i,-1.27,t-i),n=Math.hypot(l.x,l.y,i),s=(window.__ominoAlto??(d?.065:.1))*2*n*o;T.position.copy(l),x.current.material.uniforms.uAlto.value=s;let u=b.current,c=3.2*s;u.scale.set(.55*s,c,1);let f=new r.wq(-(d?3.6:13)+l.x,30+l.z).normalize();u.rotation.set(-Math.PI/2,0,Math.atan2(-f.x,-f.y)),u.position.set(f.x*c*.5,.002,f.y*c*.5),y.current=A,z.current=!0}}let S=z.current?f*n:0,E=.15+.85*M,R=x.current?.material;R&&(R.uniforms.uPeso.value=S,R.uniforms.uT.value=p?0:e,R.uniforms.uLuce.value=E);let I=v.current?.uniforms.uLunaCrepa?.value??0,j=Math.min(.05,Math.max(0,e-w.current));w.current=e,I>.25&&(L.current=e);let V=p?0:(e-L.current<3)*(d?1.3:1);P.current+=(V-P.current)*(1-Math.pow(.002,j/(V>P.current?.8:2.2))),R&&(R.uniforms.uSguardo.value=P.current);{let a=m?.current,e=a?(performance.now()-a.colpo)/1e3:9,o=!!a&&e>.06&&e<1.5&&(e>.5||a.scarica>0)&&a.tieni<.05,t=p?0:!!o*(d?1.3:1);O.current+=(t-O.current)*(1-Math.pow(.002,j/(t>O.current?.45:1.6))),R&&(R.uniforms.uVolta.value=O.current)}let $=b.current?.material;$&&($.uniforms.uPeso.value=S,$.uniforms.uLuce.value=E)}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("mesh",{ref:M,renderOrder:-799,frustumCulled:!1,scale:[1e-4,1e-4,1],children:[(0,e.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,e.jsx)("primitive",{object:q,attach:"material"})]}),(0,e.jsxs)("group",{ref:C,children:[(0,e.jsxs)("mesh",{ref:b,renderOrder:-799,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,e.jsx)("primitive",{object:A,attach:"material"})]}),(0,e.jsxs)("mesh",{ref:x,renderOrder:-798,frustumCulled:!1,children:[(0,e.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,e.jsx)("primitive",{object:T,attach:"material"})]})]})]})}])},84910,a=>{var e=a.i(68366),o=a.i(90072),t=a.i(99121);let i=a.i(70599).i,r=[],l=[],n=i.length,s=new o.cE,u=i.map(([a,e])=>[.34*a,.34*e,0]);for(let a=0;a<u.length;a++){let e=a===n-1?0:a<11?-1:1,o=g(31*a+5)*Math.PI*2,t=.02+.03*g(17*a+9);r.push(0===e?[.02*Math.cos(o),.02*Math.sin(o),.16]:[.58*e+Math.cos(o)*t,-(.2*e)+Math.sin(o)*t,(g(13*a+3)-.5)*.06]),l.push(0===e?[.18,.26]:[(g(23*a+7)-.5)*.07,(g(29*a+11)-.5)*.09])}let c=[];for(let a=0;a<u.length;a++){if(a===u.length-1){c.push([0,0,0,0,0,0]);continue}let[e,o]=u[a],t=g(41*a+13)*Math.PI*2,i=.3+.75*g(43*a+17);c.push([.12*e+Math.cos(t)*i,.1*o+Math.sin(t)*i*.8,(g(47*a+19)-.5)*1.2,(g(53*a+23)-.5)*.6,(g(59*a+29)-.5)*.6,(g(61*a+31)-.5)*1.6])}let f=i.map((a,e)=>{let o;return e===i.length-1?1:(6-((o=e%11)<=6?6-o:o-6))/6*.74}),p=i.map((a,e)=>e).sort((a,e)=>f[a]-f[e]||a-e),m=Array(n).fill(0);p.forEach((a,e)=>{m[a]=e});let d=i.map((a,e)=>e===i.length-1?0:e<11?-1:1),v=(0,e.h)(.32,.32,.36),h=(0,e.h)(.32,.32,.36,.013,10);function g(a){let e=43758.5453*Math.sin(127.1*a+311.7);return e-Math.floor(e)}let x=i.map(([a,e])=>{let o=(o,t)=>+!!i.some(([i,r])=>.01>Math.abs(i-(a+o))&&.01>Math.abs(r-(e+t)));return[o(1,0),o(-1,0),o(0,1),o(0,-1)]}),b=i.map((a,e)=>({roughness:Math.min(.44,Math.max(.18,.3+(g(e+91)-.5)*.13)),colore:new o.Es(t.D.cubo).offsetHSL(0,0,(g(e+173)-.5)*.036)}));a.s(["r",0,.32,"W",0,[.58,-.2],"$",0,r,"b",0,l,"e",0,.36,"q",0,.25,"s",0,2.092,"c",0,2.053,"G",0,v,"j",0,h,"f",0,d,"Z",0,u,"d",0,.72,"k",0,.9,"y",0,3.35,"N",0,n,"h",0,m,"a",0,c,"t",0,f,"o",0,.74,"M",0,b,"S",0,x,"x",0,function(a,e,o,t){s.set(2*e-1,1-2*o,.5).unproject(a);let i=a.position,r=s.z-i.z,l=1e-6>Math.abs(r)?0:(t-i.z)/r;return[i.x+(s.x-i.x)*l,i.y+(s.y-i.y)*l]},"i",0,g,"D",0,function(a){return a*a*a*(a*(6*a-15)+10)}])},1119,a=>{let e=2*Math.PI,o=(a,e,o)=>{let t=Math.max(0,Math.min(1,(a-e)/(o-e)));return t*t*t*(t*(6*t-15)+10)},t=Math.tan(21*Math.PI/180);function i(a){let e=[0,.5,.87,1],o=[0,.808,.86,1],t=[1.616,.2585,.2486,1.0769],i=Math.max(0,Math.min(1,a)),r=i<.5?0:i<.87?1:2,l=e[r+1]-e[r],n=(i-e[r])/l,s=n*n,u=s*n;return(2*u-3*s+1)*o[r]+(u-2*s+n)*l*t[r]+(-2*u+3*s)*o[r+1]+(u-s)*l*t[r+1]}let r={passo:520,capi:340,rampa:36,pA:.24,pB:.84,frena:36,tiene:100,riparte:36,pS:.56},l=(()=>{let{passo:a,capi:e,rampa:o,pA:t,pB:i,frena:l,tiene:n,riparte:s,pS:u}=r,c=t*e,f=c+o+(u-l/(2*a)-(t+o*(1/e+1/a)/2))*a,p=f+l+n+s,m=p+(i-(u+s/(2*a)))*a,d=m+o+(1-(i+o*(1/e+1/a)/2))*e;return[[0,1/e],[c,1/e],[c+o,1/a],[f,1/a],[f+l,0],[f+l+n,0],[p,1/a],[m,1/a],[m+o,1/e],[d,1/e]]})(),n=l.reduce((a,[e,o],t)=>{if(0===t)return[0];let[i,r]=l[t-1];return a.push(a[t-1]+(r+o)/2*(e-i)),a},[]),s=l[l.length-1][0],u={d:0},c=l[3][0],f=l[6][0],p={el:[],sopra:-1,porta:-1,giro:0,ferma:0,avanti:[0,0,0],avantiT:[0,0,0],arrivo:[0,0,0],attive:!1,tiene:!1,vel:0,pose:[0,1,2].map(()=>({x:0,by:0,base:1,s:1,ruota:0,rx:0,op:0,z:0,d:1})),didascalia:null},m=(a,e)=>o(a,.44+.024*e,.53+.024*e),d=(a,e)=>o(a,.62+.02*e,.69+.02*e),v=r.pS;a.s(["S",0,{v:0},"D",0,s,"E",0,p,"n",0,u,"C",0,v,"P",0,t,"_",0,{yaw:0,pitch:0,oriz:-.2},"t",0,a=>o(a,4.441,4.458),"T",0,i,"G",0,a=>2*Math.atan(t*a)+.35,"r",0,function(a){if(a<=0)return 0;if(a>=1)return 1;let e=0,o=1;for(let t=0;t<20;t++){let t=(e+o)/2;i(t)<a?e=t:o=t}return(e+o)/2},"s",0,{sopra(a){p.sopra=a},porta(a){p.porta=a},tieni(a){p.tiene=a},gira(a,e){p.giro+=a,e>0&&(p.vel=.5*p.vel+a/e*.5)},el(a,e){p.el[a]=e}},"u",0,o,"V",0,function(a,t,i,r,l,n,s,v,h){let g=r/l<1,x=g?.34*r:Math.min(.19*r,400*Math.max(1,r/1800)),b=10*x/16,M=g?.42*r:.3*r,C=g?.17*l:0,y=a=>g?0:l*(.22*Math.cos(a)+.05*Math.cos(a)**2);p.ferma+=((p.sopra>=0||p.porta>=0||p.tiene?1:0)-p.ferma)*(1-Math.exp(-(5*t))),h||p.tiene||(p.giro+=p.vel*t,p.vel*=Math.exp(-(2.2*t)),.001>Math.abs(p.vel)&&(p.vel=0),p.giro+=.055*t*(1-p.ferma));let z=h?0:1.6*a+e*o(u.d,c,f);if(!h&&p.porta>=0&&!p.tiene){let a=-z-(p.porta*e/3+Math.PI/3);a+=Math.round((p.giro-a)/e)*e,p.giro+=(a-p.giro)*(1-Math.exp(-(3.5*t)))}let P=!1;for(let u=0;u<3;u++){let c=p.el[u];if(!c){p.pose[u].op=0;continue}let f=+(p.sopra===u||p.porta===u),L=h?1:t/.6;p.avantiT[u]=f?Math.min(1,p.avantiT[u]+L):Math.max(0,p.avantiT[u]-L),p.avanti[u]=o(p.avantiT[u],0,1);let w=p.avanti[u],T,A,q,S,O=0,E=0,R,I=1;if(h)T=n+(u-1)*(g?.31*r:.24*r),A=s+l*(g?.2:.17),q=g?.6:.9,R=10,(S=v)>.5&&(P=!0);else{let t=d(a,u),r=m(a,u);p.arrivo[u]=r*(1-t);let c=2.2*(1-r*r*(3-2*r))+2.2*t*t*(3-2*t),f=p.giro+z+u*e/3+Math.PI/3+c;if(q=.56+.44*(I=(Math.cos(f)+1)/2),T=n+M*Math.sin(f),A=s+C+y(f)+M*(.15*Math.cos(f)-.07*Math.sin(f))+Math.sin(.45*i+1.7*u)*l*.006*(1-p.ferma),S=1,O=-(24*Math.sin(f))+7*Math.sin(.3*i+2.1*u)*(1-p.ferma),E=3*Math.sin(.4*i+u)*(1-p.ferma)-6*Math.cos(f),R=Math.round(100*I),r<1||t>0){let a=r*r*(3-2*r)*(1-t*t*(3-2*t)),e=-b;T=n+(T-n)*a,A=e+(A-e)*a,q*=.25+.75*a,O*=a,S*=o(r,0,.3)*(1-o(t,.7,1))}S*=v*(t>=1?0:1),O*=1-.8*w,E*=1-.8*w,q*=1+.12*w,R+=Math.round(200*w),r>.96&&t<.04&&v>.5&&(P=!0)}let j=p.pose[u],V=A+b*q/2;j.x=T,j.by=V,j.base=x,j.s=q,j.ruota=O,j.rx=E,j.op=S>.003?S:0,j.z=R,j.d=I;let $=S>.003;c.style.visibility=$?"visible":"hidden",$&&(c.style.width=`${x.toFixed(1)}px`,c.style.zIndex=String(R),c.style.transform=`translate3d(${(T-x/2).toFixed(1)}px, ${(V-b).toFixed(1)}px, 0) scale(${q.toFixed(4)}) rotateY(${O.toFixed(2)}deg) rotateX(${E.toFixed(2)}deg)`)}p.attive=P;let L=p.didascalia;if(L&&p.sopra>=0){let a=p.pose[p.sopra],e=Math.max(240,a.base*a.s);L.style.width=`${e.toFixed(0)}px`,L.style.transform=`translate3d(${(a.x-e/2).toFixed(1)}px, ${(a.by+18).toFixed(1)}px, 0)`}for(let a of p.el)a&&(a.style.pointerEvents=P?"auto":"none")},"X",0,a=>(function(a){if(a<=0)return 0;for(let e=1;e<l.length;e++){let[o,t]=l[e];if(a<=o){let[i,r]=l[e-1],s=a-i;return Math.min(1,n[e-1]+r*s+(t-r)*s*s/(2*(o-i)))}}return Math.min(1,n[n.length-1])})(Math.max(0,Math.min(1,a))*s),"W",0,function(a){if(a<=0)return 0;for(let e=1;e<l.length;e++)if(a<n[e]||e===l.length-1){let[o,t]=l[e-1],[i,r]=l[e],s=(r-t)/(2*(i-o)),u=a-n[e-1];return o+Math.max(0,Math.min(i-o,1e-12>Math.abs(s)?u/Math.max(1e-9,t):(-t+Math.sqrt(Math.max(0,t*t+4*s*u)))/(2*s)))}return s}])},92111,a=>{var e=a.i(90072);let o={peso:0,quota:-1.27,zVicino:20,zLontano:-70,m:new e.nd,inv:new e.nd,cubi:null};a.s(["f",0,o])},86715,a=>{let e=(a,e,o)=>{let t=Math.max(0,Math.min(1,(a-e)/(o-e)));return t*t*(3-2*t)},o=(a,e,o)=>{let t=Math.max(0,Math.min(1,(a-e)/(o-e)));return t*t*t*(t*(6*t-15)+10)},t={entra:[.86,1.34],tuffo:[2.66,2.92],nascosto:[3.06,3.79],riemerge:[3.815,3.885],via:[3.865,3.955]},i=a=>o(a,t.entra[0],t.entra[1]),r=a=>o(a,t.via[0],t.via[1]);a.s(["$",0,t,"M",0,function(a,e,o){let t=(.618034*a+.13)%1,i=1-(t+e/(40+.381966*a%1*30)+.06*o)%1,r=.22+1.08*i*i,l=1-Math.min(1,(r-.22)/.5);return{anello:r,vicino:l*l,seme:t}},"z",0,i,"a",0,a=>Math.PI*(i(a)+o(a,t.tuffo[0],t.tuffo[1])),"m",0,e,"s",0,a=>i(a)*(1-e(a,2.84,2.93)),"A",0,a=>i(a)*(1-r(a)),"F",0,a=>.22*Math.sin(Math.PI*i(a))-.12*Math.sin(Math.PI*o(a,t.tuffo[0],t.tuffo[1])),"r",0,a=>o(a,t.tuffo[0],t.tuffo[1])*(1-o(a,t.riemerge[0],t.riemerge[1])),"J",0,r])}])})();