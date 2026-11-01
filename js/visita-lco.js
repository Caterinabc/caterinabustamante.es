/* Visita LCO: mouse-tracking parallax and the interactive 360° panorama (needs js/three.r128.min.js). */
(function(){
  var el=document.getElementById('px'); if(!el) return;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var layers=[].slice.call(el.querySelectorAll('.px-l')), MAX=40;
  var tx=0,ty=0,cx=0,cy=0,raf=0;
  function frame(){
    cx+=(tx-cx)*0.08; cy+=(ty-cy)*0.08;
    layers.forEach(function(l){ var d=+l.dataset.depth; l.style.transform='translate3d('+(-cx*MAX*d).toFixed(2)+'px,'+(-cy*MAX*0.5*d).toFixed(2)+'px,0)'; });
    raf=(Math.abs(tx-cx)>0.001||Math.abs(ty-cy)>0.001)?requestAnimationFrame(frame):0;
  }
  function go(){ if(!raf) raf=requestAnimationFrame(frame); }
  var vis=true;
  function clamp(v){ return Math.max(-1,Math.min(1,v)); }
  window.addEventListener('pointermove',function(e){
    if(!vis) return;
    var r=el.getBoundingClientRect();
    tx=clamp((e.clientX-(r.left+r.width/2))/(window.innerWidth/2));
    ty=clamp((e.clientY-(r.top+r.height/2))/(window.innerHeight/2));
    go();
  },{passive:true});
  el.addEventListener('pointermove',function(){ el.classList.add('used'); });
  if('IntersectionObserver' in window) new IntersectionObserver(function(en){ vis=en[0].isIntersecting; }).observe(el);
})();


(function(){
  var el=document.getElementById('pano'), SRC;
  if(!el) return;
  SRC=el.dataset.src;
  var failed=false;
  // Fallback when three.js, WebGL or the texture is unavailable: show the panorama as a still image
  function still(){ failed=true; el.style.background='url('+SRC+') center/cover'; el.style.cursor='default'; el.classList.add('used'); var c=el.querySelector('canvas'); if(c) c.remove(); }
  if(!window.THREE){ still(); return; }
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var renderer;
  try{ renderer=new THREE.WebGLRenderer({antialias:true}); }catch(_){ still(); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  el.insertBefore(renderer.domElement,el.firstChild);
  var scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(80,2,0.1,100);
  var geo=new THREE.SphereGeometry(10,64,32); geo.scale(-1,1,1);
  var tex=new THREE.TextureLoader().load(SRC,function(){ draw(); },undefined,still);
  if('encoding' in tex) tex.encoding=THREE.sRGBEncoding; renderer.outputEncoding=THREE.sRGBEncoding;
  scene.add(new THREE.Mesh(geo,new THREE.MeshBasicMaterial({map:tex})));
  var lon=170, lat=8, drag=null, used=false, visible=true, raf=0;
  function draw(){
    if(failed) return;
    lat=Math.max(-85,Math.min(85,lat));
    var phi=THREE.MathUtils.degToRad(90-lat), th=THREE.MathUtils.degToRad(lon);
    camera.lookAt(Math.sin(phi)*Math.cos(th),Math.cos(phi),Math.sin(phi)*Math.sin(th));
    renderer.render(scene,camera);
  }
  function size(){ var w=el.clientWidth,h=el.clientHeight; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); draw(); }
  function touch(){ if(!used){ used=true; el.classList.add('used'); } }
  function spin(){ raf=0; if(failed||used||reduce||!visible) return; lon+=0.04; draw(); raf=requestAnimationFrame(spin); }
  el.addEventListener('pointerdown',function(e){ drag={x:e.clientX,y:e.clientY,lon:lon,lat:lat}; touch(); try{el.setPointerCapture(e.pointerId);}catch(_){} });
  el.addEventListener('pointermove',function(e){ if(!drag) return; var k=camera.fov/el.clientHeight; lon=drag.lon-(e.clientX-drag.x)*k; lat=drag.lat+(e.clientY-drag.y)*k; draw(); });
  function end(){ drag=null; } el.addEventListener('pointerup',end); el.addEventListener('pointercancel',end);
  el.addEventListener('keydown',function(e){ var m={ArrowLeft:[-10,0],ArrowRight:[10,0],ArrowUp:[0,10],ArrowDown:[0,-10]}[e.key]; if(!m) return; e.preventDefault(); touch(); lon+=m[0]; lat+=m[1]; draw(); });
  if('ResizeObserver' in window) new ResizeObserver(size).observe(el); else window.addEventListener('resize',size);
  if('IntersectionObserver' in window) new IntersectionObserver(function(en){ visible=en[0].isIntersecting; if(visible&&!raf) spin(); }).observe(el);
  size(); spin();
})();

