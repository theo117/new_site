(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39433,e=>{"use strict";let a,t,o,r,i,l,n,s,c,u,d,f,p,m,v,h,g,x,M,y,w,b,z,P,F,A,S,E,j,L,C,V,T,R,q,U;var D=e.i(43476),$=e.i(95682),I=e.i(92901),O=e.i(98076),B=e.i(99993),N=e.i(71645),_=e.i(75056),k=e.i(25234),G=e.i(28600),W=e.i(16352),Z=e.i(39581),X=e.i(90072);e.i(77417);var Y=e.i(41243),Q=e.i(72223),H=e.i(70634),K=e.i(27680),J=e.i(99121);let ee=(0,J.w)("caldoChiaro",.813),ea=[{raggio:2.2,aria:ee,tipo:0,anelli:0,lune:1,seme:1.7,quota:1.4},{raggio:3,aria:ee,tipo:1,anelli:.42,lune:2,seme:7.9,quota:-.9}];var et=e.i(42700),eo=e.i(19948),er=e.i(95399),ei=e.i(68194);let el=()=>{},en=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
`,es=`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uT;
      uniform float uLuce;
      uniform float uRot;
      uniform float uLibero;
      uniform float uSaluto;
      ${en}
      ${ei.f}
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
        // le gambe: jeans, leggermente aperte, il peso un po' a destra
        float g1 = capsula(p, vec2(-0.052 - 0.07 * uLibero, 0.06), vec2(-0.046, 0.46), 0.041 + p.y * 0.012);
        float g2 = capsula(p, vec2(0.058 + 0.05 * uLibero, 0.1 + 0.03 * uLibero), vec2(0.047, 0.46), 0.041 + p.y * 0.012);
        float d = min(g1, g2);
        // le scarpe
        d = min(d, ellisse(p - vec2(-0.054 - 0.07 * uLibero, 0.045), vec2(0.046, 0.024)));
        d = min(d, ellisse(p - vec2(0.06 + 0.05 * uLibero, 0.085 + 0.03 * uLibero), vec2(0.046, 0.024)));
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
          vec2 gomito = mix(vec2(0.168 * sg, 0.6), vec2(0.25 * sg, 0.68 + 0.02 * sg), uLibero);
          vec2 mano = mix(vec2(0.1 * sg, 0.515), vec2(0.31 * sg, 0.78 - 0.04 * sg), uLibero);
          // il saluto: la mano destra si alza e oscilla
          if (sg > 0.0) { gomito = mix(gomito, vec2(0.27, 0.86), uSaluto); mano = mix(mano, vec2(0.3 + 0.05 * sin(uT * 9.0), 1.06), uSaluto); }
          br = min(br, capsula(p, vec2(0.128 * sg, 0.755), gomito, 0.036));
          br = min(br, capsula(p, gomito, mano, 0.033));
        }
        d = smin(d, br, 0.018);
        // il cappuccio: un po' alzato e girato verso il pianeta, in alto a destra
        vec2 c = p - vec2(0.008, 0.892);
        float an = -0.16;
        c = mat2(cos(an), -sin(an), sin(an), cos(an)) * c;
        float cap = ellisse(c, vec2(0.074, 0.092));
        // e ricade sulle spalle: il collo non si vede
        cap = smin(cap, ellisse(p - vec2(0.0, 0.79), vec2(0.1, 0.05)), 0.03);
        d = smin(d, cap, 0.03);
        return d;
      }
      void main() {
        // il quadratino va da -0.75 a 0.35 in larghezza: a sinistra c'e' il
        // vento, dove va la polvere
        vec2 p0 = (vUv - 0.5) * 2.0;
        float cr = cos(uRot), sr = sin(uRot);
        vec2 p = mat2(cr, -sr, sr, cr) * p0 + vec2(0.0, 0.5);
        float fiato = 0.009 * sin(uT * 1.25);
        float d = sagoma(p, fiato);
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
        float aa = max(fwidth(d), 1e-4);
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
        float banda = smoothstep(-aa * 2.0, -aa * 0.3, d) * dentro;
        float filo = banda * pow(verso, 2.5) * uLuce * (0.25 + 0.75 * smoothstep(0.4, 0.75, p.y));
        // l'ossidiana: quasi nera, fredda, con la grana del sito; in basso
        // appena piu' piena
        // e il cielo freddo lo tocca dall'alto: un controluce sottile su
        // spalle e cappuccio, cosi' la sagoma si stacca dalla piana scura
        float cielo = banda * smoothstep(0.1, 0.9, nn.y) * smoothstep(0.45, 0.8, p.y);
        // la tinta e' quella dell'omino unico (lib/omino.ts)
        vec3 col = tintaOmino(filo, cielo, hash(floor(p * 220.0)), uLuce);
        // ── LA POLVERE CHE SE NE VA ──────────────────────────────────────────
        // Granelli che si staccano dalle spalle, dal cappuccio e dal fianco
        // sinistro, salgono piano e derivano nel vento verso sinistra
        // sfumando. Ogni tanto uno piu' grande: un frammento.
        float pol = 0.0;
        vec3 polC = vec3(0.0);
        // la scatola dei granelli del Viandante: fuori nessuno arriva mai
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
          polC += g * v * mix(${(0,J.s)("avorio",.603)}, ${(0,J.s)("caldoChiaro",1.04)}, acceso);
          pol += g * v * mix(0.8, 1.0, acceso);
        }
        vec3 cp = clamp(polC / max(pol, 1e-4), 0.0, 1.0);
        pol = clamp(pol, 0.0, 1.0) * (1.0 - dentro);
        vec3 fin = (col * dentro + cp * pol) / max(dentro + pol, 1e-4);
        float af = max(dentro, pol);
        // niente alone avorio dietro (leggeva come un casco): il canone e'
        // il Viandante dell'hero, nero sul nero col solo filo di luce
        gl_FragColor = vec4(fin, af * uPeso);
        if (gl_FragColor.a < 0.004) discard;
      }`;function ec({mano:e,centro:a}){let{camera:t,size:o}=(0,G.f)(),r=(0,N.useMemo)(()=>new X.Zg({transparent:!0,depthWrite:!1,uniforms:{uPeso:{value:1},uT:{value:0},uLuce:{value:.6},uAlto:{value:1},uRot:{value:0},uLibero:{value:1},uSaluto:{value:0}},vertexShader:`
      uniform float uAlto;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += position.xy * uAlto * 2.0;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:es}),[]),i=(0,N.useRef)(null),l=(0,N.useRef)({rot:0,luce:.6,saluto:0,salutoFino:-1e9,toccoVisto:0}),n=(0,N.useMemo)(()=>new X.cE,[]),s=(0,N.useMemo)(()=>new X.cE,[]),c=(0,N.useRef)(0);(0,N.useEffect)(()=>{c.current=performance.now()},[]);let u=()=>{let r=i.current;if(!r)return;let u=performance.now(),d=Math.min(.1,(u-c.current)/1e3);c.current=u;let f=(0,er.B)()/1e3,p="panoramica"===et.e.fase?0:"sopra"===et.e.fase?1:et.e.t;r.position.set(a.x+.06*Math.sin(.37*f),a.y+.08*Math.sin(.29*f+1),a.z);let m=e?2.4:1.9,v=r.material.uniforms;v.uAlto.value=m,v.uPeso.value=1-Math.min(1,2.5*p),v.uT.value=f,n.copy(r.position).project(t);let h=(.5*n.x+.5)*o.width,g=(-(.5*n.y)+.5)*o.height;s.set(0,1,0).applyQuaternion(t.quaternion).multiplyScalar(m).add(r.position).project(t);let x=Math.abs((-(.5*s.y)+.5)*o.height-g);p<.5&&et.e.entrata>=1?(0,eo.C)(h-.4*x,g-.6*x,.8*x,1.2*x):(0,eo.k)();let M=l.current;et.e.toccoT!==M.toccoVisto&&(M.toccoVisto=et.e.toccoT,110>Math.hypot(et.e.toccoX-h,et.e.toccoY-g)&&(M.salutoFino=f+2.2));let y=(et.e.ridotto?0:-Math.max(-.2,Math.min(.2,(et.e.davantiX-n.x)*.35)))+.08*Math.sin(.21*f);M.rot+=(y-M.rot)*(1-Math.pow(.15,d)),M.luce+=((f<M.salutoFino?1.6:1)-M.luce)*(1-Math.pow(.05,d)),M.saluto+=((f<M.salutoFino)-M.saluto)*(1-Math.pow(.02,d)),v.uRot.value=M.rot,v.uLuce.value=M.luce,v.uSaluto.value=M.saluto,f<M.salutoFino+1&&et.e.sveglia()};return(0,N.useLayoutEffect)(()=>{et.e.dopoCamera=u}),(0,N.useEffect)(()=>()=>{et.e.dopoCamera=el,(0,eo.k)()},[]),(0,D.jsx)("mesh",{ref:i,material:r,frustumCulled:!1,renderOrder:5,children:(0,D.jsx)("planeGeometry",{args:[1,1]})})}let eu=e=>{let a=43758.5453*Math.sin(127.1*e);return a-Math.floor(a)};function ed({ridotto:e}){let a=(0,N.useRef)(null),t=(0,N.useRef)(null),o=(0,N.useMemo)(()=>new X.Zg({transparent:!0,depthWrite:!1,blending:X.tq,uniforms:{uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uA; varying vec2 vUv;
      void main(){
        // la testa a destra (u 1), la scia che si spegne verso sinistra; sottile al centro
        float lungo = pow(vUv.x, 2.2);
        float largo = exp(-pow((vUv.y - 0.5) / 0.16, 2.0));
        gl_FragColor = vec4(${(0,J.s)("avorio",.95)} * lungo * largo * uA, 1.0);
      }`}),[]),r=(0,N.useMemo)(()=>{let e=new X.ld;e.setAttribute("position",new X.f5(new Float32Array(84),3));let a=new Float32Array(28);for(let e=0;e<28;e++)a[e]=1-e/28;return e.setAttribute("aVita",new X.f5(a,1)),e},[]),i=(0,N.useMemo)(()=>new X.Zg({transparent:!0,depthWrite:!1,blending:X.tq,vertexShader:`attribute float aVita; varying float vV;
      void main(){ vV = aVita; vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp((2.0 + 5.0 * aVita) * 60.0 / -mv.z, 1.0, 6.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vV; void main(){ vec2 c = gl_PointCoord - 0.5; float d = smoothstep(0.5, 0.0, length(c));
      gl_FragColor = vec4(${(0,J.s)("avorio",.9)} * d * vV * vV * 0.55, 1.0); }`}),[]),l=(0,N.useMemo)(()=>({a:new X.cE,b:new X.cE}),[]),n=(e,a)=>{let t=e/46*Math.PI*2;return a.set(34*Math.cos(t),7+6*Math.sin(.5*t),-28+14*Math.sin(t))};return((0,k.f)(({camera:o})=>{if(e)return;let i=(0,er.B)()/1e3,s=a.current;if(s){let e=Math.floor(i/6.5),a=(i-6.5*e)/.9,t=a>=0&&a<1&&eu(e)>.25;if(s.visible=t,t){let t=(eu(e+.3)-.5)*1.6,r=.18+.35*eu(e+.7),i=l.a.set(Math.sin(t),Math.sin(r),-Math.cos(t)).normalize();s.position.copy(o.position).addScaledVector(i,160),s.quaternion.copy(o.quaternion);let n=.5>eu(e+.9)?-1:1;s.rotateZ(n*(.35+.3*eu(e+1.3))+(n<0?Math.PI:0)),s.translateX(26*a),s.material.uniforms.uA.value=.9*Math.sin(Math.PI*a)}}let c=t.current;if(c){n(i,c.position),c.rotation.set(.21*i,.33*i,.12*i);let e=r.getAttribute("position");for(let a=0;a<28;a++)n(i-.09*a,l.b),e.setXYZ(a,l.b.x,l.b.y,l.b.z);e.needsUpdate=!0}}),e)?null:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("mesh",{ref:a,material:o,visible:!1,renderOrder:-850,frustumCulled:!1,children:(0,D.jsx)("planeGeometry",{args:[18,.35,1,1]})}),(0,D.jsx)("group",{ref:t,children:(0,D.jsx)(Y.L,{posizione:[0,0,0],px:14})}),(0,D.jsx)("points",{geometry:r,material:i,frustumCulled:!1,renderOrder:-840})]})}var ef=e.i(59200),ep=e.i(17907),em=e.i(18958),ev=e.i(96756),eh=e.i(72020),eg=e.i(22562);let ex=`
  varying float vV;
  varying float vU;
  varying float vDiFronte;
  void main() {
    vV = uv.y;
    vU = uv.x;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normal);
    vDiFronte = clamp(abs(dot(n, normalize(-mv.xyz))), 0.0, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`,eM=`
  varying float vV;
  varying float vU;
  varying float vDiFronte;
  uniform float uForza;
  uniform float uT;
  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vn(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h(vec2(i, 3.1)), h(vec2(i + 1.0, 3.1)), f); }
  void main() {
    // sul profilo il fascio va a zero, senza filo: nessun bordo della mesh si vede
    float corpo = pow(smoothstep(0.18, 1.0, vDiFronte), 2.4);
    float raggi = 0.7 + 0.3 * vn(vU * 26.0 + uT * 0.15) * vn(vU * 61.0 - uT * 0.09 + 7.0);
    // (v e' interpolato: sull'orlo puo' uscire di un soffio da 0..1, e pow di
    // un negativo e' NaN: i puntini scuri sul bordo del cono)
    float v = clamp(vV, 0.0, 1.0);
    float sale = smoothstep(0.0, 0.04, v) * pow(1.0 - v, 2.6);
    float sorgente = exp(-v * 30.0) * 0.9;
    float luce = (corpo * raggi * 1.7 * sale + sorgente * corpo) * uForza;
    vec3 col = mix(${(0,J.s)("caldo",1)}, ${(0,J.s)("caldoChiaro",1)}, clamp(sorgente + corpo * 0.3, 0.0, 1.0));
    gl_FragColor = vec4(col * min(luce, 0.9), 1.0);
  }
`;function ey(){return new X.Zg({vertexShader:ex,fragmentShader:eM,transparent:!0,depthWrite:!1,side:X.Vs,blending:X.tq,uniforms:{uForza:{value:0},uT:{value:0}}})}function ew(e,a,t){let o=new X.o1(t,a,e,48,1,!0);return o.translate(0,e/2,0),o}let eb=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,ez=`
  varying vec2 vUv;
  uniform float uApertura;
  uniform float uFronte;
  uniform float uTuffo;
  uniform float uSeme;
  uniform float uRami;
  uniform vec2 uO;
  uniform float uDir;
  uniform float uL;

  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  // la riga che trema (Fessura.tsx): tre ottave di rumore a gradini lisci
  float rotto(float y, float s) {
    float a = 0.0, w = 0.5;
    for (int i = 0; i < 3; i++) {
      float i0 = floor(y), f = fract(y);
      a += w * mix(h(vec2(i0, s)), h(vec2(i0 + 1.0, s)), f);
      y = y * 2.31 + 3.7; w *= 0.5;
    }
    return a - 0.44;
  }
  // le crepe sorelle: i bordi delle celle (F2 - F1), come nella piana
  float crepa(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    float d1 = 8.0, d2 = 8.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 b = vec2(float(x), float(y));
      vec2 r = b + vec2(h(i + b), h(i + b + 19.7)) - f;
      float d = dot(r, r);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
    }
    return sqrt(d2) - sqrt(d1);
  }

  void main() {
    // il quadro e' 2,4 raggi: d in raggi del pianeta
    vec2 d = (vUv - 0.5) * 2.4;
    float r = length(d);
    // la fessura sta SULLA pietra: si spegne prima del lembo
    float sulDisco = 1.0 - smoothstep(0.9, 0.99, r);
    if (sulDisco <= 0.0) discard;
    // verso il lembo la pietra si vede di taglio: la luce si accorcia
    float nz = sqrt(max(0.0, 1.0 - r * r));

    vec2 D = vec2(cos(uDir), sin(uDir));
    vec2 N = vec2(-D.y, D.x);
    vec2 rel = d - uO;
    float s = dot(rel, D);
    float sn = s / uL;
    // la riga trema come la fessura del volto: un passo largo e uno fine,
    // fermi ai due capi (la pietra li tiene)
    float capi = pow(max(0.0, sin(3.14159 * clamp(sn, 0.0, 1.0))), 0.5);
    float u = dot(rel, N) - (rotto(s * 6.0, uSeme) * 0.05 + rotto(s * 34.0, uSeme + 4.0) * 0.009) * capi;

    // dove e' arrivato il fronte: la prima volta la fessura corre
    float fino = uFronte;
    float sulTratto = step(0.0, sn) * (1.0 - smoothstep(fino - 0.012, fino, sn));
    // larga a meta', a punta ai due capi, e mai uguale a se stessa: una
    // fessura nella pietra, non un taglio di righello
    float fuso = pow(max(0.0, sin(3.14159 * clamp(sn, 0.0, 1.0))), 0.7);
    float vena = 0.5 + 0.9 * (rotto(s * 15.0, uSeme + 9.0) + 0.44);
    float w = mix(0.0026, 0.016, uApertura) * fuso * vena * (1.0 + uTuffo * 14.0);
    float aa = fwidth(u) * 1.1;
    float nucleo = (1.0 - smoothstep(w * 0.25, w + aa, abs(u))) * sulTratto;
    float cuore = (1.0 - smoothstep(0.0, w * 0.55 + aa * 0.5, abs(u))) * sulTratto;

    // il fronte che corre: li' il calore e' piu' chiaro (sulFronte di FRAG_PIANETA)
    float sulFronte = exp(-pow((sn - fino) / 0.035, 2.0)) * (1.0 - step(0.999, uFronte)) * step(0.0, sn);

    // l'alone: la luce che esce dalla fessura e scalda appena la pietra attorno
    vec2 piede = uO + D * clamp(s, 0.0, uL * fino);
    float dseg = length(d - piede);
    float alone = exp(-dseg / (0.008 + 0.03 * uApertura + uTuffo * 0.25)) * (0.08 + 0.2 * uApertura + uTuffo * 0.5);

    // i ramoscelli: solo vicino alla fessura e solo quando e' aperta
    float rami = 0.0;
    if (uRami > 0.5 && uApertura > 0.4) {
      float fascia = exp(-dseg * dseg / 0.0025) * smoothstep(0.4, 0.75, uApertura);
      if (fascia > 0.01) {
        float c = crepa(d * 7.0 + uSeme * 3.1);
        float cw = 0.03 * fascia;
        rami = (1.0 - smoothstep(cw * 0.2, cw + fwidth(c), c)) * fascia * 0.4 * sulTratto;
      }
    }

    float luce = max(nucleo * 0.9, rami) + alone + sulFronte * 0.35 * nucleo;
    luce *= mix(0.55, 1.0, nz) * sulDisco;
    // (30 ottobre) l'invito e' il fascio: la fessura resta un filo, piena solo nel tuffo
    luce *= mix(0.4, 1.0, uTuffo);
    vec3 col = mix(${(0,J.s)("caldo",1)}, ${(0,J.s)("caldoChiaro",1)}, clamp(0.7 * cuore + 0.4 * sulFronte + 0.3 * uTuffo, 0.0, 1.0));
    // MAI BIANCO: la luce ha un tetto e resta della sua tinta (il caldo chiaro
    // al massimo), invece di schiarirsi canale per canale fino al grigio
    gl_FragColor = vec4(col * min(luce, 0.9), 1.0);
  }
`,eP=`
  varying vec2 vUv;
  uniform float uForza;
  uniform float uT;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float punto = exp(-d * d * 260.0) * 1.3 + exp(-d * d * 30.0) * 0.28;
    float anelli = 0.0;
    for (int k = 0; k < 3; k++) {
      float ph = fract(uT / 3.6 + float(k) / 3.0);
      float r = 0.08 + ph * 0.86;
      float x = (d - r) / 0.022;
      anelli += exp(-x * x) * pow(1.0 - ph, 1.6) * 0.42;
    }
    float luce = (punto + anelli * smoothstep(1.0, 0.85, d)) * uForza;
    vec3 col = mix(${(0,J.s)("caldo",1)}, ${(0,J.s)("caldoChiaro",1)}, clamp(punto, 0.0, 1.0));
    gl_FragColor = vec4(col * min(luce, 0.9), 1.0);
  }
`,eF=new X.cE(0,1,0),eA=new X.cE(0,0,1),eS=new X.cE;function eE({k:e,raggio:a,rami:t}){let o=(0,N.useRef)(null),r=(0,N.useMemo)(()=>new X.Zg({vertexShader:eb,fragmentShader:ez,transparent:!0,depthWrite:!1,depthTest:!0,blending:X.tq,uniforms:{uApertura:{value:0},uFronte:{value:0},uTuffo:{value:0},uSeme:{value:3.7+5.1*e},uRami:{value:+!!t},uO:{value:new X.wq},uDir:{value:0},uL:{value:.5}}}),[e,t]);(0,N.useEffect)(()=>()=>r.dispose(),[r]);let i=(0,N.useRef)(null),l=(0,N.useMemo)(()=>{let e=ey();return e.depthTest=!1,e},[]),n=(0,N.useRef)(null),s=(0,N.useMemo)(()=>new X.Zg({vertexShader:eb,fragmentShader:eP,transparent:!0,depthWrite:!1,depthTest:!1,blending:X.tq,uniforms:{uForza:{value:0},uT:{value:0}}}),[]);(0,N.useEffect)(()=>()=>s.dispose(),[s]);let c=(0,N.useMemo)(()=>ew(.95*a,.012*a,.13*a),[a]),u=(0,N.useRef)(0);return(0,k.f)((t,r)=>{let l=o.current;if(!l)return;let s=i.current;if(s){let t=et.e.i===e&&"sopra"===et.e.fase&&"chiuso"!==eg.h.fase,[o,i]=(0,eg.F)(e,et.e.mano),l=Math.sqrt(Math.max(0,1-o*o-i*i));eS.set(o,i,l).normalize(),s.position.set(o*a,i*a,.02*a),s.quaternion.setFromUnitVectors(eF,eS);let c=n.current;c&&(c.position.copy(s.position),c.quaternion.setFromUnitVectors(eA,eS));let d=eg.h.apertura,f=et.e.ridotto?1:.86+.14*Math.sin((0,er.B)()/1e3*(2*Math.PI/3)),p=eg.h.t>0?1.2*Math.sin(Math.PI*Math.min(1,eg.h.t/.45))*(1-Math.min(1,eg.h.t/.6)):0,m=t?(.5+.9*Math.max(0,(d-.45)/.45))*f*Math.min(1,1.4*eg.h.fronte)*(1-Math.min(1,eg.h.t/.6))+p:0;u.current+=(m-u.current)*Math.min(1,8*r);let v=s.material.uniforms,h=1-X.rB.smoothstep(l,.55,.8);if(v.uForza.value=u.current*h,v.uT.value=(0,er.B)()/1e3,s.visible=u.current>.003,c){let e=c.material.uniforms;e.uForza.value=u.current,e.uT.value=et.e.ridotto?1.2:(0,er.B)()/1e3,c.visible=s.visible}}if(l.visible=!1,!l.visible)return;let c=l.material.uniforms,d=(0,eg.X)(e,et.e.mano);c.uO.value.set(d.o[0],d.o[1]),c.uDir.value=d.dir,c.uL.value=d.L;let f=et.e.ridotto||eg.h.t>0?1:1+.16*Math.sin((0,er.B)()/1e3*(2*Math.PI/3));c.uApertura.value=Math.min(1,eg.h.apertura*f),c.uFronte.value=eg.h.fronte;let p=Math.min(1,Math.max(0,(eg.h.t-.25)/.37));c.uTuffo.value=p*p}),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("mesh",{ref:o,material:r,position:[0,0,.012*a],renderOrder:3,frustumCulled:!1,visible:!1,children:(0,D.jsx)("planeGeometry",{args:[2.4*a,2.4*a,1,1]})}),(0,D.jsx)("mesh",{ref:i,geometry:c,material:l,renderOrder:4,frustumCulled:!1,visible:!1}),(0,D.jsx)("mesh",{ref:n,material:s,renderOrder:4,frustumCulled:!1,visible:!1,children:(0,D.jsx)("planeGeometry",{args:[.62*a,.62*a,1,1]})})]})}var ej=e.i(72439);let eL=!1,eC=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,eV=`
  varying vec2 vUv;
  uniform float uForza;
  void main() {
    vec2 d = (vUv - 0.5) * 2.0 * 1.2;
    float r = length(d);
    // il filo sta a cavallo del bordo, piu' stretto dentro che fuori
    float q = (r - 1.0) / (r < 1.0 ? 0.035 : 0.075);
    float filo = exp(-q * q);
    // tutto attorno ma piu' pieno verso il sole: il limbo che ha gia', non un anello
    vec2 n = r > 0.0 ? d / r : d;
    float lato = 0.3 + 0.7 * smoothstep(-0.5, 0.9, dot(n, normalize(vec2(${ej.U[0].toFixed(3)}, ${ej.U[1].toFixed(3)}))));
    gl_FragColor = vec4(${(0,J.s)("caldo",.934)} * filo * lato * uForza, 1.0);
  }
`;function eT({k:e,raggio:a}){let t=(0,N.useMemo)(()=>new X.Zg({transparent:!0,depthWrite:!1,blending:X.tq,uniforms:{uForza:{value:0}},vertexShader:eC,fragmentShader:eV}),[]),o=(0,N.useRef)(null),r=(0,N.useRef)(0);return(0,k.f)((a,i)=>{"panoramica"!==et.e.fase&&(eL=!0);let l=eL||et.e.entrata<1?0:1;r.current+=(l-r.current)*(1-Math.exp(-Math.min(i,.1)/1.2)),0===l&&r.current<.002&&(r.current=0);let n=Math.max(0,Math.sin((0,er.B)()/1e3*Math.PI/8+e*Math.PI));t.uniforms.uForza.value=r.current*n*n*.7,o.current&&(o.current.visible=r.current>0)}),(0,D.jsx)("mesh",{ref:o,material:t,position:[0,0,.015*a],renderOrder:2,frustumCulled:!1,visible:!1,children:(0,D.jsx)("planeGeometry",{args:[2.4*a,2.4*a]})})}var eR=e.i(55335),eq=e.i(52260),eU=e.i(68366),eD=e.i(15570);let e$=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,eI=`
  varying vec2 vUv;
  uniform float uLuce;
  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main() {
    // il centro della luce sta un poco sotto la meta': e' li' che i cubetti
    // dei motion graphic fanno le loro figure, e in controluce si leggono
    vec2 q = (vUv - vec2(0.5, 0.42)) * vec2(1.0, 1.25);
    float r = length(q);
    float l = exp(-r * r * 4.5) * 0.85 + 0.15 * (1.0 - smoothstep(0.2, 0.8, r));
    // la luce non e' liscia come un fondale: un poco di grana di pietra
    l *= 0.92 + 0.08 * h(floor(vUv * vec2(90.0, 120.0)));
    vec3 col = ${(0,J.s)("caldo",1)} * l * uLuce;
    gl_FragColor = vec4(min(col, vec3(0.85)), 1.0);
  }
`,eO=`
  varying vec2 vUv;
  uniform sampler2D uMappa;
  uniform float uFilo;
  void main() {
    float m = texture2D(uMappa, vUv).r;
    float su = texture2D(uMappa, vUv + vec2(0.0, 0.022)).r;
    float giu = texture2D(uMappa, vUv - vec2(0.0, 0.018)).r;
    float filo = m * (1.0 - su);
    float ombra = m * (1.0 - giu);
    // dentro il solco un poco di luce calda: il nome si legge anche di fronte
    vec3 col = ${(0,J.s)("caldo",1)} * (filo * uFilo + m * 0.45);
    float a = clamp(m * 0.78 + ombra * 0.2, 0.0, 1.0);
    gl_FragColor = vec4(col, a);
  }
`;var eB=e.i(10152);let eN=(e,a,t)=>{let o;return t<=a?+(e>=a):(o=(e-a)/(t-a))<0?0:o>1?1:o},e_=e=>e*e*e*(e*(6*e-15)+10),ek=(e,a,t)=>e_(eN(e,a,t)),eG=(e,a,t)=>Math.pow(eN(e,a,t),2.2),eW=(e,a,t)=>e+(a-e)*t;function eZ(e,a,t,o=0,r=0,i=0,l=0,n=1){e.x=a,e.y=t,e.z=o,e.rx=r,e.ry=i,e.rz=l,e.sz=n}function eX(e){let a=e>>>0;return()=>{let e=a=a+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}let eY=(e,a)=>a.flatMap(a=>e.map(e=>[e,a])),eQ=e=>[5.6,e];function eH(e){return(a,t,o)=>{let r=e[0].p[t],i=r[0],l=r[1],n=r[2]??0,s=r[3]??0,c=0;for(let o=1;o<e.length;o++){let r=e[o],u=r.p[t],d=r.ordine?r.ordine[t]:t,f=r.a+(r.s??0)*d,p=r.cade?eG(a,f,f+r.d):ek(a,f,f+r.d);if(p<=0)continue;let m=Math.hypot(u[0]-i,u[1]-l);m>.05&&p<1&&!r.cade&&(c=Math.max(c,Math.sin(Math.PI*p)*Math.min(1,m/2))),i=eW(i,u[0],p),l=eW(l,u[1],p),n=eW(n,u[2]??0,p),s=eW(s,u[3]??0,p)}eZ(o,i,l,Math.max(n,c),0,0,s)}}let eK=(a=eY([-4,-3,-2,-1,0,1,2,3,4],[10]),t=eY([-4,-3,-2],[6,7]),o=[...a,...t,...eY([0,1,2,3],[7]).concat(eY([0,1,2],[6])),[0,3.6]],{periodo:10,fermo:.5,posa:eH([{p:r=function(){let e=eX(11),a=eY([-4,-3,-2,-1,0,1,2,3,4],[0,1,2]);for(let t=a.length-1;t>0;t--){let o=Math.floor(e()*(t+1));[a[t],a[o]]=[a[o],a[t]]}return a.slice(0,23).map(([a,t])=>[a+(e()-.5)*.3,t,0,(e()-.5)*.5])}(),a:0,d:0},{p:o,a:.08,d:.16,s:.008},{p:r,a:.78,d:.12,s:.004}])}),eJ=(i=[[-3,0],[-2,0],[-1,0],[0,0],[1,0],[2,0],[3,0],[-3,1],[3,1],[-3,2],[3,2],[-3,3],[3,3]],l=eY([-1,0,1],[1,2,3]).concat([eQ(5)]),n=(e,a)=>[e[0]+a,e[1]],s=[...i,...l],c=[...i,...l.map(e=>[e[0],12.6])],u=s.map((e,a)=>a<13?0:a-13),{periodo:11,fermo:.6,posa:eH([{p:c.map((e,a)=>a<13?n(e,-9):e),a:0,d:0},{p:c,a:0,d:.08},{p:s,a:.1,d:.07,s:.03,cade:!0,ordine:u},{p:s.map(e=>n(e,9)),a:.86,d:.12}])}),e0=(d=[...eY([-4,-3,-2,-1,0,1,2,3,4],[3,4.2]),...eY([-2,-1,0,1,2],[5.4])],{periodo:7,fermo:.5,posa(e,a,t){let[o,r]=d[a],i=o-eW(-7,7,e),l=Math.exp(-i*i/3.2);eZ(t,o,r+1.6*l,.9*l,0,0,-.5*l*Math.sign(i))}}),e1=(f=[...eY([-4,-3,-2,-1,0,1,2,3,4],[0]),[4,1.1],[4,2.2],...[3,2,1,0,-1,-2,-3].map(e=>[e,3.3]),[-3,4.4],[-3,5.5],[-2,6.6],[-1,6.6],[4,8.8]],p=[-4,-3,-2,-1,0,1,2,3].map((e,a)=>[e,1.1*a]),m=f.map((e,a)=>a===f.length-1?e:a<8?p[a]:e[0]<0?[-5.6,e[1]]:eQ(e[1])),{periodo:10,fermo:.55,posa:eH([{p:f,a:0,d:0},{p:m,a:.3,d:.16,s:.006},{p:f,a:.8,d:.14,s:.004}])}),e2=(v=[10,8,6,4,2],h=e=>eY([-3,-2,-1,0],[e]),g=v.flatMap(e=>h(e)),x=[0,1,2,3,4].flatMap(e=>4===e?h(v[0]).map(([e,a])=>[e-.6,a,1]):h(v[e+1])),{periodo:9,fermo:.7,posa:eH([{p:[...g,...M=[[2.2,10],[2.2,8.9],[5.6,6]]],a:0,d:0},{p:[...x,...M],a:.35,d:.18,s:.02,ordine:[...[...Array(20)].map((e,a)=>a>=16?0:3),0,0,0]}])}),e5=(w=[...(y=e=>eY([e,e+1],[0,1,2]))(-4),...y(-1),...y(2)],b=[[-1.5,4.2],[-.5,4.2],[.5,4.2],[1.5,4.2],[0,3.1]],{periodo:10,fermo:.6,posa:eH([{p:z=[...w,[-1.5,9],[-.5,9],[.5,9],[1.5,9],[0,7.6]],a:0,d:0},{p:[...w,...b],a:.08,d:.14},{p:[...(P=Math.PI/2,w.map((e,a)=>a>=6&&a<12?[e[0],e[1]+1,1,P]:e)),...b],a:.3,d:.12,s:.02,ordine:[...Array(23)].map((e,a)=>a>=6&&a<12?a-6:0)},{p:z,a:.82,d:.12,s:.004}])}),e3=(A=[...(F=(e,a)=>[[e+.5,a],[e+1.5,a],[e+2.5,a],[e-.15,a+1,0,.22],[e-.45,a+2.05,0,.32],[e+3.15,a+1,0,-.22],[e+3.45,a+2.05,0,-.32],[e+1.5,a+.2,1]])(-4.4,5.6),...F(1.4,.6)],E=(S=(e,a)=>[[e+.6,a+1],[e+1.6,a+1],[e+2.4,a+1],[e+1,a+2],[e+2,a+2],[e+.6,a+3],[e+1.6,a+3]])(-4.4,5.6),j=S(1.4,.6),{periodo:9,fermo:.45,posa(e,a,t){if(a<16){let[e,o,r,i]=A[a];return eZ(t,e,o,r??0,0,0,i??0)}let o=a-16,r=6-o,i=.04+.055*r,l=.52+.055*o,n=ek(e,i,i+.1),s=ek(e,l,l+.1),c=E[o],u=j[r],d=n-s,f=(Math.sin(Math.PI*n)+Math.sin(Math.PI*s))*1.8;eZ(t,eW(c[0],u[0],d),eW(c[1],u[1],d)+f,.5+Math.sin(Math.PI*n)+Math.sin(Math.PI*s))}}),e4=(C=(L=[...eY([-4],[2,3,4,5,6,7,8,9]),...eY([-2,-1,0,1,2,3,4],[9]),...eY([-2,-1],[6.6]),...eY([1,2],[6.6]),[-2,2],[-1,2],[0,2],[1,2]]).map((e,a)=>a>=19?[e[0],e[1]+(a-19)*.9]:e),{periodo:10,fermo:.6,posa:eH([{p:V=function(){let e=eX(97),a=eY([-4,-3,-2,-1,0,1,2,3,4],[0,2,4,6,8,10]);for(let t=a.length-1;t>0;t--){let o=Math.floor(e()*(t+1));[a[t],a[o]]=[a[o],a[t]]}return a.slice(0,23).map(([a,t])=>[a+(e()-.5)*.6,t+(e()-.5)*.8,0,(e()-.5)*.9])}(),a:0,d:0},{p:L,a:.06,d:.16,s:.007},{p:C,a:.4,d:.1,s:.04,ordine:L.map((e,a)=>Math.max(0,a-19))},{p:V,a:.82,d:.13,s:.003}])}),e6=(()=>{let e=[...eY([-2,-1,0,1,2],[2]),...eY([-2,-1,0,1,2],[4.4]),...eY([-2,-1,0,1,2],[6.8])],a=e.map((e,a)=>8===a?[e[0]+.2,e[1]-.35,0,.5]:e),t=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],o=(e,a)=>t.map(([t,o])=>[e+1.05*t,a+1.05*o,1]),[r,i]=[e[8][0],e[8][1]],l=[...e.map(()=>0),...t.map(()=>0)];return{periodo:11,fermo:.5,posa:eH([{p:[...a,...o(-6.8,i)],a:0,d:0},{p:[...a,...o(-1,i)],a:.06,d:.16,ordine:l},{p:[...a,...o(r,i)],a:.26,d:.12,ordine:l},{p:[...e,...o(r,i)],a:.42,d:.1,ordine:l},{p:[...e,...o(6.8,i)],a:.62,d:.16,ordine:l},{p:[...a,...o(6.8,i)],a:.86,d:.1,ordine:l}])}})(),e8=[[eK,eJ,e0,e1,e2,(T=eY([-1,0,1],[9.4,10.4]).concat([[5.6,10]]),q=(R=[[-4,6],[-1,6],[2,6],[-4,3],[-1,3],[2,3]]).flatMap(([e,a])=>[[e,a],[e+1,a]]),{periodo:11,fermo:.4,posa(e,a,t){if(a<7){let[o,r]=T[a],i=.02+.004*a,l=eG(e,i,i+.05),n=ek(e,.88,.97);return eZ(t,o,eW(12.6,r,l)+4*n)}let o=Math.min(5.999,Math.max(0,(e-.14)/.12)),r=+(e>.12&&e<.86);if(a<19){let e=Math.floor((a-7)/2),[i,l]=q[a-7],n=e_(Math.min(1,1.4*(Math.max(0,1-1.6*Math.abs(o-e-.5))*r)));return eZ(t,i,l+.3*n,n,Math.PI/2*n)}let i=Math.floor(o),l=Math.min(5,i+1),n=ek(o-i,.8,1),[s,c]=R[i],[u,d]=R[l],f=a-19,p=eW(s,u,n)+f%2,m=eW(c,d,n)+(f<2?-.95:1.25);eZ(t,eW(-6.6,p,ek(e,.1,.16)*(1-ek(e,.84,.9))),m,1)}})],[e6,e5,e3,e4,(U=(e,a)=>.02+a*(.11+.012*e)+.03*e,{periodo:12,fermo:.7,posa(e,a,t){if(a>=21)return eZ(t,5.6,2);let o=a<6?Math.floor(a/2):Math.floor((a-6)/5),r=.6+3.4*o,i=9*ek(e,.9,.98),l=a=>{let t=U(o,a),r=t-.1,i=ek(e,r,t);return{e:i,x:eW(6.1,-4+a,i),portato:e>r&&e<t}};if(a>=6){let e=l((a-6)%5);return eZ(t,e.x+i,r,+!!e.portato)}let n=3.6;for(let a=0;a<5;a++){let t=U(o,a);if(e>t-.1&&e<=t){n=l(a).x;break}if(e>t&&e<t+.03){n=eW(-4+a,3.6,ek(e,t,t+.03));break}}eZ(t,n,r+1+a%2,1)}})]],e7=eR.N.nicchia,e9=e7.y0+.04+.0525+.004,ae=eR.N.P/2-e7.fondo+.003+.0525+.006,aa=(0,eU.h)(.105,.105,.105,.014,2),at={x:0,y:0,z:0,rx:0,ry:0,rz:0,sz:1},ao=new X.FS,ar=new X.as,ai=new X.cE,al=new X.cE,an=new X.nd;function as(e,a,t){for(let r=0;r<23;r++){var o;o=r,a.posa(t,o,at),at.x=Math.max(-5.6,Math.min(5.6,at.x)),at.y=Math.max(-1.3,Math.min(12.6,at.y)),at.z=Math.max(0,Math.min(2.05,at.z)),ai.set(.125*at.x,e9+.125*at.y,ae+.125*at.z),ar.setFromEuler(ao.set(at.rx,at.ry,at.rz)),al.set(1,1,at.sz),e.setMatrixAt(r,an.compose(ai,ar,al))}e.instanceMatrix.needsUpdate=!0}let ac={t:null,ferma(e){ac.t=e,et.e.sveglia()}},au=new X.SN(new X.Es(...(0,J.w)("caldo")),.5,7,1.2);au.position.copy(eg.w);let ad=new X.SN(new X.Es(...(0,J.w)("caldo")),0,6.5,1.1);ad.position.copy(eg.w);let af=240-Math.sqrt(57600-eR.N.RA*eR.N.RA),ap=`
  varying vec3 vMondo;
  varying vec2 vP;
  void main() {
    // sulla sfera del pianeta: le coordinate del suolo sono quelle del piano
    // che la tocca in cima (x, -z), come prima, cosi' vene e pozza non cambiano
    vP = vec2(position.x, -position.z);
    vec4 m = modelMatrix * vec4(position, 1.0);
    vMondo = m.xyz;
    gl_Position = projectionMatrix * viewMatrix * m;
  }
`,am=`
  varying vec3 vMondo;
  varying vec2 vP;
  uniform float uT;
  uniform vec2 uPozza;
  uniform vec2 uAtterra;
  uniform float uAtterraForza;
  uniform vec3 uCentro;
  uniform vec3 uSole;
  uniform float uP;
  uniform float uPasso;
  uniform float uRA;

  // LA STESSA MATERIA DEL PIANETA VISTO DA FUORI (30 ottobre, Lorenzo: \xabil
  // suolo deve essere la stessa superficie del pianeta, senza crepe\xbb): il
  // rumore delle macchie di mondo/Pianeta.tsx (due ottave, 0.6 e 0.4), la
  // sua grana d'avorio a un punto per pixel, la sua luce: il lato del sole
  // nel caldo chiaro, e un riempimento freddo d'avorio dall'altra parte.
  // Nessuna vena, nessuna crepa: la luce a terra e' solo quella dei monoliti
  // e del punto dove si atterra.
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }

  void main() {
    vec2 p = vP;
    float dist = distance(vMondo, cameraPosition);
    vec3 n = normalize(vMondo - uCentro);
    // le macchie: le stesse ottave del pianeta, alla scala del suolo
    vec2 dd = p * 0.045;
    float m = rumore(dd * 7.0 + 4.0) * 0.6 + rumore(dd * 17.0) * 0.4;
    float fine = 0.0;
    if (dist < 30.0) fine = ((rumore(dd * 43.0 + 1.7) - 0.5) * 0.5 + (rumore(dd * 109.0 + 5.3) - 0.5) * 0.35) * (1.0 - smoothstep(6.0, 30.0, dist));
    m = clamp(m + fine * 0.6, 0.0, 1.0);
    float granaL = step(0.9, hash(mod(floor(gl_FragCoord.xy), 251.0) + 0.37)) * 0.45 - 0.04;
    // la luce del sole del sito: bassa, radente sulla superficie
    float lam = max(0.0, dot(n, uSole));
    float ter = smoothstep(-0.1, 0.6, lam);
    // DA VICINO, UNA SUPERFICIE VERA (30 ottobre): un micro-rilievo di
    // pietra letto nella luce radente (la derivata del rumore lungo il sole,
    // come il rilievo del pianeta vicino al terminatore), polvere che schiara
    // a chiazze, variazioni di tono larghe. Tutto si spegne con la distanza
    vec2 sd = normalize(uSole.xz + 1e-4) * 0.06;
    float vicino = 1.0 - smoothstep(4.0, 26.0, dist);
    // (il rilievo costa: solo dove si vede, vicino)
    float rilievo = 0.0;
    if (vicino > 0.001) rilievo = (rumore(p * 3.1 + sd) - rumore(p * 3.1 - sd)) * 1.4 + (rumore(p * 9.7 + sd * 3.0) - rumore(p * 9.7 - sd * 3.0)) * 0.6;
    float polvere = smoothstep(0.55, 0.9, rumore(p * 0.6 + 7.3)) * 0.35;
    float tono = 0.82 + 0.36 * rumore(p * 0.09 + 2.1);
    float giorno = pow(ter, 1.5) * (0.45 + 0.55 * m + granaL) * tono + (rilievo * 0.22 + polvere) * vicino;
    vec3 cGiorno = mix(${(0,J.s)("caldoChiaro",.671)}, ${(0,J.s)("caldoChiaro",1)}, smoothstep(0.35, 0.95, lam));
    float notte = (0.6 + 0.4 * m) * 0.45 * 0.35;
    vec3 cNotte = ${(0,J.s)("avorio",.621)};
    vec3 col = cGiorno * giorno * 0.075 + cNotte * notte * 0.06;
    // LA LUCE DEI MONOLITI: davanti alla lastra la pietra prende il caldo
    // della nicchia, morbido, e da' profondita' (prima lo facevano le vene)
    float pozza = exp(-distance(p, uPozza) / 2.2);
    col += ${(0,J.s)("caldo",1)} * pozza * pozza * (0.05 + 0.05 * m) * (0.8 + 0.4 * max(rilievo, 0.0) * vicino);
    // L'OMBRA DI CONTATTO alla base di ogni lastra: morbida, larga quanto la
    // pietra, appena allungata verso chi guarda
    float ang = atan(p.x, p.y);
    // l'angolo vero (l'arco gira oltre il giro): attorno al passo di chi guarda
    float aP = uP * uPasso;
    float rel = mod(ang - aP + 3.14159265, 6.28318531) - 3.14159265;
    float as = floor((aP + rel) / uPasso + 0.5) * uPasso;
    vec2 base = vec2(sin(as), cos(as)) * uRA;
    vec2 dl = p - base;
    vec2 tg = vec2(cos(as), -sin(as));
    float lungo = dot(dl, tg), alto = dot(dl, normalize(base));
    float ombra = exp(-lungo * lungo / 0.55) * exp(-alto * alto / (alto < 0.0 ? 0.35 : 0.08));
    col *= 1.0 - 0.75 * ombra;
    // IL PUNTO DELL'ATTERRAGGIO: una luce, non una crepa. Piena mentre si
    // scende lungo il fascio, poi resta un alone basso
    float qui = exp(-distance(p, uAtterra) / 1.2);
    col += ${(0,J.s)("caldoChiaro",1)} * qui * qui * (0.04 + 0.5 * uAtterraForza);
    // l'orizzonte: il filo d'atmosfera del pianeta sul bordo, verso il sole
    float radente = 1.0 - clamp(dot(n, normalize(cameraPosition - vMondo)), 0.0, 1.0);
    col += ${(0,J.s)("caldo",1)} * pow(radente, 6.0) * 0.14;
    col = mix(col, ${(0,J.s)("fondo",1)}, smoothstep(30.0, 90.0, dist) * 0.7);
    gl_FragColor = vec4(min(col, vec3(0.85)), 1.0);
  }
`,av=[{p:[-52,22,-64],r:[.4,.8,.1]},{p:[66,30,-40],r:[.9,.2,.5]},{p:[-78,34,10],r:[.2,1.1,.7]},{p:[40,16,-82],r:[1.2,.4,.2]},{p:[80,38,30],r:[.6,.6,1]},{p:[-24,44,-90],r:[.3,1.4,.4]}];function ah({i:e,k:a,n:t,nome:o,anisotropia:r,registra:i,cubetti:l,registraCubetti:n}){let s,{x:c,z:u,a:d}=(0,eR._)(a,t),f=eR.N.H*(1+((37*a+11*e)%7-3)*.02),p=(0,N.useMemo)(()=>(function(e){let{L:a,P:t,nicchia:o}=eR.N,r=(a-o.w)/2,i=(e,a,t,o,r,i)=>{let l=(0,eU.h)(e,a,t,.028,2);return l.translate(o,r,i),l.deleteAttribute("uv"),l},l=i(a,o.y0+.04,t,0,(o.y0+.04)/2,0),n=i(a,e-o.y1+.04,t,0,o.y1-.04+(e-o.y1+.04)/2,0),s=o.y1-o.y0+.16,c=i(r+.02,s,t,-a/2+(r+.02)/2,(o.y0+o.y1)/2,0),u=i(r+.02,s,t,a/2-(r+.02)/2,(o.y0+o.y1)/2,0),d=t-o.fondo,f=i(o.w+.04,s,d,0,(o.y0+o.y1)/2,-t/2+d/2),p=(0,eq.M)([l,n,c,u,f],!1);return[l,n,c,u,f].forEach(e=>e.dispose()),p})(f),[f]),m=(0,N.useMemo)(()=>{let e,a,t;return e=new X.Ox({...eU.O,color:J.d,roughness:.42,clearcoat:.7,clearcoatRoughness:.3,envMapIntensity:1.5}),a=(0,eU.S)(.16),t={value:0},e.userData.sale=t,e.onBeforeCompile=e=>{a(e),e.uniforms.uSale=t,e.vertexShader=e.vertexShader.replace("#include <common>","#include <common>\nvarying vec3 vNormLastra;").replace("#include <beginnormal_vertex>","#include <beginnormal_vertex>\nvNormLastra = objectNormal;"),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\nvarying vec3 vNormLastra;\nuniform float uSale;").replace("diffuseColor.rgb += vec3(s1 * 0.85 + s2);","diffuseColor.rgb += vec3(s1 * 0.4 + s2 * 0.5);").replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += ${(0,J.s)("caldo",1)} * uSale * exp(-vSpecklePos.y * 3.2) * (0.85 + 0.3 * spHash(floor(vSpecklePos * 160.0))) * smoothstep(0.2, 0.9, vNormLastra.z);`)},e.customProgramCacheKey=()=>"pietra-lastra",e},[]),v=(0,N.useMemo)(()=>new X.Zg({vertexShader:e$,fragmentShader:eI,uniforms:{uLuce:{value:.05}}}),[]),h=(s=(0,N.useMemo)(()=>{let e=document.createElement("canvas");e.width=1024,e.height=256;let a=new X.Nk(e);return a.colorSpace=X.Ik,a.generateMipmaps=!0,a.minFilter=X.Q4,a},[]),(0,N.useEffect)(()=>{s.anisotropy=r,s.needsUpdate=!0},[s,r]),(0,N.useEffect)(()=>{let e=!0,a=()=>{e&&(function(e,a){let t=e.getContext("2d");if(!t)return;let o=e.width,r=e.height;t.clearRect(0,0,o,r);let i=a.toLocaleUpperCase();t.fillStyle=J.t.avorio,t.textAlign="center",t.textBaseline="middle";let l=.9*o,n=(e,a)=>(t.font=(0,eD.j)("titolo",e),t.letterSpacing=`${(.06*e).toFixed(1)}px`,t.measureText(a).width),s=112,c=n(112,i);if(c<=l)return t.fillText(i,o/2,r/2+.04*s);if((s=Math.floor(s*l/c))>=74||!i.includes(" ")){n(s,i),t.fillText(i,o/2,r/2+.04*s);return}let u=i.split(" "),d=1,f=1/0;for(let e=1;e<u.length;e++){let a=Math.abs(u.slice(0,e).join(" ").length-u.slice(e).join(" ").length);a<f&&(f=a,d=e)}let p=u.slice(0,d).join(" "),m=u.slice(d).join(" "),v=Math.max(n(s=96,p),n(s,m));v>l&&(s=Math.floor(s*l/v)),n(s,p),t.fillText(p,o/2,r/2-.52*s),t.fillText(m,o/2,r/2+.6*s)}(s.image,o),s.needsUpdate=!0)};return a(),document.fonts?.ready.then(a),()=>{e=!1}},[s,o]),(0,N.useEffect)(()=>()=>s.dispose(),[s]),s),g=(0,N.useMemo)(()=>new X.Zg({vertexShader:e$,fragmentShader:eO,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,uniforms:{uMappa:{value:h},uFilo:{value:.9}}}),[h]),x=eR.N.nicchia;return(0,D.jsxs)("group",{ref:t=>i(e,a,t,v,m),position:[c,-.06-af,u],rotation:[0,-d,0],children:[(0,D.jsx)("mesh",{geometry:p,material:m}),(0,D.jsx)("mesh",{position:[0,(x.y0+x.y1)/2,eR.N.P/2-x.fondo+.003],material:v,children:(0,D.jsx)("planeGeometry",{args:[x.w,x.y1-x.y0]})}),(0,D.jsx)("instancedMesh",{ref:t=>n(e,a,t),args:[aa,l,23],frustumCulled:!1}),(0,D.jsx)("mesh",{position:[0,.86,eR.N.P/2+.002],material:g,renderOrder:2,children:(0,D.jsx)("planeGeometry",{args:[1.3,.325]})})]})}function ag({lingua:e}){let a=(0,N.useRef)(null),t=(0,N.useRef)(null),o=(0,G.f)(e=>e.gl.capabilities.getMaxAnisotropy()),r=(0,N.useMemo)(()=>new X.Zg({vertexShader:ap,fragmentShader:am,uniforms:{uP:{value:0},uPasso:{value:(0,eR.C)()},uRA:{value:eR.N.RA},uT:{value:0},uPozza:{value:new X.wq},uAtterra:{value:new X.wq},uAtterraForza:{value:0},uSole:{value:new X.cE(ej.R[0],.42,-.9).normalize()},uCentro:{value:new X.cE(0,-240,0).add(eg.w)}}}),[]);(0,N.useEffect)(()=>()=>r.dispose(),[r]);let i=(0,N.useRef)([]),l=(0,N.useRef)([[],[]]),n=(0,N.useRef)([[],[]]),s=(0,N.useRef)([[],[]]),c=(0,N.useCallback)((e,a,t,o,r)=>{l.current[e][a]=t,n.current[e][a]=o,s.current[e][a]=r},[]),u=(0,eh.f)(),d=(0,N.useMemo)(()=>{let e,a;return e=new X.Ox({...eU.O}),a=(0,eU.S)(.22),e.onBeforeCompile=e=>{a(e),e.fragmentShader=e.fragmentShader.replace("diffuseColor.rgb += vec3(s1 * 0.85 + s2);","diffuseColor.rgb += vec3(s1 * 0.45 + s2 * 0.55);"),e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      {
        float fCal = pow(1.0 - clamp(abs(dot(normalize(vNormal), normalize(vViewPosition))), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += ${(0,J.s)("caldo",1)} * fCal * 0.32;
      }`)},e.customProgramCacheKey=()=>"cubetti-nicchia",e},[]);(0,N.useEffect)(()=>()=>d.dispose(),[d]);let f=(0,N.useRef)([[],[]]),p=(0,N.useRef)([[],[]]),m=(0,N.useCallback)((e,a,t)=>{f.current[e][a]=t,p.current[e][a]=-1;let o=e8[e]?.[a];t&&o&&as(t,o,o.fermo)},[]),v=(0,N.useRef)(null),h=(0,N.useMemo)(()=>ew(46,.5,7),[]),g=(0,N.useMemo)(()=>ey(),[]);(0,k.f)(()=>{let e=a.current;if(!e||!e.visible)return;let o=et.e.i,r=(0,eB.M)(o),c=eg.h.passo,d=et.e.ridotto,m=(0,er.B)()/1e3;i.current.forEach((e,a)=>{e&&(e.visible=a===o)}),l.current[o]?.forEach((e,a)=>{if(!e)return;let t=d?a:(0,eR.G)(a,c,r),i=(0,eR._)(t,r);e.position.x=i.x,e.position.z=i.z;let l=i.a,v=d?1:(0,eR.h)(c,t),h=v*v*(3-2*v),g=.01>Math.abs(l)?-1:Math.sign(l);e.rotation.y=-l+eR.f*g*(1-h);let x=e8[o]?.[a],M=f.current[o]?.[a],y=1;if(x&&M){let e=!d&&("low"!==u||1.5>Math.abs(c-t)),r=ac.t??(d?x.fermo:(m+1.7*a)/x.periodo%1),i=p.current[o][a];(e||null!==ac.t||d)&&r!==i&&(as(M,x,r),p.current[o][a]=r),y=x.luce?.(p.current[o][a]<0?x.fermo:p.current[o][a])??1}let w=n.current[o]?.[a];w&&(w.uniforms.uLuce.value=(.1+.72*h)*y*(d?1:.93+.07*Math.sin(.5*m+1.7*a)));let b=s.current[o]?.[a]?.userData.sale;b&&(b.value=.05+.3*h)});let h=v.current;if(h){let e=(0,eR.F)(c,r),a=eR.N.RA-(0,eR.U)(et.e.mano).d;h.position.set(Math.sin(e)*a,0,-Math.cos(e)*a);let t=Math.min(1,Math.max(0,(eg.h.t-.7)/.3)),o="entra"===eg.h.fase||"esce"===eg.h.fase?(1-t*t)*1.4:0,i=h.material.uniforms;i.uForza.value=o,i.uT.value=m,h.visible=o>.003}let g=t.current?.material?.uniforms;if(!g)return;g.uT.value=d?0:m;{let e=(0,eR.F)(c,r),a=eR.N.RA-(0,eR.U)(et.e.mano).d;g.uAtterra.value.set(Math.sin(e)*a,Math.cos(e)*a);let t=Math.min(1,Math.max(0,(eg.h.t-.7)/.3));g.uAtterraForza.value="entra"===eg.h.fase||"esce"===eg.h.fase?1-.85*t:.15}let x=(0,eR.F)(c,r);g.uP.value=c;let M=eR.N.RA-.7;g.uPozza.value.set(Math.sin(x)*M,Math.cos(x)*M),au.position.set(Math.sin(x)*(eR.N.RA-3),.05,-Math.cos(x)*(eR.N.RA-3)).add(eg.w),au.intensity=1.1;let y=Math.cos(x),w=Math.sin(x);ad.position.set(Math.sin(x)*(eR.N.RA-1.6)-1.2*y,2.3,-Math.cos(x)*(eR.N.RA-1.6)-1.2*w).add(eg.w),ad.intensity=1.7});let x=(0,N.useMemo)(()=>[(0,eB.l)(0,e),(0,eB.l)(1,e)],[e]);return(0,D.jsxs)("group",{ref:e=>{a.current=e,eg.h.dentro=e},position:eg.w,visible:!1,children:[(0,D.jsx)("mesh",{ref:t,position:[0,-240,0],material:r,renderOrder:-10,children:(0,D.jsx)("sphereGeometry",{args:[240,160,96]})}),x.map((e,a)=>(0,D.jsx)("group",{ref:e=>{i.current[a]=e},children:e.map((t,r)=>(0,D.jsx)(ah,{i:a,k:r,n:e.length,nome:t.titolo,anisotropia:o,registra:c,cubetti:d,registraCubetti:m},r))},a)),(0,D.jsx)("mesh",{ref:v,geometry:h,material:g,renderOrder:5,frustumCulled:!1,visible:!1}),av.map((e,a)=>(0,D.jsx)(Y.L,{posizione:e.p,rotazione:e.r,scale:3.2},a))]})}let ax=new X.cE,aM=new X.cE,ay=()=>{},aw=new X.cE(0,1,0);function ab(e){return e?.68:1}function az(e){return e?{c:new X.cE(0,0,-15),r:7.2,schiaccia:.55,cam:new X.cE(0,1.7,6.5),mira:new X.cE(0,1,-12)}:{c:new X.cE(0,0,-25),r:15,schiaccia:.5,cam:new X.cE(0,0,8),mira:new X.cE(1,-1.2,-25)}}function aP(e){return e?{c:new X.cE(0,.6,-13.5),r:3.1,D:25,h:1.2,guarda:1.8}:{c:new X.cE(0,-.4,-25),r:8.2,D:31,h:3.2,guarda:.9}}let aF=e=>Math.sin((0,et.S)()+e*Math.PI);function aA(e,a,t,o){let r=aP(t),i=Math.PI/2-e*Math.PI,l=et.e.ridotto?0:(0,er.B)()/1e3,n=ea[e].seme;return o.set(r.c.x-Math.sin(i)*r.r+.2*Math.cos(.11*l+n),r.c.y+(t?3.7+.3*ea[e].quota:.6*ea[e].quota)+.15*Math.sin(.13*l+n),r.c.z+Math.cos(i)*r.r)}function aS(e,a){let t=ea[e].raggio*ab(a);return{sopra:1.7*t,lato:1.25*t}}let aE=Array.from({length:23},(e,a)=>{let t=e=>{let t=43758.5453*Math.sin(91.7*a+47.3*e);return t-Math.floor(t)};return{a:t(1)*Math.PI*2,r:.35+.65*t(2),y:t(3)-.5,z:t(4),gx:6*t(5),gy:6*t(6),vx:.12+.28*t(7),vy:.08+.22*t(8),vo:.6+.9*t(9),fo:6.28*t(10)}}),aj=["macchie","bande","crepe","reticolo"],aL=[{x:1.55,y:.62,raggio:.14},{x:-1.5,y:-.7,raggio:.1},{x:1.75,y:-.95,raggio:.08}],aC={esposizione:3.4,rotazione:.045,atmosfera:1,riempimento:1,lune:.14},aV=new X.p$({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0}),aT={e:1,va:1,luce:0,c:new X.cE,dx:new X.cE,fila:new X.cE};function aR({mano:e}){let a=(0,N.useMemo)(()=>new X.Zg({transparent:!0,depthWrite:!1,blending:X.tq,uniforms:{uLuce:{value:0},uSale:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uLuce; uniform float uSale; varying vec2 vUv;
      void main(){
        // il centro sale dal basso, come un sole dietro l'orizzonte
        vec2 c = vUv - vec2(0.5, 0.18 + 0.32 * uSale);
        c.x *= 0.62;
        float d = length(c);
        float nucleo = exp(-d * d * 160.0), alone = exp(-d * d * 26.0);
        vec3 col = ${(0,J.s)("caldoChiaro",1)} * nucleo * 0.6 + ${(0,J.s)("caldo",1)} * alone * 0.2;
        // a zero sui bordi del piano: mai un rettangolo nello spazio
        vec2 b = min(vUv, 1.0 - vUv);
        col *= smoothstep(0.0, 0.18, b.x) * smoothstep(0.0, 0.18, b.y);
        gl_FragColor = vec4(col * uLuce, 1.0);
      }`}),[]),t=(0,N.useRef)(null);return(0,k.f)(({camera:a})=>{let o=t.current;if(!o||(o.visible=et.e.entrata<1,!o.visible))return;o.position.copy(az(e).c),o.position.z-=e?6:12,o.quaternion.copy(a.quaternion);let r=o.material.uniforms;r.uLuce.value=aT.luce,r.uSale.value=Math.min(1,et.e.entrata/.4)}),(0,D.jsx)("mesh",{ref:t,material:a,renderOrder:-1,frustumCulled:!1,children:(0,D.jsx)("planeGeometry",{args:e?[22,22]:[60,40]})})}function aq({mano:e,onTocca:a}){let t=(0,eh.f)(),o=(0,N.useRef)([]),r=(0,N.useRef)([]),i=(0,N.useRef)([]),l=(0,N.useMemo)(()=>new X.Gu(1,24,16),[]),n=(0,N.useMemo)(()=>({v:new X.cE,s:new X.cE}),[]),s=(0,N.useRef)(1),c=(0,N.useMemo)(()=>({c:new X.cE,s:new X.cE,blu:new X.Es(Y.i)}),[]);return(0,k.f)(({camera:a,size:t})=>{let l,u=(0,er.B)()/1e3;if(l=et.e.entrata,aT.e=(0,ep.V)(l),aT.va=(0,ep.V)(Math.min(1,Math.max(0,(l-.3)/.7))),aT.luce=Math.min(1,l/.35)*(1-(0,ep.V)(Math.min(1,Math.max(0,(l-.45)/.55)))),l>=1||(aT.c.copy(az(e).c),aT.dx.setFromMatrixColumn(a.matrixWorld,0)),ea.forEach((t,i)=>{var l;let s=o.current[i];if(!s)return;aA(i,et.e.giro,e,s.position),l=s.position,et.e.entrata>=1||(aT.fila.copy(aT.c).addScaledVector(aT.dx,(i-1)*(e?3.4:7)),aT.fila.y+=.6*!!e,l.lerpVectors(aT.fila,l,aT.va));let c="panoramica"===et.e.fase?0:"sopra"===et.e.fase?1:et.e.t,u=et.e.da>=0&&"andata"===et.e.fase?i===et.e.da?et.e.t:1:c;if(u>0&&(i!==et.e.i||et.e.da>=0&&"andata"===et.e.fase)){let a=i===et.e.i?1-et.e.t:u;aA(et.e.i===i?et.e.da:et.e.i,et.e.giro,e,n.v);let t=n.v.sub(s.position).negate().normalize();s.position.addScaledVector(t,a*(e?6:10)).add(n.s.set(0,a*(e?9:16),-a*(e?14:30)))}r.current[i]?.quaternion.copy(eg.h.discoFermo&&i===et.e.i?eg.h.qDisco:a.quaternion)}),"panoramica"!==et.e.fase&&et.e.i>=0){let r=o.current[et.e.i];r&&(0,$.g)(r.getWorldPosition(aM),ea[et.e.i].raggio*ab(e),a,t.width,t.height)}let d=az(e);aE.forEach((a,t)=>{let o=i.current[t];if(!o)return;let r=o.children[0]?.material;r&&!r.userData.satinato&&(r.clearcoatRoughness=.5,r.clearcoat=.6,r.roughness=.55,r.envMapIntensity=.7,r.userData.satinato=!0);let l=et.e.ridotto?0:u,n=a.a+.028*l*a.vo,s=e?6.5:21,c=e?9:10,f=.55*Math.sin(.31*l*a.vo+a.fo),p=.4*Math.cos(.23*l*a.vo+a.fo);o.position.set(Math.cos(n)*s*a.r+p,a.y*c*2+f,d.c.z+10-20*a.z+3*Math.sin(n)),o.rotation.set(a.gx+l*a.vx,a.gy+l*a.vy,.4*Math.sin(.2*l+a.fo))});let f=i.current[22],p=f?.children[0],m=p?.material;if(f&&m){let r=e=>(e.project(a),[(e.x+1)*.5*t.width,(1-e.y)*.5*t.height,e.z]),[i,l,u]=r(f.getWorldPosition(c.c)),d=Math.max(150,.22*Math.min(t.width,t.height)),p=u>1||i>t.width-380&&l<190;ea.forEach((a,t)=>{let s=o.current[t];if(p||!s)return;let{sopra:u}=aS(t,e),[f,m,v]=r(s.getWorldPosition(c.s).add(n.s.set(0,u,0)));v<1&&Math.hypot(f-i,m-l)<d&&(p=!0)});let v=+!p;s.current+=(v-s.current)*.08,.002>Math.abs(v-s.current)?s.current=v:et.e.sveglia(),m.emissive.copy(c.blu).multiplyScalar(s.current),m.emissiveIntensity=Y.X}}),(0,D.jsxs)(D.Fragment,{children:[ea.map((i,n)=>{let s=i.raggio*ab(e);return(0,D.jsxs)("group",{ref:e=>{o.current[n]=e},children:[(0,D.jsx)("mesh",{geometry:l,material:aV,scale:s,onClick:e=>{e.stopPropagation(),a(n)},onPointerOver:()=>{(0,ev.f)(!0),et.e.puntato=n,et.e.sveglia()},onPointerOut:()=>{(0,ev.f)(!1),et.e.puntato===n&&(et.e.puntato=-1),et.e.sveglia()}}),(0,D.jsxs)("group",{ref:e=>{r.current[n]=e},children:[(0,D.jsx)(K.f,{posizione:[0,0,0],raggio:s,superficie:aj[i.tipo],renderOrder:1,anelli:0!==i.anelli?{angolo:i.anelli}:void 0,lune:aL.slice(0,i.lune),vivo:{...aC,ridotto:et.e.ridotto},fase:i.seme}),(0,D.jsx)(eE,{k:n,raggio:s,rami:"low"!==t}),!et.e.ridotto&&(0,D.jsx)(eT,{k:n,raggio:s})]})]},n)}),aE.map((e,a)=>(0,D.jsx)("group",{ref:e=>{i.current[a]=e},children:(0,D.jsx)(Y.L,{px:Math.round(34-16*e.z),rotazione:[0,0,0],frustumCulled:!1})},a))]})}function aU({mano:e}){let a=(0,N.useRef)(null),t=et.e.ridotto,o=(0,N.useMemo)(()=>{let a=e?260:520,t=new Float32Array(3*a),o=new Float32Array(a),r=0x135288d,i=()=>(r=1664525*r+0x3c6ef35f>>>0)/0x100000000;for(let e=0;e<a;e++)t.set([(i()-.5)*70,(i()-.5)*30,-(55*i())+8],3*e),o[e]=.15+.4*i();let l=new X.ld;return l.setAttribute("position",new X.f5(t,3)),l.setAttribute("aLum",new X.f5(o,1)),l},[e]),r=(0,G.f)(e=>e.viewport.dpr),i=(0,N.useMemo)(()=>new X.Zg({transparent:!0,depthWrite:!1,blending:X.tq,uniforms:{uDpr:{value:r},uT:{value:0}},vertexShader:`attribute float aLum; varying float vL; uniform float uDpr; uniform float uT;
      void main(){ vL = aLum;
        // la polvere deriva: ognuna col suo passo, e rientra dall'altra parte
        vec3 p = position + vec3(uT * (0.18 + aLum * 0.5), sin(uT * 0.21 + position.x) * 0.35, uT * 0.05);
        p.x = mod(p.x + 35.0, 70.0) - 35.0;
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = clamp(1.6 * uDpr * 6.0 / -mv.z, 1.0, 5.0);
        gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vL; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c));
      gl_FragColor = vec4(${(0,J.s)("avorio",1)} * a * (0.25 + vL * 1.2) * 0.5, 1.0); }`}),[r]),l=(0,N.useMemo)(()=>new X.Zg({side:X.tw,depthWrite:!1,depthTest:!1,transparent:!0,blending:X.tq,uniforms:{uT:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vD; uniform float uT;
      float h(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7))) * 43758.5453); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z); }
      float fbm(vec3 p){ float a = 0.0, w = 0.5; for (int i = 0; i < 4; i++) { a += w * n3(p); p *= 2.03; w *= 0.5; } return a; }
      void main(){
        // veli di polvere lontani: tenui, caldi verso il sole, freddi dall'altra parte
        vec3 d = vD; vec3 q = d * 2.2 + vec3(uT * 0.006, 0.0, uT * 0.004);
        float gw = fbm(q * 1.7 + 3.1);
        float f = fbm(q + gw * 0.9);
        float v = smoothstep(0.42, 0.85, f);
        // (5 novembre 2026) i veli erano macchie lisce: il rumore gia' pagato li fila, e
        // una corsia scura dove il campo passa per un valore, come la via lattea
        v *= 0.78 + 0.44 * smoothstep(0.34, 0.66, gw);
        v *= 1.0 - 0.42 * exp(-pow((f - 0.56 + (gw - 0.5) * 0.3) / 0.022, 2.0));
        float verso = smoothstep(-0.6, 0.9, dot(d, normalize(vec3(0.94, 0.26, 0.21))));
        vec3 c = mix(${(0,J.s)("avorio",.347)}, ${(0,J.s)("caldo",.692)}, verso);
        float fascia = exp(-pow(d.y + 0.1 * sin(d.x * 3.0), 2.0) * 5.0);
        // e un filo di dither: su un fondo cosi' scuro il gradiente fa le bande
        gl_FragColor = vec4(c * v * (0.10 + 0.16 * fascia) + (h(gl_FragCoord.xyx) - 0.5) / 255.0, 1.0);
      }`}),[]),n=(0,N.useRef)(null),s=(0,N.useRef)(null);return(0,k.f)(({camera:e})=>{if(a.current?.position.copy(e.position),"dentro"===eg.h.lato&&a.current?.position.setY(e.position.y+13),n.current&&n.current.position.copy("dentro"===eg.h.lato?eg.w:ax),!t){let e=(0,er.B)()/1e3;n.current&&(n.current.material.uniforms.uT.value=e),s.current&&(s.current.material.uniforms.uT.value=e)}}),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("group",{ref:a,children:[(0,D.jsx)("mesh",{ref:s,material:l,renderOrder:-900,frustumCulled:!1,children:(0,D.jsx)("sphereGeometry",{args:[400,48,24]})}),(0,D.jsx)(Q.P,{quota:-14,ridotto:t,orizzonte:!1}),(0,D.jsx)("group",{rotation:[0,Math.PI,0],children:(0,D.jsx)(Q.P,{quota:-14,seme:0x135288d,ridotto:t,orizzonte:!1})})]}),(0,D.jsx)("points",{ref:n,geometry:o,material:i,frustumCulled:!1})]})}let aD=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,a$=(e,a,t)=>Math.min(1,Math.max(0,(e-a)/(t-a))),aI=(e,a,t)=>{let o=a$(t,e,a);return o*o*(3-2*o)};function aO({mano:e}){(0,O.G)();let a=(0,G.f)(e=>e.gl),t=(0,G.f)(e=>e.scene),o=(0,G.f)(e=>e.invalidate),r=(0,G.f)(e=>e.advance),i=(0,G.f)(e=>e.size),l=(0,G.f)(e=>e.setDpr),n=(0,N.useRef)(0),s=(0,N.useMemo)(()=>({P:new X.cE,A:new X.cE,B:new X.cE,M:new X.cE,LA:new X.cE,LB:new X.cE,n:new X.cE,sx:new X.cE,cam:new X.cE,mira:new X.cE,DA:new X.cE,DL:new X.cE,S:new X.cE,SL:new X.cE,qc:new X.zm,ex:new X.cE,ey:new X.cE,ez:new X.cE,F:new X.cE,O:new X.cE,C:new X.cE,Lc:new X.cE,Mv:new X.cE,Dv:new X.cE,vc:new X.cE,vl:new X.cE,vp:new X.cE,vr:new X.cE}),[]),c=(0,N.useRef)(0),u=(0,N.useRef)(!1),d=(0,N.useRef)(0),f=(0,N.useRef)({x:0,y:0}),p=(0,N.useRef)(0);(0,N.useEffect)(()=>{p.current=performance.now()},[]);let m=(0,N.useRef)(0),v=(0,N.useRef)(0);(0,N.useEffect)(()=>{v.current=(0,er.B)()},[]);let h=(0,N.useRef)(0);return(0,N.useEffect)(()=>{let e=0,a=!0;et.e.sveglia=()=>{e||(e=(0,er.R)()>2500&&!et.e.ridotto?(0,er.k)(t=>{e=0,a&&r(t)}):requestAnimationFrame(()=>{e=0,o()}))},et.e.svegliaFino=Math.max(et.e.svegliaFino,performance.now()+5e3),et.e.sveglia();let t=(0,ep.Q)(()=>et.e.sveglia()),i=()=>et.e.sveglia();window.addEventListener("velo-aperto",i);let l=()=>{document.hidden||et.e.sveglia()};document.addEventListener("visibilitychange",l);let n=(0,er.P)(()=>et.e.sveglia()),s=e=>{if("panoramica"!==et.e.fase||!et.e.inVista||et.e.ridotto||(0,ep.n)("servizi"))return;let a=1===e.deltaMode?16:2===e.deltaMode?window.innerHeight:1,t=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*a;et.e.giroMira-=.0042*Math.max(-160,Math.min(160,t)),et.e.velocita=0,et.e.svegliaFino=Math.max(et.e.svegliaFino,performance.now()+1500),et.e.sveglia()};return window.addEventListener("wheel",s,{passive:!0}),()=>{window.removeEventListener("wheel",s),t(),window.removeEventListener("velo-aperto",i),n(),et.e.sveglia=ay,a=!1,(0,er.Q)(e),clearTimeout(h.current),h.current=0,document.removeEventListener("visibilitychange",l)}},[o,r]),(0,k.f)(o=>{var r,g;let x,M=o.camera,y=performance.now(),w=Math.min(.1,(y-p.current)/1e3);p.current=y;let b=et.e.ridotto,z=(0,ep.H)("servizi");et.e.entrata=z;let P=y<et.e.svegliaFino||z<1;e||"panoramica"!==et.e.fase||b||(et.e.giroMira+=et.e.velocita*w,et.e.velocita*=Math.pow(.08,w),.002>Math.abs(et.e.velocita)&&(et.e.velocita=0));let F=1-Math.pow(.925,60*w);et.e.giro+=(et.e.giroMira-et.e.giro)*(b?1:(0,em.w)(em.X,w)),m.current=et.e.giro;let A=Math.abs(et.e.giroMira-et.e.giro)>5e-4,S=(0,er.B)(),E=Math.min(.1,Math.max(0,(S-v.current)/1e3));v.current=S;let j=+("panoramica"===et.e.fase&&!b);et.e.passoGiro+=(j-et.e.passoGiro)*(1-Math.exp(-w/.6)),.001>Math.abs(j-et.e.passoGiro)&&(et.e.passoGiro=j),et.e.deriva+=.09*E*et.e.passoGiro,et.e.davanti=aF(0)>=aF(1)?0:1,f.current.x+=(et.e.guardaX-f.current.x)*F*.6,f.current.y+=(et.e.guardaY-f.current.y)*F*.6;let L=1-Math.min(1,3*eg.h.t),C=b?0:f.current.x*L,V=b?0:f.current.y*L;"andata"===et.e.fase&&(et.e.t=Math.min(1,et.e.t+w/(b?.01:2.4)),et.e.t>=1&&(et.e.fase="sopra",et.e.avvisa("sopra"))),et.e.daFresco&&(et.e.daFresco=!1,s.DA.copy(M.position),s.DL.copy(s.mira)),"andata"!==et.e.fase&&(et.e.da=-1),"ritorno"===et.e.fase&&(et.e.t=Math.max(0,et.e.t-w/(b?.01:1.9)),et.e.t<=0&&(et.e.fase="panoramica",et.e.avvisa("panoramica")));let T="panoramica"===et.e.fase?0:"sopra"===et.e.fase?1:et.e.t,R=az(e),q=aP(e),U=e?Math.max(46,2*Math.atan(.26/Math.min(1,M.aspect))*180/Math.PI):42;if(r=(0,et.S)()+C*(e?.12:.18),g=s.A,x=aP(e),g.set(x.c.x-Math.sin(r)*x.D,x.c.y+x.h,x.c.z+Math.cos(r)*x.D),s.A.setY(s.A.y-V*(e?.5:2.4)),!b){let e=(0,er.B)()/1e3;s.A.set(s.A.x+.35*Math.sin(.17*e),s.A.y+.22*Math.sin(.23*e+1.1),s.A.z+.3*Math.sin(.13*e+2.3))}if(s.LA.copy(q.c).addScaledVector(aw,q.guarda),z<1){let a=(0,ep.V)(z);s.S.set(R.c.x+(s.A.x-R.c.x)*.5,R.c.y+(e?.9:.3),R.c.z+(s.A.z-R.c.z)*.5),s.A.lerpVectors(s.S,s.A,a),s.SL.set(R.c.x,R.c.y+.6*!!e,R.c.z),s.LA.lerpVectors(s.SL,s.LA,a)}if(T>0){let a=et.e.i,t=ea[a].raggio*ab(e);aA(a,et.e.giro,e,s.P),s.n.set(s.A.x-s.P.x,0,s.A.z-s.P.z).normalize();let o=s.sx.crossVectors(aw,s.n).normalize();s.B.copy(s.P).addScaledVector(s.n,t*(e?5.4:4.6)).addScaledVector(aw,t*(e?.55:.5)),s.B.addScaledVector(o,-C*t*.08).addScaledVector(aw,V*t*.05);let{sopra:r}=aS(a,e);s.LB.copy(s.P).addScaledVector(aw,e?.42*r:.8*r),e||s.LB.addScaledVector(o,-(1.25*t));let i=aD(T),l=et.e.da>=0&&"andata"===et.e.fase;l&&(s.A.copy(s.DA),s.LA.copy(s.DL)),s.M.lerpVectors(s.A,s.B,.55).addScaledVector(aw,1.6*t);let n=1-i;s.cam.set(0,0,0).addScaledVector(s.A,n*n).addScaledVector(s.M,2*n*i).addScaledVector(s.B,i*i);let c=aD(Math.min(1,1.35*T));s.mira.lerpVectors(s.LA,s.LB,c),M.position.copy(s.cam),M.lookAt(s.mira),M.fov=(l?42:U+(42-U)*aD(T))+14*!b*Math.sin(Math.PI*T)}else M.position.copy(s.A),M.lookAt(s.LA),M.fov=U;let D=b?eg.Z:eg.r;"entra"===eg.h.fase?(eg.h.t=Math.min(1,eg.h.t+w/D),eg.h.t>=1&&(eg.h.fase="dentro",eg.h.avvisa("dentro"))):"esce"===eg.h.fase?(eg.h.t=Math.max(0,eg.h.t-w/D),eg.h.t<=0&&(eg.h.fase="spiraglio",eg.h.avvisa("spiraglio"))):eg.h.t=+("dentro"===eg.h.fase),eg.h.prova>=0&&("entra"===eg.h.fase||"esce"===eg.h.fase)&&(eg.h.t=eg.h.prova);let $=eg.h.t,O="sopra"===et.e.fase,N=O&&"chiuso"!==eg.h.fase?"spiraglio"===eg.h.fase?e?eg.j.mano:eg.h.sopra?eg.j.sopra:eg.j.riposo:eg.j.clic+(1-eg.j.clic)*a$($,.23,eg.B):0,_=b?1:"entra"===eg.h.fase||"esce"===eg.h.fase?1-Math.pow(1-.18,60*w):(0,em.w)(em.X,w);if(eg.h.apertura+=(N-eg.h.apertura)*_,5e-4>Math.abs(N-eg.h.apertura)&&(eg.h.apertura=N),"chiuso"!==eg.h.fase?c.current=b?1:Math.min(1,c.current+w/2.4):eg.h.apertura<.01&&(c.current=0),eg.h.fronte=1-Math.pow(1-c.current,2.2),"spiraglio"===eg.h.fase&&!u.current&&eg.h.dentro){u.current=!0;let e=window.requestIdleCallback??(e=>window.setTimeout(e,300));window.setTimeout(()=>e(()=>{let e=eg.h.dentro;if(!e||e.visible)return;e.visible=!0;let o=null;try{o=(0,B.f)(a,t,M)}finally{e.visible=!1}o?.then(()=>et.e.sveglia())},{timeout:1500}),700)}eR.y.basso=o.size.height<=480&&o.size.width>o.size.height;let k=(0,eB.M)(et.e.i),G=eg.h.passoMira;if("dentro"!==eg.h.fase||b)eg.h.passoV=eg.h.passo="dentro"===eg.h.fase?G:eg.h.passo;else{let e=(0,em.w)(.07,Math.min(w,1/30));eg.h.passoV+=(G-eg.h.passoV)*e,eg.h.passo+=(eg.h.passoV-eg.h.passo)*e,5e-4>Math.abs(G-eg.h.passo)&&5e-4>Math.abs(G-eg.h.passoV)&&(eg.h.passo=eg.h.passoV=G)}if("dentro"===eg.h.fase){let e=.15>Math.abs(eg.h.passo-G)?G:null;e!==eg.h.posata&&(eg.h.posata=e,eg.h.sullaTappa(e))}else null!==eg.h.posata&&(eg.h.posata=null,eg.h.sullaTappa(null));let W="dentro"===eg.h.fase&&Math.abs(G-eg.h.passo)>5e-4,X=0;if(O&&($>0||"dentro"===eg.h.fase)){let a=et.e.i,t=ea[a].raggio*ab(e);s.qc.position.copy(s.B),s.qc.lookAt(s.LB),eg.h.qDisco.copy(s.qc.quaternion),eg.h.discoFermo=!0,s.ex.set(1,0,0).applyQuaternion(eg.h.qDisco),s.ey.set(0,1,0).applyQuaternion(eg.h.qDisco),s.ez.set(0,0,1).applyQuaternion(eg.h.qDisco);let[o,r]=(0,eg.F)(a,e);if(s.F.copy(s.P).addScaledVector(s.ex,t*o).addScaledVector(s.ey,t*r).addScaledVector(s.ez,.012*t),$<eg.B&&"dentro"!==eg.h.fase)if(b)s.vc.copy(s.B),s.vl.copy(s.LB),M.fov=42;else{let e=(0,ep.V)(a$($,0,.47));s.Lc.lerpVectors(s.P,s.F,.4);let a=t/(.8*Math.tan(36*Math.PI/360)*Math.min(1,M.aspect));s.C.copy(s.Lc).addScaledVector(s.ez,a),s.Mv.lerpVectors(s.B,s.C,.5).addScaledVector(aw,.3*t);let o=1-e;s.vc.set(0,0,0).addScaledVector(s.B,o*o).addScaledVector(s.Mv,2*o*e).addScaledVector(s.C,e*e),s.vl.lerpVectors(s.LB,s.Lc,(0,ep.V)(a$($,0,.4)));let r=Math.pow(a$($,.2,.62),1.8);s.Dv.copy(s.F).addScaledVector(s.ez,.035*t),s.vc.lerp(s.Dv,r),s.vl.lerp(s.F,(0,ep.V)(a$($,.16,.5))),M.fov=42+-6*e+-8*r,X=.06*Math.sin(Math.PI*r)}else{let a=(0,ep.V)(a$($,eg.B,1));if(b)(0,eR.O)(e,s.vc,s.vl),M.fov=eR.T;else{(0,eR.I)(eg.h.passo,k,e,0,s.vc,s.vl);let t=(1-a)*(1-a);s.vc.setY(s.vc.y+11*t),s.vl.setY(s.vl.y-6*t);let o=(0,eR.U)(e).fov,r=o+8;M.fov=r+(o-r)*a}if(!b&&"dentro"===eg.h.fase){let e=(0,er.B)()/1e3;s.vc.set(s.vc.x+.03*Math.sin(.21*e),s.vc.y+.04*Math.sin(.27*e+.7),s.vc.z)}}if(M.position.copy(s.vc),M.lookAt(s.vl),X&&M.rotateZ(X),"dentro"===eg.h.fase||$>=eg.B){let a=document.querySelector(".sp-dentro");if(a){let t=(0,eR.F)(eg.h.passo,k);M.updateMatrixWorld(),s.vp.set(Math.sin(t)*eR.N.RA,-.75,-Math.cos(t)*eR.N.RA).add(eg.w).project(M);let o=Math.round((-(.5*s.vp.y)+.5)*i.height);a.dataset.base!==String(o)&&(a.dataset.base=String(o),a.style.setProperty("--base-lastra",`${o}px`));let r=a.querySelector(".sp-dentro-esci"),l=a.querySelector(".sp-dentro-testo");if(r&&l&&"dentro"===eg.h.fase){let t=r.getBoundingClientRect().top-14,i=e?16:24,n=l.firstElementChild,s=o+i+(n?n.scrollHeight:0)-t,c=e?1.3:1.6;s>0&&eR.y.alza<c?eR.y.alza=Math.min(c,eR.y.alza+Math.min(.04,.002*s)):s<-80&&eR.y.alza>0&&(eR.y.alza=Math.max(0,eR.y.alza-.01));let u=eR.y.alza>=c&&s>0?"1":"";(a.dataset.stretto??"")!==u&&(a.dataset.stretto=u);let d=`${Math.max(72,Math.round(t-o-i))}px`;a.dataset.spazio!==d&&(a.dataset.spazio=d,a.style.setProperty("--spazio-testo",d))}}}}else eg.h.discoFermo=!1;let Y=O&&("dentro"===eg.h.fase||$>=eg.B);eg.h.lato=Y?"dentro":"spazio",eg.h.spazio&&(eg.h.spazio.visible=!Y),eg.h.dentro&&(eg.h.dentro.visible=Y),M.updateProjectionMatrix(),M.updateMatrixWorld();{let e=Math.hypot(i.width,i.height),a=0,t=i.width/2,o=i.height/2,r=0;if(O&&$>0)if($<eg.B&&!Y){s.vp.copy(s.F).project(M),t=(.5*s.vp.x+.5)*i.width,o=(-(.5*s.vp.y)+.5)*i.height;let l=a$($,.45,eg.B);r=e*(.1+.9*l*l),a=b?aI(.1,eg.B,$):aI(.45,.66,$),b&&(r=1.2*e)}else{let t=a$($,eg.B,1);o=i.height*(.5+.22*t),r=b?1.2*e:e*(.5+.5*(1-t*t)),a=1-aI(b?eg.B:.7,.95,$)}let l=b?1:aI(.56,.67,$)*(1-aI(.73,.84,$));eg.h.luce=a;let n=eg.h.velo;if(n){n.style.opacity=a.toFixed(4);let e=a>5e-4||O&&$>0;n.style.visibility=e?"visible":"hidden",e&&(n.style.setProperty("--luce-forma",`radial-gradient(${r.toFixed(1)}px ${(+r).toFixed(1)}px at ${t.toFixed(1)}px ${o.toFixed(1)}px, var(--caldo-chiaro) 0%, var(--caldo) 45%, transparent 100%)`),n.style.setProperty("--luce-copre",l.toFixed(3)))}}if(eg.h.bottone||eg.h.invito){let a=O&&"spiraglio"===eg.h.fase,t=et.e.i,o=ea[t].raggio*ab(e);aA(t,et.e.giro,e,s.vp),s.vr.setFromMatrixColumn(M.matrixWorld,0).multiplyScalar(o).add(s.vp),s.vp.project(M),s.vr.project(M);let r=(.5*s.vp.x+.5)*i.width,l=(-(.5*s.vp.y)+.5)*i.height,n=.5*Math.abs(s.vr.x-s.vp.x)*i.width,c=eg.h.bottone;if(c){Math.abs(n-d.current)>.5&&(d.current=n,c.style.width=c.style.height=`${(2*n).toFixed(1)}px`),c.style.transform=`translate3d(${(r-n).toFixed(1)}px, ${(l-n).toFixed(1)}px, 0)`;let e=Math.min(2*n,i.height-96-(l-n)),t=e<2*n-.5?`${Math.round(e)}`:"";if(c.dataset.taglio!==t)if(c.dataset.taglio=t,t){let a=[];for(let t=0;t<32;t++){let o=t/32*Math.PI*2;a.push(`${(n+Math.cos(o)*n).toFixed(0)}px ${Math.min(e,n+Math.sin(o)*n).toFixed(0)}px`)}c.style.clipPath=`polygon(${a.join(",")})`}else c.style.clipPath="";c.style.visibility=a?"visible":"hidden"}let u=eg.h.invito;if(u&&(u.style.visibility=a?"visible":"hidden"),u&&a&&e&&eg.h.ancora)u.style.transform=`translate3d(${eg.h.ancora.x.toFixed(1)}px, ${eg.h.ancora.y.toFixed(1)}px, 0) translate(0, -100%)`;else if(u&&a){let[a,r]=(0,eg.F)(t,e);s.ex.setFromMatrixColumn(M.matrixWorld,0),s.ey.setFromMatrixColumn(M.matrixWorld,1),aA(t,et.e.giro,e,s.O).addScaledVector(s.ex,o*a).addScaledVector(s.ey,o*r),s.O.project(M);let l=(.5*s.O.x+.5)*i.width,n=(-(.5*s.O.y)+.5)*i.height;u.style.transform=`translate3d(${(l-62).toFixed(1)}px, ${n.toFixed(1)}px, 0) translate(-100%, -50%)`}}aA(et.e.davanti,et.e.giro,e,s.P).project(M),et.e.davantiX=s.P.x,et.e.dopoCamera();let Q=et.e.da>=0?0:(1-Math.min(1,4*T))*Math.min(1,Math.max(0,(z-.88)/.12)),H=T>0||et.e.da>=0||z<1?-1:e?et.e.davanti:et.e.puntato;H!==et.e.acceso&&(et.e.acceso=H,et.e.sullAcceso(H)),s.sx.setFromMatrixColumn(M.matrixWorld,0),et.e.etichette.forEach((a,t)=>{if(!a)return;let o=ea[t].raggio*ab(e);aA(t,et.e.giro,e,s.P),e?s.P.y-=1.3*o:s.P.addScaledVector(s.sx,1.18*o),s.P.project(M);let r=(.5*s.P.x+.5)*i.width,l=(-(.5*s.P.y)+.5)*i.height,n="0";if(!e){let o=(0,Z.f)(a).w;if(r+o>i.width-12){aA(t,et.e.giro,e,s.O).project(M);let a=(.5*s.O.x+.5)*i.width;r=Math.max(o+12,Math.min(i.width-12,2*a-r)),n="-100%"}}a.style.transform=e?`translate3d(${r.toFixed(1)}px, ${l.toFixed(1)}px, 0) translate(-50%, 0)`:`translate3d(${r.toFixed(1)}px, ${l.toFixed(1)}px, 0) translate(${n}, -50%)`,a.style.opacity=Q.toFixed(3),a.style.visibility=Q<.02||s.P.z>1?"hidden":"",a.style.pointerEvents=H===t&&Q>.5?"auto":"none"});let K=Math.tan(M.fov*Math.PI/360);if(et.e.segni.forEach((a,t)=>{if(!a)return;let{sopra:o,lato:r}=aS(t,e);aA(t,et.e.giro,e,s.P),s.P.y+=o;let l=s.P.distanceTo(M.position);s.P.project(M);let n=(.5*s.P.x+.5)*i.width,c=(-(.5*s.P.y)+.5)*i.height,u=r*i.height/(2*l*K),d=s.P.z>1;a.style.transform=`translate3d(${n.toFixed(1)}px, ${c.toFixed(1)}px, 0) translate(-50%, -50%) scale(${(u/96).toFixed(3)})`;let f=aF(t),p=(et.e.da>=0?t===et.e.i?Math.min(1,2.5*T):1-Math.min(1,2.5*T):t===et.e.i?1:1-Math.min(1,2.5*T))*(e?Math.max(0,Math.min(1,(f-.5)/.4)):1)*Math.min(1,Math.max(0,(z-.88)/.12));a.style.opacity=p.toFixed(3),a.style.visibility=d||p<.01?"hidden":""}),et.e.lampo){let e=T<=0||T>=1?0:Math.max(0,Math.sin(Math.PI*Math.min(1,Math.max(0,(T-.5)/.42))));et.e.lampo.style.opacity=(.6*!b*e).toFixed(3)}n.current||(n.current=Math.min(window.devicePixelRatio||1,(0,I.A)(e?2:1.75)[1])),Math.abs(a.getPixelRatio()-n.current)>.01&&l(n.current);let J=W||"entra"===eg.h.fase||"esce"===eg.h.fase||Math.abs(N-eg.h.apertura)>5e-4||"chiuso"!==eg.h.fase&&c.current<1||"andata"===et.e.fase||"ritorno"===et.e.fase||et.e.passoGiro>0&&et.e.passoGiro<1;((0,ep.n)("servizi")||J||A||0!==et.e.velocita||Math.abs(et.e.guardaX-f.current.x)>.002||Math.abs(et.e.guardaY-f.current.y)>.002||P&&!b)&&!document.hidden&&et.e.inVista?et.e.sveglia():!b&&!document.hidden&&et.e.inVista&&!h.current&&(0,er.E)()&&(h.current=window.setTimeout(()=>{h.current=0,et.e.sveglia()},30))}),null}function aB(){let e=(0,G.f)(e=>e.scene);return(0,N.useEffect)(()=>()=>{let a=new Set;e.traverse(e=>{for(let t of(e.geometry&&!a.has(e.geometry)&&(a.add(e.geometry),e.geometry.dispose()),Array.isArray(e.material)?e.material:e.material?[e.material]:[]))if(!a.has(t)){for(let e of(a.add(t),Object.values(t)))e instanceof X.Sk&&e.dispose();t.dispose()}})},[e]),null}function aN({mano:e,lingua:a}){let[t,o]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{let e=()=>(0,N.startTransition)(()=>o(!0));if("function"==typeof window.requestIdleCallback){let a=window.requestIdleCallback(e,{timeout:2500});return()=>window.cancelIdleCallback(a)}let a=window.setTimeout(e,1200);return()=>window.clearTimeout(a)},[]),t?(0,D.jsx)(ag,{mano:e,lingua:a}):null}e.s(["ScenaPianeti",0,function({mano:e,onTocca:a,lingua:t}){return(0,W.f)()?(0,D.jsxs)(_.f,{frameloop:"demand",dpr:(0,I.A)(e?2:1.75),camera:{position:[0,5.5,13],fov:42,near:.05,far:900},gl:{antialias:(0,I.D)(),alpha:!1,powerPreference:"high-performance"},style:{background:H.f,touchAction:"pan-y"},children:[(0,D.jsx)(aB,{}),(0,D.jsx)(ef.r,{}),(0,D.jsx)("color",{attach:"background",args:[H.f]}),(0,D.jsx)(aO,{mano:e}),(0,D.jsx)(aU,{mano:e}),(0,D.jsxs)("group",{ref:e=>{eg.h.spazio=e},children:[(0,D.jsx)(aq,{mano:e,onTocca:a}),(0,D.jsx)(ed,{ridotto:et.e.ridotto}),(0,D.jsx)(aR,{mano:e}),(0,D.jsx)(ec,{mano:e,centro:aP(e).c})]}),(0,D.jsx)(aN,{mano:e,lingua:t}),(0,D.jsx)("primitive",{object:au}),(0,D.jsx)("primitive",{object:ad}),(0,D.jsx)(Y.K,{forza:.75})]}):null},"posizione",0,aA,"simbolo",0,aS,"versoCamera",0,aF],39433)}]);