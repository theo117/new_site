(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4180,e=>{"use strict";var a=e.i(43476),t=e.i(3587),o=e.i(57325),i=e.i(71645),l=e.i(16352),r=e.i(9444),n=e.i(45588),s=e.i(72439),c=e.i(8855),m=e.i(99121);let u=e=>`vec3(${e.map(e=>e.toFixed(4)).join(", ")})`,d=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRis;      // la tela in pixel veri
uniform vec2 uCss;      // la tela in pixel css
uniform vec2 uCam;      // dove guarda la tela, in pixel di schermo
uniform float uZoom;
uniform float uT;

const vec3 SOLE = ${u(s.U)};
const vec3 FREDDO = ${u(s.j)};
const vec3 BORDO = ${u(s.d)};
const vec3 FONDO = ${u([7/255,7/255,7/255])};

float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec2 h22(vec2 p) { float n = h21(p); return vec2(n, h21(p + n)); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float rumore(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// il rilievo della piana della home: quattro ottave
float quota(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int o = 0; o < 4; o++) { s += rumore(p) * a; p *= 2.07; a *= 0.5; }
  return s;
}
// le stelle della home: una per cella, poche, piccolissime, pochissime grandi
float stelle(vec2 p, float soglia) {
  vec2 c = floor(p), f = fract(p) - 0.5;
  vec2 o = h22(c) - 0.5;
  float s = step(soglia, h21(c + 3.1));
  float g = h21(c + 7.7);
  float r = 0.035 + g * g * g * 0.09;
  float a = 0.55 + 0.45 * sin(uT * 0.6 + g * 6.283);
  return s * a * smoothstep(r, r * 0.12, length(f - o * 0.7));
}
void main() {
  vec2 q = gl_FragCoord.xy / uRis * uCss;
  q.y = uCss.y - q.y;
  vec2 cen = q - 0.5 * uCss;
  float z = 1.0 + (uZoom - 1.0) * 0.3;

  // ── IL CIELO: il fondo del sito e le stelle della home ──────────────────
  vec3 col = FONDO;
  vec2 s1 = (cen / z + uCam * 0.04) / 11.0, s2 = (cen / z + uCam * 0.09) / 19.0;
  col += ${(0,m.s)("avorio",1.023)} * (stelle(s1, 0.95) * 0.45 + stelle(s2, 0.93) * 0.7);

  // ── IL PIANETA DELLA HOME, VISTO DA VICINO: il bordo in basso ────────────
  float R = max(uCss.x, uCss.y) * 1.25 / z;
  // il bordo a tre quarti dello schermo: si vede l'orizzonte, come nella home
  vec2 pc = vec2(0.0, uCss.y * 0.24 + R) + vec2(-uCam.x * 0.02, -uCam.y * 0.015);
  vec2 d = (cen / z - pc) / R;
  d.y = -d.y;            // y in alto, come SOLE
  float r = length(d);
  float a = 0.0;
  vec3 pcol = FREDDO;
  if (r < 1.0) {
    vec3 n = vec3(d, sqrt(1.0 - r * r));
    float lam = max(0.0, dot(n, SOLE));
    float limbo = pow(lam, 9.0);
    float mezzaluna = pow(lam, 3.2) * 0.05;
    // la superficie: la grana della piana, che scorre col trascinamento
    vec2 sp = vec2(atan(n.x, n.z) * 9.0 + uCam.x * 0.004, asin(clamp(n.y, -1.0, 1.0)) * 9.0 - uCam.y * 0.003);
    float h = quota(sp), e = 0.05;
    float hx = quota(sp + vec2(e, 0.0)), hz = quota(sp + vec2(0.0, e));
    vec3 nn = normalize(n + vec3((h - hx) / e, (h - hz) / e, 0.0) * 0.08);
    float cresta = pow(max(0.0, dot(nn, SOLE)), 2.6);
    float m = rumore(d * 7.0 + 4.0) * 0.6 + rumore(d * 17.0) * 0.4;
    float sup = 0.72 + 0.28 * m;
    a = (limbo * 0.85 + mezzaluna) * sup + cresta * 0.05 + rumore(sp * 6.0) * 0.012;
    pcol = mix(FREDDO, BORDO, limbo);
    // il corpo copre le stelle: e' un buco nel cielo
    col = FONDO * 0.8;
    // il filo d'atmosfera sul lato illuminato, appena dentro il bordo
    a += smoothstep(0.93, 1.0, r) * pow(lam, 3.0) * 0.40;
  }
  col += pcol * a * 0.34 * 1.6;
  // fuori: un filo d'atmosfera appena oltre il bordo, solo verso il sole
  vec2 dn = d / max(r, 1e-4);
  float lit = max(0.0, dot(vec3(dn, 0.0), SOLE));
  col += BORDO * exp(-max(0.0, r - 1.0) * 40.0) * step(1.0, r) * pow(lit, 2.0) * 0.12;
  // LA FOSCHIA DI PROFONDITA' (10 ottobre): sopra l'orizzonte l'aria del
  // pianeta si allunga verso il sole, larga e debolissima. Da' distanza fra
  // le foto (davanti) e il cielo (lontano). Solo nel fondo: le foto stanno su
  // un'altra tela e non hanno patina.
  col += BORDO * exp(-max(0.0, r - 1.0) * 5.0) * step(1.0, r) * pow(lit, 1.4) * 0.04;

  // la grana delle lastre del sito
  col += (h21(floor(q)) - 0.5) * 0.008;
  gl_FragColor = vec4(col, 1.0);
}`;function f(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let a=e.current,t=(0,l.f)()?a.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"low-power"}):null;if(!t)return;let o=(e,a)=>{let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o},i=null,s=null,c=null,m=null,u=null,f=()=>{let e=t.createProgram();if(t.attachShader(e,o(t.VERTEX_SHADER,"attribute vec2 aP; void main() { gl_Position = vec4(aP, 0.0, 1.0); }")),t.attachShader(e,o(t.FRAGMENT_SHADER,d)),t.linkProgram(e),!t.getProgramParameter(e,t.LINK_STATUS))return t.isContextLost()||console.warn("terreno:",t.getProgramInfoLog(e)),!1;t.useProgram(e);let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let l=t.getAttribLocation(e,"aP");return t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),i=t.getUniformLocation(e,"uRis"),s=t.getUniformLocation(e,"uCss"),c=t.getUniformLocation(e,"uCam"),m=t.getUniformLocation(e,"uZoom"),u=t.getUniformLocation(e,"uT"),!0};if(!f())return;let h=()=>{f()};a.addEventListener("webglcontextrestored",h);let v=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=0,x=0,g=()=>{p=window.innerWidth,x=window.innerHeight;let e=Math.min(.5*Math.min(window.devicePixelRatio||1,2),Math.sqrt(11e5/Math.max(1,p*x)));a.width=Math.max(1,Math.round(p*e)),a.height=Math.max(1,Math.round(x*e)),t.viewport(0,0,a.width,a.height),R(performance.now())},w=20,A=0,b=-1,E=0,O=0;function R(e){t.uniform2f(i,a.width,a.height),t.uniform2f(s,p,x),t.uniform2f(c,r.V.x*r.V.scala,r.V.y*r.V.scala),t.uniform1f(m,r.V.zoom),t.uniform1f(u,w),t.drawArrays(t.TRIANGLES,0,3)}let C=e=>{let a=v?0:(0,n.e)(),t=r.V.mossa!==b,o=A?Math.min(.1,(e-A)/1e3):1/30;if(!t&&e-A<32)return!0;w+=o*a;let i=Math.min(1,Math.hypot(r.V.vx,r.V.vy)/45);return O+=(i-O)*Math.min(1,4*o),A=e,b=r.V.mossa,R(e),!(0,n.m)()&&(a>0||!!t||O>.01)||(A=0,!1)},L=e=>{E=0,!n.G.tela&&C(e)&&(E=requestAnimationFrame(L))};n.G.terreno=e=>{E&&(cancelAnimationFrame(E),E=0),C(e)&&!n.G.tela&&(E=requestAnimationFrame(L))};let F=()=>{E||n.G.tela||(E=requestAnimationFrame(L))};return window.addEventListener("tela-lavori-mossa",F),g(),E=requestAnimationFrame(L),window.addEventListener("resize",g),()=>{cancelAnimationFrame(E),n.G.terreno=null,a.removeEventListener("webglcontextrestored",h),window.removeEventListener("resize",g),window.removeEventListener("tela-lavori-mossa",F),window.setTimeout(()=>{a.isConnected||t.getExtension("WEBGL_lose_context")?.loseContext()},0)}},[]),(0,a.jsx)("canvas",{ref:e,className:c.default.terreno,"aria-hidden":!0})}var h=e.i(99487),v=e.i(70703),p=e.i(2412),x=e.i(72238),g=e.i(18566);let w=(0,v.default)(()=>(0,p.p)().then(e=>e.CubettiTela),{ssr:!1}),A=!1;e.s(["MondoLavori",0,function({children:e}){(0,i.useLayoutEffect)(()=>(A=!0,delete document.documentElement.dataset.caricamento,()=>{A=!1}),[]);let l=(0,x.z)(),r=/\/(progetti|work)(\/[^/]+)?\/?$/.test((0,g.usePathname)()??"");return(0,a.jsxs)(a.Fragment,{children:[!r&&(0,a.jsx)("div",{className:c.default.mondo,"aria-hidden":!0,children:(0,a.jsx)(f,{})}),(0,a.jsx)(t.T,{navigate:e=>window.location.assign(e),fuoriCasa:!0}),(0,a.jsx)(o.VoceAudio,{}),e,(0,a.jsx)("div",{className:c.default.mondoSopra,"aria-hidden":!0,children:l&&!r&&(0,a.jsx)(h.f,{children:(0,a.jsx)(w,{})})}),(0,a.jsx)("div",{className:c.default.ombraTesta,"aria-hidden":!0})]})},"mondoGiaVivo",0,()=>A],4180)},72439,e=>{"use strict";var a=e.i(67013),t=e.i(99121);let o=(e,a,t)=>{let o=Math.hypot(e,a,t);return[e/o,a/o,t/o]},i=o(.94,.26,.21),l=o(.22,.13,-1),r=a.x.caldo,n=(0,t.w)("caldo",1.04),s=(0,t.w)("caldoChiaro",1.075),c=(0,t.w)("caldo",.934),m=(0,t.w)("avorio",.487),u=(0,t.w)("avorio",.538),d=(0,t.w)("caldo",.853);e.s(["d",0,c,"o",0,r,"P",0,s,"D",0,n,"q",0,u,"j",0,m,"k",0,d,"U",0,i,"R",0,l])},90890,e=>{e.v(a=>Promise.all(["static/immutable/chunks/04vdq9v23i59t.js","static/immutable/chunks/04817ivb2-l7u.js","static/immutable/chunks/3t0fskl6h0w14.js","static/immutable/chunks/0j9-8n8_65nxt.js","static/immutable/chunks/0uavtlu2ztscc.js"].map(a=>e.l(a))).then(()=>a(80890)))},91334,e=>{e.v(a=>Promise.all(["static/immutable/chunks/13jwksu7d30vz.js"].map(a=>e.l(a))).then(()=>a(82162)))},65940,e=>{e.v(a=>Promise.all(["static/immutable/chunks/2k9ogqmm845_p.js"].map(a=>e.l(a))).then(()=>a(62637)))}]);