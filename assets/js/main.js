(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
function chips(w,cb){if(!w)return;[].forEach.call(w.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){[].forEach.call(w.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(b.getAttribute('data-v'));});});}
var ss=$('sz-s');if(ss){var unit='cm',tape=document.querySelector('.tape');var US=[[52,'6 1/2','6 3/8'],[53,'6 5/8','6 1/2'],[54,'6 3/4','6 5/8'],[55,'6 7/8','6 3/4'],[56,'7','6 7/8'],[57,'7 1/8','7'],[58,'7 1/4','7 1/8'],[59,'7 3/8','7 1/4'],[60,'7 1/2','7 3/8'],[61,'7 5/8','7 1/2'],[62,'7 3/4','7 5/8'],[63,'7 7/8','7 3/4'],[64,'8','7 7/8']];
 function near(c){var b=US[0];US.forEach(function(x){if(Math.abs(x[0]-c)<Math.abs(b[0]-c))b=x;});return b;}
 function sz(){var c=+ss.value,u=near(c),uk=u[2];
  var txt=unit==='cm'?c+' cm':(c/2.54).toFixed(1)+' in';$('sz-o').textContent=txt;$('sz-c').textContent=txt;$('sz-us').textContent=u[1];$('sz-uk').textContent=uk;$('sz-eu').textContent=Math.round(c);
  $('sz-l').textContent=c<54?'XS':c<56?'S':c<58?'M':c<60?'L':c<62?'XL':'XXL';tape.setAttribute('rx',(84+(c-50)*1.5).toFixed(1));
  $('sz-n').textContent=c%1?'Between sizes? Choose the larger and add a strip of foam sizing tape inside the sweatband.':'Sizes vary a little between makers, so always check the brand’s own chart too.';}
 ss.addEventListener('input',sz);chips($('sz-u'),function(v){unit=v;sz();});sz();}
if($('fc-t')){var HATS={fedora:'M28 52c0-22 6-36 22-36s22 14 22 36M42 18q8 6 16 0',beret:'M20 50c0-18 14-30 34-30s32 10 32 22c-6 6-30 10-66 8z',boater:'M30 52V28h40v24',cloche:'M26 54c0-24 10-38 24-38s24 14 24 38c-8 6-40 6-48 0z',wide:'M34 52c0-18 6-28 16-28s16 10 16 28',beanie:'M30 54c0-22 8-34 20-34s20 12 20 34'};
 var F=[['Fedora','A tall, angular crown and an asymmetric brim add length and structure, balancing soft, round features.','fedora','Trilby, boater','Round berets and close cloches'],['Almost anything','Balanced proportions suit most shapes. Have fun with a wide brim, a fedora or a tilted beret.','wide','Fedora, beret, cloche','Very tall crowns that overwhelm the face'],['Wide-brim sun hat','Soft, rounded brims and curved crowns soften a strong jaw and angular features.','wide','Cloche, floppy felt','Sharp, boxy shapes like the boater'],['Cloche','A close, rounded hat with a short brim balances a wider forehead and a narrow chin.','cloche','Medium-brim fedora','Very wide brims that broaden the top'],['Wide-brim hat','A broad brim and a lower crown add width and shorten a long face beautifully.','wide','Beret, cloche','Tall crowns that add more height']];
 function fc(i){var f=F[i];$('fc-t').textContent=f[0];$('fc-d').textContent=f[1];$('fc-a').textContent=f[3];$('fc-x').textContent=f[4];var c=HATS[f[2]];$('fc-s').innerHTML='<svg viewBox="0 0 100 64" aria-hidden="true"><ellipse cx="50" cy="54" rx="'+(f[2]==='wide'?48:34)+'" ry="8" class="br"/><path d="'+c+'" class="cr"/><path d="M28 46c14 4 30 4 44 0v6c-14 4-30 4-44 0z" class="bd"/></svg>';}
 chips($('fc-f'),function(v){fc(+v);});fc(1);}
var pt=$('pt');if(pt){var pins=document.querySelectorAll('.ml-pin'),li=pt.querySelectorAll('li');function sel(i){[].forEach.call(pins,function(p,k){p.classList.toggle('on',k===i);p.setAttribute('aria-pressed',k===i);});[].forEach.call(li,function(l,k){l.classList.toggle('on',k===i);});}
 [].forEach.call(pins,function(p,k){p.addEventListener('click',function(){sel(k);});});[].forEach.call(li,function(l,k){l.addEventListener('mouseenter',function(){sel(k);});});sel(0);}
})();
