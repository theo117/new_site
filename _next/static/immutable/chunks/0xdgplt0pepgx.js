(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13094,e=>{var a=e.i(43476),t=e.i(71645),o=e.i(25234),i=e.i(28600),r=e.i(31067),n=e.i(90072);function l(){let e=new n.ld,a=new Float32Array([-1,-1,3,-1,-1,3]);return e.boundingSphere=new n.L0,e.boundingSphere.set(new n.cE,1/0),e.setAttribute("position",new n.f5(a,2)),e}let u=t.forwardRef(function({children:e,...a},o){let i=t.useMemo(l,[]);return t.createElement("mesh",(0,r.f)({ref:o,geometry:i,frustumCulled:!1},a),e)});var s=e.i(99121),c=e.i(2546),d=e.i(42597);let m=s.f,f=m.map(([e])=>new n.Es(e)),v=m.map(([,e])=>new n.Es(e)),p=m.map(([,,e])=>new n.Es(e));function h(e){let a=Math.cbrt(.4122214708*e.r+.5363325363*e.g+.0514459929*e.b),t=Math.cbrt(.2119034982*e.r+.6806995451*e.g+.1073969566*e.b),o=Math.cbrt(.0883024619*e.r+.2817188376*e.g+.6299787005*e.b);return[.2104542553*a+.793617785*t-.0040720468*o,1.9779984951*a-2.428592205*t+.4505937099*o,.0259040371*a+.7827717662*t-.808675766*o]}function g(e,a,t,o){let i=a[0]+(t[0]-a[0])*o,r=a[1]+(t[1]-a[1])*o,n=a[2]+(t[2]-a[2])*o,l=(i+.3963377774*r+.2158037573*n)**3,u=(i-.1055613458*r-.0638541728*n)**3,s=(i-.0894841775*r-1.291485548*n)**3;e.setRGB(Math.max(0,4.0767416621*l-3.3077115913*u+.2309699292*s),Math.max(0,-1.2684380046*l+2.6097574011*u-.3413193965*s),Math.max(0,-.0041960863*l-.7034186147*u+1.707614701*s))}let x=new n.Es(s.y[0]),w=new n.Es(s.y[1]),b=new n.Es(s.y[2]),E=f.map(h),y=v.map(h),M=p.map(h),A=`
  void main() {
    // ScreenQuad fornisce gi\xe0 le posizioni in clip space: nessuna matrice.
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,S=e=>`
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
    carta = mix(carta, ${(0,s.V)(s.e)}, min(gr, 1.0) * 0.04);
    // i tre piani di polvere d'inchiostro, ognuno col suo passo lento
    float inch = 0.0;
    inch += granelli(pc + vec2(0.0, -uTime * 0.006 * Hc), 50.0, 0.9, 1.0) * 0.10;
    vec2 pm = pc + vec2(0.0, -uTime * 0.018 * Hc);
    inch += granelli(pm, 93.0, 0.6, 2.0) * 0.30 + granelli(pm, 202.0, 0.9, 3.0) * 0.30;
    vec2 pv = pc + vec2(0.0, -uTime * 0.045 * Hc);
    inch += granelli(pv, 145.0, 0.5, 4.0) * 0.62;
    carta = mix(carta, ${(0,s.V)(s.e)}, clamp(inch, 0.0, 0.7));
    carta = mix(carta, ${(0,s.V)(s.o)}, granelli(pv, 252.0, 1.4, 5.0) * 0.16);
    return carta;
  }

  // la grana di pellicola, l'ultima cosa sopra tutto
  float grana() { return (hash(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5) * uGrain; }
`,T=new WeakMap;e.s(["b",0,function({storyline:e,reduce:r,pointer:l,leggero:h=!1}){let L=(0,t.useMemo)(()=>{let e;return e=h?2:3,`
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

${S(e)}
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
      col += ${(0,s.V)(s.e)} * smusso * max(lato_luce, 0.0) * 0.45;
      col *= 1.0 - smusso * max(-lato_luce, 0.0) * 0.5;
      col = mix(carta, col, buio);
      col = mix(col, ${(0,s.V)(s.o)}, bordo * 0.6);
      // davanti all'onda corre un anello sottile di luce calda: si vede
      // l'ordine ARRIVARE, prima di vederlo arrivato
      float raggio = avanza / 0.92 - 0.02;
      float dPix = length((gl_FragCoord.xy - uRes * 0.5) / uRes.y);
      float anello = exp(-pow((dPix - raggio) / 0.018, 2.0)) * smoothstep(0.0, 0.08, uCarta) * smoothstep(1.0, 0.92, uCarta);
      col += ${(0,s.V)(s.B)} * anello * 0.22;
      }
    }

    col += grana();

    gl_FragColor = vec4(col, 1.0);
  }
`},[h]),C=(0,t.useRef)(null),R=(0,t.useRef)(0),q=(0,t.useRef)(0),z=(0,t.useRef)(-1),_=(0,t.useRef)(new n.wq),D=(0,t.useRef)(0),V=(0,t.useRef)(""),P=(0,t.useMemo)(()=>({uRes:{value:new n.wq(1,1)},uTime:{value:0},uShadow:{value:f[0].clone()},uMid:{value:v[0].clone()},uLight:{value:p[0].clone()},uGrain:{value:.055},uPointer:{value:new n.wq(.5,.5)},uCarta:{value:1},uDpr:{value:1},uCS:{value:new n.Es(s.d)},uCM:{value:new n.Es(s.d)},uCL:{value:new n.Es(s.$)}}),[]),O=(0,i.f)(e=>e.gl);return(0,t.useEffect)(()=>(T.set(O,{u:P,ottave:h?2:3}),()=>{T.get(O)?.u===P&&T.delete(O)}),[O,P,h]),(0,o.f)((a,t)=>{let o=C.current?.uniforms;if(!o)return;let i=Math.min(.05,t),n=a.gl.getDrawingBufferSize(_.current);o.uRes.value.set(n.x,n.y),o.uDpr.value=Math.max(1,n.y/Math.max(1,a.size.height)),r||(o.uTime.value+=i);let u=Math.max(0,Math.min(6,e.current.kc));q.current!==(e.current.salto??0)?(q.current=e.current.salto??0,R.current=u):R.current+=(u-R.current)*Math.min(1,2.2*i);let s=R.current,h=s<=1?s:s<=2.5?1+(s-1)/1.5:s<=3?2+(s-2.5)/.5:s,A=Math.min(m.length-2,Math.floor(h)),S=Math.max(0,Math.min(1,h-A)),T=1===A?1-Math.pow(1-S,6):S*S*(3-2*S);g(o.uShadow.value,E[A],E[A+1],T),g(o.uMid.value,y[A],y[A+1],T),g(o.uLight.value,M[A],M[A+1],T);let L=Math.max(0,Math.min(6,e.current.kc)),P=L<=2.8?0:L<=2.92?(L-2.8)/.12:L<=4.3?1:L<=4.9?1-(L-4.3)/.6:0;P>.001&&(o.uShadow.value.lerp(x,P),o.uMid.value.lerp(w,P),o.uLight.value.lerp(b,P));let O=e.current.carta??0;z.current<0&&(z.current=+(O>0)),z.current=O>z.current||e.current.giaPosata?O:Math.max(O,z.current-i/(2.4*(0,d.C)())*(e.current.entrataSvelta?3:1));let F=e.current.apreDa??0,I=-1;F>0&&!r&&(0,d.L)()>=0&&(z.current=0,I=0),o.uCarta.value=r?+(O>0):z.current,e.current.cartaVista=I>=0?I:o.uCarta.value;let U=Math.max(0,Math.min(1,e.current.ritorno??0));if(U>.001){let e=U*U*(3-2*U);o.uShadow.value.lerp(f[0],e),o.uMid.value.lerp(v[0],e),o.uLight.value.lerp(p[0],e)}{let e=o.uShadow.value,a=o.uMid.value,t=o.uLight.value,i=e=>.2126*e.r+.7152*e.g+.0722*e.b,r=Math.max(0,Math.min(1,Math.sqrt(.28*i(e)+.44*i(a)+.28*i(t))));c.o.luce=r}let N=a.clock.elapsedTime;if(N-D.current>.1){D.current=N;let e=o.uMid.value.getHexString();e!==V.current&&(V.current=e,c.o.mid=`#${e}`)}if(l){let e=o.uPointer.value;e.x+=(l.current.x-e.x)*Math.min(1,1.6*i),e.y+=(l.current.y-e.y)*Math.min(1,1.6*i)}}),(0,a.jsx)(u,{renderOrder:-1e3,children:(0,a.jsx)("shaderMaterial",{ref:C,vertexShader:A,fragmentShader:L,uniforms:P,depthTest:!1,depthWrite:!1,toneMapped:!1})})},"a",0,T,"D",0,S],13094)},77157,e=>{var a=e.i(43476),t=e.i(71645),o=e.i(25234),i=e.i(90072),r=e.i(99121);let n=[{k:[-1,-.5,.9,1.5],verso:[0,0]},{k:[1.08,1.45,2.45,2.75],verso:[0,0]},{k:[4.72,4.95,5.45,5.8],verso:[0,0]}],l=[0,0],u=`
  attribute vec3 aDa;       // dove nasce: attorno, dietro la pietra
  attribute float aFase;    // a che punto della vita e' al tempo zero
  attribute float aVita;    // quanto dura una vita, in secondi
  attribute float aJit;     // la grana: pochi granelli spiccano
  attribute float aJit2;
  uniform float uTime;
  uniform float uVita;
  uniform vec2 uVerso;
  // 1 nell'apertura, 0 altrove: vedi uDalBasso piu' sotto
  uniform float uDalBasso;
  varying float vAlpha;
  void main() {
    // 0 nasce al bordo, 1 e' dentro la pietra; poi rinasce al bordo
    float f = fract(aFase + uTime / aVita);
    float e = f * f * (3.0 - 2.0 * f);
    // verso la cosa che mette ordine (la pietra, o il marchio nell'hero):
    // quasi tutto il tragitto — l'ultimo tratto e' gia' coperto — con uno
    // sbandamento lieve
    // ── DA DOVE NASCE, E PERCHE' NELL'APERTURA E' DIVERSO ─────────────────
    // Di regola nasce ai due lati, oltre il bordo, in una fascia orizzontale:
    // giusto per gli atti in cui lo sfondo e' vuoto e la polvere e' solo aria
    // che attraversa il quadro.
    // Nell'apertura pero' adesso c'e' un LUOGO — una piana lavica con un
    // orizzonte — e in un posto cosi' la polvere non arriva di taglio da
    // destra e da sinistra: si alza da terra. Con la nascita laterale si
    // vedeva entrare in orizzontale a mezz'aria, e partiva dal punto
    // sbagliato per la scena in cui si trovava.
    // Qui la stessa nuvola viene rimappata: la x si allarga, la y scende alla
    // quota del suolo, la z arretra. Nessun secondo sistema di particelle,
    // nessun secondo buffer — la stessa polvere che nasce da un'altra parte.
    vec3 basso = vec3(aDa.x * 1.75, -1.24 + abs(aDa.y) * 0.09, aDa.z - 1.7);
    vec3 daVero = mix(aDa, basso, uDalBasso);
    vec3 meta = vec3(uVerso, daVero.z);
    vec3 pos = mix(daVero, meta, e * 0.92);
    pos.x += sin(uTime * 0.35 + aFase * 6.2832) * 0.06;
    pos.y += cos(uTime * 0.29 + aFase * 5.1) * 0.05;
    // nasce piano; muore quando e' ormai dietro la pietra
    float nasce = smoothstep(0.0, 0.25, f);
    float muore = 1.0 - smoothstep(0.82, 1.0, f);
    vAlpha = nasce * muore * uVita * (0.14 + 0.7 * step(0.7, aJit2) * aJit);
    // i punti piu' in fondo sono piu' tenui: da' profondita'
    vAlpha *= 0.45 + 0.55 * smoothstep(-2.2, -0.4, daVero.z);
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (0.55 + aJit * 1.05) * (34.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,s=`
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = (1.0 - smoothstep(0.32, 0.5, d)) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;e.s(["f",0,function({storyline:e,reduce:c,intro:d,verticale:m=!1}){let f=(0,t.useRef)(null),v=(0,t.useRef)(null),p=(0,t.useMemo)(()=>{let e=m?650:1100,a=new i.ld,t=new Float32Array(3*e),o=new Float32Array(e),r=new Float32Array(e),n=new Float32Array(e),l=new Float32Array(e),u={v:7},s=()=>(u.v=16807*u.v%0x7fffffff,(u.v-1)/0x7ffffffe);for(let a=0;a<e;a++){let e=.5>s()?-1:1;m?(t[3*a]=(s()-.5)*2.2,t[3*a+1]=e*(2+2.4*s())):(t[3*a]=e*(2+2.8*s()),t[3*a+1]=(s()-.5)*3.4),t[3*a+2]=-.4-1.6*s(),o[a]=s(),r[a]=10+8*s(),n[a]=s(),l[a]=s()}return a.setAttribute("position",new i.f5(new Float32Array(3*e),3)),a.setAttribute("aDa",new i.f5(t,3)),a.setAttribute("aFase",new i.f5(o,1)),a.setAttribute("aVita",new i.f5(r,1)),a.setAttribute("aJit",new i.f5(n,1)),a.setAttribute("aJit2",new i.f5(l,1)),a},[m]);(0,t.useEffect)(()=>()=>p.dispose(),[p]);let h=(0,t.useMemo)(()=>({uTime:{value:0},uVita:{value:0},uVerso:{value:new i.wq(0,0)},uDalBasso:{value:0},uColor:{value:new i.Es(r.t.avorio)}}),[]);return(0,o.f)((a,t)=>{let o=v.current?.uniforms,i=f.current;if(!o||!i)return;let r=Math.min(.05,t),u=Math.max(0,Math.min(6,e.current.k)),s=0,p=n[0].verso;for(let e of n){let a=function(e,a,t,o,i){let r=Math.max(0,Math.min(1,(e-a)/(t-a))),n=Math.max(0,Math.min(1,(i-e)/(i-o))),l=e=>e*e*(3-2*e);return l(r)*l(n)}(u,e.k[0],e.k[1],e.k[2],e.k[3]);a>s&&(s=a,p=e.verso)}m&&p===n[0].verso&&(p=l);let h=Math.max(0,Math.min(1,e.current.ritorno??0));h>s&&(s=h,p=l);let g=Math.max(0,Math.min(1,d?.current.q??1));u<.5&&(s*=g),s*=1-Math.min(1,(e.current.cartaVista??e.current.carta??0)*1.4),o.uVita.value+=(s-o.uVita.value)*Math.min(1,3*r);let x=o.uVerso.value;x.x+=(p[0]-x.x)*Math.min(1,2*r),x.y+=(p[1]-x.y)*Math.min(1,2*r);let w=+(u<1.5||h>.01);o.uDalBasso.value+=(w-o.uDalBasso.value)*Math.min(1,1.2*r),i.visible=o.uVita.value>.004,!c&&i.visible&&(o.uTime.value+=r)}),(0,a.jsx)("points",{ref:f,geometry:p,frustumCulled:!1,visible:!1,children:(0,a.jsx)("shaderMaterial",{ref:v,vertexShader:u,fragmentShader:s,uniforms:h,transparent:!0,depthWrite:!1,blending:i.tq})})}])},6364,e=>{var a=e.i(43476),t=e.i(71645),o=e.i(25234),i=e.i(28600),r=e.i(68366),n=e.i(92901),l=e.i(95399);function u(e,a){return Math.min(Math.round(4*Math.max(.8,Math.min(window.devicePixelRatio||1,e?1.5:a?1.75:2,Math.sqrt(4665600/Math.max(1,window.innerWidth*window.innerHeight)))))/4,(0,n.j)())}e.s(["Z",0,function(){let e=(0,i.f)(e=>e.gl),o=(0,i.f)(e=>e.invalidate),[n,l]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let a=e.domElement,t=()=>{l(e=>e+1),o()};return a.addEventListener("webglcontextrestored",t),()=>a.removeEventListener("webglcontextrestored",t)},[e,o]),(0,a.jsx)(r.Q,{forza:1.5},n)},"_",0,function({storyline:e,intro:a,lowPerf:o,reduce:r=!1}){let n=(0,i.f)(e=>e.advance),u=(0,i.f)(e=>e.clock),s=(0,i.f)(e=>e.gl),c=(0,i.f)(e=>e.setDpr),d=(0,i.f)(e=>e.invalidate);return(0,t.useLayoutEffect)(()=>(0,l.m)(u),[u]),(0,t.useEffect)(()=>{var t,i,u;let m,f,v,p,h,g,x,w,b,E,y,M,A,S,T,L,C=0,R=performance.now(),q=performance.now(),z=0/0,_=0,D=(t=s,i=c,u=d,m=t.getContext(),f="u">typeof WebGL2RenderingContext&&m instanceof WebGL2RenderingContext,v="u">typeof navigator&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome|Chromium|Edg|CriOS/.test(navigator.userAgent),p=f?m.getExtension("EXT_disjoint_timer_query_webgl2"):null,h=[],g=null,x=[],w=[],b=0,E=0,y=0,M=0,A=t.domElement,S=()=>{h=[],x.length=0,g=null,p=null},T=()=>{p=m.getExtension("EXT_disjoint_timer_query_webgl2"),u()},A.addEventListener("webglcontextlost",S),A.addEventListener("webglcontextrestored",T),L=e=>{let a=t.getPixelRatio(),o=Math.max(.6,Math.floor((a-.25)*4+.001)/4);if(o>=a-.01)return;M=e,i(o);let r=window;r.__DPR_GPU__=[...r.__DPR_GPU__??[],o]},{indietro(){if(!f||m.isContextLost())return!1;for(;h.length&&m.getSyncParameter(h[0],m.SYNC_STATUS)===m.SIGNALED;)m.deleteSync(h.shift());return h.length>=2},inizia(){!(!p||v||g||x.length>3||m.isContextLost())&&(g=m.createQuery())&&m.beginQuery(p.TIME_ELAPSED_EXT,g)},segna(){if(!f||m.isContextLost())return;g&&p&&(m.endQuery(p.TIME_ELAPSED_EXT),x.push(g),g=null);let e=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);e&&h.push(e),m.flush()},conta(e,a,t){if(!t||v){b=0,w.length=0;return}if(((()=>{if(!p)return;let e=m.getParameter(p.GPU_DISJOINT_EXT);for(;x.length&&m.getQueryParameter(x[0],m.QUERY_RESULT_AVAILABLE);){let a=x.shift(),t=m.getQueryParameter(a,m.QUERY_RESULT);m.deleteQuery(a),e||w.push(t/1e6)}})(),b||(b=e,E=y=0,w.length=0),E++,a&&y++,!(e-b<1500))&&(b=0,!(e-M<3e3)))if(p){if(w.length<8)return;let a=[...w].sort((e,a)=>e-a);a[a.length>>1]>20&&L(e)}else y/Math.max(1,E)>.5&&L(e)},chiudi(){for(let e of h)try{m.deleteSync(e)}catch{}for(let e of x)try{m.deleteQuery(e)}catch{}h=[],x.length=0,g=null,A.removeEventListener("webglcontextlost",S),A.removeEventListener("webglcontextrestored",T)}}),V=new Float32Array(16),P=0,O=0,F=1e3/60,I=0,U=1,N=()=>{C||Q||(C=requestAnimationFrame($))},B=()=>{R=performance.now(),N()},k=["wheel","touchstart","touchmove","pointermove","pointerdown","pointerup","keydown"];for(let e of k)window.addEventListener(e,B,{passive:!0});let Q=0;window.addEventListener("scroll",N,{passive:!0});let $=t=>{if(C=(0,l.k)($),O&&(V[P%16]=t-O,++P%16==0)){let e=Array.from(V).sort((e,a)=>e-a)[8];e>2&&e<120&&(F=e)}O=t;let i=e.current.kc;1e-4>=Math.abs(i-z)||(z=i,q=t),a&&a.current.q<1?_=0:_||(_=t);let u=!a||!a.current.pronta||!_||t-_<3e3*!r,s=u||t-R<1500||t-q<2500;if((u&&!r||t-q<250)&&(0,l.D)(),!s&&(r||!(0,l.E)())){n(t),(0,l.Q)(C),C=0,O=0;return}if(r&&t-R>=1500&&t-q>=2500){(0,l.Q)(C),C=0,O=0,Q=window.setTimeout(()=>{Q=0,C||(C=requestAnimationFrame($))},100),n(t);return}let c=Math.max(1,Math.round(1e3/(s?o?30:60:o?24:30)/F));if(c!==U&&(U=c,I=0),I++%U!=0||(0,l.C)())return;let d=D.indietro();u||D.conta(t,d,s),d||(D.inizia(),n(t),D.segna())};C=requestAnimationFrame($);let G=(0,l.P)(()=>{C||Q||(C=requestAnimationFrame($))});return()=>{for(let e of(G(),D.chiudi(),(0,l.Q)(C),window.clearTimeout(Q),window.removeEventListener("scroll",N),k))window.removeEventListener(e,B)}},[n,e,a,o,r,s,c,d]),null},"T",0,function({velo:e}){let a=(0,i.f)(e=>e.size.width),r=(0,i.f)(e=>e.size.height),n=(0,i.f)(e=>e.viewport.dpr),l=(0,i.f)(e=>e.invalidate),u=(0,t.useRef)(!1);return(0,t.useLayoutEffect)(()=>{u.current&&document.documentElement.dataset.caricamento&&(u.current=!1,e.current&&(e.current.style.visibility="hidden"),l())},[a,r,n,e,l]),(0,o.f)(()=>{if(u.current)return;u.current=!0;let a=e.current;a&&(a.style.visibility="");let t=document.documentElement,o=!t.dataset.telaVista;if(t.dataset.telaVista="1",!o||!t.dataset.caricamento||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let i={duration:1400,easing:"linear"};a?.animate([{opacity:0},{opacity:1}],i),document.querySelector("[data-grana-tela]")?.animate([{opacity:0},{opacity:.045}],i)},2),null},"U",0,function(){let[e,a]=(0,t.useState)(15e5);return(0,t.useEffect)(()=>{let e=()=>a(5e5*Math.round(window.innerWidth*window.innerHeight/5e5));return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e},"a",0,function(e,a){let[o,i]=(0,t.useState)(()=>u(e,a)),r=(0,t.useRef)("");return(0,t.useEffect)(()=>{let t=()=>{let t=`${window.innerWidth}x${window.innerHeight}@${window.devicePixelRatio||1}${a?"m":""}`,o=""!==r.current,n=o&&r.current!==t;r.current=t,(!o||n)&&i(u(e,a))};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e,a]),o}])},72020,e=>{var a=e.i(71645);let t="high",o=!1,i=!1,r=new Set;function n(){r.forEach(e=>e())}function l(e){return"high"===e?"mid":"low"}function u(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return"low";let e=900>Math.min(window.innerWidth,window.innerHeight)?"mid":"high",a=navigator,t=a.hardwareConcurrency,o=a.deviceMemory;return"number"==typeof t&&t>0&&t<=2&&(e=l(e)),"number"==typeof o&&o<=2&&(e=l(e)),e}function s(){o||(o=!0,t=u())}function c(e){return s(),r.add(e),!function(){let e,a,o;if(i)return;i=!0;let r=()=>{let e=u();e!==t&&(t=e,n())};window.matchMedia("(min-width:600px) and (min-height:600px)").addEventListener("change",r),window.matchMedia("(min-width:900px) and (min-height:900px)").addEventListener("change",r),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",r),"visible"===document.visibilityState&&"low"!==t&&(e=0,a=0,o=0,requestAnimationFrame(function i(r){if("visible"!==document.visibilityState)return;if(e<10){e++,requestAnimationFrame(i);return}0===o&&(o=r),a++;let l=r-o;if(a>=60||l>=1500){l>0&&(e=>{let a=t;e<24?a="low":e<40&&"high"===a&&(a="mid"),a!==t&&(t=a,n())})(a/l*1e3);return}requestAnimationFrame(i)}))}(),()=>r.delete(e)}function d(){return s(),t}function m(){return"high"}e.s(["f",0,function(){return(0,a.useSyncExternalStore)(c,d,m)}])},68194,e=>{var a=e.i(99121);let t=`
  vec3 tintaOmino(float filo, float cielo, float grana, float luce) {
    vec3 col = ${(0,a.s)("pietra",1.442)};
    col += cielo * ${(0,a.s)("avorio",.212)} * (0.5 + 0.5 * luce);
    col += step(0.94, grana) * ${(0,a.s)("pietra",1.381)};
    return mix(col, ${(0,a.s)("caldoChiaro",.924)}, clamp(filo * 0.95, 0.0, 1.0));
  }
`;e.s(["f",0,t])}])})();