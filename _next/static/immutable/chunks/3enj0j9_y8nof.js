(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41243,e=>{var o=e.i(43476),t=e.i(71645),a=e.i(25234),r=e.i(90072),i=e.i(68366),l=e.i(67013),n=e.i(99121);let s=l.x.acceso;function c(e,o){let t=o/1440;return Math.min(e,70)*(t<1?Math.pow(t,.78):t)}let u=null;e.s(["X",0,.55,"i",0,s,"L",0,function({posizione:e=[0,0,0],rotazione:l=[.5,.7,0],px:s,acceso:m=!1,...f}){let d=(0,t.useRef)(null),p=(0,t.useMemo)(()=>{let e=new r.Ox({...i.O});return e.onBeforeCompile=(0,i.S)(),e},[]);(0,t.useLayoutEffect)(()=>{let e=d.current;if(!e)return;let o=e.material;o.emissive.set(n.t.fondo),o.emissiveIntensity=1});let v=(0,t.useMemo)(()=>new r.cE,[]);return(0,a.f)(({camera:e,size:o})=>{let t=d.current;if(!t||void 0===s)return;t.getWorldPosition(v);let a=2*Math.max(.01,v.distanceTo(e.position))*Math.tan(r.rB.degToRad(e.fov)/2)/Math.max(1,o.height),l=c(s,o.width)*a/i.L;Math.abs(t.scale.x-l)>1e-4&&t.scale.setScalar(l)}),(0,o.jsx)("mesh",{ref:d,geometry:u??=(0,i.h)(i.L,i.L,i.g),material:p,position:e,rotation:l,...f})},"K",0,function({forza:e=1}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Q,{forza:e}),(0,o.jsx)("ambientLight",{intensity:i.P})]})},"Y",0,c])},77417,72223,27680,32700,e=>{var o=e.i(72439);e.i(13733);var t=e.i(43476),a=e.i(71645),r=e.i(25234),i=e.i(90072),l=e.i(95399),n=e.i(99121),s=e.i(23020);e.s(["P",0,function({n:e=600,seme:o=0x135283b,quota:c=-1.27,peso:u=1,ridotto:m=!1,renderOrder:f=-802,orizzonte:d=!0}){let p=(0,a.useMemo)(()=>{let t=new Float32Array(3*e),a=new Float32Array(e),r=o,l=()=>(r=1664525*r+0x3c6ef35f>>>0)/0x100000000;for(let o=0;o<e;o++){let e=14+20*l(),r=l()*Math.PI*2,i=.04+.85*l();t[3*o]=Math.cos(r)*e,t[3*o+1]=c+i*e*.7,t[3*o+2]=-Math.abs(Math.sin(r))*e-6,a[o]=.012+l()*l()*l()*.1}let n=new i.ld;return n.setAttribute("position",new i.f5(t,3)),n.setAttribute("gran",new i.f5(a,1)),n},[e,o,c]),v=(0,a.useMemo)(()=>new i.Zg({transparent:!0,depthWrite:!1,blending:i.tq,uniforms:{uPeso:{value:1},uT:{value:0}},vertexShader:`
      attribute float gran;
      varying float vG;
      void main() {
        vG = gran;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = gran * 620.0 / max(1.0, -mv.z);
      }`,fragmentShader:`
      varying float vG;
      uniform float uPeso;
      uniform float uT;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float a = smoothstep(0.5, 0.06, length(d));
        float fase = fract(vG * 91.7) * 6.283;
        a *= 0.55 + 0.45 * sin(uT * 0.6 + fase);
        gl_FragColor = vec4(${(0,n.s)("avorio",1.023)}, a * uPeso * 0.9);
        if (gl_FragColor.a < 0.004) discard;
      }`}),[]),h=(0,a.useMemo)(()=>new i.Zg({transparent:!0,depthWrite:!1,depthTest:!1,blending:i.tq,uniforms:{uPeso:{value:1},uT:{value:0},uTanF:{value:.384}},vertexShader:`
      varying vec2 vL;
      varying float vZ;
      void main() {
        vL = position.xy;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vZ = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec2 vL;
      varying float vZ;
      uniform float uPeso;
      uniform float uT;
      uniform float uTanF;
      ${s.f}
      void main() {
        float alto = 2.0 * uTanF * max(vZ, 1.0);
        vec3 col = mondoOrizzonte(vL.y / alto, vL.x / alto, uT);
        gl_FragColor = vec4(col * uPeso, 1.0);
      }`}),[]),g=(0,a.useRef)(null),x=(0,a.useRef)(null);return(0,r.f)(e=>{let o=e.camera;if(x.current){let e=x.current.material.uniforms;e.uPeso.value=u,o.fov&&(e.uTanF.value=Math.tan(o.fov*Math.PI/360)),m||(e.uT.value=(0,l.B)()/1e3)}let t=g.current;if(!t)return;let a=t.material.uniforms;a.uPeso.value=u,m||(a.uT.value=(0,l.B)()/1e3)}),(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsxs)("mesh",{ref:x,position:[0,c,-44],renderOrder:f-2,frustumCulled:!1,children:[(0,t.jsx)("planeGeometry",{args:[220,90,1,1]}),(0,t.jsx)("primitive",{object:h,attach:"material"})]}),(0,t.jsx)("points",{ref:g,geometry:p,material:v,frustumCulled:!1,renderOrder:f})]})},"F",0,-1.27],72223);let c={macchie:0,crepe:1,reticolo:2,bande:3},u=e=>`vec3(${e.map(e=>e.toFixed(4)).join(", ")})`;e.s(["f",0,function e({posizione:s=[8.2,.1,-30],raggio:m=5.5,taglio:f=0,superficie:d="macchie",anelli:p,lune:v,peso:h=1,renderOrder:g=-801,vivo:x,fase:w=0}){let b=p?{dentro:1.35,fuori:2.1,apertura:.28,angolo:-.32,...!0===p?{}:p}:null,y=Math.max(b?b.fuori:1,x?1.22:1),P=x?{esposizione:1,rotazione:.05,atmosfera:.6,riempimento:.35,lune:.12,ridotto:!1,...x}:null,z=(0,a.useMemo)(()=>new i.Zg({transparent:!0,depthWrite:!1,blending:i.tq,uniforms:{uPeso:{value:1},uTaglio:{value:0},uSup:{value:0},uScala:{value:1},uAnello:{value:new i.$i(0,0,.28,-.32)},uVivo:{value:0},uEsp:{value:0},uAtm:{value:0},uRiemp:{value:0},uGiro:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uTaglio;
      uniform int uSup;
      uniform float uScala;
      /** x dentro, y fuori (0 = niente anelli), z apertura, w angolo */
      uniform vec4 uAnello;
      uniform float uVivo, uEsp, uAtm, uRiemp, uGiro;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float rumore(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
      }
      void main() {
        // coordinate del disco: d come nella home anche quando il quadro e' piu' largo
        vec2 d = (vUv - 0.5) * uScala;
        vec2 pUv = d + 0.5;
        float r = length(d) * 2.0;
        vec3 sole = ${u(o.U)};
        float sopra = smoothstep(0.0, 0.03, pUv.y - uTaglio);
        float a = 0.0;
        vec3 col = ${u(o.j)};
        float dentroDisco = step(r, 1.0);

        if (r <= 1.0) {
          vec3 n = normalize(vec3(d * 2.0, sqrt(max(0.0, 1.0 - r * r))));
          float lam = max(0.0, dot(n, sole));
          float limbo = pow(lam, 9.0);
          float mezzaluna = pow(lam, 3.2) * 0.05;
          // vivo: la superficie gira attorno all'asse; si legge sulla sfera
          vec3 nr = n;
          if (uVivo > 0.5) { float cg = cos(uGiro), sg = sin(uGiro); nr = vec3(cg * n.x + sg * n.z, n.y, -sg * n.x + cg * n.z); }
          // continua su tutta la sfera: nessuna cucitura quando gira davanti
          vec2 dd = uVivo > 0.5 ? vec2(nr.x * 0.5 + nr.z * 0.31, nr.y * 0.5 + nr.z * 0.17) : d;
          float m = rumore(dd * 7.0 + 4.0) * 0.6 + rumore(dd * 17.0) * 0.4;
          // vivo, da vicino: altre ottave di dettaglio, che si accendono solo
          // quando il disco e' grande a schermo (fwidth): niente sgranato,
          // niente sfocato quando la camera arriva sopra il pianeta
          float fine = 0.0;
          if (uVivo > 0.5) {
            float px = fwidth(r);
            float k1 = smoothstep(0.012, 0.004, px), k2 = smoothstep(0.005, 0.0015, px);
            fine = (rumore(dd * 43.0 + 1.7) - 0.5) * 0.5 * k1 + (rumore(dd * 109.0 + 5.3) - 0.5) * 0.35 * k2;
            // verso il bordo le coordinate si schiacciano e il dettaglio fine
            // diventa trattini: si spegne dove la sfera gira via
            fine *= smoothstep(0.15, 0.5, n.z);
            m = clamp(m + fine * 0.6, 0.0, 1.0);
          }
          float superficie = 0.72 + 0.28 * m;
          // LA GRANA D'AVORIO DELLA LUNA DELL'HERO (15 ottobre 2026): a celle
          // ferme sulla sfera, si legge come pietra e non come crateri
          // finissima: le celle restano sotto i due pixel (fwidth), se no su un
          // disco grande si leggono come trattini
          // la grana sta sullo schermo, un puntino per pixel come la grana del
          // sito: sulla sfera le celle si stiravano lungo i paralleli e a
          // densita' due si leggevano come trattini
          float granaL = step(0.9, hash(mod(floor(gl_FragCoord.xy), 251.0) + 0.37)) * 0.45 - 0.04;
          // il disegno in piu' prende luce solo dove arriva il sole
          float segno = 0.0;
          if (uSup == 1) {
            float c = rumore(dd * 9.0 + 3.1) * 0.65 + rumore(dd * 23.0) * 0.35 + fine * 0.08;
            float vc = 1.0 - abs(c * 2.0 - 1.0);
            // vivo: il filo ha il bordo di un pixel, a qualsiasi distanza
            if (uVivo > 0.5) { float fw = fwidth(vc); segno = smoothstep(0.983 - fw, 0.983 + fw, vc); }
            else segno = smoothstep(0.965, 1.0, vc);
          } else if (uSup == 2) {
            vec2 s = vec2(atan(nr.x, nr.z), asin(clamp(nr.y, -1.0, 1.0))) * 3.8197;
            vec2 g = abs(fract(s) - 0.5);
            float gm = max(g.x, g.y);
            if (uVivo > 0.5) { float fw = fwidth(gm); segno = smoothstep(0.482 - fw, 0.482 + fw, gm); }
            else segno = smoothstep(0.455, 0.5, gm);
          } else if (uSup == 3) {
            superficie *= 0.78 + 0.22 * sin(n.y * 17.0 + rumore(dd * 4.0) * 2.4);
          }
          // NIENTE LINEE NEL MONDO (15 ottobre 2026, Lorenzo): crepe e
          // reticolo disegnavano fili sulla sfera; ora il disegno e' solo
          // nella materia (macchie e grana), come la luna dell'hero
          segno = 0.0;
          a = (limbo * 0.85 + mezzaluna) * superficie * sopra;
          a += segno * pow(lam, 1.6) * 0.22 * sopra;
          col = mix(${u(o.j)}, ${u(o.d)}, limbo);
          if (uEsp > 0.0) {
            // il lato del sole, pieno: la superficie si legge, piu' calda verso il limbo
            // il terminatore morbido dell'hero: la luce muore su un quarto di sfera
            float ter = smoothstep(-0.1, 0.6, dot(n, sole));
            float giorno = pow(ter, 1.5) * (0.45 + 0.55 * m + granaL) * (uSup == 3 ? superficie : 1.0);
            // IL MICRO-RILIEVO NELLA LUCE RADENTE (18 ottobre 2026): vicino al
            // terminatore la superficie si legge per rilievo, come una pietra
            // vista di sbieco; in luce piena sparisce. Una derivata del rumore
            // fine lungo la direzione del sole, niente crateri.
            float rad = smoothstep(-0.1, 0.15, dot(n, sole)) * (1.0 - smoothstep(0.15, 0.55, dot(n, sole)));
            vec2 sd = normalize(sole.xy + 1e-4) * 0.012;
            float rilievo = (rumore(dd * 24.0 + sd * 24.0) - rumore(dd * 24.0 - sd * 24.0)) * 1.6 + (rumore(dd * 55.0 + sd * 55.0) - rumore(dd * 55.0 - sd * 55.0)) * 0.6;
            giorno += max(0.0, rilievo) * rad * 0.12 * smoothstep(0.2, 0.6, n.z);
            float disegno = segno * pow(lam, 0.8) * 0.9;
            float luce = (giorno * 0.5 + disegno) * uEsp * sopra;
            // il riempimento freddo dall'altra parte, appena
            float notte = pow(max(0.0, dot(n, normalize(-sole * vec3(1.0, 0.4, 1.0)/*dir*/))), 2.0) * (0.6 + 0.4 * m) * uRiemp * 0.45 * sopra;
            vec3 cGiorno = mix(${(0,n.s)("caldoChiaro",.671)}, ${u(o.P)}, smoothstep(0.35, 0.95, lam));
            vec3 cNotte = ${(0,n.s)("avorio",.621)};
            float tot = a + luce + notte;
            col = (col * a + cGiorno * luce + cNotte * notte) / max(tot, 1e-4);
            a = tot;
          }
        }
        // vivo: l'alone fuori dal disco, piu' acceso verso il sole
        if (uAtm > 0.0 && r > 0.97) {
          vec2 u = normalize(d);
          float verso = 0.25 + 0.75 * smoothstep(-0.3, 0.9, dot(u, normalize(sole.xy)));
          float alone = exp(-(r - 1.0) * 22.0) * smoothstep(0.97, 1.0, r) * verso * uAtm * 0.9 * sopra;
          col = (col * a + mix(${(0,n.s)("avorio",.664)}, ${u(o.D)}, verso) * alone) / max(a + alone, 1e-4);
          a += alone;
        }
        // l'atmosfera: un filo appena fuori dal corpo, sul lato illuminato
        {
          vec3 n = normalize(vec3(d * 2.0, sqrt(max(0.0, 1.0 - min(r, 1.0) * min(r, 1.0)))));
          a += smoothstep(0.93, 1.0, r) * dentroDisco * pow(max(0.0, dot(n, sole)), 3.0) * 0.40 * sopra;
        }

        // GLI ANELLI: ellisse inclinata, meta' dietro coperta dal disco
        if (uAnello.y > 0.0) {
          float ca = cos(uAnello.w), sa = sin(uAnello.w);
          vec2 q = vec2(ca * d.x + sa * d.y, -sa * d.x + ca * d.y) * 2.0;
          float e = length(vec2(q.x, q.y / max(0.05, uAnello.z)));
          float banda = smoothstep(uAnello.x, uAnello.x + 0.04, e) * (1.0 - smoothstep(uAnello.y - 0.06, uAnello.y, e));
          // righe sottili e un vuoto, come la grana: poco, non una decorazione
          // polvere, non righe (15 ottobre 2026: niente linee nel mondo)
          float righe = 0.82 + 0.18 * rumore(vec2(e * 16.0, q.x * 2.0 + 3.0));
          // vivo: grumi che scorrono lungo l'anello, piu' luce
          if (uVivo > 0.5) righe *= (0.7 + 0.6 * rumore(vec2(atan(q.y / max(0.05, uAnello.z), q.x) * 6.0 + uGiro * 3.0, e * 9.0))) * (1.0 + uEsp * 1.3);
          float vuoto = 1.0 - 0.75 * exp(-pow((e - mix(uAnello.x, uAnello.y, 0.62)) / 0.025, 2.0));
          // dietro (q.y > 0) il disco lo copre
          float coperto = (q.y > 0.0) ? dentroDisco : 0.0;
          // l'ombra del pianeta: la parte opposta al sole, dietro di lui
          // SFUMATA (7 ottobre 2026): era un taglio netto, dal pieno al 25%, e
          // dalla camera si leggeva come una macchia scura davanti al cielo.
          // Adesso la luce manca piano: piu' scura vicino al pianeta, e il
          // bordo dell'ombra si apre in una sfumatura invece che in una riga.
          float dietro = smoothstep(0.0, 0.35, -q.x * sign(sole.x));
          float dentro = 1.0 - smoothstep(0.75, 1.15, abs(q.y));
          float vicino = 1.0 - smoothstep(1.6, 2.6, q.x * q.x + q.y * q.y);
          float ombra = 1.0 - 0.5 * dietro * dentro * vicino;
          // la luce: dal lato del sole caldo, dall'altro quasi niente
          float lato = 0.18 + 0.82 * smoothstep(-0.9, 1.4, q.x * sole.x);
          float ra = banda * righe * vuoto * lato * ombra * (1.0 - coperto) * sopra;
          a += ra * 0.42;
          col = mix(col, mix(${u(o.j)}, ${u(o.d)}, lato), clamp(ra * 1.6, 0.0, 1.0));
        }
        gl_FragColor = vec4(col, a * uPeso * 0.34);
        if (gl_FragColor.a < 0.002) discard;
      }`}),[]),M=(0,a.useRef)(null);(0,a.useLayoutEffect)(()=>{let e=M.current;if(!e)return;let o=e.material.uniforms;o.uPeso.value=h,o.uTaglio.value=f,o.uSup.value=c[d],o.uScala.value=y,o.uAnello.value.set(b?.dentro??0,b?.fuori??0,b?.apertura??.28,b?.angolo??0),o.uVivo.value=+!!P,o.uEsp.value=P?P.esposizione:0,o.uAtm.value=P?P.atmosfera:0,o.uRiemp.value=P?P.riempimento:0});let A=(0,a.useRef)([]);(0,r.f)(()=>{if(!P)return;let e=P.ridotto?0:(0,l.B)()/1e3;M.current&&(M.current.material.uniforms.uGiro.value=w+e*P.rotazione),v?.forEach((o,t)=>{let a=A.current[t];if(!a)return;let r=Math.hypot(o.x,o.y),i=Math.atan2(o.y,o.x)+w+e*P.lune*(t%2?-.8:1)/Math.max(.6,.6*r);a.position.set(Math.cos(i)*r*m,Math.sin(i)*r*.4*m,.02*(t+1)),a.visible=!(Math.sin(i)>0&&Math.abs(Math.cos(i))*r<1.05&&1>Math.abs(Math.sin(i)*r*.4))})});let S=2*m*y;return(0,t.jsxs)(t.Fragment,{children:[P&&(0,t.jsxs)("mesh",{position:[s[0],s[1],s[2]-.02*m],renderOrder:g-.5,frustumCulled:!1,children:[(0,t.jsx)("circleGeometry",{args:[.997*m,64]}),(0,t.jsx)("meshBasicMaterial",{color:n.t.fondo,transparent:!0,opacity:h,depthWrite:!0})]}),(0,t.jsxs)("mesh",{ref:M,position:s,renderOrder:g,frustumCulled:!1,children:[(0,t.jsx)("planeGeometry",{args:[S,S,1,1]}),(0,t.jsx)("primitive",{object:z,attach:"material"})]}),v?.map((o,a)=>P?(0,t.jsx)("group",{position:s,children:(0,t.jsx)("group",{ref:e=>{A.current[a]=e},children:(0,t.jsx)(e,{raggio:m*o.raggio,superficie:o.superficie??"macchie",peso:h,renderOrder:g+.1,posizione:[0,0,0],vivo:{...P,lune:0,atmosfera:.6*P.atmosfera},fase:1.7*w+a})})},a):(0,t.jsx)(e,{raggio:m*o.raggio,superficie:o.superficie??"macchie",peso:h,renderOrder:g,posizione:[s[0]+o.x*m,s[1]+o.y*m,s[2]+.01*(a+1)]},a))]})}],27680);let m=e=>`vec3(${e.map(e=>e.toFixed(4)).join(", ")})`;e.s(["f",0,function({quota:e=-1.27,mobile:r=!1,compatto:l=1,peso:s=1,renderOrder:c=-801}){let u=(0,a.useMemo)(()=>new i.Zg({transparent:!0,depthWrite:!1,blending:i.tq,uniforms:{uPeso:{value:1},uCompatto:{value:1},uMano:{value:0}},vertexShader:`
      varying vec3 vW;
      varying vec2 vL;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        vL = vec2(position.x, -position.y - 25.0);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      varying vec3 vW;
      varying vec2 vL;
      uniform float uPeso;
      uniform float uCompatto;
      uniform float uMano;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float rumore(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float quota(vec2 p) {
        float a = 0.5, s = 0.0;
        for (int o = 0; o < 4; o++) { s += rumore(p) * a; p *= 2.07; a *= 0.5; }
        return s;
      }
      void main() {
        vec2 P = vL;
        float d = length(P);
        float e = 0.06 + d * 0.012;
        float h  = quota(P * 0.42);
        float hx = quota((P + vec2(e, 0.0)) * 0.42);
        float hz = quota((P + vec2(0.0, e)) * 0.42);
        vec3 n = normalize(vec3((h - hx) / e * 0.55, 1.0, (h - hz) / e * 0.55));
        vec3 sole = ${m(o.R)};
        float cresta = pow(max(0.0, dot(n, sole)), 2.6);
        float c = quota(P * 0.9 + 31.7);
        // niente linee nel mondo (15 ottobre 2026): le crepe si spengono,
        // la piana si legge dai riflessi come quella dell'hero
        float crepa = smoothstep(0.985, 1.0, 1.0 - abs(c * 2.0 - 1.0)) * smoothstep(0.42, 0.72, h) * 0.0;
        float polvere = rumore(P * 9.0) * smoothstep(2.0, 6.0, d) * (1.0 - smoothstep(12.0, 22.0, d));
        float lontano = 1.0 - smoothstep(8.0, 34.0, d);
        float vicino = mix(smoothstep(1.0, 4.0, length(vW - cameraPosition) - 5.6), smoothstep(0.0, 1.4, d), uMano);
        float anello = exp(-pow((d - 2.3) / 1.6, 2.0));
        float buco = 1.0 - uCompatto * exp(-pow(d / 1.6, 2.0)) * 0.95;
        float orizzonte = exp(-pow((d - 24.0) / 8.0, 2.0));
        float aperto = 1.0 - uCompatto;
        float lenti = mix(smoothstep(8.0, 14.0, length(vW - cameraPosition)), 1.0, uMano);
        float luce = (cresta * (0.42 + aperto * 0.16) + crepa * lenti * (0.5 + aperto * 0.4) + polvere * 0.045) * lontano * vicino
                   + anello * buco * 0.30 * vicino
                   + orizzonte * (0.20 + aperto * 0.26)
                   + uMano * (0.07 + cresta * 0.10 + crepa * 0.2) * (1.0 - smoothstep(4.0, 12.0, d));
        vec3 col = mix(${m(o.q)}, ${m(o.k)}, smoothstep(12.0, 30.0, d));
        float ferita = aperto * crepa * exp(-pow(d / 7.0, 2.0)) * lontano * lenti;
        col = mix(col, ${(0,n.s)("caldo",.829)}, clamp(ferita * 2.2, 0.0, 1.0));
        luce += ferita * 0.9;
        // L'OSSIDIANA BAGNATA DELL'HERO: lo specchio riflette la lama
        // dell'orizzonte, lungo verso chi guarda; le lastre col passo dei
        // cubetti si leggono solo come riflesso diverso
        vec3 nw = normalize(vec3((h - hx) * 0.8, 1.0, (h - hz) * 0.8));
        vec3 rif = reflect(normalize(vW - cameraPosition), nw);
        float lastra = 0.88 + 0.24 * hash(floor(P / 0.68));
        float specO = exp(-pow(rif.y / 0.07, 2.0)) * exp(-pow(rif.x / 0.9, 2.0)) * lastra * smoothstep(5.0, 12.0, length(vW - cameraPosition));
        vec3 somma = col * luce + ${(0,n.s)("caldo",.95)} * specO * 0.07 * lontano;
        float tot = clamp(max(luce, max(somma.r, max(somma.g, somma.b))), 0.0, 1.0);
        col = somma / max(tot, 1e-4);
        luce = tot;
        gl_FragColor = vec4(col, luce * uPeso);
        if (gl_FragColor.a < 0.003) discard;
      }`}),[]),f=(0,a.useRef)(null);return(0,a.useLayoutEffect)(()=>{let e=f.current;if(!e)return;let o=e.material.uniforms;o.uPeso.value=s,o.uCompatto.value=l,o.uMano.value=+!!r}),(0,t.jsxs)("mesh",{ref:f,rotation:[-Math.PI/2,0,0],position:[0,e,-25],renderOrder:c,frustumCulled:!1,children:[(0,t.jsx)("planeGeometry",{args:[90,90,1,1]}),(0,t.jsx)("primitive",{object:u,attach:"material"})]})}],32700),e.i(41243),e.s([],77417)},72439,e=>{var o=e.i(67013),t=e.i(99121);let a=(e,o,t)=>{let a=Math.hypot(e,o,t);return[e/a,o/a,t/a]},r=a(.94,.26,.21),i=a(.22,.13,-1),l=o.x.caldo,n=(0,t.w)("caldo",1.04),s=(0,t.w)("caldoChiaro",1.075),c=(0,t.w)("caldo",.934),u=(0,t.w)("avorio",.487),m=(0,t.w)("avorio",.538),f=(0,t.w)("caldo",.853);e.s(["d",0,c,"o",0,l,"P",0,s,"D",0,n,"q",0,m,"j",0,u,"k",0,f,"U",0,r,"R",0,i])},13733,e=>{var o=e.i(90072),t=e.i(72439);let a=new o.cE(...t.U);e.s(["f",0,a])},68366,90003,e=>{var o=e.i(43476),t=e.i(11007),a=e.i(71645),r=e.i(25234),i=e.i(28600),l=e.i(43257),n=e.i(48455),s=e.i(90072),c=e.i(8560);let u={totale:0,fatti:0};function m(e,o=1){u.totale+=o;let t=()=>{u.fatti+=o};e.then(t,t)}e.s(["t",0,m,"Y",0,function(e){return fetch(e,{cache:"force-cache"}).then(e=>e.blob()).then(()=>void 0,()=>void 0)},"f",0,function(e){if("u"<typeof document)return[];let o=navigator.userAgent,t=!(/iP(hone|ad|od)/.test(o)||/Safari\//.test(o)&&!/Chrome|Chromium|CriOS|Android|Edg\//.test(o))&&""!==document.createElement("video").canPlayType('video/webm; codecs="vp9"');return e.map(e=>t&&e.videoWebm?e.videoWebm:e.video).filter(e=>!!e)},"I",0,function(e){return new Promise(o=>{let t=new Image;t.decoding="async",t.onload=()=>{t.decode().then(()=>o(),()=>o())},t.onerror=()=>o(),t.src=e})},"K",0,function(){return u.totale>0?u.fatti/u.totale:0}],90003);var f=e.i(99121),d=e.i(99993);let p={color:f.D.cubo,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:2.1,emissive:f.t.fondo};function v(e=.22){return o=>{o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vSpecklePos;
        float spHash(vec3 p) {
          return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec3 g1 = floor(vSpecklePos * 78.0);
          float s1 = step(0.988, spHash(g1));
          // LA GRANA A OTTAVE (19 ottobre 2026): sul telefono a densita' alta un
          // cubetto vicino mostrava le scintille come quadratini di 10-15 px. Quando
          // una cella supera un paio di pixel la scintilla passa a celle 4 volte piu'
          // fini (memoria grana-su-superfici-grandi); da lontano resta quella di sempre
          // due ottave fini: a densita' tre le celle da 312 erano ancora quadratini
          // di 3 px; si passa a 1248 quando anche quelle superano il pixel
          float cppS = length(fwidth(vSpecklePos * 78.0));
          float s1fine = mix(step(0.995, spHash(floor(vSpecklePos * 1248.0))), step(0.992, spHash(floor(vSpecklePos * 312.0))), smoothstep(0.08, 0.2, cppS));
          s1 = mix(s1fine, s1, smoothstep(0.35, 0.8, cppS));
          vec3 g2 = floor(vSpecklePos * 190.0);
          float s2 = step(0.955, spHash(g2)) * 0.28;
          s2 = mix(step(0.97, spHash(floor(vSpecklePos * 760.0))) * 0.28, s2, smoothstep(0.35, 0.8, length(fwidth(vSpecklePos * 190.0))));
          diffuseColor.rgb += vec3(s1 * 0.85 + s2);
          vec3 nOss = normalize(vNormal);
          vec3 vOss = normalize(vViewPosition);
          float fOss = pow(1.0 - clamp(dot(nOss, vOss), 0.0, 1.0), 3.4);
          diffuseColor.rgb += ${(0,f.s)("avorio",.875)} * fOss * ${e.toFixed(3)};
        }`),o.vertexShader=o.vertexShader.replace("#include <common>","#include <common>\nvarying vec3 vSpecklePos;").replace("#include <begin_vertex>","#include <begin_vertex>\nvSpecklePos = position;")}}let h=!1,g=!1,x=!1;function w(e,o=512){let t=new c.c(e);t._setSize(o);let a=t._allocateTargets(),r=new s.ld;r.setAttribute("position",new s.ki([0,0,0,1,0,0,0,1,0],3));let i=[t._ggxMaterial,t._blurMaterial].filter(e=>!!e).map(e=>{let o=new s.kE(r,e);return o.frustumCulled=!1,o});return{pm:t,rt:a,mesh:i}}function b(e,o){if(e){try{o&&o.getRenderTarget()===e.rt&&o.setRenderTarget(null)}catch{}e.rt.dispose(),e.pm.dispose(),e.mesh[0]?.geometry.dispose()}}let y=new WeakMap,P=new WeakSet,z=new WeakSet,M=()=>new Promise(e=>{let o=globalThis.scheduler;o?.yield?o.yield().then(e):window.setTimeout(e,0)}),A=(e,o)=>void 0!==o.program&&!e.getContext().isContextLost(),S=async(e,o)=>{if(!e.extensions.has("KHR_parallel_shader_compile")||!o.isReady)return;let t=performance.now();for(;A(e,o)&&!o.isReady()&&performance.now()-t<5e3;)await new Promise(e=>window.setTimeout(e,16))};async function C(e){for(let o of[...e.info.programs??[]])if(!z.has(o)&&(z.add(o),await S(e,o),A(e,o))){try{o.getUniforms(),o.getAttributes()}catch{}await M()}}e.s(["P",0,.06,"L",0,.32,"d",0,{z:4.1,fov:42},"g",0,.36,"O",0,p,"K",0,.34,"Q",0,function({forza:e=1}){return(0,o.jsxs)(l.f,{resolution:512,children:[(0,o.jsx)(n.f,{form:"rect",intensity:3.4*e,position:[0,4,2],scale:[9,1.2,1],color:f.E.alto}),(0,o.jsx)(n.f,{form:"rect",intensity:1.5*e,position:[-5,.5,1],rotation:[0,Math.PI/2.6,0],scale:[6,2.4,1],color:f.E.lato}),(0,o.jsx)(n.f,{form:"rect",intensity:1.7*e,position:[4.5,-1.4,2.2],rotation:[0,-Math.PI/2.8,0],scale:[5,.24,1],color:f.E.taglio}),(0,o.jsx)(n.f,{form:"rect",intensity:.34*e,position:[0,0,7],scale:[24,16,1],color:f.E.ambiente}),(0,o.jsx)(n.f,{form:"rect",intensity:.18*e,position:[0,-5,1],rotation:[Math.PI/2,0,0],scale:[10,6,1],color:f.E.basso})]})},"j",0,function({carta:e=f.t.carta,resto:o}){let l=(0,a.useRef)(o);(0,a.useEffect)(()=>{l.current=o},[o]);let n=(0,a.useRef)(!1),c=(0,i.f)(e=>e.gl),u=(0,i.f)(e=>e.scene),p=(0,i.f)(e=>e.camera);(0,a.useEffect)(()=>{let e=!0,o=null,t=()=>{};m(new Promise(e=>{t=e}),6);let a=requestAnimationFrame(async()=>{try{o=w(c);let t=new s.P6;for(let e of o.mesh)t.add(e);let a=c.getRenderTarget(),r=Promise.resolve();try{c.setRenderTarget(o.rt),o.pm.compileCubemapShader();let e=o.pm._cubemapMaterial;if(e){let a=new s.kE(o.mesh[0].geometry,e);a.frustumCulled=!1,t.add(a),o.mesh.push(a)}r=(0,d.f)(c,t,p)}finally{c.setRenderTarget(a)}performance.mark("tela:inizio"),await r,performance.mark("tela:ambiente");let i=(0,d.f)(c,u,p);g||(g=!0,window.__telaInCompilazione=!0,window.dispatchEvent(new Event("tela-in-compilazione"))),await i,performance.mark("tela:scena"),e&&(n.current=!0);let m=l.current;if(m){let o=performance.now();for(;e&&!m.montato()&&performance.now()-o<6e3;)await new Promise(e=>requestAnimationFrame(()=>e(null)));await new Promise(e=>requestAnimationFrame(()=>e(null)));let t=m.gruppo(),a=[];for(let o of t?[...t.children]:[]){if(!e)break;let t=[];o.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{a.push((0,d.f)(c,o,p,u))}catch{}finally{for(let e of t)e.visible=!1}await new Promise(e=>setTimeout(e,0))}await Promise.all(a).catch(()=>void 0)}let f=[];u.traverse(e=>{e.visible||(f.push(e),e.visible=!0)});let v=Promise.resolve();try{v=(0,d.f)(c,u,p)}finally{for(let e of f)e.visible=!1}await v;let h=new Set;if(u.traverse(e=>{let o=e.material;for(let e of o?Array.isArray(o)?o:[o]:[])e.transparent&&h.add(e)}),h.size){for(let e of h)e.transparent=!1;u.traverse(e=>{e.visible||(f.push(e),e.visible=!0)});let e=Promise.resolve();try{e=(0,d.f)(c,u,p)}finally{for(let e of f)e.visible=!1;for(let e of h)e.transparent=!0,e.needsUpdate=!0}await e}await C(c),performance.mark("tela:tutto"),x=!0}catch{}e&&(n.current=!0),e&&l.current?.accendi(),window.dispatchEvent(new Event("tela-tutta")),t()});return()=>{e=!1,cancelAnimationFrame(a),clearTimeout(0),b(o,c);let t=c.properties;if(t&&!t.zittita){let e=t.get.bind(t);t.get=o=>{let t=e(o);return o?.isMaterial&&!t.currentProgram&&(t.currentProgram={isReady:()=>!0}),t},t.zittita=!0}}},[c,u,p]);let v=(0,a.useRef)(new s.Es(e)),y=(0,a.useRef)(null),P=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=(0,t.C)();return P.current=e,e},[]),(0,r.f)(({gl:e,scene:o,camera:t})=>{if(P.current){let e=P.current;P.current=null,requestAnimationFrame(e)}if(n.current){h||performance.mark("tela:cubi"),h=!0,y.current&&(e.setClearColor(y.current.c,y.current.a),y.current=null),e.render(o,t);return}y.current||(y.current={c:e.getClearColor(new s.Es),a:e.getClearAlpha()}),e.setClearColor(v.current,1),e.clear()},1),null},"o",0,1.6,"V",0,.78,"W",0,function({quando:e=!0}){let o=(0,i.f)(e=>e.gl),t=(0,i.f)(e=>e.scene),r=(0,i.f)(e=>e.camera),l=(0,a.useRef)(-1);return(0,a.useEffect)(()=>{if(!e)return;let a=[],i=null,n=()=>{};m(new Promise(e=>{n=e}),3);let s=window.setTimeout(()=>n(),9e3),c=!1,u=()=>{c&&n()},f=!0,d=async e=>{var a,n,s,m;let d,p,v=y.get(o);if(v&&(await v,!f))return;e>=3&&(c=!0);let h=0;if(t.traverse(()=>{h++}),h===l.current){null===i&&u();return}l.current=h,null!==i&&clearTimeout(i),a=o,n=t,s=r,m=e=>{i=e,null===e&&u()},d=[],n.traverse(e=>{let o=e.material;!o||(Array.isArray(o)?o:[o]).some(e=>!P.has(e))&&d.push(e)}),p=()=>{let e=d.shift();if(!e){C(a),m(null);return}let o=e.material;for(let e of Array.isArray(o)?o:[o])P.add(e);let t=e.visible;e.visible=!0;let r=[];e.traverse(o=>{o===e||o.visible||(r.push(o),o.visible=!0)});try{a.compile(e,s,n)}finally{for(let o of(e.visible=t,r))o.visible=!1}m(window.setTimeout(p,16))},i=window.setTimeout(p,0)};return[400,1200,2500,4500,7500,12e3,2e4].forEach((e,o)=>a.push(window.setTimeout(()=>{d(o)},e))),a.push(s),()=>{for(let e of(f=!1,a))clearTimeout(e);null!==i&&clearTimeout(i)}},[e,o,t,r]),null},"U",0,function(){let e=new s.Ox({...p}),o=v();return e.onBeforeCompile=e=>{o(e),e.vertexShader=e.vertexShader.replace("#include <common>","#include <common>\nvarying vec3 vNormCubetto;").replace("#include <beginnormal_vertex>","#include <beginnormal_vertex>\nvNormCubetto = objectNormal;"),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\nvarying vec3 vNormCubetto;").replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
      {
        vec3 nO = abs(normalize(vNormCubetto));
        float piana = smoothstep(0.93, 0.99, max(nO.x, max(nO.y, nO.z)));
        vec3 rW = inverseTransformDirection(reflect(-normalize(vViewPosition), normal), viewMatrix);
        float versoLama = piana * smoothstep(0.05, 0.55, rW.y);
        radiance *= 1.0 - 0.9 * versoLama;
        #ifdef USE_CLEARCOAT
        clearcoatRadiance *= 1.0 - 0.9 * versoLama;
        #endif
      }`)},e.customProgramCacheKey=()=>"cubetto",e},"h",0,function(e,o,t,a=.013,r=3){let i=a-1e-5,l=new s.Ow;l.absarc(1e-5,1e-5,1e-5,-Math.PI/2,-Math.PI,!0),l.absarc(1e-5,o-2*i,1e-5,Math.PI,Math.PI/2,!0),l.absarc(e-2*i,o-2*i,1e-5,Math.PI/2,0,!0),l.absarc(e-2*i,1e-5,1e-5,0,-Math.PI/2,!0);let n=new s.Jy(l,{depth:t-2*a,bevelEnabled:!0,bevelSegments:r,steps:1,bevelSize:i,bevelThickness:a,curveSegments:r});return n.center(),n},"c",0,function(e,o,t=1){return!o||o>=1.6?e:e*Math.pow(1.6/o,t)},"S",0,v,"X",0,()=>g,"M",0,function(e,o,t){let a=null,r=(async()=>{try{a=w(e);let r=new s.P6;for(let e of a.mesh)r.add(e);let i=e.getRenderTarget(),l=Promise.resolve();try{e.setRenderTarget(a.rt),a.pm.compileCubemapShader();let o=a.pm._cubemapMaterial;if(o){let e=new s.kE(a.mesh[0].geometry,o);e.frustumCulled=!1,r.add(e),a.mesh.push(e)}l=(0,d.f)(e,r,t)}finally{e.setRenderTarget(i)}await l;let n=e=>{let o=!1;return e.traverse(e=>{e.isLight&&(o=!0)}),o},c=[],u=!1;for(let e of o.children)n(e)?e.isLight||(u=!0):c.push(e);let m=e=>{let t=[];o.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{return e()}finally{for(let e of t)e.visible=!1}},f=()=>new Promise(e=>window.setTimeout(e,0)),p=[];for(let a of c)a.parent===o&&(p.push(m(()=>(0,d.f)(e,a,t,o))),await f());u&&p.push(m(()=>(0,d.f)(e,o,t))),await Promise.all(p),await C(e)}catch{}})();return y.set(e,r),{lavoro:r,libera:()=>b(a,e)}},"m",0,()=>h,"J",0,()=>x],68366)},23020,e=>{var o=e.i(99121);let t={buio:(0,o.s)("fondo",.92),lama:(0,o.s)("caldoChiaro",.85),nebbia:(0,o.s)("caldo",.75),foschia:(0,o.s)("avorio",.5),riflesso:(0,o.s)("caldo",.9)},a=`
  float mondoHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float mondoRum(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mondoHash(i), mondoHash(i + vec2(1.0, 0.0)), f.x),
               mix(mondoHash(i + vec2(0.0, 1.0)), mondoHash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  vec3 mondoOrizzonte(float y, float x, float t) {
    vec3 col = vec3(0.0);
    // la lama: sottile e tenue, appena sopra l'orizzonte, piu' forte in mezzo
    float lama = (exp(-pow(y / 0.0135, 2.0)) * 0.09 + exp(-pow(y / 0.07, 2.0)) * 0.03) * exp(-pow(x / 1.22, 2.0));
    col += ${t.foschia} * lama;
    if (y > -0.008) {
      // la nebbia bassa, calda, che scorre di un niente
      float nb = mondoRum(vec2(x * 3.3 + t * 0.012, y * 26.0)) * 0.6 + mondoRum(vec2(x * 8.5 - t * 0.018, y * 59.0 + 4.0)) * 0.4;
      float nebbia = exp(-pow(max(0.0, y + 0.0054) / 0.041, 2.0)) * smoothstep(-0.008, 0.003, y) * (0.45 + 0.75 * nb) * exp(-pow(x / 1.49, 2.0));
      col += mix(${t.nebbia}, ${t.lama}, nb) * nebbia * 0.17;
      // la foschia alta, a strati, nel verso opposto
      float nb2 = mondoRum(vec2(x * 1.85 - t * 0.008, y * 12.9 + 9.0));
      float strato = exp(-pow(max(0.0, y - 0.0325) / 0.087, 2.0)) * smoothstep(-0.005, 0.022, y) * (0.4 + 0.6 * nb2);
      col += mix(${t.foschia}, ${t.nebbia}, 0.5) * strato * 0.05;
    } else {
      // il suolo bagnato: la luce dell'orizzonte riflessa, lunga verso chi
      // guarda e spezzata dalle lastre
      float g = -y;
      float lastra = 0.88 + 0.24 * mondoHash(floor(vec2(x * 9.0, 1.0 / max(g, 0.004) * 0.6)));
      col += ${t.riflesso} * exp(-g / 0.05) * 0.06 * exp(-pow(x / 1.6, 2.0)) * lastra;
    }
    return col;
  }
`;e.s(["f",0,a])},99993,e=>{e.s(["f",0,function(e,o,t,a=null,r=15e3){let i=e.compile(o,t,a),l=e.getContext(),n=e.extensions.has("KHR_parallel_shader_compile"),s=performance.now();return new Promise(t=>{let a=()=>{l.isContextLost()||performance.now()-s>r?t(o):(i.forEach(o=>{let t=e.properties.get(o).currentProgram;(!t||!n||void 0===t.program||t.isReady())&&i.delete(o)}),i.size)?window.setTimeout(a,10):t(o)};n?a():window.setTimeout(a,10)})}])}])})();