'use strict';
(() => {
  document.body.classList.add('motion-ready');
  const config = Object.freeze({state:450, interaction:720, open:950, out:'cubic-bezier(.55,0,.75,.2)', enter:'cubic-bezier(.16,1,.3,1)'});
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController();
  const on = (el, event, handler, options={}) => el.addEventListener(event, handler, {...options,signal:abort.signal});
  const main = document.querySelector('main');
  const curtain = document.querySelector('.transition-curtain');
  const gallery = document.querySelector('.gallery-space');
  const pieces = [...document.querySelectorAll('[data-gallery-piece]')];
  const choices = [...document.querySelectorAll('[data-select-project]')];
  const keys = pieces.map(el=>el.dataset.galleryPiece);
  const dialog = document.querySelector('#project-dialog');
  let selected=0, navigationId=0, detailId=0, currentSection='home', opener=null, detailKey=null, detailBusy=false;
  let navigationAnimations=[], detailAnimations=[], galleryAnimations=[];
  const stop = animations => {animations.forEach(a=>a.cancel());animations.length=0;};
  const animate = (el,frames,options={},group=navigationAnimations) => {
    if(!el || reduced.matches)return Promise.resolve();
    const animation=el.animate(frames,{duration:config.interaction,easing:config.enter,fill:'both',...options});
    group.push(animation);
    return animation.finished.catch(()=>{});
  };
  function setCurrent(id){
    currentSection=id;document.querySelector('.site-header').classList.toggle('on-paper',id==='packages');
    document.querySelectorAll('#navigation a').forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  }
  function entry(section,group=navigationAnimations){
    const targets=[...section.querySelectorAll('h1 .line,h2,.section-heading>p,.eyebrow,.hero-support,.hero-foot')].filter(el=>!el.closest('dialog')).slice(0,10);
    return Promise.all(targets.map((el,i)=>animate(el,[{opacity:0,transform:'translateY(48px)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'translateY(0)',clipPath:'inset(0 0 0% 0)'}],{duration:config.open,delay:i*55},group)));
  }
  async function navigate(id,{historyMode='push',focus=true}={}){
    const section=document.getElementById(id);if(!section || !section.matches('section'))return;
    const token=++navigationId;
    stop(navigationAnimations);
    document.querySelector('#navigation').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    ++detailId;stop(detailAnimations);detailBusy=false;
    if(dialog.open){dialog.close();detailKey=null;document.title='teodor dev tech | Websites that work for your business';}
    if(reduced.matches){window.scrollTo({top:Math.max(0,section.getBoundingClientRect().top+scrollY),behavior:'instant'});}
    else{
      const old=[...main.querySelectorAll('section')].find(s=>{const r=s.getBoundingClientRect();return r.top<innerHeight*.5 && r.bottom>innerHeight*.5;});
      await Promise.all([
        animate(old,[{opacity:1,transform:'translateY(0) scale(1)'},{opacity:0,transform:'translateY(-40px) scale(.975)'}],{duration:360,easing:config.out}),
        animate(curtain,[{transform:'translateY(101%)'},{transform:'translateY(0%)'}],{duration:520,easing:config.out})
      ]);
      if(token!==navigationId)return;
      navigationAnimations.filter(a=>a.effect?.target===old).forEach(a=>a.cancel());
      window.scrollTo({top:Math.max(0,section.getBoundingClientRect().top+scrollY),behavior:'instant'});
      await Promise.all([
        animate(curtain,[{transform:'translateY(0%)'},{transform:'translateY(-101%)'}],{duration:700}),
        entry(section)
      ]);
      if(token!==navigationId)return;
      stop(navigationAnimations);
    }
    if(token!==navigationId)return;
    setCurrent(id);
    if(historyMode==='push' && location.hash!=='#'+id)history.pushState({section:id},'', '#'+id);
    if(focus){const target=section.querySelector('h1,h2')||section;target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
  }
  function select(index,{announce=true}={}){
    selected=(index+pieces.length)%pieces.length;
    stop(galleryAnimations);
    pieces.forEach((piece,i)=>{
      const position=i===selected?'active':i===(selected+1)%pieces.length?'right':'left';
      piece.dataset.position=position;
      piece.querySelectorAll('button').forEach(b=>b.tabIndex=i===selected?0:-1);
      piece.setAttribute('aria-hidden',String(i!==selected));
    });
    choices.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));
    const copy=pieces[selected].querySelector('.piece-copy');
    [...copy.children].forEach((el,i)=>animate(el,[{opacity:0,transform:'translateY(22px)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'translateY(0)',clipPath:'inset(0 0 0 0)'}],{duration:720,delay:200+i*65},galleryAnimations));
    if(announce)document.querySelector('#gallery-status').textContent=`Project ${selected+1} of ${pieces.length}: ${window.TeodorApp.projects[keys[selected]].title}`;
  }
  async function openProject(key,{historyMode='push',trigger=null}={}){
    if(!keys.includes(key))return;
    const token=++detailId;detailBusy=true;stop(detailAnimations);
    opener=trigger||opener||pieces[keys.indexOf(key)].querySelector('button');
    const source=pieces[keys.indexOf(key)].querySelector('img');
    const from=source.getBoundingClientRect();
    const wasOpen=dialog.open;
    if(wasOpen){await Promise.all([animate(dialog.querySelector('.dialog-body'),[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-35px)'}],{duration:240,easing:config.out},detailAnimations),animate(dialog.querySelector('img'),[{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.93)'}],{duration:320,easing:config.out},detailAnimations)]);}
    if(token!==detailId)return;
    stop(detailAnimations);select(keys.indexOf(key),{announce:false});detailKey=key;
    dialog.classList.remove('is-closing');window.TeodorApp.openProject(key);dialog.scrollTop=0;
    if(historyMode==='push')history.pushState({section:'work',project:key},'', '#work/'+key);
    document.title=window.TeodorApp.projects[key].title+' | Teodor Dev Tech';
    const image=dialog.querySelector('img');
    await image.decode().catch(()=>{});
    if(token!==detailId)return;
    const to=image.getBoundingClientRect();
    const fromVisible=from.top<innerHeight&&from.bottom>0&&from.width>0&&!wasOpen;
    const transform=fromVisible?`translate(${from.left-to.left}px,${from.top-to.top}px) scale(${from.width/to.width},${from.height/to.height})`:'translateY(60px) scale(.92)';
    await Promise.all([
      animate(image,[{opacity:fromVisible?1:0,transform,transformOrigin:'top left'},{opacity:1,transform:'none',transformOrigin:'top left'}],{duration:config.open},detailAnimations),
      ...[...dialog.querySelector('.dialog-body').children].map((el,i)=>animate(el,[{opacity:0,transform:'translateY(35px)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'none',clipPath:'inset(0 0 0 0)'}],{duration:720,delay:150+i*65},detailAnimations))
    ]);
    if(token!==detailId)return;
    stop(detailAnimations);detailBusy=false;
  }
  async function closeProject({historyMode='replace'}={}){
    if(!dialog.open)return;
    const token=++detailId;detailBusy=true;stop(detailAnimations);
    dialog.classList.add('is-closing');
    const image=dialog.querySelector('img'),to=pieces[selected].querySelector('img').getBoundingClientRect(),from=image.getBoundingClientRect();
    const transform=to.top>=0&&to.top<innerHeight?`translate(${to.left-from.left}px,${to.top-from.top}px) scale(${to.width/from.width},${to.height/from.height})`:'translateY(60px) scale(.93)';
    await Promise.all([
      animate(dialog.querySelector('.dialog-body'),[{opacity:1,transform:'none'},{opacity:0,transform:'translateY(25px)'}],{duration:260,easing:config.out},detailAnimations),
      animate(image,[{opacity:1,transform:'none',transformOrigin:'top left'},{opacity:0,transform,transformOrigin:'top left'}],{duration:520,easing:config.enter},detailAnimations)
    ]);
    if(token!==detailId)return;
    stop(detailAnimations);dialog.close();dialog.classList.remove('is-closing');detailKey=null;detailBusy=false;
    document.title='teodor dev tech | Websites that work for your business';
    if(historyMode==='replace')history.replaceState({section:'work'},'', '#work');
    if(opener?.closest('[data-gallery-piece]')?.dataset.galleryPiece!==keys[selected])opener=pieces[selected].querySelector('button');
    if(opener?.isConnected)opener.focus({preventScroll:true});
  }
  on(document,'click',e=>{
    const project=e.target.closest('[data-project]');
    if(project&&suppressClick){e.preventDefault();e.stopImmediatePropagation();suppressClick=false;return;}
    if(project){e.preventDefault();e.stopImmediatePropagation();openProject(project.dataset.project,{trigger:project});return;}
    if(dialog.open&&e.target.closest('#project-dialog [data-close]')){e.preventDefault();e.stopImmediatePropagation();closeProject();return;}
    const link=e.target.closest('a[href^="#"]');if(!link||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
    const id=link.hash.slice(1);if(!document.getElementById(id)?.matches('section'))return;
    e.preventDefault();navigate(id);
  },{capture:true});
  choices.forEach(b=>on(b,'click',()=>select(Number(b.dataset.selectProject))));
  document.querySelectorAll('[data-gallery-step]').forEach(b=>on(b,'click',()=>select(selected+Number(b.dataset.galleryStep))));
  document.querySelectorAll('[data-detail-step]').forEach(b=>on(b,'click',()=>openProject(keys[(keys.indexOf(detailKey)+Number(b.dataset.detailStep)+keys.length)%keys.length],{historyMode:'replace'}).then(()=>{if(dialog.open)history.replaceState({section:'work',project:detailKey},'', '#work/'+detailKey);} )));
  on(dialog,'cancel',e=>{e.preventDefault();closeProject();});
  on(dialog,'close',()=>{if(!detailBusy&&location.hash.startsWith('#work/')){history.replaceState({section:'work'},'', '#work');detailKey=null;document.title='teodor dev tech | Websites that work for your business';}});
  on(document,'keydown',e=>{
    if(e.key==='Escape'&&dialog.open){e.preventDefault();closeProject();return;}
    if(e.altKey||e.metaKey||e.ctrlKey||e.target.closest('input,textarea,select,[contenteditable]'))return;
    const direction=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
    if(!direction)return;
    if(dialog.open){e.preventDefault();openProject(keys[(keys.indexOf(detailKey)+direction+keys.length)%keys.length],{historyMode:'push'});}
    else if(gallery.contains(e.target)){e.preventDefault();select(selected+direction);}
  });
  let touch=null,suppressClick=false;
  on(gallery,'pointerdown',e=>{suppressClick=false;if(e.pointerType==='touch')touch={x:e.clientX,y:e.clientY};},{passive:true});
  on(gallery,'pointerup',e=>{if(!touch)return;const dx=e.clientX-touch.x,dy=e.clientY-touch.y;touch=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5){suppressClick=true;select(selected+(dx<0?1:-1));}},{passive:true});
  on(gallery,'pointercancel',()=>touch=null);
  on(window,'popstate',async()=>{
    const [id,key]=location.hash.slice(1).split('/');
    if(key&&keys.includes(key)){await navigate('work',{historyMode:'none',focus:false});openProject(key,{historyMode:'none'});}
    else if(dialog.open){await closeProject({historyMode:'none'});if(id&&id!=='work')navigate(id,{historyMode:'none'});}
    else navigate(id||'home',{historyMode:'none'});
  });
  const sectionObserver=new IntersectionObserver(entries=>{for(const e of entries){if(e.target.id==='home')e.target.classList.toggle('hero-visible',e.isIntersecting);if(e.isIntersecting)setCurrent(e.target.id);}},{rootMargin:'-25% 0px -55% 0px'});
  document.querySelectorAll('main>section').forEach(s=>sectionObserver.observe(s));
  const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;revealObserver.unobserve(e.target);const group=[];entry(e.target,group).then(()=>stop(group));});},{threshold:.12});
  document.querySelectorAll('#services,#about,#contact').forEach(s=>revealObserver.observe(s));
  on(reduced,'change',()=>{++navigationId;++detailId;stop(navigationAnimations);stop(detailAnimations);stop(galleryAnimations);detailBusy=false;});
  window.TeodorMotion={navigate,select,openProject,closeProject,config};
  select(0,{announce:false});
  const [initial,key]=location.hash.slice(1).split('/');
  if(key&&keys.includes(key)){document.querySelector('#work').scrollIntoView({behavior:'instant'});openProject(key,{historyMode:'none'});}
  else if(!initial){const intro=[];entry(document.querySelector('.hero'),intro).then(()=>stop(intro));}
  on(window,'pagehide',e=>{if(e.persisted)return;abort.abort();sectionObserver.disconnect();revealObserver.disconnect();stop(navigationAnimations);stop(detailAnimations);stop(galleryAnimations);});
})();
