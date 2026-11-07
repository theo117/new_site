(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89705,13634,65997,76864,35118,48230,7761,e=>{"use strict";let a,o,t,i,r,l;var n=e.i(43476),s=e.i(71645),c=e.i(75056),u=e.i(16352),p=e.i(92901),m=e.i(68366),f=e.i(91809);function d(){let e=(0,f.k)();return(0,f.U)(e)}let h=0,v=new WeakMap,x=null,g=new WeakSet;function M(){h++}function b(e){x||((x=new ResizeObserver(M)).observe(document.body),window.addEventListener("resize",M),window.addEventListener("load",M),document.fonts?.ready.then(M,()=>void 0)),g.has(e)||(g.add(e),x.observe(e));let a=v.get(e);if(!a||a.gen!==h){let o=e.getBoundingClientRect();a={top:o.top+window.scrollY,h:o.height,gen:h},v.set(e,a)}return a}function y(e){let a=b(e),o=a.top-d();return{top:o,bottom:o+a.h,height:a.h}}function w(e){let a=e.parentElement;if(!a)return y(e);let o=b(a),t=b(e),i=d(),r=Math.min(Math.max(o.top-i,0),o.top+o.h-t.h-i);return{top:r,bottom:r+t.h,height:t.h}}e.s(["I",0,y,"b",0,w,"X",0,d],13634);var z=e.i(90072),L=e.i(90003),S=e.i(25234),A=e.i(28600),q=e.i(18958),C=e.i(99121),P=e.i(67013),R=e.i(97939);let E=[{parola:"Entropia",en:"Entropy",divisore:"/banda/entropia.webp",largo:1.54},{parola:"Chiarezza",en:"Clarity",divisore:"/banda/occhio.webp",largo:2},{parola:"Materia",en:"Matter",divisore:"/banda/mano.webp",largo:1.16},{parola:"Sistema",en:"System",divisore:"/banda/cervello.webp",largo:1.03},{parola:"Ordine",en:"Order",divisore:"/banda/ordine.webp",largo:.36}],T={largo:74,stretto:40};function O(){let e=document.createElement("span");e.style.fontSize="var(--tipo-grande)",e.style.position="absolute",e.style.visibility="hidden",document.body.appendChild(e);let a=parseFloat(getComputedStyle(e).fontSize)||64;return e.remove(),a}let I=[11.5,13.2,9.8,12.4,10.6];async function F(e){let a,o,t={aspetto:1,lastre:[]},i=e.getContext("2d");if(!i)return t;let r=`600 128px ${((a=document.createElement("span")).style.fontFamily=P.v,a.style.position="absolute",a.style.visibility="hidden",document.body.appendChild(a),o=getComputedStyle(a).fontFamily,a.remove(),o||"sans-serif")}`,l="en"===(0,R.K)();try{await document.fonts.load(r,l?"ENTROPYCLARITYMATTERSYSTEMORDER":"ENTROPIACHIAREZZAMATERIASISTEMAORDINE")}catch{}let n=await Promise.all(E.map(e=>{var a;return a=e.divisore,new Promise(e=>{let o=new Image;o.onerror=()=>e(null),o.src=a,o.decode().then(()=>e(o),()=>e(o.complete&&o.naturalWidth?o:null))})})),s=e=>{e.font=r,e.textBaseline="middle";try{e.letterSpacing=`${-2.56}px`}catch{}};s(i);let c=192,u=E.map(e=>{let a=(l?e.en:e.parola).toUpperCase();return{testo:a,lw:e.largo*c,tw:i.measureText(a).width}}),p=Math.ceil(u.reduce((e,a)=>e+a.lw+38.4+a.tw+140.8,0));e.width=p,e.height=256;let m=e.getContext("2d");if(!m)return t;let f=[];s(m),m.clearRect(0,0,p,256);let d=70.4;return u.forEach((e,a)=>{let o=n[a];if(o){let a=Math.min(e.lw/o.naturalWidth,c/o.naturalHeight),t=o.naturalWidth*a,i=o.naturalHeight*a,r=d+e.lw/2,l=m.createRadialGradient(r,128,0,r,128,.6*Math.max(t,i));l.addColorStop(0,(0,C.L)(.14)),l.addColorStop(1,(0,C.L)(0)),m.fillStyle=l,m.fillRect(r-t,128-i,2*t,2*i);let n=document.createElement("canvas");n.width=Math.max(1,Math.round(2*t)),n.height=Math.max(1,Math.round(2*i));let s=n.getContext("2d");s&&(s.filter="grayscale(1) brightness(2.1) contrast(1.15)",s.drawImage(o,0,0,n.width,n.height),f.push({tela:n,u:r/p,w:t/256,h:i/256}))}d+=e.lw+38.4,m.shadowColor=(0,C.G)("forte"),m.shadowBlur=44.8,m.fillStyle=C.t.avorio,m.fillText(e.testo,d,133.12),m.shadowBlur=0,d+=e.tw+140.8}),{aspetto:p/256,lastre:f}}e.s(["L",0,function(e){return null},"Y",0,E,"f",0,I,"x",0,2,"w",0,T,"o",0,O,"W",0,F],65997);var N=e.i(95399);let k=["/banda/visione/raggi.webp","/banda/visione/eclissi.webp","/banda/visione/mani.webp","/banda/visione/figura-sospesa.webp","/banda/visione/figura-polvere.webp","/banda/visione/vortice.webp","/banda/visione/via-lattea.webp"],D=m.d.z*Math.tan(m.d.fov*Math.PI/360),$=.55*D,_=.45*D,U=2*Math.PI*.75/(2*D*1.6),j={raggio:$,kappa:U};function V(e){return e?{raggio:$/2.2,kappa:2.2*U,corsa:1.9*6,passi:Math.round(988*2.2)}:{raggio:$,kappa:U,corsa:6,passi:520}}let B=Math.sqrt(1+$*$*U*U),W=1.6*_,G=W+.03,Z=G*k.length,H=8*Math.ceil(8192*_/Z/8),X={gruppo:null,attivo:0,coda:0,testa:0},Y=new z.cE,Q=new z.cE,J=new z.cE,K=new z.cE,ee=new z.cE,ea=new z.cE,eo=(e,a,o)=>{let t=Math.max(0,Math.min(1,(o-e)/(a-e)));return t*t*(3-2*t)};function et(e){return new Promise(a=>{let o=new Image;o.onerror=()=>a(null),o.src=e,o.decode().then(()=>a(o),()=>a(o.complete&&o.naturalWidth?o:null))})}function ei(e){return"function"!=typeof createImageBitmap?et(e):fetch(e).then(e=>e.ok?e.blob():Promise.reject(e)).then(e=>createImageBitmap(e)).catch(()=>et(e))}function er(){return new Promise(e=>{let a=window;a.requestIdleCallback?a.requestIdleCallback(()=>e(),{timeout:200}):setTimeout(e,16)})}async function el(e,a,o){let t=await Promise.all(k.map(ei)),i=[],r=e.width/8192,l=8192/Z,n=W*l;for(let[o,s]of[[e,!1],[a,!0]]){let e=o.getContext("2d");if(e){e.setTransform(r,0,0,r,0,0),e.clearRect(0,0,8192,H);for(let a=0;a<t.length;a++){let o=t[a];if(!o)continue;await er(),void 0===i[a]&&(i[a]=function(e){let a=document.createElement("canvas");a.width=32,a.height=20;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)return!1;o.drawImage(e,0,0,32,20);let t=o.getImageData(0,0,32,20).data,i=0;for(let e=0;e<t.length;e+=4)i+=t[e]+t[e+1]+t[e+2];return i/(t.length/4)/3>128}(o));let r=a*G*l+.03*l;e.save(),s&&(e.translate(2*r+n,0),e.scale(-1,1));let c=o.width/o.height,u=n/H,p=o.width,m=o.height,f=0,d=0;c>u?(p=o.height*u,f=(o.width-p)/2):(m=o.width/u,d=(o.height-m)/2),e.drawImage(o,f,d,p,m,r,0,n,H),i[a]&&(e.fillStyle=(0,C.G)("leggero"),e.fillRect(r,0,n,H)),e.strokeStyle=C.t.avorio32,e.lineWidth=2,e.strokeRect(r+1,1,n-2,H-2),e.restore()}}}await o()}function en(e,a){let o=document.createElement("canvas"),t=Math.min(1,a/8192);o.width=Math.floor(8192*t),o.height=Math.max(8,Math.round(H*t));let i=new z.Nk(o);return i.colorSpace=z.nj,i.wrapS=z.Jr,i.wrapT=z.Jr,i.anisotropy=Math.min(8,e),{canvas:o,tex:i}}function es(e,a){return o=>{(0,m.S)(.12)(o),o.uniforms.uCoda=e,o.uniforms.uTesta=a,o.vertexShader=o.vertexShader.replace("varying vec3 vSpecklePos;","varying vec3 vSpecklePos;\nvarying float vLungo;\nvarying float vLargo;").replace("vSpecklePos = position;","vSpecklePos = position;\nvLungo = uv.x;\nvLargo = uv.y;"),o.fragmentShader=o.fragmentShader.replace("varying vec3 vSpecklePos;","varying vec3 vSpecklePos;\nvarying float vLungo;\nvarying float vLargo;\nuniform float uCoda;\nuniform float uTesta;").replace("#include <map_fragment>",`
        if (vLungo < uCoda || vLungo > uTesta) discard;
        vec4 tela = texture2D(map, vMapUv);
        float sottoVetro = tela.a;
        // 0,35 → 0,62: sotto il vetro il fotogramma perdeva due terzi della
        // luce e restava una macchia scura in una striscia scura, cioe'
        // ancora ossidiana. La pietra si vede dove NON c'e' immagine.
        // Il 2 ottobre lo schermo si accende: meno colore riflesso (0,45) e
        // piu' luce propria (l'emissivo sale a 0,9 nel materiale), cosi' i
        // siti si leggono come schermi accesi e non come foto sotto vetro.
        diffuseColor.rgb = mix(diffuseColor.rgb, tela.rgb * 0.45, sottoVetro);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float orlo = min(vLargo, 1.0 - vLargo);
          float filo = 1.0 - smoothstep(0.006, 0.02, orlo);
          totalEmissiveRadiance += ${(0,C.s)("avorio",.91)} * filo * 0.55;
        }`).replace("diffuseColor.rgb += vec3(s1 * 0.85 + s2);","diffuseColor.rgb += vec3(s1 * 0.85 + s2) * 0.2 * (1.0 - sottoVetro);")}}function ec({quadro:e,storyline:a,reduce:o}){let t=(0,A.f)(e=>e.size.width<700),i=(0,s.useRef)(null),r=(0,A.f)(e=>e.gl.capabilities.getMaxAnisotropy()),l=(0,A.f)(e=>e.gl),c=(0,A.f)(e=>e.invalidate),u=(0,s.useMemo)(()=>(function(e,a=_){let{raggio:o,kappa:t,corsa:i,passi:r}=V(e),l=new Float32Array((r+1)*6),n=new Float32Array((r+1)*6),s=new Float32Array((r+1)*4),c=[],u=new z.cE,p=new z.cE,m=new z.cE;for(let e=0;e<=r;e++){let f=-i+2*i*e/r,d=t*f,h=Math.sin(d),v=Math.cos(d);u.set(0,h,v),p.set(1,o*t*v,-o*t*h).normalize(),m.crossVectors(u,p).normalize();let x=f*B/Z;for(let t=0;t<2;t++){let i=(t-.5)*a,r=2*e+t;l[3*r]=f+m.x*i,l[3*r+1]=o*h+m.y*i,l[3*r+2]=o*v+m.z*i,n[3*r]=u.x,n[3*r+1]=u.y,n[3*r+2]=u.z,s[2*r]=x,s[2*r+1]=t}if(e<r){let a=2*e;c.push(a,a+2,a+1,a+1,a+2,a+3)}}let f=new z.ld;return f.setAttribute("position",new z.f5(l,3)),f.setAttribute("normal",new z.f5(n,3)),f.setAttribute("uv",new z.f5(s,2)),f.setIndex(c),f})(t),[t]);(0,s.useLayoutEffect)(()=>{let e=V(t);j.raggio=e.raggio,j.kappa=e.kappa},[t]),(0,s.useEffect)(()=>()=>u.dispose(),[u]);let p=(0,A.f)(e=>e.gl.capabilities.maxTextureSize),f=(0,s.useMemo)(()=>en(r,p),[r,p]),d=(0,s.useMemo)(()=>en(r,p),[r,p]),h=(0,s.useRef)({davanti:f,dietro:d});(0,s.useLayoutEffect)(()=>{h.current={davanti:f,dietro:d}},[f,d]),(0,s.useEffect)(()=>((0,L.t)(el(f.canvas,d.canvas,async()=>{f.tex.needsUpdate=!0,d.tex.needsUpdate=!0,await er(),l.initTexture(f.tex),await er(),l.initTexture(d.tex)}),4),window.__ATLANTE__=[f.canvas,d.canvas],()=>{f.tex.dispose(),d.tex.dispose()}),[f,d,l]);let v=(0,s.useMemo)(()=>{let e=document.createElement("canvas"),a=new z.Nk(e);return a.colorSpace=z.nj,a.wrapS=z.FP,a.wrapT=z.Jr,a.anisotropy=Math.min(8,r),{canvas:e,tex:a,aspetto:0}},[r]),x=(0,s.useRef)(v);(0,s.useLayoutEffect)(()=>{x.current=v},[v]);let g=(0,s.useMemo)(()=>new z.C9,[]),M=(0,s.useRef)([]),b=(0,s.useMemo)(()=>new z.CQ(1,1),[]);(0,s.useEffect)(()=>()=>b.dispose(),[b]),(0,s.useEffect)(()=>{let e=[],a=!1;return(0,L.t)(F(v.canvas).then(async({aspetto:o,lastre:t})=>{a||(v.tex.needsUpdate=!0,await er(),l.initTexture(v.tex),a||t.forEach((a,o)=>{let t=new z.Nk(a.tela);t.colorSpace=z.nj,t.anisotropy=Math.min(4,r);let i=new z.p$({map:t,transparent:!0,depthWrite:!1,toneMapped:!1,side:z.Vs});e.push({tex:t,mat:i});for(let e=0;e<5;e++){let t=new z.kE(b,i);t.renderOrder=3,t.visible=!1,t.userData={j:o,n:e,u:a.u,w:a.w,h:a.h},g.add(t),M.current.push(t)}}),v.aspetto=o,c())}),2),()=>{a=!0,v.tex.dispose(),g.clear(),M.current=[],e.forEach(e=>{e.tex.dispose(),e.mat.dispose()})}},[v,l,c,r,b,g]);let P=(0,s.useRef)(null),R=(0,s.useRef)(null),k=(0,s.useRef)({fatto:0,ora:-1,corpo:0,misurato:""}),D=(0,s.useMemo)(()=>{let e={value:-10},a={value:-9};return{uCoda:e,uTesta:a,davanti:es(e,a),dietro:es(e,a)}},[]),$=(0,s.useRef)(D),U=D.davanti,W=D.dietro,G=(0,s.useRef)(-1),H=(0,s.useRef)(0);return(0,S.f)((r,l)=>{let n=i.current,s=e.current;if(!n||!s)return;let c=r.size.height,u=w(s),p=Math.min(.1,l||.016),f=Math.max(0,Math.min(1,a.current.k)),d=f>0?f:-Math.max(0,Math.min(1,u.top/c)),v=Number.isFinite(d)?d:Number.isFinite(G.current)?G.current:-1,g=a.current.salto??0;H.current!==g&&(H.current=g,G.current=v),Number.isFinite(G.current)||(G.current=v),G.current+=(v-G.current)*(0,q.w)(q.X,p);let b=G.current;if(u.bottom<-.6*c||u.top>1.6*c){n.visible=!1,X.attivo=0,k.current.ora=-1;return}n.visible=!0;let z=o||b>-.6;R.current&&(R.current.visible=z);let L=r.camera,S=L.position.z,A=S*Math.tan(L.fov*Math.PI/360),C=u.top+.5*u.height;n.position.y=(.5-C/c)*2*A,n.scale.setScalar((1+(S/m.d.z-1)*.6)*(t?.62:1));let F=o?0:-(.09*r.pointer.y),D=o?0:.07*r.pointer.x;n.rotation.x+=(F-n.rotation.x)*(0,q.w)(.06,p),n.rotation.y+=(D-n.rotation.y)*(0,q.w)(.06,p);let _=o?.5:Math.max(0,Math.min(1,(b- -.6)/1.58)),U=Math.max(4.2,A*(r.size.width/c)/n.scale.x+1.2),j=-U*B/Z-1,V=o?0:.22/Z*Math.sin(2*Math.PI*r.clock.elapsedTime/11),W=j+(U*B/Z-j)*_+V;$.current.uCoda.value=W,$.current.uTesta.value=W+1,n.updateMatrixWorld(),X.gruppo=n,X.attivo=+!!z,X.coda=W,X.testa=W+1,h.current.davanti.tex.offset.x=-W,h.current.dietro.tex.offset.x=-W;let Y=P.current,Q=x.current,J=k.current;if(Y&&Q.aspetto>0){let e=`${r.size.width}x${c}`;if(J.misurato!==e){let a=2*Q.aspetto/E.length;J.corpo=Math.min(O(),.85*r.size.width/a),J.misurato=e}let a=2*A/c/n.scale.x,t=2*J.corpo*a,i=2*A*(r.size.width/c)*1.6/n.scale.x;Y.scale.set(i,t,1);let l=t*Q.aspetto;Q.tex.repeat.x=i/l;let u=(0,N.B)();if(!o&&J.ora>=0){let e=Math.min(.05,Math.max(0,u-J.ora)/1e3),o=r.size.width<700?T.stretto:T.largo;J.fatto=(J.fatto+e*o*a/l)%1}J.ora=u,Q.tex.offset.x=J.fatto;let p=s.closest("section"),m=Math.min(1,Math.max(0,((p?(c-y(p).bottom)/c:-1)+.32)/.42)),f=m*m*(3-2*m);Y.material.opacity=1-f,Y.visible=f<1,function(e,a,o,t,i,r,l){for(let n of e){let e=n.userData,s=e.u-a;s<0&&(s+=1);let c=(s+e.n-1)*o-t/2,u=e.w*i,p=e.h*i,m=r<1&&c>-t/2-u&&c<t/2+u;if(n.visible=m,!m)continue;n.position.set(c,0,0),n.scale.set(u,p,1);let f=l<0?.5:l/I[e.j%I.length]*Math.PI*2+2.1*e.j;n.rotation.set(.12*Math.cos(f)+.04,f,-.12+.08*Math.sin(f+.7)),n.material.opacity=1-r}}(M.current,J.fatto,l,i,t,f,o?-1:u/1e3)}}),(0,n.jsxs)("group",{ref:i,visible:!1,children:[(0,n.jsxs)("group",{ref:R,children:[(0,n.jsx)("mesh",{geometry:u,castShadow:!1,receiveShadow:!1,children:(0,n.jsx)("meshPhysicalMaterial",{...m.O,map:f.tex,emissiveMap:f.tex,emissive:C.t.avorio,emissiveIntensity:.9,clearcoat:.35,envMapIntensity:.85,side:z.de,onBeforeCompile:U})}),(0,n.jsx)("mesh",{geometry:u,castShadow:!1,receiveShadow:!1,children:(0,n.jsx)("meshPhysicalMaterial",{...m.O,map:d.tex,emissiveMap:d.tex,emissive:C.t.avorio,emissiveIntensity:.6,clearcoat:.35,envMapIntensity:.85,side:z.tw,onBeforeCompile:W})})]}),(0,n.jsxs)("mesh",{ref:P,visible:!1,renderOrder:2,castShadow:!1,receiveShadow:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1]}),(0,n.jsx)("meshBasicMaterial",{map:v.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:z.Vs})]}),(0,n.jsx)("primitive",{object:g})]})}var eu=e.i(77157),ep=e.i(6364),em=e.i(84910);let ef=new Float32Array(3*em.N),ed=new Float32Array(4*em.N),eh=new Int8Array(2*em.N),ev=new Uint8Array(em.N);(()=>{let e=em.N-10,a=[];for(let e=0;e<10;e++){let o=.7/10;a.push([0,.9-(e+.5)*o+((0,em.i)(17*e+3)-.5)*o*.7])}for(let o=0;o<e-1;o++){let t=.05*Math.pow(.58/.05,o/(e-2))*(.9+.2*(0,em.i)(23*o+7));a.push([0,-.13-t])}a.push([0,-.98]);for(let e=0;e<em.N;e++){let o=(.6180339*e+.18*(0,em.i)(31*e+11))%1;a[e][0]=-.84+1.68*o}a[em.N-1][0]=(0,em.i)(977)>.5?.9:-.9;let o=Array.from({length:em.N},(e,a)=>a).sort((e,a)=>em.Z[a][1]-em.Z[e][1]),t=a.slice().sort((e,a)=>a[1]-e[1]);for(let e=0;e<em.N;e+=4){let a=o.slice(e,e+4).sort((e,a)=>em.Z[e][0]-em.Z[a][0]),i=t.slice(e,e+4).sort((e,a)=>e[0]-a[0]);a.forEach((e,a)=>{ef[3*e]=i[a][0],ef[3*e+1]=i[a][1],ef[3*e+2]=-1.5+2.2*(0,em.i)(13*e+29),ev[e]=+(i[a][1]<-.16)})}for(let e=0;e<em.N;e++){ed[4*e]=2.2+2.4*(0,em.i)(7*e+41),ed[4*e+1]=.18+.42*(0,em.i)(11*e+43),ed[4*e+2]=((0,em.i)(19*e+47)-.5)*.9,ed[4*e+3]=((0,em.i)(29*e+53)-.35)*1.1;let a=(0,em.i)(37*e+59);eh[2*e]=a<.3?-1:+(a>.72),eh[2*e+1]=(0,em.i)(41*e+61)>.62?a>.5?-1:1:0}})();let ex=new Float32Array(3*em.N),eg=new Uint8Array(em.N);(()=>{let e=[];for(let a=0;a<11;a++){let o=a%3,t=.3+.22*o+((0,em.i)(17*a+101)-.5)*.12,i=-1.4-.45*o-.5*(0,em.i)(19*a+103);e.push([0,t,i,0])}for(let a=0;a<9;a++){let o=.14*Math.pow(.6/.14,a/8)*(.92+.16*(0,em.i)(23*a+107));e.push([0,-o,-1.6-3.2*(1-a/8),1])}let a=0;for(let o=0;o<e.length;o++){let t=(.6180339*a+++.13+.12*(0,em.i)(31*o+109))%1;e[o][0]=-.88+1.76*t}let o=(0,em.i)(983)>.5?1:-1;e.push([.8*o,-.8,.4,1]),e.push([.52*o,-.87,.5,1]),e.push([-(.68*o),-.84,.45,1]);let t=Array.from({length:em.N},(e,a)=>a).sort((e,a)=>em.Z[a][1]-em.Z[e][1]),i=e.slice().sort((e,a)=>a[1]-e[1]);for(let e=0;e<em.N;e+=4){let a=t.slice(e,e+4).sort((e,a)=>em.Z[e][0]-em.Z[a][0]),o=i.slice(e,e+4).sort((e,a)=>e[0]-a[0]);a.forEach((e,a)=>{ex[3*e]=o[a][0],ex[3*e+1]=o[a][1],ex[3*e+2]=o[a][2],eg[e]=o[a][3]})}})();let eM={n:0,r:new Float32Array(80),els:[],letti:-1e9},eb=new WeakMap,ey="",ew=null;function ez(e){for(let a=e;a&&a!==document.body;a=a.parentElement){let e=getComputedStyle(a).position;if("fixed"===e||"sticky"===e)return!0}return!1}let eL=null;function eS(){return eL&&eL.isConnected||(eL=document.querySelector("[data-scossa]")),eL}var eA=e.i(86715),eq=e.i(1119);let eC=(e,a,o)=>{let t=Math.max(0,Math.min(1,(e-a)/(o-a)));return t*t*t*(t*(6*t-15)+10)},eP=e=>e<=0?0:e>=1?1:e,eR={alza:[0,.14],apre:[.06,.2],raccolta:[.15,.24,.32],forma:[.17,.29],nubi:[.2,.34],investe:[.22,.27,.33],abbassa:[.28,.4],boomGiu:[.28,.42],raccogli:[.3,.45],testi:[.47,.53,.63,.68],sosta:.56,gira:[.42,.74],respiro:[.7,.75,.8],sale:[.76,.86],ordina:[.77,.84],nuclei:[.79,.86],scioglie:[.805,.87],lampo:[.845,.862,.885],casa:[.856,.862],caos:[.862,.878],cade:[.878,.995],mondoVia:[.88,.985],filo:[.875,.965,.995],giu:[.86,1]},eE=e=>1.15*eC(e,eR.alza[0],eR.alza[1])*(1-eC(e,eR.abbassa[0],eR.abbassa[1]))+.62*eC(e,eR.sale[0],eR.sale[1]-.02)*(1-eC(e,eR.giu[0],eR.giu[1])),eT=e=>-4*eC(e,eR.boomGiu[0],eR.boomGiu[1])+5*Math.pow(eC(e,eR.sale[0]+.01,eR.sale[1]),1.3),eO=e=>{let a=eP((e-eR.sale[0])/(eR.sale[1]-eR.sale[0]));return eT(Math.min(e,eR.sale[0]))-.85+12.5*a*a*(3-2*a)*(.4+.6*a)},eI=e=>eC(e,eR.raccogli[0],eR.raccogli[0]+.015)*(1-eC(e,eR.scioglie[1]-.012,eR.scioglie[1])),eF=e=>eP((e-eR.raccogli[0])/(eR.raccogli[1]-eR.raccogli[0])),eN=e=>eC(e,eR.raccogli[0],eR.raccogli[0]+.08),ek=e=>eC(e,eR.respiro[0],eR.respiro[1]),eD=e=>.55*(1-eC(e,eR.respiro[0]+.02,eR.respiro[1]))+2*Math.PI*eC(e,eR.gira[0],eR.gira[1]),e$=e=>eC(e,eR.ordina[0],eR.ordina[1]),e_=e=>eP((e-eR.scioglie[0])/(eR.scioglie[1]-eR.scioglie[0])),eU=e=>{let[a,o,t]=eR.lampo;return{buco:eC(e,eR.apre[0],eR.apre[1]),forma:eC(e,eR.forma[0],eR.forma[1]),nubi:eC(e,eR.nubi[0],eR.nubi[1]),via:eC(e,eR.mondoVia[0],eR.mondoVia[1]),lampo:eC(e,a,o)*(1-eC(e,o,t)),stretta:eC(e,a,t)}},ej=e=>{let[a,o,t]=eR.investe;return eC(e,a,o)*(1-eC(e,o,t))},eV=e=>{let[a,o,t]=eR.respiro;return eC(e,eR.forma[0],eR.forma[0]+.04)*(1-eC(e,eR.lampo[1],eR.lampo[2]))*(1+.35*eC(e,a,o)*(1-eC(e,o,t)))},eB=e=>{let[a,o,t]=eR.raccolta;return eC(e,a,o)*(1-eC(e,o,t))},eW=e=>{let[a,o,t]=eR.filo;return{c:eC(e,eR.lampo[1],eR.lampo[2])*(1-eC(e,o+.01,t)),posa:eC(e,a+.05,o)}},eG={pieno:0,omino:{x:0,piedi:0,alto:0,c:0},nuclei:Array.from({length:23},()=>[0,0]),nucleiCol:Array.from({length:23},()=>({x:0,y:0,z:0})),nucleiOk:!1,inclina:0,boom:0},eZ=[[-.05,.02,.06],[.06,.05,.08],[-.05,.13,.05],[.06,.15,.07],[-.05,.25,.03],[.06,.27,.05],[-.05,.37,.01],[.05,.38,.02],[-.06,.46,0],[.06,.47,0],[0,.5,0],[-.26,.52,-.06],[.24,.53,-.05],[0,.6,0],[-.2,.62,-.05],[.19,.63,-.04],[0,.68,0],[-.12,.74,-.02],[.12,.75,-.02],[0,.78,0],[0,.83,0],[0,.9,.01],[0,.98,0]],eH=[["Foot.L","Foot.L",0],["Foot.R","Foot.R",0],["LowerLeg.L","Foot.L",.5],["LowerLeg.R","Foot.R",.5],["LowerLeg.L","LowerLeg.L",0],["LowerLeg.R","LowerLeg.R",0],["UpperLeg.L","LowerLeg.L",.5],["UpperLeg.R","LowerLeg.R",.5],["UpperLeg.L","UpperLeg.L",0],["UpperLeg.R","UpperLeg.R",0],["Hips","Hips",0],["LowerArm.L","UpperArm.L",-.85],["LowerArm.R","UpperArm.R",-.85],["Torso","Torso",0],["LowerArm.L","LowerArm.L",0],["LowerArm.R","LowerArm.R",0],["Chest","Chest",0],["UpperArm.L","UpperArm.L",0],["UpperArm.R","UpperArm.R",0],["Chest","Neck",.5],["Neck","Neck",0],["Head","Head",0],["Head","Neck",-.9]];e.s(["Q",0,eH,"Y",0,6,"A",0,eG,"a",0,eZ,"t",0,14,"$",0,1.7,"N",0,1.35,"O",0,eR,"B",0,eT,"Z",0,eV,"z",0,eW,"d",0,eN,"i",0,ek,"q",0,eE,"U",0,ej,"f",0,function(e){let{casa:a,caos:o,cade:t}=eR;return e<=a[0]?0:e<a[1]?.03*eP((e-a[0])/(a[1]-a[0])):e<o[1]?.03+.53*eP((e-o[0])/(o[1]-o[0])):.56+eP((e-t[0])/(t[1]-t[0]))},"h",0,eU,"g",0,eI,"p",0,e$,"P",0,eO,"R",0,eF,"S",0,eB,"l",0,eD,"T",0,e_],76864);let eX=[{"id":1,"src":"/assets/fintechadv.webp","nome":"Financial Technology Advisory Services","categoria":"Business website"},{"id":2,"src":"/assets/pro10.webp","nome":"Wedding Website","categoria":"WordPress"},{"id":3,"src":"/assets/pro9.webp","nome":"Ferrari Fan Page Website","categoria":"Fan project"}],eY=Math.min(23,eX.length),eQ=(e,a,o)=>{let t=Math.max(0,Math.min(1,(e-a)/(o-a)));return t*t*t*(t*(6*t-15)+10)},eJ=(e,a,o)=>Math.max(0,Math.min(1,(e-a)/(o-a))),eK={lavori:[],sosta:.8,sopra:-1,cam:{p:[0,0,4.1],q:[0,0,0,1],ok:!1},carr:[0,0],pioggia:1,lampo:{n:0,x:0,cima:.8,piede:-.3},omino:{x:0,y:0,h:0},riflesso:{x:0,y:0,f:0,l:0},luceLampo:0,lastraRect:{x:0,y:0,w:0,h:0},corrente:-1,calma:0,spazio:!1,kcVolto:0,titolo:0,cta:0,intro:0,fascia:80,portaBox:{x:0,y:0,w:0,h:0},sottoNastro:0,disco:{y:0,r:.4},porta:-.82,vieti:[],pianoCubo:Array(23).fill(1)},e0={computer:128,mano:122};function e1(e,a,o){return e2((.07+Math.min(Math.max(0,e)/o,1)*((a-.5)/a-.07))*a-.5,a)}function e2(e,a){return e}function e5(e,a,o,t,i,r){let l=5*a,n=2*t.w*e,s=2*t.h,c=1-2*t.cy,u=n*l,p=s*l,m=Math.max(.12*p,(o-(c-s/2))*l),f=(2*t.cx-1)*e*l,d=e*l+.5*u+u*(i?.12:.2),h=r??{};return h.Z=5,h.He=m,h.Wl=u,h.Hl=p,h.T=.05*p,h.cx=f,h.S=d,h.oZ=i?4.1:4.5,h.oX=i?.5*e*h.oZ*a:.5*u+.09*u,h.pZ=h.oZ*(i?.95:.9),h.lato=(i?.07:.055)*p*(h.pZ/5),h.passo=1.9*h.lato,h.s=-o*a,h.tanF=a,h.A=e,h.mano=i,h}function e3(e,a){let o=0;for(let t=1;t<a;t++)o+=eQ(e,t+-.86,t+-.6);return o}function e4(e,a){let o=0;for(let t=1;t<a;t++)o+=Math.sin(Math.PI*eJ(e,t+-.86,t+-.6));return o}let e6=e=>{let a=43758.5453*Math.sin(127.1*e+311.7);return a-Math.floor(a)},e8=[1.25,1.6,2],e7=(e,a,o)=>.6*Math.sin(e*a+o)+.4*Math.sin(e*a*1.618+2.3*o);function e9(e,a,o,t,i){let r=2.4*t.lato,l=function(e,a,o){let t=eK.disco.r,i=eK.porta,r=eK.vieti,l=`${e.toFixed(2)}|${a.toFixed(4)}|${t.toFixed(3)}|${i.toFixed(2)}|${r.map(e=>e.join(",")).join(";")}`,n=aa.get(l);if(n)return n;let s=ae.map(e=>a/(e*o)),c=s[0],u=.42*c,p=23,m=()=>((p=16807*p%0x7fffffff)-1)/0x7ffffffe,f=Math.max(1.2*c+2*u,.95*Math.sqrt(4*e/23)),d=1.2*c+2*u,h=[],v=[];for(let a=0;a<40;a++){p=23,h=[],v=[];for(let a=0;a<6e3&&h.length<23;a++){let a=s[h.length%3],o=.75*a+u,l=(2*m()-1)*Math.max(.01,e-o),n=Math.min(i+o,1-o-.02),c=n+m()*Math.max(.01,1-o-n);if(Math.hypot(l,c)<1.15*t+.75*a+u||r.some(e=>l>e[0]-o&&l<e[2]+o&&c>e[1]-o&&c<e[3]+o))continue;let p=!0;for(let e=0;e<h.length&&p;e++)Math.hypot(l-h[e],c-v[e])<f&&(p=!1);p&&(h.push(l),v.push(c))}if(h.length>=23)break;f=f>d?Math.max(d,.94*f):.96*f}for(;h.length<23;)h.push((2*m()-1)*e*.9),v.push(m()>.5?.85:-.85);let x={x:h,y:v,amp:u};return aa.set(l,x),x}(o,r/t.tanF,t.Z),n=e%23,s=l.x[n],c=l.y[n],u=t.Z*ae[n%3],p=e6(n+.7),m=e6(n+5.1),f=e6(n+9.4),d=s+l.amp*e7(a,.34+.16*p,1.3*n),h=c+l.amp*e7(a,.29+.14*m,2.1*n+1),v=u+.12*t.Z*e7(a,.22+.06*f,.7*n+2),x=r/(v*t.tanF),g=h-eK.disco.y,M=Math.hypot(d,g),b=1.15*eK.disco.r+.75*x;if(M<b){let e=b/Math.max(1e-4,M);d*=e,h=eK.disco.y+g*e}let y=eK.porta+.75*x;h<y+x&&(h=y+x*Math.exp((h-y-x)/x));let w=v*t.tanF;return i.x=d*w,i.y=h*w,i.z=-v,r}let ae=[1.1,1.4,1.75],aa=new Map,ao=Array.from({length:eY},(e,a)=>Math.round(22*a/Math.max(1,eY-1)));function at(e,a,o){let t=o?eR.sosta:e,i=eN(t),r=o?0:(.045*Math.sin(.55*a)+.025*Math.sin(.21*a+1.3))*i;return{piedi:eO(t)-eT(t)+r,rollio:o?.06:(.07+.012*Math.sin(.37*a))*i*(1-.6*ek(t)),inclina:o?0:eE(e)}}function ai(e,a,o,t,i,r,l,n){let s=Math.cos(t),c=Math.sin(t),u=Math.max(.05,-(-a*c+o*s));return n[0]=r/2+e/u/i*l/2,n[1]=l*(1-(a*s+o*c)/u/i)/2,n}e.s(["E",0,e0,"K",0,ao,"t",0,eK,"u",0,e4,"J",0,e3,"k",0,e2,"F",0,function(e,a,o,t,i,r,l,n){var s;let c,u=2.4*i.lato,p=e%3,m=Math.floor(e/3),f=e6(e+.7),d=e6(e+5.1),h=e6(e+9.4),v=i.Z*e8[p],x=i.A*v*i.tanF,g=i.cx-.9*x,M=((t-1)*i.S+i.cx+.9*x-g)/8,b=.9*u,y=Math.max(0,M/2-b),w=Math.max(0,.16*i.Z-b),z=.9*a+o,L=g+M*(m+.5+(p-1)*.33)+y*e7(z,.5+.3*f,1.3*e),S=v+w*e7(z,.37+.2*d,2.1*e+1),A=Math.max(1.15*b,i.He*(.35+1.5*h)*(v/i.Z)+.35*i.He*(v/i.Z)*e7(z,.29+.2*f,.7*e+2));return s=-i.He+A,c=-(S+l),n.x=L-r,n.y=s+i.s*c,n.z=c,u},"m",0,e9,"L",0,e1,"d",0,eQ,"r",0,e5],35118);let ar={value:0},al={value:1},an={value:0};var as=e.i(70599);let ac=[[-4.3,-1.5],[-2.7,-1.5],[-2.7,1.35],[-1.15,1.35],[-1.15,-.95],[.55,-.95],[.55,1.6],[2.15,1.6],[2.15,-1.35],[4.3,-1.35]],au=null,ap=(()=>{let e=Array.from({length:em.N},(e,a)=>a);for(let a=e.length-1;a>0;a--){let o=Math.floor((0,em.i)(a+4231)*(a+1));[e[a],e[o]]=[e[o],e[a]]}return e})(),am=(()=>{let e=Array.from({length:24},(e,a)=>a);for(let a=e.length-1;a>0;a--){let o=Math.floor((0,em.i)(a+917)*(a+1));[e[a],e[o]]=[e[o],e[a]]}return e})();function af(e,a=40){let o=.5*em.r,t=.5*em.e;for(let i=0;i<a;i++){let a=!0;for(let i=0;i<e.length;i++)for(let r=i+1;r<e.length;r++){let l=e[i].p,n=e[r].p,s=e[i].s,c=e[r].s,u=n[0]-l[0],p=n[1]-l[1],m=n[2]-l[2],f=o*(s+c)-Math.abs(u);if(f<=0)continue;let d=o*(s+c)-Math.abs(p);if(d<=0)continue;let h=t*(s+c)-Math.abs(m);if(h<=0)continue;let v=0,x=f,g=u<0?-1:1;d<x&&(v=1,x=d,g=p<0?-1:1),h<x&&(v=2,x=h,g=m<0?-1:1);let M=(x+.004)*.5;l[v]-=g*M,n[v]+=g*M,a=!1}if(a)break}return e}let ad=Math.PI/2,ah=2*Math.PI,av=[3.238,3.397,3.553,3.709],ax=Array.from({length:16},(e,a)=>{let o=a%2==0,t=e=>(0,em.i)(5.7*a+e+400);return{x:o?.66+.3*t(1):-.96+.3*t(2),y:o?.3+.66*t(3):-.34+1.28*t(3),z:o?-1.35+1.15*t(4):-2.6+2.3*t(4),da:3.16+a/16*.22,fase:t(5)*Math.PI*2,ax:(.055+.12*t(6))*(o?.72:1),ay:.075+.155*t(7),az:.22+.5*t(8),vx:.055+.075*t(9),vy:.041+.062*t(10),vz:.033+.048*t(11)}}),ag=(()=>{let e=[];for(let a=0;a<5;a++)for(let o=0;o<5;o++)(0!==a||0!==o)&&(a<2||2===a&&o<2)&&e.push([a,o]);let a=as.i.slice(0,11).map((e,a)=>({j:a,p:e})).sort((e,a)=>a.p[1]-e.p[1]||e.p[0]-a.p[0]),o=e.sort((e,a)=>e[1]-a[1]||e[0]-a[0]),t=Array(23);return a.forEach(({j:e},a)=>{t[e]=o[a],t[e+11]=[4-o[a][0],4-o[a][1]]}),t[22]=[2,2],t})(),aM=af(em.Z.map((e,a)=>{let o=am[a],t=Math.floor(o/6),i=(o%6+.5)/6-.5,r=(t+.5)/4-.5,l=Math.hypot(i,r)||1;i/=l,r/=l;let n=4.6+2.2*(0,em.i)(2100+7*a+1);return{p:[i*n,r*n*.72,.8+2.4*(0,em.i)(2100+13*a+5)],r:[((0,em.i)(2100+17*a+3)-.5)*5.2,((0,em.i)(2100+19*a+4)-.5)*6.4,((0,em.i)(2100+23*a+6)-.5)*4],s:1}}));var ab=e.i(66301),ay=e.i(59640),aw=e.i(42597),az=e.i(87105),aL=e.i(92111),aS=e.i(41243),aA=e.i(66417),aq=e.i(6127);let aC={p:0,grezzo:0,cima:0/0,stretto:!1,cornice:{cx:.5,cy:.5,w:.56,h:.35}},aP={forma:[0,.44],cade:[.26,.5],apre:[.5,.8],testo:[.86,1]},aR=(e,a)=>Math.max(0,Math.min(1,(e-a[0])/(a[1]-a[0])));function aE(e,a){let o=a?2.4:1.85;return Math.max(0,Math.min(1,(o-e)/(o- -.3)))}function aT(){if(!Number.isFinite(aC.cima))return aC.grezzo;let e=window.innerHeight||1;return Math.min(aC.grezzo,aE((aC.cima-window.scrollY)/e,aC.stretto))}function aO(e,a,o,t,i,r){let l,n,s=t*r,c=(e%1+1)%1*(2*(s+i));return c<i/2?(l=s/2,n=c):(c-=i/2)<s?(l=s/2-c,n=i/2):(c-=s)<i?(l=-s/2,n=i/2-c):(c-=i)<s?(l=-s/2+c,n=-i/2):(c-=s,l=s/2,n=-i/2+c),[a+l/r,o-n]}e.s(["r",0,aC,"Q",0,1.85,"A",0,2.4,"h",0,aP,"M",0,e=>e*e*e*(e*(6*e-15)+10),"E",0,aR,"_",0,aT,"$",0,aE,"u",0,aO],48230);let aI={scioglie:1.26,lParte:1.54,lArco:1.75,volo:1.4,scosto:.9,incastro:2.75*1.4,chiude:.7*1.4,orienta:4.13,centro:4.97,cade:.77,alto:.42,fine:4.6*1.4},aF=new Float32Array(23),aN=new Float32Array(23),ak=new z.cE,aD=new z.cE,a$=new z.cE,a_=new z.cE,aU=new z.cE,aj=new z.cE,aV=new z.cE,aB=new z.zm,aW=new z.cE,aG=new z.as,aZ={t:0},aH={},aX={x:0,y:0,z:0},aY=(e,a,o)=>{let t=Math.max(0,Math.min(1,(e-a)/(o-a)));return t*t*t*(t*(6*t-15)+10)},aQ=(a=eZ.map((e,a)=>a).sort((e,a)=>eZ[e][1]-eZ[a][1]||e-a),em.h.map(e=>a[e])),aJ={x:0,y:0,z:0},aK={dx:0,sx:0,su:0,giu:0},a0={dx:0,sx:0,su:0,giu:0},a1=e=>Math.max(0,Math.min(1,e));function a2({storyline:e,reduce:a,mobile:o,intro:t,gioco:i,prove:r,quanteProve:l,giornale:c,cavalca:u,rottura:p}){(0,s.useEffect)(()=>(0,aq.W)(),[]);let f=(0,s.useRef)(new z.cE),d=(0,s.useRef)({value:0}),h=(0,s.useRef)({value:0}),v=(0,s.useMemo)(()=>em.Z.map((e,a)=>{let o=(0,em.i)(a+71)*Math.PI*2,t=((0,em.i)(a+132)-.5)*Math.PI;return new z.cE(Math.cos(o)*Math.cos(t),Math.sin(t),Math.sin(o)*Math.cos(t)*.7)}),[]),x=(0,s.useRef)(0),g=(0,s.useRef)(!1),M=(0,s.useRef)(0),b=(0,s.useRef)(!1),y=(0,s.useRef)(0),w=(0,s.useRef)(new Float32Array(em.N)),L=(0,s.useRef)(new Float32Array(em.N)),A=(0,s.useRef)(new Float32Array(em.N)),P=(0,s.useRef)([0,0,0]),R=(0,s.useRef)(!1),E=(0,s.useRef)(!1),T=(0,s.useRef)([0,0]);(0,s.useRef)(null);let O=(0,s.useMemo)(()=>{let e,a;return(e=[]).push(em.Z.map(e=>({p:e,r:[0,0,0],s:1}))),e.push(af(em.Z.map((e,a)=>{let o=(0,em.i)(13*a+977)*Math.PI*2,t=((0,em.i)(7*a+431)-.5)*Math.PI*.9,i=1.9+4.2*(0,em.i)(5*a+613);return{p:[Math.cos(o)*Math.cos(t)*i,Math.sin(t)*i*1.1,Math.sin(o)*Math.cos(t)*2.2-.2],r:[((0,em.i)(a+7)-.5)*.34,((0,em.i)(a+13)-.5)*.44,((0,em.i)(a+23)-.5)*.22],s:1}}))),e.push(em.Z.map(e=>({p:[e[0]*em.q,e[1]*em.q,em.s],r:[0,0,0],s:em.q}))),a=e[1],e.push(a.map(e=>{let a=Math.hypot(e.p[0],e.p[1])||1;return{p:[e.p[0]/a*8.5,e.p[1]/a*8.5,em.c+.5],r:[2*e.r[0],2*e.r[1],2*e.r[2]],s:1}})),e.push(af(em.Z.map((e,a)=>{let o=am[a],t=Math.floor(o/6);return{p:[((o%6+.5+((0,em.i)(4700+7*a+1)-.5)*.92)/6-.5)*4.7,((t+.5+((0,em.i)(4700+11*a+2)-.5)*.92)/4-.5)*2.6,-1.3+2.05*(0,em.i)(4700+13*a+5)],r:[((0,em.i)(4700+17*a+3)-.5)*.3,((0,em.i)(4700+19*a+4)-.5)*.4,((0,em.i)(4700+23*a+6)-.5)*.16],s:1}}))),e.push(af(em.Z.map((e,a)=>{let o=am[a],t=Math.floor(o/6);return{p:[((o%6+.5+((0,em.i)(8300+7*a+1)-.5)*1.55)/6-.5)*6.1,((t+.5+((0,em.i)(8300+11*a+2)-.5)*1.55)/4-.5)*3.9,-2.3+4.1*(0,em.i)(8300+13*a+5)],r:[((0,em.i)(8300+17*a+3)-.5)*2.4,((0,em.i)(8300+19*a+4)-.5)*2.6,((0,em.i)(8300+23*a+6)-.5)*1.9],s:1}}))),e.push(em.Z.map(e=>({p:e,r:[0,0,0],s:1}))),e},[]),I=(0,s.useRef)([]);(0,s.useEffect)(()=>(aL.f.cubi=I.current,()=>{aL.f.cubi=null}),[]);let F=(0,s.useRef)([]),k=(0,s.useRef)([]),D=(0,s.useRef)(em.Z.map(()=>({value:0}))),$=(0,s.useRef)(new Float32Array(em.N)),U=(0,s.useRef)(new Float32Array(em.N)),V=(0,s.useRef)(new Float32Array(em.N)),W=(0,s.useRef)(null),G=(0,s.useRef)({x:0,y:0});(0,s.useMemo)(()=>({caster:new z.zx,v:new z.wq}),[]);let H=(0,s.useRef)(-1),et=(0,s.useRef)(0),ei=(0,s.useRef)(new Float32Array(3*em.N)),er=(0,s.useRef)(new Uint8Array(em.N)),el=(0,s.useRef)(-1),en=(0,s.useRef)(new Float32Array(em.N)),es=(0,s.useRef)(new Float32Array(em.N)),ec=(0,s.useRef)(new Float32Array(em.N)),eu=(0,s.useRef)(new Float32Array(em.N)),ep=(0,s.useRef)(0),eL=(0,s.useRef)(-1),eC=(0,s.useRef)(new Float32Array(2*em.N)),eP=(0,s.useRef)(new Float32Array(em.N)),eO=(0,s.useRef)(0),eI=(0,s.useRef)(new Float32Array(em.N)),eF=(0,s.useRef)(0),eN=(0,s.useRef)(new Uint8Array(em.N)),ek=(0,s.useRef)(new Float32Array(3*em.N)),eD=(0,s.useRef)(new Float32Array(3*em.N)),e$=(0,s.useRef)(new Float32Array(3*em.N));(0,s.useEffect)(()=>{if(a||!(0,aA.O)())return;let e=e=>{G.current.x=e.clientX/window.innerWidth*2-1,G.current.y=-(2*(e.clientY/window.innerHeight))+1};return window.addEventListener("mousemove",e,{passive:!0}),()=>window.removeEventListener("mousemove",e)},[o,a]);let e_=(0,s.useRef)(null);null==e_.current&&(e_.current=Array.from({length:3},()=>{let e=new z.ld,a=new Float32Array(27);for(let e=0;e<9;e++)a[3*e]=e;e.setAttribute("position",new z.f5(a,3));let o=Array.from({length:9},()=>new z.cE),t=new z.NQ({color:C.t.caldoChiaro,transparent:!0,opacity:0,blending:z.tq,depthWrite:!1});t.userData.punti=o,t.onBeforeCompile=e=>{e.uniforms.uPunti={value:o},e.vertexShader="uniform vec3 uPunti[9];\n"+e.vertexShader.replace("#include <begin_vertex>","vec3 transformed = uPunti[int(position.x + 0.5)];")},t.customProgramCacheKey=()=>"arco-uniformi";let i=new z.DL(e,t);return i.frustumCulled=!1,i})),(0,s.useEffect)(()=>{let e=I.current;return()=>{e.forEach(e=>{e&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())}),e_.current?.forEach(e=>{e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()})}},[]);let eU=(0,s.useRef)(0),ej=(0,s.useRef)(!0),eV=(0,s.useRef)(0),eB=(0,s.useMemo)(()=>em.Z.map((e,a)=>{let o=(0,em.i)(a+200)*Math.PI*2,t=(0,em.i)(a+300)*Math.PI;return{dir:new z.cE(Math.cos(o)*Math.sin(t),Math.cos(t),Math.sin(o)*Math.sin(t)*.6),amp:.35+.55*(0,em.i)(a+400),spin:((0,em.i)(a+500)-.5)*2.6,driftDir:(0,em.i)(a+600)>.5?1:-1}}),[]),eW=(0,s.useRef)({d:new z.cE,p1:new z.cE,p2:new z.cE,up:new z.cE(0,1,0)});(0,s.useRef)({c:new z.cE,b:new z.cE,t:0,x:-1,y:-1,l:-1});let eH=(0,s.useRef)(!1),eX=(0,s.useRef)(-1),eY=(0,s.useRef)(0),eQ=(0,s.useRef)([-1,-1,-1]),eJ=(0,s.useRef)({sx:new Int8Array(64),nsx:0,dx:new Int8Array(64),ndx:0});return(0,S.f)((n,s)=>{var S,C,e2;let e6,e8,e7,ae,aa,ai,an,as,af,aA=n.camera,aE=(0,aw.L)(),aT=!a&&(0,az.A)(aE),a2=window,a8=!a2.__senzaSuolo;a2.__VENTITRE||(a2.__VENTITRE=I.current,a2.__SUOLO=aL.f);let a7=Math.min(s,.05),a9=e=>1-Math.pow(1-e,60*a7);eF.current++,W.current&&(W.current.visible=-3!==eK.corrente);let oe=n.size.width/Math.max(1,n.size.height),oa=(aB.copy(aA,!1),aB.lookAt(0,0,0),aB.updateMatrixWorld(!0),aB);oa.position.toArray(eK.cam.p),oa.quaternion.toArray(eK.cam.q),eK.cam.ok=!0,al.value=1,a||(aZ.t+=a7*(1-Math.min(1,2.5*eK.luceLampo)));let oo=1+((oe>=m.o?1:Math.pow(m.o/oe,m.V)*(1-.13*Math.max(0,Math.min(1,(.78-oe)/.3))))-1)*.15,ot=aA.position.z*Math.tan(aA.fov*Math.PI/360),oi=ot*oe,or=!o||oe>=1.25,ol=o&&oe<1;i&&(i.current.mondo.h=2*ot,i.current.mondo.w=2*oi);let on=n.clock.elapsedTime;h.current.value=on,!g.current&&(g.current=!0,x.current=t?.current.v??1,x.current>=1&&(M.current=aI.fine,E.current=!0)),y.current!==(0,aw.k)()&&(y.current=(0,aw.k)(),!a&&M.current>=aI.fine&&(M.current=0,E.current=!1,b.current=!0)),(t?.current.v??1)>=1?M.current=Math.min(aI.fine,M.current+Math.min(.05,s)*((0,aw.r)()?4:aw.g/(0,aw.C)())):(M.current=0,E.current=!1);{let e=M.current,o=a||e<=0||e>=aI.fine?0:(0,em.D)(Math.min(1,e/aI.scioglie))*(1-(0,em.D)(Math.max(0,Math.min(1,(e-2.6*1.4)/(1.4*1.4)))));P.current[0]=.09*Math.sin(.5*e)*o,P.current[1]=.05*o,P.current[2]=.38*o}t&&!t.current.pronta&&(0,m.m)()&&(t.current.pronta=!0),x.current+=((t?.current.v??1)-x.current)*a9(.021);let os=a?0:Math.max(0,Math.min(6,e.current.k)),oc=a?0:(0,em.D)(Math.max(0,Math.min(1,e.current.ritorno??0))),ou=a?oc:Math.max(oc,os<6.01?(0,eq.t)(os):0),op=Math.max(0,Math.min(6,os+0));et.current!==(e.current.salto??0)?(et.current=e.current.salto??0,eU.current=op,eO.current=e.current.allenta??0):(eU.current+=(op-eU.current)*a9(q.X),eO.current+=((e.current.allenta??0)-eO.current)*a9(q.X));let om=eU.current;window.__kVisto=om,om<1&&(ej.current=!0),ej.current&&eV.current<5.965&&om>=5.965&&om<5.9995&&(ej.current=!1,(0,ay.S)()),eV.current=om;let of=a?0:Math.max(0,Math.min(6,e.current.kc));d.current.value=a?1:Math.max(0,Math.min(1,(om-1.1)/.8));let od=!!i?.current.vetrina,oh=Math.min(5,Math.floor(om)),ov=om-oh,ox=5===oh?Math.max(0,Math.min(1,(ov-.14)/.68)):4===oh?Math.min(1,ov/.13):2===oh?Math.max(0,Math.min(1,(ov-.12)/.68)):1===oh?Math.max(0,Math.min(1,(ov-.34)/.66)):ov,og=a?0:Math.max(0,Math.min(1,(om-1.45)/.55))*Math.max(0,Math.min(1,(2.75-om)/.45)),oM=a?0:Math.max(0,Math.min(1,(om-2.55)/.45))*Math.max(0,Math.min(1,(4.15-om)/.3)),ob=a?0:(0,eA.s)(of);window.__kcVisto=of;let oy=a?0:(0,eA.r)(of),ow=Math.min(1,(oi-.3)/2.35),oz=Math.min(1.7,Math.max(1,1.78/oe));if(i?.current.on&&!i.current.vetrina){let e=i.current,o=Math.max(.001,1+(e.zoom-1)*e.mira),t=W.current,r=Math.max(.001,t?t.scale.x:o),l=t?t.position.x-e.offX:0,n=t?t.position.y-e.offY:0,s=aA.position.z,c=(a,t)=>{let i=s/Math.max(.5,s-(.18+Math.max(0,a))*o),r=.17*o;return t.dx=((e.offX+e.campo.x)/i-e.offX-r)/o,t.sx=((e.offX-e.campo.x)/i-e.offX+r)/o,t.su=((e.offY+e.campo.y)/i-e.offY-r)/o,t.giu=((e.offY-e.campo.y)/i-e.offY+r)/o,t};el.current!==e.seme&&(el.current=e.seme,er.current.fill(0));for(let o=0;o<em.N;o++){let t=I.current[o];if(!t)continue;let i=em.Z[o],s=i[0],u=i[1],p=i[2];er.current[o]&&e.presa.i!==o&&(s=ei.current[3*o],u=ei.current[3*o+1],p=ei.current[3*o+2]);let m=c(.17,aK),f=Math.min(m.dx,-m.sx),d=Math.min(m.su,-m.giu),h=37*e.seme;if("sparso"===e.modo){let a=Math.max(1,Math.round(Math.sqrt(em.N*f/Math.max(.001,d)))),t=Math.ceil(em.N/a),i=2*f/a,r=2*d/t,l=(ap[o]+e.seme)%(a*t),n=l%a,c=Math.floor(l/a),m=Math.max(0,(i-em.r)*.5),v=Math.max(0,(r-em.r)*.5);s=-f+i*(n+.5)+((0,em.i)(o+301+h)-.5)*2*m,u=-d+r*(c+.5)+((0,em.i)(o+407+h)-.5)*2*v,p=((0,em.i)(o+513+h)-.5)*.2}else if("gravita"===e.modo){let e=c(0,aK),a=Math.max(em.r,e.dx-e.sx),t=Math.max(em.r,e.su-e.giu),i=Math.max(1,Math.floor(a/.36)),r=Math.max(1,Math.floor(t/.36)),l=Math.min(em.N,Math.max(i,Math.ceil(em.N/r))),n=Math.max(em.r,Math.min(.36,a/l)),m=(Math.min(em.N,l)-1)*n;s=(e.sx+e.dx)*.5-m/2+o%l*n,u=e.giu+.5*em.r+.36*Math.floor(o/l),p=0}if("logo"!==e.modo||e.presa.i===o||er.current[o]){e.presa.i===o&&(s=(e.presa.x-l)/r,u=(e.presa.y-n)/r,p=.14);let a=c(p,a0);s=Math.max(a.sx,Math.min(a.dx,s)),u=Math.max(a.giu,Math.min(a.su,u)),e.presa.i===o&&(ei.current[3*o]=s,ei.current[3*o+1]=u,ei.current[3*o+2]=0,er.current[o]=1)}ek.current[3*o]=s,ek.current[3*o+1]=u,ek.current[3*o+2]=p;let v=e.presa.i===o?0:eD.current[3*o],x=e.presa.i===o?0:eD.current[3*o+1],g=e.presa.i===o?0:eD.current[3*o+2],M=a9(e.presa.i===o?.32:.012+.1*e.mira);t.position.x+=(s+v-t.position.x)*M,t.position.y+=(u+x-t.position.y)*M,t.position.z+=(p+g-t.position.z)*M,e.vive[2*o]=l+t.position.x*r,e.vive[2*o+1]=n+t.position.y*r;let b=Math.min(1,1.6*Math.hypot(s-t.position.x,u-t.position.y));t.rotation.x+=.9*a7*b,t.rotation.y+=1.1*a7*b;let y=Math.max(0,1-3*b),w=a9(.11)*y*y;if(w>5e-4){let e=Math.round((t.rotation.x- -.13)/ah)*ah+-.13,a=Math.round((t.rotation.y-.3)/ah)*ah+.3;t.rotation.x+=(e-t.rotation.x)*w,t.rotation.y+=(a-t.rotation.y)*w,t.rotation.z+=(Math.round(t.rotation.z/ad)*ad-t.rotation.z)*w}t.scale.setScalar(t.scale.x+(1-t.scale.x)*a9(.06));let z=F.current[o];if(z){let t=2.2*on%(em.N+6),i=e.zap>0?Math.max(0,.85-.5*b)*(.55+.45*Math.sin(9*on-13*em.t[o])):Math.max(.03+.014*Math.sin(.9*on),.45*Math.max(0,1-Math.abs(t-o)/1.1)),r=H.current===o&&!a;r&&(i=Math.max(i,.85+.15*Math.sin(4.4*on+o))),a||(i=Math.max(i,.24*en.current[o])),z.emissive.set(aS.i),a||H.current,aS.X;let l=Math.max(0,i=0),n=l>z.emissiveIntensity&&e.zap>0?.5:r?.09:.08;z.emissiveIntensity+=(l-z.emissiveIntensity)*a9(n)}}{let a=.5*em.r;for(let e=0;e<em.N;e++)en.current[e]*=.86;let o=e$.current;for(let e=0;e<3*em.N;e++)o[e]=ek.current[e]+eD.current[e];for(let a=0;a<3;a++)for(let a=0;a<em.N;a++)for(let t=a+1;t<em.N;t++){let i=o[3*t]-o[3*a],r=em.r-Math.abs(i);if(r<=0)continue;let l=o[3*t+1]-o[3*a+1],n=em.r-Math.abs(l);if(n<=0)continue;let s=o[3*t+2]-o[3*a+2],c=em.e-Math.abs(s);if(c<=0)continue;let u=0,p=r,m=i<0?-1:1;n<p&&(u=1,p=n,m=l<0?-1:1),c<p&&(u=2,p=c,m=s<0?-1:1);let f=(p+.003)*.5,d=e.presa.i===a,h=e.presa.i===t;o[3*a+u]-=m*(d?0:h?2*f:f),o[3*t+u]+=m*(h?0:d?2*f:f)}for(let e=0;e<3*em.N;e++){let a=o[e]-ek.current[e];eD.current[e]+=(a-eD.current[e])*a9(.1)}for(let e=0;e<em.N;e++){let o=I.current[e];if(o)for(let t=e+1;t<em.N;t++){let i=I.current[t];if(!i)continue;let r=em.r-Math.abs(i.position.x-o.position.x);if(r<=0)continue;let l=em.r-Math.abs(i.position.y-o.position.y);if(l<=0)continue;let n=em.e-Math.abs(i.position.z-o.position.z);if(n<=0)continue;let s=Math.min(1,Math.min(r,Math.min(l,n))/a);s>en.current[e]+.16&&s>.12&&(0,ab.C)(e,s,o.position.x/Math.max(.001,oi),eF.current),s>en.current[e]&&(en.current[e]=s),s>en.current[t]&&(en.current[t]=s)}}}if(W.current){W.current.position.x+=(e.offX*e.mira-W.current.position.x)*a9(.05),W.current.position.y+=(e.offY*e.mira-W.current.position.y)*a9(.05),W.current.rotation.x+=(0-W.current.rotation.x)*a9(.05),W.current.rotation.y+=(0-W.current.rotation.y)*a9(.05);let a=1+(e.zoom-1)*e.mira;W.current.scale.setScalar(W.current.scale.x+(a-W.current.scale.x)*a9(.05))}e_.current?.forEach(e=>{e.visible=!1});return}let oL=0;if(p&&!a){let e=p.current,o=os<.3?Math.max(0,1-2*om):0,t=Math.min(.05,s),i=es.current,r=eI.current,l=Math.max(-.6,Math.min(.6,(e.mx??e.x)-e.x))*oe,n=Math.max(-.6,Math.min(.6,(e.my??e.y)-e.y));T.current[0]+=(l-T.current[0])*a9(.06),T.current[1]+=(n-T.current[1])*a9(.06),ep.current=e.tieni>.9&&o>0?ep.current+t:0;let c=0,u=0;for(let e=0;e<em.N;e++)ec.current[e]>c&&(c=ec.current[e]),i[e]>u&&(u=i[e]);window.__cede=[u,c];for(let l=0;l<em.N;l++){let n=I.current[l],s=.5,u=0,p=1;if(n&&o>0){n.getWorldPosition(aV).project(aA);let a=Math.hypot(u=(aV.x-e.x)*oe,p=aV.y-e.y)||1e-4;s=Math.min(1,a/1.6),u/=a}let m=l===em.N-1,f=m?0:o*(0,em.D)(Math.max(0,Math.min(1,(ep.current-.15-em.t[l]/em.o*.6)/2.8))),d=f>ec.current[l]?2.2:2.6;eu.current[l]+=(d*d*(f-ec.current[l])-2*d*eu.current[l])*t,ec.current[l]+=eu.current[l]*t,ec.current[l]<0&&(ec.current[l]=0,eu.current[l]=Math.max(0,eu.current[l])),ec.current[l]<4e-4&&.004>Math.abs(eu.current[l])&&(ec.current[l]=0,eu.current[l]=0);let h=Math.max((0,em.D)(Math.min(1,c/.6))*o,Math.max(0,Math.min(1,1.4*e.tieni-.12*s))*o),v=h>i[l]?4.4-.6*s:m?2.8:3.6;r[l]+=(v*v*(h-i[l])-2*v*r[l])*t;let x=i[l];i[l]+=r[l]*t,x>0&&i[l]<=0&&r[l]<-.3&&(en.current[l]=Math.max(en.current[l],Math.min(m?.9:.5,-(.5*r[l]))),m&&!a&&(0,ab.C)(l,Math.min(.6,-(.4*r[l])),0,eF.current)),i[l]<-.05&&(i[l]=-.05,r[l]=Math.max(0,r[l])),4e-4>Math.abs(i[l])&&.004>Math.abs(r[l])&&(i[l]=0,r[l]=0),Math.abs(i[l])>oL&&(oL=Math.abs(i[l]))}}if(!a)for(let e=0;e<em.N;e++)en.current[e]*=.86;let oS=!ol&&oe>=1,oA=(ol||oS)&&!a&&!od&&om<2,oq=oS?ex:ef,oC=oS?eg:ev,oP=W.current,oR=oP?Math.max(.001,oP.scale.x):1,oE=oP?oP.position.x:0,oT=oP?oP.position.y:0,oO=oP?oP.position.z:0,oI=Math.tan(aA.fov*Math.PI/360);for(let e=0;e<em.N;e++){let s=I.current[e];if(!s)continue;let m=1===oh?.55:2===oh?.72:.6*(5===oh),d=1===oh||5===oh?em.t[e]:2===oh?1-em.t[e]:e/(em.N-1),h=-1;if(0===oh&&!a){let a=function(){let e=X.gruppo;return!e||X.attivo<=0?null:{x:e.position.x+X.testa*Z/B*e.scale.x,y:e.position.y,s:e.scale.x}}();if(a){let o=W.current?W.current.scale.x:1,t=(W.current?W.current.position.x:0)+O[0][e].p[0]*o;h=Math.max(Math.max(0,Math.min(1,(a.x-t)/(3.5*a.s)-.25*(0,em.i)(29*e+5))),Math.max(0,Math.min(1,(ov-.9)/.1))),oA&&(h=Math.max(h,Math.max(0,Math.min(1,(ov-(.04+(.6*em.t[e]+.4*(0,em.i)(53*e+5))*.5))/.4)))),aF[e]=Math.abs(O[0][e].p[1]*o+(W.current?W.current.position.y:0)-a.y)/Math.max(.2,a.s)}}let g=h>=0?.35+.65*h:m>0?Math.max(0,Math.min(1,(ox-d*m)/(1-m))):Math.max(0,Math.min(1,1.2*ox-e/em.N*.2)),y=1===oh&&!a,z=2===oh&&!a,S=y?(0,em.D)(Math.min(1,g/.6)):0,q=y?Math.max(0,Math.min(1,(g-.58)/.3)):0,C=y?Math.max(0,Math.min(1,(g-.88)/.12)):0,P=z?(0,em.D)(Math.min(1,g/.22)):0,k=z&&!a?Math.max(0,Math.min(1,(1.18*Math.max(0,Math.min(1,(of-2)/.62))-(1-em.t[e]))/.18)):0,G=5===oh&&!a,et=0===oh&&!a&&!od,ei=em.t[e],er=G?Math.max(0,Math.min(1,(ov-0-0*ei)/.1)):0,el=(0,em.D)(er),eu=et&&oA&&0===oh,ep=y?S:eu?function(e,a){let o=e<=0?0:e>=1?1:e,t=Math.min(1,o/.14);return(1-Math.exp(-(t*t*(3-2*t)*o*a)))/(1-Math.exp(-a))}(Math.max(0,(g-.35)/.65),ed[4*e]):z?(0,em.D)(Math.max(0,(g-.22)/.78)):G?el:et?(0,em.D)(Math.max(0,(g-.35)/.65)):(0,em.D)(g),ef=O[oh][e],ev=O[oh+1][e],ex=Math.min(1,1.15*oi/5.6),eg=Math.min(1,1.05*ot/4.2),eL=1===oh?ef.p[0]*ex:ef.p[0],eS=1===oh?ef.p[1]*eg:ef.p[1],eE=0===oh?ev.p[0]*ex:ev.p[0],eI=0===oh?ev.p[1]*eg:ev.p[1],ek=ef.p[2],eD=ev.p[2];if(oA&&(et||y)){let a=oS?(oq[3*e+2]-oO)/oR:oq[3*e+2],o=Math.max(.5,aA.position.z-(oO+a*oR))*oI,t=(aA.position.x+oq[3*e]*o*oe-oE)/oR,i=(aA.position.y+oq[3*e+1]*o-oT)/oR,r=a;if(oC[e]&&a8&&aL.f.peso>.003&&oP&&(a_.copy(oa.position).applyMatrix4(aL.f.inv),a$.set(oq[3*e],oq[3*e+1],.5).unproject(oa).applyMatrix4(aL.f.inv).sub(a_),a$.y<-1e-4)){let e=(aL.f.quota+em.r*oR*.87+.05-a_.y)/a$.y;if(a$.multiplyScalar(e).add(a_),e>0&&a$.z<aL.f.zVicino&&a$.z>aL.f.zLontano){oP.worldToLocal(a$.applyMatrix4(aL.f.m));let e=Math.min(1,1.5*aL.f.peso);t+=(a$.x-t)*e,i+=(a$.y-i)*e,r+=(a$.z-r)*e}}0===oh?(eE=t,eI=i,eD=r):(eL=t,eS=i,ek=r)}let e$=eL+(eE-eL)*ep,e_=eS+(eI-eS)*ep,eU=0;if(eu&&oC[e]){let a=Math.min(1,Math.max(0,(g-.35)/.65)/.8);e_=eS+(eI-eS)*(eU=a*a);let o=Math.max(0,(Math.max(0,(g-.35)/.65)-.8)/.2);o>0&&(e_+=Math.sin(Math.PI*o)*(1-o)*.22*(.6+ed[4*e+1]))}let ej=ek+(eD-ek)*(eu&&oC[e]?(ep+eU)*.5:ep);if(eu){let a=Math.sin(Math.PI*ep);e_+=ed[4*e+1]*Math.sin(Math.PI*Math.pow(ep,.55)),e$+=ed[4*e+2]*a*Math.sqrt(1-ep),ej+=(oS?-Math.abs(ed[4*e+3])-.25:ed[4*e+3])*a}if(h>=0){let a=Math.sin(Math.PI*ep)*(.35+.9*(1-Math.min(1,aF[e]/1.6)));e$+=.9*a,ej+=.25*a*((0,em.i)(31*e+2)-.5),aN[e]=a}else aN[e]=0;if(et){let a=em.f[e];if(0!==a){let e=(0,em.D)(Math.min(1,ov/.35))*(1-ep)*ef.s*1.9;e$+=a*em.W[0]*e,e_+=a*em.W[1]*e}}if(G){let a=em.f[e];if(0!==a){let e=el*(1-(0,em.D)(Math.max(0,Math.min(1,(ov-.84)/(1-.84)))))*ev.s*1.9;e$+=a*em.W[0]*e,e_+=a*em.W[1]*e}}if(z){let a=Math.hypot(ef.p[0],ef.p[1])||1,o=.55*Math.sin(Math.PI*ep);e$+=ef.p[0]/a*o,e_+=ef.p[1]/a*o,ej+=.25*Math.sin(Math.PI*ep);let t=em.f[e];if(0!==t){let e=(0,em.D)(Math.min(1,ox/.24))*(1-ep)*ef.s*1.1;e$+=t*em.W[0]*e,e_+=t*em.W[1]*e}}if(od){let a=i.current,o=Math.max(.4,a.campo.x),t=Math.max(.3,a.campo.y),r=am[e],l=r%6,n=Math.floor(r/6),s=((0,em.i)(301+7*e)-.5)*.44,c=((0,em.i)(407+11*e)-.5)*.44;e$=((l+.5+s)/6-.5)*2*o,e_=((n+.5+c)/4-.5)*2*t,ej=((0,em.i)(e+513)-.5)*.62,e$+=.045*Math.sin(.21*on+2.13*e),e_+=.055*Math.sin(.26*on+1.31*e),ej+=.05*Math.sin(.17*on+.87*e)}oM>0&&(e$*=1-oM*(1-ow),e_*=1-oM*(1-oz));let eV=y?Math.sin(Math.PI*Math.pow(S,.62)):z?Math.sin(Math.PI*Math.pow(ep,1.3)):G?Math.sin(Math.PI*el):Math.sin(Math.PI*ep),eW=eB[e],eH=y?1.35*eW.amp:eu?.3*eW.amp:eW.amp;if(e$+=eW.dir.x*eH*eV,e_+=eW.dir.y*eH*eV,y||z||(ej+=eW.dir.z*eH*eV),G){e$=ef.p[0]+(ev.p[0]-ef.p[0])*el,e_=ef.p[1]+(ev.p[1]-ef.p[1])*el,ej=ef.p[2]+(ev.p[2]-ef.p[2])*el+.62*Math.sin(Math.PI*Math.pow(er,.6));let a=Math.max(0,Math.min(1,(er-.84)/.16));a>0&&(ej-=Math.sin(a*Math.PI*2)*Math.exp(-(4.6*a))*.05);let o=Math.exp(-Math.pow((er-.9)/.06,2));o>.01&&er<.999&&(en.current[e]=Math.max(en.current[e],2.6*o))}if(y){let e=(0,em.D)(Math.min(1,g/.1)),a=ek+(em.c+.3+.42*eW.amp-ek)*e;ej=a+(em.s-a)*(q*q);let o=(.15+.11*eW.amp)*S*(1-q*q);e_+=(.5+.55*eW.amp)*eV+o,C>0&&(ej-=Math.sin(C*Math.PI*2.2)*Math.exp(-(4.6*C))*em.e*em.q*.17)}if(z){let e=Math.max(0,1-Math.abs(g-.06)/.06),a=em.c+.26+.3*eW.amp,o=em.s+(a-em.s)*P-e*em.e*em.q*.12;ej=o+(ev.p[2]-o)*ep+k*(1-P)*em.e*em.q*.62+(.62+.55*eW.amp)*Math.sin(Math.PI*Math.pow(ep,.45))}if(y||z){let e=ef.s+(ev.s-ef.s)*(y?(0,em.D)(Math.min(1,g/.62)):ep),a=em.r/2*em.y+em.r*e*.5,o=Math.max(0,(Math.abs(e$)-a)/.5),t=Math.max(0,(Math.abs(e_)-a)/.5),i=(1-(0,em.D)(Math.min(1,o)))*(1-(0,em.D)(Math.min(1,t)));if(i>.001){let a=em.c+em.e*e*.5-.026;ej+=(Math.max(ej,a)-ej)*i}}let eX=(1-e/(em.N-1))*.12,eY=Math.max(0,Math.min(1,e/em.N*.78+(om-4.3)*.62)),eQ=(0,em.D)(Math.max(0,Math.min(1,(5.04-eX-om)/.26)))*(0,em.D)(Math.max(0,Math.min(1,(.985-eY)/.13))),eJ=(0,em.D)(Math.max(0,Math.min(1,(om-4.06)/.12)))*eQ;if(eJ>0){let a=function(e,a=4.3){let{pt:o,cum:t}=function(e){let a=Math.max(4.3,e);if(au&&.005>Math.abs(au.capo-a))return au;let o=ac.map((e,o)=>[0===o?-a:o===ac.length-1?a:e[0],e[1],7*Math.min(o,ac.length-2)%3*.16-.16]);for(let e=0;e<4;e++){let e=[o[0]];for(let a=0;a<o.length-1;a++){let t=o[a],i=o[a+1];e.push([.75*t[0]+.25*i[0],.75*t[1]+.25*i[1],.75*t[2]+.25*i[2]]),e.push([.25*t[0]+.75*i[0],.25*t[1]+.75*i[1],.25*t[2]+.75*i[2]])}e.push(o[o.length-1]),o=e}let t=[0];for(let e=1;e<o.length;e++)t.push(t[e-1]+Math.hypot(o[e][0]-o[e-1][0],o[e][1]-o[e-1][1]));return au={capo:a,pt:o,cum:t}}(a),i=Math.max(0,Math.min(1,e))*t[t.length-1],r=0,l=t.length-1;for(;l-r>1;){let e=r+l>>1;t[e]<=i?r=e:l=e}let n=t[l]-t[r],s=n>0?(i-t[r])/n:0,c=o[r],u=o[l];return[c[0]+(u[0]-c[0])*s,c[1]+(u[1]-c[1])*s,c[2]+(u[2]-c[2])*s]}(eY,oi/Math.max(.2,W.current?W.current.scale.x:1)+.9);e$+=(a[0]-e$)*eJ,e_+=(a[1]-e_)*eJ,ej+=(a[2]-ej)*eJ,ej+=Math.sin(Math.PI*eQ)*(7*e%5-2)*.34}let e2=Math.max(0,1-1.6*Math.abs(om-4)),e6=1-og,e8=(em.Z[e][0]+em.Z[e][1])*1.5;a||(e_+=.02*Math.sin(.5*on+e8)*e6),e_+=.035*Math.sin(.4*on+.8*e8)*((a?0:Math.min(1,2*Math.min(om,6-om)))*e6),oM>0&&!a&&(e$+=.06*Math.sin(.27*on+2.13*e)*oM,e_+=.085*Math.sin(.33*on+1.31*e)*oM,ej+=.05*Math.sin(.21*on+.87*e)*oM);let e7=1;if(x.current<.999||M.current<aI.fine){let o=Math.max(0,Math.min(1,t?.current.q??1)),i=ag[e]??[2,2],r=(i[0]-2)*.42,l=(2-i[1])*.42,n=Math.max(0,Math.min(1,(o/.82*em.N-em.h[e])/1.9)),s=a?+(n>.5):(0,em.D)(n),c=v[e],u=em.f[e],p=0===u?0:u*(.6+Math.abs(c.x)),m=0===u?1:c.y,f=Math.hypot(p,m)||1,d=5.2+7*(1-s)*(1-s)*(1-s),h=r+p/f*d,x=l+m/f*d,g=2.4*c.z-1.2,y=b.current,z=y?e$:h+(r-h)*s,S=y?e_:x+(l-x)*s,q=y?ej:g+(0-g)*s,C=a?aI.fine*(M.current>0):M.current,P=em.f[e],R=(0,em.D)(a1((C-.35*(0,em.i)(7*e+1))/aI.scioglie)),T=6.283*(0,em.i)(11*e+2),O=.22*z+.2*Math.cos(T+.33*C),I=.22*S+.16*Math.sin(1.3*T+.27*C)+.1,F=.5+.55*(0,em.i)(3*e+5),N=z+O*R,k=S+I*R,D=q+F*R,$=((0,em.i)(e+17)-.5)*1.1,_=((0,em.i)(e+29)-.5)*1.1;if(0!==P){let a=aI.lParte+em.t[e]/em.o*aI.lArco,o=(0,em.D)(a1((C-a)/aI.volo)),t=(0,em.D)(a1((C-aI.incastro)/aI.chiude)),i=P*em.W[0]*aI.scosto*(1-t),r=P*em.W[1]*aI.scosto*(1-t);e$=N+(e$+i-N)*o,e_=k+(e_+r-k)*o,ej=D+(ej-D)*o+.18*Math.sin(Math.PI*o);let l=R*(1-o);L.current[e]=(.4+C*$)*l,A.current[e]=(.3+C*_)*l,w.current[e]=0}else{let o=(0,em.D)(a1((C-aI.orienta)/(aI.centro-aI.orienta))),t=a1((C-aI.centro)/aI.cade),i=aI.alto*(1-(0,em.D)(t));e$=N+(e$-N)*o,e_=k+(e_-k)*o,ej=D+(ej+i-D)*o;let r=R*(1-o);if(L.current[e]=(.4+C*$)*r,A.current[e]=(.3+C*_)*r,w.current[e]=.35*C*r,t>=1&&!E.current&&(E.current=!0,(0,aw.Z)(),!a)){en.current[e]=Math.max(en.current[e],1);let a=(0,ay.a)("urto-finale",1,!1);a||(0,ab.C)(e,.9,0,-1);let o=window;(o.__posa??=[]).push([Math.round(performance.now()),a])}}e7=s}let ae=0,aa=0,ai=0,ar=0,an=1,as=Math.max(0,Math.min(1,(of-3.78)/.07)),ap=Math.max(0,Math.min(1,(of-3.9)/.12)),af=Math.max(0,Math.min(1,(of-2.76)/.08)),ad=aM[e].p,ah=Math.hypot(ad[0],ad[1])||1,az=2.5*Math.max(oi,ot),aq=ad[0]/ah*az,aE=ad[1]/ah*az,aT=O[3][e].p,aV=Math.hypot(aT[0],aT[1])||1;af>0&&of<=3.02&&(e$+=(aT[0]/aV*az-e$)*af,e_+=(aT[1]/aV*az-e_)*af,ej+=(aT[2]-ej)*af);let aB=oh>4||4===oh&&ox>=.999;if(of>3.02&&!(aB&&ap>=1)){let t=O[4][e].p,i=t[0]*(oM>0?1-oM*(1-ow):1),r=t[1]*(oM>0?1-oM*(1-oz):1);e$=aq+(i-aq)*ap,e_=aE+(r-aE)*ap,ej=ad[2]+(t[2]-ad[2])*ap;{let a=a5(e)/23*Math.PI*2+.06*on,t=Math.cos(a),i=Math.sin(a),r=oi*(o?.86:.84),l=ot*(o?.82:.78);ae=4===e?Math.max(0,Math.min(1,(of-3.205)/.2)):e<4?Math.max(0,Math.min(1,(of-(av[e]-.15))/.15)):Math.max(0,Math.min(1,(of-ax[Math.max(0,e-7)].da)/.22)),aa=t*r,ai=i*l-.05*ot,ar=-.25-i*(o?.5:.9),an=.72*oo}(ae*=1-as*(1-(a||eK.spazio?0:(0,em.D)(Math.min(1,aC.p/.04)))))>.001&&(e$+=(aa-e$)*ae,e_+=(ai-e_)*ae,ej+=(ar-ej)*ae)}let aK=0,a0=1,a2=0;if(!a&&!eK.spazio&&aC.p>5e-4&&of>3.5){let a=r?Math.max(0,Math.min(1,r.current)):0,o=1-(0,em.D)(Math.max(0,Math.min(1,(a-.11)/.02)));if(o>5e-4){let a,t,i,r=aC.p,l=aC.cornice,s=W.current?W.current.scale.x:1,c=W.current?W.current.position.x:0,u=W.current?W.current.position.y:0,p=oe<1,m=(0,em.x)(oa,0,.5,.2),f=(0,em.x)(oa,1,.5,.2),d=(0,em.x)(oa,.5,0,.2)[1]-(0,em.x)(oa,.5,1,.2)[1],h=Math.min(d*(p?.062:.085)*1.45,(f[0]-m[0])/4.6)/1.85,v=h/d*1.25,x=n.size.width/Math.max(1,n.size.height),g=Math.min(l.w+2*v/x,p?1-.6*v/x:1),M=l.h+2*v;if(4!==e){let o=a5(e)/23*Math.PI*2+.06*on;[a,t]=aO(o/(2*Math.PI),l.cx,l.cy,g,M,x);let n=(1-Math.sin(o))*.04;i=(0,em.D)(aR(r,[aP.forma[0]+n,aP.forma[1]-.08+n]))}else{a=l.cx,t=Math.min(.94,l.cy+M/2+1.1*v);let o=aR(r,aP.cade);i=o*o,o>=1&&!R.current&&(R.current=!0,en.current[e]=Math.max(en.current[e],1.6),(0,ab.C)(e,.45,0,eF.current)),o<.6&&(R.current=!1)}let b=(0,em.x)(oa,a,t,.2);aK=i*o;let y=.3*Math.sin(Math.PI*i);e$+=((b[0]-c)/s-e$)*aK,e_+=((b[1]-u)/s-e_)*aK,ej+=(.2/s+y-ej)*aK,a0=h/em.r/s,a2=-.5*Math.PI*.5,ae*=1-aK}}let a3=0,a7=0,or=0,os=0,oc=0,ou=1,op=0,oL=0,oF=0,oN=0,ok=0,oD=0,o$=Math.min(8,Math.max(1,l??8));if(r){let o=Math.max(0,Math.min(1,r.current)),t=eK.spazio&&!a&&c?(0,eq.r)(Math.max(0,Math.min(1,c.current))):0;if(eK.spazio&&!a&&o>.5&&t>0&&t<.2||o<.9995&&(o>5e-4||eK.spazio&&!a&&aC.p>.02)){let t,i=W.current?W.current.scale.x:1,r=W.current?W.current.position.x:0,l=W.current?W.current.position.y:0,n=W.current?W.current.position.z:0,s=oe<1,c=e5(oe,Math.tan(aA.fov*Math.PI/360),eq._.oriz,aC.cornice,s,aH),u=a?Math.min(o$-1,Math.floor(Math.min(o/eK.sosta,1)*o$)):e1(o,o$,eK.sosta);if(e3(u,o$),c.S,s||a||(e4(u,o$),c.Z),e<o$)t=8+e;else{let a=e-o$;t=a<8?a:a+o$}let p=t/22*.05,m=(22-t)/22*.03,f=eK.spazio&&!a,d=f?(0,em.D)(Math.max(0,Math.min(1,(aC.p-.06-6*p)/.55))):1,h=f?(0,em.D)(Math.max(0,Math.min(1,(aC.p-.07)/.05)))||+(o>5e-4):(0,em.D)(Math.max(0,Math.min(1,(o-.008-p)/.05))),v=(s?28:50)/((s?e0.mano:e0.computer)*Math.max(1,o$)),x=h*(f?1:(0,em.D)(Math.max(0,Math.min(1,((.9995-o)/v-4*m)/.88))));if(x>5e-4){oD=x;let o=(0,em.i)(3.7*e+1.1),s=(0,em.i)(5.3*e+2.9),p=(0,em.i)(7.1*e+.3),m=e9(t,a?0:(0,N.B)()/1e3,oe,c,aX);eK.pianoCubo[e]=t%23%3;let h=1+(1-x)*.6,v=1-d,g=aX.y*h*(1+1.6*v),M=aW.set(aX.x*h*(1+1.6*v),g,aX.z*h*(1+.8*v)).applyQuaternion(oa.quaternion).add(oa.position);or=(M.x-r)/i,os=(M.y-l)/i,oc=(M.z-n)/i,op=0,oF=e<o$?(0,em.D)(Math.max(0,Math.min(1,(u-e)*2+1))):0,ou=m/em.r/i;let b=a?0:.05*aZ.t+(0,N.B)()/1e3*.35;if(oL=6.28*s+(u*(.5+.5*o)+b*(.6+.8*o))*(p>.5?1:-1),oN=(p-.5)*.7+(.22*u+.5*b)*(s-.5),eK.spazio&&ao.includes(e)){let o=a?0:(0,N.B)()/1e3,t=((o/19+.37*ao.indexOf(e))%1+1)%1,i=a?1:(0,em.D)(Math.min(1,t/.16))*(1-(0,em.D)(Math.max(0,Math.min(1,(t-.5)/.2)))),r=-.62,l=-.38;if(W.current){let e=aW.copy(aA.position);aA.parent?.localToWorld(e),W.current.worldToLocal(e),e.x-=or,e.y-=os,e.z-=oc,r+=Math.atan2(e.x,e.z),l+=-Math.atan2(e.y,Math.hypot(e.x,e.z))}r+=.08*Math.sin(.41*o+e),l+=.06*Math.sin(.33*o+2.1*e);let n=oL,s=oN,c=(e,a)=>e+Math.atan2(Math.sin(a-e),Math.cos(a-e));oL=n+(c(n,r)-n)*i,oN=s+(c(s,l)-s)*i}a7=x,f&&(al.value=Math.min(al.value,1-.85*x))}}}let o_=c&&!a?(0,eq.r)(Math.max(0,Math.min(1,c.current))):0,oU=(e<o$?8+e:e-o$<8?e-o$:e)/22,oj=eK.spazio&&!a,oV=c&&!a?oj?aY(o_,.005+.04*oU,.16+.04*oU):aY(o_,.004+.05*oU,.05+.05*oU):0,oB=a7*(1-oV),oW=or,oG=os,oZ=oc,oH=ou,oX=op,oY=oL,oQ=oF,oJ=oD,oK=oN,o0=0,o1=0,o2=0,o5=0,o3=1,o4=0,o6=0,o8=0,o7=0,o9=0;if(U.current[e]=0,V.current[e]=0,c&&!a&&oV>5e-4){let a=oh<5?0:om>=5.9995?1:Math.max(0,Math.min(1,(ov-.12-em.h[e]/22*.5)/.2));if(a<1){let o=W.current?W.current.scale.x:1,t=W.current?W.current.position.x:0,i=W.current?W.current.position.y:0,r=W.current?W.current.position.z:0,l=n.clock.elapsedTime,s=oe<1?.45+.45*oe:1,c=em.h[e]/22,u=e%2?1:-1,p=Math.tan(aA.fov*Math.PI/360),m=eT(o_),f=at(o_,l,!1),d=oe<1?.86:-.8,h=(2*oU-1)*Math.min(oe,1.8)*.85*p*5,v=d*p*5,x=-5,g=oj?0:aY(o_,.02+.05*oU,.19+.03*oU),M=e/23*Math.PI*2+.05*l,b=2.4*s,y=Math.cos(M)*b,w=11-m+.15*Math.sin(3*M+.3*l),z=-6+Math.sin(M)*b;h+=(y-h)*g,v+=(w-v)*g,x+=(z-x)*g,h*=1-.45*Math.sin(Math.PI*g);let L=.16+(.15-.16)*g,S=.6+.7*e+.12*l+(1-g)*Math.PI*2*u,A=.4,q=0,C=(0,em.i)(5.27*e+4.4),P=(0,em.i)(3.1*e+.7),R=oj?1:aY(o_,.24+.03*C,.43);if(R>0){let a=1.3*M+2*P,o=(1.7+2.6*C)*s,t=10+(f.piedi+m+1.7*(.2+1.2*P)-10)*aY(o_,.28+.05*P,.45),i=Math.cos(a)*o,r=t-m+.08*Math.sin(.4*l+e),n=-6+Math.sin(a)*o*.8;h+=(i-h)*R,v+=(r-v)*R,x+=(n-x)*R,S+=R*l*.06*(C-.5),A+=R*Math.sin(.2*l+e)*.3}let E=aY(o_,.4+.002*e,.5);if(E>0){let a=aY(o_,eR.respiro[0],eR.nuclei[0]+.02),o=e/23*Math.PI*2+.024*l+.9*o_,t=(3.2+-2.25*a)*s,i=f.piedi+.85,r=Math.cos(o)*t,n=i+(e/22-.5)*(1.5+.3*a),c=-6+Math.sin(o)*t*.6;h+=(r-h)*E,v+=(n-v)*E,x+=(c-x)*E,L+=(.12-L)*E}let T=aY(o_,eR.nuclei[0]+.04*c,eR.nuclei[0]+.03+.04*c);if(T>0){if(eG.nucleiOk){let a=eG.nucleiCol[aQ[e]];aJ.x=a.x,aJ.y=a.y,aJ.z=a.z}else!function(e,a,o,t){let[i,r,l]=eZ[e],n=Math.cos(o),s=Math.sin(o),c=r-.5;t.x=(n*i-s*c)*1.7,t.y=a+(.5+s*i+n*c)*1.7,t.z=-6+1.7*l}(aQ[e],f.piedi,f.rollio,aJ);h+=(aJ.x-h)*T,v+=(aJ.y-v)*T,x+=(aJ.z-x)*T,L+=(.085-L)*T,S+=T*Math.PI*2*u,A+=(.25-A)*T,q*=1-T}let O=aW.set(h,v,x).applyQuaternion(oa.quaternion).add(oa.position),I=(O.x-t)/o,F=(O.y-i)/o,N=(O.z-r)/o,k=L/em.r/o;if(a>0){let o=(0,em.D)(Math.min(1,a/.55)),t=a<.3?0:Math.pow((a-.3)/.7,2),i=Math.max(0,(a-.9)/.1),r=Math.sin(i*Math.PI*2)*Math.exp(-(4*i))*(1-i)*.06;I+=(e$-I)*o,N+=(ej-N)*o,F+=(e_-F)*t+r,U.current[e]=(0,em.D)(Math.min(1,a/.7)),V.current[e]=(0,em.D)(Math.min(1,a/.6))}o1=I,o2=F,o5=N,o3=k,o4=S-.62,o6=A-.38,o8=q,o0=oV,o7=(.6+.9*g*(1-R)+1.6*Math.sin(Math.PI*Math.min(1,1.2*a)))*(1-a),o9=o0*(1-a)}}if(D.current[e].value=a?0:.4*o7*(1-oB),a3=o9*(1-oB),$.current[e]=a3,o0>0){let e=o0*(1-oB),a=oB+e;or=(o1*e+oW*oB)/a,os=(o2*e+oG*oB)/a,oc=(o5*e+oZ*oB)/a,ou=(o3*e+oH*oB)/a,op=(0*e+oX*oB)/a,oL=(o4*e+oY*oB)/a,oF=(0*e+oQ*oB)/a,oN=(o6*e+oK*oB)/a,ok=o8*e/a,a7=a,oD=oJ}if(eK.spazio&&!a&&a7>.001&&o_<.2&&W.current){let e=W.current.scale.x,a=W.current.position,o=aW.set(or*e+a.x,os*e+a.y,oc*e+a.z).sub(oa.position).applyQuaternion(aG.copy(oa.quaternion).invert()),t=Math.tan(aA.fov*Math.PI/360),i=-o.z;if(i>.05){let r=o.x/(i*t),l=o.y/(i*t)-eK.disco.y,n=ou*em.r*e/(i*t),s=(1.15*eK.disco.r+.75*n)*Math.min(1,4*oB),c=Math.hypot(r,l);if(c<s){let n=s/Math.max(1e-4,c);o.x=r*n*i*t,o.y=(l*n+eK.disco.y)*i*t,o.applyQuaternion(oa.quaternion).add(oa.position),or=(o.x-a.x)/e,os=(o.y-a.y)/e,oc=(o.z-a.z)/e}}}a7>.001&&(e$+=(or-e$)*a7,e_+=(os-e_)*a7,ej+=(oc-ej)*a7);let te=(()=>{let e=Math.max(0,Math.min(1,eO.current));if(e<=5e-4||a)return 0;let o=Math.max(0,Math.min(1,(om-.3)/.6));return e*e*(3-2*e)*.28*(1-o*o*(3-2*o))})();if(te>5e-4){let a=em.$[e];e$+=a[0]*te,e_+=a[1]*te,ej+=a[2]*te}eP.current[e]=te;let ta=es.current[e],to=p&&!a?(p.current.presa??0)*Math.max(0,1-(p.current.tieni??0)*4)*Math.max(0,1-2*om):0;if(to>.002){let a=to*to*.006;e$+=Math.sin(61*on+2.3*e)*a,e_+=Math.sin(47*on+1.1*e)*a}if(Math.abs(ta)>8e-4){let a=em.$[e];e$+=a[0]*ta,e_+=a[1]*ta,ej+=a[2]*ta;let o=Math.max(0,ta),t=.025*o;e$+=Math.sin(.54*on+1.73*e)*t,e_+=Math.sin(.41*on+2.91*e)*t*.85,ej+=Math.sin(.36*on+1.19*e)*t*.7;let i=ec.current[e];if(i>5e-4){let a=em.a[e],o=oe<1,t=o?.12:Math.min(1,.9*oe);e$+=a[0]*i*t,e_+=a[1]*i*(o?1.5:1),ej+=a[2]*i}let r=(0===em.f[e]?.2:.12)*o;e$+=T.current[0]*r,e_+=T.current[1]*r}if(ob>.001){let a=Math.max(.2,W.current?W.current.scale.x:1),{anello:o}=(0,eA.M)(e,on,of),t=2.39996*e+on*(.05+.11*Math.max(0,1.15-o))+of*(1.25-o)*1.1,i=1-.75*oy,r=oi/a*.95*o*i*Math.cos(t),l=ot/a*.9*o*i*Math.sin(t),n=-.35-1.5*(0,em.i)(13*e+7)+.08*Math.sin(.3*on+e)-1.6*oy;e$+=(r-e$)*ob,e_+=(l-e_)*ob,ej+=(n-ej)*ob}if(s.position.set(e$,e_,ej),X.attivo>0&&s.parent&&(s.getWorldPosition(ak),function(e,a,o){let t=X.gruppo;if(!t||X.attivo<=0)return!1;Y.copy(e),t.worldToLocal(Y);let{x:i,y:r,z:l}=Y,n=j.raggio,s=j.kappa;if(Math.abs(Math.hypot(r,l)-n)>1.3)return!1;let c=i,u=1/0;for(let e=i-1.2;e<=i+1.2;e+=.08){let a=s*e,o=r-n*Math.sin(a),t=l-n*Math.cos(a),p=(i-e)*(i-e)+o*o+t*t;p<u&&(u=p,c=e)}let p=e=>{let a=s*e,o=r-n*Math.sin(a),t=l-n*Math.cos(a);return(i-e)*(i-e)+o*o+t*t},m=p(c-.08),f=u,d=p(c+.08),h=m-2*f+d,v=h>1e-9?c+.08*(m-d)/(2*h):c,x=v*B/Z,g=eo(X.coda-.03,X.coda+.03,x)*(1-eo(X.testa-.03,X.testa+.03,x));if(g<=.001)return!1;let M=s*v,b=Math.sin(M),y=Math.cos(M);Q.set(v,n*b,n*y),J.set(0,b,y),K.set(1,n*s*y,-n*s*b).normalize(),ee.crossVectors(J,K).normalize(),ea.copy(Y).sub(Q);let w=ea.dot(ee),z=ea.dot(J),L=1-eo(_/2+.05,_/2+.4,Math.abs(w));if(L<=.001)return!1;let S=0;return 1===a&&z<.3?S=(.3-z)*(1-eo(-.7,-1.2,z)):-1===a&&z>-.3&&(S=(-.3-z)*(1-eo(.7,1.2,z))),!(1e-4>Math.abs(S))&&(S*=g*L,ea.copy(Y).addScaledVector(J,S),t.localToWorld(ea),o.copy(ea).sub(e),!0)}(ak,e%2==0?1:-1,aD)&&(ak.add(aD),s.parent.worldToLocal(ak),s.position.copy(ak))),ol){0===e&&function(e){let a=performance.now(),o=window.scrollY,t=`${window.innerWidth}x${e}`,i=t!==ey;if(ey=t,(a-eM.letti>1e3||i)&&(eM.els=Array.from(document.querySelectorAll("[data-riparo]")),eM.letti=a,!(ew=document.querySelector("[data-velo-entrata]"))))for(let e of eM.els){let a=eb.get(e);a&&(a.fisso=ez(e))}if(ew?.isConnected){eM.n=0;return}ew=null;let r=0;for(let t of eM.els){if(r>=16)break;let l=eb.get(t);if(!l||l.fisso||i||a-l.da>120){let e=t.getBoundingClientRect();l||(l={l:0,t:0,r:0,b:0,y:0,da:0,fisso:ez(t)},eb.set(t,l)),l.l=e.left,l.t=e.top,l.r=e.right,l.b=e.bottom,l.y=o,l.da=a}let n=l.fisso?0:o-l.y,s=l.t-n,c=l.b-n;if(c<0||s>e||l.r-l.l<2)continue;let u=1,p=t;for(let e=0;e<8&&p&&u>.02;e++,p=p.parentElement){let e=p.style?.opacity;void 0!==e&&""!==e&&(u*=Math.max(0,Math.min(1,parseFloat(e))))}if(u<.15)continue;let m=5*r;eM.r[m]=l.l,eM.r[m+1]=s,eM.r[m+2]=l.r,eM.r[m+3]=c,eM.r[m+4]=Math.min(1,(u-.15)/.5),r++}eM.n=r}(n.size.height),s.getWorldPosition(aU).project(aA);let a=n.size.width,o=n.size.height,t=(.5*aU.x+.5)*a,i=(.5-.5*aU.y)*o;s.getWorldPosition(aU);let r=o/(2*aU.distanceTo(aA.position)*Math.tan(aA.fov*Math.PI/360));s.getWorldScale(aj);let l=.24*aj.x*r+6,c=0,u=0;for(let e=0;e<eM.n;e++){let o=5*e,r=eM.r[o+4],n=eM.r[o]-l,s=eM.r[o+1]-l,p=eM.r[o+2]+l,m=eM.r[o+3]+l;if(t<=n||t>=p||i<=s||i>=m)continue;let f=(n+p)/2,d=t<f?n-t:p-t,h=i<(s+m)/2?s-i:m-i;(t<f?n>0:p<a)&&Math.abs(d)<Math.abs(h)?Math.abs(d*r)>Math.abs(c)&&(c=d*r):Math.abs(h*r)>Math.abs(u)&&(u=h*r)}let p=eC.current,m=a9(.09);p[2*e]+=(c-p[2*e])*m,p[2*e+1]+=(u-p[2*e+1])*m,Math.abs(p[2*e])+Math.abs(p[2*e+1])>.3&&s.parent&&(aj.set(p[2*e]/r,-p[2*e+1]/r,0).applyQuaternion(aA.quaternion),aU.add(aj),s.parent.worldToLocal(aU),s.position.copy(aU))}if(u&&om<1.6){let a=f.current;s.getWorldPosition(a).project(aA);let o=u.current;o[2*e]=(.5*a.x+.5)*n.size.width,o[2*e+1]=(.5-.5*a.y)*n.size.height,e===em.N-1&&(o[46]=on,o[47]=1)}let tt=a?0:Math.max(0,1-1.3*Math.abs(om-1)),ti=eV*eW.spin*.2*e6,tr=.05*Math.sin(.17*on*eW.driftDir+1.7*e)*tt*e6,tl=eW.spin>=0?1:-1,tn=y?(1-S)*Math.PI*2*tl:0,ts=C>0?Math.sin(C*Math.PI*2.6)*Math.exp(-(5.2*C))*.03*tl:0,tc=z?Math.max(e6,(0,em.D)(Math.min(1,g/.34))):e6,tu=z?P*(1-ep)*.34*tl:0;s.rotation.set((ef.r[0]+(ev.r[0]-ef.r[0])*ep)*tc+ti+tr+tn+ts+tu,(ef.r[1]+(ev.r[1]-ef.r[1])*ep)*tc+.7*ti+.8*tr+2*tn+.62*ts+.62*tu,(ef.r[2]+(ev.r[2]-ef.r[2])*ep)*tc),eu&&(s.rotation.x+=eh[2*e]*Math.PI*2*ep,s.rotation.y+=eh[2*e+1]*Math.PI*2*ep),0!==aN[e]&&(s.rotation.x+=aN[e]*((0,em.i)(37*e+1)-.5)*1.6,s.rotation.y+=aN[e]*((0,em.i)(41*e+3)-.5)*1.6,s.rotation.z+=aN[e]*((0,em.i)(43*e+7)-.5)*2.4),eP.current[e]>5e-4&&(s.rotation.x+=em.b[e][0]*eP.current[e]*1.4,s.rotation.y+=em.b[e][1]*eP.current[e]*1.4);let tp=Math.max(0,es.current[e]);if(tp>8e-4){s.rotation.x+=em.b[e][0]*tp,s.rotation.y+=em.b[e][1]*tp;let a=ec.current[e];a>5e-4&&(s.rotation.x+=em.a[e][3]*a,s.rotation.y+=em.a[e][4]*a,s.rotation.z+=em.a[e][5]*a),s.rotation.x+=Math.sin(.33*on+2.1*e)*tp*.05,s.rotation.y+=Math.sin(.27*on+1.4*e)*tp*(e===em.N-1?.16:.06)}if(x.current<.999){let a=1-x.current,o=(1-e7)*Math.PI*2,t=e%2?1:-1;s.rotation.x=s.rotation.x*(1-a)+o*t*a,s.rotation.y=s.rotation.y*(1-a)+1.4*o*a,s.rotation.z=s.rotation.z*(1-a)}w.current[e]>5e-4&&(s.rotation.z+=w.current[e]),M.current<aI.fine&&(s.rotation.x+=L.current[e],s.rotation.y+=A.current[e]);let tm=y?(0,em.D)(Math.min(1,g/.62)):ep,tf=ef.s+(ev.s-ef.s)*tm;if(aK>.001&&(tf+=(a0-tf)*aK,s.rotation.x+=(.38-s.rotation.x)*aK,s.rotation.y+=(.62+a2-s.rotation.y)*aK,s.rotation.z+=(0-s.rotation.z)*aK),a7>.001){let a=V.current[e],o=U.current[e];tf+=(ou+(tf-ou)*a-tf)*a7;let t=.38-.16*op+oN,i=ok,r=.62+oL+.45*op;o>0&&(r+=Math.round((s.rotation.y-r)/(2*Math.PI))*Math.PI*2),s.rotation.x+=(t+(s.rotation.x-t)*o-s.rotation.x)*a7,s.rotation.y+=(r+(s.rotation.y-r)*o-s.rotation.y)*a7,s.rotation.z+=(i+(s.rotation.z-i)*o-s.rotation.z)*a7}let td=ae*(1-a3)*(1-oB);if(td>.001){tf+=(an-tf)*td;let a=4===e?-((of-1)/3*760)*Math.PI/180:0,o=e<4||4===e?0:.42,t=e<4||4===e?0:.5+e%3*.22;s.rotation.x+=(o-s.rotation.x)*td,s.rotation.y+=(t-s.rotation.y)*td,s.rotation.z+=(a-s.rotation.z)*td}if(a&&e7<1&&(tf=0),ob>.001){let a=(0,eA.M)(e,on,of),o=Math.max(0,Math.min(1,(a.anello-.22)/.2));tf+=((.3+.28*(0,em.i)(5*e+3))*o*o*(3-2*o)-tf)*ob,tf*=1-oy*(1-Math.max(0,Math.min(1,(of-2.93)/.06)));let t=.12+.2*(0,em.i)(e+31);s.rotation.x+=(.38+.22*Math.sin(on*t+1.3*e)-s.rotation.x)*ob,s.rotation.y+=(.5+.22*Math.sin(on*t*.8+.7*e)-s.rotation.y)*ob,s.rotation.z+=(on*t*.6+.8*of+e-s.rotation.z)*ob;let i=a.vicino*ob;if(i>.001){let e=Math.atan2(s.position.y,s.position.x)-s.rotation.z;e-=Math.PI*Math.round(e/Math.PI),s.rotation.x+=(.12-s.rotation.x)*i,s.rotation.y+=(.12-s.rotation.y)*i,s.rotation.z+=e*i}s.scale.setScalar(tf)}else s.scale.setScalar(tf);if(!a&&e6>.001){let a=(em.Z[e][0]+em.Z[e][1])*1.5;s.position.x+=.01*Math.sin(.43*on+a)*e6,s.position.y+=.01*Math.cos(.37*on+1.3*a)*e6,s.rotation.z+=.009*Math.sin(.31*on+a)*e6}if(a8&&aL.f.peso>.003&&s.parent&&(a4.copy(s.position).applyMatrix4(s.parent.matrixWorld).applyMatrix4(aL.f.inv),a4.z<aL.f.zVicino&&a4.z>aL.f.zLontano)){s.parent.getWorldScale(a6);let e=em.r*tf*a6.x*.87,a=aL.f.quota+e+.04-a4.y;a>0&&(a4.y+=a>.08?a-.04:a*a/.16,a4.applyMatrix4(aL.f.m),s.position.copy(s.parent.worldToLocal(a4)))}let th=F.current[e];if(th){let o=0,t=0;if(om>.92&&om<2.95&&ob<.02&&!a){let a=1===oh?g:om<1?0:1;th.emissive.set(aS.i),a>.93&&(o=.55+.25*Math.sin(3.2*on+.8*e)+.18*k),y&&(o=Math.max(o,.14*S+q*q*.17)),y&&a>.8?(o=Math.max(o,+(t=Math.exp(-Math.pow((a-.885)/.026,2)))),eN.current[e]||(eN.current[e]=1,(0,ab.C)(e,.42+.4*q,s.position.x/Math.max(.001,oi),eF.current))):a<.5&&(eN.current[e]=0),o*=.3+.7*Math.max(0,Math.min(1,(2.75-om)/.45)),2===oh&&(o=Math.max(o*(1-(0,em.D)(Math.min(1,Math.max(0,(g-.22)/.3)))),.95*Math.exp(-Math.pow((g-.2)/.06,2))))}else th.emissive.set(aS.i);a||(o=Math.max(o,.24*en.current[e])),u&&!a&&(o=Math.max(o,.42*u.current[48+e]),u.current[48+e]*=.8);let i=Math.max(0,1-2*Math.abs(om-3));i>0&&!a&&(o=Math.max(o,Math.max(0,1-Math.abs(2.3*on%(em.N+5)-e)/1.2)*i*.5)),e2>0&&!a&&(o=Math.max(o,(.5*Math.sin(1.3*on+2.6*e)+.5)*.12*e2)),oM>0&&!a&&(o=Math.max(o,(.5+.5*Math.sin(.9*on+2.4*e))*.12*oM));let r=Math.max(og);r>0&&!a&&(o=Math.max(o,.45*Math.max(0,1-Math.abs(2.2*on%(em.N+6)-e)/1.1)*r)),a7>.001&&(o=Math.max(o,(.26*oF+.3*op+0)*a7)),oD>.001&&!a&&(o=Math.max(o,(.5+.5*Math.sin(.9*on+2.4*e))*.1*oD));let l=H.current===e&&!a;l&&(o=Math.max(o,.85+.15*Math.sin(4.4*on+e))),a||H.current,aS.X,o=0,th.emissive.set(aS.i);let n=t>.02?.55:2===oh&&g>.22?.3:l?.09:.06;th.emissiveIntensity+=(o-th.emissiveIntensity)*a9(n)}}if(oL>8e-4){let e=I.current;for(let a=0;a<3;a++)for(let a=0;a<em.N;a++){let o=e[a];if(o&&o.visible)for(let t=a+1;t<em.N;t++){let a=e[t];if(!a||!a.visible)continue;let i=(em.r+.02+.09*oL)*(o.scale.x+a.scale.x)*.5,r=a.position.x-o.position.x,l=a.position.y-o.position.y,n=a.position.z-o.position.z,s=r*r+l*l+n*n;if(s>=i*i)continue;let c=Math.sqrt(s)||1e-4,u=(i-c)/c*.5;o.position.x-=r*u,o.position.y-=l*u,o.position.z-=n*u,a.position.x+=r*u,a.position.y+=l*u,a.position.z+=n*u}}}let oF=H.current,oN=e_.current??[],ok=eW.current;if(!eH.current&&W.current){for(let e of oN)W.current.add(e);eH.current=!0}let oD=Math.max(Math.max(0,1-2*om),Math.max(0,Math.min(1,(om-5.32)/.24)),og),o$=os<.35||os>5.2||ou>.02,o_=oD>.5&&!o$&&on%2.4<.45,oU=!!p&&p.current.scarica>.04&&!a,oj=of>3.3&&of<3.86&&!a,oV=eJ.current;if(oj){oV.nsx=0,oV.ndx=0;for(let e=0;e<em.N;e++){let a=I.current[e];a&&(a.position.x<0?oV.sx[oV.nsx++]=e:oV.dx[oV.ndx++]=e)}}let oB=-1;if(oj||of>3.2&&of<3.9)for(let e=1;e<av.length;e++){let a=of-av[e];if(a>0&&a<.055){oB=e;break}}let oW=!!c&&!a&&(0,eq.r)(Math.max(0,Math.min(1,c.current)))>.03&&om<4.9,oG=(oD>.5||oj||!1)&&!oW;for(let e=0;e<oN.length;e++){let t=oN[e],i=t.material;if(oG&&(oF>=0||o_||oU)&&(oU||!o&&!a)){let a,o,t=13*Math.floor(14*on)+97*e;1;if(oj){let e=.34>(0,em.i)(t+61),i=.5>(0,em.i)(t+7),r=i?oV.nsx:oV.ndx,l=i?oV.sx:oV.dx,n=e?!i:i,s=n?oV.nsx:oV.ndx,c=n?oV.sx:oV.dx;a=r>0?l[Math.floor((0,em.i)(t+11)*r)]:0,o=s>0?c[Math.floor((0,em.i)(t+3)*s)]:1}else a=oF>=0?oF:Math.floor((0,em.i)(41*Math.floor(on/2.4)+7*e)*em.N),o=Math.floor((0,em.i)(t+3)*em.N);let r=I.current[a];o===a&&(o=(o+1)%em.N);let l=I.current[o];if(r&&l){ok.d.subVectors(l.position,r.position),ok.p1.crossVectors(ok.d,ok.up).normalize(),ok.p2.crossVectors(ok.d,ok.p1).normalize();let a=ok.d.length(),o=Math.min(.22,.3*a),n=i.userData.punti;if(eQ.current[e]!==t){eQ.current[e]=t;for(let a=0;a<9;a++){let i=a/8,l=Math.sin(Math.PI*i)*o,s=((0,em.i)(t+7*a+31*e)-.5)*l,c=((0,em.i)(t+11*a+53*e)-.5)*l;n[a].set(r.position.x+ok.d.x*i+ok.p1.x*s+ok.p2.x*c,r.position.y+ok.d.y*i+ok.p1.y*s+ok.p2.y*c,r.position.z+ok.d.z*i+ok.p1.z*s+ok.p2.z*c)}}let s=p?p.current.scarica:0,c=oU?(.45+.5*(0,em.i)(t+5))*s:oF>=0?.2+.55*(0,em.i)(t+5):oj?.16+.42*(0,em.i)(t+5):.1+.28*(0,em.i)(t+5);i.opacity+=(c-i.opacity)*a9(.5)}}else i.opacity+=(0-i.opacity)*a9(.2);t.visible=i.opacity>.02}if(oj){let e=0;for(let a of oN)e=Math.max(e,a.material.opacity);let a=Math.round(8*Math.min(.38,.9*e))/8;a>eX.current+.12&&(0,ab.o)(a/.38,(Math.random()-.5)*.9,eF.current),a!==eX.current&&on-eY.current>1/15&&(eY.current=on,eX.current=a,eS()?.style.setProperty("--scossa",a.toFixed(3)))}else 0!==eX.current&&(eX.current=0,eS()?.style.setProperty("--scossa","0"));if(W.current){let e=or&&!od?Math.max(0,1-2.4*om):0;W.current.position.x+=((0+0*e)*x.current-W.current.position.x)*a9(.03)}let oZ=[5.5,5,4.4,4.6,4.5,5.2,5.1],oH=oZ[oh]+(oZ[oh+1]-oZ[oh])*(0,em.D)(ov),oX=Math.max(0,Math.min(1,(.78-oe)/.3)),oY=Math.max(0,Math.min(1,(om-.72)/.28))*(1-Math.max(0,Math.min(1,(om-3.3)/.45))),oQ=(0,m.c)(oH,oe,m.V)*(1-.13*oX),oJ=oH+(oQ-oH)*(1-oY),oK=Math.tan(aA.fov*Math.PI/180/2),o0=em.r*em.y*.5,o1=Math.max(o0/Math.max(.001,oK*Math.min(1,oe)*.62),oe<1?o0/Math.max(.001,.285*oK):0,oe>=1?o0/Math.max(.001,oK*oe*.36):0),o2=oJ+Math.max(0,em.c+o1-oJ)*oY,o5=p&&!a?p.current.scarica**2*.055:0,o3=p&&!a?p.current.tieni:0,o4=o3*o3*.03;aA.position.x+=(Math.sin(41*on)*o5+Math.sin(.9*on)*o4+P.current[0]-aA.position.x)*a9(.55),aA.position.y+=(Math.sin(27*on+1.7)*o5+Math.sin(.7*on+.9)*o4*.7+P.current[1]-aA.position.y)*a9(.55);let o6=o2+((0,m.c)(oZ[0],oe,m.V)*(1-.13*oX)-o2)*ou;p&&(performance.now(),p.current.colpo);let o8=a||od||om>=1?0:(0,em.D)(Math.min(1,om/.35))*(1-(0,em.D)(Math.max(0,(om-.35)/.65)));aA.position.z+=(o6-.52*o3-o6/5.5*(1.1*o8+0)-P.current[2]-aA.position.z)*a9(.04),aA.lookAt(0,0,0);{eL.current<0&&(eL.current=n.gl.toneMappingExposure);let e=eL.current*(1-.26*o3*o3);Math.abs(n.gl.toneMappingExposure-e)>1e-4&&(n.gl.toneMappingExposure=e)}if(!a&&(aA.rotateY((0,eA.F)(of)),aA.rotation.z+=(0,eA.a)(of),c)){let e=eE((0,eq.r)(Math.max(0,Math.min(1,c.current))));Math.abs(e)>1e-6&&aA.rotateX(e),eG.inclina=e}if(!a){let e=Math.max(0,1-1.4*Math.abs(om-1));aA.rotation.z+=.02*Math.sin(.5*on)*e}if(W.current){let e=Math.max(0,1-2*Math.min(om,6-om)),t=od?0:i?.current.on?+("logo"===i.current.modo):e;for(let e=0;e<em.N;e++){let a=k.current[e];a&&(a.value+=(t-a.value)*a9(.08))}let r=a?0:-(.06*(G.current.x+aq.F.x))*e,l=a?0:-(.04*(G.current.y+aq.F.y))*e,s=!od&&(or||o)?Math.max(Math.max(0,1-2.4*om),ou):0,c=.14-.115*(od||a||!(om>=5)?s:1),u=Math.sin(.16*on)*c+Math.sin(.081*on)*c*.45,p=od||om>=1?s:Math.max(s,1-(0,em.D)(Math.max(0,Math.min(1,(om-.35)/.4)))),m=!od&&!a&&om>=5,f=m?1:p,d=m?1:e,h=a?.35:(.34-.31*f+u)*d+r,v=a?-.08:(-.13+.05*f+.05*Math.sin(.1*on)+.022*Math.sin(.047*on))*d-l;W.current.rotation.y+=(h-W.current.rotation.y)*a9(.05),W.current.rotation.x+=(v-W.current.rotation.x)*a9(.05);let g=Math.max(s,p*(or||o?1:0)),M=.26*!!o*g*x.current,b=od?0:Math.max(0,Math.min(1,(560-n.size.height)/80))*(1-x.current),y=n.camera,w=2*Math.max(.1,y.position.z)*Math.tan((y.fov||50)*Math.PI/360)/Math.max(1,n.size.height),z=.2*b*n.size.height*w,L=(od?i.current.zoom||1:(1+(o?.18:.14)*g*x.current)*(1-(1-(o?em.k:em.d))*g))*(1-.25*b);W.current.scale.setScalar(W.current.scale.x+(L-W.current.scale.x)*a9(.04)),W.current.position.y+=(M+z+(a?0:.07*Math.sin(.32*on)*e)-W.current.position.y)*a9(.04)}{let o,t=e.current.kc,i=Math.max(0,Math.min(1,(t-2.55)/.35));ar.value=(o=Math.max(0,Math.min(1,(t-.92)/.6)))*o*(3-2*o)*(1-i*i*(3-2*i)),a&&(ar.value*=.6)}{let e=m.O.envMapIntensity;if(W.current&&(aT||aE<0)){let e=window;e.__secEntrata=aE,aT&&void 0===e.__bangPrimo&&(e.__bangPrimo=performance.now()),W.current.getWorldPosition(a3).project(aA),az.b.x=.5*a3.x+.5,az.b.y=.5*a3.y+.5}else aE>=0&&(window.__secEntrata=aE);for(let a=0;a<F.current.length;a++){let o=F.current[a],t=e*(1-.88*$.current[a]);o&&Math.abs(o.envMapIntensity-t)>.001&&(o.envMapIntensity=t)}}window.__SONDA_CUBI&&(S=n,C=I.current,e2=eF.current,e6=S.camera,e8=new Set(C.filter(Boolean)),e7=e=>{for(let a=e;a;a=a.parent)if(!a.visible)return!1;return!0},ae=[],S.scene.traverse(e=>{e.isMesh&&!e8.has(e)&&e7(e)&&ae.push(e)}),aa=new z.cE,ai=new z.cE,an=new z.cE,as=Math.tan(e6.fov*Math.PI/360),af=C.map(e=>{if(!e)return null;e.updateWorldMatrix(!0,!1),e.getWorldPosition(aa),e.getWorldScale(ai);let a=aa.distanceTo(e6.position),o=aa.clone().project(e6),t=(.5*o.x+.5)*S.size.width,i=(.5-.5*o.y)*S.size.height,r=ai.x*em.r*S.size.height/(2*as*Math.max(.01,a));an.copy(aa).sub(e6.position).normalize(),S.raycaster.set(e6.position,an),S.raycaster.far=Math.max(.01,a-ai.x*em.r*.5);let l=null,n=S.raycaster.intersectObjects(ae,!1).find(e=>{let a=e.object.material;return!(!a||Array.isArray(a))&&(a.transparent?a.opacity>.05:a.depthWrite||e.object.renderOrder>0)});if(n){let e=n.object,a=e.geometry,o=e.material;l=`${e.name||a.type}#ro${e.renderOrder}${o?.transparent?"/t"+(o.opacity??1).toFixed(2):""}@${n.distance.toFixed(2)}`}return S.raycaster.far=1/0,{x:Math.round(t),y:Math.round(i),z:+o.z.toFixed(4),lato:+r.toFixed(1),s:+ai.x.toFixed(4),v:e7(e),copre:l}}),window.__CUBI={telaio:e2,cubi:af},window.__QUOTE={prove:r?.current??0,giornale:c?.current??0})}),(0,n.jsx)("group",{ref:W,children:em.Z.map((e,a)=>(0,n.jsx)("mesh",{ref:e=>{I.current[a]=e},geometry:0===a?em.j:em.G,castShadow:!1,receiveShadow:!1,children:(0,n.jsx)("meshPhysicalMaterial",{ref:e=>{F.current[a]=e},...m.O,color:em.M[a].colore,roughness:em.M[a].roughness,emissiveIntensity:0,onBeforeCompile:e=>{var o,t;let i;(i=em.S[a],e=>{e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
      }`),e.vertexShader=e.vertexShader.replace("#include <common>","#include <common>\n      varying vec3 vSpecklePos;").replace("#include <begin_vertex>","#include <begin_vertex>\n      vSpecklePos = position;");let o={value:0};k.current[a]=o,e.uniforms.uCompatto=o,e.uniforms.uVicini={value:new z.$i(...i)},e.uniforms.uLuceCrepe=ar,e.uniforms.uGranaCubi=al,e.uniforms.uLuceVortice=an,e.fragmentShader=e.fragmentShader.replace("varying vec3 vSpecklePos;",`varying vec3 vSpecklePos;
        uniform float uCompatto;
        uniform vec4  uVicini;
        uniform float uLuceCrepe;
        uniform float uGranaCubi;
        uniform float uLuceVortice;
        vec3 luceCrepeCubo = vec3(0.0);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += luceCrepeCubo;`).replace("diffuseColor.rgb += vec3(s1 * 0.85 + s2);",`diffuseColor.rgb += vec3(s1 * 0.85 + s2) * uGranaCubi;
        // ── RIFLESSO FRESNEL 3D CRISTALLINO D'ARGENTO SULL'OSSIDIANA NERA VULCANICA ──
        vec3 norm = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - clamp(dot(norm, viewDir), 0.0, 1.0), 3.4);
        diffuseColor.rgb += ${(0,C.s)("avorio",.875)} * fresnel * 0.22;

        // ── OMBRA DI CONTATTO ──
        {
          float meta = 0.16, banda = 0.030;
          float o = 0.0;
          o += uVicini.x * (1.0 - smoothstep(0.0, banda, meta - vSpecklePos.x));
          o += uVicini.y * (1.0 - smoothstep(0.0, banda, meta + vSpecklePos.x));
          o += uVicini.z * (1.0 - smoothstep(0.0, banda, meta - vSpecklePos.y));
          o += uVicini.w * (1.0 - smoothstep(0.0, banda, meta + vSpecklePos.y));
          diffuseColor.rgb *= 1.0 - min(1.0, o) * 0.34 * uCompatto;
        }
        if (uLuceVortice > 0.002) {
          // gli smussi: dove la normale dell'oggetto non sta su un asse
          vec3 nOv = abs(normalize(vNormaleOggetto));
          float smusso = 1.0 - smoothstep(0.9, 0.985, max(nOv.x, max(nOv.y, nOv.z)));
          // la luce viene dall'alto a destra, calda come le spire
          float chiave = max(0.0, dot(norm, normalize(vec3(0.45, 0.7, 0.55))));
          luceCrepeCubo += (${(0,C.s)("caldoChiaro",1)} * smusso * (0.12 + 0.55 * chiave)
                          + ${(0,C.s)("avorio",.9)} * s1 * 0.35
                          + ${(0,C.s)("caldo",.9)} * fresnel * chiave * 0.12) * uLuceVortice;
        }
        if (uLuceCrepe > 0.002) {
          // niente filo sugli spigoli (il 10 ottobre li disegnava come
          // quadrati piatti col contorno): solo luce che sale da sotto e
          // prende le facce di taglio, piu' viva in basso e dove si guarda
          // radente, e piena sulla faccia che guarda giu'
          float sotto = smoothstep(0.16, -0.16, vSpecklePos.y);
          vec3 a = abs(vSpecklePos);
          float giu = step(max(a.x, a.z), a.y) * step(vSpecklePos.y, 0.0);
          luceCrepeCubo = ${(0,C.s)("caldo",.54)} * uLuceCrepe
                        * (sotto * sotto * (0.035 + fresnel * 0.16) + giu * 0.12);
        }`).replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
        {
          vec3 nO = abs(normalize(vNormaleOggetto));
          float piana = smoothstep(0.93, 0.99, max(nO.x, max(nO.y, nO.z)));
          vec3 rW = inverseTransformDirection(reflect(-normalize(vViewPosition), normal), viewMatrix);
          float versoLama = piana * smoothstep(0.05, 0.55, rW.y);
          // (prova-pianeta, 29 ottobre) nello spazio la camera e' girata e le
          // facce piane rispecchiavano le lastre di lato: quadrati grigi lisci
          // senza grana (2560, 820). Con la grana tenue (uGranaCubi < 1) il
          // riflesso sulle facce piane si spegne da ogni direzione
          versoLama = max(versoLama, piana * clamp((1.0 - uGranaCubi) / 0.85, 0.0, 1.0));
          radiance *= 1.0 - 0.9 * versoLama;
          #ifdef USE_CLEARCOAT
          clearcoatRadiance *= 1.0 - 0.9 * versoLama;
          #endif
        }`).replace("#include <common>","#include <common>\n      varying vec3 vNormaleOggetto;"),e.vertexShader=e.vertexShader.replace("#include <common>","#include <common>\n      varying vec3 vNormaleOggetto;").replace("#include <beginnormal_vertex>","#include <beginnormal_vertex>\n      vNormaleOggetto = objectNormal;")})(e),o=e,t=D.current[a],o.uniforms.uSpigolo=t,o.fragmentShader="uniform float uSpigolo;\n"+o.fragmentShader.replace("totalEmissiveRadiance += luceCrepeCubo;",`totalEmissiveRadiance += luceCrepeCubo;
        if (uSpigolo > 0.002) {
          vec3 nOs = abs(normalize(vNormaleOggetto));
          float smussoS = 1.0 - smoothstep(0.86, 0.985, max(nOs.x, max(nOs.y, nOs.z)));
          float bordoS = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0), 2.6);
          float altoS = smoothstep(-0.2, 0.18, vSpecklePos.y);
          totalEmissiveRadiance += (${(0,C.s)("caldoChiaro",1)} * smussoS * (0.18 + 0.9 * altoS)
                                  + ${(0,C.s)("caldo",.8)} * bordoS * 0.18) * uSpigolo;
        }`)}})},a))})}let a5=e=>4===e?22:e<4?e:e<7?e+15:e-3,a3=new z.cE,a4=new z.cE,a6=new z.cE;var a8=e.i(72020),a7=e.i(13094);let a9=`
  attribute vec2 aRiposo;   // dove sta il vertice a lastra intera (px CSS, y in su)
  attribute vec2 aCentro;   // il baricentro della scheggia
  attribute vec4 aSemi;     // quando si stacca (s), tre caso
  attribute float aBordo;   // 1 al baricentro, 0 sul lato
  uniform float uS;
  uniform vec2  uScr;       // lo schermo (px CSS)
  uniform vec2  uC0;        // da dove parte la frattura (px CSS)
  uniform float uZ;
  varying vec2  vLoc;
  varying float vBordo;
  varying vec3  vN;
  varying float vU;
  varying float vA;
  varying float vSeme;

  vec3 ruota(vec3 v, vec3 k, float a) {
    float c = cos(a), s = sin(a);
    return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
  }

  void main() {
    if (uS < 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    float u = max(0.0, uS - aSemi.x);
    // la spinta con l'attrito, partendo da velocita' zero:
    // f(0) = 0, f'(0) = 0, poi frena verso T - tau
    const float T = 1.1;
    const float tau = 0.09;
    float f = T * (1.0 - exp(-u / T)) - tau * (1.0 - exp(-u / tau));
    vec2 rad = aCentro - uC0;
    float lr = length(rad);
    vec2 dir = lr > 1e-3 ? rad / lr : vec2(0.0, 1.0);
    float R = length(uScr);
    float spinta = mix(300.0, 820.0, aSemi.y) * (0.55 + 1.0 * lr / R);
    vec2 sposta = dir * spinta * f;
    // la gravita': cresce da zero (accelerazione, non velocita')
    sposta.y -= 0.5 * 520.0 * u * u * (0.6 + 0.4 * aSemi.z);
    float F = 1.25 * uScr.y;
    float zc = F * (0.06 + 0.22 * aSemi.z) * f / T;
    vec3 asse = normalize(vec3(aSemi.w - 0.5, aSemi.z - 0.5, 0.3));
    float giro = (aSemi.y > 0.5 ? 1.0 : -1.0) * (2.2 + 3.5 * aSemi.w) * f;
    vec3 o = ruota(vec3(aRiposo - aCentro, 0.0), asse, giro);
    vec2 P = aCentro + sposta + o.xy;
    float z = min(zc + o.z, 0.9 * F);
    float sc = F / (F - z);
    vec2 cv = uScr * 0.5;
    vec2 a = cv + (P - cv) * sc;
    gl_Position = vec4(a / uScr * 2.0 - 1.0, uZ, 1.0);
    vLoc = aRiposo - aCentro;
    vBordo = aBordo;
    vN = ruota(vec3(0.0, 0.0, 1.0), asse, giro);
    vU = u;
    // si spegne per ultima cosa, piano, se non e' gia' uscita dal quadro
    vA = 1.0 - smoothstep(${(az.O-.55).toFixed(3)}, ${az.O.toFixed(3)}, u);
    vSeme = aSemi.y * 37.0 + aSemi.w * 113.0;
  }
`,oe=new z.$i;function oa({reduce:e}){let a=(0,s.useRef)(null),o=(0,s.useRef)(null),t=(0,s.useRef)(0),i=(0,s.useMemo)(()=>({uScr:{value:new z.wq(1,1)},uC0:{value:new z.wq(0,0)},uS:{value:-1},uTc:{value:-1},uDurata:{value:az.S-az.M},uRespiro:{value:0},uMappa:{value:null},uCrepa:{value:null},uZ:{value:.99}}),[]),r=(0,s.useRef)(null);return(0,s.useEffect)(()=>()=>{r.current?.m.dispose(),o.current?.geo.dispose(),o.current?.mappa.dispose(),o.current?.crepa.dispose()},[]),(0,S.f)(l=>{let n=a.current;if(!n)return;let s=a7.a.get(l.gl);if(!s){n.visible=!1;return}if(!r.current||r.current.u.uTime!==s.u.uTime||r.current.m.userData.ottave!==s.ottave){let e;r.current?.m.dispose();let a=s.u,o={...i,uRes:a.uRes,uDpr:a.uDpr,uTime:a.uTime,uPointer:a.uPointer,uGrain:a.uGrain,uCS:a.uCS,uCM:a.uCM,uCL:a.uCL},t=new z.Zg({vertexShader:a9,fragmentShader:(e=s.ottave,`
  precision highp float;
  uniform vec2  uRes;
  uniform float uDpr;
  uniform float uTime;
  uniform vec2  uPointer;
  uniform float uGrain;
  uniform vec3  uCS;
  uniform vec3  uCM;
  uniform vec3  uCL;
  uniform float uS;
  uniform float uTc;       // il tempo delle crepe (tempoCrepe)
  uniform float uDurata;   // quanto dura la corsa delle crepe (s)
  uniform float uRespiro;
  uniform sampler2D uMappa;
  uniform sampler2D uCrepa;
  varying vec2  vLoc;
  varying float vBordo;
  varying vec3  vN;
  varying float vU;
  varying float vA;
  varying float vSeme;

${(0,a7.D)(e)}
  void main() {
    // quanto la scheggia si e' gia' mossa: la luce delle crepe si spegne in
    // un attimo, la materia in volo prende il posto della carta
    float via = smoothstep(0.0, 0.18, vU);
    vec3 col = cartaDi(livello());

    // LA LUCE DELLE CREPE: solo dove il fronte e' passato, piu' viva dove la
    // crepa e' appena nata, un battito nella sospensione
    // le mappe sono disegnate coi due colori: si riportano a 0..1
    vec2 uv = gl_FragCoord.xy / uRes;
    float arrivo = (texture2D(uMappa, uv).r - 0.027) / 0.914;
    float segno = clamp((texture2D(uCrepa, uv).r - 0.027) / 0.914, 0.0, 1.0);
    vec3 m = vec3(clamp((segno - 0.35) / 0.65, 0.0, 1.0), arrivo, min(segno / 0.35, 1.0));
    float passato = clamp((uTc - m.g) * 40.0, 0.0, 1.0);
    float eta = max(0.0, (uTc - m.g) * uDurata);
    float nuova = exp(-eta / 0.16);
    float luce = passato * (0.62 + 0.75 * nuova + 0.45 * uRespiro) * (1.0 - via);
    // COME NEI MONDI (5 novembre 2026): il labbro scuro accanto al filo, l'alone
    // caldo, e nel filo il colore cammina: avorio dove la crepa e' appena nata,
    // poi si raffredda verso il caldo chiaro. La sospensione lo riaccende
    col *= 1.0 - m.b * passato * 0.34 * (1.0 - via) * (1.0 - m.r);
    col = mix(col, ${(0,C.V)(C.o)}, clamp(m.b * luce * 0.5, 0.0, 1.0));
    vec3 filo = mix(mix(${(0,C.V)(C.o)}, ${(0,C.V)(C.B)}, m.r * m.r), ${(0,C.V)(C.e)}, clamp((nuova + uRespiro * 0.4) * m.r, 0.0, 1.0));
    col = mix(col, filo, clamp(m.r * luce, 0.0, 1.0));

    if (vU > 0.0) {
      // L'OSSIDIANA IN VOLO
      vec3 n = normalize(vN);
      vec3 L = normalize(vec3(-0.35, 0.55, 0.76));
      vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
      float spec = pow(max(dot(n, H), 0.0), 60.0);
      // il riflesso scorre sulla faccia: piu' chiaro dal lato della luce
      float verso = clamp(0.5 + dot(vLoc, normalize(L.xy + 1e-4)) / 140.0, 0.0, 1.0);
      spec *= verso * verso;
      float lama = pow(max(dot(n, H), 0.0), 6.0);
      vec3 oss = mix(${(0,C.V)(C.d)}, ${(0,C.V)(C.$)}, 0.7) + ${(0,C.V)(C.e)} * (lama * 0.05 + spec * 0.32);
      // le scintille dei cubetti, sulla scheggia: un puntino tondo per cella
      vec2 g = floor(vLoc / 4.0);
      vec2 fq = fract(vLoc / 4.0) - 0.5;
      float sc = step(0.986, hash(g + vSeme)) * (1.0 - smoothstep(0.18, 0.42, length(fq)));
      oss += ${(0,C.V)(C.e)} * sc * (0.35 + 0.65 * lama);
      // lo spigolo, largo un pixel e mezzo: si accende quando la faccia gira
      float w = max(fwidth(vBordo), 1e-5);
      float sp = 1.0 - smoothstep(0.0, 1.6 * w, vBordo);
      float taglio = 1.0 - abs(n.z);
      oss = mix(oss, ${(0,C.V)(C.e)}, sp * (0.14 + 0.5 * max(taglio * 0.6, spec * 2.0)));
      col = mix(col, oss, via);
    }
    // la grana di pellicola del fondale, sulla lastra intera e sulle schegge
    col += grana();
    gl_FragColor = vec4(col, vA);
  }
`),uniforms:o,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1});t.userData.ottave=s.ottave,r.current={m:t,u:o},n.material=t}let c=r.current.u,u=(0,aw.L)(),p=!e&&u<az.z;if(n.visible=p,!p){u>=az.z&&o.current&&(o.current.geo.dispose(),o.current.mappa.dispose(),o.current.crepa.dispose(),o.current=null);return}let{width:m,height:f}=l.size,d=l.gl.getPixelRatio(),h=az.b.x*m,v=az.b.y*f;if(u<0){let e=`${m}x${f}@${d}`,a=performance.now(),i=o.current,r=!i||Math.hypot(i.cx-h,i.cy-v)>.06*Math.min(m,f);(!i||i.chiave!==e||r)&&a-t.current>500&&(t.current=a,o.current?.geo.dispose(),o.current?.mappa.dispose(),o.current?.crepa.dispose(),o.current=function(e,a,o,t,i,r){let l,n=(l=23,()=>{let e=l=l+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}),s=Math.hypot(Math.max(t,e-t),Math.max(i,a-i)),c=[],u=r?95:150,p=0;for(;c.length<u&&p<2e4;){p++;let o=1.08*s*Math.pow(n(),1.65),l=n()*Math.PI*2,u=t+Math.cos(l)*o,m=i+Math.sin(l)*o;if(u<-40||u>e+40||m<-40||m>a+40)continue;let f=(r?7:9)+.13*o;c.some(e=>(e[0]-u)**2+(e[1]-m)**2<f*f)||c.push([u,m])}let m=[6.28*n(),6.28*n(),6.28*n()],f=(e,a)=>{let o=e-t,r=a-i,l=Math.atan2(r,o);return Math.pow(Math.min(1,Math.hypot(o,r)/s*(.82+.1*Math.sin(3*l+m[0])+.06*Math.sin(5*l+m[1])+.04*Math.sin(8*l+m[2]))),.625)},d=[],h=[],v=[],x=[],g=[],M=[[-2,-2],[e+2,-2],[e+2,a+2],[-2,a+2]];for(let e=0;e<c.length;e++){let[a,o]=c[e],r=M;for(let t=0;t<c.length&&r.length;t++)t!==e&&(r=function(e,a,o,t,i){let r=(a+t)/2,l=(o+i)/2,n=t-a,s=i-o,c=e=>(e[0]-r)*n+(e[1]-l)*s,u=[];for(let a=0;a<e.length;a++){let o=e[a],t=e[(a+1)%e.length],i=c(o),r=c(t);if(i<=0&&u.push(o),i<0&&r>0||i>0&&r<0){let e=i/(i-r);u.push([o[0]+(t[0]-o[0])*e,o[1]+(t[1]-o[1])*e])}}return u}(r,a,o,c[t][0],c[t][1]));if(r.length<3)continue;let l=0,u=0;for(let e of r)l+=e[0],u+=e[1];l/=r.length,u/=r.length;let p=Math.min(1,Math.hypot(l-t,u-i)/s),m=[az.N+az._*Math.pow(p,.8)+.06*n(),n(),n(),n()],f=r.map(([e,a])=>{let o=e-l,t=a-u,i=Math.hypot(o,t)||1;return[e+o/i*.7,a+t/i*.7]});for(let e=0;e<r.length;e++){let a=f[e],o=f[(e+1)%r.length];for(let[e,t,i]of[[l,u,1],[a[0],a[1],0],[o[0],o[1],0]])d.push(e,t),h.push(l,u),v.push(...m),x.push(i);g.push([r[e][0],r[e][1],r[(e+1)%r.length][0],r[(e+1)%r.length][1]])}}let b=new z.ld,y=d.length/2;b.setAttribute("position",new z.ki(new Float32Array(3*y),3)),b.setAttribute("aRiposo",new z.ki(d,2)),b.setAttribute("aCentro",new z.ki(h,2)),b.setAttribute("aSemi",new z.ki(v,4)),b.setAttribute("aBordo",new z.ki(x,1));let w=()=>{let t=document.createElement("canvas");t.width=Math.round(e*o),t.height=Math.round(a*o);let i=t.getContext("2d");return i.lineCap="round",{cv:t,x:i}},L=w(),S=w();L.x.fillStyle=C.e,L.x.fillRect(0,0,L.cv.width,L.cv.height),S.x.fillStyle=C.d,S.x.fillRect(0,0,S.cv.width,S.cv.height);let A=g.filter(([o,t,i,r])=>!(.01>Math.abs(o-i)&&(o<0||o>e)||.01>Math.abs(t-r)&&(t<0||t>a))),q=[],P=new Set,R=(e,a,o,t,i)=>{let r=e,l=a,s=o,c=[[r,l]],u=3+i;for(let e=0;e<u;e++)s+=(n()-.5)*.7,r+=Math.cos(s)*t/u,l+=Math.sin(s)*t/u,c.push([r,l]),i>0&&e>0&&.45>n()&&R(r,l,s+(.5>n()?1:-1)*(.5+.5*n()),.5*t,i-1);q.push({p:c,fine:2})};for(let[e,a,o,l]of A){let s=(e,a)=>`${Math.round(e)},${Math.round(a)}`,c=s(e,a),u=s(o,l),p=c<u?c+u:u+c;if(P.has(p))continue;P.add(p);let f=Math.hypot(o-e,l-a)||1,d=-(l-a)/f,h=(o-e)/f,v=(e+o)/2-t,x=(a+l)/2-i,g=Math.hypot(v,x)||1,M=Math.abs(((o-e)*v+(l-a)*x)/(f*g)),b=Math.atan2(x,v),y=.5+.5*Math.sin(5*b+m[0])*Math.sin(3*b+m[1]),w=M>.62&&y>.42,z=!w&&(M>.5?.8>n():.34>n());if(!w&&!z&&.3>n())continue;let L=[[e,a],[o,l]],S=Math.min(18,.17*f);for(let e=0;e<4;e++){let e=[L[0]];for(let a=1;a<L.length;a++){let o=(n()-.5)*S;e.push([(L[a-1][0]+L[a][0])/2+d*o,(L[a-1][1]+L[a][1])/2+h*o],L[a])}L=e,S*=.55}let A=5+Math.floor(7*n());if(w?(q.push({p:L.slice(0,A+1),fine:0}),q.push({p:L.slice(A),fine:1})):z?(q.push({p:L.slice(0,A+1),fine:1}),q.push({p:L.slice(A),fine:2})):q.push({p:L,fine:2}),(w||z)&&n()<(r?.5:.7)&&f>18){let t=1+Math.floor(n()*(L.length-2)),i=.5>n()?1:-1;R(L[t][0],L[t][1],Math.atan2(l-a,o-e)+i*(.6+.6*n()),12+n()*Math.min(70,.7*f),w&&!r?2:1)}}let E=(e,t)=>{e.beginPath(),t.p.forEach(([t,i],r)=>r?e.lineTo(t*o,(a-i)*o):e.moveTo(t*o,(a-i)*o)),e.stroke()};for(let e of(L.x.lineWidth=9*o,q)){let[t,i]=e.p[0],[r,l]=e.p[e.p.length-1],n=e.fine?.02+.02*e.fine:0,s=Math.min(1,f(t,i)+n),c=Math.min(1,f(r,l)+2*n),u=.001>Math.abs(c-s)?s+.001:c,p=-s/(u-s),m=(1-s)/(u-s),d=e=>(t+(r-t)*e)*o,h=e=>(a-(i+(l-i)*e))*o,v=L.x.createLinearGradient(d(p),h(p),d(m),h(m));v.addColorStop(0,C.d),v.addColorStop(1,C.e),L.x.strokeStyle=v,E(L.x,e)}let T=Math.max(.5,Math.min(1,Math.min(e,a)/760));S.x.strokeStyle=C.e;let O=(e,t)=>{for(let i of(e.beginPath(),q))t(i)&&i.p.forEach(([t,i],r)=>r?e.lineTo(t*o,(a-i)*o):e.moveTo(t*o,(a-i)*o));e.stroke()};S.x.globalAlpha=.09,S.x.lineWidth=26*T*o,O(S.x,e=>0===e.fine),S.x.globalAlpha=.14,S.x.lineWidth=9*T*o,O(S.x,e=>0===e.fine),S.x.globalAlpha=.1,S.x.lineWidth=5*T*o,O(S.x,e=>1===e.fine),S.x.globalAlpha=1,S.x.lineWidth=Math.max(1,2.1*T)*o,O(S.x,e=>0===e.fine),S.x.globalAlpha=.72,S.x.lineWidth=Math.max(.6,.9*T)*o,O(S.x,e=>1===e.fine),S.x.globalAlpha=.5,S.x.lineWidth=Math.max(.4,.5*T)*o,O(S.x,e=>2===e.fine);let I=e=>{let a=new z.Nk(e);return a.minFilter=z.VV,a.magFilter=z.VV,a.generateMipmaps=!1,a};return{geo:b,mappa:I(L.cv),crepa:I(S.cv),chiave:`${e}x${a}@${o}`,cx:t,cy:i}}(m,f,d,h,v,m<700),n.geometry=o.current.geo,c.uMappa.value=o.current.mappa,c.uCrepa.value=o.current.crepa,c.uC0.value.set(h,v))}if(!o.current){n.visible=!1;return}c.uScr.value.set(m,f),c.uS.value=u,c.uTc.value=u<0?-1:(0,az.U)(u),c.uRespiro.value=(0,az.B)(u);let x=l.camera,g=x.position.length()+1.2;oe.set(0,0,-g,1).applyMatrix4(x.projectionMatrix),c.uZ.value=oe.z/oe.w}),(0,n.jsx)("mesh",{ref:a,frustumCulled:!1,renderOrder:900,visible:!1})}var oo=e.i(42055);e.i(49686);var ot=e.i(32093);let oi=null,or={value:5},ol={value:0},on={value:0},os={value:1},oc=(o=new z.Ox({...m.O}),t=(0,m.S)(),o.onBeforeCompile=e=>{t(e),e.uniforms.uCella=or,e.uniforms.uLampo=ol,e.uniforms.uCrepa=on,e.uniforms.uTono=os,e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\nuniform float uCella, uLampo, uCrepa, uTono;").replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          {
            vec3 nU = normalize(vNormal);
            float fU = pow(1.0 - clamp(dot(nU, normalize(vViewPosition)), 0.0, 1.0), 2.0);
            totalEmissiveRadiance += ${(0,C.s)("avorio",.9)} * pow(fU, 2.0) * 2.6 * uLampo;
            if (uCrepa > 0.0 && vSpecklePos.z > 0.15) {
              vec2 f = vSpecklePos.xy / 0.16;
              // lo stesso andamento della riga della Fessura (rotto su q.y*3,4): lento e appena spezzato
              float zig = 0.006 * sin(f.y * 3.8 + 2.0) + 0.003 * sin(f.y * 9.1 + 0.7);
              float fw = max(fwidth(f.x), 1e-5);
              float riga = 1.0 - smoothstep(0.4, 1.6, abs(f.x - zig) / fw);
              float alone = exp(-abs(f.x - zig) / 0.03) * 0.22;
              float fondo = 1.0 - 1.24 * uCrepa;
              float fin = smoothstep(fondo - 0.04, fondo, f.y);
              totalEmissiveRadiance += mix(${(0,C.s)("caldo",1)}, ${(0,C.s)("caldoChiaro",1)}, riga * 0.5) * (riga + alone) * fin * 1.6;
            }
          }`).replace("#include <dithering_fragment>","#include <dithering_fragment>\ngl_FragColor.rgb *= uTono;").replace(`vec3 g1 = floor(vSpecklePos * 78.0);
          float s1 = step(0.988, spHash(g1));
          vec3 g2 = floor(vSpecklePos * 190.0);
          float s2 = step(0.955, spHash(g2)) * 0.28;`,`float s1 = 0.0, s2 = 0.0;
          for (int k = 0; k < 7; k++) {
            float mo = exp2(float(k));
            float lk = log2(uCella / (mo * 5.0));
            float w = k == 0 ? max(0.0, 1.0 - max(0.0, lk)) : max(0.0, 1.0 - abs(lk));
            if (w > 0.0) {
              s1 += w * step(0.988, spHash(floor(vSpecklePos * 78.0 * mo)));
              s2 += w * step(0.955, spHash(floor(vSpecklePos * 190.0 * mo))) * 0.28;
            }
          }
          // da vicino la pietra e' quella della Fessura: inclusioni rade e
          // spente, non la lucentezza mediata di un cubetto lontano
          float vicino = 1.0 - 0.9 * smoothstep(3.0, 14.0, uCella);
          s1 *= vicino; s2 *= vicino * 0.5;`)},o),ou=new z.cE,op=new z.as,om=new z.FS;function of({storyline:e,reduce:a}){let o=(0,s.useRef)(null),t=(0,s.useRef)(!0),i=(0,s.useRef)(!0);return(0,S.f)(r=>{let l,n,s,c=o.current;if(!c)return;let u=Math.max(0,Math.min(6,e.current.kc??e.current.k)),p=Math.max(0,Math.min(1,e.current.ritorno??0)),f=u>2.68&&u<3.03,d=u>3.815&&u<3.95,h=!a&&p<.5&&(f||d&&!eK.spazio);if(i.current&&p<.5&&u>=2.6&&u<2.95&&(i.current=!1),(u<2.4||p>=.5)&&(i.current=!0),c.visible!==h&&(c.visible=h),!h)return;let v=r.camera,x=Math.tan(v.fov*Math.PI/360),g=r.size.width/Math.max(1,r.size.height),M=1.2*x*Math.max(1,g)*1.12;if(f){let e=Math.max(0,Math.min(1,(u-2.68)/.27));l=Math.pow(e,1.7),s=1-Math.pow(1-Math.min(1,e/.86),3),n=1}else{let e=Math.max(0,Math.min(1,(u-3.815)/(3.95-3.815)));l=1-e*e*e*(e*(6*e-15)+10),s=1-Math.pow(e,2.4),n=-1}let b=Math.exp(Math.log(9)+(Math.log(.6)-Math.log(9))*l),y=(0,eA.m)(l,0,.03),w=(.3*m.L+(M-.3*m.L)*Math.pow(l,1.6))*y,z=Math.max(1e-4,w/m.L);c.scale.setScalar(z),v.getWorldDirection(ou),c.position.copy(v.position).addScaledVector(ou,b+.5*w);let L=f?Math.max(0,u-2.95)/.08:0;if(L>0){let e=Math.exp(-(4.5*L))*Math.sin(L*Math.PI*5.2)*w*.012;c.position.x+=e*v.matrixWorld.elements[0]+.6*e*v.matrixWorld.elements[4],c.position.y+=e*v.matrixWorld.elements[1]+.6*e*v.matrixWorld.elements[5],c.position.z+=e*v.matrixWorld.elements[2]+.6*e*v.matrixWorld.elements[6]}let S=u-2.95;ol.value=f?S<0?Math.exp(-Math.pow(S/.006,2)):Math.exp(-S/.014):0,on.value=f?.5*(0,eA.m)(u,2.95,3.03):.5*(1-(0,eA.m)(u,3.815,3.85)),os.value=1+((g<1?1.5:1.08)-1)*(0,eA.m)(l,.85,1),f&&S>=0&&t.current&&(t.current=!1),u<2.93&&(t.current=!0),om.set((1-s)*Math.PI*2*n,(1-s)*Math.PI*4*n,0),op.setFromEuler(om),c.quaternion.copy(v.quaternion).multiply(op),or.value=w/78*r.size.height/(2*x*Math.max(.05,b))}),(0,n.jsx)("mesh",{ref:o,geometry:oi??=(0,m.h)(m.L,m.L,m.L,.013,6),material:oc,visible:!1,frustumCulled:!1})}var od=e.i(61896),oh=e.i(23020);let ov=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
  }
`,ox=`
  precision highp float;
  varying vec2 vUv;
  uniform float uPeso;
  uniform float uA;       // larghezza / altezza
  uniform float uPx;      // un pixel in unita' di q
  uniform float uGiro;    // l'angolo: camera, ora d'ambiente, scroll
  uniform float uEsce;    // 0 → 1 → 0 il buco nero restituisce il cubetto: lampo nel centro
  uniform float uScorre;  // quanto la polvere e' scesa verso il centro (ora d'ambiente + scroll)
  uniform float uZoom;    // > 1 avvicinandosi e nel tuffo, < 1 quando se ne va
  uniform float uEntra;   // 0 → 1 entra dai bordi
  uniform float uBuio;    // 0 → 1 il buio del tuffo prende lo schermo
  uniform float uFilo;    // 0 → 1 quanto e' lungo il filo
  uniform float uFiloA;   // quanto si vede il filo
  uniform float uFiloY;   // dove sta il filo, in q
  uniform float uSrotola; // 0 → 1 nel tuffo: si distende in orizzonte
  uniform float uSacca;   // quanto il filo cede sotto l'omino, in q
  uniform float uScarica; // l'orologio delle perle di luce: un giro per unita'

  ${oh.f}
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  // rumore a valori, PERIODICO in x (periodo P intero): l'angolo fa il giro
  // e la cucitura non si vede
  float vn(vec2 p, float P) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float x0 = mod(i.x, P), x1 = mod(i.x + 1.0, P);
    float a = h2(vec2(x0, i.y)), b = h2(vec2(x1, i.y));
    float c = h2(vec2(x0, i.y + 1.0)), d = h2(vec2(x1, i.y + 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    if (uPeso < 0.002) discard;
    vec2 q = (vUv - 0.5) * 2.0;
    q.x *= uA;
    float rq = length(q);
    vec2 p = q / uZoom;
    // SI SROTOLA (14 ottobre 2026): uscendo si schiaccia sul filo, e le
    // spire diventano l'orizzonte da cui si apre la fessura del volto
    p = vec2(p.x / (1.0 + 9.0 * uSrotola), p.y * (1.0 + 2.6 * uSrotola));
    float r = max(length(p), 1e-4);

    // ── LO SPAZIO CHE SI AVVOLGE. Non un oggetto al centro: e' tutto il
    // quadro che cade. L'angolo si torce tanto piu' quanto si e' vicini
    // (0.55 / r: il trascinamento di un buco nero), il raggio si legge in
    // log, cosi' ogni giro verso l'interno e' piu' fitto del precedente e il
    // centro non finisce mai: sprofonda. uScorre fa scendere tutto verso
    // dentro, di continuo.
    float rho = log(r);
    float a = atan(p.y, p.x) + uGiro + 0.55 / (r + 0.08);
    float rr = rho + uScorre;
    float s = a - 2.1 * rr;
    float u = s / 6.2831853;
    vec3 fondo = ${(0,C.s)("fondo",.92)};
    vec3 avorio = ${(0,C.s)("avorio",.86)};
    vec3 caldo = ${(0,C.s)("caldo",1.041)};

    // il centro: nero che si apre piano, senza bordo
    float luce = smoothstep(0.02, 0.85, r) * (0.6 + 0.4 * smoothstep(0.6, 1.8, r));

    // la POLVERE: nebbia lunga su due bracci, stirata lungo la spirale
    float braccio = smoothstep(0.2, 1.0, 0.5 + 0.5 * sin(2.0 * s + 1.5 * (vn(vec2(u * 6.0, rr * 1.4), 6.0) - 0.5)));
    float nebbia = vn(vec2(u * 16.0, rr * 6.0), 16.0) * (0.35 + 0.65 * braccio);
    vec3 col = fondo + (avorio - fondo) * nebbia * nebbia * 0.2 * luce;

    // le STELLE, piegate: celle nello spazio torto (angolo x log del
    // raggio), quindi vicino al centro si fanno piccole e fitte e si
    // stirano lungo il giro, come strisce che cadono dentro
    vec2 sg = vec2(u * 90.0, rr * 14.0);
    vec2 ci = floor(sg);
    ci.x = mod(ci.x, 90.0);
    vec2 cf = fract(sg) - 0.5 - (vec2(h2(ci + 1.7), h2(ci + 9.2)) - 0.5) * 0.5;
    // la cella in pixel: lungo il giro r*2pi/90, di traverso r/14
    vec2 cella = vec2(r * 0.0698, r * 0.0714) / (uPx / uZoom);
    vec2 dpx = cf * cella;
    float stira = 1.0 + 3.0 * (1.0 - smoothstep(0.1, 0.7, r));
    float stella = step(0.86, h2(ci + 3.3)) * exp(-(dpx.x * dpx.x / (stira * stira) + dpx.y * dpx.y) * 0.8) * (0.3 + 0.7 * h2(ci + 5.1));
    col += avorio * stella * 0.75 * luce * smoothstep(1.5, 5.0, cella.y);

    // IL FILO CALDO che si arrotola: una spira sola, sottile come il filo
    // del sito, larga un pixel a ogni raggio (fwidth), che si spegne entrando
    float sf = s + 0.6 * sin(rr * 1.3);
    float fw = max(fwidth(sf), 1e-4);
    float df = abs(mod(sf + 3.14159265, 3.14159265) - 1.5707963) / fw;
    float spira = (1.0 - smoothstep(0.6, 1.8, df)) * (1.0 - smoothstep(0.9, 1.9, fw));
    col = mix(col, caldo, spira * 0.55 * luce * (0.5 + 0.5 * vn(vec2(u * 5.0, rr * 2.0), 5.0)));

    // ── IL BUCO NERO, QUARTA PASSATA (15 ottobre 2026, dal riferimento di
    // Lorenzo) ────────────────────────────────────────────────────────────
    // IL CENTRO piu' profondo: il nero si allarga, e dentro scorrono anelli
    // di caduta concentrici, tenuissimi, che scendono verso il fondo.
    col *= mix(0.25, 1.0, smoothstep(0.05, 0.55, r));
    float anelliC = (0.5 + 0.5 * sin(rho * 46.0 + uScorre * 9.0)) * smoothstep(0.03, 0.2, r) * (1.0 - smoothstep(0.35, 0.75, r));
    col += avorio * anelliC * 0.018;

    // I BRACCI DI GALASSIA: in alto a sinistra e in basso a destra, polvere
    // stellare calda e fredda in filamenti, piegata verso il centro (segue la
    // spirale s), ricca di dettaglio, solo fuori dal pozzo
    float diag = dot(normalize(p), normalize(vec2(-1.0, 0.5)));
    float quadro = smoothstep(0.2, 0.9, abs(diag));
    // filamenti FINI e nitidi, non nebbia: rumore a creste (1 - |2n - 1|)
    // stretto con una potenza alta, su due scale, lungo la spirale
    float cr1 = 1.0 - abs(vn(vec2(u * 48.0, rr * 26.0), 48.0) * 2.0 - 1.0);
    float cr2 = 1.0 - abs(vn(vec2(u * 110.0, rr * 60.0 + 3.0), 110.0) * 2.0 - 1.0);
    float filo2 = pow(cr1, 10.0) * 0.8 + pow(cr2, 14.0) * 0.6;
    float zona = (0.45 + 0.55 * braccio) * quadro * smoothstep(0.6, 1.3, r) * smoothstep(0.3, 0.7, vn(vec2(u * 8.0, rr * 3.0), 8.0));
    float galassia = clamp(filo2, 0.0, 1.0) * zona;
    vec3 fredda = ${(0,C.s)("avorio",.62)};
    col += mix(caldo, fredda, smoothstep(0.3, 0.8, vn(vec2(u * 12.0, rr * 4.0), 12.0))) * galassia * 0.22;
    // un alone stretto attorno ai filamenti piu' forti
    float alone = pow(cr1, 4.0) * zona * smoothstep(0.55, 0.9, cr1);
    col += caldo * alone * 0.0;
    // e un velo appena sotto i filamenti, molto piu' tenue
    col += caldo * zona * 0.0;
    // e dentro i filamenti le stelle si addensano
    col += avorio * stella * galassia * 1.2 * luce * smoothstep(1.5, 5.0, cella.y);
    // e lungo i bracci una polvere di stelle piu' fitta, a celle piccole
    vec2 gs = vec2(u * 260.0, rr * 70.0);
    vec2 gsi = floor(gs);
    gsi.x = mod(gsi.x, 260.0);
    vec2 gsc = vec2(r * 6.2831853 / 260.0, r / 70.0) / (uPx / uZoom);
    vec2 gsf = (fract(gs) - 0.5 - (vec2(h2(gsi + 5.5), h2(gsi + 8.8)) - 0.5) * 0.6) * gsc;
    // stelle e polvere in filamenti, non onde: la densita' segue le creste
    float fitta = step(0.93 - 0.35 * pow(cr1, 6.0), h2(gsi + 0.9)) * exp(-dot(gsf, gsf) * 1.6) * smoothstep(1.2, 2.5, min(gsc.x, gsc.y));
    col += mix(avorio, caldo, h2(gsi + 3.3)) * fitta * zona * 0.9;

    // LE SPIRE CALDE: due archi continui e luminosi, a scale diverse, che si
    // avvolgono attorno al centro e girano lentissimi in versi opposti.
    // Linee intere, larghe un pixel e mezzo, con un alone appena.
    for (int i = 0; i < 2; i++) {
      float fi = float(i);
      float R0 = i == 0 ? 0.62 : 1.18;
      // una spira e non un cerchio: il raggio cresce col giro
      float ang = atan(p.y, p.x) + (i == 0 ? 1.0 : -1.0) * uScorre * 0.35 + fi * 2.1;
      float an = mod(ang, 6.2831853);
      float Rs = R0 * (1.0 + 0.16 * an / 6.2831853);
      float dpx = abs(r - Rs) / (uPx / uZoom);
      // l'arco si spegne verso il capo interno: non si chiude mai
      float arco = smoothstep(0.0, 1.4, an) * (0.55 + 0.45 * an / 6.2831853);
      float linea = (1.0 - smoothstep(0.7, 1.6, dpx)) + exp(-dpx / 5.0) * 0.18;
      col = mix(col, mix(caldo, ${(0,C.s)("caldoChiaro",1)}, 0.5), clamp(linea * arco * 0.75 * luce, 0.0, 1.0));
    }

    // LA POLVERE CHE SPIRALEGGIA DENTRO: grani di grandezze diverse che
    // scendono lungo la spirale; i piu' vicini, larghi, sfocati (bokeh)
    for (int k = 0; k < 2; k++) {
      float fk = float(k);
      float nU = k == 0 ? 140.0 : 60.0;
      float nR = k == 0 ? 22.0 : 8.0;
      vec2 pg = vec2(u * nU, rr * nR + fk * 3.3);
      vec2 pgi = floor(pg);
      pgi.x = mod(pgi.x, nU);
      float ph = h2(pgi + 7.7 + fk * 13.0);
      vec2 cellaP = vec2(r * 6.2831853 / nU, r / nR) / (uPx / uZoom);
      vec2 pgf = (fract(pg) - 0.5 - (vec2(h2(pgi + 1.1), h2(pgi + 2.2)) - 0.5) * 0.6) * cellaP;
      float rag = k == 0 ? 1.1 : 2.6 + 3.0 * h2(pgi + 4.4);
      float disco = k == 0 ? exp(-dot(pgf, pgf) / (rag * rag)) : smoothstep(rag, rag * 0.6, length(pgf)) * (0.6 + 0.4 * smoothstep(rag * 0.4, rag * 0.9, length(pgf)));
      float g = step(k == 0 ? 0.92 : 0.965, ph) * disco * smoothstep(2.0, 4.0, min(cellaP.x, cellaP.y));
      col += mix(avorio, caldo, smoothstep(1.1, 0.4, r)) * g * (k == 0 ? 0.4 : 0.16) * luce * (0.5 + 0.5 * braccio);
    }

    // la grana del sito: un puntino ogni tanto, fermo sullo schermo
    vec2 g = floor(gl_FragCoord.xy / 2.0);
    col += (step(0.93, h2(g)) * 0.03 - 0.008) * luce;
    col = max(col, vec3(0.0));
    // il buio del tuffo
    col = mix(col, fondo * 0.8, uBuio);
    // L'ULTIMO FRAMMENTO (14 ottobre 2026): quando il cubetto esce dal centro
    // il centro si accende un istante, un punto caldo che si apre e si
    // richiude; intorno le spire sono state appena risucchiate (uScorre)
    {
      float rc = length(q);
      col += mix(caldo, avorio, 0.55) * exp(-rc * rc / 0.004) * uEsce * 1.1;
      col += caldo * exp(-rc / 0.22) * uEsce * 0.18;
    }

    // LA LUCE DEL MONDO (15 ottobre 2026): il filo e' l'orizzonte dello
    // stesso mondo dell'hero, con la sua lama e la sua foschia calda; il
    // buco nero e' un evento dentro quel mondo, non un altro fondale
    // (15 ottobre 2026, Lorenzo: \xabattorno c'e' quasi un'altra riga piu'
    // grande che non mi piace\xbb) la foschia dell'orizzonte qui faceva una
    // seconda fascia attorno al filo: tolta, resta il filo col suo alone stretto
    // IL FILO di sempre, orizzontale: e' dove dorme l'omino
    // IL FILO PESA (26 ottobre 2026, Lorenzo: \xabmolto piu' creativa, anche
    // il dettaglio della riga\xbb). Era una retta da bordo a bordo, l'unica cosa
    // della scena che non sentiva niente: ora cede sotto l'omino che ci dorme,
    // come un'amaca o lo spazio attorno a una massa, e quando lui evapora
    // nel vortice torna dritto (uSacca, dalla storia). Ai bordi e' piatto.
    float sacca = uSacca * exp(-pow(q.x / 0.62, 2.0));
    float dy = abs(q.y - (uFiloY - sacca));
    float spessore = uPx * 0.75;
    float filo = (1.0 - smoothstep(spessore, spessore + uPx * 1.2, dy));
    // piu' luminoso, con l'alone del riferimento (15 ottobre 2026)
    float bagliore = exp(-pow(dy / (uPx * 3.0), 2.0)) * 0.25;
    float lungo = 1.0 - smoothstep(uFilo * (uA + 0.05) - uPx * 40.0, uFilo * (uA + 0.05), abs(q.x));
    // LA SCARICA: due perle di luce corrono lungo il filo dai bordi verso di
    // lui, piano, con la coda lunga verso il bordo da cui vengono, e si
    // spengono prima di toccarlo. Una volta ogni nove secondi
    float viaggio = fract(uScarica);
    float xp = (uA + 0.05) * (1.0 - viaggio * 0.8);
    float dietro = abs(q.x) - xp;
    float perla = exp(-pow(dietro / (dietro > 0.0 ? 0.16 : 0.025), 2.0))
      * smoothstep(0.0, 0.12, viaggio) * (1.0 - smoothstep(0.55, 0.8, viaggio));
    vec3 caldoFilo = mix(${(0,C.s)("avorio",.95)}, caldo, 0.35);
    col = mix(col, caldoFilo, clamp((filo + bagliore * (1.0 + perla * 3.0)) * (1.0 + perla * 1.5) * lungo * uFiloA, 0.0, 1.0));

    // ENTRA dai bordi verso il centro, col fronte che segue i bracci
    float fronte = mix(2.6, -0.8, uEntra) + 0.22 * sin(2.0 * s);
    float entra = smoothstep(fronte, fronte + 0.55, rq);
    // e quando se ne va resta un disco che si stringe
    // (sul raggio NON schiacciato: nel tuffo lo srotolamento allargava r
    // fuori dalla striscia del filo, il quadro diventava trasparente e dietro
    // passava la lama del cielo di traverso, girata dalla camera)
    float bordo = 1.0 - smoothstep(1.9, 2.5, length(q / uZoom));
    gl_FragColor = vec4(col, uPeso * entra * bordo);
  }
`,og=(0,od.n)();function oM({storyline:e,reduce:a,mobile:o}){let t=(0,s.useMemo)(()=>new z.Zg({vertexShader:ov,fragmentShader:ox,uniforms:{uPeso:{value:0},uA:{value:1.6},uPx:{value:2/900},uGiro:{value:0},uZoom:{value:1},uScorre:{value:0},uEsce:{value:0},uEntra:{value:0},uBuio:{value:0},uFilo:{value:0},uFiloA:{value:0},uFiloY:{value:0},uSrotola:{value:0},uSacca:{value:0},uScarica:{value:0}},transparent:!1,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.UM,blendEquation:z.qR,blendSrc:z.tx,blendDst:z.oL}),[]);(0,s.useEffect)(()=>()=>t.dispose(),[t]);let i=(0,s.useRef)(t);(0,s.useLayoutEffect)(()=>{i.current=t},[t]);let r=(0,s.useRef)(null),l=(0,s.useRef)(null);return(0,s.useLayoutEffect)(()=>{og.ridotto=a},[a]),(0,S.f)(t=>{let n=i.current.uniforms,s=Math.max(0,Math.min(6,e.current.kc??e.current.k)),c=Math.max(0,Math.min(1,e.current.ritorno??0)),u=(0,eA.A)(s)*(1-c),p=s>eA.$.nascosto[0]&&s<eA.$.nascosto[1],m=u>.002&&!p&&!(eK.spazio&&s>3.7);r.current&&(r.current.visible=m),n.uPeso.value=m?u:0,an.value=Math.max(m?u:0,o?(0,eA.m)(s,3.2,3.4)*(1-(0,eA.m)(s,3.76,3.85))*(1-c)*.85:0);let f=t.size.width,d=Math.max(1,t.size.height),h=a?0:t.clock.elapsedTime,v=a?+(s>2.8&&s<3.9):(0,eA.r)(s),x=(0,eA.J)(s),g=(1+.28*(a?0:(0,eA.m)(s,1.34,2.66))+(a?0:.025*Math.sin(.5*h)))*(1+1.2*v*v)*Math.max(.03,1-.97*x);m&&(n.uA.value=f/d,n.uPx.value=2/d,n.uGiro.value=(a?0:Math.PI*(0,eA.z)(s))+.042*h+(a?0:.55*s),n.uZoom.value=g,n.uScorre.value=a?0:.06*h+.7*s+1.6*(0,eA.m)(s,2.62,2.74),n.uEsce.value=a?0:(0,eA.m)(s,2.66,2.71)*(1-(0,eA.m)(s,2.72,2.8)),n.uSrotola.value=v,n.uEntra.value=a?1:(0,eA.z)(s),n.uBuio.value=.45*(0,eA.m)(v,.55,.95),n.uFilo.value=(a?1:(0,eA.m)(s,1.16,1.5))*(1-x),n.uFiloA.value=1-(0,eA.m)(v,.75,1),n.uFiloY.value=0,n.uSacca.value=0,n.uScarica.value=a?0:h/9);let M=l.current,b=m&&v<.97&&s<3;if(M&&(M.visible=b),!b){og.omino.w=0;return}let y=Math.min(.27*d,f*(o?.44:.2))*g,w=a?1:(0,eA.m)(s,1.12,1.48),z=a?0:Math.sin(.72*h)*y*.01,L=d/2-.08*y-(1-w)*d*.62+z+0*d/2,S=y/.98;og.omino.x=f/2-S/2,og.omino.w=S,og.omino.h=S,og.omino.y=L+.5*y-S+.004*S;let A=a?Math.PI:Math.PI*(0,eA.z)(s);og.rotta=Math.PI/2,og.rollio=Math.PI/2+(A-Math.PI)+(a?0:.03*Math.sin(.33*h)),og.vola=0,og.dorme=1,og.svanisce=(0,eA.m)(v,.35,.8),og.evapora=a?0:(0,eA.m)(s,1.55,2.8),og.centro[0]=f/2,og.centro[1]=d/2}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("mesh",{ref:r,renderOrder:-790,frustumCulled:!1,visible:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,n.jsx)("primitive",{object:t,attach:"material"})]}),(0,n.jsx)(of,{storyline:e,reduce:a}),(0,n.jsx)("group",{ref:l,visible:!1,children:(0,n.jsx)(ot.w,{posa:"in-piedi",mobile:o,quanti:o?3e4:52e3,stato:og})})]})}let ob=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
  }
`,oy=(e,a,o)=>{let t=Math.max(0,Math.min(1,(e-a)/(o-a)));return t*t*(3-2*t)};function ow({storyline:e,reduce:a,mobile:o=!1}){let t=(0,s.useMemo)(()=>{let e;return new z.Zg({vertexShader:ob,fragmentShader:(e=o?2:3,`
  precision highp float;
  #define OTTAVE ${e}
  varying vec2 vUv;
  uniform float uPeso;
  uniform float uT;
  uniform float uA;
  uniform float uPx;
  uniform float uBande;   // 0 \xe2†’ 1 la pietra esce dal buio
  uniform float uCorre;   // 0 \xe2†’ 1 la fessura corre dall'alto in basso
  uniform float uColpo;   // il battito lungo del colpo
  uniform float uLampo;   // il lampo breve
  uniform float uOnda;    // 0 \xe2†’ 1 l'onda che corre sulle bande
  uniform float uApre;    // 0 \xe2†’ 1 l'uscita: la pietra si apre verso l'alto
  uniform float uMano;
  uniform float uParla;   // in mano: le frasi passano sopra la fessura, che si abbassa
  uniform vec2 uTesta;    // il centro della testa (in q)
  uniform float uApertura; // 0 → 1 la crepa diventa finestra (la luce intima)
  uniform float uFoto;     // 1 il ritratto e' al suo posto, 0 se n'e' andato
  uniform float uTop;      // la cima dei capelli (in q): la riga si ferma li'
  uniform float uLoc;      // unita' locali del Monolite per unita' di q (la faccia a tutto schermo)
  uniform float uCella;    // px a schermo della cella base della grana (1/78 di unita' locale)

  // ── LA GRANA DEL MONOLITE, la stessa riga per riga (nota 28) ────────────
  // A tutto schermo si e' davanti alla faccia del cubo grande: le inclusioni
  // stanno sulle STESSE celle della sua faccia (posizione locale, z = 0.18),
  // con le stesse ottave che il Monolite usa mentre cresce. Nessuna griglia,
  // nessuna piastrella: la superficie di un attimo prima, ingrandita.
  float spHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float granaMonolite(vec2 qq) {
    vec3 lp = vec3(qq * uLoc, 0.18);
    float s1 = 0.0, s2 = 0.0;
    for (int k = 0; k < 8; k++) {
      float m = exp2(float(k));
      float lk = log2(uCella / (m * 5.0));
      float w = k == 0 ? max(0.0, 1.0 - max(0.0, lk)) : max(0.0, 1.0 - abs(lk));
      if (w > 0.0) {
        // (5 novembre 2026) tonde: a cinque pixel css, sul telefono a densita' tre, la
        // cella piena era un quadratino, una piastrella sulla pietra
        vec2 c1 = lp.xy * 78.0 * m, c2 = lp.xy * 190.0 * m;
        s1 += w * step(0.988, spHash(floor(lp * 78.0 * m))) * (1.0 - smoothstep(0.22, 0.48, length(fract(c1) - 0.5)));
        s2 += w * step(0.955, spHash(floor(lp * 190.0 * m))) * 0.28 * (1.0 - smoothstep(0.22, 0.48, length(fract(c2) - 0.5)));
      }
    }
    return s1 * 0.85 + s2;
  }

  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < OTTAVE; i++) { s += a * n(p); p = p * 2.03 + 7.1; a *= 0.5; }
    return s;
  }
  float rotto(float y, float s) {
    float a = 0.0, w = 0.5;
    for (int i = 0; i < 3; i++) {
      float i0 = floor(y), f = fract(y);
      a += w * mix(h(vec2(i0, s)), h(vec2(i0 + 1.0, s)), f);
      y = y * 2.31 + 3.7; w *= 0.5;
    }
    return a - 0.44;
  }
  // le bande di flusso: un campo di altezza a onde, piegato dal rumore
  float flusso(vec2 p) {
    vec2 w = vec2(fbm(p * 0.9 + 3.1), fbm(p * 0.9 + 8.4));
    float b = p.y * 5.0 + p.x * 1.6 + (w.x - 0.5) * 6.0 + (w.y - 0.5) * 2.0;
    return 0.5 + 0.5 * sin(b) * (0.7 + 0.3 * sin(b * 2.7 + w.x * 4.0));
  }

  // LE CREPE: i bordi di celle irregolari (F2 - F1), cioe' le linee dove la
  // pietra si spacca. Il valore e' circa la distanza dalla crepa, in celle.
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
    if (uPeso < 0.002) discard;
    vec2 q = (vUv - 0.5) * 2.0;
    q.x *= uA;
    float A = uA;
    float t = uT;
    float px = uPx;
    float L = uLampo;

    // \xe2”€\xe2”€ LA FESSURA: una crepa quasi dritta dietro la testa \xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€
    // corre lungo la giuntura verticale fra due colonne di cubetti (x = testa):
    // una giuntura e' dritta, la luce che passa trema appena
    float cx = uTesta.x + rotto(q.y * 3.4 + 2.0, 5.3) * mix(0.012, 0.008, uMano);
    float dx = q.x - cx;

    // ── IL CUBO GRANDE, DA VICINO: la pietra e' fatta dei ventitre' ─────────
    // Si e' entrati nel monolite dei servizi: da cosi' vicino si leggono i
    // cubetti che lo compongono, uno per cella, ognuno con le sue bande un
    // po' girate, le giunture scure fra l'uno e l'altro e lo smusso dello
    // spigolo che prende la luce. La fessura e' una di queste giunture.
    float S = mix(0.50, 0.42, uMano);
    vec2 g = vec2((q.x - uTesta.x) / S, q.y / S + 0.62);
    vec2 ci = floor(g);
    vec2 cf = fract(g) - 0.5;
    float hC = h(ci + 0.37);
    // l'uscita: la pietra si separa di nuovo in cubetti. Ogni cubetto si
    // stacca con il suo ritardo (prima quelli lungo la fessura e in alto),
    // si stringe alla misura dei cubetti della scena e sale nella sua cella
    float cyC = (ci.y + 0.5 - 0.62) * S;
    float rit = 0.42 * abs((ci.x + 0.5) * S) / max(A, 0.6) + 0.33 * (1.0 - smoothstep(-1.1, 1.1, cyC)) + 0.22 * hC;
    float pc = clamp((uApre * 1.75 - rit) / 0.75, 0.0, 1.0);
    pc = pc * pc * (3.0 - 2.0 * pc);
    // non resta una griglia di quadrati: ogni faccia si allontana nel buio
    // (si stringe fino a sparire, scivolando un poco a modo suo) e chi resta
    // sono i cubetti veri della scena, che la fila delle prove raccoglie
    float meta = 0.5 * (1.0 - pc);
    vec2 lc = cf - (vec2(h(ci + 2.3), h(ci + 9.1)) - 0.5) * 0.6 * pc;
    float bordo = (meta - max(abs(lc.x), abs(lc.y))) * S;   // distanza dallo spigolo, in q
    float giunt = 1.0 - smoothstep(px * 0.7, px * 2.0, bordo);
    float smusso = 1.0 - smoothstep(0.0, px * 7.0, bordo);
    // le giunture fra i cubetti NON si vedono finche' la pietra e' intera:
    // nascono solo quando si rompe, all'uscita (prima erano piastrelle)
    float crepe = smoothstep(0.0, 0.12, uApre);
    giunt *= crepe;
    smusso *= crepe;
    vec2 versoSp = abs(lc.x) > abs(lc.y) ? vec2(sign(lc.x), 0.0) : vec2(0.0, sign(lc.y));
    float giuntO = abs(lc.y) > abs(lc.x) ? 1.0 : 0.0;   // giuntura orizzontale
    // corre dall'alto: il fronte scende da +1.1 a -1.15
    float fronte = mix(1.15, uTop - 0.10, uCorre);
    // sotto il mento la fotografia e' sfumata: li' la crepa non deve passare
    float sottoMento = smoothstep(uTesta.y - 0.72, uTesta.y - 0.38, q.y);
    float corsa = smoothstep(fronte - 0.04, fronte + 0.10, q.y);
    // fuori dai cubetti che si sono staccati c'e' il cielo
    float dentroF = smoothstep(-px, px, -bordo) * step(0.001, pc);

    // ── LA FINESTRA: la fessura che si apre dietro la testa ─────────────────
    // Il racconto dell'atto in tre tempi, leggibili a colpo d'occhio:
    //   buio  — la parete di cubetti d'ossidiana, presa di sbieco dalla luce
    //           fredda della cava che scende dall'alto a sinistra;
    //   crepa — la fessura corre dall'alto fino ai capelli, il colpo;
    //   luce  — la crepa si allarga in una finestra dietro la persona, e
    //           dentro c'e' un cielo caldo basso, con un sole coperto dalla
    //           testa: la luce piu' intima del sito, che entra nella stanza
    //           a raggi nella polvere.
    float vicinoF = abs(dx);
    float yc = uTesta.y + mix(0.30, 0.20, uMano);
    float hh = mix(0.95, 0.70, uMano);
    float prof = exp(-pow((q.y - yc) / hh, 2.0));
    // ── NIENTE FINESTRA (6 ottobre 2026) ────────────────────────────────
    // La crepa si allargava in una finestra a sagoma dietro la persona, con
    // un cielo dentro: \xabfuori tema, siamo dentro il cubo\xbb. Resta un filo, e
    // la luce entra dalle CREPE della pietra (qui sotto, \xabLE CREPE\xbb).
    float Wmax = mix(0.010, 0.008, uMano);
    // in mano le frasi stanno sopra la testa: li' la finestra resta stretta
    float strettaT = 1.0 - 0.75 * uMano * smoothstep(uTesta.y + 0.30, uTesta.y + 0.55, q.y);
    // sotto le spalle la fotografia sfuma: li' la finestra non scende
    float spalle = smoothstep(uTesta.y - mix(0.85, 0.55, uMano), uTesta.y - mix(0.45, 0.25, uMano), q.y);
    float wO = Wmax * uApertura * prof * strettaT * spalle;
    wO *= 1.0 + 0.22 * rotto(q.y * 4.2 + 1.0, 2.2 + sign(dx));
    float dO = vicinoF - wO;
    float dentroO = (1.0 - smoothstep(-px * 1.2, px * 1.2, dO)) * step(0.004, wO);
    // sotto le spalle la luce non arriva: niente riga accesa sulla maglia
    float dL = max(dO, 0.0) + (1.0 - spalle) * 0.6;

    // ── LE CREPE: la pietra si spacca attorno alla fessura ───────────────
    // Siamo dentro il cubo, e la luce calda della cava entra dove la pietra
    // cede. Le crepe nascono dalla fessura dietro la testa e si allargano
    // mentre la storia va avanti (uApertura); all'uscita si richiudono, poco
    // prima che il cubo intero se ne vada e si rompa nei ventitre'.
    float SC = mix(1.7, 2.4, uMano);
    vec2 wq = q * SC + (vec2(fbm(q * 2.6 + 4.0), fbm(q * 2.6 + 9.0)) - 0.5) * 0.9;
    float dC = crepa(wq) / SC;
    vec2 dalCentro = (q - vec2(uTesta.x, uTesta.y + 0.15)) * vec2(0.85, 1.0);
    float raggio = uApertura * mix(2.1, 2.0, uMano) * (0.85 + 0.3 * fbm(q * 1.7 + 2.0));
    float viva = 1.0 - smoothstep(raggio - 0.35, raggio, length(dalCentro));
    // non tutte le giunture si aprono: solo le maggiori, a tratti
    viva *= smoothstep(0.46, 0.66, fbm(q * 2.3 + 17.0) + 0.18 * uApertura);
    // vicino alla testa la crepa brucia, lontano e' un filo che si spegne:
    // le frasi ai lati restano sul buio
    viva *= mix(1.0, mix(0.28, 0.5, uMano), smoothstep(0.35, 1.5, length(dalCentro)));
    // in mano sopra la testa ci sono le frasi: li' la crepa resta, piu' tenue
    viva *= 1.0 - 0.55 * uMano * uParla * smoothstep(uTesta.y + 0.55, uTesta.y + 0.8, q.y);
    // sulla maglia e sulle spalle no: la persona non si crepa
    viva *= 1.0 - (1.0 - spalle) * (1.0 - smoothstep(0.55, 0.95, abs(dx)));
    float lineaC = (1.0 - smoothstep(px * 0.5, px * 2.4, dC)) * viva;
    float aloneC = exp(-dC / 0.045) * viva;
    dL = min(dL, dC * 2.2 + (1.0 - viva) * 0.8);
    // e dietro il viso nessuna giuntura accesa: la testa non si taglia mai
    dL += 0.6 * (1.0 - smoothstep(uTop - 0.12, uTop + 0.04, q.y)) * (1.0 - smoothstep(0.3, 0.6, vicinoF)) * (1.0 - dentroO);

    // ── LA PIETRA: vetro nero a bande, illuminato dalla fessura ─────────────
    // la faccia del Monolite e' piana e opaca: la normale e' dritta, e la
    // materia e' il nero con le inclusioni della sua grana
    vec3 nn = normalize(vec3(versoSp * smusso * 0.6, 1.0));
    float f0 = granaMonolite(q);
    vec3 V = vec3(0.0, 0.0, 1.0);
    // la luce viene dal bordo della finestra, radente
    vec3 Lf = normalize(vec3(-sign(dx) * 1.0, 0.25, 0.35));
    float spec = pow(max(0.0, dot(normalize(Lf + V), nn)), 24.0);
    float specLargo = pow(max(0.0, dot(normalize(Lf + V), nn)), 5.0);
    float accesa = smoothstep(fronte - 0.9, fronte + 0.25, q.y) * smoothstep(0.0, 0.08, uCorre);
    accesa = max(accesa, uApertura);
    float R = uOnda * (A + 0.6);
    float onda = exp(-pow((dL - R) / 0.30, 2.0)) * pow(1.0 - uOnda, 0.7) * step(0.001, uOnda);
    vec3 base = ${(0,C.s)("pietra",.301)} + ${(0,C.s)("avorio",.124)} * f0;
    vec3 caldo = ${(0,C.s)("caldo",1.041)};
    vec3 freddo = ${(0,C.s)("avorio",.658)};
    vec3 cLuce = mix(freddo, caldo, exp(-dL * mix(1.6, 0.9, uApertura)));
    vec3 pietra = base * (0.35 + 0.65 * uBande);
    // LA LUCE FREDDA DELLA CAVA, di sbieco dall'alto: e' lei che fa leggere
    // le bande nel buio prima che arrivi la crepa (come il suolo dell'hero
    // sotto le stelle). Cede man mano che entra la luce calda.
    {
      vec3 Lm = normalize(vec3(-0.55, 0.75, 0.42));
      float sm = max(0.0, dot(normalize(Lm + V), nn));
      float fr = uBande * (1.0 - 0.55 * uApertura) * (0.45 + 0.55 * smoothstep(-1.2, 1.0, q.y));
      pietra += freddo * (pow(sm, 14.0) * 0.30 + pow(sm, 4.0) * 0.07) * fr;
      pietra += freddo * base * 2.2 * max(0.0, dot(Lm, nn) - 0.3) * fr;
    }
    float bagna = exp(-dL * mix(mix(1.0, 1.5, uMano), mix(0.8, 1.1, uMano), uApertura)) * accesa;
    float lampo = L * exp(-dL * 0.32);
    float forza = 0.55 + uColpo * 0.6 + uApertura * 0.35;
    pietra += cLuce * (spec * 0.75 + specLargo * 0.30) * (bagna * forza + lampo * 0.8 + onda * 1.8);
    pietra += cLuce * base * 3.0 * (bagna * (0.35 + uApertura * 0.5) + lampo * 0.6);
    vec3 col = pietra;

    // ── LE GIUNTURE: scure, e la luce della fessura ci entra di lato ────────
    {
      col = mix(col, base * 0.4, giunt * 0.4);
      float versoLuce = max(0.0, -versoSp.x * sign(dx)) + 0.35 * max(0.0, versoSp.y);
      col += cLuce * smusso * (1.0 - giunt) * versoLuce * (0.03 * uBande + 0.22 * bagna * (0.4 + uColpo * 0.5 + uApertura * 0.3) + lampo * 0.3);
      col += caldo * giunt * giuntO * exp(-dL / mix(0.16, 0.12, uMano)) * accesa * (0.55 + uColpo * 0.5 + L * 0.6) * (1.0 - 0.4 * uParla * uMano);
    }

    // la crepa accesa: un filo caldo, quasi bianco al centro, con l'alone
    // in mano piu' accesa: sul telefono la crepa si leggeva appena (18 ottobre)
    float manoC = 1.0 + 0.8 * uMano;
    col += ${(0,C.s)("caldoChiaro",1.024)} * lineaC * (0.85 + 0.4 * uColpo + 0.5 * L) * manoC;
    col += ${(0,C.s)("caldo",1.041)} * aloneC * 0.10 * (1.0 + uColpo) * manoC * manoC;

    // ── DENTRO LA FINESTRA: il cielo caldo basso, il sole dietro la testa ───
    if (dentroO > 0.001) {
      vec2 sd = q - vec2(0.0, mix(uTesta.y + 0.18, uTop - 0.08, uMano));
      float r2 = dot(sd, sd);
      vec3 c = mix(${(0,C.s)("fondo",1.496)}, ${(0,C.s)("pietra",.575)}, smoothstep(-0.3, 1.05, q.y));
      c += ${(0,C.s)("caldo",1.041)} * exp(-r2 / 0.06) * 0.05;
      c += ${(0,C.s)("caldoChiaro",1.075)} * exp(-r2 / 0.006) * 0.12;
      float nu = fbm(vec2(q.x * 1.3 + t * 0.012, q.y * 3.2) + 11.0);
      c = mix(c, c * 1.2 + ${(0,C.s)("fondo",.38)}, smoothstep(0.45, 0.78, nu) * 0.4);
      // le ultime stelle dell'hero, in alto, dove il cielo e' ancora notte
      vec2 sp = q * 42.0;
      vec2 si = floor(sp), sf = fract(sp) - 0.5;
      float s = step(0.955, h(si + 2.0));
      vec2 o = (vec2(h(si + 1.3), h(si + 7.7)) - 0.5) * 0.7;
      c += ${(0,C.s)("avorio",.975)} * s * exp(-dot(sf - o, sf - o) * 120.0) * smoothstep(0.35, 0.95, q.y) * 0.8;
      // l'orlo della pietra, appena dentro, e' acceso
      c *= 0.8 + 0.2 * smoothstep(0.0, 0.05, -dO);
      // SOBRIA: la finestra non si dipinge piu' (si leggeva come un ritaglio
      // ovale); il fondo dietro il volto resta quello di fuori, continuo.
      col += c * 0.0;
    }
    // l'orlo spaccato fuori dalla finestra prende la luce in pieno
    col += ${(0,C.s)("caldo",1.041)} * 0.6 * exp(-dL / mix(0.010, 0.008, uMano)) * (1.0 - dentroO) * smoothstep(0.0, 0.15, uApertura) * prof * 0.9;

    // ── LA LUCE NELL'ARIA: raggi caldi che entrano dalla finestra ───────────
    // Non un contorno attaccato alla sagoma: una luce in volume, che parte
    // dal sole coperto dalla testa e attraversa la stanza nella polvere.
    {
      vec2 vr = q - vec2(0.0, mix(uTesta.y + 0.18, uTop - 0.08, uMano));
      float ang = atan(vr.x, vr.y);
      float raggi = n(vec2(ang * 7.0, t * 0.05)) * 0.6 + n(vec2(ang * 19.0 + 3.0, -t * 0.04)) * 0.4;
      raggi = smoothstep(0.25, 0.85, raggi);
      float lv = length(vr * vec2(0.85, 1.0));
      float vol = exp(-lv * mix(1.35, 1.9, uMano)) * (0.25 + 0.75 * raggi) * (uApertura + uColpo * 0.35) * (0.3 + 0.7 * uFoto);
      col += caldo * vol * 0.08 * (1.0 - 0.5 * uParla * uMano * smoothstep(uTesta.y + 0.3, uTesta.y + 0.6, q.y));
      // il controluce largo e morbido: la stanza si scalda attorno alla testa
      vec2 d = vr / vec2(mix(1.25, 0.75, uMano), mix(1.25, 0.95, uMano));
      col += ${(0,C.s)("fondo",1.521)} * exp(-dot(d, d)) * accesa * (0.45 + 0.4 * uApertura + uColpo * 0.2);
      // IL CONTROLUCE DELLA SAGOMA, IN MANO (18 ottobre 2026, Lorenzo dal
      // telefono: \xabl'effetto crepa si vede poco\xbb). Un alone caldo stretto
      // attorno a testa e spalle: la fotografia ci sta sopra, quindi resta
      // visibile solo il bordo, e il volto si stacca dal nero. Cresce con
      // l'apertura (dopo l'entrata: al passaggio dal cubetto vale zero) e
      // si tiene basso dietro le frasi.
      vec2 dt = (q - vec2(uTesta.x, uTesta.y + 0.12)) / vec2(0.62, 0.78);
      float sagoma = exp(-pow(max(0.0, length(dt) - 0.5) / 0.16, 2.0));
      float sopraT = 1.0 - 0.6 * uParla * smoothstep(uTesta.y + 0.55, uTesta.y + 0.8, q.y);
      // (5 novembre 2026) la luce e' dietro la persona: quando il ritratto esce se ne
      // va con lui. Restava da sola, un ovale beige piatto in mezzo allo schermo
      col += mix(caldo, ${(0,C.s)("caldoChiaro",1)}, 0.35) * sagoma * uApertura * uMano * 0.42 * sopraT * uFoto;
    }

    // ── LA FESSURA: la riga di luce, solo SOPRA la testa ────────────────────
    // si ferma sui capelli: il ritratto non viene mai tagliato in due
    {
      float sopra = smoothstep(uTop - 0.06, uTop + 0.06, q.y);
      float w = mix(px * 2.2, px * 1.8, uMano) * (1.0 + L * 0.8 + uColpo * 0.3);
      float riga = (1.0 - smoothstep(w * 0.3, w * 1.4, vicinoF)) * corsa * sopra * (1.0 - dentroO);
      // in mano l'alone piu' stretto (14 ottobre 2026): largo com'era, a 390 il
      // primo fotogramma del volto era sette punti piu' chiaro della faccia
      // del cubetto che lo precede (CuboPassaggio)
      float aloneR = exp(-vicinoF / mix(0.075, 0.032, uMano)) * corsa * sopra;
      float testaC = exp(-pow((q.y - fronte) / 0.07, 2.0)) * step(uCorre, 0.995) * step(0.001, uCorre);
      float dietroTesto = 1.0 - 0.92 * uParla * uMano;
      col += ${(0,C.s)("caldo",1.184)} * riga * (0.8 + uColpo * 0.3 + L * 0.3) * dietroTesto * (1.0 - uApertura * 0.5);
      col += caldo * aloneR * (0.30 + uColpo * 0.25 + L * 0.3) * mix(1.0, 0.45, uParla * uMano) * mix(1.0, 0.6, uMano);
      col += ${(0,C.s)("caldo",1.212)} * testaC * exp(-vicinoF / mix(0.05, 0.03, uMano)) * mix(1.4, 0.5, uMano);
    }

    // ── LA POLVERE NEL FASCIO ───────────────────────────────────────────────
    {
      vec2 vr = q - uTesta;
      float luceP = (exp(-dL * 1.4) * 0.8 + exp(-dot(vr, vr) * 0.7) * 0.7) * accesa * (0.7 + 0.6 * uApertura);
      for (int k = 0; k < 2; k++) {
        float sc = k == 0 ? 55.0 : 24.0;
        vec2 gp = q * sc + vec2(sin(t * 0.13 + float(k)) * 2.0, -t * (0.7 + float(k) * 0.5) * (1.0 + uColpo * 3.0));
        vec2 ci = floor(gp), cf = fract(gp) - 0.5;
        float s = step(k == 0 ? 0.968 : 0.952, h(ci + float(k) * 17.0));
        vec2 o = (vec2(h(ci + 1.3), h(ci + 7.7)) - 0.5) * 0.5;
        float punto = exp(-dot(cf - o, cf - o) * (k == 0 ? 70.0 : 40.0));
        float tw = 0.6 + 0.4 * sin(t * 0.9 + h(ci + 3.3) * 20.0);
        col += mix(freddo, caldo, 0.8) * s * punto * tw * luceP * (k == 0 ? 0.8 : 0.5) * (1.0 + uColpo * 1.2);
      }
      float fo = n(q * vec2(2.2, 1.2) + vec2(0.0, -t * 0.06));
      col += caldo * fo * fo * exp(-dL * 1.2) * accesa * (0.07 + 0.08 * uApertura);
    }
    // \xe2”€\xe2”€ L'ANELLO DI POLVERE, sul piano dell'orbita \xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€
    if (uMano < 0.5) {
      vec2 d = q - uTesta;
      d = mat2(0.985, -0.17, 0.17, 0.985) * d;
      float r = length(d * vec2(1.0, 3.6));
      float banda = exp(-pow((r - 1.05) / 0.07, 2.0));
      vec2 gp = vec2(atan(d.y * 3.6, d.x) * 60.0 + t * 0.6, r * 30.0);
      float gr = step(0.90, h(floor(gp))) * 0.7 + 0.3 * n(gp * 0.2);
      // dietro la testa (meta' alta dell'anello) passa nella luce
      col += mix(freddo, caldo, exp(-abs(d.x) * 2.5)) * banda * gr * 0.045 * accesa * (1.0 - uApre);
    }

    // \xe2”€\xe2”€ IL CIELO COPERTO, oltre la pietra che si apre \xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€\xe2”€
    if (uApre > 0.001) {
      vec3 cielo = mix(${(0,C.s)("pietra",.78)}, ${(0,C.s)("avorio",.113)}, smoothstep(-1.0, 1.2, q.y));
      vec2 cp = vec2(q.x * 0.6 + t * 0.02, q.y * 2.2);
      float nube = smoothstep(0.35, 0.8, fbm(cp + vec2(0.0, 3.0)));
      float nube2 = fbm(cp * 2.1 + vec2(t * 0.015, 9.0));
      cielo = mix(cielo, ${(0,C.s)("avorio",.161)} * (0.75 + 0.5 * nube2), nube * 0.75 * smoothstep(-0.7, 0.9, q.y));
      // le stelle dell'hero, che si spengono man mano che il cielo si chiude
      vec2 sp = q * 38.0;
      vec2 si = floor(sp), sf = fract(sp) - 0.5;
      float s = step(0.965, h(si));
      vec2 o = (vec2(h(si + 1.3), h(si + 7.7)) - 0.5) * 0.7;
      float grande = 0.5 + 1.3 * step(0.85, h(si + 5.5));
      float tw = 0.6 + 0.4 * sin(t * 1.2 + h(si + 3.1) * 30.0);
      float punto = exp(-dot(sf - o, sf - o) * 110.0 / grande);
      cielo += ${(0,C.s)("avorio",.909)} * s * punto * tw * grande * (1.0 - nube) * (1.0 - smoothstep(0.45, 1.0, uApre)) * 0.7;
      // il cubetto che si stacca: la sua faccia si allontana (si scurisce
      // e perde la luce calda) e lo spigolo prende il cielo freddo dall'alto
      // la finestra che si sta ancora richiudendo copre lo stacco: dentro la
      // luce non si disegna l'orlo del cubetto (era una L scura sul cielo caldo)
      float fuoriO = 1.0 - dentroO;
      float via = pc * (1.0 - dentroF) * fuoriO;
      col = mix(col, col * 0.55 + ${(0,C.s)("pietra",.258)}, via * 0.8);
      float filo = (1.0 - smoothstep(px * 0.5, px * 2.5, bordo)) * step(0.0, bordo);
      col += ${(0,C.s)("avorio",.769)} * filo * smoothstep(0.0, 0.25, pc) * (0.25 + 0.55 * max(0.0, versoSp.y)) * (1.0 - giunt * 0.3) * fuoriO;
      col += freddo * (spec * 0.4 + specLargo * 0.15) * via;
      col = mix(col, cielo, dentroF * fuoriO);
    }

    float vign = smoothstep(1.9, 0.5, length(q / vec2(max(A, 1.0), 1.0)));
    col *= mix(0.5, 1.0, vign);
    // la luce satura senza cambiare colore: sopra 0.8 si comprime, cosi' il
    // colpo resta caldo e non scivola nel giallo-verde (o nel grigio)
    float mx = max(max(col.r, col.g), col.b);
    if (mx > 0.85) col *= (0.85 + 0.15 * (1.0 - exp(-(mx - 0.85) * 3.0))) / mx;
    gl_FragColor = vec4(col, uPeso);
  }
`),uniforms:{uPeso:{value:0},uT:{value:0},uA:{value:1.6},uPx:{value:2/900},uBande:{value:0},uCorre:{value:0},uColpo:{value:0},uLampo:{value:0},uOnda:{value:0},uApre:{value:0},uMano:{value:+!!o},uParla:{value:0},uApertura:{value:0},uFoto:{value:1},uTop:{value:.6},uTesta:{value:new z.wq(0,.12)},uLoc:{value:.0397},uCella:{value:145}},transparent:!1,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.UM,blendEquation:z.qR,blendSrc:z.tx,blendDst:z.oL})},[o]);(0,s.useEffect)(()=>()=>t.dispose(),[t]);let i=(0,s.useRef)(t);(0,s.useLayoutEffect)(()=>{i.current=t},[t]);let r=(0,s.useRef)(-1),l=(0,s.useRef)(!0),c=(0,s.useRef)(null),u=(0,s.useRef)(0);return(0,S.f)(t=>{let n=i.current.uniforms,s=Math.max(0,Math.min(6,e.current.kc??e.current.k)),p=Math.max(0,Math.min(1,e.current.ritorno??0));eK.kcVolto=s;let f=oy(s,2.97,3.03)*(1-oy(s,3.815,3.835))*(1-p);if(n.uPeso.value=f,(0,m.m)()&&u.current<3&&u.current++,c.current&&(c.current.visible=f>=.002||u.current<3),window.__kc=s,f<.002){s<2.94&&(l.current=!0),r.current=-1,n.uColpo.value=0,n.uLampo.value=0,n.uOnda.value=0;return}let d=a?0:t.clock.elapsedTime;n.uT.value=d;let h=t.size.width/Math.max(1,t.size.height);n.uA.value=h,n.uPx.value=2/Math.max(1,t.size.height);let v=.62*Math.tan(t.camera.fov*Math.PI/360)/6;n.uLoc.value=v,n.uCella.value=1/78/v*t.size.height*.5,n.uTesta.value.set(0,o?-.22:.1),n.uBande.value=oy(s,2.9,3.1)*(1-oy(s,3.76,3.83));let x=(a?+(s>2.96):oy(s,2.96,3.1))*(1-oy(s,3.76,3.83));n.uCorre.value=x,n.uApre.value=0,n.uApertura.value=oy(s,3.22,3.74)*(1-oy(s,3.76,3.83)),n.uFoto.value=1-oy(s,3.7525,3.7565),n.uTop.value=o?.12:.6,n.uParla.value=oy(s,3.3,3.45),s<2.94&&(l.current=!0),!a&&l.current&&x>.985&&s<3.7&&(l.current=!1,r.current=d);let g=r.current<0?99:d-r.current;n.uColpo.value=a||g>5?0:g<.12?g/.12:Math.exp(-(.9*(g-.12))),n.uLampo.value=a||g>2?0:g<.06?g/.06:Math.exp(-(3*(g-.06))),n.uOnda.value=a||g>2.2?0:Math.min(1,g/2.2),window.__SONDA_CUBI&&(window.__fessura={peso:f,colpo:n.uColpo.value,kc:s})}),(0,n.jsxs)("mesh",{ref:c,renderOrder:-5,frustumCulled:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,n.jsx)("primitive",{object:t,attach:"material"})]})}let oz=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
  }
`,oL={cieloBasso:(0,C.s)("fondo",.8),cieloAlto:(0,C.s)("pietra",.9),lontana:(0,C.s)("caldo",.3),alone:(0,C.s)("caldo",.1),stelle:(0,C.s)("avorio",.9),nubeOmbra:(0,C.s)("fondo",.4),nubeLuce:(0,C.s)("caldo",.15),nubeFilo:(0,C.s)("caldo",.3),nubeSotto:(0,C.s)("caldo",.07),lampoLontano:(0,C.s)("caldoChiaro",.8),fasciaLontana:(0,C.s)("caldoChiaro",.65),lampo:(0,C.s)("avorio",.85),saetta:(0,C.s)("avorio",1),suolo:(0,C.s)("pietra",.3),suoloLuce:(0,C.s)("caldo",.45),pioggia:(0,C.s)("avorio",.66),via:(0,C.s)("pietra",.6),bagnato:(0,C.s)("fondo",.92),giunto:(0,C.s)("pietra",.5),riflessoCaldo:(0,C.s)("caldoChiaro",.85),polvere:(0,C.s)("avorio",.8)},oS=(e,a,o)=>{let t=Math.max(0,Math.min(1,(e-a)/(o-a)));return t*t*(3-2*t)};function oA(e){if(e<0||e>1.9)return 0;let a=(a,o)=>Math.exp(-(((e-a)/o)**2)),o=Math.min(1,e/.03),t=.42*(e<.25?(e/.25)**2:Math.exp(-(3*(e-.25))));return Math.max(a(.03,.04)*o,.85*a(.2,.045),t)}function oq({storyline:e,reduce:a,mobile:o=!1}){let t=(0,s.useMemo)(()=>{let e;return new z.Zg({vertexShader:oz,fragmentShader:(e=o?2:3,`
  precision highp float;
  #define OTTAVE ${e}
  varying vec2 vUv;
  uniform float uPeso;
  uniform float uT;
  uniform float uTn;
  uniform float uA;
  uniform float uPx;
  uniform float uStelle;
  uniform float uLampo;
  uniform vec2  uDove;
  uniform float uSaetta;
  uniform float uSeme;
  uniform float uVia;
  uniform float uPioggia;
  uniform float uMano;
  uniform float uOriz;
  uniform vec4  uSchermo;   // centro e mezze misure dello schermo del lavoro (in q)
  uniform vec4  uTesto;     // il rettangolo del testo (min x, min y, max x, max y)
  uniform vec3  uFulmine;   // x, cima, piede della saetta (in q)
  uniform float uCopre;     // quanto il banco ha chiuso il cielo
  uniform float uLontano;   // il lampo lontano, senza filmato
  uniform vec2  uLDove;
  uniform float uTesta;     // la fascia del menu in alto (in q)
  uniform vec3  uVista;     // il giro e l'inclinazione della camera (rad) e tan(meta' campo)
  uniform float uGiornale;  // quanto la camera e' girata verso la piana del journal (0 nella galleria)
  uniform float uOmX;       // dove sta l'omino sulla piana (x del mondo, in q)
  uniform vec2  uCarr;
  uniform vec4  uOmR;       // il riflesso dell'omino delle prove: x, y del suolo sotto di lui, forza, altezza (q)      // la carrellata delle prove (scena/prove.ts): x di lato, z indietro
  ${oh.f}

  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < OTTAVE; i++) { s += a * n(p); p = p * 2.03 + 7.1; a *= 0.5; }
    return s;
  }
  // la piana ha un'ottava in piu' delle nuvole: le creste vivono nel dettaglio
  float fbmT(vec2 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < OTTAVE + 1; i++) { s += a * n(p); p = p * 2.07 + 7.1; a *= 0.5; }
    return s;
  }
  float rotto(float y, float s) {
    float a = 0.0, w = 0.5;
    for (int i = 0; i < 4; i++) {
      float i0 = floor(y), f = fract(y);
      a += w * mix(h(vec2(i0, s)), h(vec2(i0 + 1.0, s)), f);
      y = y * 2.31 + 3.7; w *= 0.5;
    }
    return a - 0.47;
  }
  // distanza da un rettangolo (0 dentro)
  float scatola(vec2 p, vec4 r) {
    vec2 d = abs(p - r.xy) - r.zw;
    return length(max(d, 0.0));
  }

  void main() {
    if (uPeso < 0.002) discard;
    vec2 q = (vUv - 0.5) * 2.0;
    q.x *= uA;
    // LA PIANA GIRA CON LA CAMERA (19 ottobre 2026, scena/specchio.ts,
    // VISTA): quando la ripresa del journal si gira e alza lo sguardo, il
    // mondo della galleria resta fermo nel mondo e scorre nel quadro; l'omino
    // cammina su questo suolo. A camera dritta non cambia niente.
    q += vec2(-uVista.x, uVista.y) / uVista.z;
    float A = uA;
    float t = uT;
    float L = uLampo;
    float oriz = uOriz;

    // quanto vicino allo schermo: il lampo esce da li'
    float dS = scatola(q, uSchermo);
    float dietro = exp(-dS * 2.2);

    // ── IL CIELO: piu' scuro del filmato in alto, ma con la luce lontana ───
    // Dietro il banco, all'orizzonte, c'e' ancora la luce fredda della notte
    // dell'hero (dove sorgeva il pianeta): una fascia bassa che stacca la
    // piana e da' alle nuvole un ventre da cui leggersi anche al buio.
    vec3 cielo = mix(${oL.cieloBasso}, ${oL.cieloAlto}, smoothstep(-0.6, 1.3, q.y));
    float fascia = exp(-pow((q.y - oriz - 0.06) / 0.20, 2.0));
    float bassa = exp(-pow((q.y - oriz - 0.02) / 0.06, 2.0));
    vec3 cLontana = ${oL.lontana};
    // (15 ottobre 2026) la fascia fredda di qui non c'e' piu': la luce
    // dell'orizzonte e' quella del mondo (mondoOrizzonte, piu' sotto)
    // il bagliore freddo dello schermo che sale nell'aria umida
    cielo += ${oL.alone} * exp(-dS * 2.0) * 0.30;

    // le stelle dell'hero, che si spengono entrando
    vec2 sp = q * 38.0;
    vec2 si = floor(sp), sf = fract(sp) - 0.5;
    float s = step(0.965, h(si));
    vec2 o = (vec2(h(si + 1.3), h(si + 7.7)) - 0.5) * 0.7;
    float grande = 0.5 + 1.3 * step(0.85, h(si + 5.5));
    float tw = 0.6 + 0.4 * sin(t * 1.2 + h(si + 3.1) * 30.0);
    float stella = s * exp(-dot(sf - o, sf - o) * 110.0 / grande) * tw * grande;

    // ── LE NUVOLE: il banco basso e pesante, che si chiude entrando ─────────
    float tn = uTn;
    float spinta = uVia * 2.6 + (1.0 - uCopre) * 1.4;
    vec2 cp = vec2(q.x * 0.6 + tn * 0.02 + spinta, q.y * 2.2);
    float nube = smoothstep(0.38, 0.8, fbm(cp + vec2(0.0, 3.0)));
    float nube2 = fbm(cp * 2.1 + vec2(tn * 0.015, 9.0));
    // il banco: rumore piegato su se stesso (domain warp) e quasi tondo, cosi'
    // fa gobbe che pendono e non strisce tirate
    vec2 bp = vec2(q.x * 0.75 + tn * 0.035 + spinta * 1.3, (q.y - 0.35) * 1.35);
    vec2 piega = vec2(fbm(bp * 1.2 + vec2(1.7, 9.2) + tn * 0.01), fbm(bp * 1.2 + vec2(8.3, 2.8)));
    bp += (piega - 0.5) * 0.9;
    bp *= mix(1.0, 1.8, uMano);   // in mano lo schermo e' stretto: gobbe piu' piccole
    float banco = fbm(bp + vec2(5.0, 1.0));
    // entrando la soglia scende: il cielo della fessura si chiude a gobbe
    float soglia = mix(0.70, 0.34, uCopre);
    float pancia = smoothstep(soglia, soglia + 0.17, banco + 0.22 * smoothstep(0.0, 0.9, q.y));
    float resta = clamp(1.0 - uVia * smoothstep(-A - 0.4, A * 0.6, q.x + (uVia - 0.5) * A * 2.0), 0.0, 1.0);
    float cop = clamp(nube * 0.6 * uCopre + pancia * 0.97, 0.0, 1.0) * smoothstep(oriz + 0.10, oriz + 0.30, q.y) * resta;
    // UN MONDO SOLO (15 ottobre 2026, Lorenzo: \xabtutta una scena\xbb): niente
    // nuvole e niente stelle proprie. Il cielo e' quello dell'hero (Spazio,
    // sempre acceso); qui restano il buio, i lampi e la pioggia.
    cop = 0.0;

    vec3 col = cielo + ${oL.stelle} * stella * (1.0 - cop) * uStelle * 0.0;
    // il rilievo delle gobbe: la differenza col rumore poco piu' in basso
    float sotto = fbm(bp + vec2(5.0, 1.0) + vec2(0.0, -0.08));
    float gobba = clamp((banco - sotto) * 14.0, -1.0, 1.0);
    // il ventre quasi nero, le cime prese dalla luce alta dietro il banco
    vec3 cNube = mix(${oL.nubeOmbra}, ${oL.nubeLuce}, smoothstep(-0.2, 0.6, gobba));
    cNube *= 0.45 + 1.1 * nube2;
    // il filo d'argento sul bordo alto delle gobbe: e' la cosa che fa leggere
    // le nuvole come forme e non come una macchia
    float filo = smoothstep(0.35, 1.0, gobba) * smoothstep(0.08, 0.30, pancia) * (1.0 - smoothstep(0.55, 0.9, pancia));
    cNube += ${oL.nubeFilo} * filo * (0.55 + 0.45 * smoothstep(-0.2, 0.9, q.y));
    // il ventre prende la luce dello schermo e quella bassa dell'orizzonte:
    // le nuvole si leggono da sotto anche quando non lampeggia
    float sottoV = 1.0 - smoothstep(-0.7, 0.4, gobba);
    cNube += ${oL.nubeSotto} * sottoV * exp(-dS * 1.3) * 0.9;
    cNube += cLontana * sottoV * exp(-max(0.0, q.y - oriz) * 2.2) * 0.22;
    // l'orlo basso del banco, preso dalla luce dell'orizzonte da sotto: la
    // linea che disegna le gobbe pendenti contro la fascia chiara
    float orloB = smoothstep(0.04, 0.22, pancia) * (1.0 - smoothstep(0.22, 0.55, pancia)) * (0.4 + 0.6 * sottoV);
    col = mix(col, cNube, cop * 0.96);
    col += cLontana * orloB * exp(-max(0.0, q.y - oriz) * 1.6) * 0.0 * resta * smoothstep(oriz + 0.08, oriz + 0.2, q.y);

    // ── IL LAMPO LONTANO: un tuono senza filmato, dentro il banco, di lato ──
    // Piccolo e basso: la nuvola si accende da dentro in un punto, la fascia
    // dell'orizzonte sotto di lui si schiarisce. E' quello che fa capire, a
    // riposo, che il temporale c'e'.
    {
      vec2 dl = (q - uLDove) / vec2(0.55, 0.30);
      float pl = exp(-dot(dl, dl));
      float dentroN = smoothstep(0.25, 0.75, nube2 * 0.5 + banco * 0.7);
      col += ${oL.lampoLontano} * uLontano * pl * (0.35 + 0.9 * dentroN * cop) * 0.55;
      col += ${oL.fasciaLontana} * uLontano * exp(-pow((q.x - uLDove.x) / 0.9, 2.0)) * (fascia * 0.25);
    }

    // ── IL LAMPO: da dietro lo schermo, accende il ventre delle nuvole ──────
    vec3 cLampo = ${oL.lampo};
    vec2 dv = (q - uDove) / vec2(1.3, 0.9);
    float vicino = exp(-dot(dv, dv));
    float largo = exp(-dot(dv, dv) * 0.15);
    float spessa = smoothstep(0.25, 0.85, nube2 * 0.6 + banco * 0.6);
    // dentro la nuvola la luce esce dove e' sottile, e il ventre (sotto le
    // gobbe) si accende piu' delle cime: la luce viene da sotto
    float ventre = 1.0 - smoothstep(-0.6, 0.6, gobba);
    // (15 ottobre 2026) niente flash piatto: il largo che schiariva tutto il
    // quadro e' spento; il lampo accende l'aria vicina e il SUOLO BAGNATO,
    // dove si specchia in una colonna lunga verso chi guarda
    col += cLampo * L * (vicino * (0.75 - 0.45 * spessa) * (0.5 + 0.8 * ventre) * cop + largo * 0.0) * 0.6;
    {
      float giuL = max(0.0, oriz - q.y);
      float colonna = exp(-pow((q.x - uDove.x) / (0.12 + giuL * 0.25), 2.0)) * exp(-giuL / 0.45) * step(q.y, oriz);
      float lastraL = 0.8 + 0.4 * h(floor(vec2(q.x * 12.0, 1.0 / max(giuL, 0.01))));
      col += mix(cLampo, ${oL.lampoLontano}, 0.5) * L * colonna * lastraL * 0.3;
      col += cLampo * L * exp(-pow((q.y - oriz) / 0.012, 2.0)) * exp(-pow((q.x - uDove.x) / 0.8, 2.0)) * 0.25;
    }
    // gli orli si accendono bianchi
    float orlo = smoothstep(0.28, 0.42, pancia) * (1.0 - smoothstep(0.42, 0.70, pancia));
    col += cLampo * orlo * vicino * L * 0.35 * resta;
    // il bagliore che trabocca dai bordi dello schermo
    col += cLampo * L * dietro * 0.08 * (1.0 - uSaetta * 0.5);

    // ── LA SAETTA: solo nell'impatto, nella fascia libera ───────────────────
    if (uSaetta > 0.001 && L > 0.001) {
      float x0 = uFulmine.x, cima = uFulmine.y, piede = uFulmine.z;
      float yy = q.y;
      float amp = mix(0.035, 0.05, uMano);
      float cx = x0 + rotto(yy * 7.0, uSeme) * amp + rotto(yy * 29.0, uSeme + 4.0) * amp * 0.3;
      float d = abs(q.x - cx);
      float lungo = smoothstep(cima, cima - 0.06, yy) * step(piede, yy);
      // IL TRONCO SI ASSOTTIGLIA scendendo (14 ottobre sera): piu' spesso
      // sotto la nuvola, un filo sulla piana; un alone stretto e uno largo
      float giu = clamp((cima - yy) / max(0.001, cima - piede), 0.0, 1.0);
      float spes = uPx * mix(1.6, 0.8, giu);
      float fil = exp(-d / spes) * lungo;
      float alone = exp(-d / 0.03) * lungo * 0.8 + exp(-d / 0.12) * lungo * 0.25;
      // DUE RAMI, uno per lato, e da ognuno un ramoscello: si staccano dal
      // tronco seguendone gli zig-zag e si spengono andando (piu' sottili)
      float lato = sign(h(vec2(uSeme, 2.0)) - 0.5);
      float ramo = 0.0;
      for (int k = 0; k < 2; k++) {
        float fk = float(k);
        float yR = mix(cima, piede, 0.30 + 0.30 * fk);
        float lun = mix(0.24, 0.15, fk);
        float lk = lato * (fk > 0.5 ? -1.0 : 1.0);
        float t = clamp((yR - yy) / lun, 0.0, 1.0);
        float cxR = cx + (yR - yy) * (0.34 - 0.08 * fk) * lk + rotto(yy * 23.0, uSeme + 9.0 + fk * 5.0) * 0.022;
        float dentroR = step(yR - lun, yy) * step(yy, yR);
        ramo += exp(-abs(q.x - cxR) / (uPx * mix(1.0, 0.45, t))) * dentroR * (1.0 - t * t) * (0.9 - 0.3 * fk);
        // il ramoscello: a meta' ramo, verso fuori
        float yS = yR - lun * 0.45;
        float cxS = cx + (yR - yS) * (0.34 - 0.08 * fk) * lk + (yS - yy) * 0.55 * lk;
        float tS = clamp((yS - yy) / (lun * 0.4), 0.0, 1.0);
        ramo += exp(-abs(q.x - cxS) / (uPx * 0.5)) * step(yS - lun * 0.4, yy) * step(yy, yS) * (1.0 - tS) * 0.45;
      }
      col += ${oL.saetta} * (fil * 1.8 + ramo * 0.8 + alone * 0.30) * L * uSaetta;
      // la nuvola da cui nasce si accende attorno alla cima
      vec2 pc = (q - vec2(x0, cima)) / vec2(0.5, 0.18);
      col += cLampo * exp(-dot(pc, pc)) * L * uSaetta * 0.35 * (0.4 + cop);
      // dove tocca la piana: un punto acceso
      vec2 pt = (q - vec2(x0, piede)) / vec2(0.18, 0.03);
      col += cLampo * exp(-dot(pt, pt)) * L * uSaetta * 0.6;
    }

    // ── LA PIANA D'OSSIDIANA: la stessa dell'hero, di notte ─────────────────
    // Piano in prospettiva: la stessa quota a ottave dell'hero, la normale, e
    // la luce radente che sta DIETRO (il cielo all'orizzonte e il lampo): le
    // creste che guardano verso l'orizzonte prendono il filo, il resto e' nero.
    if (q.y < oriz) {
      float dist = max(0.002, oriz - q.y);
      float z = 0.9 / dist;                       // profondita'
      // la carrellata delle prove: la piana scorre sotto la camera
      vec2 P = vec2(q.x * z + uCarr.x, z - uCarr.y);
      float e = 0.06 + z * 0.01;
      vec2 Pq = P * 0.42;
      float hq  = fbmT(Pq);
      float hx  = fbmT(Pq + vec2(e * 0.42, 0.0));
      float hz  = fbmT(Pq + vec2(0.0, e * 0.42));
      vec3 nn = normalize(vec3((hq - hx) / e * 2.2, 1.0, (hq - hz) / e * 2.2));
      // la luce bassa dietro, appena da sinistra come nell'hero: la piana di
      // notte si legge dalle creste e dalle crepe, il resto e' nero
      vec3 dietroL = normalize(vec3(-0.22, 0.13, -1.0));
      float cresta = pow(max(0.0, dot(nn, dietroL)), 2.2);
      float cc = fbm(P * 0.9 + 31.7);
      float crepa = smoothstep(0.975, 1.0, 1.0 - abs(cc * 2.0 - 1.0)) * smoothstep(0.42, 0.72, hq);
      float lontano = 1.0 - smoothstep(12.0, 40.0, z);
      float primo = mix(smoothstep(0.9, 2.2, z), 1.0, uMano * 0.6);
      float grana = n(P * 9.0) * smoothstep(2.0, 6.0, z) * (1.0 - smoothstep(12.0, 22.0, z));
      float orizL = exp(-pow((z - 24.0) / 9.0, 2.0));
      float luceS = (cresta * 0.62 + crepa * 0.55 + grana * 0.04) * lontano * primo * (1.0 - uVia * 0.6) + orizL * 0.16
                 + uMano * (0.05 + cresta * 0.14 + crepa * 0.25) * (1.0 - smoothstep(4.0, 12.0, z));
      vec3 suolo = ${oL.suolo} + ${oL.suoloLuce} * luceS;
      // BAGNATA: le pozze specchiano la fascia dell'orizzonte e lo schermo,
      // a strisce verticali; e' il pavimento del filmato che continua fuori
      float pozza = smoothstep(0.50, 0.62, fbm(P * vec2(0.55, 0.22) + 3.3)) * (1.0 - smoothstep(0.55, 0.85, hq));
      float strie = 0.6 + 0.4 * n(vec2(q.x * 60.0, z * 0.6));
      float specchio = exp(-dist * 5.0) * pozza * strie;
      suolo += cLontana * specchio * 0.55;
      suolo += ${oL.alone} * pozza * strie * exp(-pow((q.x - uSchermo.x) / (uSchermo.z * 1.3), 2.0)) * exp(-dist * 3.0) * 0.6;
      suolo += ${oL.lampoLontano} * uLontano * specchio * exp(-pow((q.x - uLDove.x) / 0.8, 2.0)) * 0.6;
      // il lampo: le creste rivolte verso di lui si accendono, piu' vicino
      // alla sua x piu' forte
      vec3 dirL = normalize(vec3((uDove.x - q.x) * 0.6, 0.35, -1.0));
      float crestaL = pow(max(0.0, dot(nn, dirL)), 2.0);
      float verso = exp(-pow((q.x - uDove.x) / 1.4, 2.0));
      suolo += cLampo * (crestaL * 0.9 + crepa * 1.2 + pozza * strie * 0.5) * L * (0.35 + 0.65 * verso) * lontano * primo;
      // il pavimento sotto lo schermo bagnato di bagliore
      suolo += cLampo * L * dietro * 0.10 * primo;
      // IL RIFLESSO DELL'OMINO (18 ottobre 2026): quando vola basso sulla
      // piana bagnata la sua luce si specchia, una striscia verticale sotto
      // di lui spezzata dalle pozze
      if (uOmR.z > 0.001) {
        float rxo = (q.x - uOmR.x) / max(0.004, uOmR.w * 0.16);
        float ryo = (uOmR.y - q.y) / max(0.004, uOmR.w);
        if (ryo > -0.05) suolo += ${oL.riflessoCaldo} * exp(-rxo * rxo) * exp(-max(0.0, ryo) * 1.8) * (0.4 + 0.6 * strie) * uOmR.z * 0.22;
      }
      // nebbia sull'orizzonte
      suolo = mix(suolo, cielo * 1.1, exp(-dist * 16.0));
      // ── LA PIANA BAGNATA DEL JOURNAL (15 ottobre 2026) ──────────────────
      // Lorenzo dal vivo: la piana dove cammina l'omino era grigia, a
      // striature sfocate, lontana dall'hero. Girata la camera (uGiornale,
      // dal giro di VISTA: zero nella galleria, che resta com'era) il suolo
      // diventa l'ossidiana bagnata della prima schermata: nero profondo,
      // lastre appena leggibili dai riflessi, il riflesso lungo e caldo
      // dell'orizzonte sotto l'omino, la polvere fine.
      if (uGiornale > 0.001) {
        vec3 bag = ${oL.bagnato};
        // le lastre: una griglia sul piano, ognuna specchia un po' diverso
        vec2 Lp = vec2(P.x * 0.55, z * 0.9);
        vec2 Li = floor(Lp), Lf = fract(Lp);
        float lucida = 0.55 + 0.6 * h(Li + 2.7);
        // il giunto: un filo che si legge solo dove c'e' luce da specchiare,
        // sfuma con la distanza (oltre, le lastre si fondono)
        // (quanto cambia la lastra in un pixel, a conti fatti: niente fwidth)
        vec2 gj = min(Lf, 1.0 - Lf) / max(vec2(0.55 * z, z * z) * uPx, vec2(1e-4));
        float giunto = (1.0 - smoothstep(0.0, 1.4, min(gj.x, gj.y))) * (1.0 - smoothstep(6.0, 18.0, z));
        // il riflesso dell'orizzonte: caldo, lungo verso chi guarda, piu'
        // forte sotto l'omino e spezzato dalle lastre in strisce verticali
        float xs = q.x - uOmX;
        float sotto = exp(-pow(xs / (0.10 + dist * 0.55), 2.0)) * exp(-dist / 0.55);
        float largoR = exp(-dist / 0.12) * exp(-pow(q.x / 2.6, 2.0));
        float strisce = 0.55 + 0.45 * n(vec2(q.x * 46.0, z * 2.4)) * (0.6 + 0.4 * n(vec2(q.x * 9.0, z * 0.7 + 3.0)));
        vec3 rifl = ${oL.riflessoCaldo} * (sotto * 0.34 + largoR * 0.10) * strisce * lucida;
        // il filo delle lastre prende appena il riflesso
        rifl += ${oL.giunto} * giunto * (0.02 + sotto * 0.25 + largoR * 0.15);
        // la polvere fine: granelli sotto il pixel, piu' vivi vicino all'orizzonte
        float gr = step(0.9965, h(floor(gl_FragCoord.xy / 1.5) + 5.3)) * (0.4 + 0.6 * h(floor(gl_FragCoord.xy / 1.5) + 1.9));
        vec3 pol = ${oL.polvere} * gr * 0.10 * exp(-dist / 0.5);
        vec3 bagnata = bag + rifl + pol;
        bagnata = mix(bagnata, cielo * 0.6, exp(-dist * 22.0) * 0.5);
        suolo = mix(suolo, bagnata, uGiornale);
      }
      col = suolo;
    }

    // ── LA PIOGGIA: tre piani, si vede solo nella luce ──────────────────────
    if (uPioggia > 0.001) {
      // lontano dal testo: il rettangolo del testo la spegne, coi bordi morbidi
      vec2 tc = (uTesto.xy + uTesto.zw) * 0.5, th = (uTesto.zw - uTesto.xy) * 0.5;
      float suTesto = 1.0 - smoothstep(0.0, 0.12, scatola(q, vec4(tc, th)));
      float liberi = (1.0 - suTesto) * (1.0 - smoothstep(uTesta - 0.08, uTesta, q.y));
      float acceso = 0.12 + L * 3.2;              // al buio quasi niente
      vec3 acc = vec3(0.0);
      for (int k = 0; k < 3; k++) {
        float fk = float(k);
        // 0 lontano: fitte, corte, lente, fioche; 2 vicino: rare, lunghe, veloci
        float sc  = k == 0 ? 120.0 : (k == 1 ? 62.0 : 30.0);
        float vel = k == 0 ? 0.9 : (k == 1 ? 1.6 : 2.8);
        float sb  = k == 0 ? 0.18 : (k == 1 ? 0.22 : 0.27);
        float soglia = (k == 0 ? 0.70 : (k == 1 ? 0.82 : 0.92)) + uMano * 0.05;
        vec2 rp = vec2(q.x + q.y * sb, q.y);
        float allunga = k == 0 ? 0.10 : (k == 1 ? 0.07 : 0.045);
        vec2 gp = vec2(rp.x * sc, rp.y * sc * allunga + t * vel * sc * allunga + fk * 17.0);
        vec2 ci = floor(gp), cf = fract(gp);
        float c = step(soglia, h(ci + fk * 31.0));
        float ox = 0.2 + 0.6 * h(ci + 3.7);
        float oy = h(ci + 9.1);
        float lung = 0.25 + 0.55 * h(ci + 4.4);             // ogni goccia la sua
        float sp2 = (k == 0 ? 9.0 : (k == 1 ? 7.0 : 5.0)) * (0.8 + 0.5 * h(ci + 6.6));
        float y0 = fract(cf.y - oy);
        float corpo = smoothstep(0.0, lung * 0.3, y0) * (1.0 - smoothstep(lung * 0.6, lung, y0));
        float riga = exp(-pow((cf.x - ox) * sp2, 2.0)) * corpo;
        // la testa della goccia prende la luce piu' del corpo
        float testa = exp(-pow((y0 - lung * 0.45) * 14.0, 2.0)) * exp(-pow((cf.x - ox) * sp2, 2.0));
        float lv = (k == 0 ? 0.05 : (k == 1 ? 0.07 : 0.08)) * (0.6 + 0.8 * h(ci + 2.2));
        // i piani vicini si accendono di piu' vicino al lampo
        float luceQui = mix(acceso, 0.12 + L * 3.2 * (0.3 + 0.7 * largo), fk * 0.5);
        // sottile e coerente con la luce dell'orizzonte: vicino all'orizzonte
        // le gocce prendono il caldo della lama, piu' su restano avorio fioco
        vec3 cGoccia = mix(${oL.pioggia}, ${oL.lampoLontano}, exp(-max(0.0, q.y - oriz) / 0.25) * 0.7);
        acc += cGoccia * c * (riga + testa * 0.8) * lv * 0.7 * luceQui;
      }
      // sopra lo schermo no (il filmato ha la sua pioggia), attorno si'
      float fuoriSchermo = smoothstep(0.0, 0.05, dS);
      col += acc * uPioggia * liberi * fuoriSchermo;
    }

    // LA LUCE DEL MONDO (15 ottobre 2026): la stessa foschia calda e lo
    // stesso riflesso sul suolo bagnato dell'hero, sull'orizzonte di qui
    // la luce dell'orizzonte segue lo sguardo: la piana dove cammina l'omino
    // e' accesa come quella dei lavori (19 ottobre 2026)
    col += mondoOrizzonte((q.y - uOriz) * 0.5, (q.x + uVista.x / uVista.z) * 0.5, uT);
    // SULLA PIANA DEL JOURNAL (15 ottobre 2026): la foschia calda a strati
    // un po' piu' presente, come sull'orizzonte dell'hero, e le stelle su due
    // piani nel cielo vuoto; zero nella galleria
    if (uGiornale > 0.001) {
      float ys = q.y - uOriz;
      col += mondoOrizzonte(ys * 0.5, (q.x + uVista.x / uVista.z) * 0.5, uT) * 0.6 * uGiornale;
      // LA LAMA DIETRO L'OMINO (15 ottobre 2026, Lorenzo: \xabpiu' bella\xbb): come
      // nell'hero un filo caldo sull'orizzonte, piu' acceso dove sta l'omino,
      // cosi' la figura si stacca in controluce; sopra, un alone basso
      {
        float xo = q.x - uOmX;
        float lama = exp(-abs(ys) / 0.0045) * (0.35 + 0.65 * exp(-pow(xo / 0.55, 2.0)));
        float alo = exp(-max(ys, 0.0) / 0.08) * step(0.0, ys) * exp(-pow(xo / 0.35, 2.0));
        col += ${oL.riflessoCaldo} * (lama * 0.55 + alo * 0.12) * uGiornale;
      }
      if (ys > 0.0) {
        float cieloSu = smoothstep(0.04, 0.35, ys);
        float stelleJ = 0.0;
        for (int k = 0; k < 2; k++) {
          float sc2 = k == 0 ? 90.0 : 34.0;
          vec2 sp2 = q * sc2 + float(k) * 13.7;
          vec2 si2 = floor(sp2), sf2 = fract(sp2) - 0.5;
          vec2 o2 = (vec2(h(si2 + 1.3), h(si2 + 7.7)) - 0.5) * 0.7;
          float acc2 = step(k == 0 ? 0.975 : 0.988, h(si2 + 0.5));
          float viva = k == 0 ? 0.35 + 0.4 * h(si2 + 4.1) : 0.6 + 0.4 * h(si2 + 4.1);
          stelleJ += acc2 * exp(-dot(sf2 - o2, sf2 - o2) * (k == 0 ? 260.0 : 180.0)) * viva;
        }
        col += ${oL.stelle} * stelleJ * cieloSu * 0.45 * uGiornale;
      }
    }
    // il buio dei bordi
    float vign = smoothstep(2.0, 0.6, length(q / vec2(max(A, 1.0), 1.0)));
    col *= mix(0.62, 1.0, vign);
    col = mix(col, ${oL.via}, smoothstep(0.55, 1.0, uVia));
    gl_FragColor = vec4(col, uPeso);
  }
`),uniforms:{uPeso:{value:0},uT:{value:0},uTn:{value:0},uA:{value:1.6},uPx:{value:2/900},uStelle:{value:1},uLampo:{value:0},uDove:{value:new z.wq(.9,.5)},uSaetta:{value:0},uSeme:{value:1},uVia:{value:0},uPioggia:{value:0},uMano:{value:+!!o},uOriz:{value:-.3},uSchermo:{value:new z.$i(0,0,.6,.6)},uTesto:{value:new z.$i(-9,-9,-8,-8)},uFulmine:{value:new z.cE(1.1,.8,-.3)},uCopre:{value:1},uLontano:{value:0},uLDove:{value:new z.wq(-1.2,.4)},uTesta:{value:.75},uVista:{value:new z.cE(0,0,.38)},uGiornale:{value:0},uOmX:{value:0},uCarr:{value:new z.wq},uOmR:{value:new z.$i}},transparent:!1,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.UM,blendEquation:z.qR,blendSrc:z.tx,blendDst:z.oL})},[o]);(0,s.useEffect)(()=>()=>t.dispose(),[t]);let i=(0,s.useRef)({t0:-1e9,ultimo:-1e9,saetta:0,x:.9,y:.5,seme:1}),r=(0,s.useRef)(!1),l=(0,s.useRef)(!1),c=(0,s.useRef)(null),u=(0,s.useRef)(0),p=(0,s.useRef)(!1),f=(0,s.useRef)(-.3),d=(0,s.useRef)(0),h=(0,s.useRef)(-1e9),v=(0,s.useRef)({t0:-1e9,prossimo:0,x:-1.2,y:.4}),x=()=>{let e=function(e){let a,o=window.innerWidth,t=window.innerHeight,i=o/Math.max(1,t),r=e=>(e/o*2-1)*i,l=e=>1-e/t*2,n=null;for(let e of Array.from(document.querySelectorAll("video"))){let a=e.getBoundingClientRect();a.width<.3*o||a.bottom<0||a.top>t||(!n||a.width*a.height>n.width*n.height)&&(n=a)}if(!n)return null;let s=[(r(n.left)+r(n.right))/2,(l(n.top)+l(n.bottom))/2,(r(n.right)-r(n.left))/2,(l(n.top)-l(n.bottom))/2],c=l(n.top+.74*n.height),u=n.left>.15*o,p=u?[-i-1,-2,r(n.left-8),2]:[-i-1,l(Math.max(0,n.top-8)),i+1,2];if(!e&&u){let e=o;for(let a of Array.from(document.querySelectorAll("img, video, picture, canvas[data-miniatura]"))){let o=a.getBoundingClientRect();o.width<30||o.left<n.right-2||o.bottom<n.top||o.top>n.bottom||(e=Math.min(e,o.left))}a=[r((n.right+Math.min(e,o-24))/2),l(Math.max(70,n.top-40)),l(n.top+.74*n.height)]}else a=[r(.82*o),l(Math.max(140,n.top-150)),l(n.top+4)];return{schermo:s,testo:p,fulmine:a,oriz:c}}(o);if(u.current=performance.now(),!e)return;c.current=e;let a=t.uniforms;a.uSchermo.value.set(...e.schermo),a.uTesto.value.set(...e.testo),performance.now()-h.current>1600&&a.uFulmine.value.set(...e.fulmine),f.current=Math.max(-.6,Math.min(0,e.oriz))};(0,s.useEffect)(()=>{if(a)return;let e=e=>{let a=i.current,o=performance.now();if(o-a.ultimo<1100)return;x(),a.ultimo=o,a.t0=o,a.saetta=+!!e,a.seme=Math.floor(97*Math.random())+1;let t=c.current;e&&t?(a.x=t.fulmine[0],a.y=t.fulmine[1]-.1):t?(a.x=t.schermo[0]+(Math.random()-.5)*t.schermo[2]*1.4,a.y=t.schermo[1]+t.schermo[3]*(.7+.4*Math.random())):(a.x=0,a.y=.5)},o=()=>{r.current&&eK.calma<.5&&e(!1)};return window.addEventListener("fulmine-video",o),window.__lampoOra=()=>{i.current.ultimo=-1e9,e(!0)},window.__lontanoOra=()=>{v.current.prossimo=1,i.current.ultimo=-1e9},()=>window.removeEventListener("fulmine-video",o)},[a,o]);let g=(0,s.useRef)(null),M=(0,s.useRef)(0);return(0,S.f)(n=>{let s=t.uniforms,b=Math.max(0,Math.min(6,e.current.kc??e.current.k)),y=Math.max(0,Math.min(1,e.current.ritorno??0)),w=oS(b,3.82,3.88)*(1-oS(b,4.52,4.88))*(1-y)*(1-eG.pieno);if(s.uPeso.value=w,(0,m.m)()&&M.current<3&&M.current++,g.current&&(g.current.visible=w>=.002||M.current<3),r.current=w>.5&&b>4.03&&b<4.47,w<.002){b<4&&(l.current=!1),s.uLampo.value=0;return}!p.current&&performance.now()-u.current>500&&(p.current=!0,window.setTimeout(()=>{p.current=!1,x()},0)),s.uOriz.value+=(f.current-s.uOriz.value)*.08,eq._.oriz=s.uOriz.value,s.uVista.value.set(a?0:eq._.yaw,a?0:eq._.pitch,Math.tan((n.camera.fov||42)*Math.PI/360));{let e=n.size.width/Math.max(1,n.size.height),o=(0,eq.G)(e),t=s.uVista.value.z;s.uGiornale.value=a?0:(0,eq.u)(Math.abs(eq._.yaw)/o,.2,.85),s.uOmX.value=-(o-.12+.03)/t}let z=a?0:n.clock.elapsedTime;s.uT.value=z,s.uTn.value=o?.5*z:z,s.uCopre.value=oS(b,3.95,4.08),s.uTesta.value=1-2*(o?136:150)/Math.max(1,n.size.height);let L=n.size.width/Math.max(1,n.size.height);s.uA.value=L,s.uPx.value=2/Math.max(1,n.size.height),s.uStelle.value=Math.max(1-oS(b,4,4.1),eK.calma);let S=oS(4.44,4.36,4.5);if(s.uVia.value=Math.max(b<=4.44?oS(b,4.36,4.5):S+(1-S)*oS(b,4.44,4.86),.7*eK.calma),s.uPioggia.value=oS(b,4.02,4.1)*(1-oS(b,4.34,4.44))*!a*eK.pioggia*(1-eK.calma),s.uOmR.value.set(eK.riflesso.x,eK.riflesso.y,a?0:eK.riflesso.f,eK.riflesso.l),s.uCarr.value.set(a?0:eK.carr[0],a?0:eK.carr[1]),!a&&eK.lampo.n!==d.current&&eK.calma<.5){d.current=eK.lampo.n;let e=i.current,a=performance.now();e.ultimo=a,e.t0=a,e.saetta=1,h.current=a,e.seme=Math.floor(97*Math.random())+1,e.x=eK.lampo.x,e.y=eK.lampo.cima-.1,s.uFulmine.value.set(eK.lampo.x,eK.lampo.cima,eK.lampo.piede)}!a&&!l.current&&b>4.06&&b<4.3&&eK.calma<.5&&(l.current=!0,window.__lampoOra?.()),b<4&&(l.current=!1);let A=i.current,q=(performance.now()-A.t0)/1e3,C=a?0:oA(q);eK.luceLampo=C*(A.saetta?1:.7),s.uLampo.value=C*(o?.85:1)*(A.saetta?1:.7),s.uSaetta.value=A.saetta,s.uSeme.value=A.seme,s.uDove.value.set(A.x,A.y);let P=v.current,R=performance.now();if(!a&&r.current&&R>P.prossimo&&R-A.ultimo>3e3&&eK.calma<.5)if(0===P.prossimo)P.prossimo=R+2500;else{P.t0=R,P.prossimo=R+5e3+4e3*Math.random();let e=c.current,a=.5>Math.random()?-1:1;if(o)P.x=a*L*(.35+.5*Math.random()),P.y=.55+.3*Math.random();else if(e){let o=a<0?e.schermo[0]-e.schermo[2]:e.schermo[0]+e.schermo[2];P.x=a<0?(-L+o)/2-.1+.2*Math.random():(L+o)/2-.1+.2*Math.random(),P.y=e.schermo[1]+e.schermo[3]*(.55+.6*Math.random())}}!r.current&&b<4&&(P.prossimo=0);let E=(R-P.t0)/1e3;s.uLontano.value=a?0:.75*oA(.8*E),s.uLDove.value.set(P.x,P.y),window.__SONDA_CUBI&&(window.__temporale={peso:+w.toFixed(3),kc:+b.toFixed(3),lampo:+C.toFixed(2),lontano:+s.uLontano.value.toFixed(2),oriz:+s.uOriz.value.toFixed(2),fulmine:c.current?.fulmine.map(e=>+e.toFixed(2))})}),(0,n.jsxs)("mesh",{ref:g,renderOrder:-885,frustumCulled:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,n.jsx)("primitive",{object:t,attach:"material"})]})}let oC=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
  }
`,oP=(0,C.s)("fondo",.8),oR=(0,C.s)("avorio",.82),oE=(0,C.s)("avorio",.48),oT=(0,C.s)("pietra",.35),oO=`
  precision highp float;
  varying vec2 vUv;
  uniform float uPeso;
  uniform float uA;
  uniform float uPx;
  uniform float uMano;
  uniform float uScende;
  uniform float uOrizzonte;

  uniform float uDpr;
  uniform float uRoll;   // a zero dal 18 ottobre (la camera non rolla)

  ${oh.f}
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  // senza seno: lo stesso cielo su ogni scheda grafica
  float hash2(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    vec2 q0 = vec2((vUv.x * 2.0 - 1.0) * uA, vUv.y * 2.0 - 1.0);
    // la camera gira all'indietro uscendo dal journal: la piana gira con lei
    float cr = cos(uRoll), sr = sin(uRoll);
    vec2 q = vec2(cr * q0.x - sr * q0.y, sr * q0.x + cr * q0.y);
    float sc = uScende;

    // la curva del pianeta: e' gia' l'orizzonte della piana dell'hero
    float R = 60.0;
    float cima = uOrizzonte;
    vec2 c = vec2(0.0, cima - R);
    float d = length(q - c) - R;

    float t = clamp((q.y - cima) / (1.0 - cima), 0.0, 1.0);
    vec3 col = ${oP};   // ${C.t.fondo}

    // LE STELLE DELL'HERO, non un cielo suo (10 ottobre 2026, Lorenzo: \xabtroppe
    // stelle alla fine, deve essere piu' simile all'inizio\xbb). Prima era una
    // stella ogni 2x2 pixel DEL DISPOSITIVO con un hash a seno: sul telefono
    // (dpr 3) nove volte piu' fitte che sul monitor, e dure e piene. Ora una
    // cella ogni 6 px CSS (uDpr), un hash senza seno, la densita' e la luce
    // misurate sulla prima schermata (collaudo/programmi/piana-stelle.mjs):
    // poche, punti morbidi, quasi tutte deboli e qualcuna piu' viva.
    // Sul ponte si spengono UNA A UNA mentre si accendono quelle dello Spazio
    // (cielo da 0.22 a 0.5 del ponte): mai i due cieli pieni insieme.
    vec2 pm = q0 / uPx;
    vec2 pc = gl_FragCoord.xy / uDpr - pm + vec2(cr * pm.x - sr * pm.y, sr * pm.x + cr * pm.y);
    vec2 cella = floor(pc / 6.0);
    float st = hash2(cella);
    float sh = hash2(cella + 17.3);
    vec2 dove = (vec2(hash2(cella + 3.1), hash2(cella + 7.9)) * 0.7 + 0.15) * 6.0;
    float punto = smoothstep(1.1, 0.25, length(pc - cella * 6.0 - dove));
    float luce = 0.35 + 0.65 * sh * sh * sh;
    float via = 1.0 - smoothstep(sh * 0.5 + 0.45, sh * 0.5 + 0.55, sc);
    col += ${oR} * step(0.9957, st) * punto * luce * via * smoothstep(0.0, 0.3, t) * 0.55;

    // DUE PIANI IN PIU' (15 ottobre 2026, la stessa luce della piana del
    // journal): una polvere di stelle fittissima e debolissima, lontana, e
    // poche stelle vicine piu' larghe. Non toccano il cielo del ponte (semi
    // e densita' sopra restano quelli misurati sull'apertura): se ne vanno
    // per prime, prima che lo Spazio accenda le sue (sc < 0,4).
    {
      float viaP = 1.0 - smoothstep(0.15, 0.4, sc);
      vec2 cF = floor(pc / 3.0);
      float pF = smoothstep(0.9, 0.2, length(pc - cF * 3.0 - (vec2(hash2(cF + 5.1), hash2(cF + 9.7)) * 0.6 + 0.2) * 3.0));
      col += ${oR} * step(0.985, hash2(cF + 41.0)) * pF * (0.25 + 0.5 * hash2(cF + 2.2)) * 0.10 * viaP * smoothstep(0.02, 0.4, t);
      vec2 cV = floor(pc / 22.0);
      vec2 dV = pc - cV * 22.0 - (vec2(hash2(cV + 6.3), hash2(cV + 1.7)) * 0.7 + 0.15) * 22.0;
      float aV = exp(-dot(dV, dV) / 2.2) + exp(-dot(dV, dV) / 14.0) * 0.18;
      col += ${oR} * step(0.986, hash2(cV + 77.0)) * aV * 0.42 * viaP * smoothstep(0.05, 0.4, t);
    }

    // l'aria sopra l'orlo: una fascia sottile, piu' viva a destra
    float sx = uA * mix(0.6, 0.48, uMano);
    float fuori = max(d, 0.0);
    float lato = exp(-abs(q.x - sx) * mix(0.45, 1.3, uMano));
    col += ${oE} * exp(-fuori * 26.0) * 0.10 * (0.35 + 0.65 * lato);

    // il pianeta: ossidiana in ombra
    if (d < 0.0) col = ${oT};
    // LA LUCE DEL MONDO (15 ottobre 2026): la stessa foschia calda e lo
    // stesso riflesso dell'hero sull'orlo (ferma: qui niente tempo)
    col += mondoOrizzonte(d * 0.5, q.x * 0.5, 0.0);
    // l'ossidiana della piana come nell'hero: lastre col passo dei cubetti
    // che riflettono ognuna un po' diverso la luce dell'orlo, e la grana
    // d'avorio a puntini sotto il pixel, piu' viva vicino all'orizzonte
    if (d < 0.0) {
      float g = -d;
      vec2 lp = vec2(q.x / (0.06 + g * 0.9), 1.0 / max(g, 0.003) * 0.08);
      float lastra = 0.85 + 0.3 * hash(floor(lp));
      col += ${oE} * exp(-g / 0.06) * 0.05 * lastra * (0.4 + 0.6 * exp(-pow(q.x / (uA * 0.9), 2.0)));
      col += ${oR} * step(0.985, hash(floor(gl_FragCoord.xy / 2.0) + 3.1)) * 0.05 * exp(-g / 0.35);
      // BAGNATA (15 ottobre 2026): il suolo specchia l'aria dell'orlo e la
      // foschia dell'orizzonte, capovolte e allungate verso chi guarda,
      // spezzate dalle lastre in strisce verticali; il riflesso e' piu' vivo
      // sotto la luce di destra. Freddo: avorio, il caldo resta quello del mondo.
      float strisce = 0.6 + 0.4 * hash(vec2(floor(q.x / (uPx * 3.0)), floor(lp.y)));
      col += mondoOrizzonte(g * 0.22, q.x * 0.5, 0.0) * 0.45 * lastra * strisce;
      col += ${oE} * exp(-g / 0.22) * 0.05 * (0.3 + 0.7 * lato) * lastra * strisce;
    }

    // l'orlo: un filo d'avorio
    float filo = exp(-abs(d) / (uPx * 1.6));
    col += ${oE} * filo * 0.08;

    // la grana contro le bande
    col += (hash(gl_FragCoord.xy + 0.37) - 0.5) / 255.0;
    gl_FragColor = vec4(col, uPeso);
  }
`,oI=(e,a,o)=>{let t=Math.max(0,Math.min(1,(e-a)/(o-a)));return t*t*(3-2*t)};function oF({storyline:e,mobile:a=!1}){let o=(0,s.useMemo)(()=>new z.Zg({vertexShader:oC,fragmentShader:oO,uniforms:{uPeso:{value:0},uA:{value:1.6},uPx:{value:2/900},uMano:{value:+!!a},uScende:{value:0},uDpr:{value:1},uRoll:{value:0},uOrizzonte:{value:a?-.073:-.104}},transparent:!1,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.UM,blendEquation:z.qR,blendSrc:z.tx,blendDst:z.oL}),[a]);(0,s.useEffect)(()=>()=>o.dispose(),[o]);let t=(0,s.useRef)(o);(0,s.useLayoutEffect)(()=>{t.current=o},[o]);let i=(0,s.useRef)(null),r=(0,s.useMemo)(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),l=(0,s.useRef)(0);return(0,S.f)(a=>{let o=t.current.uniforms,n=e.current.k,s=Math.max(0,Math.min(1,e.current.ritorno??0)),c=(r?oI(n,4.5,4.84):0)*(1-oI(s,.42,.6));o.uScende.value=oI(s,0,.45),o.uPeso.value=c,(0,m.m)()&&l.current<3&&l.current++,i.current&&(i.current.visible=c>=.002||l.current<3),c<.002||(o.uA.value=a.size.width/Math.max(1,a.size.height),o.uPx.value=2/Math.max(1,a.size.height),o.uDpr.value=a.viewport.dpr||1,window.__alba={peso:+c.toFixed(3),k:+n.toFixed(3)})}),(0,n.jsxs)("mesh",{ref:i,renderOrder:-884,frustumCulled:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,n.jsx)("primitive",{object:o,attach:"material"})]})}var oN=e.i(44208);e.i(77417);var ok=e.i(72439),oD=e.i(9050);let o$=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // sul fondo della profondita': i cubetti (opachi, gia' disegnati) lo
    // coprono, lui copre lo Spazio e il Temporale che stanno dietro
    gl_Position = vec4(position.xy * 2.0, 0.99999, 1.0);
  }
`,o_=`
  precision highp float;
  varying vec2 vUv;
  uniform float uPeso;   // quanto c'e' il mondo (col movimento ridotto la dissolvenza)
  uniform float uA;      // larghezza / altezza
  uniform float uPx;     // un pixel in unita' di q
  uniform float uTanF;   // tan(meta' campo verticale)
  uniform float uPitch;  // l'inclinazione della camera (+ verso il cielo)
  uniform float uBoom;   // la quota della camera nella colonna
  uniform float uT;      // ora d'ambiente
  uniform float uBuco;   // 0 → 1 il buco nelle nuvole si allarga fino al quadro intero
  uniform float uSciolto; // 1: l'entrata e' una dissolvenza, non un fronte (dopo il pianeta)
  uniform float uVia;    // 0 → 1 le nuvole si aprono e lasciano il cielo dell'hero
  uniform float uLuce;   // quanto e' accesa la colonna
  uniform float uRc;     // il raggio della colonna
  uniform vec2 uCentroBuco; // dove sta il buco a schermo (q)
  uniform vec4 uOm;
  uniform float uForma;  // 0 → 1 il fronte di luce che scende dal buco
  uniform float uNubi;   // 0 → 1 le nuvole che si condensano dal buio
  uniform float uStretta, uLampo; // il diaframma della fine      // l'omino a schermo (q): centro, altezza, quanto c'e'

  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  // la grana: un hash intero, perche' quello col seno sulle coordinate dello
  // schermo disegnava righe diagonali (14 ottobre, lo stesso difetto altrove)
  float hg(vec2 p) { uvec2 q = uvec2(ivec2(p)) * uvec2(1597334677u, 3812015801u); uint n = (q.x ^ q.y) * 1597334677u; return float(n) / 4294967295.0; }
  float vn(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1.0, 0.0)), f.x), mix(h2(i + vec2(0.0, 1.0)), h2(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { return vn(p) * 0.5 + vn(p * 2.03 + 3.7) * 0.28 + vn(p * 4.1 + 7.1) * 0.14 + vn(p * 8.3 + 1.3) * 0.08; }

  void main() {
    if (uPeso < 0.002) discard;
    vec2 q = (vUv - 0.5) * 2.0;
    q.x *= uA;
    // il raggio della camera, inclinato come la camera vera
    vec3 r0 = normalize(vec3(q.x * uTanF, q.y * uTanF, -1.0));
    float cp = cos(uPitch), sp = sin(uPitch);
    vec3 r = vec3(r0.x, r0.y * cp - r0.z * sp, r0.y * sp + r0.z * cp);

    vec3 fondo = ${(0,C.s)("fondo",.92)};
    vec3 avorio = ${(0,C.s)("avorio",.94)};
    vec3 caldo = mix(${(0,C.s)("avorio",.9)}, ${(0,C.s)("caldo",1.041)}, 0.72);
    float DC = 6.00, HN = 14.00;
    float t = uT;

    // ── LA COLONNA: l'integrale di una densita' gaussiana attorno all'asse
    // (verticale, davanti a DC): piu' lungo il tratto nella luce, piu' luce.
    // Guardando in su il tratto si allunga, e la colonna diventa la sorgente.
    // E' un cono: stretta in alto dove esce dalle nuvole, larga in basso, cosi'
    // i raggi si aprono dalla sorgente come nei riferimenti.
    float rxz = max(length(r.xz), 1e-3);
    float davanti = step(r.z, 0.0);
    float tc = DC * max(-r.z, 0.0) / (rxz * rxz);
    float dperp = DC * r.x / rxz;
    float yC = r.y * tc + uBoom;
    // nasce come un filo (le particelle raccolte sull'asse) e si allarga; alla
    // fine si stringe di nuovo a un filo, come un diaframma
    float rC = uRc * (0.55 + 0.025 * max(HN - yC, 0.0)) * mix(0.06, 1.0, smoothstep(0.0, 1.0, uForma)) * mix(1.0, 0.05, uStretta);
    float u = dperp / rC;
    float nucleo = exp(-u * u * 1.45);
    float alone = exp(-u * u * 0.12);
    float lungo = 1.0 / max(rxz, 0.62);
    // i raggi interni: strisce che scendono dalla sorgente e si muovono di
    // lato pianissimo, e sopra un luccichio lento come la luce sotto l'acqua
    float raggi = fbm(vec2(u * 1.7 + t * 0.012, yC * 0.035 - t * 0.018));
    float fini = vn(vec2(u * 6.5 - t * 0.02, yC * 0.06 + 1.7));
    raggi = clamp(0.3 + 1.7 * (raggi - 0.45) + 0.45 * (fini - 0.5), 0.05, 1.5);
    float acqua = vn(vec2(u * 4.5 - t * 0.05, yC * 0.32 + t * 0.11)) * vn(vec2(u * 3.1 + 4.0, yC * 0.21 - t * 0.07));
    // finisce nel soffitto di nuvole, in basso si spegne piano
    float alto = 1.0 - smoothstep(HN - 3.0, HN + 0.5, yC);
    float quota = mix(0.32, 1.25, smoothstep(-18.0, HN, yC));
    // il fronte che scende dal buco: sopra c'e' la luce, sotto non ancora, e la
    // punta brilla
    float yF = mix(HN + 1.0, -34.0, uForma);
    float sceso = smoothstep(yF - 1.5, yF + 1.5, yC);
    float punta = exp(-pow((yC - yF) / 1.8, 2.0)) * (1.0 - uForma) * step(0.001, uForma);
    float I = sceso * (nucleo * (0.55 + 0.45 * raggi) * (0.85 + 0.55 * acqua) * 0.72 + alone * 0.012) * lungo * alto * quota * davanti;
    I += punta * exp(-u * u * 0.8) * lungo * 0.9 * davanti;
    I *= 1.0 + uLampo * 1.6;
    vec3 tinta = mix(caldo, avorio, smoothstep(-8.0, 12.0, yC));

    // ── LE NUVOLE AI LATI: a volute, scure, prese di caldo dove la luce le
    // tocca e quasi nere lontano da lei (il secondo riferimento)
    float el = r.y, az = atan(r.x, -r.z);
    vec2 nq = vec2(az * 2.2, el * 2.6 + uBoom * 0.05);
    float nb = fbm(nq + vec2(t * 0.005, -t * 0.004));
    float vol = fbm(nq * 2.3 + vec2(nb * 1.6, -t * 0.006) + 5.0);
    // si condensano dal buio: la soglia della loro materia scende con uNubi
    float nube = smoothstep(0.25 + 0.75 * (1.0 - uNubi), 0.85 + 0.6 * (1.0 - uNubi), nb * 0.6 + vol * 0.55);
    float vicino = exp(-u * u * 0.05) * davanti;
    vec3 col = fondo * (0.5 + 0.24 * nube);
    col += caldo * pow(nube, 2.4) * vicino * 0.15 * uLuce * quota;
    col += avorio * pow(vol, 5.0) * vicino * 0.05 * uLuce;

    // ── IL SOFFITTO DI NUVOLE, col buco da cui scende la luce
    if (r.y > 0.02) {
      float tN = (HN - uBoom) / r.y;
      vec3 P = r * tN;
      vec2 pxz = P.xz - vec2(0.0, -DC);
      float dist = length(pxz);
      float cd = fbm(P.xz * 0.11 + vec2(t * 0.004, t * 0.003));
      float cv = fbm(P.xz * 0.27 + cd * 1.5 + 2.0);
      float bordoBuco = dist + (cd - 0.5) * 2.6;
      float rB = uRc * 0.55;
      float nuvola = smoothstep(rB * 0.9, rB * 3.2, bordoBuco) * smoothstep(0.02, 0.22, r.y) * smoothstep(0.0, 1.0, uNubi * 1.4 - cv * 0.4);
      vec3 nc = fondo * (0.6 + 0.45 * cv) + caldo * exp(-max(bordoBuco - rB, 0.0) / 1.8) * 0.4 * cv * cv * uLuce;
      // dentro il buco: la sorgente, avorio, mai bianca
      vec3 sorgente = mix(avorio, ${(0,C.s)("caldoChiaro",1)}, 0.3) * (0.4 + 0.3 * cd) * exp(-dist * dist / (rB * rB * 3.0)) * uLuce * smoothstep(0.0, 0.3, uForma);
      col = mix(col + sorgente, nc, nuvola);
      I *= 1.0 - nuvola * smoothstep(HN - 4.0, HN, yC);
    }
    col += tinta * I * uLuce;
    // l'aria accesa dietro di lui: la luce che lo prende di spalle e lo
    // stacca, il controluce (la sagoma la fanno i suoi punti, scuri)
    if (uOm.w > 0.0) {
      vec2 dO = (q - uOm.xy) / vec2(uOm.z * 0.42, uOm.z * 0.62);
      col += mix(caldo, avorio, 0.6) * exp(-dot(dO, dO)) * 0.11 * uOm.w * uLuce;
    }

    // la grana del sito
    vec2 gg = floor(gl_FragCoord.xy / 2.0);
    col += (step(0.93, hg(gg)) * 0.03 - 0.01) * (0.6 + 0.4 * (1.0 - I));

    // ── L'ENTRATA: il buco nelle nuvole che si allarga fino a coprire il
    // quadro; il bordo frastagliato come quello delle nuvole
    float a = 1.0;
    if (uBuco < 1.0) {
      // LO SPAZIO DAL NIENTE (17 ottobre sera): sopra il cielo del temporale
      // c'e' il buio, e lo si scopre alzando lo sguardo; il fronte scende in
      // elevazione, appena mosso, mentre la camera sale
      float E = mix(1.75, -1.75, uBuco);
      float el2 = asin(clamp(r.y, -1.0, 1.0)) + (fbm(q * 1.6 + 5.0) - 0.5) * 0.12;
      a = smoothstep(E - 0.06, E + 0.14, el2);
      // DOPO IL PIANETA (29 ottobre, notte): il fronte in elevazione, con la
      // camera inclinata, scendeva come un disco scuro sfocato largo quanto lo
      // schermo sopra il cielo del pianeta, buio su buio. Li' il buio c'e'
      // gia': il mondo del fascio ci si scioglie sopra, uguale nei due versi
      a = mix(a, smoothstep(0.0, 1.0, uBuco), uSciolto);
    }
    // ── L'USCITA: le nuvole si aprono dal basso mentre lo sguardo scende
    // sulla piana, e l'ultimo lembo se ne va dall'alto
    if (uVia > 0.0) {
      // (17 ottobre sera) un fronte pulito: stretto, appena mosso, con l'orlo
      // delle nuvole preso dalla luce; largo e sfrangiato era una fanghiglia
      // scura sopra la piana
      float S = -1.35 + uVia * 3.0;
      float yv = q.y + (fbm(q * 2.0 + 11.0) - 0.5) * 0.18;
      float apre = smoothstep(S - 0.12, S + 0.04, yv);
      float orlo = exp(-pow((yv - S + 0.02) / 0.05, 2.0));
      col += mix(caldo, avorio, 0.4) * orlo * 0.16 * uLuce;
      a *= apre;
    }
    gl_FragColor = vec4(col, a * uPeso);
  }
`,oU=e=>`vec3(${e.map(e=>e.toFixed(4)).join(", ")})`,oj=`
  ${oD.P}
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
  }
`,oV=`
  uniform sampler2D uImg;
  uniform float uHa, uSopra, uOp, uVivo, uTA, uArr;
  uniform vec2 uTilt;
  uniform vec3 uSole, uP;
  ${oD.I}
  varying vec3 vL;
  varying vec3 vN;
  varying vec3 vW;
  varying vec3 vNW;
  float hash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
  void main() {
    vec3 v = normalize(vW - cameraPosition);
    // l'ossidiana dei bordi e del retro, con la grana del sito
    vec3 col = ${(0,C.s)("pietra",.935)};
    vec2 gp = abs(vN.z) > 0.5 ? vL.xy : (abs(vN.x) > 0.5 ? vL.zy : vL.xz);
    col += step(0.97, hash(floor(gp * 160.0))) * ${(0,C.s)("pietra",1.323)};
    // gli spigoli prendono la luce della colonna
    float luce = pow(max(dot(vNW, uSole), 0.0), 3.0);
    col += ${oU(ok.D)} * luce * 0.6;
    if (vN.z > 0.5) {
      vec2 uv = vec2(vL.x / 1.000 + 0.5, vL.y / 0.6250);
      ${oD.N}
      ${oD.F}
      im = pow(im, vec3(0.8)) * (1.6 + uSopra * 0.4);
      col = mix(col, im, uHa);
      ${oD.a}
      // all'arrivo dalla luce una lama passa sul vetro, una volta (come in /pensiero all'arrivo della camera)
      if (uArr < 1.0) {
        float sa = uv.x * 0.8 + uv.y * 0.5 - (uArr * 2.4 - 0.6);
        col += ${(0,C.s)("avorio")} * (exp(-sa * sa / 0.004) * 0.16 + exp(-sa * sa / 0.05) * 0.03) * sin(3.1416 * uArr);
      }
      // la luce di taglio sull'orlo, piu' forte dal lato della luce
      float orlo = 1.0 - smoothstep(0.0, 0.018, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
      col += ${oU(ok.D)} * orlo * (0.08 + 0.22 * uv.y) * 0.75;
      // il vetro sopra l'immagine: la colonna ci scorre sopra quando la lastra gira
      vec3 r = reflect(v, vNW);
      float riflesso = pow(max(dot(r, uP), 0.0), 18.0);
      col += ${oU(ok.d)} * riflesso * 0.3;
      col += ${(0,C.s)("avorio",.745)} * pow(1.0 - abs(dot(v, vNW)), 4.0) * 0.12;
    }
    gl_FragColor = vec4(col, uOp);
  }
`,oB=[0,1,2].map(()=>({v:0})),oW=new z.cE,oG=new z.cE,oZ=(0,od.n)(),oH=[0,0],oX=[0,0];function oY({storyline:e,reduce:a,mobile:o,giornale:t}){let i=(0,s.useMemo)(()=>new z.Zg({vertexShader:o$,fragmentShader:o_,uniforms:{uPeso:{value:0},uA:{value:1.6},uPx:{value:2/900},uTanF:{value:.38},uPitch:{value:0},uBoom:{value:0},uT:{value:0},uBuco:{value:0},uSciolto:{value:0},uVia:{value:0},uLuce:{value:0},uRc:{value:1.35},uCentroBuco:{value:new z.wq},uOm:{value:new z.$i},uForma:{value:0},uNubi:{value:0},uStretta:{value:0},uLampo:{value:0}},transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1,blending:z.UM,blendEquation:z.qR,blendSrc:z.tx,blendDst:z.oL}),[]);(0,s.useEffect)(()=>()=>i.dispose(),[i]);let r=(0,s.useRef)(i);(0,s.useLayoutEffect)(()=>{r.current=i},[i]);let l=(0,s.useRef)(null),c=(0,s.useRef)(null);(0,s.useLayoutEffect)(()=>{oZ.ridotto=!!a},[a]);let u=(0,s.useMemo)(()=>{let e=new z.C9,a=new z.kG(1,.625,.06);a.translate(0,.3125,0);let o=[0,1,2].map(()=>{let o=new z.Zg({vertexShader:oj,fragmentShader:oV,uniforms:{uImg:{value:null},uHa:{value:0},uSopra:{value:0},uOp:{value:0},uSole:{value:new z.cE(0,1,0)},uP:{value:new z.cE(0,1,0)},uProf:{value:null},uHaP:{value:0},uTipo:{value:-1},uParal:{value:1},uVivo:{value:0},uTA:{value:0},uTilt:{value:new z.wq},uArr:{value:1}},transparent:!0,toneMapped:!1}),t=new z.kE(a,o);return t.rotation.order="YXZ",t.visible=!1,e.add(t),{m:t,mat:o,tex:null,prof:null}});return{gruppo:e,geo:a,lastre:o}},[]);(0,s.useEffect)(()=>()=>{for(let e of(u.geo.dispose(),u.lastre))e.mat.dispose(),e.tex?.dispose(),e.prof?.dispose()},[u]);let p=(0,s.useRef)(u);return(0,s.useLayoutEffect)(()=>{p.current=u},[u]),(0,S.f)((o,i)=>{let n=r.current.uniforms,s=Math.max(0,Math.min(1,e.current.ritorno??0)),u=(0,eq.r)(t?.current??0),m=!!a,f=o.size.width,d=Math.max(1,o.size.height),h=f/d,v=Math.tan((o.camera.fov||42)*Math.PI/360),x=m?0:o.clock.elapsedTime,g=u>5e-4&&u<.9995&&s<.001,M=eU(u),b=g?m?(0,eq.u)(u,.02,.08)*(1-(0,eq.u)(u,.86,.94)):1:0,y=m?1:M.buco,w=m?0:M.via,L=b>.002&&y>5e-4&&w<.9995;eq.S.v=0,eG.pieno=L&&y>=.9995&&w<=5e-4&&b>=.9995?1:0,l.current&&(l.current.visible=L),r.current.depthTest=!m;let S=m||!g?0:eE(u),A=m?eT(eR.sosta):eT(u);eG.boom=A,eq._.yaw=0,eq._.pitch=S,L?(n.uPeso.value=b,n.uA.value=h,n.uPx.value=2/d,n.uTanF.value=v,n.uPitch.value=S,n.uBoom.value=A,n.uT.value=x,n.uBuco.value=y,n.uSciolto.value=+!!eK.spazio,n.uVia.value=w,n.uForma.value=m?1:M.forma,n.uNubi.value=m?1:M.nubi,n.uStretta.value=m?0:M.stretta,n.uLampo.value=m?0:M.lampo,n.uLuce.value=m?1:eV(u),n.uRc.value=1.35*(h<1?.52+.3*h:1),ai(0,14-A,-6,S,v,f,d,oH),n.uCentroBuco.value.set((oH[0]-f/2)/(d/2),1-2*oH[1]/d)):n.uPeso.value=0;let q=c.current,C=m?+(b>.002):g?eI(u):0,P=b>.002&&C>.002;q&&(q.visible=P);let R=at(u,x,m);ai(0,R.piedi,-6,S,v,f,d,oH),ai(0,R.piedi+1.7,-6,S,v,f,d,oX);let E=oH[0],T=oH[1],O=Math.max(1,T-oX[1]);if(eG.omino.x=E,eG.omino.piedi=T,eG.omino.alto=O,eG.omino.c=P?C:0,n.uOm.value.set((E-f/2)/(d/2),1-2*(T-.5*O)/d,O/(d/2),P?C*(1-oZ.scioglie):0),(0,eq.V)(u,Math.min(.05,i),x,f,d,E,T-.56*O,g?b:0,m),!function(e,a,o,t,i,r,l){let{gruppo:n,lastre:s}=e,c=!1;for(let e of s)e.m.visible=!1;for(let e=0;e<3;e++)eq.E.pose[e].op>0&&(c=!0);if(n.visible=c,!c)return;let u=10*Math.tan((a.fov??50)*Math.PI/360)/t;n.position.copy(a.position),n.quaternion.copy(a.quaternion),n.updateMatrixWorld(),oW.set(0,.85,-.5).normalize().applyQuaternion(a.quaternion),oG.set(0,.6,-.8).normalize().applyQuaternion(a.quaternion);for(let e=0;e<3;e++){let a=eq.E.pose[e],n=s[e];if(a.op<=0)continue;let c=n.mat.uniforms;if(!n.tex){let a=eq.E.el[e]?.querySelector("img"),o=a?.currentSrc||a?.getAttribute("src"),t=a?.getAttribute("src")??"",l=(0,oD.L)(t);c.uTipo.value=l,l>=0&&!n.prof&&(n.prof=new z.H5().load((0,oD.C)(t),()=>{c.uHaP.value=1,i()}),c.uProf.value=n.prof),o&&(n.tex=new z.H5().load(o,()=>{c.uHa.value=1,i()}),n.tex.colorSpace=z.nj,n.tex.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),c.uImg.value=n.tex)}let p=n.m;p.visible=!0;let m=eq.E.avanti[e],f=5-1.1*m,d=f/5;p.position.set((a.x-o/2)*u*d,(t/2-a.by)*u*d,-f+.002*a.z*(1-m)),p.scale.setScalar(a.base*a.s*u*d),p.rotation.set(-a.rx*Math.PI/180,a.ruota*Math.PI/180,0),p.renderOrder=a.d>.5?1001:999,c.uSopra.value=m,c.uVivo.value=l?0:.55+.45*m,c.uTA.value=l?0:(0,N.B)()/1e3,c.uOp.value=a.op,c.uArr.value=l?1:(0,eq.u)(eq.E.arrivo[e],.45,1),oB[e].v=l||1!==c.uTipo.value?0:c.uVivo.value*a.op,c.uSole.value.copy(oW),c.uP.value.copy(oG)}}(p.current,o.camera,f,d,o.invalidate,o.gl,m),!P){oZ.omino.w=0,oZ.galleggia=0;return}let I=O/.98;oZ.omino.w=.6*I,oZ.omino.h=I,oZ.omino.x=E-.3*I,oZ.omino.y=T-I+(I-O)*.2;let F=m?eR.sosta:u;if(oZ.passo=0,oZ.vola=0,oZ.guardaSu=0,oZ.rotta=m?.55:eD(u),oZ.rollio=R.rollio,oZ.raccogli=m?1:eF(u),oZ.galleggia=eN(F),oZ.guardaLuce=m?.3:.3+.7*ek(u),oZ.controluce=1,oZ.ordina=m?0:e$(u),oZ.scioglie=m?0:e_(u),oZ.campioni=eH,0!==oZ.nuclei[1]||0!==oZ.nuclei[0]){for(let e=0;e<23;e++)!function(e,a,o,t,i,r,l){let n=(1-2*a/r)*t,s=Math.cos(o),c=Math.sin(o),u=n*c+-1*s,p=6/Math.max(.05,-u);l.x=(e-i/2)/(r/2)*t*p,l.y=(n*s- -1*c)*p,l.z=u*p}(oZ.nuclei[2*e],oZ.nuclei[2*e+1],S,v,f,d,eG.nucleiCol[e]),eG.nuclei[e][0]=oZ.nuclei[2*e],eG.nuclei[e][1]=oZ.nuclei[2*e+1];eG.nucleiOk=!0}oZ.svanisce=1-C}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("mesh",{ref:l,renderOrder:-700,frustumCulled:!1,visible:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,n.jsx)("primitive",{object:i,attach:"material"})]}),(0,n.jsx)("primitive",{object:u.gruppo}),!a&&u.lastre.map((e,a)=>(0,n.jsx)(s.Fragment,{children:(0,oN.f)((0,n.jsx)("group",{position:[0,.3125,0],scale:.625,children:(0,n.jsx)(oD.K,{i:-1,mobile:o,vivo:oB[a],ordine:1002})}),e.m)},a)),(0,n.jsx)("group",{ref:c,visible:!1,children:(0,n.jsx)(ot.w,{posa:"in-piedi",mobile:o,quanti:3e4,stato:oZ})})]})}let oQ=[0,0],oJ=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }
`,oK=`
  precision highp float;
  varying vec2 vUv;
  uniform float uA, uInveste, uFronte, uRaggi, uT, uPitch, uTanF, uRc;
  uniform float uFilo, uPosa, uOriz;
  uniform vec2 uCentro;
  uniform float uPrimo;
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vn(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1.0, 0.0)), f.x), mix(h2(i + vec2(0.0, 1.0)), h2(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  void main() {
    vec2 q = (vUv - 0.5) * 2.0;
    q.x *= uA;
    vec3 avorio = ${(0,C.s)("avorio",.94)};
    vec3 caldo = mix(${(0,C.s)("avorio",.9)}, ${(0,C.s)("caldo",1.041)}, 0.6);
    // la luce che scende: sopra il fronte c'e', sotto non ancora; piu' forte
    // al centro, dove cade la colonna
    float fronte = smoothstep(uFronte - 0.9, uFronte + 0.15, q.y);
    float centro = exp(-q.x * q.x / max(0.2, uA * uA * 0.35));
    // concentrata attorno al buco nelle nuvole, da dove scende: un velo
    // appena su tutto, il resto vicino alla sorgente
    vec2 dq = q - uCentro;
    float sorgente = exp(-dot(dq, dq) / 0.9);
    float I = uInveste * fronte * (0.035 + 0.3 * sorgente);
    // i raggi davanti: lame verticali larghe che si spostano pianissimo
    float xs = q.x * uTanF / uRc * 6.0;
    float lame = vn(vec2(xs * 0.9 + uT * 0.012, q.y * 0.35 - uT * 0.015)) * vn(vec2(xs * 0.5 - uT * 0.008, 3.0));
    I += uRaggi * lame * lame * centro * 0.05;
    // IL PRIMO RAGGIO (17 ottobre sera): appena il buco si apre ne scende un
    // filo di luce verso la camera, prima che le nuvole si aprano: il tratto
    // della salita dei cubetti non resta al buio
    if (uPrimo > 0.0) {
      vec2 dr = q - uCentro;
      float giu = smoothstep(0.05, -0.4, dr.y);
      float largo = 0.05 + max(0.0, -dr.y) * 0.12;
      float filo = exp(-pow(dr.x / largo, 2.0)) * giu * exp(max(0.0, -dr.y) * -0.25);
      float alone = exp(-dot(dr, dr) / 0.05);
      I += uPrimo * (filo * 0.3 + alone * 0.3) * (0.85 + 0.15 * lame);
    }
    // IL FILO DOPO IL LAMPO (17 ottobre sera): la colonna stretta a un filo
    // scende e si posa sull'orizzonte della piana, diventandone la lama calda
    if (uFilo > 0.0) {
      float v = exp(-pow(q.x / 0.006, 2.0)) * smoothstep(uOriz - 0.05, uOriz + 0.2, q.y) * 0.7;
      float o = exp(-pow((q.y - uOriz) / 0.005, 2.0)) * exp(-pow(q.x / (uA * 0.55), 2.0)) * 0.55
              + exp(-pow((q.y - uOriz) / 0.05, 2.0)) * exp(-pow(q.x / (uA * 0.4), 2.0)) * 0.12;
      // dietro la pioggia: un'aria calda larga attorno al filo, da cui i
      // ventitre' (scuri, con lo spigolo acceso) si staccano in controluce
      float aria = exp(-pow(q.x / (0.42 + 0.5 * uPosa), 2.0)) * smoothstep(uOriz - 0.3, uOriz + 0.6, q.y) * (1.0 - 0.6 * uPosa);
      I += uFilo * (mix(v, o, uPosa) + aria * 0.16);
    }
    vec3 col = mix(caldo, avorio, clamp(0.5 + q.y * 0.4, 0.0, 1.0)) * I;
    gl_FragColor = vec4(col, 1.0);
  }
`,o0=`
  attribute vec4 aSeme;
  uniform float uT, uPitch, uBoom, uTanF, uA, uH, uDpr, uRc, uRaccolta, uBuio;
  varying float vLuce;
  varying float vMorbido;
  void main() {
    // la polvere vive attorno alla colonna e sale e scende pianissimo
    vec3 p = position;
    p.y += sin(uT * (0.05 + aSeme.x * 0.06) + aSeme.y * 6.28) * 0.6 + uT * (aSeme.z - 0.5) * 0.04;
    p.y = mod(p.y - uBoom + 14.0, 32.0) - 14.0;
    p.x += sin(uT * 0.07 + aSeme.w * 6.28) * 0.25;
    // nel buio sono sparse e larghe; poi si raccolgono sull'asse, dove nasce la luce
    vec2 dAsse = vec2(p.x, p.z + 6.00);
    dAsse *= (1.0 + uBuio * 1.4 * aSeme.y) * mix(1.0, 0.04 + 0.08 * aSeme.z, uRaccolta);
    p.x = dAsse.x; p.z = dAsse.y - 6.00;
    p.z += cos(uT * 0.06 + aSeme.x * 6.28) * 0.25;
    // nella camera inclinata
    float c = cos(uPitch), s = sin(uPitch);
    float yc = p.y * c + p.z * s;
    float zc = -p.y * s + p.z * c;
    float d = max(0.05, -zc);
    gl_Position = vec4(p.x / d / uTanF / uA, yc / d / uTanF, 0.0, 1.0);
    if (-zc < 0.2) gl_Position = vec4(9.0, 9.0, 0.0, 1.0);
    // accesa quanto la tocca la luce
    float dperp = length(vec2(p.x, p.z + 6.00));
    vLuce = exp(-pow(dperp / (uRc * 1.4), 2.0)) * 0.85 + 0.12 + 1.4 * uBuio + 0.6 * uRaccolta;
    // il fuoco sta sull'omino: vicino alla camera grande e morbida
    float fuori = abs(d - 6.00) / 6.00;
    vMorbido = clamp(fuori * 1.6, 0.0, 1.0);
    float lato = (1.2 + aSeme.w * 1.6) * (1.0 + vMorbido * vMorbido * 9.0) * (6.00 / d) * uH / 900.0;
    // nel buio piu' grandi in proporzione alla larghezza: a 1440 si perdevano
    gl_PointSize = clamp(lato * (1.0 + uBuio * (0.7 + 0.9 * min(uA, 2.0))), 1.0, 64.0) * uDpr;
    vLuce *= 1.0 / (1.0 + vMorbido * vMorbido * 6.0);
  }
`,o1=`
  precision highp float;
  uniform float uPeso;
  varying float vLuce;
  varying float vMorbido;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c) * 2.0;
    if (r > 1.0) discard;
    // al fuoco un punto, fuori fuoco un disco col bordo appena piu' chiaro
    float netto = exp(-r * r * 6.0);
    float disco = smoothstep(1.0, 0.82, r) * (0.55 + 0.45 * smoothstep(0.5, 0.95, r));
    float f = mix(netto, disco * 0.5, vMorbido);
    vec3 col = mix(${(0,C.s)("caldo",1)}, ${(0,C.s)("avorio",.94)}, 0.55);
    gl_FragColor = vec4(col * f * vLuce * uPeso, 1.0);
  }
`;function o2({reduce:e,mobile:a,giornale:o}){let t=(0,s.useRef)(null),i=(0,s.useRef)(null),r=(0,s.useMemo)(()=>new z.Zg({vertexShader:oJ,fragmentShader:oK,uniforms:{uFilo:{value:0},uPosa:{value:0},uOriz:{value:0},uPrimo:{value:0},uCentro:{value:new z.wq},uA:{value:1.6},uInveste:{value:0},uFronte:{value:1},uRaggi:{value:0},uT:{value:0},uPitch:{value:0},uTanF:{value:.38},uRc:{value:1.35}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.tq}),[]),{geo:l,matP:c}=(0,s.useMemo)(()=>{let{pos:e,seme:o}=function(e){let a=new Float32Array(3*e),o=new Float32Array(4*e),t=91,i=()=>(t=1664525*t+0x3c6ef35f>>>0)/0x100000000;for(let t=0;t<e;t++){let e=.18>i(),r=i()*Math.PI*2,l=e?.5+1.5*i():4.2*Math.pow(i(),.8);a[3*t]=Math.cos(r)*l*(e?1.6:1),a[3*t+1]=-14+32*i(),a[3*t+2]=e?-1-2*i():-6+Math.sin(r)*l,o[4*t]=i(),o[4*t+1]=i(),o[4*t+2]=i(),o[4*t+3]=i()}return{pos:a,seme:o}}(a?150:280),t=new z.ld;return t.setAttribute("position",new z.f5(e,3)),t.setAttribute("aSeme",new z.f5(o,4)),{geo:t,matP:new z.Zg({vertexShader:o0,fragmentShader:o1,uniforms:{uRaccolta:{value:0},uBuio:{value:0},uT:{value:0},uPitch:{value:0},uBoom:{value:0},uTanF:{value:.38},uA:{value:1.6},uH:{value:900},uDpr:{value:1},uRc:{value:1.35},uPeso:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.tq})}},[a]);return(0,s.useEffect)(()=>()=>{r.dispose(),l.dispose(),c.dispose()},[r,l,c]),(0,S.f)(a=>{let r=(0,eq.r)(Math.max(0,Math.min(1,o?.current??0))),l=r>5e-4&&r<.9995,n=a.size.width,s=Math.max(1,a.size.height),c=n/s,u=Math.tan(a.camera.fov*Math.PI/360),p=a.clock.elapsedTime,m=1.35*(c<1?.52+.3*c:1),f=e?0:eE(r),d=eU(r),h=e?0:eV(r),v=t.current;if(v){let a=e||!l?0:ej(r),o=e||!l?0:h*(1-d.via),t=e||!l?{c:0,posa:0}:eW(r);if(v.visible=a>.002||o>.002||t.c>.002,v.visible){let e=v.material.uniforms;e.uPrimo.value=0,e.uFilo.value=t.c,e.uPosa.value=t.posa,e.uOriz.value=Math.tan(Math.atan((c<1?-.073:-.104)*u)-f)/u,e.uA.value=c,e.uInveste.value=a,e.uRaggi.value=o,e.uT.value=p,e.uPitch.value=f,e.uTanF.value=u,e.uRc.value=m,e.uFronte.value=1.3-2.6*Math.min(1,1.15*a),ai(0,14-eT(r),-6,f,u,n,s,oQ),e.uCentro.value.set((oQ[0]-n/2)/(s/2),1-2*oQ[1]/s)}}let x=i.current;if(x){let o=d.buco*(1-d.forma),t=eK.spazio?(0,eq.u)(r,.2,.3):1,i=e||!l?0:Math.max(d.buco*(1-d.via),h)*t;if(x.visible=i>.002,x.visible){let e=x.material.uniforms;e.uT.value=p,e.uPitch.value=f,e.uBoom.value=eT(r),e.uTanF.value=u,e.uA.value=c,e.uH.value=s,e.uDpr.value=a.viewport.dpr,e.uRc.value=m,e.uPeso.value=i,e.uRaccolta.value=eB(r),e.uBuio.value=o}}}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("points",{ref:i,geometry:l,material:c,renderOrder:1002,frustumCulled:!1,visible:!1}),(0,n.jsxs)("mesh",{ref:t,renderOrder:1003,frustumCulled:!1,visible:!1,children:[(0,n.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,n.jsx)("primitive",{object:r,attach:"material"})]})]})}var o5=e.i(8560),o3=e.i(81695);let o4=o3.LAVORI.map(e=>{let a=(0,o3.fotoPerTela)(e.slug),o=a.find(e=>e.src.startsWith("/projects/"))??a[0];return{slug:e.slug,src:o?.tela??o?.src??""}}).filter(e=>e.src),o6=o4.length,o8={raggio:.36,largo:.17,giri:.95},o7={raggio:.28,largo:.13,giri:.95},o9=.03/.45;function te(e,a,o,t){return t.set(o,e.raggio*e.kappa,a).normalize()}let ta=new z.cE;function to(e,a,o,t){let i=1.6-a*e.ripeto/e.stira,r=e.kappa*i,l=Math.sin(r),n=Math.cos(r);return te(e,l,n,ta),t.set(-e.raggio*l+ta.x*o*e.largo,i+ta.y*o*e.largo,e.raggio*n+ta.z*o*e.largo)}let tt=`
  uniform float uOp, uDpr, uSposta, uBordo, uMix;
  varying vec2 vU;
  float h2(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
  float stelle(vec2 fc, float lato, float soglia) {
    vec2 cella = floor(fc / lato);
    float r = h2(cella + lato);
    if (r < soglia) return 0.0;
    vec2 dove = (cella + 0.2 + 0.6 * vec2(h2(cella + 7.1), h2(cella + 3.3))) * lato;
    return smoothstep(1.1, 0.25, length(fc - dove)) * (0.35 + 0.65 * pow(h2(cella + 1.7), 3.0));
  }
  void main() {
    // LO STACCO: lo spazio sale da sotto come una scena nuova, col suo bordo
    // che sale con lo scroll e copre il volto mentre se ne va
    if (vU.y > uBordo) discard;
    vec2 fc = gl_FragCoord.xy / uDpr + vec2(0.0, uSposta);
    vec3 col = ${(0,C.s)("fondo",1)};
    col += ${(0,C.s)("avorio",1)} * (stelle(fc, 6.0, 0.9957) * 0.55 + stelle(fc + vec2(0.0, uSposta * 0.5), 22.0, 0.986) * 0.42) * uOp;
    col += (h2(gl_FragCoord.xy * 1.37) - 0.5) / 255.0;
    gl_FragColor = vec4(col, uMix);
  }
`,ti=`
  uniform vec2 uSchermo;
  uniform float uDpr;
  uniform vec3 uDisco;
  uniform float uGiro, uT, uCrepa, uCorona, uPeso;
  uniform vec3 uOrigine;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  vec3 hash3(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6)));
    return fract(sin(p) * 43758.5453);
  }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
  // la distanza dallo spigolo piu' vicino fra due celle: zero sulla crepa
  float spigolo(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    float d1 = 8.0, d2 = 8.0;
    for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) for (int z = -1; z <= 1; z++) {
      vec3 g = vec3(float(x), float(y), float(z));
      vec3 o = g + hash3(i + g) * 0.85 - f;
      float d = dot(o, o);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
    }
    return sqrt(d2) - sqrt(d1);
  }
  float r3(vec3 p) {
    vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    float n000 = hash3(i).x, n100 = hash3(i + vec3(1,0,0)).x, n010 = hash3(i + vec3(0,1,0)).x, n110 = hash3(i + vec3(1,1,0)).x;
    float n001 = hash3(i + vec3(0,0,1)).x, n101 = hash3(i + vec3(1,0,1)).x, n011 = hash3(i + vec3(0,1,1)).x, n111 = hash3(i + vec3(1,1,1)).x;
    return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y), mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
  }
  // un filo largo w attorno allo spigolo, mai piu' sottile di un pixel: sotto, si spegne in proporzione
  float filo(float dist, float w) {
    float px = max(fwidth(dist), 1e-5);
    float ww = max(w, px * 0.75);
    return (1.0 - smoothstep(ww * 0.5, ww + px * 0.5, dist)) * (w / ww) * step(0.00001, w);
  }
  void main() {
    vec2 px = vec2(gl_FragCoord.x, uSchermo.y * uDpr - gl_FragCoord.y) / uDpr;
    vec2 d = (px - uDisco.xy) / uDisco.z;
    d.y = -d.y;
    float r = length(d);
    if (r > 1.35) discard;
    float rc = min(r, 1.0);
    vec3 n = normalize(vec3(d / max(r, 1e-4) * rc, sqrt(max(0.0, 1.0 - rc * rc))));
    float disco = smoothstep(1.0, 1.0 - fwidth(r) * 1.5 - 1e-4, r);
    // la sfera girata: il punto della superficie, fermo sul pianeta
    float cg = cos(-uGiro), sg = sin(-uGiro);
    vec3 l = vec3(cg * n.x + sg * n.z, n.y, -sg * n.x + cg * n.z);
    float lon = atan(l.x, l.z), lat = asin(clamp(l.y, -1.0, 1.0));
    // la luce di Parliamone: dall'alto a sinistra, appena dietro
    vec3 sole = normalize(vec3(-0.72, 0.6, -0.2));
    float lr = dot(n, sole);
    float ter = smoothstep(-0.1, 0.6, lr);
    vec2 s = vec2(lon * 2.2, lat * 2.2);
    float macchie = rumore(s * 3.0 + 2.0) * 0.6 + rumore(s * 7.0) * 0.4;
    vec2 gc = vec2(lon * 70.0, lat * 70.0);
    float grana = hash(floor(gc)) * step(length(fract(gc) - 0.5), 0.22);
    vec3 col = ${(0,C.s)("avorio",.62)} * ter * (0.5 + 0.3 * macchie) * 0.32;
    float falce = pow(max(0.0, lr), 3.0) * smoothstep(0.45, 1.0, rc);
    col += mix(${(0,C.s)("avorio",.62)}, ${(0,C.s)("caldo",1)}, 0.25) * falce * 0.55;
    vec3 rif = reflect(vec3(0.0, 0.0, -1.0), n);
    float lucido = pow(max(0.0, dot(rif, normalize(vec3(0.62, 0.62, 0.48)))), 90.0);
    col += ${(0,C.s)("avorio",.62)} * lucido * 0.16;
    float scintilla = step(0.93, grana) * (0.5 + 0.5 * sin(uT * 0.9 + grana * 60.0));
    col += ${(0,C.s)("avorio",.62)} * scintilla * (0.05 + 0.25 * ter) * smoothstep(0.2, 0.95, rc);

    // ── LE CREPE (29 ottobre, la seconda mano) ──
    // Erano due reticoli di Voronoi a spessore quasi uguale, linee da texture.
    // Ora c'e' una gerarchia di tre: le faglie grandi, i rami che ne escono e
    // i capillari che si stringono attorno ai rami. Ognuna si assottiglia
    // lungo la sua corsa fino a sparire (un rumore la stringe), l'orlo e'
    // scheggiato (un rumore fine sulla distanza), e la luce sta in fondo alla
    // fessura: chiara nel filo centrale, calda ai lati, con un labbro scuro di
    // pietra appena fuori. Tutto in 3D sulla sfera: niente cucitura a lon \xb1π.
    float an = acos(clamp(dot(l, uOrigine), -1.0, 1.0));
    float mosso = an + (r3(l * 2.2) - 0.5) * 0.5;
    // fin dove arrivano: due terzi del globo, il resto resta pietra intera
    float fronte = uCrepa * 1.75;
    // la superficie storta prima di dividerla, a due ottave: le faglie piegano
    vec3 storta = l + (vec3(r3(l * 1.7), r3(l * 1.7 + 5.3), r3(l * 1.7 + 9.1)) - 0.5) * 0.5
                    + (vec3(r3(l * 5.0 + 2.0), r3(l * 5.0 + 7.7), r3(l * 5.0 + 3.1)) - 0.5) * 0.08;
    float scheggia = r3(l * 46.0) - 0.5;
    float grandi = spigolo(storta * 0.8) + scheggia * 0.006;
    float rami = spigolo(storta * 2.3 + 4.0) + scheggia * 0.004;
    float capi = spigolo(storta * 6.5 + 11.0) + scheggia * 0.003;
    // si stringono lungo la corsa: tratti pieni, tratti che si chiudono a filo
    float stringeG = mix(0.35, 1.0, smoothstep(0.25, 0.7, r3(l * 2.0 + 1.0)));
    float stringeR = smoothstep(0.35, 0.75, r3(l * 3.1 + 6.0));
    // i rami nascono vicino alle faglie, i capillari vicino ai rami
    float vicinoG = exp(-grandi / 0.2);
    float vicinoR = exp(-min(grandi, rami) / 0.07);
    float apreG = smoothstep(fronte, fronte - 0.35, mosso);
    float apreR = smoothstep(fronte - 0.15, fronte - 0.6, mosso);
    float apreC = smoothstep(fronte - 0.4, fronte - 0.95, mosso);
    float eta = smoothstep(0.0, 1.2, fronte - mosso);
    float lg = mix(0.004, 0.016, eta) * stringeG * apreG;
    float lRami = mix(0.003, 0.009, eta) * stringeR * vicinoG * apreR;
    float lc = 0.003 * vicinoR * apreC * step(0.35, r3(l * 4.0 + 2.5));
    // il filo: mai sotto un pixel di larghezza (fwidth); quando sarebbe piu'
    // sottile resta un pixel e si spegne, cosi' non sfarfalla girando
    float fG = filo(grandi, lg), fR = filo(rami, lRami), fC = filo(capi, lc);
    // oltre 120 gradi dall'origine niente: a celle larghe il globo diventava un pallone
    float lontano = 1.0 - smoothstep(1.9, 2.15, an);
    float crepa = max(fG, max(fR * 0.8, fC * 0.5)) * lontano;
    // il nucleo: il filo centrale delle faglie larghe e' il caldo chiaro
    float nucleo = filo(grandi, lg * 0.35) * lontano;
    // il labbro: la pietra appena fuori dalla faglia, in ombra
    float labbro = (1.0 - fG) * exp(-max(0.0, grandi - lg) / max(0.004, lg * 1.4)) * step(0.0001, lg) * lontano;
    // il calore che respira piano in fondo alle fessure, diverso da tratto a tratto
    float respira = 0.82 + 0.18 * sin(uT * 0.55 + r3(l * 1.3) * 6.2832);
    float bagliore = exp(-grandi / 0.025) * apreG * stringeG * 0.1 * lontano;
    float sulFronte = exp(-pow((fronte - mosso) / 0.18, 2.0));
    // si leggono sul lato buio e sbiadiscono verso l'orlo (la pietra le copre di taglio)
    float vista = mix(0.6, 1.0, 1.0 - ter) * smoothstep(0.02, 0.35, n.z);
    col *= 1.0 - labbro * 0.55 * vista;
    vec3 caldo = mix(${(0,C.s)("caldo",1)}, ${(0,C.s)("caldoChiaro",1)}, clamp(nucleo * 0.7 + 0.25 * sulFronte, 0.0, 1.0));
    // MAI BIANCO: il calore si ferma al caldo chiaro (29 ottobre, notte)
    col += caldo * min(0.9, (crepa * (0.45 + 0.9 * sulFronte) * respira + bagliore * respira) * vista);
    // IL PRESAGIO (31 ottobre): prima che il nastro arrivi il globo era pietra
    // intera, e le crepe nascevano dal nulla. Ora, attorno all'origine, la
    // faglia grande c'e' gia': un capello di pietra appena incrinata, piu'
    // sottile del filo vero, con un calore che sale e scende piano (l'ora
    // d'ambiente, un respiro ogni dieci secondi). Quando il fronte parte la
    // crepa vera ci passa sopra e il presagio si spegne in lei.
    float attesa = 1.0 - smoothstep(0.0, 0.12, uCrepa);
    float seme = filo(grandi, 0.0026 * stringeG) * exp(-pow(mosso / 0.42, 2.0)) * attesa;
    float battito = 0.55 + 0.45 * sin(uT * 0.63 + 1.3);
    col *= 1.0 - seme * 0.35 * vista;
    col += ${(0,C.s)("caldo",1)} * seme * (0.18 + 0.22 * battito) * vista;

    // la corona d'avorio sul bordo; in fondo si scalda
    float fres = pow(1.0 - n.z, 4.0) * disco;
    vec3 tCor = mix(${(0,C.s)("avorio",.62)}, ${(0,C.s)("caldo",1.041)}, uCorona);
    col += tCor * fres * (0.22 + 0.25 * uCorona);
    float fuori = (1.0 - disco) * exp(-pow((r - 1.0) / (0.035 + 0.035 * uCorona + 0.02 * uCrepa), 2.0));
    // l'alone dal lato della luce, come il volto: pieno in alto a sinistra,
    // un filo dalla parte opposta (era un anello uguale tutto attorno)
    float latoLuce = 0.25 + 0.75 * smoothstep(-0.6, 0.8, dot(d / max(r, 1e-4), normalize(vec2(-0.72, 0.6))));
    vec3 alone = tCor * fuori * (0.32 + 0.3 * uCorona + 0.1 * uCrepa) * latoLuce;
    vec3 luce = (col * disco + alone) * uPeso;
    gl_FragColor = vec4(luce, disco * uPeso);
  }
`,tr=`
  varying vec2 vUv; varying vec3 vN, vTx, vTy, vV;
  void main() {
    vUv = uv;
    vN = normalize(normalMatrix * vec3(0.0, 0.0, 1.0));
    vTx = normalize(normalMatrix * vec3(1.0, 0.0, 0.0));
    vTy = normalize(normalMatrix * vec3(0.0, 1.0, 0.0));
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vV = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,tl=`
  uniform sampler2D map; uniform float uOp, uT;
  varying vec2 vUv; varying vec3 vN, vTx, vTy, vV;
  float h2(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
  float morbida(vec2 q) { return texture2D(map, q, 2.0).a; }
  void main() {
    float a = texture2D(map, vUv).a;
    // il taglio: una soglia larga un pixel dello schermo, mai la sfocatura della mip
    float w = max(fwidth(a) * 0.7, 0.015);
    float pieno = smoothstep(0.5 - w, 0.5 + w, a);
    // la parete dello scavo: la pendenza dell'alpha sfocata, in uv
    float e = 2.5 / 512.0;
    vec2 g = vec2(morbida(vUv + vec2(e, 0.0)) - morbida(vUv - vec2(e, 0.0)), morbida(vUv + vec2(0.0, e)) - morbida(vUv - vec2(0.0, e)));
    float hb = morbida(vUv);
    // scavato: la normale pende verso l'interno del marchio
    vec3 n = normalize(vN + (g.x * vTx + g.y * vTy) * 2.2);
    vec3 V = normalize(vV);
    // la luce che passa: dall'alto a sinistra, e scorre piano da un lato all'altro
    float ang = sin(uT * 0.21) * 0.9;
    vec3 L = normalize(vec3(-0.55 + ang, 0.65, 0.55));
    float dif = max(0.0, dot(n, L));
    float spe = pow(max(0.0, dot(reflect(-L, n), V)), 36.0);
    float parete = clamp(length(g) * 3.0, 0.0, 1.0);
    // l'avorio dell'intarsio, con la grana a celle dei cubetti
    float grana = h2(floor(vUv * 220.0)) - 0.5;
    vec3 avorio = ${(0,C.s)("avorio",1)};
    vec3 fondo = ${(0,C.s)("fondo",1)};
    float tono = 0.62 + 0.3 * dif + grana * 0.06;
    // il fondo dello scavo e' un filo piu' in ombra delle pareti al sole
    vec3 dentro = avorio * tono * mix(1.0, 0.82, smoothstep(0.75, 1.0, hb)) + avorio * spe * 0.5 * parete;
    // fuori dal marchio: lo smusso della pietra, scuro dal lato in ombra e con un
    // filo di luce dal lato al sole
    float labbro = (1.0 - pieno) * smoothstep(0.08, 0.45, hb);
    float sole = smoothstep(0.0, 0.35, dot(normalize(g + 1e-5), -normalize(L.xy))) * parete;
    vec3 col = mix(fondo, avorio * 0.55, sole * 0.5 + spe * 0.6);
    float alfa = max(pieno, labbro * (0.55 + 0.25 * sole));
    vec3 tinta = mix(col, dentro, pieno);
    gl_FragColor = vec4(tinta, alfa * uOp);
  }
`,tn=(i=eX.map(e=>e.id),[...r=[4,13,16,12,6,10,11,1,7,5,2,15,9,18,14,17].map(e=>i.indexOf(e)).filter(e=>e>=0),...i.map((e,a)=>a).filter(e=>!r.includes(e))].slice(0,23)),ts=(l=new z.cE(.25,.22,1).normalize(),new z.cE(.7648421872844885*l.x+-.644217687237691*l.z,l.y,.644217687237691*l.x+.7648421872844885*l.z)),tc=new z.nd,tu=new z.as,tp=new z.cE,tm=new z.cE(1,1,1),tf=new z.cE;function td(e){return(0,s.useEffect)(()=>{let e=document.documentElement;return e.dataset.proveTela="",e.dataset.nastro="",eK.spazio=!0,()=>{delete e.dataset.proveTela,delete e.dataset.nastro,eK.spazio=!1}},[]),e.reduce?(0,n.jsx)(th,{prove:e.prove,giornale:e.giornale}):(0,n.jsx)(tM,{...e})}function th({prove:e,giornale:a}){return(0,S.f)(()=>{let o=e?Math.max(0,Math.min(1,e.current)):0,t=a?(0,eq.r)(Math.max(0,Math.min(1,a.current))):0,i=aT(),r=Math.min(aC.p,i),l=i>0&&(r>.02||o>5e-4)&&t<.22;eK.carr[0]=0,eK.carr[1]=0,eK.pioggia=0,eK.calma=+!!l,eK.omino.h=0,eK.titolo=0,eK.cta=0,eK.lastraRect.w=0,eK.corrente=l?-3:-1}),null}let tv=[],tx=0,tg=0;function tM({prove:e,giornale:a,reduce:o,mobile:t}){let i=(0,A.f)(e=>e.gl),r=(0,A.f)(e=>e.camera),l=(0,A.f)(e=>e.scene),c=i.capabilities.getMaxAnisotropy(),u=i.capabilities.maxTextureSize,p=(0,s.useMemo)(()=>{let e,a,o,r,l,n,s,p=(a=2*Math.PI*(e=t?o7:o8).giri,r=(o=1.6*e.largo)+e.largo*o9,{raggio:e.raggio,largo:e.largo,kappa:a,stira:Math.sqrt(1+e.raggio*e.raggio*a*a),lungo:o,periodo:r,ripeto:r*o6}),f=t?.17:.2,d=function(e){let a=new Float32Array(5406),o=new Float32Array(5406),t=new Float32Array(3604),i=[];for(let r=0;r<=900;r++){let l=1.6-3.2*r/900,n=e.kappa*l,s=Math.sin(n),c=Math.cos(n);te(e,s,c,ta);let u=(1.6-l)*e.stira/e.ripeto;for(let i=0;i<2;i++){let n=(i-.5)*e.largo,p=2*r+i;a[3*p]=-e.raggio*s+ta.x*n,a[3*p+1]=l+ta.y*n,a[3*p+2]=e.raggio*c+ta.z*n,o[3*p]=-s,o[3*p+1]=0,o[3*p+2]=c,t[2*p]=u,t[2*p+1]=i}if(r<900){let e=2*r;i.push(e,e+2,e+1,e+1,e+2,e+3)}}let r=new z.ld;return r.setAttribute("position",new z.f5(a,3)),r.setAttribute("normal",new z.f5(o,3)),r.setAttribute("uv",new z.f5(t,2)),r.setIndex(i),r}(p),h=(l=Math.min(4096,u),(n=document.createElement("canvas")).width=l,n.height=Math.max(8,8*Math.ceil(l*p.largo/p.ripeto/8)),(s=new z.Nk(n)).colorSpace=z.nj,s.wrapS=z.Jr,s.wrapT=z.Jr,s.anisotropy=Math.min(8,c),{canvas:n,tex:s}),v={value:-10},x={value:-9},g={value:new z.wq(-1e5,1)},M=(e,a,o)=>{let t,i,r,l,n,s=new z.Ox({...m.O,map:e,emissiveMap:e,emissive:new z.Es(C.t.avorio),emissiveIntensity:a,clearcoat:.35,envMapIntensity:.85,side:o,transparent:!0,depthWrite:!0}),c=es(v,x),u=o===z.tw?(t=(p.periodo-p.lungo).toFixed(6),i=p.periodo.toFixed(6),r=p.ripeto.toFixed(6),l=p.lungo.toFixed(6),n=`
    vec2 specchiaRetro(vec2 q) {
      float x = q.x * ${r};
      float posto = floor(x / ${i});
      float l = x - posto * ${i};
      if (l >= ${t}) l = 2.0 * ${t} + ${l} - l;
      return vec2((posto * ${i} + l) / ${r}, q.y);
    }
  `,e=>{let a=o5.Y.emissivemap_fragment.replace(/texture2D\(\s*emissiveMap\s*,\s*vEmissiveMapUv\s*\)/,"textureGrad(emissiveMap, specchiaRetro(vEmissiveMapUv), dFdx(vEmissiveMapUv), dFdy(vEmissiveMapUv))");e.fragmentShader=e.fragmentShader.replace("void main() {",n+"void main() {").replace("texture2D(map, vMapUv)","textureGrad(map, specchiaRetro(vMapUv), dFdx(vMapUv), dFdy(vMapUv))").replace("#include <emissivemap_fragment>",a)}):null;return s.onBeforeCompile=e=>{c(e),e.uniforms.uTaglio=g,e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec2 uTaglio;
void main() {
float sfumaTaglio = smoothstep(uTaglio.x, uTaglio.x + uTaglio.y, gl_FragCoord.y);
if (sfumaTaglio <= 0.0) discard;`).replace("#include <dithering_fragment>","#include <dithering_fragment>\ngl_FragColor.a *= sfumaTaglio;"),u?.(e)},s.customProgramCacheKey=()=>u?"nastro-retro":"nastro-davanti",s},b=M(h.tex,.9,z.de),y=M(h.tex,.6,z.tw),w=new z.C9,L=new z.kE(d,b),S=new z.kE(d,y);L.frustumCulled=!1,S.frustumCulled=!1,S.renderOrder=10,L.renderOrder=11,w.add(L,S);let A=new z.Zg({depthTest:!0,depthWrite:!1,transparent:!0,blending:z.UM,blendSrc:z.Vt,blendDst:z.oL,uniforms:{uSchermo:{value:new z.wq(1,1)},uDpr:{value:1},uDisco:{value:new z.cE},uGiro:{value:0},uT:{value:0},uCrepa:{value:0},uCorona:{value:0},uPeso:{value:0},uOrigine:{value:ts},uProf:{value:.9999}},vertexShader:"uniform float uProf; void main() { gl_Position = vec4(position.xy, uProf, 1.0); }",fragmentShader:ti}),q=new z.kE(new z.CQ(2,2),A);q.frustumCulled=!1,q.renderOrder=5;let P=new z.kE(new z.Gu(.99*f,48,32),new z.p$({colorWrite:!1,transparent:!0,depthWrite:!0}));P.renderOrder=6,P.frustumCulled=!1;let R=new z.CQ(1,1),E=new z.H5,T=eX.map(e=>{let a=new z.Sk;a.colorSpace=z.Ik,a.anisotropy=Math.min(t?4:16,c),a.minFilter=z.Q4,a.magFilter=z.VV,a.generateMipmaps=!0,a.flipY=!1;let o=e=>{a.userData.morto?e.close?.():(a.image=e,a.needsUpdate=!0,function(e){if(tv.push(e),tg)return;let a=()=>{tg=0;let e=tv.shift();e&&(e(),tx=performance.now(),tv.length&&(tg=window.setTimeout(a,80)))};tg=window.setTimeout(a,Math.max(0,80-(performance.now()-tx)))}(()=>{a.userData.morto||i.initTexture(a)}))};fetch(e.src,{priority:"low"}).then(e=>e.ok?e.blob():Promise.reject(e)).then(e=>createImageBitmap(e,{imageOrientation:"flipY"})).then(o).catch(()=>{a.userData.morto||(a.flipY=!0,E.load(e.src,e=>o(e.image)))});let r=new z.Zg({uniforms:{map:{value:a},uOp:{value:0},uT:{value:0}},vertexShader:tr,fragmentShader:tl,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new z.kE(R,r);return l.renderOrder=1,l.frustumCulled=!1,l.visible=!1,{piano:l,tex:a,mat:r,su:null}}),O=new z.C9;O.add(P,w);let I=new z.Zg({vertexShader:"varying vec2 vU; void main() { vU = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:tt,uniforms:{uOp:{value:0},uDpr:{value:1},uSposta:{value:0},uBordo:{value:0},uMix:{value:0}},depthTest:!1,depthWrite:!1,toneMapped:!1,blending:z.UM,blendEquation:z.qR,blendSrc:z.tx,blendDst:z.oL}),F=new z.kE(new z.CQ(2,2),I);F.frustumCulled=!1,F.renderOrder=-4;let N=new z.C9;return N.matrixAutoUpdate=!1,N.add(F,q,O),N.visible=!1,{F:p,Rl:f,geoMarchio:R,marchi:T,geo:d,davanti:h,uCoda:v,uTesta:x,uTaglio:g,matDavanti:b,matDietro:y,nastro:w,luna:q,matLuna:A,corpo:P,mondo:O,matC:I,cielo:F,gruppo:N,caricate:0}},[t,c,u,i]);(0,s.useEffect)(()=>()=>{for(let e of(p.geo.dispose(),p.matDavanti.dispose(),p.matDietro.dispose(),p.davanti.tex.dispose(),p.luna.geometry.dispose(),p.matLuna.dispose(),p.corpo.geometry.dispose(),p.corpo.material.dispose(),p.cielo.geometry.dispose(),p.matC.dispose(),p.geoMarchio.dispose(),p.marchi))e.su?.remove(e.piano),e.tex.userData.morto=!0,e.tex.image?.close?.(),e.tex.dispose(),e.mat.dispose()},[p]);let f=(0,s.useRef)(p);(0,s.useLayoutEffect)(()=>{f.current=p},[p]),(0,s.useEffect)(()=>{let e=!0,{F:a,davanti:o}=p,t=o.canvas.getContext("2d"),r=window.setTimeout(async()=>{let r=await Promise.all(o4.map(e=>{let a;return a=e.src,new Promise(e=>{let o=new Image;o.decoding="async",o.onload=()=>{o.decode().then(()=>e(o),()=>e(o))},o.onerror=()=>e(null),o.src=a})}));e&&(r.forEach((e,i)=>{e&&((e,i)=>{if(!t)return;let r=o.canvas.width/a.ripeto,l=a.lungo*r,n=o.canvas.height,s=((o6-1-i)*a.periodo+(a.periodo-a.lungo))*r,c=e.width/e.height,u=l/n,m=e.width,f=e.height,d=0,h=0;c>u?(m=e.height*u,d=(e.width-m)/2):(f=e.width/u,h=(e.height-f)/2),t.drawImage(e,d,h,m,f,s,0,l,n),t.strokeStyle=C.t.avorio32,t.lineWidth=2,t.strokeRect(s+1,1,l-2,n-2),p.caricate++})(e,i)}),o.tex.needsUpdate=!0,o.tex.onUpdate=()=>{o.canvas.width=1,o.canvas.height=1,o.tex.onUpdate=null},i.initTexture(o.tex))},1500);return()=>{e=!1,window.clearTimeout(r)}},[p,i]),(0,s.useEffect)(()=>{let e=document.getElementById("lavori");if(!e||"u"<typeof IntersectionObserver)return;let a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(()=>{let{gruppo:e,nastro:a}=p,o=e.visible,t=a.visible;e.visible=!0,a.visible=!0;let n=i.compileAsync(e,r,l);e.visible=o,a.visible=t,n.catch(()=>{})})()},{rootMargin:"200% 0px 200% 0px"});return a.observe(e),()=>a.disconnect()},[p,i,r,l]);let d=(0,s.useRef)(-99),h=(0,s.useRef)(0),v=(0,s.useRef)({x:0,y:0});return(0,s.useEffect)(()=>{let e=e=>{"mouse"===e.pointerType&&(v.current.x=e.clientX/window.innerWidth*2-1,v.current.y=1-e.clientY/window.innerHeight*2)};return window.addEventListener("pointermove",e,{passive:!0}),()=>window.removeEventListener("pointermove",e)},[]),(0,S.f)((t,i)=>{let r=f.current,l=e?Math.max(0,Math.min(1,e.current)):0,n=a?(0,eq.r)(Math.max(0,Math.min(1,a.current))):0,s=aT(),c=Math.min(aC.p,s),u=!!o;window.__camR3F=t.camera;let p=s>0&&(c>.02||l>5e-4)&&n<(u?.22:.4),m=!u&&p;if(r.gruppo.visible=m,eK.carr[0]=0,eK.carr[1]=0,eK.pioggia=0,eK.calma=+!!p,eK.omino.h=0,eK.titolo=0,eK.cta=0,eK.lastraRect.w=0,eK.corrente=u?p?-3:-1:p?-2:-1,!m){-99!==d.current&&r.marchi.forEach(e=>{e.mat.uniforms.uOp.value=0,e.piano.visible=!1}),d.current=-99,h.current=0;return}let v=t.size.width,x=Math.max(1,t.size.height),g=v/x,M=t.camera,b=Math.tan((M.fov||42)*Math.PI/360),y=(0,N.B)()/1e3;M.getWorldPosition(tp),M.getWorldQuaternion(tu),tc.compose(tp,tu,tm),r.gruppo.matrix.copy(tc),r.gruppo.matrixWorldNeedsUpdate=!0;let w=2*b*3.2,z=g<1?Math.min(1,g/.62):1;d.current<-50||Math.abs(l-d.current)>.4?d.current=l:d.current+=(l-d.current)*(0,q.w)(2.2*q.X,Math.min(i,.1)),Math.abs(l-d.current)>1e-4&&t.invalidate();let L=d.current,S=l>5e-4?1:eQ(c,.3,.5),A=l>5e-4?1:eQ(c,.3,.78),C=1-Math.pow(1-A,3),P=-1.1*(1-C)+.8*eQ(n,0,.24),R=1-eQ(n,.12,.24),E=eQ(A,0,.35)*S*R;r.mondo.position.set(0,P*w,-3.2),r.mondo.scale.setScalar(w*z*(.8+.2*C));let T=Math.min(i,.1),O=r.mondo.userData,I=(O.x??0)+(0-(O.x??0))*(0,q.w)(.06,T),F=(O.y??0)+(0-(O.y??0))*(0,q.w)(.06,T);O.x=I,O.y=F,Math.abs(0-I)+Math.abs(0-F)>1e-4&&t.invalidate(),r.mondo.rotation.set(I,F,u?0:.03*Math.sin(2*Math.PI*y/17));let k=r.matLuna.uniforms,D=x/(6.4*b);tf.set(0,0,-3.2).applyMatrix4(M.projectionMatrix),k.uProf.value=Math.min(.9999,tf.z),k.uSchermo.value.set(v,x),k.uDpr.value=t.viewport.dpr,k.uDisco.value.set(v/2,x/2-P*w*D,r.Rl*w*z*D),eK.disco.y=2*P,eK.disco.r=2*r.Rl*z,k.uPeso.value=E,k.uT.value=u?0:y,k.uGiro.value=.35+1.4*L+(u?0:.012*y)+F,k.uCrepa.value=eQ(L,.08,.85),k.uCorona.value=eQ(L,.85,.98);let $=r.F,_=e=>(1.6-e)*$.stira/$.ripeto,U=.5/z+$.largo+.05,j=Math.max(0,Math.min(1,(L+.07*(l>5e-4?1:eQ(A,.55,1)))/(.85+.07))),V=u?0:.05/$.ripeto*Math.sin(2*Math.PI*y/11),B=_(U)-1,W=B+(_(-U)-B)*j+V;r.uCoda.value=W,r.uTesta.value=W+1,r.davanti.tex.offset.x=-W;let G=eQ(j,.06,.22);r.matDavanti.opacity=E*G,r.matDietro.opacity=E*G,r.nastro.visible=j>0&&j<1&&E>.004,eK.intro=E<.3?0:L<.48?.5:1,r.nastro.rotation.set(.12,0,.3),r.nastro.position.y=-.08;let Z=Math.min(1,.38*g/z/$.raggio);r.nastro.scale.set(Z,1,Z);let H=window.__VENTITRE,X=eQ(L,.02,.1)*(1-eQ(n,.02,.15));if(X<.002&&H){M.getWorldPosition(tp);let e=[];for(let a=0;a<23;a++){let o=H[a];if(!o)continue;tf.setFromMatrixScale(o.matrixWorld);let t=tf.x;tf.setFromMatrixPosition(o.matrixWorld),e.push({i:a,g:t/Math.max(.01,tf.distanceTo(tp))})}23===e.length&&(e.sort((e,a)=>a.g-e.g),tn.forEach((a,o)=>{ao[a]=e[o].i}))}r.marchi.forEach((e,a)=>{let o=H?.[ao[a]];if(o&&e.su!==o){e.su?.remove(e.piano),o.geometry.computeBoundingBox();let a=o.geometry.boundingBox,t=Math.min(a.max.x-a.min.x,a.max.y-a.min.y);e.piano.scale.set(.84*t,.84*t,1),e.piano.position.set((a.max.x+a.min.x)/2,(a.max.y+a.min.y)/2,a.max.z+.0065),o.add(e.piano),e.su=o}e.mat.uniforms.uOp.value=X,e.mat.uniforms.uT.value=u?0:y,e.piano.visible=X>.002}),r.matC.uniforms.uMix.value=S,r.matC.uniforms.uOp.value=Math.max(E,+R),r.matC.uniforms.uDpr.value=t.viewport.dpr,r.matC.uniforms.uSposta.value=P*x*.35,r.matC.uniforms.uBordo.value=1.02;let Y=S*eQ(A,.85,1)*(1-eQ(n,.02,.12));h.current+=(Y-h.current)*(0,q.w)(2.2*q.X,T),Y<h.current&&(h.current=Y),Math.abs(Y-h.current)>.001&&t.invalidate(),eK.cta=h.current;let Q=t.viewport.dpr,J=Math.max(80,eK.fascia);r.uTaglio.value.set(-1e5,Math.min(100,Math.max(60,.09*x))*Q),eK.porta=-1+2*J/x,r.mondo.updateMatrix(),r.nastro.updateMatrix();let K=-1,ee=-1e9;if(r.nastro.visible&&E>.5)for(let e=0;e<o6;e++){let a=W+((o6-1-e)*$.periodo+($.periodo-$.lungo)+$.lungo/2)/$.ripeto;to($,a,0,tf).applyMatrix4(r.nastro.matrix),Math.abs(tf.y)>.24||tf.z<.55*$.raggio||tf.z>ee&&(ee=tf.z,K=e)}if(window.__marchi=ao,eK.corrente=K>=0?K:-2,K>=0){let e=W+((o6-1-K)*$.periodo+($.periodo-$.lungo))/$.ripeto,a=1e9,o=1e9,t=-1e9,i=-1e9;for(let l of[0,.5,1])for(let n of[-.5,.5]){to($,e+l*$.lungo/$.ripeto,n,tf).applyMatrix4(r.nastro.matrix).applyMatrix4(r.mondo.matrix);let s=Math.max(.2,-tf.z),c=(tf.x/(s*b*g)*.5+.5)*v,u=(.5-tf.y/(s*b)*.5)*x;a=Math.min(a,c),t=Math.max(t,c),o=Math.min(o,u),i=Math.max(i,u)}eK.lastraRect.x=a,eK.lastraRect.y=o,eK.lastraRect.w=t-a,eK.lastraRect.h=i-o}let ea=eK.portaBox,eo=!1;if(eK.cta>.001&&r.nastro.visible&&ea.w>0){let e=ea.x-6,a=ea.y-4,o=ea.w+12,t=ea.h+8,i=(e,a,o)=>{to($,e,a,tf).applyMatrix4(r.nastro.matrix).applyMatrix4(r.mondo.matrix);let t=-tf.z;if(t<.2){o[0]=0/0,o[1]=0/0;return}o[0]=(tf.x/(t*b*g)*.5+.5)*v,o[1]=(.5-tf.y/(t*b)*.5)*x},l=[0,0],n=[0,0],s=[0,0],c=[0,0],u=(e,a,o,t)=>(a[0]-e[0])*(t-e[1])-(a[1]-e[1])*(o-e[0]),p=(e,a)=>{let o=u(l,n,e,a),t=u(n,c,e,a),i=u(c,s,e,a),r=u(s,l,e,a);return o>=0&&t>=0&&i>=0&&r>=0||o<=0&&t<=0&&i<=0&&r<=0};i(W,-.5,l),i(W,.5,n);for(let r=1;r<=140&&!eo;r++){let u=W+r/140;i(u,-.5,s),i(u,.5,c);let m=Math.min(l[0],n[0],s[0],c[0]),f=Math.max(l[0],n[0],s[0],c[0]),d=Math.min(l[1],n[1],s[1],c[1]),h=Math.max(l[1],n[1],s[1],c[1]);if(Number.isFinite(m+f+d+h)&&f>=e&&m<=e+o&&h>=a&&d<=a+t)for(let i=0;i<=6&&!eo;i++)for(let r=0;r<=2&&!eo;r++)p(e+o*i/6,a+t*r/2)&&(eo=!0);l[0]=s[0],l[1]=s[1],n[0]=c[0],n[1]=c[1]}}let et=+!!eo;eK.sottoNastro+=(et-eK.sottoNastro)*(0,q.w)(2.2*q.X,T),Math.abs(et-eK.sottoNastro)>.001?t.invalidate():eK.sottoNastro=et,window.__SONDA_CUBI&&(window.__pianeta={pp:+l.toFixed(4),pg:+n.toFixed(3),c:+L.toFixed(3),b:+j.toFixed(3),corr:eK.corrente,titolo:+eK.titolo.toFixed(2),cta:+eK.cta.toFixed(2),quota:+P.toFixed(3),stacco:+S.toFixed(3),coda:+W.toFixed(5),caricate:r.caricate,ry:+F.toFixed(3),kc:+eK.kcVolto.toFixed(4),pon:+aC.p.toFixed(3)})}),(0,n.jsx)("primitive",{object:p.gruppo})}e.s(["a",0,o4,"m",0,td],7761);var tb=e.i(60602);let ty=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function tw(e,a){let o=(0,A.f)(e=>e.gl),t=(0,tb.f)(z.H5,ty(e)?Object.values(e):e);return(0,s.useLayoutEffect)(()=>{null==a||a(t)},[a]),(0,s.useEffect)(()=>{if("initTexture"in o){let e=[];Array.isArray(t)?e=t:t instanceof z.Sk?e=[t]:ty(t)&&(e=Object.values(t)),e.forEach(e=>{e instanceof z.Sk&&o.initTexture(e)})}},[o,t]),(0,s.useMemo)(()=>{if(!ty(e))return t;{let a={},o=0;for(let i in e)a[i]=t[o++];return a}},[e,t])}function tz(){let e=(0,A.f)(e=>e.gl),a=(0,A.f)(e=>e.scene),o=(0,A.f)(e=>e.camera);return(0,s.useEffect)(()=>{let t=window.setTimeout(()=>{let t=[];a.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{e.compile(a,o)}finally{for(let e of t)e.visible=!1}},0);return()=>window.clearTimeout(t)},[e,a,o]),null}tw.preload=e=>tb.f.preload(z.H5,e),tw.clear=e=>tb.f.clear(z.H5,e);var tL=e.i(94836);let tS=null,tA=new z.CQ(.235,.235),tq=new z.cE,tC=new z.cE,tP=new z.cE,tR=new z.Ox({...m.O});tR.onBeforeCompile=(0,m.S)();let tE=e=>{let a=Math.max(0,Math.min(1,e));return a*a*a*(a*(6*a-15)+10)},tT=e=>{let a=43758.5453*Math.sin(127.1*e+311.7);return a-Math.floor(a)};function tO({statoRef:e}){let a=(0,s.useMemo)(()=>Object.values(tL.a),[]),o=tw(a),t=(0,s.useMemo)(()=>{let e=new Map;return a.forEach((a,t)=>e.set(a,o[t])),e},[a,o]),i=(0,s.useRef)([]),r=(0,s.useRef)([]);return(0,S.f)(a=>{let o=e.current,l=a.viewport.height,n=a.viewport.width,s=(e,o,t)=>{let i=a.camera;t.set(2*e-1,-(2*o-1),.5).unproject(i),t.sub(i.position);let r=1e-6>Math.abs(t.z)?0:(.15-i.position.z)/t.z;return t.multiplyScalar(r).add(i.position)},c=s(o.x,o.y,tq),u=2*Math.abs(s(o.x,o.y-.5,tC).y-c.y),p=2*Math.abs(s(o.x+.5*o.largo,o.y,tP).x-c.x),m=Math.max(1,Math.min(tL.L,o.loghi.length)),f=Math.min(u*o.lato,p/(1.4*m-.4));for(let e=0;e<tL.L;e++){let a=i.current[e];if(!a)continue;let s=o.loghi[e],u=.45*tT(7.3*e+11),m=tE(Math.max(0,((s?o.forza:0)-u)/(1-u)));if(a.visible=m>.004&&!!s,!a.visible)continue;let d=t.get(s),h=r.current[e];h&&d&&h.map!==d&&(h.map=d,h.needsUpdate=!0);let v=tT(3.1*e+5)*Math.PI*2,x=(tT(5.9*e+3)-.5)*5,g=1.4*f,M=c.x-p/2+.9*f+e*g,b=c.y,y=M+Math.cos(v)*n*.9,w=b+Math.sin(v)*l*.9;a.position.set(y+(M-y)*m,w+(b-w)*m,.15),a.rotation.set((1-m)*x+.115*m,(1-m)*x*1.3+-.21*m,0);let z=f/.3;a.scale.setScalar(z*(.55+.45*m))}}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tz,{}),Array.from({length:tL.L},(e,a)=>(0,n.jsxs)("group",{ref:e=>{i.current[a]=e},visible:!1,children:[(0,n.jsx)("mesh",{geometry:tS??=(0,m.h)(.3,.3,.32,.013,8),material:tR}),(0,n.jsx)("mesh",{position:[0,0,.168],geometry:tA,renderOrder:1,children:(0,n.jsx)("meshBasicMaterial",{ref:e=>{r.current[a]=e},map:o[0],transparent:!0,depthWrite:!1})})]},a))]})}let tI=null,tF=new z.CQ(.78*.32,.78*.32),tN=e=>{let a=Math.max(0,Math.min(1,e));return a*a*a*(a*(6*a-15)+10)};function tk({i:e,src:a,progresso:o,mobile:t,reduce:i}){let r=(0,s.useRef)(null),l=tw(a),c=(0,s.useMemo)(()=>{let a;return{aIn:(a=e=>{let a=43758.5453*Math.sin(127.1*e+311.7);return a-Math.floor(a)})(3.1*e+5)*Math.PI*2,aOut:a(5.7*e+61)*Math.PI*2,dIn:2.6+1.4*a(e+17),dOut:3+1.6*a(e+29),rIn:[(a(e+3)-.5)*6,(a(e+7)-.5)*7,(a(e+11)-.5)*4],rOut:[(a(e+13)-.5)*7,(a(e+19)-.5)*8,(a(e+23)-.5)*5],tIn:.08*a(e+31),tOut:.22*a(e+37)}},[e]),u=(0,s.useRef)(l);(0,s.useLayoutEffect)(()=>{u.current=l},[l]),(0,s.useEffect)(()=>{let e=u.current;e&&(e.colorSpace=z.nj,e.anisotropy=8,e.needsUpdate=!0)},[l]);let p=(0,s.useMemo)(()=>{let e=new z.Ox({...m.O,emissiveIntensity:0});return e.onBeforeCompile=(0,m.S)(),e},[]);(0,s.useEffect)(()=>()=>{p.dispose()},[p]);let f=(0,s.useMemo)(()=>new z.p$({map:l,transparent:!0,depthWrite:!1}),[l]);return(0,s.useEffect)(()=>()=>{f.dispose()},[f]),(0,S.f)(a=>{let l=r.current;if(!l)return;let n=o.current,s=a.clock.elapsedTime,u=a.camera,p=u.position.z*Math.tan(u.fov*Math.PI/360),m=p*(a.size.width/Math.max(1,a.size.height)),f=t?2:5,d=e%f,h=Math.floor(e/f),v=Math.ceil(eX.length/f),x=((d+.5)/f-.5)*2*m*(t?.9:.78),g=((v-1-h+.5)/v-.5)*2*p*(t?.72:.62)-(t?.15*p:0),M=+!i,b=.06*Math.sin(.27*s+2.13*e)*M,y=.085*Math.sin(.33*s+1.31*e)*M,w=.05*Math.sin(.21*s+.87*e)*M,z=tN((n-c.tIn)/.14),L=tN((n-.7-c.tOut)/.26),S=(1-z)*Math.cos(c.aIn)*c.dIn*m+L*Math.cos(c.aOut)*c.dOut*m,A=(1-z)*Math.sin(c.aIn)*c.dIn*p+L*Math.sin(c.aOut)*c.dOut*p;l.position.set(x+b+S,g+y+A,w+3*!!t),l.rotation.set(c.rIn[0]*(1-z)+c.rOut[0]*L+(i?0:.09*Math.sin(.7*s+.8*e)),c.rIn[1]*(1-z)+c.rOut[1]*L+(i?0:.14*Math.cos(.9*s+1.1*e)),c.rIn[2]*(1-z)+c.rOut[2]*L),l.scale.setScalar(Math.max(.001,1-.45*Math.min(1,1-z+L))),l.visible=n>5e-4&&n<.9995}),(0,n.jsxs)("group",{ref:r,visible:!1,children:[(0,n.jsx)("mesh",{geometry:tI??=(0,m.h)(.32,.32,.36,.013,10),material:p}),(0,n.jsx)("mesh",{position:[0,0,.1865],geometry:tF,material:f,renderOrder:1})]})}function tD({progresso:e,mobile:a,reduce:o}){return o?null:(0,n.jsxs)("group",{children:[(0,n.jsx)(tz,{}),eX.map((t,i)=>(0,n.jsx)(tk,{i:i,src:t.src,progresso:e,mobile:a,reduce:o},t.src))]})}e.s(["f",0,function({storyline:e,reduce:a,mobile:o,intro:t,gioco:i,loghi:r,prove:l,quanteProve:f,giornale:d,stack:h,dopoIntro:v,cavalca:x,nastro:g,rottura:M}){let b="low"===(0,a8.f)(),y=(0,ep.a)(b,o),w=(0,ep.U)(),L=b||y*y*w>7e6,[S,A]=(0,s.useState)(!1),q=(0,s.useRef)(null),P=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=0,a=()=>{(0,m.X)()?(0,s.startTransition)(()=>A(!0)):e=requestAnimationFrame(a)};return e=requestAnimationFrame(a),()=>cancelAnimationFrame(e)},[]);let R=(0,s.useMemo)(()=>({montato:()=>!!q.current,accendi:()=>{P.current=!0,q.current&&(q.current.visible=!0)},gruppo:()=>q.current}),[]),E=(0,s.useRef)(null);return((0,s.useLayoutEffect)(()=>{let e=E.current;if(!e)return;e.style.visibility="hidden";let a=window.setTimeout(()=>{e.style.visibility=""},6e3);return()=>window.clearTimeout(a)},[]),(0,u.f)())?(0,n.jsx)("div",{ref:E,"aria-hidden":!0,style:{position:"fixed",top:0,left:0,right:0,height:"100lvh",zIndex:1,pointerEvents:"none"},children:(0,n.jsxs)(c.f,{frameloop:"demand",dpr:y,camera:{position:[0,0,4.1],fov:42},gl:{antialias:(0,p.D)(),alpha:!1,powerPreference:"high-performance"},style:{background:`var(--tela-fondo, ${C.t.fondo})`},onCreated:({gl:e,scene:a,camera:o})=>{performance.mark("tela:creata"),e.capabilities.getMaxAnisotropy(),window.__TELA__=e,window.__SCENA__={scene:a,camera:o},e.debug.checkShaderErrors=!1;let t=e.getClearColor(new z.Es),i=e.getClearAlpha();e.setClearColor(C.t.fondo,1),e.clear(),e.setClearColor(t,i)},children:[(0,n.jsx)(ep._,{storyline:e,intro:t,lowPerf:L,reduce:!!a}),(0,n.jsx)(m.j,{carta:C.t.fondo,resto:R}),(0,n.jsx)(ep.T,{velo:E}),(0,n.jsx)(m.W,{quando:!!v}),(0,n.jsx)(a7.b,{storyline:e,reduce:a,leggero:b}),(0,n.jsx)(oa,{reduce:!!a}),(0,n.jsx)(a2,{storyline:e,reduce:a,mobile:o,intro:t,gioco:i,prove:l,quanteProve:f,giornale:d,cavalca:x,rottura:M}),S&&(0,n.jsxs)("group",{ref:e=>{q.current=e,e&&(e.visible=P.current)},children:[(0,n.jsx)(oo.f,{storyline:e,reduce:a,rottura:M,mobile:o}),(0,n.jsx)(oM,{storyline:e,reduce:a,mobile:o}),(0,n.jsx)(oq,{storyline:e,reduce:a,mobile:o}),(0,n.jsx)(td,{prove:l,giornale:d,quante:f,reduce:!!a,mobile:o}),(0,n.jsx)(oF,{storyline:e,mobile:o}),(0,n.jsx)(oY,{storyline:e,reduce:a,mobile:o,giornale:d}),(0,n.jsx)(o2,{reduce:!!a,mobile:o,giornale:d}),(0,n.jsx)(ow,{storyline:e,reduce:a,mobile:o}),(0,n.jsx)(eu.f,{storyline:e,reduce:a,intro:t,verticale:o}),g&&(0,n.jsx)(ec,{quadro:g,storyline:e,reduce:a})]}),v&&r&&(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(tD,{progresso:r,mobile:o,reduce:a})}),v&&h&&!o&&(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(tO,{statoRef:h})}),(0,n.jsx)(ep.Z,{}),(0,n.jsx)("ambientLight",{intensity:.16})]})}):null}],89705)}]);