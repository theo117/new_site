/* Resolve static routes and connect the original gallery to the business projects. */
(() => {
  if(location.pathname==='/'||location.pathname==='/index.html')history.replaceState(null,'','/en/');
  const projects={
    visione:{title:'Financial Technology Advisory Services',image:'/assets/fintechadv.webp',platform:'Business website · Custom front-end',description:'A professional fintech advisory website with clear positioning and service-led navigation. Built around responsive presentation and a strong first impression.',url:'https://www.fintechadv.co.za'},
    caos:{title:'Wedding Website',image:'/assets/pro10.webp',platform:'Event website · WordPress',description:'Elegant event presentation with a clear guest journey. Built in WordPress around the event and its audience.',url:'https://wedding.teodordev.co.za'},
    cubi:{title:'Ferrari Fan Page Website',image:'/assets/pro9.webp',platform:'Fan project · Custom front-end',description:'A bold fan project demonstrating custom front-end design with HTML, CSS and JavaScript.',url:'https://ferrari.teodordev.co.za'}
  };
  let dialog,returnFocus;
  function showProject(key){
    const p=projects[key];if(!p)return;
    if(!dialog){dialog=document.createElement('dialog');dialog.id='teodor-project';dialog.setAttribute('aria-labelledby','teodor-project-title');dialog.innerHTML='<div class="teodor-project-top"><span id="teodor-project-platform"></span><button type="button" class="teodor-project-close">Close ×</button></div><img alt=""><div class="teodor-project-copy"><h2 id="teodor-project-title"></h2><p></p><div class="teodor-project-links"><a class="teodor-live" target="_blank" rel="noopener noreferrer">Visit website ↗</a><a href="/business.html#contact">Discuss a similar project ↗</a></div></div>';document.body.append(dialog);dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.documentElement.style.overflow='';returnFocus?.focus({preventScroll:true})});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});}
    returnFocus=document.activeElement;
    dialog.querySelector('h2').textContent=p.title;dialog.querySelector('img').src=p.image;dialog.querySelector('img').alt=p.title+' preview';dialog.querySelector('p').textContent=p.description;dialog.querySelector('#teodor-project-platform').textContent=p.platform;dialog.querySelector('.teodor-live').href=p.url;document.documentElement.style.overflow='hidden';dialog.showModal();
  }
  // The reference is exported as static documents, so full navigations replace Next's server requests.
  window.addEventListener('click',event=>{
    const a=event.target.closest?.('a[href]');if(!a||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
    const match=u.pathname.match(/\/(?:en\/)?pensiero\/(visione|caos|cubi)\/?$/);
    if(match){event.preventDefault();event.stopImmediatePropagation();showProject(match[1]);return;}
    if(u.pathname===location.pathname&&u.hash)return;
    if(/^\/en\/(?:pensiero|services|path|lets-talk|work)\/?$/.test(u.pathname)||u.pathname==='/en'){
      event.preventDefault();event.stopImmediatePropagation();location.assign(u.pathname.replace(/\/$/,'')+'/');
    }
  },true);
  // Reference optimization URLs need a server; provide the same local texture directly.
  const nativeFetch=window.fetch;
  window.fetch=function(input,options){
    const raw=typeof input==='string'?input:input instanceof URL?input.href:input.url;
    const u=new URL(raw,location.href);
    if(u.origin===location.origin&&u.pathname==='/_next/image')return nativeFetch.call(this,u.searchParams.get('url'),options);
    if(u.origin===location.origin&&u.searchParams.has('_rsc'))return Promise.resolve(new Response('',{status:204}));
    return nativeFetch.apply(this,arguments);
  };
  // Convert optimizer image URLs before they are inserted; keep original sizes and loading behavior.
  const descriptor=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,'src');
  Object.defineProperty(HTMLImageElement.prototype,'src',{...descriptor,set(value){try{const u=new URL(value,location.href);if(u.origin===location.origin&&u.pathname==='/_next/image')value=u.searchParams.get('url')}catch{}descriptor.set.call(this,value)}});
  const setAttribute=Element.prototype.setAttribute;
  Element.prototype.setAttribute=function(name,value){
    if(this.tagName==='IMG'&&(name==='src'||name==='srcset')&&String(value).includes('/_next/image?')){
      value=String(value).replace(/\/_next\/image\?[^\s,]+/g,s=>{try{return new URL(s,location.href).searchParams.get('url')||s}catch{return s}});
    }
    return setAttribute.call(this,name,value);
  };
})();
// Preserve the original animated reader for WebGL selection, with business-specific links.
document.addEventListener('DOMContentLoaded',()=>{
  const projects=[['Financial Technology Advisory Services','https://www.fintechadv.co.za'],['Wedding Website','https://wedding.teodordev.co.za'],['Ferrari Fan Page Website','https://ferrari.teodordev.co.za']];
  const observer=new MutationObserver(()=>{
    for(const reader of document.querySelectorAll('[class*="-xOfRW_lettura"]')){
      if(reader.querySelector('[data-business-project-links]'))continue;
      const project=projects.find(([title])=>reader.textContent.includes(title));if(!project)continue;
      const column=reader.querySelector('[class*="-xOfRW_testo"]')||reader.querySelector('[class*="-xOfRW_foglio"]');if(!column)continue;
      const links=document.createElement('div');links.dataset.businessProjectLinks='';links.className='teodor-project-links';
      const live=document.createElement('a');live.href=project[1];live.target='_blank';live.rel='noopener noreferrer';live.textContent='Visit website ↗';
      const contact=document.createElement('a');contact.href='/business.html#contact';contact.textContent='Discuss a similar project ↗';links.append(live,contact);column.append(links);
    }
  });observer.observe(document.body,{childList:true,subtree:true});
});
