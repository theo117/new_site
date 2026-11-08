/* Browser integration checks. Node 22+ and Chrome; no npm dependencies.
   Start python3 -m http.server 8017, then node tools/check-cinematic.cjs.
   Form delivery is mocked. No live enquiry is sent. */
const {spawn}=require('node:child_process');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const assert=require('node:assert/strict');
const delay=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const profile=fs.mkdtempSync(path.join(os.tmpdir(),'teodor-qa-'));
 const chrome=spawn(process.env.CHROME_BIN||'/opt/google/chrome/chrome',['--headless','--no-sandbox','--disable-gpu','--remote-debugging-port=19346','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
 let ws;
 try{
  let tab;for(let i=0;i<50;i++){try{tab=(await(await fetch('http://127.0.0.1:19346/json')).json()).find(t=>t.type==='page');break;}catch{await delay(100);}}
  assert(tab,'Chrome debugging endpoint');ws=new WebSocket(tab.webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
  let id=0;const pending=new Map(),errors=[];
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){pending.get(m.id)?.(m);pending.delete(m.id);}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text);};
  const c=(method,params={})=>new Promise(r=>{pending.set(++id,r);ws.send(JSON.stringify({id,method,params}));});
  const ev=async expression=>{const r=await c('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.result.exceptionDetails)throw Error(JSON.stringify(r.result.exceptionDetails));return r.result.result.value;};
  const check=async(name,expr)=>{assert(await ev(expr),name);console.log('PASS',name);};
  const shot=async name=>fs.writeFileSync(path.join(os.tmpdir(),'teodor-'+name+'.png'),Buffer.from((await c('Page.captureScreenshot')).result.data,'base64'));
  await c('Runtime.enable');await c('Log.enable');ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')errors.push(m.params.entry.text);});await c('Network.enable');await c('Network.setCacheDisabled',{cacheDisabled:true});await c('Page.enable');
  await c('Emulation.setDeviceMetricsOverride',{width:1440,height:960,deviceScaleFactor:1,mobile:false});
  await c('Page.navigate',{url:process.env.PREVIEW_URL||'http://127.0.0.1:8017/'});await delay(1700);for(let i=0;i<50;i++){if(await ev('!!window.TeodorApp&&!!window.TeodorMotion'))break;await delay(100);}await ev('document.fonts.ready');console.log('initial',await ev('({url:location.href,ready:document.readyState,app:!!window.TeodorApp,motion:!!window.TeodorMotion,title:document.title})'),errors);
  await check('business and motion APIs initialise',`!!window.TeodorApp&&!!window.TeodorMotion`);
  await check('original runtime removed',`!document.querySelector('iframe')&&!/(Lorenzo|Lottici|Roxam|Parma)/.test(document.body.innerText)`);
  await check('desktop has no overflow',`document.documentElement.scrollWidth<=innerWidth`);await shot('desktop');
  await ev(`window.TeodorMotion.navigate('services')`);await check('navigation settles and updates history',`location.hash==='#services'&&document.activeElement.tagName==='H2'&&document.querySelector('.transition-curtain').getBoundingClientRect().top>=innerHeight`);await shot('services');
  await ev(`Promise.all([TeodorMotion.navigate('about'),TeodorMotion.navigate('contact'),TeodorMotion.navigate('work')])`);
  await check('rapid navigation resolves latest request',`location.hash==='#work'&&document.querySelector('#work').getBoundingClientRect().top>=0&&getComputedStyle(document.querySelector('#about')).opacity==='1'`);
  await ev(`TeodorMotion.navigate('work')`);await shot('gallery');
  await ev(`document.querySelector('[data-gallery-step="1"]').click()`);await delay(1100);
  await check('gallery selection updates accessible state',`document.querySelector('[data-select-project="1"]').getAttribute('aria-pressed')==='true'&&document.querySelector('[data-gallery-piece="wedding"]').dataset.position==='active'`);
  await ev(`document.querySelector('.gallery-space').focus()`);await c('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight'});await c('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowRight',code:'ArrowRight'});await delay(1100);
  await check('gallery keyboard navigation',`document.querySelector('[data-select-project="2"]').getAttribute('aria-pressed')==='true'`);
  for(const key of ['fintech','wedding','ferrari']){
   await ev(`TeodorMotion.openProject('${key}')`);await check(key+' project opens',`document.querySelector('#project-dialog').open&&document.querySelector('#project-title').textContent===TeodorApp.projects['${key}'].title&&location.hash==='#work/${key}'`);
  }
  await shot('detail');
  await ev(`document.querySelector('[data-detail-step="1"]').click()`);await delay(1700);await check('detail next control',`document.querySelector('#project-title').textContent===TeodorApp.projects.fintech.title&&location.hash==='#work/fintech'`);
  await ev(`TeodorMotion.closeProject()`);await check('close restores scroll and focus',`!document.querySelector('#project-dialog').open&&document.body.style.overflow===''&&location.hash==='#work'&&document.activeElement.matches('[data-project]')`);
  await ev(`TeodorMotion.openProject('wedding')`);await ev(`history.back()`);await delay(1600);await check('browser Back closes details',`!document.querySelector('#project-dialog').open`);await ev(`history.forward()`);await delay(2900);await check('browser Forward restores project',`document.querySelector('#project-dialog').open&&location.hash==='#work/wedding'`);
  await c('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});await c('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape'});await delay(700);await check('Escape closes details',`!document.querySelector('#project-dialog').open`);
  await ev(`TeodorMotion.navigate('packages')`);await shot('packages');
  await ev(`document.querySelector('[data-choice="app"]').click()`);await check('service finder',`document.querySelector('#recommendation-title').textContent==='Executive'`);
  await ev(`document.querySelector('[data-package="Monthly plan"]').click()`);await delay(1800);await check('monthly plan integration',`document.querySelector('#arrangement').value==='monthly-plan'&&document.querySelector('#qualification-form').value.startsWith('https://docs.google.com/forms/')`);
  await ev(`document.querySelector('#open-maker').click();document.querySelector('#maker-business').value='QA business';document.querySelector('#maker-business').dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('#use-concept').click()`);await delay(1700);await check('concept maker attaches brief',`document.querySelector('#enquiry-concept').value.includes('QA business')`);
  await ev(`document.querySelector('#full-name').value='QA Preview';document.querySelector('#email').value='qa@example.test';document.querySelector('#service').value='website';document.querySelector('#timeline').value='Within 1–3 months';document.querySelector('#requirements').value='A browser test of the project enquiry review. No real enquiry is sent.';document.querySelector('#enquiry-form').requestSubmit()`);
  await check('form validates and opens review',`document.querySelector('#review-dialog').open&&document.querySelector('#review-details').textContent.includes('Monthly plan')`);
  await ev(`window.fetch=async()=>({ok:false,json:async()=>({success:false})});document.querySelector('#send-enquiry').click()`);await delay(100);await check('delivery failure retains enquiry',`document.querySelector('#review-status').classList.contains('error')&&document.querySelector('#requirements').value.includes('browser test')`);
  await ev(`window.fetch=async()=>({ok:true,json:async()=>({success:true})});document.querySelector('#send-enquiry').click()`);await delay(100);await check('mock delivery succeeds and exposes monthly followup',`document.querySelector('#review-status').classList.contains('success')&&!document.querySelector('#monthly-next').hidden`);await ev(`document.querySelector('#review-dialog').close()`);
  for(const width of [360,390,768,1024]){
   await c('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<761});await ev(`TeodorMotion.navigate('home')`);await check('responsive '+width,`document.documentElement.scrollWidth<=innerWidth`);if(width===390){await shot('mobile');await ev(`document.querySelector('.menu-toggle').click()`);await check('mobile menu opens',`document.querySelector('#navigation').classList.contains('open')`);await ev(`document.querySelector('#navigation a[href="#work"]').click()`);await delay(1700);await check('mobile menu selection navigates',`location.hash==='#work'&&!document.querySelector('#navigation').classList.contains('open')`);await shot('mobile-gallery');await ev(`TeodorMotion.select(0);document.querySelector('.gallery-space').dispatchEvent(new PointerEvent('pointerdown',{pointerType:'touch',clientX:300,clientY:400,bubbles:true}));document.querySelector('.gallery-space').dispatchEvent(new PointerEvent('pointerup',{pointerType:'touch',clientX:120,clientY:410,bubbles:true}))`);await check('touch swipe changes project',`document.querySelector('[data-select-project="1"]').getAttribute('aria-pressed')==='true'`);await ev(`TeodorMotion.openProject('wedding')`);await shot('mobile-detail');await ev(`TeodorMotion.closeProject()`);}}
  await c('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await ev(`TeodorMotion.navigate('work');TeodorMotion.select(1)`);await check('reduced motion settles without animation',`location.hash==='#work'&&document.querySelector('.transition-curtain').getAnimations().length===0`);await ev(`TeodorMotion.openProject('fintech')`);await ev(`TeodorMotion.closeProject()`);
  await check('no active imported scripts',`[...document.scripts].filter(x=>x.src).every(x=>x.src.endsWith('/app.js')||x.src.endsWith('/motion.js'))`);
  await c('Page.navigate',{url:'http://127.0.0.1:8017/#work/wedding'});await delay(1700);await check('project deep link reload',`document.querySelector('#project-dialog').open&&document.querySelector('#project-title').textContent==='Wedding Website'`);assert.deepEqual(errors,[],'browser console exceptions');console.log('PASS no browser exceptions');console.log('Screenshots: /tmp/teodor-*.png');
 }finally{ws?.close();chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
