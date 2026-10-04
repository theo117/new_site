'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const projects = {
    wedding: {title:'Wedding Website', platform:'Event website · WordPress', image:'assets/pro10.webp', description:'An elegant wedding website with premium presentation and a clearer guest journey. A focused example of WordPress delivery shaped around its audience.', tech:'Platform: WordPress', url:'https://wedding.teodordev.co.za'},
    fintech: {title:'Financial Technology Advisory Services', platform:'Business website · Custom front-end', image:'assets/fintechadv.webp', description:'A professional fintech advisory website with clear positioning and service-led navigation. Built around responsive presentation and a strong first impression.', tech:'Built with HTML, CSS and JavaScript', url:'https://www.fintechadv.co.za'},
    ferrari: {title:'Ferrari Fan Page Website', platform:'Fan project · Custom front-end', image:'assets/pro9.webp', description:'A custom Ferrari fan page with a bold branded experience and strong visual presentation. A personal fan project demonstrating custom front-end design.', tech:'Built with HTML, CSS and JavaScript', url:'https://ferrari.teodordev.co.za'}
  };
  const industries = {
    service:{label:'Local service', headline:'Make your next project easier.', description:'Clear services, local credibility and a simple quote request.', cta:'Request a quote', pages:['Home','Services','Work','Contact'], flow:'Service details, service-area proof, recent work and a short quote request.'},
    restaurant:{label:'Restaurant / café', headline:'Good food. A place to gather.', description:'Show the menu, the atmosphere and a clear route to a reservation.', cta:'Reserve a table', pages:['Home','Menu','Our story','Reservations'], flow:'Menu highlights, location, opening hours and a reservation enquiry.'},
    health:{label:'Health / wellness', headline:'Feel confident about your next step.', description:'A reassuring introduction to your care, services and booking options.', cta:'Book a consultation', pages:['Home','Services','About','Book'], flow:'Service explanations, professional credentials and a consultation request.'},
    finance:{label:'Legal / finance', headline:'Clear advice for important decisions.', description:'Present your expertise and make it easy to start a confidential conversation.', cta:'Request a consultation', pages:['Home','Expertise','About','Contact'], flow:'Practice areas, verified qualifications, approach and a consultation enquiry.'},
    creative:{label:'Portfolio / creative', headline:'Ideas made tangible.', description:'Let selected work show your style, process and attention to detail.', cta:'Discuss a project', pages:['Home','Work','Process','Contact'], flow:'Selected case studies, project scope, process and a short client brief.'},
    software:{label:'Software / app', headline:'Less friction. More progress.', description:'Explain the product clearly and help visitors see how it fits their workflow.', cta:'Request a demo', pages:['Home','Features','Use cases','Demo'], flow:'Product use cases, practical benefits, screenshots and a demo request.'}
  };
  const serviceLabels = {website:'Business website',wordpress:'WordPress / redesign',app:'Web / Android app',unsure:'Help deciding'};
  const packageDescriptions = {Essential:'A focused one-page website with the fundamentals in place.',Professional:'A fuller business website with up to 5 pages and room for services, trust signals and enquiries.',Executive:'A more flexible build for WordPress, custom workflows, web apps or Android functionality.'};
  let selectedService='website', currentProject='wedding', currentConcept='', pendingEnquiry=null, sending=false;
  const menuButton=document.querySelector('.menu-toggle');
  const nav=$('navigation');
  function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
  menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});

  function goToContact(){closeMenu();$('contact').scrollIntoView({behavior:reduceMotion()?'instant':'smooth',block:'start'});$('full-name').focus({preventScroll:true});}
  function selectPackage(name,service=selectedService){
    if(!['Essential','Professional','Executive','Monthly plan','Not sure yet'].includes(name))throw new Error('Unknown package');
    $('enquiry-package').value=name;
    $('selected-package-text').textContent='Starting point: '+name+(currentConcept?' · Concept attached':'');
    $('selected-package').hidden=name==='Not sure yet'&&!currentConcept;
    $('service').value=serviceLabels[service]?service:'unsure';
    if(name==='Monthly plan')$('arrangement').value='monthly-plan';
    else if(name!=='Not sure yet')$('arrangement').value='once-off-build';
    updateArrangement();
  }
  function recommendation(service=selectedService,size=$('project-size').value){
    if(!['website','wordpress','app'].includes(service)||!['small','medium','large'].includes(size))throw new Error('Invalid project selection');
    return service==='app'||service==='wordpress'||size==='large'?'Executive':size==='medium'?'Professional':'Essential';
  }
  function updateRecommendation(){
    const name=recommendation();
    $('recommendation-title').textContent=name;
    $('recommendation-copy').textContent=packageDescriptions[name];
    document.querySelectorAll('[data-choice]').forEach(button=>{const active=button.dataset.choice===selectedService;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  }
  document.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{selectedService=button.dataset.choice;updateRecommendation();}));
  $('project-size').addEventListener('change',updateRecommendation);
  document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{selectedService=button.dataset.service;updateRecommendation();$('finder').scrollIntoView({behavior:reduceMotion()?'instant':'smooth',block:'center'});$('project-size').focus({preventScroll:true});}));
  $('use-recommendation').addEventListener('click',()=>{selectPackage(recommendation());goToContact();});
  document.querySelectorAll('[data-package]').forEach(button=>button.addEventListener('click',()=>{selectPackage(button.dataset.package,button.dataset.package==='Executive'?'wordpress':'unsure');goToContact();}));
  $('clear-package').addEventListener('click',()=>{currentConcept='';$('enquiry-concept').value='';$('enquiry-package').value='Not sure yet';$('selected-package').hidden=true;});

  document.querySelectorAll('dialog').forEach(dialog=>{
    dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
    dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.style.overflow='';});
  });
  function openDialog(dialog){document.body.style.overflow='hidden';dialog.showModal();}
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
    currentProject=button.dataset.project;const p=projects[currentProject];
    $('project-title').textContent=p.title;$('project-platform').textContent=p.platform;
    $('project-dialog-image').src=p.image;$('project-dialog-image').alt=p.title+' website preview';
    $('project-description').textContent=p.description;$('project-tech').textContent=p.tech;$('project-live-link').href=p.url;
    openDialog($('project-dialog'));
  }));
  $('project-enquire').addEventListener('click',()=>{
    const project=projects[currentProject];$('project-dialog').close();selectPackage(currentProject==='wedding'?'Executive':'Not sure yet',currentProject==='wedding'?'wordpress':'website');
    if(!$('requirements').value.trim())$('requirements').value='I would like to discuss a project with a similar direction to the '+project.title+'. My business needs: ';
    goToContact();
  });

  function generateConcept(business,industry,style,goal){
    if(typeof business!=='string'||business.length>80||!industries[industry]||!['modern','luxury','friendly','bold','minimal'].includes(style)||typeof goal!=='string'||goal.length>400)throw new Error('Invalid concept settings');
    const data=industries[industry],name=business.trim()||'Your business';
    return {business:name,industry,style,...data,summary:`${name}: a ${style} ${data.label.toLowerCase()} website. Suggested pages: ${data.pages.join(', ')}. Lead flow: ${data.flow}${goal.trim()?' Goal: '+goal.trim():''}`};
  }
  function renderConcept(){
    const concept=generateConcept($('maker-business').value,$('maker-industry').value,$('maker-style').value,$('maker-goal').value);
    $('concept-preview').className='concept-preview '+concept.style;
    $('concept-brand').textContent=concept.business;$('concept-headline').textContent=concept.headline;$('concept-description').textContent=concept.description;$('concept-cta').textContent=concept.cta;$('concept-pages').textContent=concept.pages.join(' · ');$('concept-summary').textContent=concept.summary;
    return concept;
  }
  $('open-maker').addEventListener('click',()=>{renderConcept();openDialog($('maker-dialog'));});
  $('maker-form').addEventListener('submit',event=>{event.preventDefault();renderConcept();$('maker-status').textContent='Concept updated. You can add this direction to your enquiry.';});
  ['maker-business','maker-industry','maker-style','maker-goal'].forEach(id=>$(id).addEventListener('input',renderConcept));
  $('use-concept').addEventListener('click',()=>{
    const concept=renderConcept();currentConcept=concept.summary;$('enquiry-concept').value=currentConcept;
    if(!$('business').value.trim()&&concept.business!=='Your business')$('business').value=concept.business;
    selectPackage($('enquiry-package').value,'website');$('maker-dialog').close();goToContact();
  });
  $('copy-concept').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(renderConcept().summary);$('maker-status').textContent='Brief copied.';}
    catch{$('maker-status').textContent='Copy is unavailable here. Select and copy the brief above, or use it directly in your enquiry.';}
  });

  function updateArrangement(){
    const monthly=$('arrangement').value==='monthly-plan';$('monthly-note').hidden=!monthly;
    $('enquiry-subject').value=monthly?'New Monthly Plan Enquiry':'New Digital Build Enquiry';
    $('enquiry-route').value=monthly?'monthly-plan':$('arrangement').value==='once-off-build'?'once-off-build':'general';
    $('followup-document').value=monthly?new URL('monthly-plan-guide.html',window.location.href).toString():'';
    $('qualification-form').value=monthly?'https://docs.google.com/forms/d/e/1FAIpQLSeLJJBFGW5cLMWCRofuarrPMCMuj5Tm8bD7e64GitC-KL9NLw/viewform?usp=dialog':'';
  }
  $('arrangement').addEventListener('change',updateArrangement);
  function setStatus(id,message,type=''){const node=$(id);node.textContent=message;node.className='form-status '+type;}
  function validateEnquiry(data){
    if(!data||typeof data.name!=='string'||!data.name.trim()||data.name.length>80||typeof data.email!=='string'||!/^\S+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())||data.email.length>120)throw new Error('Enter your name and a valid email address.');
    if(!Object.hasOwn(serviceLabels,data.service)||!['once-off-build','monthly-plan','not-sure'].includes(data.project_model)||!['As soon as possible','Within 2–4 weeks','Within 1–3 months','Still exploring'].includes(data.timeline))throw new Error('Choose a service, project structure and timeline.');
    if(typeof data.message!=='string'||data.message.trim().length<20||data.message.length>2000)throw new Error('Add at least 20 characters about your project.');
    if(typeof data.business!=='string'||data.business.length>120)throw new Error('Keep the business name under 120 characters.');
    return {...data,name:data.name.trim(),email:data.email.trim(),business:data.business.trim(),message:data.message.trim()};
  }
  const form=$('enquiry-form');
  form.addEventListener('submit',event=>{
    event.preventDefault();if(sending)return;
    if(!form.reportValidity())return;
    if($('botcheck').value)return;
    try{
      pendingEnquiry=validateEnquiry(Object.fromEntries(new FormData(form).entries()));
      const details=$('review-details');details.replaceChildren();
      const labels={name:'Name',email:'Email',business:'Business',service:'Service',package:'Starting package',project_model:'Project structure',timeline:'Timeline',message:'Project brief',concept:'Website concept'};
      const arrangements={'once-off-build':'Once-off build','monthly-plan':'Monthly plan','not-sure':'Not sure yet'};
      Object.entries(labels).forEach(([key,label])=>{if(!pendingEnquiry[key])return;const term=document.createElement('dt'),description=document.createElement('dd');term.textContent=label;description.textContent=key==='service'?serviceLabels[pendingEnquiry[key]]:key==='project_model'?arrangements[pendingEnquiry[key]]:pendingEnquiry[key];details.append(term,description);});
      setStatus('review-status','');setStatus('form-status','');$('monthly-next').hidden=true;$('send-enquiry').hidden=false;$('edit-enquiry').textContent='Edit details';openDialog($('review-dialog'));
    }catch(error){setStatus('form-status',error.message,'error');}
  });
  $('edit-enquiry').addEventListener('click',()=>{$('review-dialog').close();if(pendingEnquiry)$('requirements').focus({preventScroll:true});});

  async function deliverEnquiry(data,fetcher=fetch){
    const validated=validateEnquiry(data);const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetcher('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(validated),signal:controller.signal});
      const result=await response.json();if(!response.ok||result.success!==true)throw new Error('Your enquiry could not be confirmed. Please try again or use the consultation or WhatsApp links.');
      return {success:true};
    }finally{clearTimeout(timer);}
  }
  $('send-enquiry').addEventListener('click',async()=>{
    if(sending||!pendingEnquiry)return;
    sending=true;$('send-enquiry').disabled=true;$('send-enquiry').textContent='Sending…';setStatus('review-status','Sending your enquiry…');
    const wasMonthly=pendingEnquiry.project_model==='monthly-plan';
    try{
      await deliverEnquiry(pendingEnquiry);
      setStatus('review-status','Thank you. Your enquiry has been sent. teodor dev tech will review your brief and get back to you.'+(wasMonthly?' A follow-up qualification step will help confirm the monthly-plan scope.':''),'success');
      setStatus('form-status','Your enquiry has been sent. Thank you.','success');form.reset();currentConcept='';pendingEnquiry=null;$('selected-package').hidden=true;updateArrangement();$('send-enquiry').hidden=true;$('edit-enquiry').textContent='Done';$('monthly-next').hidden=!wasMonthly;
    }catch(error){setStatus('review-status',error.name==='AbortError'?'The request timed out, so delivery could not be confirmed. Your details are still here. Please try again or contact us directly.':error.message||'Your enquiry could not be sent. Please try again or contact us directly.','error');}
    finally{sending=false;$('send-enquiry').disabled=false;$('send-enquiry').textContent='Send enquiry';}
  });
  updateRecommendation();renderConcept();

  if(document.modelContext?.registerTool){
    const lifecycle=new AbortController();window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
    try{Promise.resolve(document.modelContext.registerTool({name:'stage_project_starting_point',title:'Choose a project starting point',description:'Suggest a package and stage it in the visible enquiry form. This does not send an enquiry.',inputSchema:{type:'object',properties:{service:{type:'string',enum:['website','wordpress','app']},scope:{type:'string',enum:['small','medium','large']}},required:['service','scope'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).some(key=>!['service','scope'].includes(key)))throw new Error('Provide only service and scope.');const name=recommendation(input.service,input.scope);selectedService=input.service;$('project-size').value=input.scope;updateRecommendation();selectPackage(name,input.service);goToContact();return {package:name,service:serviceLabels[input.service],status:'staged',sent:false};}},{signal:lifecycle.signal})).catch(()=>{});}catch{}
  }
  // Internal helpers support validation without sending a live enquiry.
  if(window.__TEODOR_TEST__)window.__teodorTest={recommendation,generateConcept,validateEnquiry,deliverEnquiry,selectPackage};
})();
