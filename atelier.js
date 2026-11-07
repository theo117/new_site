import * as THREE from './assets/vendor/three.module.js';

// Real perspective geometry, depth testing, PBR lighting and raycast interaction.
const canvas = document.querySelector('#order-canvas');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector('#order-toggle');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true, powerPreference:'high-performance'});
} catch {
  canvas.hidden = true;
  toggle.hidden = true;
}
if (renderer) initialize();
function initialize() {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  renderer.setClearColor(0x070707, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x070707, .025);
  const camera = new THREE.PerspectiveCamera(36,innerWidth/innerHeight,.1,180);
  camera.position.set(0,1.6,innerWidth<761?24:19);
  const galleryScene = new THREE.Scene();
  const galleryCamera = new THREE.PerspectiveCamera(40,innerWidth/innerHeight,.1,100);
  galleryCamera.position.set(0,0,14);
  const ambient = new THREE.HemisphereLight(0xf0ede8,0x161315,2.1);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xfff5e5,5.5);key.position.set(-7,12,6);scene.add(key);
  const rim = new THREE.DirectionalLight(0xd8b48c,4);rim.position.set(8,3,-6);scene.add(rim);
  const fill = new THREE.PointLight(0xdce6ee,65,35);fill.position.set(-6,2,7);scene.add(fill);
  // Studio environment gives the obsidian actual reflections rather than flat faces.
  const studio = new THREE.Scene();
  studio.background = new THREE.Color(0x171719);
  [[-8,9,1,12,5,5],[9,3,-4,4,12,3.5],[0,14,0,16,4,4]].forEach(([x,y,z,w,h,p])=>{
    const panel=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(0xf0ede8).multiplyScalar(p),side:THREE.DoubleSide}));panel.position.set(x,y,z);panel.lookAt(0,0,0);studio.add(panel);
  });
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(studio,.08);scene.environment=environment.texture;pmrem.dispose();
  const material=new THREE.MeshPhysicalMaterial({color:0x353438,metalness:.62,roughness:.3,clearcoat:1,clearcoatRoughness:.24,envMapIntensity:1.2});
  const structure=new THREE.Group();scene.add(structure);
  // The attachment's 23-piece mark, including its isolated central cube.
  const coordinates=[[-3,4],[-3,3],[-3,2],[-3,1],[-3,0],[-3,-1],[-3,-2],[-2,-2],[-1,-2],[0,-2],[1,-2],[3,-4],[3,-3],[3,-2],[3,-1],[3,0],[3,1],[3,2],[2,2],[1,2],[0,2],[-1,2],[0,0]];
  const box=new THREE.BoxGeometry(.94,.94,.94,3,3,3);
  const edges=new THREE.EdgesGeometry(box);
  const pieces=coordinates.map(([x,y],i)=>{
    const mesh=new THREE.Mesh(box,material);mesh.position.set(x,y,0);
    const edge=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xaaa59c,transparent:true,opacity:.17}));mesh.add(edge);structure.add(mesh);
    return {mesh,origin:new THREE.Vector3(x,y,0),scatter:new THREE.Vector3(Math.sin(i*12.3)*7,Math.cos(i*7.7)*6,Math.sin(i*4.1)*5),spin:new THREE.Vector3(Math.sin(i)*3,Math.cos(i)*3,Math.sin(i*2)*2)};
  });
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(180,180),new THREE.MeshStandardMaterial({color:0x0b0c0f,metalness:.85,roughness:.32}));floor.rotation.x=-Math.PI/2;floor.position.y=-4.65;scene.add(floor);
  // A reflected copy fades below the floor line, echoing the reference's dark water.
  const reflection=structure.clone();reflection.scale.y=-1;reflection.position.y=-9.3;reflection.traverse(o=>{if(o.isMesh){o.material=material.clone();o.material.transparent=true;o.material.opacity=.11;}});scene.add(reflection);
  const dustGeometry=new THREE.BufferGeometry();const dust=new Float32Array(900*3);
  for(let i=0;i<900;i++){dust[i*3]=Math.sin(i*127.1)*45;dust[i*3+1]=Math.cos(i*311.7)*20;dust[i*3+2]=-Math.abs(Math.sin(i*71.3))*60;}
  dustGeometry.setAttribute('position',new THREE.BufferAttribute(dust,3));
  scene.add(new THREE.Points(dustGeometry,new THREE.PointsMaterial({color:0xd8b48c,size:.018,transparent:true,opacity:.34,depthWrite:false})));
  const loader=new THREE.TextureLoader();
  const projectKeys=['fintech','wedding','ferrari'];
  const projectImages=['assets/fintechadv.webp','assets/pro10.webp','assets/pro9.webp'];
  const orbit=new THREE.Group();galleryScene.add(orbit);
  const panels=projectImages.map((url,i)=>{
    const texture=loader.load(url);texture.colorSpace=THREE.SRGBColorSpace;
    const group=new THREE.Group();const plane=new THREE.Mesh(new THREE.PlaneGeometry(5.4,2.8),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));
    plane.userData.project=projectKeys[i];group.add(plane);
    const border=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(5.48,2.88,.09)),new THREE.LineBasicMaterial({color:0x827d75,transparent:true,opacity:.7}));group.add(border);
    const back=new THREE.Mesh(new THREE.BoxGeometry(5.48,2.88,.08),new THREE.MeshBasicMaterial({color:0x121212}));back.position.z=-.055;group.add(back);orbit.add(group);return {group,plane};
  });
  const raycaster=new THREE.Raycaster();const pointer=new THREE.Vector2(10,10);
  const clock=new THREE.Clock();let broken=false,burst=0,explosion=0,holding=false,pressTime=0,currentHover=null;
  let frame,active=true,lastTime=0;
  const hero=document.querySelector('.hero'),work=document.querySelector('#work'),services=document.querySelector('#services'),about=document.querySelector('#about');
  function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=galleryCamera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();galleryCamera.updateProjectionMatrix();}
  function coords(event){pointer.set(event.clientX/innerWidth*2-1,-event.clientY/innerHeight*2+1);}
  document.addEventListener('pointermove',coords,{passive:true});
  document.addEventListener('pointerdown',e=>{if(e.target.closest('a,button,input,select,textarea,summary,dialog'))return;coords(e);holding=true;pressTime=performance.now();if(hero.getBoundingClientRect().bottom>innerHeight*.5)burst=1;});
  document.addEventListener('pointerup',e=>{holding=false;if(e.target.closest('a,button,input,select,textarea,summary,dialog'))return;if(currentHover){document.querySelector(`.project [data-project="${currentHover}"]`).click();}else if(performance.now()-pressTime>400){broken=false;}});
  toggle.addEventListener('click',()=>{broken=!broken;toggle.setAttribute('aria-pressed',String(broken));toggle.innerHTML=(broken?'Restore the order':'Break the order')+' <span aria-hidden="true">↗</span>';burst=1;});
  document.addEventListener('visibilitychange',()=>{active=!document.hidden;if(active){clock.getDelta();frame=requestAnimationFrame(render);}else cancelAnimationFrame(frame);});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);document.body.classList.remove('webgl-ready');});
  canvas.addEventListener('webglcontextrestored',()=>location.reload());
  document.body.classList.add('webgl-ready');resize();window.addEventListener('resize',resize);
  function render(now){
    if(!active)return;
    frame=requestAnimationFrame(render);
    if(reduced.matches&&now-lastTime<160)return;lastTime=now;
    const dt=Math.min(clock.getDelta(),.04),t=reduced.matches?0:clock.elapsedTime;
    const hr=hero.getBoundingClientRect(),wr=work.getBoundingClientRect(),sr=services.getBoundingClientRect(),ar=about.getBoundingClientRect();
    const mobile=innerWidth<761;
    const workActive=wr.top<innerHeight*.55&&wr.bottom>innerHeight*.35;
    document.body.classList.toggle('in-project-orbit',workActive);
    burst=Math.max(0,burst-dt*.9);
    const hold=holding&&now-pressTime>350;
    const target=reduced.matches?0:(broken||hold?1:burst*.55);
    explosion=THREE.MathUtils.damp(explosion,target,4,dt);
    if(workActive){
      const progress=THREE.MathUtils.clamp(-wr.top/Math.max(1,wr.height-innerHeight),0,1);
      const angle=progress*Math.PI*1.65+(reduced.matches?0:Math.sin(t*.18)*.08);
      panels.forEach(({group},i)=>{
        const a=i*Math.PI*2/3+angle;
        group.position.set(Math.sin(a)*(mobile?2.6:5.3),Math.sin(a*1.5)*.65-.65,Math.cos(a)*2.4);
        group.rotation.set(Math.sin(a)*.12,-Math.sin(a)*.38,Math.sin(a)*.14);
        group.scale.setScalar(mobile?.7:1);
      });
      galleryCamera.position.x=THREE.MathUtils.damp(galleryCamera.position.x,pointer.x*.18,2,dt);
      raycaster.setFromCamera(pointer,galleryCamera);
      const hits=raycaster.intersectObjects(panels.map(p=>p.plane));currentHover=hits[0]?.object.userData.project||null;
      work.classList.toggle('orbit-hover',!!currentHover);
      renderer.render(galleryScene,galleryCamera);
    } else {
      currentHover=null;
      const heroProgress=THREE.MathUtils.clamp(-hr.top/innerHeight,0,1);
      const serviceProgress=THREE.MathUtils.clamp(-sr.top/Math.max(sr.height,1),0,1);
      const inAbout=ar.top<innerHeight&&ar.bottom>0;
      const phase=heroProgress+serviceProgress;
      const intro= reduced.matches?1:Math.min(1,t/2.2);
      pieces.forEach(({mesh,origin,scatter,spin},i)=>{
        const enter=(1-intro)**3;
        mesh.position.copy(origin).addScaledVector(scatter,explosion+enter*2);
        mesh.rotation.set(spin.x*(explosion+enter),spin.y*(explosion+enter),spin.z*(explosion+enter));
        if(!reduced.matches){mesh.position.y+=Math.sin(t*.65+i*.2)*.025;}
      });
      const desiredY=.28+phase*.65+(inAbout?.5:0)+(reduced.matches?0:Math.sin(t*.18)*.07);
      structure.rotation.y=THREE.MathUtils.damp(structure.rotation.y,desiredY,2,dt);
      structure.rotation.x=THREE.MathUtils.damp(structure.rotation.x,-.12+phase*.12,2,dt);
      structure.rotation.z=THREE.MathUtils.damp(structure.rotation.z,inAbout?-.35:0,2,dt);
      structure.position.set(mobile?0:2.1,hr.bottom>0?.65:0,-phase*1.2);
      reflection.rotation.copy(structure.rotation);reflection.position.x=structure.position.x;
      reflection.visible=hr.bottom>0;
      camera.position.x=THREE.MathUtils.damp(camera.position.x,pointer.x*.35,2,dt);
      camera.position.y=THREE.MathUtils.damp(camera.position.y,1.6+heroProgress*1.4,2,dt);
      camera.position.z=THREE.MathUtils.damp(camera.position.z,mobile?24:19-heroProgress*3,2,dt);
      camera.lookAt(mobile?0:1,0,0);
      renderer.render(scene,camera);
    }
    canvas.dataset.scene=workActive?'project-orbit':'sculpture';
    canvas.dataset.renderer='webgl';
  }
  frame=requestAnimationFrame(render);
}
