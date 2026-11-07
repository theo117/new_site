(() => {
  'use strict';
  if(window.parent===window)return;
  history.replaceState(null,'','/en?background=1');
  const origin=location.origin;
  let started=false,ready=false,holding=false,lastY=-1;
  const tell=(type,extra={})=>parent.postMessage({source:'business-scene',type,...extra},origin);
  function initialize(){
    const silent=[...document.querySelectorAll('button')].find(b=>/^silent$/i.test(b.textContent.trim()));
    if(silent&&!started){silent.click();started=true;}
    const renderer=window.__TELA__;
    if(renderer?.info.render.calls>0){
      renderer.domElement.dataset.businessScene='';
      if(!ready){ready=true;tell('ready');}
    }
    if(!ready)setTimeout(initialize,200);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
  function scrollScene(stage,progress){
    if(!ready)return;
    const sections=[...document.querySelectorAll('main section')];
    let element=stage==='work'?document.querySelector('#journal'):stage==='home'?sections[0]:sections[1];
    if(!element)return;
    const rect=element.getBoundingClientRect();
    let y=rect.top+window.scrollY;
    if(stage==='about')progress=.55+progress*.4;
    if(stage==='home')y=progress*innerHeight*.35;
    else y+=Math.max(0,rect.height-innerHeight)*progress;
    y=Math.max(0,y);
    if(Math.abs(y-lastY)<1)return;
    lastY=y;
    if(window.__LENIS__?.scrollTo)window.__LENIS__.scrollTo(y,{immediate:true,force:true});
    else window.scrollTo({top:y,behavior:'instant'});
  }
  window.addEventListener('message',event=>{
    if(event.origin!==origin||event.source!==parent||event.data?.source!=='business-page')return;
    const message=event.data;
    if(message.type==='position')scrollScene(message.stage,Math.max(0,Math.min(1,Number(message.progress)||0)));
    if(message.type==='pointer')document.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,clientX:message.x,clientY:message.y,pointerType:'mouse'}));
    if(message.type==='break'){
      holding=!!message.active;
      document.dispatchEvent(new PointerEvent(holding?'pointerdown':'pointerup',{bubbles:true,clientX:innerWidth*.7,clientY:innerHeight*.45,button:0,pointerType:'mouse'}));
    }
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&holding){holding=false;document.dispatchEvent(new PointerEvent('pointerup',{bubbles:true}));}});
})();
