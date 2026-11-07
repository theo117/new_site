(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9050,a=>{var e=a.i(43476),t=a.i(71645),o=a.i(25234),i=a.i(28600),l=a.i(90072),n=a.i(99121);let r={i:-1,v:0,tx:0,ty:0,arr:1},s=`
  uniform float uVivo, uTA;
  uniform vec2 uTilt;
  vec3 vivoPos(vec3 p, inout vec3 n) {
    if (uVivo <= 0.0) return p;
    float ay = (uTilt.x * 0.05 + sin(uTA * 0.23) * 0.014) * uVivo;
    float ax = (-uTilt.y * 0.04 + sin(uTA * 0.31 + 1.0) * 0.01) * uVivo;
    float az = sin(uTA * 0.17 + 2.0) * 0.004 * uVivo;
    float cy = cos(ay), sy = sin(ay), cx = cos(ax), sx = sin(ax), cz = cos(az), sz = sin(az);
    mat3 R = mat3(cy, 0.0, -sy, 0.0, 1.0, 0.0, sy, 0.0, cy)
           * mat3(1.0, 0.0, 0.0, 0.0, cx, sx, 0.0, -sx, cx)
           * mat3(cz, sz, 0.0, -sz, cz, 0.0, 0.0, 0.0, 1.0);
    n = R * n;
    p = R * p;
    p.y += sin(uTA * 0.5) * 0.016 * uVivo;
    return p;
  }
`,c=`
  uniform sampler2D uProf;
  uniform float uHaP, uTipo, uParal;
  float lumi(vec3 c) { return c.r * 0.299 + c.g * 0.587 + c.b * 0.114; }
  vec2 ruota(vec2 d, float a) { float c = cos(a), s = sin(a); return vec2(c * d.x - s * d.y, s * d.x + c * d.y); }
  // una stella nella pupilla: nucleo, alone, quattro raggi lunghi e quattro corti
  float stella(vec2 uv, vec2 c, float t, float ph) {
    vec2 d = ruota((uv - c) * vec2(1.6, 1.0), sin(t * 0.07 + ph) * 0.35);
    float k = 0.55 + 0.45 * sin(t * 1.1 + ph) * sin(t * 0.47 + ph * 2.3);
    float r = length(d);
    float nucleo = exp(-r * r / 0.000012);
    float alone = exp(-r / 0.012);
    float lungo = 22.0 / (0.6 + k * 0.6);
    float raggi = exp(-abs(d.y) * 380.0) * exp(-abs(d.x) * lungo) + exp(-abs(d.x) * 380.0) * exp(-abs(d.y) * lungo);
    vec2 e = ruota(d, 0.785);
    raggi += (exp(-abs(e.y) * 420.0) * exp(-abs(e.x) * 60.0) + exp(-abs(e.x) * 420.0) * exp(-abs(e.y) * 60.0)) * 0.45;
    return (nucleo * 1.2 + alone * 0.35 + raggi * 0.7) * k;
  }
`,u=`
  vec2 uvI = uv;
  float zP = 0.45;
  vec2 vC = vec2(0.585, 0.64);
  float vMask = 0.0;
  if (uVivo > 0.001) {
    zP = mix(0.45, texture2D(uProf, uv).r, uHaP);
    vec2 deriva = vec2(sin(uTA * 0.11), cos(uTA * 0.083));
    vec2 off = (-uTilt * 0.011 + deriva * 0.004) * (zP - 0.45) * uParal;
    if (uTipo > 1.5) {
      // i cubi galleggiano: solo quel che sta avanti, sopra la piana
      off.y += sin(uTA * 0.7 + uv.x * 4.0) * 0.0028 * smoothstep(0.62, 0.8, zP) * step(0.3, uv.y);
    }
    uvI = clamp(0.5 + (uv - 0.5) * (1.0 - 0.035 * uVivo) + off * uVivo, 0.001, 0.999);
  }
`,p=`
  vec3 im;
  if (uVivo > 0.001 && uTipo > 1.5) {
    vec2 d = (uvI - vC) * vec2(1.6, 1.0);
    float r = length(d);
    vec2 tang = vec2(d.y, -d.x) / max(r, 0.001) / vec2(1.6, 1.0);
    float anello = smoothstep(0.05, 0.2, r) * (1.0 - smoothstep(0.45, 0.8, r));
    vMask = anello * (1.0 - smoothstep(0.5, 0.66, zP)) * uVivo;
    float ph = uTA * 0.09;
    float f1 = fract(ph), f2 = fract(ph + 0.5);
    vec3 a = texture2D(uImg, uvI + tang * (f1 - 0.5) * 0.016 * vMask).rgb;
    vec3 b = texture2D(uImg, uvI + tang * (f2 - 0.5) * 0.016 * vMask).rgb;
    im = mix(a, b, abs(f1 - 0.5) * 2.0);
  } else {
    im = texture2D(uImg, uvI).rgb;
  }
`,f=`
  if (uVivo > 0.001) {
    float li = lumi(im);
    // la lama di luce sul vetro, in diagonale, ogni tredici secondi
    float sd = uv.x * 0.8 + uv.y * 0.5;
    float pos = fract(uTA / 13.0) * 2.6 - 0.7;
    float lama = exp(-pow((sd - pos) / 0.045, 2.0)) * 0.05 + exp(-pow((sd - pos) / 0.22, 2.0)) * 0.008;
    col += ${(0,n.s)("avorio")} * lama * uVivo;
    if (uTipo < 0.5) {
      // VISIONE: le stelle nelle pupille, e un filo di luce che passa sul volto
      float s1 = stella(uvI, vec2(0.339, 0.476), uTA, 0.0);
      float s2 = stella(uvI, vec2(0.759, 0.448), uTA, 2.4);
      col += mix(${(0,n.s)("caldoChiaro")}, ${(0,n.s)("avorio")}, 0.5) * (s1 + s2) * 0.9 * uVivo;
      float fx = fract(uTA / 11.0) * 1.8 - 0.4;
      float filo = exp(-pow((uv.x - fx) / 0.035, 2.0)) * exp(-pow((uv.y - 0.47) / 0.16, 2.0));
      col += ${(0,n.s)("caldoChiaro")} * filo * li * 1.4 * uVivo;
    } else if (uTipo > 1.5) {
      // CUBI: un arco di luce che gira piano attorno al cubo grande
      vec2 d = (uvI - vC) * vec2(1.6, 1.0);
      float th = atan(d.y, d.x);
      float arco = pow(0.5 + 0.5 * cos(th + uTA * 0.3), 7.0) * vMask;
      col += ${(0,n.s)("caldoChiaro")} * arco * li * 0.9;
    }
  }
`;a.s(["F",0,p,"a",0,f,"I",0,c,"N",0,u,"s",0,r,"k",0,function({mobile:a}){let{geo:s,mat:c}=(0,t.useMemo)(()=>{let e=a?90:240,t=new Float32Array(4*e),o=(a,e)=>{let t=43758.5453*Math.sin(12.9898*a+78.233*e);return t-Math.floor(t)};for(let a=0;a<e;a++)for(let e=0;e<4;e++)t[4*a+e]=o(a+31,e+3);let i=new l.ld;return i.setAttribute("position",new l.f5(new Float32Array(3*e),3)),i.setAttribute("aS",new l.f5(t,4)),{geo:i,mat:new l.Zg({transparent:!0,depthWrite:!1,blending:l.tq,uniforms:{uTA:{value:0},uV:{value:0},uDpr:{value:1},uC:{value:new l.cE}},vertexShader:`
        attribute vec4 aS;
        uniform float uTA, uV, uDpr;
        uniform vec3 uC;
        varying float vA;
        varying float vCaldo;
        const float BX = 7.0, BY = 4.0, BZ = 6.0;
        vec3 B = vec3(BX, BY, BZ);
        void main() {
          vec3 deriva = vec3(-0.06 - aS.w * 0.05, 0.018 + aS.x * 0.02, 0.02) * uTA;
          deriva += vec3(sin(uTA * 0.21 + aS.y * 9.0), sin(uTA * 0.17 + aS.z * 7.0), 0.0) * 0.05;
          vec3 rel = mod(aS.xyz * B + deriva - uC, B) - B * 0.5;
          vec3 w = uC + rel;
          vec3 bordo = smoothstep(B * 0.5, B * 0.36, abs(rel));
          vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (0.9 + aS.w * 1.8) * uDpr * clamp(4.0 / -mv.z, 0.4, 2.2);
          vA = (0.1 + aS.y * 0.32) * bordo.x * bordo.y * bordo.z * uV * smoothstep(0.4, 1.2, -mv.z);
          vCaldo = step(0.8, aS.z);
        }`,fragmentShader:`
        varying float vA;
        varying float vCaldo;
        void main() {
          float a = 1.0 - smoothstep(0.1, 0.5, length(gl_PointCoord - 0.5));
          vec3 c = mix(${(0,n.s)("avorio",.95)}, ${(0,n.s)("caldoChiaro",.95)}, vCaldo);
          gl_FragColor = vec4(c * a * vA, 1.0);
        }`})}},[a]),u=(0,i.f)(a=>a.gl),p=(0,t.useMemo)(()=>new l.cE,[]);return(0,o.f)(({clock:a,camera:e})=>{let t=c.uniforms;t.uTA.value=a.elapsedTime,t.uV.value=r.v,t.uDpr.value=u.getPixelRatio(),t.uC.value.copy(e.position).addScaledVector(e.getWorldDirection(p),3.4)}),(0,e.jsx)("points",{geometry:s,material:c,frustumCulled:!1,renderOrder:25,raycast:()=>null})},"K",0,function({i:a,mobile:s,vivo:c,ordine:u=30}){let{geo:p,mat:f}=(0,t.useMemo)(()=>{let a=s?60:150,e=new Float32Array(4*a),t=(a,e)=>{let t=43758.5453*Math.sin(12.9898*a+78.233*e);return t-Math.floor(t)};for(let o=0;o<a;o++)for(let a=0;a<4;a++)e[4*o+a]=t(o+7,a+11);let o=new l.ld;return o.setAttribute("position",new l.f5(new Float32Array(3*a),3)),o.setAttribute("aS",new l.f5(e,4)),{geo:o,mat:new l.Zg({transparent:!0,depthWrite:!1,depthTest:!1,blending:l.tq,uniforms:{uTA:{value:0},uVivo:{value:0},uDpr:{value:1}},vertexShader:`
        attribute vec4 aS;
        uniform float uTA, uVivo, uDpr;
        varying float vA;
        varying float vCaldo;
        void main() {
          float vita = fract(uTA * (0.035 + aS.x * 0.045) + aS.y);
          // dal lato destro della testa (lastra 1,6 x 1: x -0,8..0,8, y -0,5..0,5)
          vec3 p = vec3(-0.06 + aS.z * 0.2, 0.06 + aS.w * 0.36, 0.03);
          p.x += vita * (0.5 + aS.x * 0.9);
          p.y += vita * (0.02 + (aS.w - 0.45) * 0.22) + sin(vita * 5.0 + aS.y * 20.0) * 0.018;
          p.z += vita * (0.04 + aS.z * 0.22);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (1.6 + aS.z * 2.6) * uDpr * (1.0 - vita * 0.35);
          vA = smoothstep(0.0, 0.1, vita) * (1.0 - smoothstep(0.55, 1.0, vita)) * (0.45 + 0.55 * aS.y) * uVivo;
          vCaldo = step(0.875, fract(aS.x * 7.31));
        }`,fragmentShader:`
        varying float vA;
        varying float vCaldo;
        void main() {
          float a = 1.0 - smoothstep(0.15, 0.5, length(gl_PointCoord - 0.5));
          vec3 c = mix(${(0,n.s)("caldoChiaro",.92)}, ${(0,n.s)("caldo",1)}, vCaldo);
          gl_FragColor = vec4(c * a * vA, 1.0);
        }`})}},[s]),v=(0,i.f)(a=>a.gl);return(0,o.f)(({clock:e})=>{f.uniforms.uTA.value=e.elapsedTime,f.uniforms.uVivo.value=c?c.v:r.i===a?r.v:0,f.uniforms.uDpr.value=v.getPixelRatio()}),(0,e.jsx)("points",{geometry:p,material:f,frustumCulled:!1,renderOrder:u,raycast:()=>null})},"P",0,s,"C",0,a=>a.replace(/-800\.webp$/,"-profondita.png"),"L",0,a=>{let e=a.match(/\/(visione|caos|cubi)-800\.webp$/);return e?["visione","caos","cubi"].indexOf(e[1]):-1}])},1053,a=>{let e={n:0,ridotto:!1,mobile:!1,sopra:-1,davanti:0,aperta:!1,volo:null,gesto:0,px:0,py:0,sveglia:()=>{},suSopra:a=>{},suDavanti:a=>{},tocca:a=>{},dentro:a=>{}};a.s(["k",0,680,"D",0,1e3,"u",0,e,"X",0,function(){e.gesto=performance.now(),e.sveglia()}])},71931,a=>{var e=a.i(99121),t=a.i(68194);let o=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
`,i=`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uT;
      uniform float uLuce;
      ${o}
      ${t.f}
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
          polC += g * v * mix(${(0,e.s)("avorio",.603)}, ${(0,e.s)("caldoChiaro",1.04)}, acceso);
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
          fin = mix(${(0,e.s)("pietra",.468)}, ${(0,e.s)("avorio",.821)}, clamp(bordoR * uLuce * 1.4, 0.0, 1.0));
          af = (dentroR * 0.4 + bordoR * uLuce * 0.5) * sfuma;
        }
        gl_FragColor = vec4(fin, af * uPeso);
        if (gl_FragColor.a < 0.004) discard;
      }`;a.s(["f",0,i])},70634,a=>{let e=a.i(99121).d;a.s(["f",0,e])},19948,a=>{let e={x:0,y:0,w:0,h:0},t=new Set;function o(a,o,i,l){let n=Math.abs(a-e.x)>.5||Math.abs(o-e.y)>.5||Math.abs(i-e.w)>.5||Math.abs(l-e.h)>.5;e.x=a,e.y=o,e.w=i,e.h=l,n&&t.forEach(a=>a())}window.__scatola=e,a.s(["B",0,function(a){return t.add(a),()=>{t.delete(a)}},"m",0,(a,t,o=0)=>e.w>0&&a>=e.x-o&&a<=e.x+e.w+o&&t>=e.y-o&&t<=e.y+e.h+o,"Y",0,e,"C",0,o,"k",0,()=>o(0,0,0,0)])},98076,a=>{var e=a.i(71645),t=a.i(25234),o=a.i(28600),i=a.i(11007),l=a.i(68366);function n(a=4e3,r){let s=(0,o.f)(a=>a.gl),c=(0,o.f)(a=>a.scene),u=(0,o.f)(a=>a.camera),p=(0,o.f)(a=>a.invalidate),f=(0,e.useRef)(!1),v=(0,e.useRef)(!1),d=(0,e.useRef)({lenti:0,prossimo:0}),m=(0,e.useRef)(r);(0,e.useEffect)(()=>{m.current=r}),(0,e.useEffect)(()=>{let e=(0,i.C)(a),t=!0,o=()=>{},n=()=>{t&&!f.current&&(f.current=!0,p())},r=window.setTimeout(n,a),v=requestAnimationFrame(()=>requestAnimationFrame(async()=>{performance.mark("tela:compila");let a=(0,l.M)(s,c,u);if(o=a.libera,await Promise.race([Promise.resolve(a.lavoro).catch(()=>void 0),new Promise(a=>setTimeout(a,2500))]),performance.mark("tela:compilata"),t){try{c.traverse(a=>{let e=a.material;for(let a of Array.isArray(e)?e:e?[e]:[])for(let e of Object.values(a))e&&e.isTexture&&e.image&&s.initTexture(e)})}catch{}performance.mark("tela:texture"),n(),e(),window.dispatchEvent(new Event("tela-compilata"))}}));return()=>{t=!1,cancelAnimationFrame(v),clearTimeout(r),e(),o()}},[s,c,u,a,p]),(0,t.f)(a=>{if(!f.current||a.gl.getContext().isContextLost())return;let e=performance.now();if(e<d.current.prossimo)return;try{a.gl.render(a.scene,a.camera)}catch{return}let t=performance.now()-e,o=d.current;if(o.lenti=t>100?o.lenti+1:0,o.lenti>=2&&(o.prossimo=e+5*t),!v.current){v.current=!0,performance.mark("tela:disegnata");let a=m.current;a&&requestAnimationFrame(()=>a())}},1)}a.s(["o",0,function({tetto:a,pronto:e}){return n(a,e),null},"G",0,n])},17907,a=>{var e=a.i(71645),t=a.i(72021),o=a.i(95399);let i={servizi:2800,lavori:2800,"chi-sono":2800,journal:2800},l=globalThis.__entrata??={nome:null,piena:!1,da:0,durata:0,tempo:-1,ultimo:0,salto:null,p:1,fatta:!0,px:0,py:0,mx:0,my:0,sveglia:new Set,gen:0,tela:!0},n=a=>`entrata-vista:${a}`;function r(){l.fatta||(l.fatta=!0,l.p=1,"u">typeof document&&delete document.documentElement.dataset.entrata,(0,o.D)(),window.dispatchEvent(new Event("entrata-fatta-pagina")))}a.s(["P",0,function(a){l.nome===a&&r()},"E",0,function(a){if(a<=0)return 0;if(a>=1)return 1;let e=3*(.3-.16)-.48,t=.52-(3*(.3-.16)-.48),o=a;for(let i=0;i<6;i++){let i=((t*o+e)*o+.48)*o-a,l=(3*t*o+2*e)*o+.48;if(1e-6>Math.abs(l))break;o-=i/l}return((+(o=Math.min(1,Math.max(0,o)))+-3)*o+3)*o},"n",0,a=>l.nome===a&&!l.fatta,"V",0,a=>a<=0?0:a>=1?1:a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2,"H",0,function(a){if(l.nome!==a||l.fatta)return 1;let e=performance.now();if(l.tempo<0){if((0,t.z)()||document.hidden||!l.tela)return l.da;l.tempo=0,l.ultimo=e}l.tempo+=Math.min(50,Math.max(0,e-l.ultimo)),l.ultimo=e;let i=l.da+(1-l.da)*Math.min(1,l.tempo/l.durata);return l.salto&&(i=Math.max(i,l.salto.p+(1-l.salto.p)*Math.min(1,(l.tempo-l.salto.t)/350))),l.px+=(l.mx-l.px)*.08,l.py+=(l.my-l.py)*.08,l.p=i,i>=1?r():(0,o.D)(),i},"e",0,()=>({x:l.fatta?0:l.px,y:l.fatta?0:l.py}),"Q",0,function(a){return l.sveglia.add(a),()=>{l.sveglia.delete(a)}},"$",0,(a,e,t)=>Math.min(1,Math.max(0,(a-e)/(t-e))),"h",0,function(a,o=!0,s=!0){(0,e.useLayoutEffect)(()=>{if(!o)return;let e=!1,c=!1;try{e=window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{}try{c="1"===sessionStorage.getItem(n(a)),sessionStorage.setItem(n(a),"1")}catch{c=!0}let u=/[?&]entrata\b/.test(location.search),p=(0,t.z)(),f=++l.gen,v=l.nome===a&&!l.fatta&&l.tempo<0;if(l.nome=a,l.salto=null,l.tempo=-1,l.px=l.py=l.mx=l.my=0,e)return l.fatta=!0,l.p=1,l.piena=!1,()=>{l.nome===a&&(l.nome=null)};l.piena=v?l.piena:u||p&&!c,l.da=.5*!l.piena,l.durata=l.piena?i[a]:900,l.p=l.da,l.fatta=!1,l.tela=!s;let d=()=>{l.tela=!0,l.sveglia.forEach(a=>a())};window.addEventListener("tela-compilata",d);let m=document.documentElement;m.dataset.entrata=a;let h=()=>{l.fatta||l.salto||l.tempo<120||(l.salto={p:l.p,t:l.tempo},l.sveglia.forEach(a=>a()))},g=a=>{l.mx=Math.max(-1,Math.min(1,a.clientX/window.innerWidth*2-1)),l.my=Math.max(-1,Math.min(1,a.clientY/window.innerHeight*2-1))},x={capture:!0,passive:!0};window.addEventListener("pointerdown",h,x),window.addEventListener("keydown",h,x),window.addEventListener("wheel",h,x),window.addEventListener("pointermove",g,x);let y=window.setTimeout(r,9e3),b=()=>window.clearTimeout(y);return window.addEventListener("entrata-fatta-pagina",b,{once:!0}),()=>{window.removeEventListener("pointerdown",h,x),window.removeEventListener("keydown",h,x),window.removeEventListener("wheel",h,x),window.removeEventListener("pointermove",g,x),window.removeEventListener("entrata-fatta-pagina",b),window.removeEventListener("tela-compilata",d),window.clearTimeout(y),l.gen===f&&l.nome===a&&(l.nome=null,l.fatta=!0,delete m.dataset.entrata)}},[a,o,s])}])},96756,a=>{a.s(["f",0,function(a){let e=document.body;a!==(null!=e.dataset.mano)&&(a?(e.dataset.mano="",e.style.cursor="pointer"):(delete e.dataset.mano,e.style.cursor=""))}])},68194,a=>{var e=a.i(99121);let t=`
  vec3 tintaOmino(float filo, float cielo, float grana, float luce) {
    vec3 col = ${(0,e.s)("pietra",1.442)};
    col += cielo * ${(0,e.s)("avorio",.212)} * (0.5 + 0.5 * luce);
    col += step(0.94, grana) * ${(0,e.s)("pietra",1.381)};
    return mix(col, ${(0,e.s)("caldoChiaro",.924)}, clamp(filo * 0.95, 0.0, 1.0));
  }
`;a.s(["f",0,t])},59200,a=>{var e=a.i(71645),t=a.i(28600),o=a.i(95399);a.s(["r",0,function(){let a=(0,t.f)(a=>a.gl),i=(0,t.f)(a=>a.invalidate);return(0,e.useLayoutEffect)(()=>{let e;return e=a.render,a.render=function(t,l){return(0,o.C)()&&null===a.getRenderTarget()?void i():e.call(this,t,l)},()=>{a.render=e}},[a,i]),null},"f",0,function(){let a=(0,t.f)(a=>a.clock);return(0,e.useLayoutEffect)(()=>(0,o.m)(a),[a]),null},"m",0,function(a){a<0?(0,o.Q)(a):a&&window.clearTimeout(a)},"o",0,function(){let a=(0,t.f)(a=>a.advance),i=(0,t.f)(a=>a.invalidate),l=(0,e.useRef)(!0);return(0,e.useEffect)(()=>(l.current=!0,()=>{l.current=!1}),[]),(0,e.useCallback)((e,t)=>{if((0,o.R)()>2500&&!(0,o.g)()){e.current=(0,o.k)(t=>{e.current=0,l.current&&a(t)});return}e.current=window.setTimeout(()=>{e.current=0,i()},t)},[a,i])}])},95682,a=>{var e=a.i(90072);let t=null,o="",i=null,l="",n=new e.cE,r=new e.VQ,s=0,c=0;function u(a){return c!==a&&(s=Math.max(48,3*(parseFloat(getComputedStyle(document.documentElement).fontSize)||16)),c=a),s}let p=null,f=-1e9;function v(a,e,i,l,n,r){if(!t)return;let s=u(l);if(i=Math.max(s,Math.min(n-s,i)),r)a=Math.max(a,8),e=Math.min(e,l-8);else{let t=function(){let a=performance.now();if(a-f<500)return p;f=a;let e=document.querySelector(".voce-audio"),t=e?.getBoundingClientRect();return p=e&&t&&t.width>0&&"hidden"!==getComputedStyle(e).visibility&&"none"!==getComputedStyle(e).pointerEvents?{x:t.left,y0:t.top,y1:t.bottom}:null}(),o=t&&t.x<l&&i+s/2>t.y0&&i-s/2<t.y1?t.x:l;a=Math.max(a,s+8),e=Math.min(e,o-s-8)}let c=`${Math.round(a)}|${Math.round(e)}|${Math.round(i)}|${+!!r}`;c!==o&&(o=c,t.style.setProperty("--fr-x0",`${Math.round(a)}px`),t.style.setProperty("--fr-x1",`${Math.round(e)}px`),t.style.setProperty("--fr-y",`${Math.round(i)}px`),t.dataset.fr=r?"sotto":"lati")}a.s(["X",0,function(a){t=a,o=""},"u",0,function(a){i=a,l=""},"k",0,function(a,e,o,s){if(!t||!a)return;let c=function(a,e,t,o){if(r.setFromObject(a),r.isEmpty())return null;let i=1/0,l=-1/0,s=1/0,c=-1/0;for(let a=0;a<8;a++){n.set(1&a?r.max.x:r.min.x,2&a?r.max.y:r.min.y,4&a?r.max.z:r.min.z).project(e);let u=(.5*n.x+.5)*t,p=(-(.5*n.y)+.5)*o;i=Math.min(i,u),l=Math.max(l,u),s=Math.min(s,p),c=Math.max(c,p)}return{x0:i,x1:l,y0:s,y1:c}}(a,e,o,s);if(c)if(o/s<.9){let a=u(o);v(c.x0,c.x1,c.y1+12+a/2,o,s,!0);let e=`${Math.round(c.y1+12+a+24)}px`;i&&e!==l&&(l=e,i.style.setProperty("--fr-sotto",e))}else v(c.x0,c.x1,(c.y0+c.y1)/2,o,s,!1)},"g",0,function(a,o,i,l,r){if(!t)return;u(l),n.copy(a).project(i);let c=(.5*n.x+.5)*l,p=(-(.5*n.y)+.5)*r,f=new e.cE().setFromMatrixColumn(i.matrixWorld,0).multiplyScalar(o);n.copy(a).add(f).project(i);let d=Math.abs((.5*n.x+.5)*l-c);if(l/r<.9)return void v(l-12-2*s-8,l-12,r-Math.max(28,parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sab"))||0)-22,l,r,!0);let m=Math.min((Math.max(0,p-d)+Math.min(r,p+d))/2,r-1.5*s),h=Math.sqrt(Math.max(0,d*d-(m-p)*(m-p)));v(c-h,c+h,m,l,r,!1)}])}])})();