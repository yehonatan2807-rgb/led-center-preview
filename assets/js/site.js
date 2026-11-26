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
/* the phone menu: home first, every link numbered, an arrow at its end */
const sheetNav=[['index.html','דף הבית','home'],...nav].map(([h,t,k],i)=>`<a href="${h}"${k===page?' aria-current="page"':''}><i aria-hidden="true">${String(i+1).padStart(2,'0')}</i><span>${t}</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M13 8H3M6 4.5L2.5 8 6 11.5"/></svg></a>`).join('');
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
const logo=`<svg class="logo__svg" viewBox="0 0 686.87 95.14" aria-hidden="true" focusable="false"><g><g fill="#E8353B"><rect x="0" y="37.12" width="9.54" height="9.54" rx="2.29" transform="rotate(0.02 4.77 41.89)"/><rect x="13.27" y="39.26" width="10.03" height="10.03" rx="2.41" transform="rotate(12.23 18.28 44.27)"/><rect x="26.01" y="44.55" width="10.59" height="10.59" rx="2.54" transform="rotate(25.74 31.3 49.84)"/><rect x="37.32" y="53.42" width="11.23" height="11.23" rx="2.69" transform="rotate(41.87 42.93 59.04)"/><rect x="45.38" y="66.26" width="12.02" height="12.02" rx="2.88" transform="rotate(62.74 51.39 72.26)"/><rect x="47.02" y="82.13" width="13.01" height="13.01" rx="3.12" transform="rotate(89.98 53.53 88.63)"/></g><g fill="#14B06A"><rect x="0" y="24.9" width="9.54" height="9.54" rx="2.29" transform="rotate(0.02 4.78 29.67)"/><rect x="14.46" y="26.38" width="9.99" height="9.99" rx="2.4" transform="rotate(11.02 19.45 31.37)"/><rect x="28.69" y="30.85" width="10.47" height="10.47" rx="2.51" transform="rotate(22.82 33.92 36.08)"/><rect x="41.99" y="38.59" width="11" height="11" rx="2.64" transform="rotate(35.98 47.49 44.08)"/><rect x="53.4" y="49.92" width="11.59" height="11.59" rx="2.78" transform="rotate(51.31 59.2 55.71)"/><rect x="61.3" y="64.82" width="12.26" height="12.26" rx="2.94" transform="rotate(69.45 67.43 70.95)"/><rect x="63.67" y="82.12" width="13.01" height="13.01" rx="3.12" transform="rotate(89.98 70.18 88.63)"/></g><g fill="#2D6CEB"><rect x="0.01" y="12.69" width="9.54" height="9.54" rx="2.29" transform="rotate(0.02 4.78 17.46)"/><rect x="13.27" y="13.31" width="9.89" height="9.89" rx="2.37" transform="rotate(8.62 18.21 18.25)"/><rect x="26.42" y="15.98" width="10.25" height="10.25" rx="2.46" transform="rotate(17.49 31.54 21.1)"/><rect x="39.41" y="20.9" width="10.64" height="10.64" rx="2.55" transform="rotate(27 44.73 26.22)"/><rect x="51.87" y="28.34" width="11.05" height="11.05" rx="2.65" transform="rotate(37.44 57.4 33.87)"/><rect x="62.94" y="38.29" width="11.5" height="11.5" rx="2.76" transform="rotate(48.83 68.69 44.04)"/><rect x="71.98" y="50.82" width="11.97" height="11.97" rx="2.87" transform="rotate(61.44 77.97 56.8)"/><rect x="78.09" y="65.67" width="12.47" height="12.47" rx="2.99" transform="rotate(75.28 84.32 71.91)"/><rect x="80.33" y="82.11" width="13.01" height="13.01" rx="3.12" transform="rotate(89.98 86.83 88.62)"/></g><g fill="#FFA51C"><rect x="0.01" y="0.48" width="9.54" height="9.54" rx="2.29" transform="rotate(0.02 4.78 5.25)"/><rect x="12.37" y="0.56" width="9.82" height="9.82" rx="2.36" transform="rotate(7.02 17.28 5.48)"/><rect x="25.11" y="2.26" width="10.12" height="10.12" rx="2.43" transform="rotate(14.38 30.17 7.33)"/><rect x="37.53" y="5.61" width="10.43" height="10.43" rx="2.5" transform="rotate(21.86 42.75 10.82)"/><rect x="49.82" y="10.78" width="10.75" height="10.75" rx="2.58" transform="rotate(29.81 55.2 16.15)"/><rect x="61.62" y="17.91" width="11.09" height="11.09" rx="2.66" transform="rotate(38.32 67.17 23.46)"/><rect x="72.54" y="27.1" width="11.44" height="11.44" rx="2.75" transform="rotate(47.46 78.26 32.83)"/><rect x="82.09" y="38.37" width="11.81" height="11.81" rx="2.84" transform="rotate(57.28 88 44.28)"/><rect x="89.64" y="51.42" width="12.2" height="12.2" rx="2.93" transform="rotate(67.64 95.74 57.52)"/><rect x="94.79" y="66.21" width="12.6" height="12.6" rx="3.02" transform="rotate(78.64 101.08 72.51)"/><rect x="96.98" y="82.11" width="13.01" height="13.01" rx="3.12" transform="rotate(89.98 103.49 88.61)"/></g></g><g><path fill="currentColor" d="M182.95 95.14L147.26 95.14L147.26 81.81L182.95 81.81ZM152.78 95.14L136.22 95.14L136.22 24.05L152.78 24.05ZM238.1 95.14L200.55 95.14L200.55 81.81L238.1 81.81ZM206.12 95.14L189.51 95.14L189.51 24.05L206.12 24.05ZM233.22 65.06L200.55 65.06L200.55 52.17L233.22 52.17ZM238.1 37.43L200.55 37.43L200.55 24.05L238.1 24.05ZM251.65 95.14L251.65 81.81L267.18 81.81Q272.4 81.81 275.97 79.47Q279.53 77.12 281.36 72.48Q283.19 67.85 283.19 61.01L283.19 58.13Q283.19 51.24 281.36 46.65Q279.53 42.06 275.97 39.74Q272.4 37.43 267.13 37.43L251.36 37.43L251.36 24.05L267.13 24.05Q276.8 24.05 284.2 28.37Q291.59 32.69 295.79 40.38Q299.99 48.07 299.99 58.23L299.99 61.01Q299.99 71.12 295.79 78.81Q291.59 86.5 284.22 90.82Q276.85 95.14 267.18 95.14ZM261.17 95.14L244.57 95.14L244.57 24.05L261.17 24.05Z"/><path fill="currentColor" d="M377.17 72.78Q376.44 79.71 373.26 84.98Q370.09 90.26 364.45 93.19Q358.81 96.12 350.61 96.12Q342.36 96.12 336.23 92.09Q330.1 88.06 326.71 80.74Q323.31 73.41 323.31 63.65L323.31 55.59Q323.31 45.77 326.73 38.47Q330.15 31.18 336.42 27.12Q342.7 23.07 351.24 23.07Q359.06 23.07 364.6 25.95Q370.14 28.83 373.29 34.1Q376.44 39.38 377.17 46.56L369.46 46.56Q368.38 38.5 364.16 33.98Q359.93 29.47 351.24 29.47Q344.8 29.47 340.31 32.71Q335.81 35.96 333.45 41.8Q331.08 47.63 331.08 55.49L331.08 63.65Q331.08 71.02 333.27 76.95Q335.47 82.88 339.82 86.33Q344.16 89.77 350.61 89.77Q356.76 89.77 360.62 87.82Q364.48 85.86 366.58 82.05Q368.67 78.25 369.46 72.78ZM435.51 95.14L396.74 95.14L396.74 88.79L435.51 88.79ZM398.55 95.14L390.83 95.14L390.83 24.05L398.55 24.05ZM430.53 61.64L396.74 61.64L396.74 55.3L430.53 55.3ZM435.17 30.44L396.74 30.44L396.74 24.05L435.17 24.05ZM501.53 95.14L493.76 95.14L455.43 37.18L455.43 95.14L447.72 95.14L447.72 24.05L455.43 24.05L493.86 82.1L493.86 24.05L501.53 24.05ZM543.95 95.14L536.33 95.14L536.33 24.05L543.95 24.05ZM567.53 30.44L512.75 30.44L512.75 24.05L567.53 24.05ZM623.29 95.14L584.52 95.14L584.52 88.79L623.29 88.79ZM586.33 95.14L578.62 95.14L578.62 24.05L586.33 24.05ZM618.31 61.64L584.52 61.64L584.52 55.3L618.31 55.3ZM622.95 30.44L584.52 30.44L584.52 24.05L622.95 24.05ZM658.74 24.05Q666.46 24.05 671.95 26.46Q677.44 28.88 680.37 33.59Q683.3 38.3 683.3 45.19Q683.3 50.12 681.25 54.17Q679.2 58.23 675.47 61.01Q671.73 63.79 666.75 65.01L664.41 65.94L641.02 65.94L641.02 59.59L659.52 59.59Q664.89 59.59 668.43 57.59Q671.97 55.59 673.76 52.29Q675.54 49 675.54 45.19Q675.54 38.4 671.36 34.42Q667.19 30.44 658.74 30.44L643.17 30.44L643.17 95.14L635.45 95.14L635.45 24.05ZM660.3 63.11L668.46 63.11L686.38 94.51L686.38 95.14L678.13 95.14Z"/></g></svg>`;

document.body.insertAdjacentHTML('afterbegin',`
<a class="skip" href="#main">דלגו לתוכן</a>
<header class="hdr"><div class="wrap hdr__bar">
  <a class="logo" href="index.html">${logo}<span class="sr">לד סנטר, לדף הבית</span></a>
  <nav class="nav" aria-label="ראשי">${navHtml}</nav>
  <div class="hdr__act">
    <a class="hdr__tel" href="tel:+972722500885">072-2500885</a>
    <button class="icon-btn" type="button" data-cart-open aria-label="סל ההזמנה">${ic.bag}<span class="badge" data-n="0">0</span></button>
    <button class="icon-btn menu-btn" type="button" data-menu aria-expanded="false" aria-controls="sheet" aria-label="תפריט">${ic.menu}</button>
  </div>
</div></header>
<div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-label="תפריט" aria-hidden="true" inert>
  <div class="sheet__top"><button class="icon-btn sheet__close" type="button" data-menu-close aria-label="סגירת תפריט">${ic.x}</button><p class="sheet__label">לד סנטר · ירושלים</p></div>
  <nav class="sheet__nav" aria-label="תפריט נייד">${sheetNav}</nav>
  <div class="sheet__foot">
    <p data-open-now></p>
    <div class="sheet__act"><a class="btn btn--wa" href="https://wa.me/${WA}" target="_blank" rel="noopener">${ic.wa}וואטסאפ</a><a class="btn btn--ghost-l" href="tel:+972722500885">072-2500885</a></div>
    <p class="sheet__addr">רחוב רבקה 19, תלפיות · בתוך ביג אמפוריו</p>
  </div>
</div>`);

const hoursDl=`<dl class="hours" data-hours>${HOURS.map(([d,h],i)=>`<dt data-day="${i}">${d}</dt><dd data-day="${i}">${h}</dd>`).join('')}</dl>`;
window.HOURS_HTML=hoursDl;
document.body.insertAdjacentHTML('beforeend',`
<footer class="foot"><div class="wrap">
  <div class="foot__grid">
    <div class="foot__brand"><a class="logo" href="index.html" style="color:var(--on-dark)">${logo}<span class="logo__he" style="color:var(--on-dark-muted)">לד סנטר בע״מ</span><span class="sr">, לדף הבית</span></a>
      <p>ייצור, ייבוא ושיווק תאורת לד. ייעוץ, תכנון ותיקונים בחנות בתלפיות, ירושלים.</p>
      <div class="socials"><a href="https://www.facebook.com/yLedCenter/" aria-label="פייסבוק">${ic.fb}</a><a href="https://www.instagram.com/yehuda_shilo/" aria-label="אינסטגרם">${ic.ig}</a></div></div>
    <div><h2>האתר</h2><ul>${nav.map(([h,t])=>`<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
    <div><h2>יצירת קשר</h2><ul><li><a href="tel:+972722500885">משרד 072-2500885</a></li><li><a href="tel:+972547543820">נייד 054-7543820</a></li><li><a href="https://wa.me/${WA}">וואטסאפ</a></li><li><a href="${MAPS}">רחוב רבקה 19, תלפיות<br>(בתוך ביג אמפוריו)</a></li></ul></div>
    <div><h2>שעות פתיחה</h2>${hoursDl}</div>
  </div>
  <div class="foot__row"><span>© ${new Date().getFullYear()} לד סנטר בע״מ · המחירים באתר כוללים מע״מ · צילומי השראה: Unsplash</span><nav aria-label="משפטי"><a href="accessibility.html">הצהרת נגישות</a><a href="terms.html">תקנון ופרטיות</a></nav></div>
</div></footer>
<div class="scrim" data-cart-close></div>
<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="drawer-h" inert>
  <div class="drawer__head"><h2 id="drawer-h">סל ההזמנה</h2><button class="icon-btn" type="button" data-cart-close aria-label="סגירת הסל">${ic.x}</button></div>
  <ul class="drawer__list" id="cart-lines"></ul>
  <div class="drawer__foot">
    <div class="sum sum--t"><span>סה״כ כולל מע״מ</span><span class="num" id="cart-tot">0 ₪</span></div>
    <a class="btn btn--wa" id="cart-send" href="#" target="_blank" rel="noopener">${ic.wa}שליחת ההזמנה בוואטסאפ</a>
    <p>ההזמנה נשלחת ליהודה לאישור מלאי ומחיר. התשלום והאיסוף בחנות או במשלוח בתיאום.</p>
  </div>
</aside>
<div role="complementary" aria-label="קיצורים: וואטסאפ ונגישות">
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
</div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>`);

/* links to the Google Maps listing (reviews, directions) */
document.querySelectorAll('a[data-maps]').forEach(a=>a.href=MAPS);

/* menu and cart are modal panels: while closed they are inert (not reachable by Tab or a screen reader);
   opening one moves focus into it and makes the rest of the page inert, closing it returns focus to where it was */
let opener=null;
const panelBg=()=>[...document.body.children].filter(e=>!e.matches('.sheet,.drawer,.scrim,.toast,script'));
const setPanel=(c,on)=>{
  if(c.classList.contains('is-open')===on) return;
  c.classList.toggle('is-open',on);c.setAttribute('aria-hidden',String(!on));c.inert=!on;
  panelBg().forEach(e=>e.inert=on);
  document.body.style.overflow=on?'hidden':'';
  if(on){opener=document.activeElement;requestAnimationFrame(()=>{const f=c.querySelector('button,a[href]');f&&f.focus()})}
  else{if(opener&&document.contains(opener))opener.focus();opener=null}
};
const sheet=document.getElementById('sheet'),mb=document.querySelector('[data-menu]');
const setMenu=v=>{setPanel(sheet,v);mb.setAttribute('aria-expanded',String(v))};
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
const P=id=>window.findProduct?findProduct(id):undefined;
/* the saved cart is checked on load: only products that still exist, with whole quantities from 1 to 999 */
let cart={};try{const raw=JSON.parse(localStorage.getItem('lc-cart')||'{}');for(const id in raw){const q=Math.floor(+raw[id]);if(P(id)&&q>0)cart[id]=Math.min(q,999)}}catch(e){}
const save=()=>{try{localStorage.setItem('lc-cart',JSON.stringify(cart))}catch(e){}};
save();
const cartIds=()=>Object.keys(cart).filter(P);
function renderCart(){
  const ids=cartIds();
  const count=ids.reduce((a,id)=>a+cart[id],0);
  document.querySelectorAll('.badge').forEach(b=>{b.textContent=count;b.dataset.n=count});
  let sub=0,ask=false;
  const list=document.getElementById('cart-lines');
  list.innerHTML=ids.length?ids.map(id=>{const p=P(id),q=cart[id];if(p.price!=null)sub+=gross(p.price)*q;else ask=true;
    return `<li class="dl"><div><b>${p.name}</b><small>${p.price!=null?fmt(gross(p.price))+' ליחידה':'מחיר לפי דגם'}</small></div><div class="qty"><button type="button" data-dec="${id}" aria-label="הפחתת כמות: ${p.name}">−</button><span aria-label="כמות ${q}">${q}</span><button type="button" data-inc="${id}" aria-label="הוספת כמות: ${p.name}">+</button></div></li>`}).join('')
    :'<li class="drawer__empty">הסל ריק.<br><a class="link" href="shop.html">לחנות</a></li>';
  sub=Math.round(sub*100)/100;
  document.getElementById('cart-tot').textContent=fmt(sub)+(ask?' +':'');
  const msg='שלום לד סנטר, אשמח להזמין:\n'+ids.map(id=>{const p=P(id);return `• ${p.name} × ${cart[id]}`+(p.price!=null?` (${fmt(Math.round(gross(p.price)*cart[id]*100)/100)})`:'')}).join('\n')+`\nסה"כ כולל מע"מ: ${fmt(sub)}${ask?' + פריטים לפי הצעה':''}`;
  document.getElementById('cart-send').href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}
const calm=()=>matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('a11y-still');
const bump=()=>{if(calm())return;document.querySelectorAll('.badge').forEach(b=>b.animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:260,easing:'cubic-bezier(.23,1,.32,1)'}))};
window.addToCart=(id,q=1)=>{if(!P(id))return;cart[id]=Math.min(999,(cart[id]||0)+q);save();renderCart();bump();say('נוסף לסל ההזמנה')};
const drawer=document.getElementById('drawer'),scrim=document.querySelector('.scrim');
const setCart=v=>{setPanel(drawer,v);scrim.classList.toggle('is-open',v)};
window.openCart=()=>setCart(true);
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-add]');
  if(a){addToCart(a.dataset.add,+(a.dataset.qty||1));if(a.classList.contains('add')){a.classList.add('is-added');const t=a.lastChild.textContent;a.lastChild.textContent='נוסף';setTimeout(()=>{a.classList.remove('is-added');a.lastChild.textContent=t},1300)}return}
  const i=e.target.closest('[data-inc]');if(i){const id=i.dataset.inc;cart[id]=Math.min(999,(cart[id]||0)+1);save();renderCart();drawer.querySelector(`[data-inc="${id}"]`)?.focus();return}
  const d=e.target.closest('[data-dec]');if(d){const id=d.dataset.dec;cart[id]--;if(cart[id]<=0)delete cart[id];save();renderCart();(drawer.querySelector(`[data-dec="${id}"]`)||drawer.querySelector('[data-cart-close]')).focus();return}
  if(e.target.closest('[data-cart-open]'))setCart(true);
  if(e.target.closest('[data-cart-close]'))setCart(false);
  if(e.target.closest('#cart-send')&&!cartIds().length){e.preventDefault();say('הסל ריק עדיין')}
});
renderCart();

/* accessibility menu, choices remembered on this device */
const a11y=document.getElementById('a11y'),ab=document.querySelector('[data-a11y]');
const setA11y=(v,back)=>{if(a11y.classList.contains('is-open')===v)return;a11y.classList.toggle('is-open',v);ab.setAttribute('aria-expanded',String(v));if(v)requestAnimationFrame(()=>a11y.querySelector('button').focus());else if(back)ab.focus()};
ab.addEventListener('click',()=>setA11y(!a11y.classList.contains('is-open'),true));
document.addEventListener('click',e=>{if(!a11y.contains(e.target)&&!ab.contains(e.target))setA11y(false)});
let modes=[];try{modes=JSON.parse(localStorage.getItem('lc-a11y')||'[]')}catch(e){}
const applyModes=()=>{['big','contrast','links','still','font'].forEach(m=>{document.documentElement.classList.toggle('a11y-'+m,modes.includes(m));const b=a11y.querySelector(`[data-mode="${m}"]`);b&&b.setAttribute('aria-pressed',String(modes.includes(m)))});try{localStorage.setItem('lc-a11y',JSON.stringify(modes))}catch(e){}
  /* pinned scroll scenes re-measure, so "stop animations" and larger text take effect without a reload */
  window.refreshScroll&&requestAnimationFrame(()=>refreshScroll());window.dispatchEvent(new Event('resize'))};
a11y.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(b){const m=b.dataset.mode;modes=modes.includes(m)?modes.filter(x=>x!==m):[...modes,m];applyModes()}if(e.target.closest('[data-reset]')){modes=[];applyModes()}});
applyModes();

addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);setCart(false);setA11y(false,a11y.contains(document.activeElement))}});

/* reveal on scroll */
document.body.classList.remove('no-js');
/* the stagger delay is cleared once an element has appeared, so later hover and filter changes are not delayed */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const el=en.target;el.classList.add('in');io.unobserve(el);setTimeout(()=>{el.style.transitionDelay=''},1200)}}),{rootMargin:'0px 0px -6% 0px'});
window.observeReveal=()=>document.querySelectorAll('.rv:not(.in)').forEach((el,i)=>{el.style.transitionDelay=(i%4)*60+'ms';io.observe(el)});
observeReveal();

/* product card markup, shared by home, shop and product pages: text only, no picture */
window.cardHTML=p=>`<article class="pcard rv" data-cat="${p.cat}">
  <div class="pcard__top"><span class="pcard__cat">${CATS[p.cat].name}</span>${p.tag?`<span class="pcard__tag">${p.tag}</span>`:''}</div>
  <a class="pcard__name" href="product.html?id=${p.id}">${p.name}</a><p class="pcard__spec">${p.spec}</p>
  <div class="pcard__row">${p.price!=null?`<span class="price"><b class="num">${fmt(gross(p.price))}</b><small>כולל מע״מ</small></span>`:`<span class="price price--ask"><b>מחיר לפי דגם</b><small>נשלח הצעה</small></span>`}
  <button class="add" type="button" data-add="${p.id}" aria-label="הוספה לסל: ${p.name}"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>הוספה לסל</button></div></article>`;
})();

/* scroll progress: [data-sp="pin"] gets --p from 0 to 1 while its first child is stuck (sticky),
   [data-sp="view"] gets --p from 0 (entering) to 1 (leaving). Pages read --p in CSS or listen to "sp" events. */
(function(){
  const els=[...document.querySelectorAll('[data-sp]')];
  if(!els.length) return;
  const root=document.documentElement;
  const still=()=>matchMedia('(prefers-reduced-motion: reduce)').matches||root.classList.contains('a11y-still');
  let ticking=false;
  function progress(el,vh){
    const r=el.getBoundingClientRect(),k=el.dataset.sp;
    if(k==='pin'){
      /* measured from where the pin actually sticks (its CSS top, below the header) to where it lets go,
         so there is no dead scroll at either end and the phone toolbar showing or hiding does not matter */
      const pin=el.firstElementChild,cs=getComputedStyle(pin);
      if(cs.position!=='sticky') return 1; // unpinned (phones, landscape, reduced motion): show the finished state
      return ((parseFloat(cs.top)||0)-r.top)/Math.max(1,r.height-pin.offsetHeight);
    }
    if(k==='top') return -r.top/Math.max(1,r.height);
    return (vh-r.top)/(r.height+vh);
  }
  function run(){
    ticking=false;
    const vh=innerHeight,calm=still();
    /* read every position first, then write, so the browser lays the page out once per frame */
    const ps=els.map(el=>calm?(el.dataset.sp==='pin'?1:.5):progress(el,vh));
    els.forEach((el,i)=>{
      const p=Math.min(1,Math.max(0,ps[i]));
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
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; io.unobserve(e.target);
    const el=e.target,to=+el.dataset.count,from=+(el.dataset.from||0),suf=el.dataset.suffix||'',t0=performance.now(),d=1600;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('a11y-still')){el.textContent=to+suf;return}
    const step=t=>{const k=Math.min(1,(t-t0)/d),v=Math.round(from+(to-from)*(1-Math.pow(1-k,3)));el.textContent=v+suf;if(k<1)requestAnimationFrame(step)};
    requestAnimationFrame(step);
  }),{threshold:.6});
  els.forEach(el=>io.observe(el));
})();

/* giant headings that cross a photo (home About, About page): the white copy is laid exactly over the real
   heading, inside the photo frame; the lines rise into view once, or stand still for reduced motion */
(function(){
  const duos=[...document.querySelectorAll('.duo')];
  if(!duos.length) return;
  const calm=()=>matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('a11y-still');
  const place=()=>duos.forEach(d=>{
    const h=d.querySelector('.giant--ink'),w=d.querySelector('.giant--light'),m=d.querySelector('.duo__media');
    if(!h||!w||!m) return;
    const hr=h.getBoundingClientRect(),mr=m.getBoundingClientRect();
    w.style.width=hr.width+'px';w.style.left=(hr.left-mr.left)+'px';w.style.top=(hr.top-mr.top)+'px';w.classList.add('is-set');
  });
  place();addEventListener('resize',place);addEventListener('load',place);document.fonts&&document.fonts.ready.then(place);
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{threshold:.3});
  duos.forEach(d=>calm()?d.classList.add('is-in'):io.observe(d));
})();
