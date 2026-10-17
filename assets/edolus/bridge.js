'use strict';
(() => {
  let target=0,current=0,ready=false,paused=false,entered=false;
  // All authored scene movement is driven by the normal parent page scrollbar.
  window.addEventListener('message',event=>{
    if(event.source!==parent || !event.data)return;
    if(event.data.type==='teodor-pointer'){
      window.dispatchEvent(new MouseEvent('mousemove',{clientX:event.data.x,clientY:event.data.y}));
      return;
    }
    if(event.data.type!=='teodor-scene')return;
    target=Math.max(0,Math.min(.84,event.data.progress));paused=event.data.paused;
    const app=pc.Application.getApplication();
    if(app)app.autoRender=!paused;
  });
  window.addEventListener('warmup:done',()=>{
    ready=true;
    parent.postMessage({type:'teodor-scene-ready'},location.origin);
  });
  const timer=setInterval(()=>{
    const app=pc.Application.getApplication();
    if(!app||!app.root.findByName('Managers'))return;
    clearInterval(timer);app.soundManager.volume=0;
    app.on('update',dt=>{
      if(!ready||paused)return;
      current+=(target-current)*Math.min(1,dt*5);
      if(!entered&&current>.0001){entered=true;window.dispatchEvent(new CustomEvent('experienceStart'));}
      EventBus.emit('scroll:intro',Math.min(1,current/.025));EventBus.emit('scroll:progress',current);
    });
  },100);
})();
