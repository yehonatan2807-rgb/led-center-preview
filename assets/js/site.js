/* Shared header, footer, order cart, accessibility menu and WhatsApp button for every page. */
(function(){
const WA='972547543820', VAT=0.18;
const HOURS=[ // 0 = Sunday
  ['ראשון','9:00–18:30'],['שני','9:00–18:30'],['שלישי','9:00–18:30'],['רביעי','9:00–18:30'],['חמישי','9:00–18:30'],['שישי','סגור'],['שבת','סגור']];
const OPEN={o:9*60,c:18*60+30,days:[0,1,2,3,4]};
const MAPS='https://www.google.com/maps/search/?api=1&query=%D7%9C%D7%93%20%D7%A1%D7%A0%D7%98%D7%A8%20%D7%A8%D7%91%D7%A7%D7%94%2019%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D';
const WAZE='https://waze.com/ul?q=%D7%A8%D7%91%D7%A7%D7%94%2019%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D&navigate=yes';
window.SITE={WA,VAT,HOURS,MAPS,WAZE};

const page=document.body.dataset.page||'';
const nav=[['shop.html','חנות','shop'],['calculator.html','מחשבון שנאי','calc'],['projects.html','רעיונות','projects'],['guides.html','מדריכים','guides'],['about.html','אודות','about'],['contact.html','צור קשר','contact']];
const navHtml=nav.map(([h,t,k])=>`<a href="${h}"${k===page?' aria-current="page"':''}>${t}</a>`).join('');
const ic={
  bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 7h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  wa:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>',
  a11y:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="4" r="2"/><path d="M4 8.5l8 1.5 8-1.5.4 1.8-6.4 1.4V15l2.2 6.3-1.8.7L12 16.4 9.6 22l-1.8-.7L10 15v-3.3L3.6 10.3z"/></svg>',
  fb:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.8-6 5.9-6 .8 0 2.1.2 2.6.3v3.3h-1.4c-1.4 0-1.9.5-1.9 1.9V12h3.9l-.7 3.7h-3.2v8.2C19.4 23.2 24 18.2 24 12 24 5.4 18.6 0 12 0S0 5.4 0 12c0 5.6 3.9 10.4 9.1 11.7Z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 2.6.1 3.8 1.4 3.9 3.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 2.5-1.3 3.8-3.9 3.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-2.6-.1-3.8-1.4-3.9-3.9C3.2 15.6 3.2 15.2 3.2 12s0-3.6.1-4.8C3.4 4.6 4.6 3.4 7.2 3.3 8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9Z"/></svg>'
};
window.ICONS=ic;
const logo=`<span class="logo__mark" aria-hidden="true"><i></i></span>`;

document.body.insertAdjacentHTML('afterbegin',`
<a class="skip" href="#main">דלגו לתוכן</a>
<header class="hdr"><div class="wrap hdr__bar">
  <a class="logo" href="index.html" aria-label="לד סנטר, לדף הבית">${logo}<span class="logo__t"><span class="logo__en">LED CENTER</span><span class="logo__he">לד סנטר · ירושלים</span></span></a>
  <nav class="nav" aria-label="ראשי">${navHtml}</nav>
  <div class="hdr__act">
    <a class="hdr__tel" href="tel:+972722500885">072-2500885</a>
    <button class="icon-btn" type="button" data-cart-open aria-label="סל ההזמנה">${ic.bag}<span class="badge" data-n="0">0</span></button>
    <button class="icon-btn menu-btn" type="button" data-menu aria-expanded="false" aria-controls="sheet" aria-label="תפריט">${ic.menu}</button>
  </div>
</div></header>
<div class="sheet" id="sheet" aria-hidden="true">
  <button class="icon-btn sheet__close" type="button" data-menu-close aria-label="סגירת תפריט">${ic.x}</button>
  <nav aria-label="תפריט נייד"><a href="index.html">דף הבית</a>${navHtml}</nav>
  <p class="sheet__foot">רחוב רבקה 19, תלפיות · <a href="tel:+972722500885">072-2500885</a></p>
</div>`);

const hoursDl=`<dl class="hours" data-hours>${HOURS.map(([d,h],i)=>`<dt data-day="${i}">${d}</dt><dd data-day="${i}">${h}</dd>`).join('')}</dl>`;
window.HOURS_HTML=hoursDl;
document.body.insertAdjacentHTML('beforeend',`
<footer class="foot"><div class="wrap">
  <div class="foot__grid">
    <div class="foot__brand"><a class="logo" href="index.html" style="color:var(--on-dark)">${logo}<span class="logo__t"><span class="logo__en">LED CENTER</span><span class="logo__he" style="color:var(--on-dark-muted)">לד סנטר בע״מ</span></span></a>
      <p>ייצור, ייבוא ושיווק תאורת לד. ייעוץ, תכנון ותיקונים בחנות בתלפיות, ירושלים.</p>
      <div class="socials"><a href="https://www.facebook.com/yLedCenter/" aria-label="פייסבוק">${ic.fb}</a><a href="https://www.instagram.com/yehuda_shilo/" aria-label="אינסטגרם">${ic.ig}</a></div></div>
    <div><h3>האתר</h3><ul>${nav.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
    <div><h3>יצירת קשר</h3><ul><li><a href="tel:+972722500885">משרד 072-2500885</a></li><li><a href="tel:+972547543820">נייד 054-7543820</a></li><li><a href="https://wa.me/${WA}">וואטסאפ</a></li><li><a href="${MAPS}">רחוב רבקה 19, תלפיות<br>(בתוך ביג אמפוריו)</a></li></ul></div>
    <div><h3>שעות פתיחה</h3>${hoursDl}</div>
  </div>
  <div class="foot__row"><span>© 2026 לד סנטר בע״מ · המחירים באתר כוללים מע״מ · צילומי השראה: Unsplash</span><nav aria-label="משפטי"><a href="accessibility.html">הצהרת נגישות</a><a href="terms.html">תקנון ופרטיות</a></nav></div>
</div></footer>
<div class="scrim" data-cart-close></div>
<aside class="drawer" id="drawer" aria-hidden="true" aria-labelledby="drawer-h">
  <div class="drawer__head"><h2 id="drawer-h">סל ההזמנה</h2><button class="icon-btn" type="button" data-cart-close aria-label="סגירת הסל">${ic.x}</button></div>
  <ul class="drawer__list" id="cart-lines"></ul>
  <div class="drawer__foot">
    <div class="sum sum--t"><span>סה״כ כולל מע״מ</span><span class="num" id="cart-tot">0 ₪</span></div>
    <a class="btn btn--wa" id="cart-send" href="#" target="_blank" rel="noopener">${ic.wa}שליחת ההזמנה בוואטסאפ</a>
    <p>ההזמנה נשלחת ליהודה לאישור מלאי ומחיר. התשלום והאיסוף בחנות או במשלוח בתיאום.</p>
  </div>
</aside>
<a class="fab fab--wa" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="שיחה בוואטסאפ">${ic.wa}</a>
<button class="fab fab--a11y" type="button" data-a11y aria-expanded="false" aria-controls="a11y" aria-label="תפריט נגישות">${ic.a11y}</button>
<div class="a11y" id="a11y" role="dialog" aria-label="תפריט נגישות">
  <h2>נגישות</h2>
  <div class="a11y__grid">
    <button type="button" data-mode="big" aria-pressed="false">הגדלת טקסט</button>
    <button type="button" data-mode="contrast" aria-pressed="false">ניגודיות גבוהה</button>
    <button type="button" data-mode="links" aria-pressed="false">הדגשת קישורים</button>
    <button type="button" data-mode="still" aria-pressed="false">עצירת אנימציות</button>
    <button type="button" data-mode="font" aria-pressed="false">גופן קריא</button>
    <button type="button" data-reset>איפוס</button>
  </div>
  <a href="accessibility.html">להצהרת הנגישות</a>
</div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>`);

/* menu */
const sheet=document.getElementById('sheet'),mb=document.querySelector('[data-menu]');
const setMenu=v=>{sheet.classList.toggle('is-open',v);sheet.setAttribute('aria-hidden',String(!v));mb.setAttribute('aria-expanded',String(v));document.body.style.overflow=v?'hidden':''};
mb.addEventListener('click',()=>setMenu(true));
sheet.addEventListener('click',e=>{if(e.target.closest('a,[data-menu-close]'))setMenu(false)});

/* hours: today and open-now in Jerusalem time */
function jlmNow(){const p=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Jerusalem',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());const g=t=>p.find(x=>x.type===t).value;return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),m:(+g('hour')%24)*60+(+g('minute'))}}
const now=jlmNow();
document.querySelectorAll(`[data-hours] [data-day="${now.d}"]`).forEach(e=>e.classList.add('is-today'));
const isOpen=OPEN.days.includes(now.d)&&now.m>=OPEN.o&&now.m<OPEN.c;
document.querySelectorAll('[data-open-now]').forEach(e=>{e.textContent=isOpen?'פתוח עכשיו, עד 18:30':'סגור עכשיו · נפתח בימים א׳–ה׳ ב-9:00';e.classList.add('open-now');e.classList.toggle('is-closed',!isOpen)});

/* toast */
const toast=document.getElementById('toast');let tt;
window.say=m=>{toast.textContent=m;toast.classList.add('is-on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('is-on'),1900)};

/* cart, kept for this visitor in localStorage */
const fmt=n=>(Math.round(n*100)/100).toLocaleString('he-IL',{minimumFractionDigits:n%1?2:0,maximumFractionDigits:2})+' ₪';
window.fmt=fmt;
let cart={};try{cart=JSON.parse(localStorage.getItem('lc-cart')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('lc-cart',JSON.stringify(cart))}catch(e){}};
const P=id=>window.findProduct?findProduct(id):undefined;
function renderCart(){
  const ids=Object.keys(cart).filter(P);
  const count=ids.reduce((a,id)=>a+cart[id],0);
  document.querySelectorAll('.badge').forEach(b=>{b.textContent=count;b.dataset.n=count});
  let sub=0,ask=false;
  const list=document.getElementById('cart-lines');
  list.innerHTML=ids.length?ids.map(id=>{const p=P(id),q=cart[id];if(p.price!=null)sub+=gross(p.price)*q;else ask=true;
    return `<li class="dl"><div class="dl__img">${drawProduct(p)}</div><div><b>${p.name}</b><small>${p.price!=null?fmt(gross(p.price))+' ליחידה':'מחיר לפי דגם'}</small></div><div class="qty"><button type="button" data-dec="${id}" aria-label="הפחתה">−</button><span>${q}</span><button type="button" data-inc="${id}" aria-label="הוספה">+</button></div></li>`}).join('')
    :'<li class="drawer__empty">הסל ריק.<br><a class="link" href="shop.html">לחנות</a></li>';
  sub=Math.round(sub*100)/100;
  document.getElementById('cart-tot').textContent=fmt(sub)+(ask?' +':'');
  const msg='שלום לד סנטר, אשמח להזמין:\n'+ids.map(id=>{const p=P(id);return `• ${p.name} × ${cart[id]}`+(p.price!=null?` (${fmt(Math.round(gross(p.price)*cart[id]*100)/100)})`:'')}).join('\n')+`\nסה"כ כולל מע"מ: ${fmt(sub)}${ask?' + פריטים לפי הצעה':''}`;
  document.getElementById('cart-send').href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}
const calm=()=>matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('a11y-still');
const bump=()=>{if(calm())return;document.querySelectorAll('.badge').forEach(b=>b.animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:260,easing:'cubic-bezier(.23,1,.32,1)'}))};
window.addToCart=(id,q=1)=>{cart[id]=(cart[id]||0)+q;save();renderCart();bump();say('נוסף לסל ההזמנה')};
const drawer=document.getElementById('drawer'),scrim=document.querySelector('.scrim');
const setCart=v=>{drawer.classList.toggle('is-open',v);scrim.classList.toggle('is-open',v);drawer.setAttribute('aria-hidden',String(!v));document.body.style.overflow=v?'hidden':''};
window.openCart=()=>setCart(true);
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-add]');
  if(a){addToCart(a.dataset.add,+(a.dataset.qty||1));if(a.classList.contains('add')){a.classList.add('is-added');const t=a.lastChild.textContent;a.lastChild.textContent='נוסף';setTimeout(()=>{a.classList.remove('is-added');a.lastChild.textContent=t},1300)}return}
  const i=e.target.closest('[data-inc]');if(i){cart[i.dataset.inc]++;save();renderCart();return}
  const d=e.target.closest('[data-dec]');if(d){const id=d.dataset.dec;cart[id]--;if(cart[id]<=0)delete cart[id];save();renderCart();return}
  if(e.target.closest('[data-cart-open]'))setCart(true);
  if(e.target.closest('[data-cart-close]'))setCart(false);
  if(e.target.closest('#cart-send')&&!Object.keys(cart).length){e.preventDefault();say('הסל ריק עדיין')}
});
renderCart();

/* accessibility menu, choices remembered on this device */
const a11y=document.getElementById('a11y'),ab=document.querySelector('[data-a11y]');
ab.addEventListener('click',()=>{const v=!a11y.classList.contains('is-open');a11y.classList.toggle('is-open',v);ab.setAttribute('aria-expanded',String(v))});
let modes=[];try{modes=JSON.parse(localStorage.getItem('lc-a11y')||'[]')}catch(e){}
const applyModes=()=>{['big','contrast','links','still','font'].forEach(m=>{document.documentElement.classList.toggle('a11y-'+m,modes.includes(m));const b=a11y.querySelector(`[data-mode="${m}"]`);b&&b.setAttribute('aria-pressed',String(modes.includes(m)))});try{localStorage.setItem('lc-a11y',JSON.stringify(modes))}catch(e){}};
a11y.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(b){const m=b.dataset.mode;modes=modes.includes(m)?modes.filter(x=>x!==m):[...modes,m];applyModes()}if(e.target.closest('[data-reset]')){modes=[];applyModes()}});
applyModes();

addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);setCart(false);a11y.classList.remove('is-open');ab.setAttribute('aria-expanded','false')}});

/* reveal on scroll */
document.body.classList.remove('no-js');
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -6% 0px'});
window.observeReveal=()=>document.querySelectorAll('.rv:not(.in)').forEach((el,i)=>{el.style.transitionDelay=(i%4)*60+'ms';io.observe(el)});
observeReveal();

/* product card markup, shared by home and shop */
window.cardHTML=p=>`<article class="pcard rv" data-cat="${p.cat}">
  <a class="pcard__img" href="product.html?id=${p.id}" aria-label="${p.name}">${drawProduct(p)}${p.tag?`<span class="pcard__tag">${p.tag}</span>`:''}</a>
  <div class="pcard__body"><span class="pcard__cat">${CATS[p.cat].name}</span><a class="pcard__name" href="product.html?id=${p.id}">${p.name}</a><p class="pcard__spec">${p.spec}</p>
  <div class="pcard__row">${p.price!=null?`<span class="price"><b class="num">${fmt(gross(p.price))}</b><small>כולל מע״מ</small></span>`:`<span class="price price--ask"><b>מחיר לפי דגם</b><small>נשלח הצעה</small></span>`}
  <button class="add" type="button" data-add="${p.id}"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>הוספה לסל</button></div></div></article>`;
})();

/* scroll progress: [data-sp="pin"] gets --p from 0 to 1 while it is pinned,
   [data-sp="view"] gets --p from 0 (entering) to 1 (leaving). Pages read --p in CSS or listen to "sp" events. */
(function(){
  const els=[...document.querySelectorAll('[data-sp]')];
  if(!els.length) return;
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('a11y-still');
  let ticking=false;
  function run(){
    ticking=false;
    const vh=innerHeight;
    els.forEach(el=>{
      const r=el.getBoundingClientRect();
      let p;
      if(el.dataset.sp==='pin') p=-r.top/Math.max(1,r.height-vh);
      else if(el.dataset.sp==='top') p=-r.top/Math.max(1,r.height);
      else p=(vh-r.top)/(r.height+vh);
      p=Math.min(1,Math.max(0,p));
      if(still) p=el.dataset.sp==='pin'?1:.5;
      if(el._p!==p){el._p=p;el.style.setProperty('--p',p.toFixed(4));el.dispatchEvent(new CustomEvent('sp',{detail:p}))}
    });
  }
  const req=()=>{if(!ticking){ticking=true;requestAnimationFrame(run)}};
  addEventListener('scroll',req,{passive:true});addEventListener('resize',req);run();
  window.refreshScroll=()=>{els.forEach(e=>e._p=-1);run()};
})();

/* count-up for real numbers: <b data-count="2012">2012</b> */
(function(){
  const els=document.querySelectorAll('[data-count]');
  if(!els.length) return;
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; io.unobserve(e.target);
    const el=e.target,to=+el.dataset.count,from=+(el.dataset.from||0),suf=el.dataset.suffix||'',t0=performance.now(),d=1600;
    if(still){el.textContent=to+suf;return}
    const step=t=>{const k=Math.min(1,(t-t0)/d),v=Math.round(from+(to-from)*(1-Math.pow(1-k,3)));el.textContent=v+suf;if(k<1)requestAnimationFrame(step)};
    requestAnimationFrame(step);
  }),{threshold:.6});
  els.forEach(el=>io.observe(el));
})();
