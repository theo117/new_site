(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71931,e=>{var t=e.i(99121),a=e.i(68194);let o=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float rumore(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
`,n=`
      varying vec2 vUv;
      uniform float uPeso;
      uniform float uT;
      uniform float uLuce;
      ${o}
      ${a.f}
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
          polC += g * v * mix(${(0,t.s)("avorio",.603)}, ${(0,t.s)("caldoChiaro",1.04)}, acceso);
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
          fin = mix(${(0,t.s)("pietra",.468)}, ${(0,t.s)("avorio",.821)}, clamp(bordoR * uLuce * 1.4, 0.0, 1.0));
          af = (dentroR * 0.4 + bordoR * uLuce * 0.5) * sfuma;
        }
        gl_FragColor = vec4(fin, af * uPeso);
        if (gl_FragColor.a < 0.004) discard;
      }`;e.s(["f",0,n])},72238,e=>{var t=e.i(71645);let a=0;e.s(["l",0,function(){let e=performance.now();return a||(a=e),e-a>(window.matchMedia("(pointer: coarse)").matches?4e3:1e3)},"z",0,function(e=1500,a=!1){let[o,n]=(0,t.useState)(()=>!!window.__primoDisegno);return(0,t.useEffect)(()=>{if(o)return;let t=window,i=0,r=0,s=0,l=0,c=null,u=()=>{t.__primoDisegno=!0,n(!0)},p=!/^\/(?:[a-z]{2}\/)?(?:progetti|work)\/?$/.test(location.pathname);if(a||p||t.__primoDisegno||null!=document.documentElement.dataset.entrata)p&&(t.__primoDisegno=!0),i=requestAnimationFrame(()=>{r=requestAnimationFrame(u)});else{let t=()=>{window.requestIdleCallback?s=window.requestIdleCallback(u,{timeout:e}):l=window.setTimeout(u,300)};c=t,"complete"===document.readyState?t():window.addEventListener("load",t,{once:!0})}return()=>{cancelAnimationFrame(i),cancelAnimationFrame(r),window.clearTimeout(l),c&&window.removeEventListener("load",c),s&&window.cancelIdleCallback(s)}},[o,e,a]),o}])},47970,e=>{let t={n:0,ridotto:!1,mobile:!1,s:0,bersaglio:0,sopra:-1,sx:0,sy:0,px:0,py:0,mouse:!1,gesto:0,entra:null,aperto:-1,grande:!1,cambioFine:0,sveglia:()=>{},suAperto:e=>{},suGrande:e=>{},suArrivo:()=>{},suScena:e=>{},suSopra:e=>{},dentro:e=>{}},a=(e,t)=>t?(Math.round(e)%t+t)%t:0;function o(){t.gesto=performance.now(),t.sveglia()}function n(e){let n=t.n;if(!n)return;let i=((e-a(t.bersaglio,n))%n+n)%n;i>n/2&&(i-=n),t.bersaglio=Math.round(t.bersaglio)+i,o()}e.s(["p",0,1100,"m",0,1440,"k",0,1300,"Y",0,12,"D",0,1800,"j",0,function(e){!(t.aperto>=0)&&t.n&&(t.aperto=(e%t.n+t.n)%t.n,t.sopra=-1,t.suSopra(-1),t.suAperto(t.aperto),o())},"b",0,function(){t.aperto<0||(t.grande&&(t.grande=!1,t.suGrande(!1)),t.aperto=-1,t.suAperto(-1),o())},"h",0,function(){return t.bersaglio=Math.round(t.s),a(t.s,t.n)},"Z",0,a,"y",0,function(e=!t.grande){t.aperto<0||t.grande===e||(t.grande=e,t.suGrande(e),o())},"v",0,function(e){if(t.aperto<0||!t.n)return;let a=(e%t.n+t.n)%t.n;a!==t.aperto&&(t.grande&&(t.grande=!1,t.suGrande(!1)),t.aperto=a,n(a),t.cambioFine=performance.now()+1800*!t.ridotto,o())},"r",0,t,"E",0,o,"F",0,n])},70634,e=>{let t=e.i(99121).d;e.s(["f",0,t])},19948,e=>{let t={x:0,y:0,w:0,h:0},a=new Set;function o(e,o,n,i){let r=Math.abs(e-t.x)>.5||Math.abs(o-t.y)>.5||Math.abs(n-t.w)>.5||Math.abs(i-t.h)>.5;t.x=e,t.y=o,t.w=n,t.h=i,r&&a.forEach(e=>e())}window.__scatola=t,e.s(["B",0,function(e){return a.add(e),()=>{a.delete(e)}},"m",0,(e,a,o=0)=>t.w>0&&e>=t.x-o&&e<=t.x+t.w+o&&a>=t.y-o&&a<=t.y+t.h+o,"Y",0,t,"C",0,o,"k",0,()=>o(0,0,0,0)])},18958,60830,59176,80248,51571,87022,33887,70596,25791,96173,86427,37806,47414,87652,e=>{let t;var a=e.i(71645);let o=e=>e;e.s(["f",0,o],60830);let n={};e.s(["f",0,n],59176);let i=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],r={value:null,addProjectionMetrics:null};function s(e,t){let a=!1,o=!0,s={delta:0,timestamp:0,isProcessing:!1},l=()=>a=!0,c=i.reduce((e,a)=>(e[a]=function(e,t){let a=new Set,o=new Set,n=!1,i=!1,s=new WeakSet,l={delta:0,timestamp:0,isProcessing:!1},c=0;function u(t){s.has(t)&&(p.schedule(t),e()),c++,t(l)}let p={schedule:(e,t=!1,i=!1)=>{let r=i&&n?a:o;return t&&s.add(e),r.has(e)||r.add(e),e},cancel:e=>{o.delete(e),s.delete(e)},process:e=>{if(l=e,n){i=!0;return}n=!0,[a,o]=[o,a],a.forEach(u),t&&r.value&&r.value.frameloop[t].push(c),c=0,a.clear(),n=!1,i&&(i=!1,p.process(e))}};return p}(l,t?a:void 0),e),{}),{setup:u,read:p,resolveKeyframes:f,preUpdate:d,update:m,preRender:h,render:v,postRender:g}=c,y=()=>{let i=n.useManualTiming?s.timestamp:performance.now();a=!1,n.useManualTiming||(s.delta=o?1e3/60:Math.max(Math.min(i-s.timestamp,40),1)),s.timestamp=i,s.isProcessing=!0,u.process(s),p.process(s),f.process(s),d.process(s),m.process(s),h.process(s),v.process(s),g.process(s),s.isProcessing=!1,a&&t&&(o=!1,e(y))};return{schedule:i.reduce((t,n)=>{let i=c[n];return t[n]=(t,n=!1,r=!1)=>(!a&&(a=!0,o=!0,s.isProcessing||e(y)),i.schedule(t,n,r)),t},{}),cancel:e=>{for(let t=0;t<i.length;t++)c[i[t]].cancel(e)},state:s,steps:c}}e.s(["f",0,r],80248),e.s(["f",0,s],51571);let{schedule:l,cancel:c,state:u,steps:p}=s("u">typeof requestAnimationFrame?requestAnimationFrame:o,!0);function f(e,t){-1===e.indexOf(t)&&e.push(t)}function d(e,t){let a=e.indexOf(t);a>-1&&e.splice(a,1)}e.s(["Y",0,c,"y",0,l,"I",0,u,"q",0,p],87022),e.s(["I",0,f,"i",0,d],33887);class m{constructor(){this.subscriptions=[]}add(e){return f(this.subscriptions,e),()=>d(this.subscriptions,e)}notify(e,t,a){let o=this.subscriptions.length;if(o)if(1===o)this.subscriptions[0](e,t,a);else for(let n=0;n<o;n++){let o=this.subscriptions[n];o&&o(e,t,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function h(e,t){return t?1e3/t*e:0}function v(){t=void 0}e.s(["f",0,m],70596),e.s(["f",0,h],25791);let g={now:()=>(void 0===t&&g.set(u.isProcessing||n.useManualTiming?u.timestamp:performance.now()),t),set:e=>{t=e,queueMicrotask(v)}};e.s(["f",0,g],96173);let y={current:void 0};class b{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=g.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=g.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new m);let a=this.events[e].add(t);return"change"===e?()=>{a(),l.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,a){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return y.current&&y.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=g.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return h(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function x(e,t){return new b(e,t)}e.s(["I",0,y,"o",0,x],86427);let w=(0,a.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function A(e){let t=(0,a.useRef)(null);return null===t.current&&(t.current=e()),t.current}function M(e){let t=A(()=>x(e)),{isStatic:o}=(0,a.useContext)(w);if(o){let[,o]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",o),[])}return t}function S(e,t){return 1-Math.pow(1-e,60*t)}e.s(["f",0,w],37806),e.s(["f",0,A],47414),e.s(["f",0,M],87652);let C={fino:0},E=()=>performance.now()<C.fino,L=e=>Math.abs(e)>.25&&performance.now()<C.fino+3e3;e.s(["X",0,.032,"w",0,S,"U",0,function(){C.fino=performance.now()+340},"Y",0,function(e){let t=M(e.get());return(0,a.useEffect)(()=>{let a=!1,o=({delta:n})=>{let i=e.get(),r=t.get(),s=i-r;if(0===s){c(o),a=!1;return}if(E()||L(s))return void t.jump(i);if(1e-4>Math.abs(s)){t.set(i),c(o),a=!1;return}t.set(r+s*S(.032,Math.min(.1,n/1e3)))},n=()=>{a||(a=!0,l.update(o,!0))},i=e.on("change",n);return n(),()=>{i(),c(o)}},[e,t]),t},"I",0,function(e){let t=(0,a.useRef)({mira:0,dove:0,ultimo:0,raf:0,su:e});return(0,a.useEffect)(()=>{t.current.su=e},[e]),(0,a.useEffect)(()=>{let e=t.current;return()=>{e.raf&&cancelAnimationFrame(e.raf)}},[]),(0,a.useCallback)((e,a=!1)=>{let o=t.current;if(o.mira=e,a){o.dove=e,o.su(e);return}if(o.raf)return;o.ultimo=performance.now();let n=e=>{let t=Math.min(.1,(e-o.ultimo)/1e3);if(o.ultimo=e,E()||L(o.mira-o.dove)){o.dove=o.mira,o.su(o.dove),o.raf=0;return}let a=o.mira-o.dove;if(1e-4>Math.abs(a)){o.dove=o.mira,o.su(o.dove),o.raf=0;return}o.dove+=a*S(.032,t),o.su(o.dove),o.raf=requestAnimationFrame(n)};o.raf=requestAnimationFrame(n)},[])}],18958)},42597,e=>{var t=e.i(71645);let a=e=>Math.round(.8*e*100)/100,o={onda:0,numeroVia:0,sogliaLuce:.45,marchio:a(2),slogan:a(10),menu:a(12),nome:a(13),contatti:a(15),legenda:a(16),cookie:a(18)},n={alone:[0,a(4)],piana:[a(3),a(6)],pianetaSale:[a(5),a(10)],pianeta:[a(5),a(9)],stelle:[a(8),a(12)],camera:a(10)},i={t0:-1/0,fattore:1,svelta:!1,ridotta:!1,giro:0,tSvelta:-1},r=new Set,s=()=>{for(let e of r)e()};function l(e){return -1/0===i.t0?1/0:i.svelta||i.ridotta?0:i.t0+e*i.fattore*1e3-performance.now()}function c(e,t){let a=0,o=!1,n=()=>{if(o)return;window.clearTimeout(a);let i=l(e);if(i<=0){o=!0,r.delete(n),t();return}1/0!==i&&(a=window.setTimeout(n,i))};return r.add(n),n(),()=>{o=!0,r.delete(n),window.clearTimeout(a)}}let u=!1,p=new Set;function f(){if(!u)for(let e of(u=!0,[...p]))e()}function d(e){return u?(e(),()=>{}):(p.add(e),()=>{p.delete(e)})}e.s(["G",0,n,"x",0,o,"g",0,1,"O",0,10,"J",0,5.74,"F",0,d,"a",0,c,"t",0,function(e,t){-1/0===i.t0&&(i.t0=performance.now(),i.fattore=e?.32:1,i.ridotta=t,s())},"e",0,l,"w",0,()=>u,"Z",0,f,"b",0,function(){-1/0===i.t0&&(i.t0=performance.now()-1e6),i.svelta=!0,s()},"C",0,()=>i.fattore,"k",0,()=>i.giro,"r",0,()=>i.svelta,"c",0,function(){-1/0===i.t0||i.svelta||(i.svelta=!0,i.tSvelta=performance.now(),s())},"L",0,function(){if(-1/0===i.t0)return -1;let e=performance.now();return((i.svelta&&i.tSvelta>0?i.tSvelta:e)-i.t0+(i.svelta&&i.tSvelta>0?(e-i.tSvelta)*10:0))/1e3/i.fattore},"y",0,function(e){let[a,n]=(0,t.useState)(!e);return(0,t.useEffect)(()=>{if(!e)return void f();let t=d(()=>n(!0)),a=u?()=>{}:c(o.marchio+5.74+1.5*.8,f);return()=>{t(),a()}},[e]),a},"H",0,function(e){let[a,o]=(0,t.useState)(()=>0>=l(e)),[n,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=0,a=()=>{window.clearTimeout(t);let n=l(e);if(n<=0){s(i.svelta),o(!0);return}o(!1),1/0!==n&&(t=window.setTimeout(a,n))};return r.add(a),a(),()=>{r.delete(a),window.clearTimeout(t)}},[e]),{via:a,svelta:n}}])},98076,e=>{var t=e.i(71645),a=e.i(25234),o=e.i(28600),n=e.i(11007),i=e.i(68366);function r(e=4e3,s){let l=(0,o.f)(e=>e.gl),c=(0,o.f)(e=>e.scene),u=(0,o.f)(e=>e.camera),p=(0,o.f)(e=>e.invalidate),f=(0,t.useRef)(!1),d=(0,t.useRef)(!1),m=(0,t.useRef)({lenti:0,prossimo:0}),h=(0,t.useRef)(s);(0,t.useEffect)(()=>{h.current=s}),(0,t.useEffect)(()=>{let t=(0,n.C)(e),a=!0,o=()=>{},r=()=>{a&&!f.current&&(f.current=!0,p())},s=window.setTimeout(r,e),d=requestAnimationFrame(()=>requestAnimationFrame(async()=>{performance.mark("tela:compila");let e=(0,i.M)(l,c,u);if(o=e.libera,await Promise.race([Promise.resolve(e.lavoro).catch(()=>void 0),new Promise(e=>setTimeout(e,2500))]),performance.mark("tela:compilata"),a){try{c.traverse(e=>{let t=e.material;for(let e of Array.isArray(t)?t:t?[t]:[])for(let t of Object.values(e))t&&t.isTexture&&t.image&&l.initTexture(t)})}catch{}performance.mark("tela:texture"),r(),t(),window.dispatchEvent(new Event("tela-compilata"))}}));return()=>{a=!1,cancelAnimationFrame(d),clearTimeout(s),t(),o()}},[l,c,u,e,p]),(0,a.f)(e=>{if(!f.current||e.gl.getContext().isContextLost())return;let t=performance.now();if(t<m.current.prossimo)return;try{e.gl.render(e.scene,e.camera)}catch{return}let a=performance.now()-t,o=m.current;if(o.lenti=a>100?o.lenti+1:0,o.lenti>=2&&(o.prossimo=t+5*a),!d.current){d.current=!0,performance.mark("tela:disegnata");let e=h.current;e&&requestAnimationFrame(()=>e())}},1)}e.s(["o",0,function({tetto:e,pronto:t}){return r(e,t),null},"G",0,r])},2546,e=>{let t={luce:0,mid:e.i(99121).f[0][1]},a=/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,/\s]+([\d.%]+))?\s*\)/;e.s(["o",0,t,"H",0,function(e,o){let n,i=t.luce;try{n=document.elementsFromPoint(e,o)}catch{return i}for(let e=n.length-1;e>=0;e--){let t=getComputedStyle(n[e]),o=a.exec(t.backgroundColor);if(!o)continue;let r=(void 0===o[4]?1:o[4].endsWith("%")?parseFloat(o[4])/100:parseFloat(o[4]))*(parseFloat(t.opacity)||1);r>.002&&(i=i*(1-r)+(.2126*o[1]+.7152*o[2]+.0722*o[3])/255*r)}return i}])},96756,e=>{e.s(["f",0,function(e){let t=document.body;e!==(null!=t.dataset.mano)&&(e?(t.dataset.mano="",t.style.cursor="pointer"):(delete t.dataset.mano,t.style.cursor=""))}])},70599,e=>{e.s(["i",0,[[-3,4],[-3,3],[-3,2],[-3,1],[-3,0],[-3,-1],[-3,-2],[-2,-2],[-1,-2],[0,-2],[1,-2],[3,-4],[3,-3],[3,-2],[3,-1],[3,0],[3,1],[3,2],[2,2],[1,2],[0,2],[-1,2],[0,0]],"R",0,"M0 0L1 0L1 6.08L5 6.08L5 7L0 7ZM7 9L6 9L6 2.92L2 2.92L2 2L7 2ZM2.96 3.96L4.04 3.96L4.04 5.04L2.96 5.04Z","C",0,"0 0 7 9"])},59200,e=>{var t=e.i(71645),a=e.i(28600),o=e.i(95399);e.s(["r",0,function(){let e=(0,a.f)(e=>e.gl),n=(0,a.f)(e=>e.invalidate);return(0,t.useLayoutEffect)(()=>{let t;return t=e.render,e.render=function(a,i){return(0,o.C)()&&null===e.getRenderTarget()?void n():t.call(this,a,i)},()=>{e.render=t}},[e,n]),null},"f",0,function(){let e=(0,a.f)(e=>e.clock);return(0,t.useLayoutEffect)(()=>(0,o.m)(e),[e]),null},"m",0,function(e){e<0?(0,o.Q)(e):e&&window.clearTimeout(e)},"o",0,function(){let e=(0,a.f)(e=>e.advance),n=(0,a.f)(e=>e.invalidate),i=(0,t.useRef)(!0);return(0,t.useEffect)(()=>(i.current=!0,()=>{i.current=!1}),[]),(0,t.useCallback)((t,a)=>{if((0,o.R)()>2500&&!(0,o.g)()){t.current=(0,o.k)(a=>{t.current=0,i.current&&e(a)});return}t.current=window.setTimeout(()=>{t.current=0,n()},a)},[e,n])}])},95682,e=>{var t=e.i(90072);let a=null,o="",n=null,i="",r=new t.cE,s=new t.VQ,l=0,c=0;function u(e){return c!==e&&(l=Math.max(48,3*(parseFloat(getComputedStyle(document.documentElement).fontSize)||16)),c=e),l}let p=null,f=-1e9;function d(e,t,n,i,r,s){if(!a)return;let l=u(i);if(n=Math.max(l,Math.min(r-l,n)),s)e=Math.max(e,8),t=Math.min(t,i-8);else{let a=function(){let e=performance.now();if(e-f<500)return p;f=e;let t=document.querySelector(".voce-audio"),a=t?.getBoundingClientRect();return p=t&&a&&a.width>0&&"hidden"!==getComputedStyle(t).visibility&&"none"!==getComputedStyle(t).pointerEvents?{x:a.left,y0:a.top,y1:a.bottom}:null}(),o=a&&a.x<i&&n+l/2>a.y0&&n-l/2<a.y1?a.x:i;e=Math.max(e,l+8),t=Math.min(t,o-l-8)}let c=`${Math.round(e)}|${Math.round(t)}|${Math.round(n)}|${+!!s}`;c!==o&&(o=c,a.style.setProperty("--fr-x0",`${Math.round(e)}px`),a.style.setProperty("--fr-x1",`${Math.round(t)}px`),a.style.setProperty("--fr-y",`${Math.round(n)}px`),a.dataset.fr=s?"sotto":"lati")}e.s(["X",0,function(e){a=e,o=""},"u",0,function(e){n=e,i=""},"k",0,function(e,t,o,l){if(!a||!e)return;let c=function(e,t,a,o){if(s.setFromObject(e),s.isEmpty())return null;let n=1/0,i=-1/0,l=1/0,c=-1/0;for(let e=0;e<8;e++){r.set(1&e?s.max.x:s.min.x,2&e?s.max.y:s.min.y,4&e?s.max.z:s.min.z).project(t);let u=(.5*r.x+.5)*a,p=(-(.5*r.y)+.5)*o;n=Math.min(n,u),i=Math.max(i,u),l=Math.min(l,p),c=Math.max(c,p)}return{x0:n,x1:i,y0:l,y1:c}}(e,t,o,l);if(c)if(o/l<.9){let e=u(o);d(c.x0,c.x1,c.y1+12+e/2,o,l,!0);let t=`${Math.round(c.y1+12+e+24)}px`;n&&t!==i&&(i=t,n.style.setProperty("--fr-sotto",t))}else d(c.x0,c.x1,(c.y0+c.y1)/2,o,l,!1)},"g",0,function(e,o,n,i,s){if(!a)return;u(i),r.copy(e).project(n);let c=(.5*r.x+.5)*i,p=(-(.5*r.y)+.5)*s,f=new t.cE().setFromMatrixColumn(n.matrixWorld,0).multiplyScalar(o);r.copy(e).add(f).project(n);let m=Math.abs((.5*r.x+.5)*i-c);if(i/s<.9)return void d(i-12-2*l-8,i-12,s-Math.max(28,parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sab"))||0)-22,i,s,!0);let h=Math.min((Math.max(0,p-m)+Math.min(s,p+m))/2,s-1.5*l),v=Math.sqrt(Math.max(0,m*m-(h-p)*(h-p)));d(c-v,c+v,h,i,s,!1)}])},33563,e=>{let t="url(#vira-foto)",a=[1.035,1,.93],o=[.2126,.7152,.0722],n=[1,.994,.984],i=e=>e.toFixed(4),r=`
vec3 viraFoto(vec3 c, vec2 px) {
  float m = clamp(${i(2)} * (2.0 * c.b + 0.5 * c.g - 3.0 * c.r), 0.0, 1.0) * ${i(.9)};
  float L = dot(c, vec3(${o.map(i).join(", ")}));
  vec3 w = clamp(L * vec3(${a.map(i).join(", ")}), 0.0, 1.0);
  c = mix(c, w, m);
  vec3 alto = vec3(${n.map(i).join(", ")});
  vec3 s = step(0.5, c);
  c = mix(c, 0.5 + (c - 0.5) * 2.0 * (alto - 0.5), s);
  float d = fract(sin(dot(px, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  return c + d / 255.0;
}
`;[0,1,2].map(e=>`${o.map(t=>i(t*a[e])).join(" ")} 0 0`).join(" "),i(-6),i(1),i(4),i(.9),n.map(e=>`0 0.5 ${i(e)}`),e.s(["o",0,t,"x",0,r,"e",0,function(){if("u"<typeof navigator)return t;let e=navigator.userAgent;return/AppleWebKit/.test(e)&&!/Chrome|Chromium|CriOS|Edg|Android/.test(e)?"none":t}])}])})();