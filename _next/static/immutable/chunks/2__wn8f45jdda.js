(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64365,e=>{"use strict";var o=e.i(43476),a=e.i(95682),t=e.i(92901),i=e.i(98076),r=e.i(72021),l=e.i(71645),n=e.i(75056),s=e.i(25234),u=e.i(28600),c=e.i(16352),v=e.i(90072),p=e.i(1053),d=e.i(71931),m=e.i(19948),f=e.i(23020);e.i(77417);var h=e.i(72223),x=e.i(41243),g=e.i(70634),z=e.i(27680),w=e.i(72439),y=e.i(95399),M=e.i(59200),b=e.i(17907),P=e.i(99121),A=e.i(51386),S=e.i(9050),E=e.i(96756),L=e.i(68366);let T=()=>{},j=e=>`vec3(${e.map(e=>e.toFixed(4)).join(", ")})`,$=new v.cE(.27,-.1,-1).normalize(),q=new v.cE(.03,-.07,-1).normalize(),C=new v.cE,D=new v.cE,O=new v.cE,I=new v.cE,W=new v.cE,R=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
`,V=Array.from({length:40},()=>new v.$i(0,0,0,0)),N=(e,o,a,t)=>-.0042*((e-a)**2+(o-t)**2),F=`
  vec3 nebbia(vec3 col, float d, float y) {
    vec3 orizzonte = ${(0,P.s)("pietra",.492)};
    return mix(col, orizzonte, smoothstep(10.0, 45.0, d));
  }
`,G=5.5/30*34;function k({taglio:e=0}){let a=(0,l.useRef)(null),t=(0,l.useRef)(null);return(0,s.f)(({camera:e,size:o,clock:i})=>{let r=a.current;if(!r)return;t.current||r.traverse(e=>{let o=e.material?.uniforms;!t.current&&o?.uEsp&&(t.current=o.uEsp)}),t.current&&(t.current.value=(p.u.mobile?1.9:1.8)*(1+.22*Math.sin(.19*i.elapsedTime)*S.s.v));let l=o.width/Math.max(1,o.height)<.8?q:$;r.position.copy(e.position).addScaledVector(l,34),r.lookAt(e.position)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.P,{quota:0,ridotto:p.u.ridotto}),(0,o.jsx)(h.P,{quota:-1.2,n:p.u.mobile?500:900,seme:0x1352892,peso:.42,ridotto:p.u.ridotto,renderOrder:-803}),(0,o.jsx)("group",{ref:a,children:(0,o.jsx)(z.f,{posizione:[0,0,0],raggio:G,taglio:e,vivo:{esposizione:p.u.mobile?1.9:1.8,atmosfera:.8,riempimento:.3,rotazione:.03,ridotto:p.u.ridotto}})}),(0,o.jsx)(H,{})]})}function H(){let e=(0,l.useMemo)(()=>new v.Zg({side:v.tw,depthWrite:!1,depthTest:!0,transparent:!0,blending:v.tq,uniforms:{uT:{value:0},uOrizz:{value:-.15}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 vDir;
      uniform float uT, uOrizz;
      ${R}
      ${f.f}
      void main() {
        vec3 d = normalize(vDir);
        vec3 col = vec3(0.0);
        // L'ORIZZONTE DELLA HOME (10 ottobre 2026): la fascia di polvere
        // luminosa sulla curva della piana, calda, piu' accesa dal lato del
        // sole (destra) e rotta in banchi da un rumore lento, e sopra l'aria
        // che si spegne piano verso lo zenit. Sotto l'orizzonte la copre la
        // piana. Era un nero piatto con un filo.
        {
          float el = asin(clamp(d.y, -1.0, 1.0)) - uOrizz;
          float az = atan(d.x, -d.z);
          float su = max(el, 0.0);
          float banchi = rumore(vec2(az * 7.0 + uT * 0.004, su * 34.0)) * 0.6 + rumore(vec2(az * 23.0 - uT * 0.006, su * 90.0 + 3.1)) * 0.4;
          float lato = 0.55 + 0.45 * smoothstep(-0.6, 0.7, sin(az));
          float fascia = exp(-su * 24.0) * (0.5 + 0.8 * banchi) * 0.24 + exp(-su * 5.0) * 0.06 + exp(-su * 1.4) * 0.016;
          fascia *= lato * smoothstep(-0.02, 0.0, el);
          col += mix(${(0,P.s)("avorio",.42)}, ${j(w.k)}, exp(-su * 9.0)) * fascia * 0.5;
          // (18 ottobre 2026) la luce dell'orizzonte dell'hero, da mondo.ts:
          // la lama calda, la nebbia bassa, la foschia a strati (un'altezza di
          // schermo vale circa 0,77 radianti a questo campo)
          col += mondoOrizzonte(el / 0.77, az / 0.77, uT) * smoothstep(-0.02, 0.0, el);
          // LA VIA LATTEA FINE, come nell'hero: una fascia stretta in alto a
          // destra fatta di stelle sotto il pixel, con la corsia scura nel mezzo
          float vd = (el - 0.5 + az * 0.35) / 0.05;
          float via = exp(-vd * vd) * step(0.05, el);
          // stelle con jitter, a punti morbidi misurati in pixel: nessuna
          // griglia (la versione a celle piene faceva una trama di pixel)
          vec2 gv = vec2(az, el) * 300.0;
          vec2 gi = floor(gv);
          vec2 gf = fract(gv) - 0.5 - (vec2(hash(gi + 1.3), hash(gi + 7.1)) - 0.5) * 0.7;
          float pxc = 1.0 / max(max(fwidth(gv.x), fwidth(gv.y)), 1e-4);
          float stellaV = step(1.0 - via * 0.09, hash(gi)) * exp(-dot(gf, gf) * pxc * pxc * 1.6) * (0.35 + 0.65 * hash(gi + 3.3));
          float corsia = 1.0 - 0.6 * exp(-pow((vd + (rumore(vec2(az, el) * 18.0) - 0.5) * 1.4) / 0.35, 2.0));
          float nubeV = rumore(vec2(az, el) * 14.0) * 0.6 + rumore(vec2(az, el) * 37.0 + 2.0) * 0.4;
          col += ${(0,P.s)("avorio",.55)} * via * 0.05 * corsia * smoothstep(0.3, 0.9, nubeV) + ${(0,P.s)("avorio",.9)} * stellaV * 0.55;
        }
        // la meteora: una ogni undici secondi, sottile, nel cielo alto a sinistra
        {
          float giro = floor(uT / 11.0);
          float f = fract(uT / 11.0) / 0.07;
          if (f < 1.0) {
            vec2 a0 = vec2(-0.2 - hash(vec2(giro, 1.0)) * 0.7, 0.35 + hash(vec2(giro, 2.0)) * 0.3);
            vec2 dir = normalize(vec2(-0.85, -0.45));
            vec2 testa = a0 + dir * f * 0.5;
            vec2 qa = vec2(atan(d.x, -d.z), asin(clamp(d.y, -1.0, 1.0)));
            vec2 w = qa - testa;
            float lungo = dot(w, -dir);
            float largo = length(w + dir * lungo);
            float scia = step(0.0, lungo) * exp(-lungo / 0.08) * exp(-largo * largo / 0.0000035);
            float acc = smoothstep(0.0, 0.2, f) * (1.0 - smoothstep(0.8, 1.0, f));
            col += ${(0,P.s)("avorio",.979)} * scia * acc * 0.9;
          }
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),[]),a=(0,l.useRef)(null);return(0,s.f)(({camera:e,clock:o})=>{let t=a.current;if(!t)return;t.position.copy(e.position);let i=t.material.uniforms;i.uT.value=p.u.ridotto?0:o.elapsedTime,i.uOrizz.value=-2*Math.sqrt(.0042*Math.max(.05,e.position.y))}),(0,o.jsx)("mesh",{ref:a,material:e,renderOrder:-10,frustumCulled:!1,children:(0,o.jsx)("sphereGeometry",{args:[150,48,24]})})}let _=new v.cE;function K({mobile:e}){let a=(0,l.useMemo)(()=>new v.Zg({uniforms:{uK:{value:.0042},uP:{value:$},uAcceso:{value:new v.cE(0,0,-99)},uLuce:{value:1},uOmbre:{value:V},uT:{value:0},uCrepa:{value:new v.wq(0,0)},uCrepaDa:{value:new v.wq},uCrepaA:{value:new v.wq}},vertexShader:`
      uniform float uK;
      varying vec3 vW;
      varying float vD;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        float d = distance(w.xz, cameraPosition.xz);
        w.y -= uK * d * d;
        vW = w.xyz; vD = d;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform vec3 uP;
      uniform vec3 uAcceso;
      uniform float uLuce, uT;
      uniform vec2 uCrepa, uCrepaDa, uCrepaA;
      uniform vec4 uOmbre[40];
      varying vec3 vW;
      varying float vD;
      ${R}
      ${F}
      // LA STESSA OSSIDIANA DI /progetti E DELL'HERO (v2/Spazio, la piana):
      // quattro ottave di rilievo, tre in mano (19 ottobre 2026, Lorenzo)
      float quota(vec2 p) {
        float a = 0.5, s = 0.0;
        for (int o = 0; o < ${e?3:4}; o++) { s += rumore(p) * a; p *= 2.07; a *= 0.5; }
        return s;
      }
      // L'UNICA DIFFERENZA: LAVA RAFFREDDATA. Sull'altro pianeta la stessa
      // ossidiana e' spaccata in celle, come una colata che si e' ritirata
      // freddando: la distanza dal bordo della cella (Voronoi, F2 - F1)
      float fratture(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        float d1 = 8.0, d2 = 8.0;
        for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
          vec2 g = vec2(float(x), float(y));
          vec2 o = vec2(hash(i + g), hash(i + g + 19.1)) * 0.8 + 0.1;
          float dd = length(g + o - f);
          if (dd < d1) { d2 = d1; d1 = dd; } else if (dd < d2) d2 = dd;
        }
        return d2 - d1;
      }
      void main() {
        vec3 v = normalize(vW - cameraPosition);
        vec2 P = vW.xz;
        float d = vD;
        // IL RILIEVO E LA LUCE BASSA DIETRO (SOLE_PIANA), come in Spazio
        float e = 0.06 + d * 0.012;
        float h = quota(P * 0.42), hx = quota((P + vec2(e, 0.0)) * 0.42), hz = quota((P + vec2(0.0, e)) * 0.42);
        vec3 nr = normalize(vec3((h - hx) / e * 0.55, 1.0, (h - hz) / e * 0.55));
        float cresta = pow(max(0.0, dot(nr, ${j(w.R)})), 2.6);
        // le fratture: un filo sottile, solo dove la cella resta piu' grande
        // di qualche pixel (lontano si spengono, se no trama di pixel)
        float fq = fratture(P * 0.85);
        float largo = fwidth(fq) * 1.2 + 0.01;
        // ne' troppo lontano (trama di pixel) ne' addosso all'obiettivo: da
        // vicino le celle grandi si leggevano come una rete di esagoni (390)
        float cella = (1.0 - smoothstep(0.08, 0.25, max(fwidth(P.x * 0.85), fwidth(P.y * 0.85)))) * smoothstep(5.0, 9.0, d);
        // a tratti, mai una rete continua (le lastre accese a linee si
        // leggevano \xabeffetto Tron\xbb, 15 ottobre): il rumore ne apre solo alcuni
        float aperti = smoothstep(0.42, 0.62, rumore(P * 0.7 + 3.3));
        float frattura = (1.0 - smoothstep(0.0, largo * mix(0.45, 1.25, aperti), fq)) * cella * aperti;
        // il labbro scuro: la lava si e' ritirata, attorno al filo la pietra sprofonda
        float labbroS = (1.0 - smoothstep(largo, largo * 5.0 + 0.05, fq)) * cella * aperti;
        float polvere = rumore(P * 9.0) * smoothstep(2.0, 6.0, d) * (1.0 - smoothstep(12.0, 22.0, d));
        float lontano = 1.0 - smoothstep(8.0, 34.0, d);
        float vicino = smoothstep(0.4, 3.0, d);
        float orizzonte = exp(-pow((d - 19.0) / 7.0, 2.0));
        // la pozza larga e morbida sotto l'elica, dove stanno l'omino e le cose
        vec2 cz = vW.xz - vec2(0.0, -0.4);
        float pozza = exp(-dot(cz, cz) / 26.0);
        float pz = exp(-dot(vW.xz - uAcceso.xz, vW.xz - uAcceso.xz) * 0.55);
        // LA LUCE CHE PASSA (5 novembre 2026): una fascia larga che attraversa la piana
        // in un paio di minuti, solo sui versanti che guardano il sole; a mani ferme la
        // piana cambia, e nessun attacco. Le chiazze larghe tolgono il grigio uniforme
        float chiazze = 0.74 + 0.5 * smoothstep(0.34, 0.66, h);
        float passa = exp(-pow((mod(dot(P, vec2(0.8, 0.6)) - uT * 0.42 + 40.0, 80.0) - 40.0) / 11.0, 2.0));
        float luce = (cresta * (0.42 + passa * 0.3) * chiazze * (1.0 - labbroS * 0.7) + frattura * (0.11 + cresta * 0.5) + polvere * 0.03) * lontano * vicino
                   + orizzonte * 0.2 + pozza * 0.12 + pz * 0.07 * uLuce
                   // IN MANO LA PIANA ARRIVA FINO AI PIEDI (come in Spazio): la
                   // meta' bassa dello schermo e' primo piano, e restava nera
                   ${e?"+ (0.07 + cresta * 0.10 + frattura * 0.25) * (1.0 - smoothstep(4.0, 12.0, d))":""};
        // il colore della piana di Spazio: ossidiana fredda, che si scalda appena verso l'orizzonte
        vec3 tinta = mix(${(0,P.s)("avorio",.538)}, ${(0,P.s)("caldo",.853)}, smoothstep(12.0, 30.0, d));
        // LE OMBRE (vedi OMBRE): contatto stretto e pieno per chi tocca
        // terra, e l'ombra portata morbida verso chi guarda. Si toglie la
        // luce che arriva, non si dipinge un nero sopra.
        float buio = 0.0;
        if (d < 16.0) {
          vec2 dirO = normalize(-${j(w.R)}.xz);
          vec2 latO = vec2(-dirO.y, dirO.x);
          for (int i = 0; i < ${e?31:40}; i++) {
            vec4 c = uOmbre[i];
            if (c.z <= 0.0) continue;
            vec2 q = vW.xz - c.xy;
            if (dot(q, q) > c.z * c.z * 30.0 + c.w * c.w * 4.0) continue;
            float contatto = exp(-dot(q, q) / (c.z * c.z * 0.32)) * (1.0 - smoothstep(0.0, 0.5, c.w));
            vec2 o = q - dirO * c.w * 0.32;
            float lungo = dot(o, dirO) / (1.0 + c.w * 0.7);
            float lat = dot(o, latO);
            float re = c.z * (1.0 + c.w * 0.45);
            float portata = exp(-(lungo * lungo + lat * lat) / (re * re)) * mix(0.75, 0.22, smoothstep(0.0, 2.6, c.w));
            buio = max(buio, max(contatto * 0.92, portata));
          }
          buio *= smoothstep(16.0, 10.0, d);
        }
        vec3 col = ${(0,P.s)("pietra",.383)} * (1.0 - buio * 0.45) * (1.0 - labbroS * 0.35 * lontano) + tinta * luce * (1.0 - buio);
        // nel fondo della frattura resta un filo di brace, che respira piano
        col += ${(0,P.s)("caldo",.9)} * frattura * lontano * vicino * (0.05 + 0.03 * sin(uT * 0.31 + P.x * 0.7)) * (1.0 - buio);
        // LA LUCE DALLE CREPE (31 ottobre): aprendo uno scritto le fratture
        // che il rumore gia' lascia aperte prendono luce calda, partendo dai
        // piedi dell'omino e correndo fino all'ombra della lastra aperta. La
        // stessa luce che filtra dalle crepe della luna in home: qui esce
        // dalla lava. Niente rete accesa (15 ottobre): solo una fascia
        // stretta lungo il cammino, e solo i tratti gia' aperti.
        if (uCrepa.y > 0.001) {
          vec2 ab = uCrepaA - uCrepaDa;
          float t = clamp(dot(P - uCrepaDa, ab) / max(dot(ab, ab), 1e-4), 0.0, 1.0);
          vec2 q = P - (uCrepaDa + ab * t);
          float fascia = exp(-dot(q, q) / (0.55 + t * 0.9));
          float fronte = 1.0 - smoothstep(uCrepa.x - 0.12, uCrepa.x + 0.02, t);
          float aperta = (1.0 - smoothstep(0.0, largo, fq)) * smoothstep(0.42, 0.62, rumore(P * 0.7 + 3.3))
                       * (1.0 - smoothstep(0.08, 0.25, max(fwidth(P.x * 0.85), fwidth(P.y * 0.85))));
          float respiro = 0.86 + 0.14 * sin(uT * 0.7 + t * 3.0);
          col += mix(${(0,P.s)("caldo",.9)}, ${(0,P.s)("caldoChiaro",1)}, fronte * (1.0 - smoothstep(0.0, 0.25, uCrepa.x - t)))
               * aperta * fascia * fronte * uCrepa.y * respiro * 0.32 * (1.0 - buio * 0.5);
        }
        // IL VETRO BAGNATO DI SPAZIO: le lastre col passo dei cubetti si
        // leggono solo nel riflesso; i riflessi sono lunghi e morbidi e
        // ondeggiano piano sull'ora d'ambiente (uT); il pianeta ci lascia la sua scia
        float dc = length(vW - cameraPosition);
        vec2 G = P / 0.68;
        float fitto = max(fwidth(G.x), fwidth(G.y));
        float lastra = mix(1.0, 0.88 + 0.24 * hash(floor(G) * 1.31 + 0.7), 1.0 - smoothstep(0.08, 0.3, fitto));
        vec2 ond = vec2(sin(P.x * 0.9 + uT * 0.55) + sin(P.y * 1.7 - uT * 0.4), cos(P.y * 1.1 + uT * 0.5) + sin(P.x * 2.3 + uT * 0.35)) * 0.006;
        vec3 nw = normalize(vec3((h - hx) * 0.8 + ond.x, 1.0, (h - hz) * 0.8 + ond.y));
        vec3 rif = reflect(v, nw);
        float specO = exp(-pow(rif.y / 0.07, 2.0)) * exp(-pow(rif.x / 0.9, 2.0)) * lastra;
        vec3 extra = mix(${(0,P.s)("caldo",.9)}, ${(0,P.s)("caldoChiaro",1)}, 0.5) * specO * 0.13 * smoothstep(4.0, 10.0, dc);
        extra += ${(0,P.s)("avorio",.5)} * (lastra - 0.88) * 0.03 * smoothstep(3.0, 10.0, dc) * (1.0 - smoothstep(16.0, 30.0, d));
        vec3 r = reflect(v, normalize(mix(vec3(0.0, 1.0, 0.0), nw, 0.5)));
        float sp = max(dot(r, uP), 0.0);
        vec3 rS = normalize(vec3(r.x * 3.0, r.y, r.z));
        float spL = max(dot(rS, normalize(vec3(uP.x * 3.0, uP.y, uP.z))), 0.0);
        extra += ${j(w.d)} * (pow(sp, 90.0) * 0.28 + pow(spL, 40.0) * 0.2) * lastra;
        col += extra * lontano * (1.0 - buio * 0.6);
        // la grana: i puntini del sito, solo dove restano sotto il pixel
        float sottoPx = smoothstep(0.35, 0.8, max(fwidth(vW.x * 34.0), fwidth(vW.z * 34.0)));
        col += step(0.965, hash(floor(vW.xz * 34.0))) * ${(0,P.s)("pietra",1.108)} * smoothstep(18.0, 2.0, d) * sottoPx * (1.0 - buio * 0.7);
        gl_FragColor = vec4(nebbia(col, vD, vW.y), 1.0);
      }`}),[e]),t=(0,l.useRef)(null),i=(0,l.useRef)({i:-1,corsa:0,forza:0,prima:0});return(0,s.f)(({camera:e})=>{a.uniforms.uT.value=p.u.ridotto?0:(0,y.B)()/1e3,t.current&&t.current.position.set(Math.round(e.position.x),0,Math.round(e.position.z)),p.u.sopra<0?a.uniforms.uAcceso.value.set(0,0,-99):eo(p.u.sopra,Z.t,p.u.mobile,a.uniforms.uAcceso.value);let o=p.u.volo,r=!!o&&!o.torna,l=i.current,n=performance.now(),s=Math.min(.1,(n-l.prima)/1e3);l.prima=n,r?(l.i!==o.i&&(l.i=o.i,l.corsa=0),l.corsa=p.u.ridotto?1:Math.min(1,l.corsa+s/2.5),l.forza=p.u.ridotto?1:Math.min(1,l.forza+s/.8)):(l.forza=p.u.ridotto?0:Math.max(0,l.forza-s/4),0===l.forza&&(l.corsa=0,l.i=-1));let u=a.uniforms;u.uCrepa.value.set(1-Math.pow(1-l.corsa,3),l.forza*l.forza*(3-2*l.forza)),l.i>=0&&(eo(l.i,Z.t,p.u.mobile,_),u.uCrepaA.value.set(_.x,_.z),u.uCrepaDa.value.set(V[0].x,V[0].y))}),(0,o.jsx)("mesh",{ref:t,material:a,"rotation-x":-Math.PI/2,renderOrder:-5,frustumCulled:!1,children:(0,o.jsx)("planeGeometry",{args:[240,240,160,160]})})}function B({mobile:e}){let{geo:a,mat:t}=(0,l.useMemo)(()=>{let o=e?420:900,a=new Float32Array(3*o),t=new Float32Array(o);for(let e=0;e<o;e++){let o=o=>{let a=43758.5453*Math.sin(12.9898*e+78.233*o);return a-Math.floor(a)};a[3*e]=18*o(1),a[3*e+1]=.7*Math.pow(o(2),2.2),a[3*e+2]=28*o(3),t[e]=o(4)}let i=new v.ld;return i.setAttribute("position",new v.f5(a,3)),i.setAttribute("aSeme",new v.f5(t,1)),{geo:i,mat:new v.Zg({transparent:!0,depthWrite:!1,blending:v.tq,uniforms:{uT:{value:0},uK:{value:.0042},uDpr:{value:1}},vertexShader:`
        attribute float aSeme;
        uniform float uT, uK, uDpr;
        varying float vA;
        void main() {
          // corre col vento da destra a sinistra, a filo del terreno, e si
          // ripete attorno alla camera: non finisce mai
          float vx = 0.5 + aSeme * 1.3;
          float rx = mod(position.x - uT * vx - cameraPosition.x, 18.0) - 9.0;
          float rz = mod(position.z - cameraPosition.z + uT * 0.15, 28.0) - 24.0;
          vec3 w = vec3(cameraPosition.x + rx, position.y + sin(uT * 1.3 + aSeme * 30.0) * 0.03, cameraPosition.z + rz);
          float d = length(vec2(rx, rz));
          w.y -= uK * d * d;
          vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (1.0 + aSeme * 1.6) * uDpr * clamp(5.0 / -mv.z, 0.35, 2.4);
          vA = (0.12 + aSeme * 0.3) * smoothstep(9.0, 6.0, abs(rx)) * smoothstep(-24.0, -18.0, rz) * smoothstep(2.0, 0.0, rz + 1.0);
        }`,fragmentShader:`
        varying float vA;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float a = 1.0 - smoothstep(0.1, 0.5, length(c));
          gl_FragColor = vec4(${(0,P.s)("avorio",.972)} * a * vA, 1.0);
        }`})}},[e]),i=(0,u.f)(e=>e.gl);return(0,s.f)(({clock:e})=>{t.uniforms.uT.value=p.u.ridotto?0:e.elapsedTime,t.uniforms.uDpr.value=i.getPixelRatio()}),(0,o.jsx)("points",{geometry:a,material:t,frustumCulled:!1,renderOrder:20})}let U=(e,o)=>{let a=43758.5453*Math.sin(12.9898*e+78.233*o);return a-Math.floor(a)},Z={t:0,c:0,avvio:0},Q={p:1,g:new v.cE,avanti:new v.cE,q:new v.as,inclina:new v.as,e:new v.FS},X=new v.cE,J=new v.as,Y=new v.as,ee=new v.cE(0,1,0);function eo(e,o,a,t){let i=p.u.n<=12?Math.max(8,p.u.n):8,r=Math.floor(e/i),l=Math.min(i,p.u.n-r*i),n=e%i,s=.055*o*(r%2?-1:1)+n/l*Math.PI*2+.45*r+.5,u=(a?1.75:3.1)*(l>8?1.12:1)+r*(a?.9:1.2);return t.set(Math.cos(s)*u,(a?1.5:1.45)+(n%2?a?.55:.7:a?-.2:-.25)+.55*r+.12*Math.sin(.45*o+1.7*e),-.6+Math.sin(s)*u*.55),t}function ea({i:e,src:t}){let i=(0,S.L)(t),r=(0,u.f)(e=>e.invalidate);(0,u.f)(e=>e.camera);let n=(0,l.useMemo)(()=>new v.kG(1.6,1,.035),[]),c=(0,l.useMemo)(()=>new v.Zg({uniforms:{uImg:{value:null},uHa:{value:0},uSopra:{value:0},uP:{value:$},uSole:{value:new v.cE(...w.U)},uT:{value:0},uLuce:{value:+!!p.u.mobile},uProf:{value:null},uHaP:{value:0},uTipo:{value:i},uParal:{value:p.u.mobile?.6:1},uVivo:{value:0},uTA:{value:0},uTilt:{value:new v.wq},uSpento:{value:0},uArr:{value:1}},vertexShader:`
      ${S.P}
      varying vec3 vL;
      varying vec3 vN;
      varying vec3 vW;
      varying vec3 vNW;
      void main() {
        vL = position; vN = normal;
        vec3 nv = normal;
        vec3 pv = vivoPos(position, nv);
        vec4 w = modelMatrix * vec4(pv, 1.0);
        vW = w.xyz;
        vNW = normalize(mat3(modelMatrix) * nv);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uImg;
      uniform float uHa, uSopra, uT, uLuce, uVivo, uTA, uSpento, uArr;
      uniform vec2 uTilt;
      uniform vec3 uP, uSole;
      ${S.I}
      varying vec3 vL;
      varying vec3 vN;
      varying vec3 vW;
      varying vec3 vNW;
      ${R}
      ${F}
      void main() {
        vec3 v = normalize(vW - cameraPosition);
        // l'ossidiana dei bordi e del retro, con la grana del sito
        vec3 col = ${(0,P.s)("pietra",.935)};
        vec2 gp = abs(vN.z) > 0.5 ? vL.xy : (abs(vN.x) > 0.5 ? vL.zy : vL.xz);
        col += step(0.97, hash(floor(gp * 160.0))) * ${(0,P.s)("pietra",1.323)};
        // gli spigoli prendono la luce del sole, da destra (mondo/sole.ts)
        float luce = pow(max(dot(vNW, uSole), 0.0), 3.0);
        // in mano (uLuce) gli spigoli prendono piu' sole: sul telefono era tutto troppo scuro
        col += ${j(w.D)} * luce * (0.35 + uLuce * 0.5);
        if (vN.z > 0.5) {
          vec2 uv = vL.xy / vec2(1.60, 1.00) + 0.5;
          ${S.N}
          ${S.F}
          im = pow(im, vec3(0.8 - uLuce * 0.06)) * (1.6 + uSopra * 0.4 + uLuce * 0.35);
          col = mix(col, im, uHa);
          ${S.a}
          // all'arrivo della camera una lama di luce passa sul vetro, una volta
          if (uArr < 1.0) {
            float sa = uv.x * 0.8 + uv.y * 0.5 - (uArr * 2.4 - 0.6);
            col += ${(0,P.s)("avorio")} * (exp(-sa * sa / 0.004) * 0.16 + exp(-sa * sa / 0.05) * 0.03) * sin(3.1416 * uArr);
          }
          // la luce di taglio sull'orlo, piu' forte dal lato del sole (destra)
          float orlo = 1.0 - smoothstep(0.0, 0.018, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
          col += ${j(w.D)} * orlo * (0.08 + 0.22 * uv.x) * (0.5 + uLuce);
          // il vetro sopra l'immagine: il pianeta ci scorre sopra quando la lastra gira
          vec3 r = reflect(v, vNW);
          float riflesso = pow(max(dot(r, uP), 0.0), 18.0);
          col += ${j(w.d)} * riflesso * 0.3;
          col += ${(0,P.s)("avorio",.745)} * pow(1.0 - abs(dot(v, vNW)), 4.0) * 0.12;
          // niente filo blu sul bordo (Lorenzo, 5 ottobre): la foto e' la foto
        }
        // le altre lastre si ritraggono nel buio mentre la camera vola a una
        // (fino in fondo: nella lettura dietro il testo non deve restarne l'ombra)
        col = mix(col, ${(0,P.s)("fondo")}, uSpento);
        float d = distance(vW.xz, cameraPosition.xz);
        gl_FragColor = vec4(nebbia(col, d, vW.y), 1.0);
      }`}),[i]),d=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=d.current;if(!e||i<0)return;let o=e.material.uniforms,a=new v.H5().load((0,S.C)(t),()=>{o.uHaP.value=1,r()});return o.uProf.value=a,()=>a.dispose()},[t,i,c,r]),(0,l.useEffect)(()=>{let e=d.current;if(!e)return;let o=e.material.uniforms,a=new v.H5().load(t,()=>{o.uHa.value=1,r()});return a.colorSpace=v.nj,a.anisotropy=8,o.uImg.value=a,()=>a.dispose()},[t,c,r]);let m=(0,l.useMemo)(()=>new v.cE,[]),f=(0,l.useRef)(0);return(0,s.f)(({clock:o,camera:t,size:i},r)=>{let l=d.current;if(!l)return;let n=Math.min(1/30,r);p.u.volo&&p.u.volo.i===e&&!p.u.volo.torna&&(0,a.k)(l,t,i.width,i.height);let s=l.material.uniforms;s.uVivo.value=S.s.i===e?S.s.v:0,s.uTA.value=o.elapsedTime,s.uTilt.value.set(S.s.tx,S.s.ty),s.uArr.value=S.s.i===e?S.s.arr:1;let u=p.u.volo&&p.u.volo.i!==e&&!p.u.volo.torna?1:0;p.u.ridotto?f.current=u:f.current=u?Math.min(1,f.current+1e3*n/A.p.chiudi):Math.max(0,f.current-1e3*n/A.p.chiudi),s.uSpento.value=(0,A.b)(f.current),l.visible=f.current<1;let c=Z.t;eo(e,c,p.u.mobile,m),l.position.copy(m),l.position.y-=.0042*((l.position.x-t.position.x)**2+(l.position.z-t.position.z)**2)*.3;let v=Math.atan2(t.position.x-l.position.x,t.position.z-l.position.z);l.rotation.set(.07*Math.sin(.4*c+e),v+.28*Math.sin(.3*c+2.1*e),.03*Math.sin(.25*c+e));let h=+(p.u.sopra===e||p.u.volo?.i===e),x=l.material.uniforms.uSopra;x.value+=(h-x.value)*(p.u.ridotto?1:Math.min(1,7*n));let g=(p.u.mobile?.8:.85)*(p.u.n>8?.88:1)*(1+.08*x.value);l.scale.setScalar(g);let z=Q.p;if(z<1){let o=Math.max(1,p.u.n),a=p.u.mobile?3:Math.min(4,o),t=Math.ceil(o/a),i=p.u.mobile?.33:.55,r=e%a,n=Math.floor(e/a);X.set((r-((n===t-1?o-n*a:a)-1)/2)*(1.6*i*1.14),1.2*i*((t-1)/2-n),0).applyQuaternion(Q.q).add(Q.g);let s=Math.min(.08,.28/Math.max(1,o-1)),u=(0,b.$)(z,.34+e*s,.34+e*s+.38),c=(0,b.E)(u);l.position.lerpVectors(X,l.position,c).addScaledVector(ee,.5*Math.sin(Math.PI*u)),J.setFromEuler(l.rotation),l.quaternion.copy(Q.q).slerp(J,c).multiply(Y.setFromAxisAngle(ee,2*Math.PI*(1-c))),l.scale.setScalar(i+(g-i)*c)}let w=V[2+e];if(w){let e=N(l.position.x,l.position.z,t.position.x,t.position.z),o=Math.max(0,l.position.y-.5*l.scale.x-e);w.set(l.position.x,l.position.z,l.visible?.512*l.scale.x*(1-.5*s.uSpento.value):0,o)}}),(0,o.jsx)("mesh",{ref:d,geometry:n,material:c,userData:{lastra:e},onClick:o=>{o.delta<8&&(o.stopPropagation(),(0,b.n)("journal")||p.u.tocca(e))},onPointerOver:o=>{o.stopPropagation(),p.u.sopra=e,p.u.suSopra(e),(0,E.f)(!0),(0,p.X)()},onPointerOut:()=>{p.u.sopra===e&&(p.u.sopra=-1,p.u.suSopra(-1)),(0,E.f)(!1),(0,p.X)()},children:1===i&&!p.u.ridotto&&(0,o.jsx)(S.K,{i:e,mobile:p.u.mobile})})}let et=new v.cE;function ei({mobile:e}){let a=e?15:23,t=(0,l.useMemo)(()=>Array.from({length:a},(o,a)=>({r:(e?2.3:4)+U(a,1)*(e?1.2:2),a:U(a,2)*Math.PI*2,w:(.03+.04*U(a,3))*(U(a,4)>.3?1:-1),y:.6>U(a,5)?.2+.6*U(a,9):2.5+1.2*U(a,9),giro:new v.cE(U(a,6)-.5,U(a,7)-.5,U(a,8)-.5).multiplyScalar(.9),px:24+30*U(a,10)})),[a,e]),i=(0,l.useRef)([]);return(0,s.f)(({camera:e,size:o})=>{let a=Z.c,r=performance.now()-Z.avvio;t.forEach((t,l)=>{let n=i.current[l];if(!n)return;n.userData.satinato||(n.userData.satinato=!0,n.traverse(e=>{let o=e.material;o&&"clearcoat"in o&&(o.clearcoatRoughness=.5,o.clearcoat=.6,o.roughness=.55,o.envMapIntensity=.7)}));let s=1-Math.pow(1-(p.u.ridotto?1:Math.min(1,Math.max(0,(r-45*l)/2200))),3),u=t.r*(1+(1-s)*3),c=t.a+a*t.w;n.position.set(Math.cos(c)*u,t.y+.06*Math.sin(.6*a+l),-.6+Math.sin(c)*u*.6),n.position.y-=.0042*((n.position.x-e.position.x)**2+(n.position.z-e.position.z)**2)*.3,et.copy(n.position).project(e);let v=1-2*(96+.6*t.px)/o.height;if(et.y>v&&et.z<1){let o=et.y-v,a=-et.copy(n.position).applyMatrix4(e.matrixWorldInverse).z,t=Math.tan((e.fov??50)*Math.PI/360)*a;n.position.y-=o*t}n.rotation.set(t.giro.x*a,t.giro.y*a+(1-s)*Math.PI*2,t.giro.z*a);let d=V[16+l];if(d){let o=N(n.position.x,n.position.z,e.position.x,e.position.z),a=(n.children[0]?.scale.x??1)*L.L;d.set(n.position.x,n.position.z,Math.max(.05,.62*a),Math.max(0,n.position.y-.5*a-o))}})}),(0,o.jsx)(o.Fragment,{children:t.map((e,a)=>(0,o.jsx)("group",{ref:e=>{i.current[a]=e},children:(0,o.jsx)(x.L,{px:e.px,rotazione:[0,0,0]})},a))})}function er({mobile:e}){let a=(0,l.useMemo)(()=>new v.Zg({transparent:!0,depthWrite:!1,uniforms:{uPeso:{value:1},uT:{value:0},uLuce:{value:1},uAlto:{value:.72}},vertexShader:`
      uniform float uAlto;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += vec2(position.x * 1.1 - 0.2, (position.y + 0.5) * 2.05 - 0.45) * uAlto;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:d.f}),[]),t=(0,l.useRef)(null);return(0,s.f)(({camera:e,size:o})=>{if(!t.current)return;let a=t.current.position;a.y=N(a.x,a.z,e.position.x,e.position.z),V[0].set(a.x,a.z,.17,0),V[1].set(a.x+.02,a.z+.12,.11,.35),t.current.material.uniforms.uT.value=p.u.ridotto?3:(0,y.B)()/1e3;let i=t.current.getWorldPosition(D).project(e),r=Math.abs(C.set(0,.72,0).applyQuaternion(e.quaternion).add(t.current.position).project(e).y-i.y)*o.height/2,l=(.5*i.x+.5)*o.width,n=(-(.5*i.y)+.5)*o.height;i.z<1?(0,m.C)(l-.25*r,n-1.05*r,.5*r,1.1*r):(0,m.k)()}),(0,l.useEffect)(()=>m.k,[]),(0,o.jsx)("mesh",{ref:t,material:a,position:[e?.15:.35,0,e?2.4:1.9],renderOrder:10,frustumCulled:!1,children:(0,o.jsx)("planeGeometry",{args:[1,1]})})}function el(){(0,i.G)();let{size:e,invalidate:o,scene:a}=(0,u.f)(),t=(0,M.o)(),n=(0,l.useRef)(0),c=(0,l.useRef)(new v.cE),d=(0,l.useRef)(null),m=(0,l.useRef)(-1),f=(0,l.useRef)(-1),h=(0,l.useRef)({x:0,y:0});return(0,l.useEffect)(()=>{Z.avvio=performance.now();let e=(0,r.I)(()=>{Z.avvio=performance.now(),o()}),a=()=>{Z.avvio=performance.now()};window.addEventListener("tela-compilata",a),p.u.sveglia=()=>{n.current||o()};let t=()=>{document.hidden||o()};document.addEventListener("visibilitychange",t);let i=(0,y.P)(()=>{n.current||o()}),l=(0,b.Q)(()=>o());return()=>{l(),i(),e(),window.removeEventListener("tela-compilata",a),p.u.sveglia=T,document.removeEventListener("visibilitychange",t),(0,M.m)(n.current)}},[o]),(0,s.f)(({camera:o},i)=>{let r=Math.min(1/30,Math.max(1/240,i)),l=e.width/Math.max(1,e.height),s=l<.8,u=s?54:40;o.fov!==u&&(o.fov=u,o.updateProjectionMatrix());let x=(0,y.B)(),g=f.current<0?r:Math.min(1/30,Math.max(0,x-f.current)/1e3);f.current=x,p.u.volo||p.u.ridotto||(Z.t+=g),p.u.ridotto||(Z.c+=g);let z=0,w=-1e9;for(let e=0;e<p.u.n;e++)eo(e,Z.t,p.u.mobile,O),O.z>w&&(w=O.z,z=e);z!==m.current&&(m.current=z,p.u.davanti=z,p.u.suDavanti(z));let M=p.u.ridotto?1:1-Math.exp(-(2.5*r));h.current.x+=(p.u.px-h.current.x)*M,h.current.y+=(p.u.py-h.current.y)*M;let P=s?I.set(.25*h.current.x,1.55+.1*h.current.y,9.4):I.set(.45*h.current.x,1.3+.18*h.current.y,7.4),A=W.set(0,s?1.45:1.25,-.5),E=!1;if(p.u.volo&&performance.now()>p.u.volo.t0){let t=p.u.volo,i=d.current&&d.current.i!==t.i?d.current:null;if(i&&(d.current=null),!d.current){let e=null;a.traverse(o=>{o.userData.lastra===t.i&&(e=o)});let r=e,l=new v.cE,n=new v.cE(0,0,1);r&&(r.getWorldPosition(l),n.applyQuaternion(r.getWorldQuaternion(new v.as))),d.current={i:t.i,da:o.position.clone(),daG:c.current.clone(),c:l,n,s:r?r.scale.x:1,L:r,dentro:!1,casa:i?i.casa??[i.da,i.daG]:void 0,laterale:!!i}}let r=d.current;r.L&&r.L.getWorldPosition(r.c),t.torna&&(r.casa=void 0,r.da.copy(P),r.daG.copy(A));let n=performance.now(),s=p.u.ridotto?1:Math.min(1,(n-t.t0)/p.D),m=s*s*(3-2*s)*.35+.65*(1-(1-s)**3);if(t.torna){let e=p.u.ridotto?1:Math.min(1,(n-t.torna)/p.k);m=Math.min(m,1-e*e*e*(e*(6*e-15)+10)),e>=1&&(p.u.volo=null,p.u.aperta=!1)}let f=!t.torna&&s>=1,h=l<.9,x=e.height<480,g=Math.max(r.s/(h?.34:x?.5:.6),1.6*r.s/(l*(h?.86:.4))),z=g/2/Math.tan(u*Math.PI/360),w=new v.cE().crossVectors(new v.cE(0,1,0),r.n).normalize(),y=r.c.clone().addScaledVector(w,-(.22*!h)*g*l);y.y-=(h?.25:x?-.08:.02)*g;let M=y.clone().addScaledVector(r.n,z),b=r.da.clone().lerp(M,.55).add(new v.cE(0,r.laterale?.22:.75,0));if(r.laterale&&b.addScaledVector(r.n,.9*z),f){let e=Math.min(1,(n-t.t0-p.D)/500);o.position.copy(M).addScaledVector(r.n,p.u.ridotto?0:-(.022*z)*Math.sin(Math.PI*e)*(1-e)),c.current.copy(y),o.fov=u,r.dentro||(r.dentro=!0,r.arrivo=n,p.u.dentro(t.i))}else{let e=1-m;o.position.set(0,0,0).addScaledVector(r.da,e*e).addScaledVector(b,2*e*m).addScaledVector(M,m*m),c.current.lerpVectors(r.daG,y,t.torna?m:Math.min(1,1.3*m)),o.fov=u+Math.sin(Math.PI*m)*(p.u.ridotto?0:r.laterale?6:10)}S.s.arr=r.arrivo&&!p.u.ridotto?Math.min(1,(n-r.arrivo)/900):1,o.updateProjectionMatrix(),E=f&&n-t.t0-p.D>520}else d.current=null,o.position.copy(P),c.current.copy(A);if(o.lookAt(c.current),Q.p=p.u.ridotto?1:(0,b.H)("journal"),Q.p<1){o.updateMatrixWorld();let e=(0,b.e)();Q.avanti.set(0,0,-1).applyQuaternion(o.quaternion),Q.g.copy(o.position).addScaledVector(Q.avanti,s?4.6:4.2),Q.inclina.setFromEuler(Q.e.set(.35*e.y,.5*e.x,0)),Q.q.copy(o.quaternion).multiply(Q.inclina)}let L=!!p.u.volo&&!p.u.volo.torna&&d.current?.dentro===!0;L&&(S.s.i=p.u.volo.i);let T=L&&!p.u.ridotto?1:0;S.s.v+=(T-S.s.v)*Math.min(1,r*(T?1.4:3)),S.s.v<.002&&!T&&(S.s.v=0,S.s.i=L?S.s.i:-1);let j=1-Math.exp(-(2.2*r));S.s.tx+=(p.u.px-S.s.tx)*j,S.s.ty+=(p.u.py-S.s.ty)*j;let $=E&&((0,y.E)()||Math.abs(T-S.s.v)>.002),q=performance.now(),C=p.u.volo&&!E||q-p.u.gesto<5e3||q-Z.avvio<4e3||(0,b.n)("journal");!p.u.ridotto&&!document.hidden&&(E?$:!!C||(0,y.E)())&&!n.current&&t(n,33*!C)}),null}let en=(0,l.memo)(function({immagini:e,mobile:a,pronta:i}){return(0,c.f)()?(0,o.jsxs)(n.f,{frameloop:"demand",dpr:(0,t.A)(a?2:1.5),camera:{position:[0,1.15,6.4],fov:40,near:.05,far:400},gl:{antialias:(0,t.D)(),alpha:!1,powerPreference:"high-performance"},style:{background:g.f},onCreated:()=>requestAnimationFrame(i),onPointerMissed:()=>{p.u.sopra=-1,p.u.suSopra(-1)},children:[(0,o.jsx)("color",{attach:"background",args:[g.f]}),(0,o.jsx)(el,{}),(0,o.jsx)(M.f,{}),(0,o.jsx)(k,{}),e.map((e,a)=>(0,o.jsx)(ea,{i:a,src:e},a)),(0,o.jsx)(ei,{mobile:a}),(0,o.jsx)(x.K,{forza:.75}),(0,o.jsx)(er,{mobile:a}),(0,o.jsx)(K,{mobile:a}),(0,o.jsx)(B,{mobile:a}),!p.u.ridotto&&(0,o.jsx)(S.k,{mobile:a})]}):null});e.s(["Cielo",0,k,"default",0,en])}]);