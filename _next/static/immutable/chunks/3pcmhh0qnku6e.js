(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45443,e=>{"use strict";var t=e.i(43476),a=e.i(95682),o=e.i(71645),r=e.i(75056),i=e.i(25234),l=e.i(28600),n=e.i(90072),u=e.i(92901),c=e.i(33563),s=e.i(67678),p=e.i(16352),m=e.i(98076),d=e.i(72021),v=e.i(95399),f=e.i(59200),h=e.i(18958),x=e.i(99121),y=e.i(96756),M=e.i(19948),g=e.i(59640),w=e.i(42055),b=e.i(13094),S=e.i(51386),A=e.i(71931),E=e.i(9050);e.i(77417);var P=e.i(41243),I=e.i(70634),R=e.i(47970),j=e.i(99993),C=e.i(72238),z=e.i(90003);let T=new n.cE,k=new n.cE,L=()=>{},V={rx:3.3,ry:3.3,yc:3.22,a:4.1,b:5,c:1.25,cam:new n.cE(0,2.15,12.6),mira:new n.cE(0,2.95,0),fov:40,scala:1,omino:.95},O={rx:2.25,ry:2.25,yc:2.85,a:3,b:4.6,c:.6,cam:new n.cE(0,2.5,11.6),mira:new n.cE(0,3.05,0),fov:45,scala:1,omino:1.15},q={m:V},D={s:0,impulso:0,accensione:0,t:0,o:0,aperta:-1,g:0,apre:!1,onda:1,ondaDa:0,pa:new n.cE(0,3,5),ps:1,cambioT0:0,cambio:1,daCam:new n.cE,daGuarda:new n.cE,corre:!1},$=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
`,W=(0,x.s)("caldo",.075),F=`
  vec3 nebbia(vec3 col, float d) { return mix(col, ${W}, smoothstep(11.0, 34.0, d) * 0.92); }
`,N=(e,t,a)=>Math.PI/2+(e-t)/Math.max(1,a)*Math.PI*2;function _(e){let t=Math.atan2(Math.sin(e-Math.PI/2),Math.cos(e-Math.PI/2));return Math.exp(-(t*t)/.11)}function B(e,t){let a=q.m;return t.set(-(a.a*Math.sin(2*e)+a.c*Math.cos(e)),a.yc+-.3+.22*Math.cos(e)+.35*Math.min(0,Math.sin(e)),a.b*Math.sin(e)),t}let U=`
  varying vec3 vL;
  varying vec3 vN;
  varying vec3 vW;
  varying vec3 vNW;
  void main() {
    vL = position; vN = normal;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vW = w.xyz;
    vNW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,G=new n.cE,Z=new n.cE,H={};function Y({i:e,dato:a}){let r=(0,o.useMemo)(()=>new n.kG(2.4,1.35,.04),[]),u=(0,o.useMemo)(()=>({uImg:{value:null},uVid:{value:null},uHa:{value:0},uVidOn:{value:0},uLuce:{value:0},uSopra:{value:0},uAcc:{value:0},uImp:{value:0},uAsp:{value:16/9},uC:{value:new n.cE},uT:{value:0},uScuro:{value:0},uOnda:{value:1}}),[]),p=(0,o.useMemo)(()=>new n.Zg({uniforms:u,vertexShader:U,fragmentShader:`
  uniform sampler2D uImg;
  uniform sampler2D uVid;
  uniform float uHa, uVidOn, uLuce, uSopra, uAcc, uImp, uAsp, uT, uScuro, uOnda;
  uniform vec3 uC;
  varying vec3 vL;
  varying vec3 vN;
  varying vec3 vW;
  varying vec3 vNW;
  ${$}
  ${F}
  ${c.x}
  void main() {
    vec3 v = normalize(vW - cameraPosition);
    // l'ossidiana dei bordi e del retro, con la grana del sito
    vec3 col = ${(0,x.s)("pietra",.95)};
    vec2 gp = abs(vN.z) > 0.5 ? vL.xy : (abs(vN.x) > 0.5 ? vL.zy : vL.xz);
    col += step(0.97, hash(floor(gp * 160.0))) * ${(0,x.s)("pietra",1.3)};
    // il controluce dell'anello: gli spigoli che lo guardano prendono il caldo
    vec3 aC = normalize(uC - vW);
    float contro = pow(max(dot(vNW, aC), 0.0), 2.0);
    col += ${(0,x.s)("caldo",1)} * contro * 0.35 * uAcc;
    if (vN.z > 0.5) {
      vec2 uv = vL.xy / vec2(2.40, 1.35) + 0.5;
      float la = ${(2.4/1.35).toFixed(4)};
      vec2 uvI = uv;
      float dentro = 1.0;
      if (uAsp < 1.0) {
        // verticale: intera, al centro
        uvI.x = 0.5 + (uv.x - 0.5) * la / uAsp;
        dentro = step(0.0, uvI.x) * step(uvI.x, 1.0);
      } else if (uAsp > la) uvI.x = 0.5 + (uv.x - 0.5) * la / uAsp;
      else uvI.y = 0.5 + (uv.y - 0.5) * uAsp / la;
      // L'IMMAGINE COM'E': la texture non e' decodificata (niente sRGB) e qui
      // non si moltiplica: il valore letto e' quello del file.
      vec3 im = texture2D(uImg, clamp(uvI, 0.001, 0.999)).rgb;
      if (uVidOn > 0.0) im = mix(im, texture2D(uVid, clamp(uvI, 0.001, 0.999)).rgb, uVidOn);
      // la virata del blu verso il mondo del sito (lib/viraFoto)
      im = viraFoto(im, gl_FragCoord.xy);
      vec3 fuori = im * (0.17 + 0.83 * uLuce);
      col = mix(col, fuori, uHa * dentro);
      // la lama di luce sul vetro, in diagonale, ogni tredici secondi (Pensiero)
      float sd = uv.x * 0.8 + uv.y * 0.5;
      // L'ONDA DELL'ARRIVO: una lama larga passa sul vetro una volta, quando
      // la lastra aperta si posa (uOnda 0..1)
      if (uOnda > 0.0 && uOnda < 1.0) {
        float po = uOnda * 2.8 - 0.9;
        col += ${(0,x.s)("caldoChiaro",1)} * (exp(-pow((sd - po) / 0.06, 2.0)) * 0.22 + exp(-pow((sd - po) / 0.3, 2.0)) * 0.05) * sin(3.1416 * uOnda);
      }
      float pos = fract(uT / 13.0 + uImp * 0.0) * 2.6 - 0.7;
      col += ${(0,x.s)("avorio",1)} * (exp(-pow((sd - pos) / 0.045, 2.0)) * 0.05 + exp(-pow((sd - pos) / 0.22, 2.0)) * 0.008) * uLuce;
      // l'orlo prende la luce dell'anello, piu' forte dal suo lato e in scena
      float orlo = 1.0 - smoothstep(0.0, 0.016, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
      float lato = 0.5 + 0.5 * dot(normalize(aC.xy + 1e-4), normalize(uv - 0.5 + 1e-4));
      col += ${(0,x.s)("caldoChiaro",1)} * orlo * (0.05 + (0.12 + 0.16 * lato) * uLuce + uSopra * 0.15) * uAcc;
      // il vetro sopra: l'anello ci scorre come un riflesso, e il taglio radente
      vec3 r = reflect(v, vNW);
      float rifl = pow(max(dot(r, aC), 0.0), 24.0);
      col += ${(0,x.s)("caldoChiaro",1)} * rifl * 0.12 * uAcc;
      col += ${(0,x.s)("avorio",.75)} * pow(1.0 - abs(dot(v, vNW)), 5.0) * 0.08;
    }
    // le carte dietro nel mazzo e le lastre lasciate scendono nel buio
    col = mix(col, ${(0,x.s)("fondo",1)}, uScuro);
    float d = distance(vW, cameraPosition);
    col = nebbia(col, d);
    gl_FragColor = vec4(col, 1.0);
  }`}),[u]),m=(0,l.f)(e=>e.invalidate),d=(0,l.f)(e=>e.gl),f=(0,o.useRef)(null),y=(0,o.useRef)({x:0,y:0}),M=(0,o.useRef)(0),g=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=d.domElement,t=()=>{let e=g.current;if(!e)return;let t=new n.TS(e);t.generateMipmaps=!1,u.uVid.value=t,u.uVidOn.value=0};return e.addEventListener("webglcontextrestored",t),()=>e.removeEventListener("webglcontextrestored",t)},[d,u]),(0,o.useEffect)(()=>{var e;let t,o,r,i=(e=a.img,t=null,o=!1,fetch(e,{signal:(r=new AbortController).signal,priority:"low"}).then(e=>e.blob()).then(e=>createImageBitmap(e,{imageOrientation:"flipY"})).then(e=>{if(o)return void e.close();(t=new n.Sk(e)).flipY=!1,t.anisotropy=8,t.generateMipmaps=!0,t.needsUpdate=!0,u.uAsp.value=e.width/e.height;let a=()=>{!o&&t&&(d.initTexture(t),u.uImg.value=t,u.uHa.value=1,m())},r=window.requestIdleCallback;r?r(a,{timeout:1500}):window.setTimeout(a,0)}).catch(()=>{o||r.signal.aborted||(t=new n.H5().load(e,e=>{let t=e.image;t?.width&&t?.height&&(u.uAsp.value=t.width/t.height),o||(u.uImg.value=e,u.uHa.value=1,m())}))}),{dispose:()=>{if(o=!0,r.abort(),t){let e=t.image;e?.close?.(),t.dispose()}}});return()=>i.dispose()},[a.img,u,m,d]),(0,o.useEffect)(()=>()=>{let e=g.current;e&&(e.pause(),e.removeAttribute("src"),e.load()),u.uVid.value?.dispose()},[u]),(0,i.f)(({camera:t},o)=>{let r=f.current;if(!r)return;let i=Math.min(1/30,o),l=R.r.n,c=N(e,D.s,l),p=D.aperta===e;D.o<1||R.r.ridotto?M.current=+!!p:M.current=Math.max(0,Math.min(1,M.current+(p?1:-1)*i*1e3/R.D));let m=er(M.current),d=m+(1-m)*_(c)*(1-.85*D.o);B(c,G);let x=q.m,w=x.scala*(.78+.22*_(c));if(m<1&&D.o>0){let t=Math.max(1,l),a=Math.abs(e-Math.max(0,D.aperta))%t;a=Math.min(a,t-a)/(t/2);let o=er(Math.max(0,Math.min(1,(D.o-.32*a)/.68)))*(1-m);G.x*=1+.55*o,G.z-=4*o,G.y+=.25*Math.sin(Math.PI*o)}r.position.copy(G),Z.copy(t.position);let b=Math.atan2(Z.x-G.x,Z.z-G.z),S=R.r.mobile?0:-(.22*Math.cos(2*c))*(1-_(c)),A=+(R.r.sopra===e&&D.aperta<0),E=R.r.ridotto?1:(0,h.w)(.12,i);y.current.x+=((A?-(.16*R.r.sy):p?-(.05*R.r.py):0)-y.current.x)*E,y.current.y+=((A?.22*R.r.sx:p?.07*R.r.px:0)-y.current.y)*E;let P=R.r.ridotto?0:.035*Math.sin(.6*D.t+1.7*e);r.position.y+=P;let I=b+S,j=w;if(p){D.pa.copy(G),D.ps=w;let e=er(D.o);if(!R.r.ridotto){let t=D.t;r.position.y+=.016*Math.sin(.5*t)*e,I+=.014*Math.sin(.23*t)*e,y.current.x+=.01*Math.sin(.31*t+1)*e}j=w}if(r.rotation.set(y.current.x,I+y.current.y,0),r.scale.setScalar(j*(1+.04*u.uSopra.value)),u.uLuce.value=d,u.uScuro.value=0,u.uOnda.value=p?D.onda:1,u.uSopra.value+=(A-u.uSopra.value)*E,u.uAcc.value=D.accensione*(1+.3*D.impulso),u.uImp.value=D.impulso,u.uT.value=D.t,u.uC.value.set(0,x.yc,0),a.video&&!R.r.ridotto){let t,o=Math.abs(Math.atan2(Math.sin(c-Math.PI/2),Math.cos(c-Math.PI/2)))/(2*Math.PI/Math.max(1,l)),r=R.r.mobile?1.2:1.6,m=!document.hidden&&(0,v.E)()&&(p||o<r),d=g.current,f=Math.abs(Math.atan2(Math.sin(N(e,R.r.bersaglio,l)-Math.PI/2),Math.cos(N(e,R.r.bersaglio,l)-Math.PI/2)))/(2*Math.PI/Math.max(1,l)),x=R.r.mobile||(t=navigator.connection)&&(!0===t.saveData||/2g/.test(t.effectiveType??""))?.6:r+.6;if((p||o<x&&f<x)&&!d&&(0,C.l)()){(d=document.createElement("video")).muted=!0,d.loop=!0,d.playsInline=!0,d.preload="auto",d.setAttribute("muted",""),d.setAttribute("playsinline",""),d.src=(0,z.f)([a])[0]??a.video,g.current=d,H[a.slug]=d;let e=new n.TS(d);e.generateMipmaps=!1,u.uVid.value=e}if(d){m&&d.paused&&d.play().catch(()=>{}),m||d.paused||d.pause();let e=+!!(0,s.S)(d);u.uVidOn.value+=(e-u.uVidOn.value)*(0,h.w)(.08,i)}}}),(0,o.useEffect)(()=>{let t=f.current;return X[e]=t,()=>{X[e]===t&&(X[e]=null)}},[e]),(0,t.jsx)("mesh",{ref:f,geometry:r,material:p,userData:{lastra:e},onClick:t=>{t.delta>=("touch"===t.nativeEvent.pointerType?R.Y:8)||(t.stopPropagation(),R.r.aperto<0?(0,R.j)(e):R.r.aperto===e&&(0,R.y)())}})}window.__filmati=H;let X=[],K=new n.zx,Q=new n.wq,J=new n.cE,ee=new n.cE,et=new n.cE,ea=[],eo={visto:0},er=e=>(0,S.u)(Math.max(0,Math.min(1,e))),ei=(e,t)=>{let a=43758.5453*Math.sin(12.9898*e+78.233*t);return a-Math.floor(a)};function el({mobile:e}){let a=e?15:23,r=(0,o.useMemo)(()=>Array.from({length:a},(e,t)=>({r:.55+1.15*ei(t,1),a:ei(t,2)*Math.PI*2,w:(.025+.035*ei(t,3))*(ei(t,4)>.4?1:-1),passa:.34>ei(t,5),z:(ei(t,6)-.5)*7,ph:6.28*ei(t,7),giro:new n.cE(ei(t,8)-.5,ei(t,9)-.5,ei(t,10)-.5).multiplyScalar(.7),px:12+16*ei(t,11)})),[a]),l=(0,o.useRef)([]),u=(0,o.useRef)(new Float32Array(2*a)),c=(0,o.useRef)({r:[],letti:-1e9});return(0,i.f)(({camera:e,size:t},a)=>{let o=D.t,i=q.m,n=performance.now(),s=c.current;n-s.letti>120&&(s.letti=n,s.r=D.o>.01?Array.from(document.querySelectorAll("[data-riparo-portale]"),e=>e.getBoundingClientRect()).filter(e=>e.width>2&&e.height>2):[]);let p=t.width,m=t.height,d=(0,h.w)(h.X,Math.min(.05,a)),v=Math.tan(e.fov*Math.PI/360);r.forEach((t,a)=>{let r=l.current[a];if(!r)return;r.userData.satinato||(r.userData.satinato=!0,r.traverse(e=>{let t=e.material;t&&"clearcoat"in t&&(t.clearcoatRoughness=.5,t.clearcoat=.6,t.roughness=.55,t.envMapIntensity=.7)}));let n=t.a+o*t.w,c=i.rx*t.r,f=i.ry*t.r,h=t.passa?6*Math.sin(.05*o+t.ph):t.z+.4*Math.sin(.1*o+t.ph);r.position.set(Math.cos(n)*c,Math.max(.35,i.yc+Math.sin(n)*f*.92),h),r.rotation.set(t.giro.x*o,t.giro.y*o,t.giro.z*o);{G.copy(r.position).project(e);let o=(.5*G.x+.5)*p,i=(.5-.5*G.y)*m,l=m/(2*Math.max(.1,r.position.distanceTo(e.position))*v),n=1.1*t.px+6,c=0,f=0;if(G.z<1)for(let e of s.r){let t=e.left-n,a=e.top-n,r=e.right+n,l=e.bottom+n;if(o<=t||o>=r||i<=a||i>=l)continue;let u=o<(t+r)/2?t-o:r-o,s=i<(a+l)/2?a-i:l-i;(o<(t+r)/2?t>0:r<p)&&Math.abs(u)<Math.abs(s)?Math.abs(u)>Math.abs(c)&&(c=u):Math.abs(s)>Math.abs(f)&&(f=s)}let h=u.current;h[2*a]+=(c-h[2*a])*d,h[2*a+1]+=(f-h[2*a+1])*d,Math.abs(h[2*a])+Math.abs(h[2*a+1])>.3&&(Z.set(h[2*a]/l,-h[2*a+1]/l,0).applyQuaternion(e.quaternion),r.position.add(Z))}})}),(0,t.jsx)(t.Fragment,{children:r.map((e,a)=>(0,t.jsx)("group",{ref:e=>{l.current[a]=e},children:(0,t.jsx)(P.L,{px:e.px,rotazione:[0,0,0]})},a))})}function en({mobile:e}){let{geo:a,mat:r}=(0,o.useMemo)(()=>{let t=e?260:620,a=new Float32Array(4*t);for(let e=0;e<t;e++)for(let t=0;t<4;t++)a[4*e+t]=ei(e+7,t+13);let o=new n.ld;return o.setAttribute("position",new n.f5(new Float32Array(3*t),3)),o.setAttribute("aS",new n.f5(a,4)),{geo:o,mat:new n.Zg({transparent:!0,depthWrite:!1,blending:n.tq,uniforms:{uT:{value:0},uDpr:{value:1},uR:{value:new n.cE(3,3,3)},uAcc:{value:0}},vertexShader:`
        attribute vec4 aS;
        uniform float uT, uDpr, uAcc;
        uniform vec3 uR;
        varying float vA;
        void main() {
          vec3 B = vec3(uR.x * 2.0 + 6.0, uR.z + 4.0, 12.0);
          vec3 deriva = vec3(sin(uT * 0.07 + aS.w * 6.0) * 0.4, uT * (0.02 + aS.w * 0.03), sin(uT * 0.05 + aS.y * 5.0) * 0.5);
          vec3 p = mod(aS.xyz * B + deriva, B) - vec3(B.x * 0.5, 0.0, B.z * 0.55);
          p.y += 0.05;
          // quanto e' vicino al filo dell'anello: li' la polvere prende la luce
          vec2 q = vec2(p.x / uR.x, (p.y - uR.z) / uR.y);
          float d = abs(length(q) - 1.0) * min(uR.x, uR.y);
          vA = (exp(-d * 1.4) * 0.55 + 0.05) * exp(-abs(p.z) * 0.22) * (0.4 + aS.w * 0.6) * uAcc;
          vec4 mv = viewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (1.0 + aS.w * 1.8) * uDpr * clamp(7.0 / -mv.z, 0.4, 2.2);
        }`,fragmentShader:`
        varying float vA;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float a = 1.0 - smoothstep(0.1, 0.5, length(c));
          gl_FragColor = vec4(mix(${(0,x.s)("caldoChiaro",1)}, ${(0,x.s)("avorio",1)}, 0.5) * a * vA, 1.0);
        }`})}},[e]),u=(0,l.f)(e=>e.gl);return(0,i.f)(({clock:e})=>{r.uniforms.uT.value=R.r.ridotto?0:e.elapsedTime,r.uniforms.uDpr.value=u.getPixelRatio(),r.uniforms.uR.value.set(q.m.rx,q.m.ry,q.m.yc),r.uniforms.uAcc.value=D.accensione}),(0,t.jsx)("points",{geometry:a,material:r,frustumCulled:!1,renderOrder:20})}let eu={v:0},ec={};function es({mobile:e}){let a=(0,o.useRef)({k:0,kc:0,carta:0,cartaVista:0}),r=(0,o.useRef)(ec);ec.scala||Object.assign(ec,e?{x:0,y:2.5,scala:1.85,pianeta:1,caldo:0,peso:0,taglio:.3}:{x:0,y:1.6,scala:2.1,pianeta:1,caldo:0,peso:0,taglio:.4});let l=(0,o.useMemo)(()=>new n.cE,[]),u=(0,o.useRef)({v:0,picco:0,aperta:-1});return(0,i.f)((e,t)=>{let a=r.current,o=u.current;D.aperta!==o.aperta&&(D.aperta>=0&&!R.r.ridotto&&(o.picco=1),o.aperta=D.aperta);let i=Math.min(.05,t);o.picco*=Math.exp(-i/.45);let n=o.picco>o.v?1-Math.exp(-i/.16):1-Math.exp(-i/1.4);o.v+=(o.picco-o.v)*n,o.v<.002&&o.picco<.002&&(o.v=o.picco=0),eu.v=o.v,a.crepa=o.v;let c=R.r.ridotto?1:1+.06*Math.sin((0,v.B)()*(2*Math.PI/11e3));a.peso=D.accensione;let s=Math.PI/2+D.s/Math.max(1,R.r.n)*Math.PI*2;a.sole=l.set(.85*Math.cos(s),.6*Math.sin(s)+.15,-.55).normalize();let p=er(D.o);a.corona=(.75*c+.9*D.impulso+1.4*ep.L+.35*o.v)*D.accensione,a.scuro=.25+.6*p}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.b,{storyline:a,reduce:R.r.ridotto,leggero:e}),(0,t.jsx)("group",{position:[0,3.81,0],scale:3,children:(0,t.jsx)(w.f,{fisso:r,reduce:R.r.ridotto,mobile:e})})]})}let ep={t0:-1e9,seme:1,x:0,piccolo:!1,prossimo:0,L:0};function em(){let e=performance.now();R.r.ridotto||e-ep.t0<2500||Math.random()>.45||(ep.t0=e,ep.piccolo=!0,ep.seme=100*Math.random())}window.__lampo=ep;let ed=new n.cE,ev=new n.cE;function ef({mobile:e}){let a=(0,o.useMemo)(()=>new n.Zg({transparent:!0,depthWrite:!1,depthTest:!0,blending:n.tq,uniforms:{uL:{value:0},uS:{value:0},uImp:{value:0},uSeme:{value:1},uAsp:{value:1},uPx:{value:.0015},uCima:{value:new n.wq(.5,1.05)},uPiede:{value:new n.wq(.5,.5)}},vertexShader:`
      varying vec2 vUv;
      // in fondo a tutto: le lastre, i cubetti e l'omino gli passano davanti
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uL, uS, uImp, uSeme, uAsp, uPx;
      uniform vec2 uCima, uPiede;
      float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float rotto(float y, float s) {
        float a = 0.0, w = 0.5;
        for (int i = 0; i < 4; i++) {
          float i0 = floor(y), f = fract(y);
          a += w * mix(h(vec2(i0, s)), h(vec2(i0 + 1.0, s)), f);
          y = y * 2.31 + 3.7; w *= 0.5;
        }
        return a - 0.47;
      }
      void main() {
        vec2 q = vec2(vUv.x * uAsp, vUv.y);
        vec2 ci = vec2(uCima.x * uAsp, uCima.y), pi = vec2(uPiede.x * uAsp, uPiede.y);
        float cima = ci.y, piede = pi.y;
        float yy = q.y;
        float giu = clamp((cima - yy) / max(0.001, cima - piede), 0.0, 1.0);
        // il tronco va dalla cima al piede, rotto a zig-zag come nel Temporale
        float x0 = mix(ci.x, pi.x, giu);
        float amp = 0.035;
        float cx = x0 + rotto(yy * 7.0, uSeme) * amp * (1.0 - giu * 0.5) + rotto(yy * 29.0, uSeme + 4.0) * amp * 0.3;
        float d = abs(q.x - cx);
        float lungo = smoothstep(cima, cima - 0.06, yy) * step(piede, yy);
        float spes = uPx * mix(2.2, 1.1, giu);
        float fil = exp(-d / spes) * lungo;
        float alone = exp(-d / 0.03) * lungo * 0.8 + exp(-d / 0.12) * lungo * 0.22;
        float lato = sign(h(vec2(uSeme, 2.0)) - 0.5);
        float ramo = 0.0;
        for (int k = 0; k < 2; k++) {
          float fk = float(k);
          float yR = mix(cima, piede, 0.30 + 0.30 * fk);
          float lun = mix(0.22, 0.14, fk);
          float lk = lato * (fk > 0.5 ? -1.0 : 1.0);
          float t = clamp((yR - yy) / lun, 0.0, 1.0);
          float cxR = cx + (yR - yy) * (0.34 - 0.08 * fk) * lk + rotto(yy * 23.0, uSeme + 9.0 + fk * 5.0) * 0.022;
          float dentroR = step(yR - lun, yy) * step(yy, yR);
          ramo += exp(-abs(q.x - cxR) / (uPx * mix(1.0, 0.45, t))) * dentroR * (1.0 - t * t) * (0.9 - 0.3 * fk);
          float yS = yR - lun * 0.45;
          float cxS = cx + (yR - yS) * (0.34 - 0.08 * fk) * lk + (yS - yy) * 0.55 * lk;
          float tS = clamp((yS - yy) / (lun * 0.4), 0.0, 1.0);
          ramo += exp(-abs(q.x - cxS) / (uPx * 0.5)) * step(yS - lun * 0.4, yy) * step(yy, yS) * (1.0 - tS) * 0.45;
        }
        // la saetta (uS: lampo pieno, e l'impronta che resta col ramo)
        vec3 col = ${(0,x.s)("avorio",1)} * (fil * 2.2 + ramo * 0.9 + alone * 0.3) * uS;
        // dove tocca la luna: un punto acceso e un bagliore stretto
        vec2 dp = q - pi;
        col += ${(0,x.s)("avorio",1)} * (exp(-dot(dp, dp) / 0.0004) * 0.6 + exp(-dot(dp, dp) / 0.006) * 0.12) * uS;
        // il bagliore nelle nuvole dietro la cima (mai a tutto schermo)
        vec2 pc = (q - ci) / vec2(0.45, 0.16);
        col += ${(0,x.s)("avorio",.8)} * exp(-dot(pc, pc)) * uL * 0.22;
        gl_FragColor = vec4(min(col, vec3(0.85)), 1.0);
      }`}),[]),r=(0,o.useRef)(null);return(0,i.f)(({camera:t,size:o})=>{let i=performance.now();if(ep.prossimo||(ep.prossimo=i+6e3+8e3*Math.random()),i>ep.prossimo&&(ep.prossimo=i+6e3+8e3*Math.random(),!R.r.ridotto&&D.aperta<0&&D.accensione>=1&&(0,v.E)()&&!document.hidden)){ep.t0=i,ep.piccolo=!1,ep.seme=100*Math.random(),ep.x=(Math.random()-.5)*.3;let e=600+900*Math.random();window.setTimeout(()=>{(0,g.X)()&&(0,g.a)("tuono",.08,!0)},e)}let l=(i-ep.t0)/1e3,n=l<0||l>2?0:Math.exp(-l/.07)+.5*Math.exp(-Math.pow((l-.2)/.05,2));ep.piccolo&&(n*=.35);let u=ep.piccolo||l<0||l>2?0:Math.min(1,n+.18*Math.exp(-l/.9));ep.L=n;let c=r.current;if(!c||(c.visible=n>.002||u>.002,!c.visible))return;ed.set(3*ec.x,3*ec.y+3.81,-90).project(t);let s=(e?6:11)*.375*ec.scala*3;ev.set(3*ec.x,3*ec.y+3.81+s,-90).project(t);let p=.5*ed.x+.5,m=.5*ed.y+.5,d=.5*Math.abs(ev.y-ed.y),f=o.width/Math.max(1,o.height),h=-(ec.sole?.x??.9),x=-(ec.sole?.y??.2),y=Math.hypot(h,x)||1,M=a.uniforms,w=p+h/y*d*.6/f,b=Math.max(m+.35*d,m+x/y*d*.6);M.uPiede.value.set(w,b),M.uCima.value.set(w+.6*ep.x,1.05),M.uAsp.value=f,M.uPx.value=1.6/o.height,M.uSeme.value=ep.seme,M.uL.value=n,M.uS.value=u}),(0,t.jsx)("mesh",{ref:r,material:a,renderOrder:-700,frustumCulled:!1,visible:!1,raycast:()=>null,children:(0,t.jsx)("planeGeometry",{args:[2,2]})})}function eh({specchio:e=!1}){let a=(0,o.useMemo)(()=>new n.Zg({transparent:!0,depthWrite:!1,uniforms:{uPeso:{value:e?.22:1},uT:{value:0},uLuce:{value:1},uAlto:{value:.95}},vertexShader:`
      uniform float uAlto;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += vec2(position.x * 1.1 - 0.2, ((position.y + 0.5) * 2.05 - 0.45) * ${e?"-1.0":"1.0"}) * uAlto;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:A.f}),[e]),r=(0,o.useRef)(null);return(0,i.f)(({clock:t,camera:o,size:i})=>{if(a.uniforms.uT.value=R.r.ridotto?3:t.elapsedTime,a.uniforms.uAlto.value=q.m.omino,e||!r.current)return;let l=q.m.omino,n=r.current.getWorldPosition(k).project(o),u=Math.abs(T.set(0,l,0).applyQuaternion(o.quaternion).add(r.current.position).project(o).y-n.y)*i.height/2,c=(.5*n.x+.5)*i.width,s=(-(.5*n.y)+.5)*i.height;n.z<1?(0,M.C)(c-.25*u,s-1.05*u,.5*u,1.1*u):(0,M.k)()}),(0,o.useEffect)(()=>M.k,[]),(0,t.jsx)("mesh",{ref:r,material:a,position:[R.r.mobile?.1:.15,0,1.15],renderOrder:e?-1:10,frustumCulled:!1,children:(0,t.jsx)("planeGeometry",{args:[1,1]})})}let ex=new n.cE,ey=new n.cE,eM=new n.cE,eg=new n.cE,ew=new n.cE,eb=new n.cE,eS=new n.cE,eA=new n.cE,eE=new n.cE,eP=new n.cE,eI=new n.cE(0,1,0),eR=e=>e*e*(3-2*e)*.35+.65*(1-(1-e)**3);function ej(){(0,m.G)();let{size:e,invalidate:t}=(0,l.f)(),r=(0,o.useRef)(0),n=(0,f.o)(),u=(0,o.useRef)(-1),c=(0,o.useRef)(0),s=(0,o.useRef)({x:0,y:0}),p=(0,o.useRef)(!1),{gl:x,scene:M,camera:g}=(0,l.f)();return(0,o.useEffect)(()=>{let e=!1,t=window.setTimeout(()=>{(window.requestIdleCallback??(e=>window.setTimeout(e,0)))(()=>{if(e)return;let t=[];for(let e of(M.traverse(e=>{e.visible||(t.push(e),e.visible=!0)}),(0,j.f)(x,M,g).catch(()=>{}).finally(()=>{for(let e of t)e.visible=!1}),t))e.visible=!1})},2500);return()=>{e=!0,window.clearTimeout(t)}},[x,M,g]),(0,o.useEffect)(()=>{c.current=performance.now();let e=(0,d.I)(()=>{c.current=performance.now(),t()});R.r.sveglia=()=>{r.current||t()};let a=()=>{document.hidden||t()};document.addEventListener("visibilitychange",a);let o=(0,v.P)(()=>{r.current||t()});return()=>{o(),e(),R.r.sveglia=L,(0,y.f)(!1),document.removeEventListener("visibilitychange",a),(0,f.m)(r.current)}},[t]),(0,i.f)(({camera:t,clock:o},i)=>{let l=Math.min(1/30,Math.max(1/240,i)),m=e.width/Math.max(1,e.height)<.8;q.m=m?O:V;let d=q.m;D.t=R.r.ridotto?0:o.elapsedTime;let f=performance.now();D.accensione=R.r.ridotto?1:Math.min(1,Math.max(0,(f-c.current-150)/1600))**1.6,R.r.ridotto?D.s=R.r.bersaglio:(D.s+=(R.r.bersaglio-D.s)*(0,h.w)(2.2*h.X,l),1e-4>Math.abs(R.r.bersaglio-D.s)&&(D.s=R.r.bersaglio)),R.r.s=D.s;let x=(0,R.Z)(D.s,R.r.n);x!==u.current&&(u.current=x,R.r.suScena(x));let M=Math.abs(R.r.bersaglio-D.s)>.02;D.corre&&!M&&!R.r.ridotto&&D.aperta<0&&(D.impulso=1,em()),D.corre=M;let g=+(R.r.aperto>=0),w=D.o;D.apre=1===g,R.r.aperto>=0&&D.aperta>=0&&R.r.aperto!==D.aperta&&D.o>0&&(D.daCam.copy(t.position),D.daGuarda.copy(eP),D.cambioT0=f,D.cambio=+!!R.r.ridotto),D.cambio<1&&(D.cambio=Math.min(1,(f-D.cambioT0)/R.D),D.cambio>=1&&(D.ondaDa=f)),R.r.aperto>=0&&(D.aperta=R.r.aperto),R.r.ridotto?D.o=g:D.o=Math.max(0,Math.min(1,D.o+(g?1e3*l/R.D:-(1e3*l)/R.k))),0===D.o&&R.r.aperto<0&&(D.aperta=-1),D.apre&&w<.86&&D.o>=.86&&(D.ondaDa=f,R.r.suArrivo()),D.onda=R.r.ridotto?1:Math.min(1,(f-D.ondaDa)/1100);let b=D.apre&&D.o>.8&&!R.r.ridotto?1:0;E.s.v+=(b-E.s.v)*Math.min(1,l*(b?1.4:3)),E.s.v<.002&&!b&&(E.s.v=0),E.s.tx+=(R.r.px-E.s.tx)*(1-Math.exp(-(2.2*l))),E.s.ty+=(R.r.py-E.s.ty)*(1-Math.exp(-(2.2*l)));let S=R.r.aperto>=0&&R.r.grande?1:0;D.g+=(S-D.g)*(R.r.ridotto?1:(0,h.w)(2.4*h.X,l)),.001>Math.abs(S-D.g)&&(D.g=S),D.impulso*=Math.exp(-(1.6*l)),D.impulso<.002&&(D.impulso=0);let A=R.r.ridotto?1:1-Math.exp(-(2.5*l));s.current.x+=(R.r.px-s.current.x)*A,s.current.y+=(R.r.py-s.current.y)*A,ex.copy(d.cam).add(eM.set(s.current.x*(m?.2:.5),.18*s.current.y,0)),ey.copy(d.mira),t.fov!==d.fov&&(t.fov=d.fov,t.updateProjectionMatrix()),((t.view?.offsetY??0)!==0||0)&&t.clearViewOffset();let P=R.r.entra;if(P&&f>P.t0){let e=Math.min(1,(f-P.t0)/R.p),a=e*e*(3-2*e);B(Math.PI/2,eM),ex.lerp(eg.copy(eM).setZ(eM.z+.35),a),ey.lerp(eM.setZ(0),Math.min(1,1.4*a)),t.fov=d.fov+8*Math.sin(Math.PI*a),t.updateProjectionMatrix(),e>.82&&!p.current&&(p.current=!0,R.r.dentro(P.i))}else p.current=!1;if(D.o>0&&D.aperta>=0){let a=e.width/Math.max(1,e.height),o=a<.9,r=er(D.g),i=D.ps,l=Math.max(1.35*i/((o?.34:.6)+((o?.6:.82)-(o?.34:.6))*r),2.4*i/(a*((o?.86:.4)+((o?.96:.86)-(o?.86:.4))*r))),n=l/2/Math.tan(d.fov*Math.PI/360);if(ew.copy(ex).sub(D.pa).setY(0).normalize(),eb.crossVectors(eI,ew).normalize(),eS.copy(D.pa).addScaledVector(eb,-(.22*!o*(1-r))*l*a),eS.y-=(o?.25:.02)*(1-r)*l,eA.copy(eS).addScaledVector(ew,n),eE.copy(ex).lerp(eA,.55),eE.y+=.75,D.cambio<1&&D.apre){let e=eR(D.cambio),a=1-e;eE.copy(D.daCam).lerp(eA,.55).addScaledVector(ew,.9*n),eE.y+=.22,t.position.set(0,0,0).addScaledVector(D.daCam,a*a).addScaledVector(eE,2*a*e).addScaledVector(eA,e*e),eP.copy(D.daGuarda).lerp(eS,Math.min(1,1.3*e)),t.fov=d.fov+6*Math.sin(Math.PI*e)}else{let e,a=D.apre?eR(D.o):(e=D.o)*e*e*(e*(6*e-15)+10),o=1-a;t.position.set(0,0,0).addScaledVector(ex,o*o).addScaledVector(eE,2*o*a).addScaledVector(eA,a*a),eP.copy(ey).lerp(eS,D.apre?Math.min(1,1.3*a):a),t.fov=d.fov+Math.sin(Math.PI*a)*(10*!R.r.ridotto)}t.updateProjectionMatrix(),t.lookAt(eP)}else t.fov!==d.fov&&(t.fov=d.fov,t.updateProjectionMatrix()),t.position.copy(ex),t.lookAt(ey);t.updateMatrixWorld(),function(e,t){let a=-1;if(R.r.mouse&&R.r.aperto<0&&!R.r.entra){for(let t of(Q.set(R.r.px,R.r.py),K.setFromCamera(Q,e),ea.length=0,X))t&&t.raycast(K,ea);let t=1/0;for(let e of ea)e.distance<t&&(t=e.distance,a=e.object.userData.lastra)}a>=0&&(eo.visto=t);let o=R.r.sopra;a>=0?o=a:R.r.sopra>=0&&(t-eo.visto>140||!R.r.mouse||R.r.aperto>=0)&&(o=-1),o!==R.r.sopra&&(R.r.sopra=o,R.r.suSopra(o)),(0,y.f)(R.r.sopra>=0);let r=o>=0?X[o]:null;if(r){J.copy(r.position).project(e),et.setFromMatrixColumn(e.matrixWorld,0).multiplyScalar(1.2*r.scale.x),ee.copy(r.position).add(et).project(e);let t=Math.max(.001,Math.abs(ee.x-J.x)),a=1.35/2.4*t*(e.aspect??1);R.r.sx=Math.max(-1,Math.min(1,(R.r.px-J.x)/t)),R.r.sy=Math.max(-1,Math.min(1,(R.r.py-J.y)/a))}}(t,f),D.aperta>=0&&(0,a.k)(X[D.aperta],t,e.width,e.height);let I=!!P||f-R.r.gesto<4e3||f-c.current<3e3||Math.abs(R.r.bersaglio-D.s)>1e-4||D.impulso>0||D.o>0&&D.o<1||D.cambio<1||D.g>0&&D.g<1||D.onda<1||ep.L>.002||f-ep.t0<2100||eu.v>0;!document.hidden&&(R.r.ridotto?I:I||(0,v.E)())&&!r.current&&n(r,18*!I)}),null}let eC=(0,o.memo)(function({lastre:e,pronta:a}){let i=(0,o.useMemo)(()=>window.matchMedia("(pointer: coarse)").matches||window.innerWidth<760,[]);return((0,o.useEffect)(()=>{D.s=R.r.ridotto?R.r.bersaglio:R.r.bersaglio-2.5},[]),(0,p.f)())?(0,t.jsxs)(r.f,{frameloop:"demand",dpr:(0,u.A)(i?2:1.5),camera:{position:[0,2.15,12.6],fov:40,near:.05,far:400},gl:{antialias:(0,u.D)(),alpha:!1,powerPreference:"high-performance"},style:{background:I.f},onCreated:()=>requestAnimationFrame(a),children:[(0,t.jsx)("color",{attach:"background",args:[I.f]}),(0,t.jsx)(ej,{}),(0,t.jsx)(f.f,{}),(0,t.jsx)(f.r,{}),(0,t.jsx)(es,{mobile:i}),e.map((e,a)=>(0,t.jsx)(Y,{i:a,dato:e},e.slug)),(0,t.jsx)(el,{mobile:i}),(0,t.jsx)(P.K,{forza:.75}),(0,t.jsx)(eh,{}),(0,t.jsx)(ef,{mobile:i}),(0,t.jsx)(en,{mobile:i}),!R.r.ridotto&&(0,t.jsx)(E.k,{mobile:i})]}):null});e.s(["default",0,eC,"lampoLontano",0,em])}]);