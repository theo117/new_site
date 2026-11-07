(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[70634,e=>{let t=e.i(99121).d;e.s(["f",0,t])},36999,e=>{var t=e.i(43476),a=e.i(71645),o=e.i(75056),r=e.i(25234),i=e.i(28600),n=e.i(90072);e.i(77417);var l=e.i(70634),s=e.i(41243),c=e.i(13094),u=e.i(42055),f=e.i(77157),m=e.i(68366),d=e.i(98076),p=e.i(95399),h=e.i(59200),v=e.i(16352),g=e.i(92901),x=e.i(70599),w=e.i(99121),M=e.i(59640),y=e.i(17732),b=e.i(76214);e.i(49686);var C=e.i(32093),E=e.i(61896);let T=Math.tan(n.rB.degToRad(21)),D=(e,t)=>{let a=43758.5453*Math.sin(12.9898*e+78.233*t);return a-Math.floor(a)},z=(e,t,a)=>n.rB.smoothstep(a,e,t),j=[[0,.32],[.62,-.28],[1.22,.5],[1.85,-.12],[2.45,.36],[3.05,-.42]],L={granelli:[],nata:[-1,-1,-1,-1,-1,-1],spenta:[-1e9,-1e9,-1e9,-1e9,-1e9,-1e9],invio:-1,passo:-1,muove:!1,ultima:-1,ultimaT:-1e9},R={giro:0,giroV:0,vibra:0,tasto:-1e9,entrata:0,px:0,py:0,mx:0,my:0,d:{cx:0,cy:0,r:1,mano:!1}};function P(e,t,a=R.giro){let[o,r]=j[e],i=o+a,n=Math.sin(i)*Math.cos(r),l=Math.sin(r),s=Math.cos(i)*Math.cos(r)<0?1/Math.max(.001,Math.hypot(n,l)):1;return[t.cx+R.px+n*s*t.r*.96,t.cy+R.py-l*s*t.r*.96]}let S=null,k=`
  uniform vec2 uSchermo;
  uniform float uDpr;
  uniform vec3 uDisco;
  uniform float uGiro;
  uniform float uT;
  uniform float uLuci[6];
  uniform vec3 uCentri[6];
  uniform float uVibra;
  uniform float uCorona;
  uniform float uPeso;
  uniform float uCrepe;
  uniform float uBrace;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
  void main() {
    vec2 px = vec2(gl_FragCoord.x, uSchermo.y * uDpr - gl_FragCoord.y) / uDpr;
    vec2 d = (px - uDisco.xy) / uDisco.z;
    d.y = -d.y;
    float ang = atan(d.y, d.x);
    // la corona vibra coi tasti: il bordo trema di un niente
    float r = length(d) * (1.0 - uVibra * 0.006 * sin(ang * 23.0 + uT * 40.0));
    if (r > 1.25) discard;
    float rc = min(r, 1.0);
    vec3 n = normalize(vec3(d / max(r, 1e-4) * rc, sqrt(max(0.0, 1.0 - rc * rc))));
    float disco = smoothstep(1.0, 1.0 - fwidth(r) * 1.5 - 1e-4, r);
    // la sfera girata: il punto della superficie, fermo sul pianeta
    float cg = cos(-uGiro), sg = sin(-uGiro);
    vec3 l = vec3(cg * n.x + sg * n.z, n.y, -sg * n.x + cg * n.z);
    float lon = atan(l.x, l.z), lat = asin(clamp(l.y, -1.0, 1.0));
    // la luce: dall'alto a sinistra, appena dietro. La faccia verso di te e' in ombra
    vec3 sole = normalize(vec3(-0.72, 0.6, -0.2));
    float lr = dot(n, sole);
    float ter = smoothstep(-0.1, 0.6, lr);
    vec2 s = vec2(lon * 2.2, lat * 2.2);
    float macchie = rumore(s * 3.0 + 2.0) * 0.6 + rumore(s * 7.0) * 0.4;
    vec2 gc = vec2(lon * 70.0, lat * 70.0);
    float grana = hash(floor(gc)) * step(length(fract(gc) - 0.5), 0.22);
    float albedo = 0.5 + 0.3 * macchie;
    vec3 col = ${(0,w.s)("avorio",.62)} * ter * albedo * 0.32;
    // la falce d'avorio, sfumata
    float falce = pow(max(0.0, lr), 3.0) * smoothstep(0.45, 1.0, rc);
    // (5 novembre 2026) la falce prende le macchie della superficie: era una luce liscia su niente
    col += mix(${(0,w.s)("avorio",.62)}, ${(0,w.s)("caldo",1)}, 0.25) * falce * 0.55 * (0.62 + 0.76 * macchie);
    // l'ossidiana: il lucido di una lampada davanti in alto a destra, e le
    // scintille della grana che lo prendono
    vec3 rif = reflect(vec3(0.0, 0.0, -1.0), n);
    float lucido = pow(max(0.0, dot(rif, normalize(vec3(0.62, 0.62, 0.48)))), 90.0);
    col += ${(0,w.s)("avorio",.62)} * lucido * 0.16;
    float scintilla = step(0.93, grana) * (0.5 + 0.5 * sin(uT * 0.9 + grana * 60.0));
    col += ${(0,w.s)("avorio",.62)} * scintilla * (0.05 + 0.25 * ter) * smoothstep(0.2, 0.95, rc);
    // LE REGIONI ACCESE: luci calde a celle ferme sulla sfera, che emergono
    // dal centro della regione verso fuori. Al centro del disco (dove si
    // legge) restano basse: piene solo verso il bordo
    float leggi = mix(0.22, 1.0, smoothstep(0.55, 0.95, rc));
    vec2 cella = vec2(lon * 26.0, lat * 26.0);
    vec2 ci = floor(cella), cf = fract(cella) - 0.5;
    float hc = hash(ci + 7.0), hp = hash(ci + 31.0);
    vec2 off = vec2(hash(ci + 3.0), hash(ci + 5.0)) - 0.5;
    float punto = exp(-dot(cf - off * 0.6, cf - off * 0.6) * 38.0);
    float citta = 0.0, velo = 0.0;
    float crepa = 0.0;
    vec2 ll = vec2(lon, lat);
    // un pixel, in angolo sulla sfera (le derivate dentro il ciclo non valgono)
    float pxAng = 1.0 / (uDisco.z * max(n.z, 0.5));
    for (int k = 0; k < 6; k++) {
      float q = uLuci[k];
      if (q <= 0.0) continue;
      vec3 c = uCentri[k];

      float an = acos(clamp(dot(l, c), -1.0, 1.0));
      // la forma della regione: non un cerchio, una costa mossa
      float bordo = 0.5 + 0.18 * (rumore(vec2(lon, lat) * 4.0 + float(k) * 9.0) - 0.5) * 2.0;
      float w = 1.0 - smoothstep(bordo * 0.55, bordo, an);
      // emerge: prima il centro, poi fuori
      float emersa = step(an / bordo, q * 1.15);
      citta += w * emersa * step(1.0 - 0.42 * w, hc) * (0.55 + 0.45 * hp);
      velo += w * q;
      // LE CREPE dell'invio: lungo la costa della regione accesa la pietra si
      // spacca, una linea spezzata, sottile al pixel; si aprono dal centro del
      // disco verso fuori
      if (uCrepe > 0.0) {
        float an2 = an + 0.045 * (rumore(ll * 16.0 + vec2(float(k) * 3.7)) - 0.5);
        float dd = abs(an2 - bordo * 0.86);
        float fw = pxAng;
        // il filo della frattura, e la luce che filtra appena ai lati
        float lin = 1.0 - smoothstep(0.0, fw * 1.6, dd);
        lin += 0.22 * (1.0 - smoothstep(fw * 1.6, fw * 5.0, dd));
        float rotta = step(0.26, rumore(ll * 7.0 + vec2(float(k) * 5.0)));
        crepa += lin * rotta * (1.0 - crepa);
      }
    }
    float apre = smoothstep(rc - 0.08, rc, uCrepe * 1.1);
    col += mix(${(0,w.s)("caldo",1)}, ${(0,w.s)("caldoChiaro",1)}, 0.4) * crepa * apre * uBrace * mix(0.12, 1.0, smoothstep(0.55, 0.95, rc));
    float giorno = 0.35 + 0.65 * (1.0 - ter);
    col += mix(${(0,w.s)("caldo",1)}, ${(0,w.s)("caldoChiaro",1)}, 0.35) * punto * citta * 1.6 * leggi * giorno;
    col += ${(0,w.s)("caldo",1)} * velo * 0.09 * leggi;
    // LA CORONA d'avorio sul bordo, come le lastre di /progetti; all'invio
    // si accende di caldo
    float fres = pow(1.0 - n.z, 4.0) * disco;
    vec3 tCor = mix(${(0,w.s)("avorio",.62)}, ${(0,w.s)("caldo",1.041)}, uCorona);
    col += tCor * fres * (0.22 + 0.25 * uCorona + 0.2 * uVibra);
    float fuori = (1.0 - disco) * exp(-pow((r - 1.0) / (0.035 + 0.04 * uCorona), 2.0));
    vec3 alone = tCor * fuori * (0.32 + 0.4 * uCorona + 0.25 * uVibra);
    vec3 luce = (col * disco + alone) * uPeso;
    gl_FragColor = vec4(luce, disco * uPeso);
  }`;function A({ridotto:e}){let o=(0,i.f)(e=>e.size),l=(0,i.f)(e=>e.gl),s=(0,a.useRef)(-1),c=(0,a.useMemo)(()=>new n.Zg({depthTest:!1,depthWrite:!1,blending:n.UM,blendSrc:n.Vt,blendDst:n.oL,uniforms:{uSchermo:{value:new n.wq(1,1)},uDpr:{value:1},uDisco:{value:new n.cE},uGiro:{value:0},uT:{value:0},uLuci:{value:[0,0,0,0,0,0]},uCentri:{value:j.map(([e,t])=>new n.cE(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)))},uVibra:{value:0},uCorona:{value:0},uPeso:{value:0},uCrepe:{value:0},uBrace:{value:0}},vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:k}),[]),u=(0,a.useMemo)(()=>new n.CQ(2,2),[]);return(0,r.f)(({clock:t},a)=>{let r=o.width,i=o.height,n=Math.min(.05,a),u=performance.now(),f=t.elapsedTime,m=(0,b.T)(r,i);R.d=m,s.current<0&&(s.current=u);let d=e?1:Math.min(1,(u-s.current)/1400),h=e?1:1-Math.exp(-(3*n)),v=e?0:R.mx*m.r*.025,g=e?0:R.my*m.r*.02;R.px+=(v-R.px)*h,R.py+=(g-R.py)*h;let x=Math.min(6,Math.max(0,L.passo)),w=x>0?.62-j[x-1][0]:.35,M=L.invio,y=e?0:.06*Math.sin(.04*f)+(M>=0?-((u-M)/1e3*.03):0),C=R.giro;R.giroV+=(w-R.giroV)*(e?1:1-Math.exp(-(.9*n))),R.giro=R.giroV+y,R.vibra*=e?0:Math.exp(-(4*n));let E=c.uniforms;E.uSchermo.value.set(r,i),E.uDpr.value=l.getPixelRatio(),E.uDisco.value.set(m.cx+R.px,m.cy+R.py,m.r),E.uGiro.value=R.giro,E.uT.value=e?0:f,E.uVibra.value=R.vibra,E.uPeso.value=d;let T=E.uLuci.value;for(let t=0;t<6;t++){let a=L.nata[t];T[t]=a<0?0:e?1:z(0,1.8,(u-a)/1e3),a>=0&&u-a<1900&&(L.muove=!0)}E.uCorona.value=M<0?0:e?1:z(1.4,3.4,(u-M)/1e3);let D=M<0?-1:(u-M)/1e3;E.uCrepe.value=D<0?0:e?1:z(1.6,4,D);let P=.26+.07*Math.sin((0,p.B)()/1e3*(2*Math.PI/11));E.uBrace.value=D<0?0:e?.26:P+.74*Math.exp(-Math.max(0,D-4)/1.4)*z(1.6,2.1,D),(d<1||Math.abs(C-R.giro)>1e-4||R.vibra>.01||Math.abs(v-R.px)>.3||Math.abs(g-R.py)>.3)&&(L.muove=!0),M>=0&&(u-M)/1e3<3.6&&(L.muove=!0)}),(0,t.jsx)("mesh",{geometry:u,material:c,renderOrder:-1,frustumCulled:!1})}let F=`
  attribute vec2 aDati;
  uniform vec2 uSchermo;
  uniform float uDpr;
  varying float vA;
  void main() {
    vA = aDati.x;
    gl_Position = vec4(position.x / uSchermo.x * 2.0 - 1.0, 1.0 - position.y / uSchermo.y * 2.0, 0.0, 1.0);
    gl_PointSize = aDati.y * uDpr;
  }`;function q(){let e=(0,i.f)(e=>e.size),o=(0,i.f)(e=>e.gl),l=(0,a.useMemo)(()=>{let e=new Float32Array(2340),t=new Float32Array(1560),a=new n.ld;a.setAttribute("position",new n.f5(e,3)),a.setAttribute("aDati",new n.f5(t,2));let o=new n.Zg({transparent:!0,depthTest:!1,depthWrite:!1,blending:n.tq,uniforms:{uSchermo:{value:new n.wq(1,1)},uDpr:{value:1}},vertexShader:F,fragmentShader:`
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = (1.0 - smoothstep(0.1, 0.5, d)) * vA;
          gl_FragColor = vec4(mix(${(0,w.s)("caldo",1)}, ${(0,w.s)("caldoChiaro",1)}, 0.5) * a, 1.0);
        }`});return{gPos:e,gDati:t,gGeo:a,gMat:o,punti:new n.sy(a,o)}},[]);return(0,r.f)(({clock:t})=>{let a=e.width,r=e.height,i=performance.now(),n=t.elapsedTime;l.gMat.uniforms.uSchermo.value.set(a,r),l.gMat.uniforms.uDpr.value=o.getPixelRatio();let s=!1,c=L.invio,u=L.granelli;for(let e=u.length-1;e>=0;e--){let t=u[e],a=(i-t.t0)/1e3,o=L.nata[t.k];(t.cenere?a>1.8:o>=0&&(i-o)/1e3>.8&&o>t.t0+270||a>90||c>=0)&&u.splice(e,1)}let f=R.d,m=0;for(let e of u){let[t,a]=P(e.k,f,.62-j[e.k][0]);for(let o=0;o<3;o++){let c,u,f,d=(i-e.t0)/1e3-.045*o;if(e.cenere){let t=Math.max(0,d)/1.8,a=e.seme*Math.PI*2;c=e.x0+30*Math.cos(a)*t,u=e.y0+20*Math.sin(a)*t+40*t*t,f=(1-t)*.9*(0===o?1:.35),s=!0}else{let l=6+14*D(100*e.seme,3),m=6.283*e.seme+n*(.25+.3*D(100*e.seme,4)),p=t+Math.cos(m)*l,h=a+Math.sin(m)*l*.6,v=Math.min(1,Math.max(0,d/1.35));if(v<1){s=!0;let t=v*v*(3-2*v),a=(e.x0+p)/2+(D(100*e.seme,5)-.5)*80,i=Math.min(e.y0,h)-r*(.06+.05*D(100*e.seme,6));c=(1-t)*(1-t)*e.x0+2*(1-t)*t*a+t*t*p,u=(1-t)*(1-t)*e.y0+2*(1-t)*t*i+t*t*h,f=(0===o?1:.6/o)*Math.min(1,8*d)}else c=p,u=h,f=.6*(0===o);let g=L.nata[e.k];if(g>=0&&g>e.t0){let e=z(0,.7,(i-g)/1e3);c+=(t-c)*e,u+=(a-u)*e,f*=1-e,e<1&&(s=!0)}}d<0&&(f=0),m<780&&(l.gPos[3*m]=c,l.gPos[3*m+1]=u,l.gPos[3*m+2]=0,l.gDati[2*m]=f,l.gDati[2*m+1]=3.2+1.4*D(100*e.seme,7)-.5*o,m++)}}l.gGeo.setDrawRange(0,m),l.gGeo.attributes.position.needsUpdate=!0,l.gGeo.attributes.aDati.needsUpdate=!0,s&&(L.muove=!0)}),(0,t.jsx)("primitive",{object:l.punti,renderOrder:901,frustumCulled:!1})}function B(e,t,a,o,r,i){i.set(e/a*2-1,1-t/o*2,.5).unproject(r);let n=i.x-r.position.x,l=i.y-r.position.y,s=i.z-r.position.z,c=-r.position.z/s;return i.set(r.position.x+n*c,r.position.y+l*c,0)}let V=[[1.3,1.1],[1.62,1.32],[1.95,1.55]],$=[[1.4,.93],[1.6,1],[1.85,1.06]];function O({ridotto:e}){let o=(0,i.f)(e=>e.size),l=(0,i.f)(e=>e.camera),s=(0,a.useRef)([]),c=(0,a.useRef)(!1),u=(0,a.useRef)(new Float32Array(23)),f=(0,a.useRef)(null),{geo:d,mat:p,p:h,c:v,q:g}=(0,a.useMemo)(()=>({geo:(0,m.h)(m.L,m.L,m.g),mat:(0,m.U)(),p:new n.cE,c:new n.cE,q:new n.cE}),[]);return(0,r.f)(({clock:t},a)=>{let r=o.width,i=o.height,d=Math.min(.05,a),p=R.d,w=L.invio,y=w<0?-1:(performance.now()-w)/1e3;w<0&&(c.current=!1);let b=e?0:t.elapsedTime,C=8.2*T/i,E=p.r*(p.mano?.36:.34),j=E/9*C,P=j/m.K;B(p.cx+R.px,p.cy+R.py+p.r*(p.mano?-.45:.46),r,i,l,v);let S=w<0?0:e?1:z(1,2.2,y);f.current&&(f.current.position.set(v.x+E*C*.8,v.y+E*C,E*C*1.6),f.current.intensity=8*S);let k=e?0:.05*Math.sin(.3*t.elapsedTime),A=Math.cos(k),F=Math.sin(k),q=Math.min(6,Math.max(0,L.passo)),O=0;for(let t=0;t<23;t++){let a,o=s.current[t];if(!o)continue;let c=t%3,f=Math.floor(t/3),M=2===c?7:8,E=t<4*q?p.mano?.04:.1:0,[T,z]=(p.mano?$:V)[c],S=(T-E)*p.r,G=(z-.8*E)*p.r,I=[.05,-.035,.025][c]*(1+.08*q),_=f/M*Math.PI*2+.7*c+b*I+.05*Math.sin(.07*b+t),U=Math.cos(_)*S,W=Math.sin(_)*G,K=p.mano?1:.9872272833756269,N=p.mano?0:-.15931820661424598,X=p.cx+1.6*R.px+U*K-W*N,Q=p.cy+1.6*R.py+U*N+W*K;B(X,Q,r,i,l,h);let Z=Math.sin(_);h.z+=.25*Z;let H=p.r*(p.mano?.07:.075)*C/m.L*(.7+.45*D(t,6))*(.85+.2*Z);Math.hypot((R.mx+1)*.5*r-X,(R.my+1)*.5*i-Q)<Math.max(36,.12*p.r)&&!e&&u.current[t]<.2&&(u.current[t]=1),u.current[t]*=Math.exp(-(1.2*d)),u.current[t]>.01&&(L.muove=!0);let Y=u.current[t]>.01?(1-u.current[t])*Math.PI:0,J=b*(.12+.1*D(t,3))+t,ee=b*(.08+.1*D(t,4))+2*t+Y,et=.3*D(t,5),[ea,eo]=x.i[t];g.set(v.x+ea*j*A,v.y+eo*j,-ea*j*F+.05);let er=w<0?0:e?1:n.rB.clamp((y-.4-.045*t)/1.5,0,1),ei=n.rB.smootherstep(er,0,.55);if(er<.55)a=1.4*Math.sin(er/.55*Math.PI/2);else if(er<.85){let e=(er-.55)/.3;a=1.4*(1-e*e)}else{let e=(er-.85)/.15;a=.1*Math.sin(e*Math.PI)*(1-e)}er<=0&&(a=0);let en=1-n.rB.smootherstep(er,0,.6);o.position.set(h.x+(g.x-h.x)*ei,h.y+(g.y-h.y)*ei+a*j,h.z+(g.z-h.z)*ei),o.rotation.set(J*en,ee*en+k*(1-en),et*en),o.scale.setScalar(H+(P-H)*ei),er>=1&&O++}w>=0&&O<23&&(L.muove=!0),w>=0&&23===O&&!c.current&&(c.current=!0,(0,M.X)()&&!e&&y<10&&(0,M.a)("urto-finale",.85,!1,0,.72))}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("pointLight",{ref:f,color:w.t.caldo,intensity:0,distance:14,decay:1.2}),x.i.map((e,a)=>(0,t.jsx)("mesh",{ref:e=>{s.current[a]=e},geometry:d,material:p},a))]})}function G({ridotto:e}){return(0,a.useEffect)(()=>{L.granelli=[],L.passo=-1,L.invio=-1,L.nata=[-1,-1,-1,-1,-1,-1];let t=t=>{"mouse"===t.pointerType&&(R.mx=t.clientX/window.innerWidth*2-1,R.my=t.clientY/window.innerHeight*2-1,e||y.D.sveglia())};if(window.addEventListener("pointermove",t,{passive:!0}),e)return()=>window.removeEventListener("pointermove",t);let a=0,o=e=>{let t=e.target;if(!t||!t.classList?.contains("pt-campo")||e.inputType&&!e.inputType.startsWith("insert"))return;R.vibra=Math.min(1,R.vibra+.5),R.tasto=performance.now();let o=Math.min(4,Math.max(1,(e.data??"x").length)),r=Math.min(5,Math.max(0,y.D.passo)),[i,n]=function(e){let t=e.getBoundingClientRect(),a=getComputedStyle(e);S||(S=document.createElement("canvas").getContext("2d"));let o=t.left+parseFloat(a.paddingLeft||"0");if(S){S.font=a.font;let r=e.value.slice(0,e.selectionEnd??e.value.length).split("\n").pop()??"",i=t.width-parseFloat(a.paddingLeft||"0")-parseFloat(a.paddingRight||"0"),n=S.measureText(r).width+r.length*(parseFloat(a.letterSpacing)||0);o+=i>0?n%i:n}return[Math.min(o,t.right),t.top+Math.min(t.height,28)/2]}(t);for(let e=0;e<o&&L.granelli.length<260;e++)L.granelli.push({x0:i,y0:n,t0:performance.now()+30*e,k:r,seme:a++%997/997+7e-4,cenere:!1});y.D.sveglia()};return document.addEventListener("input",o,!0),()=>{document.removeEventListener("input",o,!0),window.removeEventListener("pointermove",t)}},[e]),(0,r.f)(()=>{let t=y.D.passo;if(t===L.passo)return;let a=performance.now(),o=L.passo<0,r=Math.min(6,Math.max(0,t));for(let t=0;t<6;t++){let i=L.nata[t]>=0;if(t<r&&!i){if(L.nata[t]=o?-1e9+1:a,!o){if(L.ultima=t,L.ultimaT=a,L.granelli.filter(e=>e.k===t&&!e.cenere).length<6&&!e&&y.D.riga.t>0)for(let e=0;e<8;e++)L.granelli.push({x0:y.D.riga.x-9*e,y0:y.D.riga.y,t0:a-742.5+20*e,k:t,seme:D(t,e),cenere:!1});(0,M.X)()&&!e&&(0,M.a)("tasto",.75,!1,0,.62+.05*t)}}else if(t>=r&&i&&(L.nata[t]=-1,L.spenta[t]=a,!e)){let[e,o]=P(t,R.d);for(let r=0;r<14;r++)L.granelli.push({x0:e,y0:o,t0:a,k:t,seme:D(t+7,r),cenere:!0})}}t>=7&&L.invio<0&&(L.invio=o?a-1e5:a),t<7&&(L.invio=-1),L.passo=t,L.muove=!0}),null}let I=(0,E.n)();function _({mano:e,ridotto:o}){let n=(0,i.f)(e=>e.invalidate);return(0,a.useEffect)(()=>(I.sveglia=()=>n(),I.ridotto=o,I.controluce=0,I.seduto=0,I.verso=0,I.guardaSu=0,R.entrata=performance.now(),()=>{I.sveglia=()=>{}}),[o,n]),(0,r.f)(({size:e})=>{let t,a=e.height,r=R.d,{alto:i,x:n,piedi:l}=(t=r.mano?Math.max(48,.065*a):Math.min(.21*a,.5*r.r),{alto:t,x:r.mano?r.cx+.44*r.col:r.cx+1.42*r.r,piedi:r.mano?U.hz+4:U.hz+(a-U.hz)*.42});I.omino.w=i,I.omino.h=i,I.omino.x=n-i/2,I.omino.y=l-i;let s=performance.now(),c=L.invio,u=c<0?-1:(s-c)/1e3,f=o?1:.06,m=c<0&&L.ultima>=0&&s-L.ultimaT<2600&&s-L.ultimaT>250,d=I.saluta,p=s-Math.max(R.tasto,L.ultimaT,R.entrata),h=+(c<0&&!m&&s-R.tasto<4e3),v=o?1:.035,g=I.seduto,x=I.guardaSu;if(I.seduto+=(h-I.seduto)*v,I.guardaSu+=((c<0&&!m&&p>2e4)-I.guardaSu)*v*.6,I.rotta=0,(Math.abs(g-I.seduto)>.002||Math.abs(x-I.guardaSu)>.002)&&(L.muove=!0),I.saluta+=((u>=2.6&&u<8)-I.saluta)*f,m){let[e,t]=P(L.ultima,r);Object.assign(I.puntatore,{x:e,y:t,dentro:!0,t:s})}else u>=0&&u<2.4?Object.assign(I.puntatore,{x:r.cx,y:r.cy+r.r*(r.mano?-.45:.46),dentro:!0,t:s}):Object.assign(I.puntatore,{x:n,y:l-.88*i,dentro:!0,t:s});(Math.abs(d-I.saluta)>.002||m)&&(L.muove=!0)}),(0,t.jsx)(C.w,{posa:"in-piedi",mobile:e,quanti:e?9e3:16e3,stato:I})}let U={hz:0};function W({ridotto:e,fissoRef:t}){let o=(0,a.useRef)(-1),i=(0,a.useMemo)(()=>new n.cE,[]);return(0,r.f)(({size:a,camera:r})=>{let l=a.height,s=R.d,c=Math.min(.97*l,s.cy+s.r*(s.mano?.97:.8)),u=n.rB.clamp(Math.atan(-(1-c/l*2)*T)-Math.atan(1.27/74),-.1,.36);r.rotation.set(u,0,0),r.updateMatrixWorld(),i.set(0,-1.27,-70).project(r),U.hz=(1-(.5*i.y+.5))*l,o.current<0&&(o.current=performance.now());let f=t.current;f.peso=e?1:Math.min(1,(performance.now()-o.current)/1500),f.pianeta=0;let m=L.invio;f.caldo=m<0?0:e?1:z(1.4,3.4,(performance.now()-m)/1e3),f.peso<1&&(L.muove=!0)}),null}function K({ridotto:e}){let t=(0,i.f)(e=>e.invalidate),o=(0,h.o)(),n=(0,a.useRef)(0),l=(0,a.useRef)(0);return(0,a.useEffect)(()=>{l.current=performance.now(),y.D.sveglia=()=>{n.current||t()},(0,b.y)();let e=window.setTimeout(()=>{(0,b.y)(),t()},900),a=()=>{(0,b.y)(),t()};window.addEventListener("resize",a),window.visualViewport?.addEventListener("resize",a);let o=(0,p.P)(()=>{n.current||t()}),r=()=>{document.hidden||n.current||t()};return document.addEventListener("visibilitychange",r),()=>{o(),document.removeEventListener("visibilitychange",r),clearTimeout(e),window.removeEventListener("resize",a),window.visualViewport?.removeEventListener("resize",a),n.current&&clearTimeout(n.current),n.current=0,y.D.sveglia=()=>{}}},[t]),(0,r.f)(()=>{let t=performance.now()-l.current<2600||L.muove||!e&&(0,p.E)();L.muove=!1,!t||document.hidden||n.current||o(n,33)}),null}function N({pronta:e}){let r=window.innerWidth<700,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=(0,a.useRef)({k:0,kc:0,carta:0,cartaVista:0}),m=(0,a.useRef)({v:1,q:1,pronta:!0}),p=(0,a.useRef)({x:0,y:40,scala:1,pianeta:0,caldo:0,peso:0,taglio:0});return(0,t.jsxs)(o.f,{className:"pt-tela",frameloop:"demand",dpr:(0,g.A)(1.5),camera:{position:[0,0,4.1],fov:42,near:.05,far:200},gl:{antialias:(0,g.D)(),alpha:!1,powerPreference:"high-performance"},style:{background:l.f},"aria-hidden":!0,children:[(0,t.jsx)("color",{attach:"background",args:[l.f]}),(0,t.jsx)(h.f,{}),(0,t.jsx)(K,{ridotto:i}),(0,t.jsx)(G,{ridotto:i}),(0,t.jsx)(W,{ridotto:i,fissoRef:p}),(0,t.jsx)(c.b,{storyline:n,reduce:i,leggero:r}),(0,t.jsx)(u.f,{fisso:p,reduce:i,mobile:r}),(0,t.jsx)(A,{ridotto:i}),!r&&(0,t.jsx)(f.f,{storyline:n,reduce:i,intro:m}),(0,t.jsx)(s.K,{forza:1}),(0,t.jsx)("directionalLight",{position:[-4,2.5,3],intensity:1,color:w.t.avorio}),(0,t.jsx)("directionalLight",{position:[3,1.5,-4],intensity:1.6,color:w.t.caldo}),(0,t.jsx)(O,{ridotto:i}),(0,t.jsx)(q,{}),(0,t.jsx)(_,{mano:r,ridotto:i}),(0,t.jsx)(d.o,{pronto:e})]})}e.s(["default",0,function({pronta:e}){return(0,v.f)()?(0,t.jsx)(N,{pronta:e}):null}])},98076,e=>{var t=e.i(71645),a=e.i(25234),o=e.i(28600),r=e.i(11007),i=e.i(68366);function n(e=4e3,l){let s=(0,o.f)(e=>e.gl),c=(0,o.f)(e=>e.scene),u=(0,o.f)(e=>e.camera),f=(0,o.f)(e=>e.invalidate),m=(0,t.useRef)(!1),d=(0,t.useRef)(!1),p=(0,t.useRef)({lenti:0,prossimo:0}),h=(0,t.useRef)(l);(0,t.useEffect)(()=>{h.current=l}),(0,t.useEffect)(()=>{let t=(0,r.C)(e),a=!0,o=()=>{},n=()=>{a&&!m.current&&(m.current=!0,f())},l=window.setTimeout(n,e),d=requestAnimationFrame(()=>requestAnimationFrame(async()=>{performance.mark("tela:compila");let e=(0,i.M)(s,c,u);if(o=e.libera,await Promise.race([Promise.resolve(e.lavoro).catch(()=>void 0),new Promise(e=>setTimeout(e,2500))]),performance.mark("tela:compilata"),a){try{c.traverse(e=>{let t=e.material;for(let e of Array.isArray(t)?t:t?[t]:[])for(let t of Object.values(e))t&&t.isTexture&&t.image&&s.initTexture(t)})}catch{}performance.mark("tela:texture"),n(),t(),window.dispatchEvent(new Event("tela-compilata"))}}));return()=>{a=!1,cancelAnimationFrame(d),clearTimeout(l),t(),o()}},[s,c,u,e,f]),(0,a.f)(e=>{if(!m.current||e.gl.getContext().isContextLost())return;let t=performance.now();if(t<p.current.prossimo)return;try{e.gl.render(e.scene,e.camera)}catch{return}let a=performance.now()-t,o=p.current;if(o.lenti=a>100?o.lenti+1:0,o.lenti>=2&&(o.prossimo=t+5*a),!d.current){d.current=!0,performance.mark("tela:disegnata");let e=h.current;e&&requestAnimationFrame(()=>e())}},1)}e.s(["o",0,function({tetto:e,pronto:t}){return n(e,t),null},"G",0,n])},59200,e=>{var t=e.i(71645),a=e.i(28600),o=e.i(95399);e.s(["r",0,function(){let e=(0,a.f)(e=>e.gl),r=(0,a.f)(e=>e.invalidate);return(0,t.useLayoutEffect)(()=>{let t;return t=e.render,e.render=function(a,i){return(0,o.C)()&&null===e.getRenderTarget()?void r():t.call(this,a,i)},()=>{e.render=t}},[e,r]),null},"f",0,function(){let e=(0,a.f)(e=>e.clock);return(0,t.useLayoutEffect)(()=>(0,o.m)(e),[e]),null},"m",0,function(e){e<0?(0,o.Q)(e):e&&window.clearTimeout(e)},"o",0,function(){let e=(0,a.f)(e=>e.advance),r=(0,a.f)(e=>e.invalidate),i=(0,t.useRef)(!0);return(0,t.useEffect)(()=>(i.current=!0,()=>{i.current=!1}),[]),(0,t.useCallback)((t,a)=>{if((0,o.R)()>2500&&!(0,o.g)()){t.current=(0,o.k)(a=>{t.current=0,i.current&&e(a)});return}t.current=window.setTimeout(()=>{t.current=0,r()},a)},[e,r])}])}],18167,function(e){e.n(e.i(36999))}]);