/* Driver calculator: strip watts per metre x length, plus 20% headroom, to the next Mean Well size. */
(function(){
  const SIZES=[35,50,75,100,150,200,350];
  window.driverFor=function(totalW){
    const need=totalW*1.2;
    if(!totalW) return null;
    const one=SIZES.find(s=>s>=need);
    if(one) return {count:1,size:one,need};
    const n=Math.ceil(need/350);
    return {count:n,size:350,need};
  };
  const strips=()=>PRODUCTS.filter(p=>p.cat==='strip'&&p.w);
  const num=v=>{const x=parseFloat(String(v).replace(',','.'));return isFinite(x)&&x>0?x:0};
  const fmtW=w=>(Math.round(w*10)/10).toLocaleString('he-IL')+'W';
  window.initMiniCalc=function(){
    const s=document.getElementById('m-strip'),l=document.getElementById('m-len');
    s.innerHTML=strips().map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
    s.value='strip-14-4';
    const run=()=>{const p=findProduct(s.value),w=p.w*num(l.value),d=driverFor(w);
      document.getElementById('m-w').textContent=fmtW(w);
      document.getElementById('m-d').textContent=d?(d.count>1?d.count+' × ':'')+d.size+'W':'-'};
    s.addEventListener('change',run);l.addEventListener('input',run);run();
  };
  window.initCalc=function(){
    const rows=document.getElementById('c-rows'),add=document.getElementById('c-add');
    const opts=strips().map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
    let k=0;
    function row(id='strip-14-4',len='5'){
      const i=k++;
      rows.insertAdjacentHTML('beforeend',`<div class="crow" data-row>
        <div class="field"><label for="cs${i}">פס לד</label><select class="select" id="cs${i}" data-s>${opts}</select></div>
        <div class="field"><label for="cl${i}">אורך (מטר)</label><input class="input" id="cl${i}" data-l type="text" inputmode="decimal" value="${len}"></div>
        <button class="icon-btn" type="button" data-rm aria-label="הסרת שורה"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`);
      rows.lastElementChild.querySelector('[data-s]').value=id;
      run();
    }
    function run(){
      let total=0;const parts=[];
      rows.querySelectorAll('[data-row]').forEach(r=>{const p=findProduct(r.querySelector('[data-s]').value),m=num(r.querySelector('[data-l]').value);total+=p.w*m;if(m)parts.push({p,m})});
      const d=driverFor(total);
      document.getElementById('c-total').textContent=fmtW(total);
      document.getElementById('c-need').textContent=fmtW(total*1.2);
      document.getElementById('c-driver').textContent=d?(d.count>1?d.count+' × ':'')+'Mean Well '+d.size+'W':'-';
      document.getElementById('c-note').textContent=!d?'הזינו אורך כדי לקבל המלצה.':d.count>1?'ההספק גבוה משנאי אחד. מחלקים את הפסים לכמה מעגלים, שנאי לכל מעגל.':'שנאי אחד מספיק לכל הפסים.';
      const btn=document.getElementById('c-addcart');
      btn.disabled=!d;btn.dataset.size=d?d.size:'';btn.dataset.count=d?d.count:'';btn.dataset.parts=JSON.stringify(parts.map(x=>[x.p.id,x.m]));
    }
    rows.addEventListener('input',run);rows.addEventListener('change',run);
    rows.addEventListener('click',e=>{const b=e.target.closest('[data-rm]');if(b&&rows.children.length>1){b.closest('[data-row]').remove();run()}});
    add.addEventListener('click',()=>row('strip-9-6','2'));
    document.getElementById('c-addcart').addEventListener('click',e=>{
      const b=e.currentTarget;if(!b.dataset.size)return;
      addToCart('driver-'+b.dataset.size,+b.dataset.count);
      openCart();
    });
    row();
  };
})();
