/* LED Center catalogue: prices from the store's own site (before VAT). */
window.CATS = {
  strip:   { name: 'פסי לד',            desc: 'פסי לד בעוצמות שונות, מ-4.8 עד 28 וואט.' },
  profile: { name: 'פרופילי אלומיניום', desc: 'גלויים, שקועים, פינתיים וגמישים. כל הפרופילים מגיעים עם כיסוי פוליקרבונט.' },
  acc:     { name: 'שנאים ואביזרים',    desc: 'שנאי Mean Well, אמצעי תליה, דבקי 3M ונורות Duracell.' }
};

window.PRODUCTS = [
  // strips: w = watt, d = led density (visual), k = light colour
  { id:'strip-4-8',   cat:'strip', name:'פס לד 4.8 וואט',          price:55,     w:4.8,  d:12, k:'warm', photo:'s-48',  spec:'אור רך לתאורה סמויה ולהדגשה', use:['ארונות','מדפים','תאורה סמויה'] },
  { id:'strip-9-6',   cat:'strip', name:'פס לד 9.6 וואט',          price:70,     w:9.6,  d:16, k:'warm', photo:'s-96',  spec:'לתאורת ארונות, מדפים ונישות', use:['מטבחים','נישות','מדפים'] },
  { id:'strip-14-4',  cat:'strip', name:'פס לד 14.4 וואט',         price:86.8,   w:14.4, d:20, k:'warm', photo:'s-144', spec:'עוצמה בינונית לתאורה כללית', use:['תקרות','קורניזים','מטבחים'] },
  { id:'strip-14-4-180', cat:'strip', name:'פס לד 14.4 וואט, 180 לדים', price:125.44, w:14.4, d:30, k:'neutral', photo:'s-144b', tag:'קו אחיד', spec:'צפיפות לדים גבוהה לקו אור רציף בלי נקודות', use:['פרופילים גלויים','קווי אור'] },
  { id:'strip-19-2',  cat:'strip', name:'פס לד 19.2 וואט',         price:149,    w:19.2, d:24, k:'neutral', photo:'s-192', spec:'עוצמה גבוהה לתאורה ראשית', use:['תאורה ראשית','משרדים'] },
  { id:'strip-s-type',cat:'strip', name:'פס לד S TYPE',            price:105,    w:null, d:14, k:'warm', photo:'s-stype', s:true, spec:'פס מתכופף לצדדים, לעיקולים ולאותיות', use:['שילוט','עיקולים','אותיות'] },
  { id:'strip-28-samsung', cat:'strip', name:'פס לד 28 וואט Samsung', price:172.5, w:28, d:34, k:'cool', photo:'s-28', tag:'הכי חזק', spec:"צ'יפים של Samsung, העוצמה הגבוהה בקולקציה", use:['תאורה ראשית','חללים גבוהים'] },

  // profiles: shape drives the drawing
  { id:'profile-7',       cat:'profile', name:'פרופיל 7',            price:80,  shape:'u',      photo:'f-7',      spec:'פרופיל גלוי להרכבה על משטח' },
  { id:'profile-7-rec',   cat:'profile', name:'פרופיל 7 שקוע',       price:50,  shape:'rec',    photo:'f-7r',     spec:'פרופיל שקוע עם שוליים, לגבס ולעץ' },
  { id:'profile-11-rec',  cat:'profile', name:'פרופיל 11 שקוע',      price:50,  shape:'rec2',   photo:'f-11r',    spec:'פרופיל שקוע רחב יותר' },
  { id:'profile-15',      cat:'profile', name:'פרופיל 15',           price:50,  shape:'u2',     photo:'f-15',     spec:'פרופיל גלוי רחב' },
  { id:'profile-15-rec',  cat:'profile', name:'פרופיל 15 שקוע',      price:50,  shape:'rec3',   photo:'f-15r',    spec:'פרופיל שקוע רחב עם שוליים' },
  { id:'profile-corner',  cat:'profile', name:'פרופיל משולש / פינה', price:80,  shape:'corner', photo:'f-corner', spec:'להתקנה בפינה, מאיר באלכסון' },
  { id:'profile-3010',    cat:'profile', name:'פרופיל 3010',         price:90,  shape:'deep',   photo:'f-3010',   spec:'פרופיל עמוק לפיזור אור אחיד' },
  { id:'profile-skinny-40', cat:'profile', name:'פרופיל סקיני 40',   price:110, shape:'skinny', photo:'f-sk40',   spec:'קו אור דק ונקי' },
  { id:'profile-3939',    cat:'profile', name:'פרופיל 3939',         price:110, shape:'square', photo:'f-3939',   spec:'פרופיל מרובע לתלייה או להצמדה' },
  { id:'profile-mini-60', cat:'profile', name:'פרופיל מיני סקיני 60', price:110, shape:'skinny2', photo:'f-mini60', spec:'קו אור רחב בפרופיל נמוך' },
  { id:'profile-skinny-60', cat:'profile', name:'פרופיל סקיני 60',   price:110, shape:'skinny3', photo:'f-sk60',   spec:'קו אור רחב ואחיד' },
  { id:'profile-6070',    cat:'profile', name:'פרופיל 6070',         price:160, shape:'big',    photo:'f-6070',   spec:'פרופיל גדול לגופי תאורה תלויים' },
  { id:'profile-din',     cat:'profile', name:'פרופיל פס דין',       price:195, shape:'din',    photo:'f-din',    spec:'פרופיל מקצועי בגודל פס דין' },
  { id:'profile-flex',    cat:'profile', name:'פרופיל תאורה גמיש',   price:140, shape:'flex',   photo:'f-flex',   tag:'גמיש', spec:'מתכופף לקירות ולקורות מעוגלים' },
  { id:'profile-nero-15', cat:'profile', name:'פרופיל נרו 15',       price:110, shape:'nero',   photo:'f-nero',   spec:'פרופיל מעוצב לתאורה דקורטיבית' },

  // accessories
  { id:'clip-steel',  cat:'acc', name:'קליפס נירוסטה לפרופיל שקוע', price:25, kind:'clip',   photo:'a-clip',     spec:'לקיבוע פרופיל שקוע בלי ברגים' },
  { id:'hanging-set', cat:'acc', name:'סט תליה לגוף תאורה',        price:65, kind:'hang',   photo:'a-set',      spec:'כבלי פלדה, מחברים ותפסנים' },
  { id:'driver',      cat:'acc', name:'שנאי Mean Well',            price:null, kind:'driver', photo:'c-drivers', brand:'Mean Well', spec:'לפי ההספק של הפסים. מחשבון השנאי יעזור לבחור' },
  { id:'tape-3m',     cat:'acc', name:'דבק דו-צדדי 3M VHB',        price:null, kind:'tape',   photo:'c-adhesive', brand:'3M', spec:'להדבקה חזקה של פסים ופרופילים' },
  { id:'bulb',        cat:'acc', name:'נורות לד Duracell',         price:null, kind:'bulb',   photo:'c-bulbs',    brand:'Duracell', spec:'נורות E27 ו-GU10 במגוון עוצמות' }
];

/* ---------- product drawings: one studio style for the whole catalogue ---------- */
(function(){
  const BG='#e6e5e2', L='#2b3036', AL='#c9cfd5', ALD='#9aa3ac', DIF='#f6f7f8';
  const glowC={warm:'#ffc56b',neutral:'#ffe2a8',cool:'#e8f1ff'};
  const chip={warm:'#ffd88a',neutral:'#fff0c4',cool:'#f4f8ff'};
  let n=0;
  const wrap=(inner,defs='')=>`<svg viewBox="0 0 400 400" role="img" aria-hidden="true"><defs>${defs}</defs><rect width="400" height="400" fill="${BG}"/>${inner}</svg>`;
  function strip(p){
    const id='g'+(n++), k=p.k||'warm', count=p.d;
    const defs=`<radialGradient id="${id}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${glowC[k]}" stop-opacity=".75"/><stop offset="1" stop-color="${glowC[k]}" stop-opacity="0"/></radialGradient>`;
    let s=`<ellipse cx="200" cy="232" rx="185" ry="60" fill="url(#${id})"/>`;
    // reel
    s+=`<circle cx="296" cy="150" r="78" fill="#20252b"/><circle cx="296" cy="150" r="60" fill="none" stroke="#f1f3f5" stroke-width="10" opacity=".9"/><circle cx="296" cy="150" r="47" fill="none" stroke="#f1f3f5" stroke-width="7" opacity=".55"/><circle cx="296" cy="150" r="22" fill="${BG}"/><circle cx="296" cy="150" r="22" fill="none" stroke="#3a4148" stroke-width="3"/>`;
    // strip leaving the reel
    if(p.s){
      s+=`<path d="M232 196 L190 222 L150 196 L110 222 L70 196 L32 222" fill="none" stroke="#f4f6f8" stroke-width="16" stroke-linejoin="miter"/>`;
      [[190,222],[150,196],[110,222],[70,196]].forEach(([x,y])=>s+=`<rect x="${x-6}" y="${y-5}" width="12" height="10" rx="1" fill="${chip[k]}" stroke="#d9a441" stroke-width="1"/>`);
    }else{
      s+=`<rect x="24" y="214" width="282" height="20" fill="#f4f6f8" stroke="#cfd5db"/><path d="M270 214 Q300 210 296 228" fill="#f4f6f8"/>`;
      const step=270/count;
      for(let i=0;i<count;i++){const x=34+i*step; s+=`<rect x="${x.toFixed(1)}" y="218" width="${Math.max(4,step*.48).toFixed(1)}" height="12" rx="1" fill="${chip[k]}" stroke="#d9a441" stroke-width=".8"/>`}
    }
    if(p.w) s+=`<text x="40" y="320" font-family="Heebo,Arial" font-size="30" font-weight="600" fill="${L}" direction="ltr">${p.w}W</text>`;
    s+=`<text x="40" y="346" font-family="Heebo,Arial" font-size="14" fill="#6b737c" letter-spacing="2" direction="ltr">LED STRIP</text>`;
    return wrap(s,defs);
  }
  function diffuser(x,y,w,glow){return `<rect x="${x}" y="${y}" width="${w}" height="8" fill="${DIF}" stroke="#cfd5db"/>`+(glow?`<rect x="${x+4}" y="${y+1}" width="${w-8}" height="4" fill="#fff4d6"/>`:'')}
  const shapes={
    u:()=>`<path d="M150 170 V250 H250 V170" fill="none" stroke="${L}" stroke-width="6" stroke-linejoin="miter"/>`+diffuser(150,166,100,1)+`<rect x="170" y="236" width="60" height="8" fill="${L}"/>`,
    u2:()=>`<path d="M125 175 V245 H275 V175" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(125,171,150,1)+`<rect x="165" y="231" width="70" height="8" fill="${L}"/>`,
    rec:()=>`<path d="M110 170 H150 V250 H250 V170 H290" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(150,166,100,1)+`<rect x="170" y="236" width="60" height="8" fill="${L}"/>`,
    rec2:()=>`<path d="M100 165 H140 V255 H260 V165 H300" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(140,161,120,1)+`<rect x="170" y="241" width="60" height="8" fill="${L}"/>`,
    rec3:()=>`<path d="M85 170 H125 V245 H275 V170 H315" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(125,166,150,1)+`<rect x="165" y="231" width="70" height="8" fill="${L}"/>`,
    corner:()=>`<path d="M140 140 V260 H260 Z" fill="none" stroke="${L}" stroke-width="6" stroke-linejoin="miter"/><path d="M146 150 L250 254" stroke="${DIF}" stroke-width="10"/><path d="M152 162 L238 248" stroke="#fff4d6" stroke-width="4"/>`,
    deep:()=>`<path d="M160 130 V270 H240 V130" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(160,126,80,1)+`<rect x="176" y="256" width="48" height="8" fill="${L}"/><path d="M160 200 H240" stroke="${AL}" stroke-width="2" stroke-dasharray="6 6"/>`,
    skinny:()=>`<path d="M100 185 V230 H300 V185" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(100,181,200,1)+`<rect x="160" y="216" width="80" height="8" fill="${L}"/>`,
    skinny2:()=>`<path d="M80 190 V225 H320 V190" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(80,186,240,1)+`<rect x="160" y="211" width="80" height="8" fill="${L}"/>`,
    skinny3:()=>`<path d="M80 180 V235 H320 V180" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(80,176,240,1)+`<rect x="160" y="221" width="80" height="8" fill="${L}"/>`,
    square:()=>`<rect x="140" y="140" width="120" height="120" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(140,250,120,1)+`<rect x="170" y="232" width="60" height="8" fill="${L}"/><path d="M140 180 H260" stroke="${AL}" stroke-width="2"/>`,
    big:()=>`<path d="M110 140 V260 H290 V140 Z" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(110,256,180,1)+`<rect x="150" y="238" width="100" height="8" fill="${L}"/><path d="M110 175 H290" stroke="${AL}" stroke-width="2"/><path d="M200 100 V140" stroke="${ALD}" stroke-width="3"/>`,
    din:()=>`<path d="M120 150 H280 V250 H120 Z" fill="none" stroke="${L}" stroke-width="6"/><path d="M120 150 L100 150 M280 150 L300 150 M120 250 L100 250 M280 250 L300 250" stroke="${L}" stroke-width="6"/>`+diffuser(130,240,140,1)+`<path d="M140 190 H260 M140 205 H260" stroke="${AL}" stroke-width="2"/>`,
    flex:()=>`<path d="M80 250 Q200 120 320 250" fill="none" stroke="${L}" stroke-width="20"/><path d="M80 250 Q200 120 320 250" fill="none" stroke="${DIF}" stroke-width="10"/><path d="M84 249 Q200 124 316 249" fill="none" stroke="#fff4d6" stroke-width="4"/>`,
    nero:()=>`<path d="M150 160 Q150 250 200 250 Q250 250 250 160" fill="none" stroke="${L}" stroke-width="6"/>`+diffuser(150,156,100,1)+`<rect x="175" y="228" width="50" height="8" fill="${L}"/>`
  };
  function profile(p){
    const id='p'+(n++);
    const defs=`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4d6" stop-opacity=".85"/><stop offset="1" stop-color="#fff4d6" stop-opacity="0"/></linearGradient>`;
    let s=`<rect x="70" y="70" width="260" height="260" fill="none" stroke="#d6dbe0" stroke-dasharray="3 6"/>`;
    s+=(shapes[p.shape]||shapes.u)();
    s+=`<path d="M70 300 H330" stroke="#aab2ba" stroke-width="1.2"/><path d="M70 294 V306 M330 294 V306" stroke="#aab2ba" stroke-width="1.2"/>`;
    s+=`<text x="40" y="364" font-family="Heebo,Arial" font-size="14" fill="#6b737c" letter-spacing="2" direction="ltr">ALUMINIUM PROFILE</text>`;
    return wrap(s,defs);
  }
  const acc={
    clip:()=>`<path d="M150 150 H250 V170 H232 V240 L262 270 M150 150 V170 H168 V240 L138 270" fill="none" stroke="${L}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>`,
    hang:()=>`<path d="M160 70 V250 M240 70 V250" stroke="${L}" stroke-width="3"/><rect x="146" y="60" width="28" height="14" fill="${L}"/><rect x="226" y="60" width="28" height="14" fill="${L}"/><rect x="150" y="244" width="20" height="26" rx="3" fill="${ALD}"/><rect x="230" y="244" width="20" height="26" rx="3" fill="${ALD}"/><rect x="110" y="270" width="180" height="22" fill="none" stroke="${L}" stroke-width="5"/><rect x="116" y="290" width="168" height="6" fill="#fff4d6"/>`,
    driver:()=>`<rect x="90" y="150" width="220" height="110" fill="#d7dce1" stroke="${L}" stroke-width="5"/>`+Array.from({length:9},(_,i)=>`<rect x="${112+i*20}" y="170" width="8" height="46" fill="${ALD}"/>`).join('')+`<rect x="110" y="228" width="80" height="18" fill="${L}"/><circle cx="270" cy="237" r="7" fill="#3dbb6c"/><text x="210" y="243" font-family="Heebo,Arial" font-size="13" fill="${L}" direction="ltr">PSU</text>`,
    tape:()=>`<circle cx="200" cy="200" r="100" fill="#d9dee3" stroke="${L}" stroke-width="5"/><circle cx="200" cy="200" r="52" fill="${BG}" stroke="${L}" stroke-width="5"/><circle cx="200" cy="200" r="78" fill="none" stroke="#c8102e" stroke-width="3" stroke-dasharray="4 8"/><path d="M290 240 L345 300" stroke="#d9dee3" stroke-width="22"/>`,
    bulb:()=>`<path d="M200 90 C140 90 120 140 140 180 C152 204 168 214 170 240 H230 C232 214 248 204 260 180 C280 140 260 90 200 90 Z" fill="#f7f8f9" stroke="${L}" stroke-width="5"/><path d="M172 252 H228 M174 268 H226 M180 284 H220" stroke="${L}" stroke-width="7" stroke-linecap="round"/><circle cx="200" cy="160" r="40" fill="#fff4d6" opacity=".8"/>`
  };
  window.drawProduct=function(p){
    if(p.cat==='strip') return strip(p);
    if(p.cat==='profile') return profile(p);
    return wrap(acc[p.kind]()+`<text x="40" y="364" font-family="Heebo,Arial" font-size="14" fill="#6b737c" letter-spacing="2" direction="ltr">ACCESSORY</text>`);
  };
})();

/* lookup, including drivers sized by the calculator (id "driver-150"), only in the sizes the calculator offers */
window.DRIVER_SIZES=[35,50,75,100,150,200,350];
window.findProduct=function(id){
  const p=PRODUCTS.find(x=>x.id===id); if(p) return p;
  const m=/^driver-(\d+)$/.exec(id);
  if(m&&DRIVER_SIZES.includes(+m[1])){const b=PRODUCTS.find(x=>x.id==='driver');return Object.assign({},b,{id,name:'שנאי Mean Well '+m[1]+'W',spec:'הספק '+m[1]+' וואט'})}
};

/* consumer price: Israeli law requires showing the total including VAT */
window.gross=n=>Math.round(n*118)/100;

/* real Google reviews (5.0 from 7 reviews) */
window.REVIEWS=[
  {n:'שני פ.',  t:'שירות אדיב, מקצועי ומסור. מצאנו בחנות שנאי למנורה, שלא היה בשום חנות חשמל אחרת. מומלץ בחום.'},
  {n:'אורלי א.',t:'שירות מקצועי ביותר. צוות יסודי ומקצועי, שנתן לנו הרבה טיפים חשובים. ממליצים בחום.'},
  {n:'אדגר א.', t:'חנות מושלמת לתאורת לד, עם סדנה בתוך החנות שנותנת פתרונות לבעיות בתאורת לד. שירות מהיר ואדיב.'}
];
window.STARS='<span class="stars" role="img" aria-label="דירוג 5 מתוך 5">'+'<svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6L10 15l-5.3 2.9 1.2-6L1.4 7.8l6-.7z"/></svg>'.repeat(5)+'</span>';
window.reviewHTML=r=>`<figure class="review rv">${STARS}<p>${r.t}</p><footer><span>${r.n}</span><span>ביקורת בגוגל</span></footer></figure>`;
