(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9050,e=>{var a=e.i(43476),t=e.i(71645),o=e.i(25234),i=e.i(28600),r=e.i(90072),l=e.i(99121);let n={i:-1,v:0,tx:0,ty:0,arr:1},u=`
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
`,s=`
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
`,d=`
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
`,v=`
  if (uVivo > 0.001) {
    float li = lumi(im);
    // la lama di luce sul vetro, in diagonale, ogni tredici secondi
    float sd = uv.x * 0.8 + uv.y * 0.5;
    float pos = fract(uTA / 13.0) * 2.6 - 0.7;
    float lama = exp(-pow((sd - pos) / 0.045, 2.0)) * 0.05 + exp(-pow((sd - pos) / 0.22, 2.0)) * 0.008;
    col += ${(0,l.s)("avorio")} * lama * uVivo;
    if (uTipo < 0.5) {
      // VISIONE: le stelle nelle pupille, e un filo di luce che passa sul volto
      float s1 = stella(uvI, vec2(0.339, 0.476), uTA, 0.0);
      float s2 = stella(uvI, vec2(0.759, 0.448), uTA, 2.4);
      col += mix(${(0,l.s)("caldoChiaro")}, ${(0,l.s)("avorio")}, 0.5) * (s1 + s2) * 0.9 * uVivo;
      float fx = fract(uTA / 11.0) * 1.8 - 0.4;
      float filo = exp(-pow((uv.x - fx) / 0.035, 2.0)) * exp(-pow((uv.y - 0.47) / 0.16, 2.0));
      col += ${(0,l.s)("caldoChiaro")} * filo * li * 1.4 * uVivo;
    } else if (uTipo > 1.5) {
      // CUBI: un arco di luce che gira piano attorno al cubo grande
      vec2 d = (uvI - vC) * vec2(1.6, 1.0);
      float th = atan(d.y, d.x);
      float arco = pow(0.5 + 0.5 * cos(th + uTA * 0.3), 7.0) * vMask;
      col += ${(0,l.s)("caldoChiaro")} * arco * li * 0.9;
    }
  }
`;e.s(["F",0,d,"a",0,v,"I",0,c,"N",0,s,"s",0,n,"k",0,function({mobile:e}){let{geo:u,mat:c}=(0,t.useMemo)(()=>{let a=e?90:240,t=new Float32Array(4*a),o=(e,a)=>{let t=43758.5453*Math.sin(12.9898*e+78.233*a);return t-Math.floor(t)};for(let e=0;e<a;e++)for(let a=0;a<4;a++)t[4*e+a]=o(e+31,a+3);let i=new r.ld;return i.setAttribute("position",new r.f5(new Float32Array(3*a),3)),i.setAttribute("aS",new r.f5(t,4)),{geo:i,mat:new r.Zg({transparent:!0,depthWrite:!1,blending:r.tq,uniforms:{uTA:{value:0},uV:{value:0},uDpr:{value:1},uC:{value:new r.cE}},vertexShader:`
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
          vec3 c = mix(${(0,l.s)("avorio",.95)}, ${(0,l.s)("caldoChiaro",.95)}, vCaldo);
          gl_FragColor = vec4(c * a * vA, 1.0);
        }`})}},[e]),s=(0,i.f)(e=>e.gl),d=(0,t.useMemo)(()=>new r.cE,[]);return(0,o.f)(({clock:e,camera:a})=>{let t=c.uniforms;t.uTA.value=e.elapsedTime,t.uV.value=n.v,t.uDpr.value=s.getPixelRatio(),t.uC.value.copy(a.position).addScaledVector(a.getWorldDirection(d),3.4)}),(0,a.jsx)("points",{geometry:u,material:c,frustumCulled:!1,renderOrder:25,raycast:()=>null})},"K",0,function({i:e,mobile:u,vivo:c,ordine:s=30}){let{geo:d,mat:v}=(0,t.useMemo)(()=>{let e=u?60:150,a=new Float32Array(4*e),t=(e,a)=>{let t=43758.5453*Math.sin(12.9898*e+78.233*a);return t-Math.floor(t)};for(let o=0;o<e;o++)for(let e=0;e<4;e++)a[4*o+e]=t(o+7,e+11);let o=new r.ld;return o.setAttribute("position",new r.f5(new Float32Array(3*e),3)),o.setAttribute("aS",new r.f5(a,4)),{geo:o,mat:new r.Zg({transparent:!0,depthWrite:!1,depthTest:!1,blending:r.tq,uniforms:{uTA:{value:0},uVivo:{value:0},uDpr:{value:1}},vertexShader:`
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
          vec3 c = mix(${(0,l.s)("caldoChiaro",.92)}, ${(0,l.s)("caldo",1)}, vCaldo);
          gl_FragColor = vec4(c * a * vA, 1.0);
        }`})}},[u]),p=(0,i.f)(e=>e.gl);return(0,o.f)(({clock:a})=>{v.uniforms.uTA.value=a.elapsedTime,v.uniforms.uVivo.value=c?c.v:n.i===e?n.v:0,v.uniforms.uDpr.value=p.getPixelRatio()}),(0,a.jsx)("points",{geometry:d,material:v,frustumCulled:!1,renderOrder:s,raycast:()=>null})},"P",0,u,"C",0,e=>e.replace(/-800\.webp$/,"-profondita.png"),"L",0,e=>{let a=e.match(/\/(visione|caos|cubi)-800\.webp$/);return a?["visione","caos","cubi"].indexOf(a[1]):-1}])},13094,e=>{var a=e.i(43476),t=e.i(71645),o=e.i(25234),i=e.i(28600),r=e.i(31067),l=e.i(90072);function n(){let e=new l.ld,a=new Float32Array([-1,-1,3,-1,-1,3]);return e.boundingSphere=new l.L0,e.boundingSphere.set(new l.cE,1/0),e.setAttribute("position",new l.f5(a,2)),e}let u=t.forwardRef(function({children:e,...a},o){let i=t.useMemo(n,[]);return t.createElement("mesh",(0,r.f)({ref:o,geometry:i,frustumCulled:!1},a),e)});var c=e.i(99121),s=e.i(2546),d=e.i(42597);let v=c.f,p=v.map(([e])=>new l.Es(e)),m=v.map(([,e])=>new l.Es(e)),f=v.map(([,,e])=>new l.Es(e));function h(e){let a=Math.cbrt(.4122214708*e.r+.5363325363*e.g+.0514459929*e.b),t=Math.cbrt(.2119034982*e.r+.6806995451*e.g+.1073969566*e.b),o=Math.cbrt(.0883024619*e.r+.2817188376*e.g+.6299787005*e.b);return[.2104542553*a+.793617785*t-.0040720468*o,1.9779984951*a-2.428592205*t+.4505937099*o,.0259040371*a+.7827717662*t-.808675766*o]}function g(e,a,t,o){let i=a[0]+(t[0]-a[0])*o,r=a[1]+(t[1]-a[1])*o,l=a[2]+(t[2]-a[2])*o,n=(i+.3963377774*r+.2158037573*l)**3,u=(i-.1055613458*r-.0638541728*l)**3,c=(i-.0894841775*r-1.291485548*l)**3;e.setRGB(Math.max(0,4.0767416621*n-3.3077115913*u+.2309699292*c),Math.max(0,-1.2684380046*n+2.6097574011*u-.3413193965*c),Math.max(0,-.0041960863*n-.7034186147*u+1.707614701*c))}let x=new l.Es(c.y[0]),b=new l.Es(c.y[1]),y=new l.Es(c.y[2]),w=p.map(h),S=m.map(h),T=f.map(h),A=`
  void main() {
    // ScreenQuad fornisce gi\xe0 le posizioni in clip space: nessuna matrice.
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,C=e=>`
  #define OTTAVE ${e}
  // ── Bayer 8x8 ordinato, per annidamento di matrici 2x2 ───────────────────
  float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
  #define bayer4(a)  (bayer2(0.5 * (a)) * 0.25 + bayer2(a))
  #define bayer8(a)  (bayer4(0.5 * (a)) * 0.25 + bayer2(a))

  // ── value noise + fbm (3 ottave) ─────────────────────────────────────────
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  // Le ottave sono iniettate alla compilazione (vedi OTTAVE piu' sotto): sul
  // telefono ne bastano due. Questo shader gira a schermo intero, quindi e' il
  // pezzo piu' caro della scena — ed e' quello che paga i pixel in piu' dati ai
  // cubetti. La terza ottava aggiunge un dettaglio a scala di pochi pixel che
  // il dithering di Bayer sopra ci passa comunque: su un fondale sfumato,
  // toglierla in mano non si vede. Su desktop restano tre.
  // un granello di --polvere per cella: pieno fino al raggio, poi sfuma
  // fino a 1,7 volte (le stesse stelle della marea di allora)
  float granelli(vec2 pc, float cella, float r, float seme) {
    vec2 c = floor(pc / cella);
    vec2 f = pc - c * cella;
    float rr = r * (0.85 + 0.3 * hash(c + seme * 5.7));
    vec2 pos = 3.0 + vec2(hash(c + seme), hash(c + seme + 13.1)) * (cella - 6.0);
    return 1.0 - smoothstep(rr, rr * 1.7, length(f - pos));
  }
  // la polvere della carta, i tre piani (le stesse righe della carta, sotto)
  float polvere(vec2 pc, float Hc) {
    float inch = granelli(pc + vec2(0.0, -uTime * 0.006 * Hc), 50.0, 0.9, 1.0) * 0.10;
    vec2 pm = pc + vec2(0.0, -uTime * 0.018 * Hc);
    inch += granelli(pm, 93.0, 0.6, 2.0) * 0.30 + granelli(pm, 202.0, 0.9, 3.0) * 0.30;
    inch += granelli(pc + vec2(0.0, -uTime * 0.045 * Hc), 145.0, 0.5, 4.0) * 0.62;
    return inch;
  }
  float fbm(vec2 p) {
    float v = 0.0, amp = 0.5;
    for (int i = 0; i < OTTAVE; i++) { v += amp * vnoise(p); p *= 2.02; amp *= 0.5; }
    return v;
  }

  // il livello del dithering: la luce del fondale in questo pixel, a gradini
  float livello() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / max(uRes.y, 1.0);

    // LA COMPOSIZIONE NON SI STRINGE SOTTO L'UNO A UNO.
    //
    // Il dominio orizzontale \xe8 moltiplicato per l'aspect cos\xec i cerchi restano
    // cerchi. Su un monitor 16:9 quel dominio \xe8 largo 1.6 e le due masse
    // cadono a 0.30 e 0.76 di quella larghezza: la composizione \xe8 quella
    // disegnata. Su un telefono in verticale l'aspect vale 0.46, cio\xe8 un terzo:
    // il fondale non mostra la stessa scena pi\xf9 stretta, mostra una FETTA
    // diversa del campo di rumore — e la fetta che capitava era quella scura.
    // Misurato: nel piede il fondale usciva un nero (8, 11, 23) in mano contro
    // un blu (9, 25, 79) su desktop, cio\xe8 quasi nero contro blu. Su quel nero i
    // cubetti d'ossidiana, che sono neri, sparivano.
    //
    // Il fondo si tiene quindi a un dominio minimo di uno: sopra l'uno a uno
    // (ogni desktop) non cambia niente, sotto la scena resta la stessa invece
    // di scivolare via.
    float aComp = max(aspect, 1.0);
    vec2 p = vec2(uv.x * aComp, uv.y);

    // ── 1. STRUTTURA GRANDE ─────────────────────────────────────────────
    // Un fondale piatto \xe8 piatto perch\xe9 non ha una direzione di luce. Qui la
    // do esplicita: una diagonale morbida, pi\xf9 chiara verso l'alto-destra.
    float ramp = 0.5 + (uv.y - 0.5) * 0.62 + (uv.x - 0.5) * 0.16;

    // ── 2. DUE MASSE CHE DERIVANO ───────────────────────────────────────
    // Non rumore uniforme: due nuclei larghi e lentissimi, come nuvole di
    // fondo. Sono ci\xf2 che impedisce alla superficie di sembrare una tinta.
    // Periodi diversi e non multipli, cos\xec non si ripete a occhio.
    vec2 c1 = vec2(0.30 * aComp + sin(uTime * 0.045) * 0.16, 0.68 + cos(uTime * 0.037) * 0.12);
    vec2 c2 = vec2(0.76 * aComp + cos(uTime * 0.031) * 0.14, 0.28 + sin(uTime * 0.052) * 0.10);
    float m1 = 1.0 - smoothstep(0.0, 0.85, distance(p, c1));
    float m2 = 1.0 - smoothstep(0.0, 0.72, distance(p, c2));

    // ── 3. TESSITURA ────────────────────────────────────────────────────
    // fbm su due scale: la grande deforma le masse, la piccola d\xe0 il "grezzo"
    // che si vede da vicino. Senza la seconda il fondale \xe8 pulito e anonimo.
    float nBig = fbm(p * 1.6 + vec2(uTime * 0.010, uTime * -0.007));
    float nFine = fbm(p * 6.5 - vec2(uTime * 0.016, uTime * 0.011));

    float n = ramp
            + (m1 * 0.30 + m2 * 0.22)
            + (nBig - 0.5) * 0.34
            + (nFine - 0.5) * 0.11;

    // Alone attorno al puntatore: il fondale sa dove sei, appena appena.
    float dp = distance(p, vec2(uPointer.x * aComp, 1.0 - uPointer.y));
    n += (1.0 - smoothstep(0.0, 0.58, dp)) * 0.09;

    // ── 4. QUANTIZZAZIONE DITHERED ──────────────────────────────────────
    // Pi\xf9 livelli di prima (5 → 9): con pochi livelli il dither disegna
    // campiture larghe e piatte, che \xe8 esattamente il difetto da togliere.
    // La soglia di Bayer entra PRIMA del floor, cos\xec il gradino si rompe in
    // punti invece che in bande.
    const float LEVELS = 9.0;
    float d = bayer8(gl_FragCoord.xy) - 0.5;
    float q = floor(clamp(n, 0.0, 1.0) * LEVELS + d) / LEVELS;
    q = clamp(q, 0.0, 1.0);
    return q;
  }

  vec3 cartaDi(float q) {
    vec3 carta = q < 0.5 ? mix(uCS, uCM, q * 2.0) : mix(uCM, uCL, (q - 0.5) * 2.0);
    vec2 pc = gl_FragCoord.xy / uDpr;        // pixel CSS, y dal basso
    float Hc = uRes.y / uDpr;
    // (STORIA) qui c'era l'alone, un'aria piu' chiara al centro dietro il
    // quadrato: tolto il 18 ottobre sera con il bagliore del velo (Lorenzo,
    // \xabc'e' un alone dietro\xbb). Il quadrato sta sull'ossidiana nuda.
    // la grana d'inchiostro, ferma come quella del sito
    vec2 g8 = mod(floor(pc), 8.0), g13 = mod(floor(pc) - vec2(4.0, 5.0), 13.0);
    float gr = (g8.x + g8.y < 0.5 ? 1.0 : 0.0) + (g13.x + g13.y < 0.5 ? 1.0 : 0.0);
    // (14 ottobre 2026) la carta e' d'ossidiana: la stessa materia della
    // marea del cambio pagina, la grana e la polvere d'avorio
    carta = mix(carta, ${(0,c.V)(c.e)}, min(gr, 1.0) * 0.04);
    // i tre piani di polvere d'inchiostro, ognuno col suo passo lento
    float inch = 0.0;
    inch += granelli(pc + vec2(0.0, -uTime * 0.006 * Hc), 50.0, 0.9, 1.0) * 0.10;
    vec2 pm = pc + vec2(0.0, -uTime * 0.018 * Hc);
    inch += granelli(pm, 93.0, 0.6, 2.0) * 0.30 + granelli(pm, 202.0, 0.9, 3.0) * 0.30;
    vec2 pv = pc + vec2(0.0, -uTime * 0.045 * Hc);
    inch += granelli(pv, 145.0, 0.5, 4.0) * 0.62;
    carta = mix(carta, ${(0,c.V)(c.e)}, clamp(inch, 0.0, 0.7));
    carta = mix(carta, ${(0,c.V)(c.o)}, granelli(pv, 252.0, 1.4, 5.0) * 0.16);
    return carta;
  }

  // la grana di pellicola, l'ultima cosa sopra tutto
  float grana() { return (hash(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5) * uGrain; }
`,M=new WeakMap;e.s(["b",0,function({storyline:e,reduce:r,pointer:n,leggero:h=!1}){let E=(0,t.useMemo)(()=>{let e;return e=h?2:3,`
  precision highp float;

  uniform vec2  uRes;
  uniform float uTime;
  uniform vec3  uShadow;
  uniform vec3  uMid;
  uniform vec3  uLight;
  uniform float uGrain;
  uniform vec2  uPointer;
  // la carta del caricamento: 1 tutta avorio, 0 spenta (vedi sotto)
  uniform float uCarta;
  uniform float uDpr;
  uniform vec3  uCS;
  uniform vec3  uCM;
  uniform vec3  uCL;

${C(e)}
  void main() {
    float q = livello();

    // ── 5. TRE STOP ─────────────────────────────────────────────────────
    // La rampa attraversa ombra → mezzo → luce: \xe8 qui che entra il cambio di
    // temperatura, e con lui la sensazione di volume invece che di tinta.
    vec3 col = q < 0.5
      ? mix(uShadow, uMid,  q * 2.0)
      : mix(uMid,    uLight, (q - 0.5) * 2.0);

    // Grana dentro allo shader: costa una riga e si anima da sola, quindi
    // sembra pellicola invece di una texture ferma incollata sopra.
    // ── LA CARTA E' LA MAREA IN NEGATIVO (10 ottobre 2026) ─────────────────
    // Lorenzo: lo sfondo del caricamento \xabcoerente con le transizioni ma
    // bianco\xbb. La transizione fra le pagine era la marea (oggi il varco, passaggio/varco.ts):
    // l'ossidiana con la grana e la polvere d'avorio su tre piani. Qui e' la
    // stessa materia rovesciata: la carta d'avorio con la grana d'inchiostro
    // (un punto ogni 8 px e uno ogni 13, al 4%), un'aria piu' chiara al
    // centro, e la polvere d'inchiostro sugli stessi tre piani con le stesse
    // taglie e densita'. Ogni piano sale col suo passo lento.
    // ESCE A CUBETTI (vedi sotto): dal 10 ottobre alle 3 al pomeriggio e'
    // uscita salendo come la marea; Lorenzo preferiva l'onda, ed e' tornata.
    if (uCarta > 0.0005) {
      vec3 carta = cartaDi(q);
      // ── ESCE SPEGNENDOSI A CUBETTI, DAL MARCHIO VERSO I BORDI ───────────
      // (tornata il 10 ottobre: Lorenzo preferiva questa alla marea.) Lo
      // schermo e' diviso in celle grandi quanto un cubetto, e ognuna si
      // spegne a turno — un quadrato di buio che nasce al centro della cella
      // e la riempie — in un'onda che parte dal quadrato dei ventitre e
      // arriva ai bordi. Il turno di ogni cella e' la distanza dal centro piu'
      // uno scarto suo: senza scarto l'onda e' un cerchio, cioe' un effetto;
      // con lo scarto e' un muro che si costruisce. La polvere sta sulla
      // carta e se ne va con lei, cella per cella.
      // ── L'APERTURA A STRATI (14 ottobre 2026): sul boom, al posto
      // dell'onda. Dal lontano al vicino, ognuno copre quello che ha sotto:
      // l'ossidiana fine, l'avorio, la carta d'ossidiana coi cubetti grandi
      {
      float lato = uRes.y / 15.0;
      vec2 cel = floor(gl_FragCoord.xy / lato);
      vec2 cen = (cel + 0.5) * lato;
      float dist = length((cen - uRes * 0.5) / uRes.y);
      float turno = dist * 0.92 + hash(cel + 7.3) * (0.02 + dist * 0.14);
      float avanza = (1.0 - uCarta) * 1.35;
      float loc = clamp((avanza - turno) / 0.10, 0.0, 1.0);
      vec2 f = fract(gl_FragCoord.xy / lato) - 0.5;
      float dentro = max(abs(f.x), abs(f.y)) * 2.0;
      float buio = step(dentro, loc * 1.04);
      float bordo = buio * smoothstep(loc * 1.04 - 0.16, loc * 1.04, dentro) * step(loc, 0.995);
      // la cella e' una tessera d'ossidiana: mentre si posa ha lo smusso,
      // luce in alto a sinistra e ombra in basso a destra, come i cubetti
      float smusso = buio * (1.0 - loc) * smoothstep(0.55, 0.95, dentro / max(loc, 0.001));
      float lato_luce = clamp((f.y - f.x) * 1.6, -1.0, 1.0);
      col += ${(0,c.V)(c.e)} * smusso * max(lato_luce, 0.0) * 0.45;
      col *= 1.0 - smusso * max(-lato_luce, 0.0) * 0.5;
      col = mix(carta, col, buio);
      col = mix(col, ${(0,c.V)(c.o)}, bordo * 0.6);
      // davanti all'onda corre un anello sottile di luce calda: si vede
      // l'ordine ARRIVARE, prima di vederlo arrivato
      float raggio = avanza / 0.92 - 0.02;
      float dPix = length((gl_FragCoord.xy - uRes * 0.5) / uRes.y);
      float anello = exp(-pow((dPix - raggio) / 0.018, 2.0)) * smoothstep(0.0, 0.08, uCarta) * smoothstep(1.0, 0.92, uCarta);
      col += ${(0,c.V)(c.B)} * anello * 0.22;
      }
    }

    col += grana();

    gl_FragColor = vec4(col, 1.0);
  }
`},[h]),z=(0,t.useRef)(null),L=(0,t.useRef)(0),R=(0,t.useRef)(0),q=(0,t.useRef)(-1),V=(0,t.useRef)(new l.wq),I=(0,t.useRef)(0),P=(0,t.useRef)(""),D=(0,t.useMemo)(()=>({uRes:{value:new l.wq(1,1)},uTime:{value:0},uShadow:{value:p[0].clone()},uMid:{value:m[0].clone()},uLight:{value:f[0].clone()},uGrain:{value:.055},uPointer:{value:new l.wq(.5,.5)},uCarta:{value:1},uDpr:{value:1},uCS:{value:new l.Es(c.d)},uCM:{value:new l.Es(c.d)},uCL:{value:new l.Es(c.$)}}),[]),O=(0,i.f)(e=>e.gl);return(0,t.useEffect)(()=>(M.set(O,{u:D,ottave:h?2:3}),()=>{M.get(O)?.u===D&&M.delete(O)}),[O,D,h]),(0,o.f)((a,t)=>{let o=z.current?.uniforms;if(!o)return;let i=Math.min(.05,t),l=a.gl.getDrawingBufferSize(V.current);o.uRes.value.set(l.x,l.y),o.uDpr.value=Math.max(1,l.y/Math.max(1,a.size.height)),r||(o.uTime.value+=i);let u=Math.max(0,Math.min(6,e.current.kc));R.current!==(e.current.salto??0)?(R.current=e.current.salto??0,L.current=u):L.current+=(u-L.current)*Math.min(1,2.2*i);let c=L.current,h=c<=1?c:c<=2.5?1+(c-1)/1.5:c<=3?2+(c-2.5)/.5:c,A=Math.min(v.length-2,Math.floor(h)),C=Math.max(0,Math.min(1,h-A)),M=1===A?1-Math.pow(1-C,6):C*C*(3-2*C);g(o.uShadow.value,w[A],w[A+1],M),g(o.uMid.value,S[A],S[A+1],M),g(o.uLight.value,T[A],T[A+1],M);let E=Math.max(0,Math.min(6,e.current.kc)),D=E<=2.8?0:E<=2.92?(E-2.8)/.12:E<=4.3?1:E<=4.9?1-(E-4.3)/.6:0;D>.001&&(o.uShadow.value.lerp(x,D),o.uMid.value.lerp(b,D),o.uLight.value.lerp(y,D));let O=e.current.carta??0;q.current<0&&(q.current=+(O>0)),q.current=O>q.current||e.current.giaPosata?O:Math.max(O,q.current-i/(2.4*(0,d.C)())*(e.current.entrataSvelta?3:1));let B=e.current.apreDa??0,$=-1;B>0&&!r&&(0,d.L)()>=0&&(q.current=0,$=0),o.uCarta.value=r?+(O>0):q.current,e.current.cartaVista=$>=0?$:o.uCarta.value;let k=Math.max(0,Math.min(1,e.current.ritorno??0));if(k>.001){let e=k*k*(3-2*k);o.uShadow.value.lerp(p[0],e),o.uMid.value.lerp(m[0],e),o.uLight.value.lerp(f[0],e)}{let e=o.uShadow.value,a=o.uMid.value,t=o.uLight.value,i=e=>.2126*e.r+.7152*e.g+.0722*e.b,r=Math.max(0,Math.min(1,Math.sqrt(.28*i(e)+.44*i(a)+.28*i(t))));s.o.luce=r}let F=a.clock.elapsedTime;if(F-I.current>.1){I.current=F;let e=o.uMid.value.getHexString();e!==P.current&&(P.current=e,s.o.mid=`#${e}`)}if(n){let e=o.uPointer.value;e.x+=(n.current.x-e.x)*Math.min(1,1.6*i),e.y+=(n.current.y-e.y)*Math.min(1,1.6*i)}}),(0,a.jsx)(u,{renderOrder:-1e3,children:(0,a.jsx)("shaderMaterial",{ref:z,vertexShader:A,fragmentShader:E,uniforms:D,depthTest:!1,depthWrite:!1,toneMapped:!1})})},"a",0,M,"D",0,C],13094)},72020,e=>{var a=e.i(71645);let t="high",o=!1,i=!1,r=new Set;function l(){r.forEach(e=>e())}function n(e){return"high"===e?"mid":"low"}function u(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return"low";let e=900>Math.min(window.innerWidth,window.innerHeight)?"mid":"high",a=navigator,t=a.hardwareConcurrency,o=a.deviceMemory;return"number"==typeof t&&t>0&&t<=2&&(e=n(e)),"number"==typeof o&&o<=2&&(e=n(e)),e}function c(){o||(o=!0,t=u())}function s(e){return c(),r.add(e),!function(){let e,a,o;if(i)return;i=!0;let r=()=>{let e=u();e!==t&&(t=e,l())};window.matchMedia("(min-width:600px) and (min-height:600px)").addEventListener("change",r),window.matchMedia("(min-width:900px) and (min-height:900px)").addEventListener("change",r),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",r),"visible"===document.visibilityState&&"low"!==t&&(e=0,a=0,o=0,requestAnimationFrame(function i(r){if("visible"!==document.visibilityState)return;if(e<10){e++,requestAnimationFrame(i);return}0===o&&(o=r),a++;let n=r-o;if(a>=60||n>=1500){n>0&&(e=>{let a=t;e<24?a="low":e<40&&"high"===a&&(a="mid"),a!==t&&(t=a,l())})(a/n*1e3);return}requestAnimationFrame(i)}))}(),()=>r.delete(e)}function d(){return c(),t}function v(){return"high"}e.s(["f",0,function(){return(0,a.useSyncExternalStore)(s,d,v)}])},67678,e=>{let a=new WeakSet,t=new Set,o=new Set,i=!1;function r(){for(let e of[...t]){if(!e.isConnected){t.delete(e);continue}e.play().then(()=>t.delete(e)).catch(()=>{})}for(let e of[...o]){if(!e.isConnected){o.delete(e);continue}e.paused&&(0===e.readyState&&2!==e.networkState&&e.load(),e.play().catch(()=>{t.add(e)}))}}function l(){if(i||"u"<typeof document)return;i=!0;let e=()=>r();document.addEventListener("touchend",e,{passive:!0,capture:!0}),document.addEventListener("pointerdown",e,{passive:!0,capture:!0}),document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&r()}),window.addEventListener("pageshow",r)}let n=0,u=new WeakMap;window.addEventListener("webglcontextlost",()=>{n++},!0),window.addEventListener("webglcontextrestored",()=>{n++},!0),document.addEventListener("visibilitychange",()=>{document.hidden&&n++}),window.addEventListener("pagehide",()=>{n++});let c=new WeakSet;function s(e){if(!c.has(e)&&(c.add(e),e.muted=!0,e.defaultMuted=!0,e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("disablepictureinpicture",""),e.setAttribute("disableremoteplayback",""),e.setAttribute("x-webkit-airplay","deny"),e.disablePictureInPicture=!0,function(){if("u"<typeof navigator)return!1;let e=navigator.userAgent;return/iP(hone|ad|od)/.test(e)||/Safari\//.test(e)&&!/Chrome|Chromium|CriOS|Android|Edg\//.test(e)}())){let a=e.querySelectorAll('source[type="video/webm"]');a.length&&(a.forEach(e=>e.remove()),e.load())}}e.s(["T",0,function(e,i){if(o.add(e),l(),a.has(e))return;a.add(e),s(e);let r=()=>{i?i(e):e.style.opacity="1"};e.addEventListener("playing",r),i||e.addEventListener("emptied",()=>{e.style.opacity="0"}),!e.paused&&e.readyState>=3&&r();let n=()=>{e.isConnected&&e.play().then(()=>t.delete(e)).catch(()=>{t.add(e),l()})};n();let u=-1;e.addEventListener("timeupdate",()=>{let a=e.currentTime;e.loop&&!e.paused&&e.duration&&e.duration-a<.15&&a===u&&(e.currentTime=0,n()),u=a}),e.addEventListener("ended",()=>{e.currentTime=0,n()}),e.addEventListener("loadeddata",n,{once:!0}),e.addEventListener("canplay",n,{once:!0})},"p",0,function(e){t.delete(e),o.delete(e),e.pause()},"S",0,function(e){if(!e||!e.isConnected||e.readyState<2||!e.videoWidth)return!1;let a=e.currentTime,t=u.get(e);return t||(t={t:a,g:-1},u.set(e,t)),a!==t.t&&(t.t=a,t.g=n),t.g===n},"B",0,s,"$",0,function(e){s(e),o.add(e),l(),e.play().then(()=>t.delete(e)).catch(()=>{t.add(e),l()})}])},68194,e=>{var a=e.i(99121);let t=`
  vec3 tintaOmino(float filo, float cielo, float grana, float luce) {
    vec3 col = ${(0,a.s)("pietra",1.442)};
    col += cielo * ${(0,a.s)("avorio",.212)} * (0.5 + 0.5 * luce);
    col += step(0.94, grana) * ${(0,a.s)("pietra",1.381)};
    return mix(col, ${(0,a.s)("caldoChiaro",.924)}, clamp(filo * 0.95, 0.0, 1.0));
  }
`;e.s(["f",0,t])}])})();