(() => {
  'use strict';
  const frame=document.getElementById('reference-scene');
  if(!frame)return;
  const protocol='scene-canvas-v2';
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let ready=false,scheduled=false,broken=false;
  const sections=['home','services','work','about','packages','concept','faq','contact'].map(id=>document.getElementById(id));
  const send=(type,values={})=>frame.contentWindow?.postMessage({source:'business-page',type,...values},location.origin);
  function update(){
    scheduled=false;if(!ready)return;
    let current=sections[0];
    for(const section of sections){if(section&&section.getBoundingClientRect().top<=innerHeight*.4)current=section;}
    const rect=current.getBoundingClientRect();
    const stage=['home','services','work','about'].includes(current.id)?current.id:'home';
    const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height-innerHeight)));
    send('position',{stage,progress});
  }
  function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
  function load(){
    if(reduce.matches){frame.hidden=true;ready=false;document.body.classList.remove('webgl-ready');return;}
    frame.hidden=false;
    if(!frame.getAttribute('src'))frame.src=frame.dataset.src;
  }
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin||event.source!==frame.contentWindow||event.data?.source!=='business-scene'||event.data.protocol!==protocol)return;
    if(event.data.type==='ready'){ready=true;document.body.classList.add('webgl-ready');schedule();}
  });
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});
  document.addEventListener('pointermove',event=>{if(ready)send('pointer',{x:event.clientX,y:event.clientY});},{passive:true});
  // Put the animation control next to the opening scene without changing business copy.
  const button=document.createElement('button');button.type='button';button.className='scene-control';button.textContent='Break the order';button.setAttribute('aria-pressed','false');button.hidden=true;
  document.querySelector('.hero-copy').append(button);
  window.addEventListener('message',event=>{if(event.origin===location.origin&&event.source===frame.contentWindow&&event.data?.type==='ready'&&event.data.protocol===protocol)button.hidden=false;});
  button.addEventListener('click',()=>{broken=!broken;button.textContent=broken?'Restore the order':'Break the order';button.setAttribute('aria-pressed',String(broken));send('break',{active:broken});});
  reduce.addEventListener('change',()=>{button.hidden=reduce.matches;load();});load();
})();
