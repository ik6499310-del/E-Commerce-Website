const $=i=>document.getElementById(i),rs=n=>"₹"+n.toLocaleString("en-IN"),RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
let adm=false;try{adm=sessionStorage.getItem("adm")=="1"}catch(e){}
const AH="4f08f7e3d4ab111e5674240c6a4971fa076b025f1b5d3d27aa31b4b3aa17962c";
const CL=["S","M","L","XL","XXL"],PN=["28","30","32","34","36"],SH=["7","8","9","10","11"];
const P=[
{id:1,n:"Oxford Shirt",t:"shirt",c:"Shirts",p:1799,m:2299,a:"#6ea8ff",b:"#fff",bg:"#e3eeff",r:4.6,v:312,tag:"Bestseller",d:"Crisp cotton oxford with a button-down collar. Dress it up or roll the sleeves."},
{id:2,n:"Linen Stripe Shirt",t:"shirt",c:"Shirts",p:1999,m:2499,a:"#f2e2b5",b:"#1b2cc1",bg:"#fff4d6",pat:"stripe",r:4.4,v:148,tag:"New",d:"Breathable linen blend with a relaxed fit. Made for hot afternoons."},
{id:3,n:"Heavy Tee",t:"tee",c:"T-Shirts",p:899,m:1199,a:"#0e1033",b:"#ffd23f",bg:"#e4e4f2",r:4.7,v:529,tag:"Bestseller",d:"240 GSM cotton that holds its shape wash after wash."},
{id:4,n:"Sunset Tee",t:"tee",c:"T-Shirts",p:1099,m:1399,a:"#ff5c4d",b:"#ffd23f",bg:"#ffe3df",pat:"sun",r:4.5,v:210,tag:"New",d:"Soft jersey tee with a sunset print on the chest."},
{id:5,n:"Slim Chinos",t:"pant",c:"Pants",p:2199,m:2799,a:"#c9a66b",b:"#8a6d3b",bg:"#f6ead2",r:4.5,v:260,d:"Stretch cotton chinos with a tapered leg. Easy from office to weekend."},
{id:6,n:"Cargo Pants",t:"pant",c:"Pants",p:2499,m:3199,a:"#667a4a",b:"#3f4d2c",bg:"#e3ecd5",pat:"cargo",r:4.3,v:174,d:"Utility pockets, relaxed fit and a tough ripstop weave."},
{id:7,n:"Raw Denim Jeans",t:"pant",c:"Pants",p:2799,m:3599,a:"#243b7a",b:"#f4c36b",bg:"#dfe6fb",pat:"denim",r:4.8,v:402,tag:"Bestseller",d:"Heavyweight selvedge denim that fades to your fit."},
{id:8,n:"Zip Hoodie",t:"hoodie",c:"Hoodies",p:2999,m:3799,a:"#8a3ffc",b:"#ffd23f",bg:"#ece1ff",pat:"zip",r:4.6,v:287,d:"Brushed fleece full-zip hoodie with a deep, warm hood."},
{id:9,n:"Cloud Hoodie",t:"hoodie",c:"Hoodies",p:2699,m:3299,a:"#aab0d6",b:"#fff",bg:"#eceefa",r:4.4,v:133,tag:"New",d:"Oversized pullover in cloud-soft fleece with a front pocket."},
{id:10,n:"Bomber Jacket",t:"jacket",c:"Jackets",p:4499,m:5999,a:"#19806a",b:"#0e1033",bg:"#d8f1ea",r:4.7,v:96,tag:"Limited",d:"Lightweight bomber with ribbed collar, cuffs and a front zip."},
{id:11,n:"Blaze Runner",t:"shoe",c:"Shoes",p:4999,m:6499,a:"#ff5c4d",b:"#0e1033",bg:"#ffe3df",r:4.6,v:611,tag:"Bestseller",d:"Cushioned daily trainer with a breathable mesh upper."},
{id:12,n:"Cloud Walker",t:"shoe",c:"Shoes",p:3499,m:4499,a:"#1b2cc1",b:"#ffd23f",bg:"#dfe2ff",r:4.5,v:340,d:"Everyday lace-ups with a lightweight foam sole."},
{id:13,n:"Sunny Hi-Top",t:"shoe",c:"Shoes",p:3999,m:4999,a:"#ffd23f",b:"#1b2cc1",bg:"#fff4c9",r:4.4,v:188,d:"High-top street sneaker with a padded ankle."},
{id:14,n:"Street Cap",t:"cap",c:"Accessories",p:699,m:999,a:"#ffd23f",b:"#0e1033",bg:"#fff4c9",r:4.3,v:455,d:"Six-panel cotton cap with an adjustable strap."}];
const D="rgba(0,0,0,.16)",L="rgba(255,255,255,.3)";
function art(p){const a=p.a,b=p.b;let s="";
if(p.t=="shirt")s='<path d="M64 38L38 52 18 104l22 8 12-20v80h96V92l12 20 22-8-20-52-26-14Q100 58 64 38Z" fill="'+a+'"/>'+(p.pat=="stripe"?[66,80,94,108,122,136].map(x=>'<path d="M'+x+' 66V172" stroke="'+b+'" stroke-width="4" opacity=".55"/>').join(""):"")+'<path d="M64 38Q100 58 136 38 100 78 64 38Z" fill="'+D+'"/><path d="M64 38l20-2 16 28-18 10ZM136 38l-20-2-16 28 18 10Z" fill="#fff" opacity=".92"/><path d="M100 64V172" stroke="'+D+'" stroke-width="2"/>'+[88,110,132,154].map(y=>'<circle cx="100" cy="'+y+'" r="2.6" fill="#fff"/>').join("")+'<rect x="112" y="94" width="22" height="22" rx="3" fill="none" stroke="'+D+'" stroke-width="2"/><path d="M52 92v80" stroke="'+L+'" stroke-width="3"/>';
else if(p.t=="tee")s='<path d="M70 38L40 52 22 92l24 12 10-16v82h88V88l10 16 24-12-18-40-30-14Q100 56 70 38Z" fill="'+a+'"/><path d="M70 38Q100 78 130 38Q100 56 70 38Z" fill="'+D+'"/><path d="M70 38Q100 56 130 38" fill="none" stroke="'+b+'" stroke-width="4"/><path d="M56 88v82" stroke="'+L+'" stroke-width="3"/>'+(p.pat=="sun"?'<circle cx="100" cy="114" r="20" fill="'+b+'"/><path d="M70 150h60M78 158h44" stroke="'+b+'" stroke-width="4" stroke-linecap="round"/>':'<text x="100" y="118" text-anchor="middle" font-size="22" font-weight="800" fill="'+b+'" font-family="sans-serif">STRIDE</text>');
else if(p.t=="pant")s='<path d="M58 20h84l10 40 4 122h-48l-8-102-8 102H44l4-122Z" fill="'+a+'"/><path d="M58 20h84v12H58Z" fill="'+D+'"/>'+[70,88,112,130].map(x=>'<rect x="'+(x-2)+'" y="16" width="4" height="12" rx="1" fill="'+D+'"/>').join("")+'<path d="M100 32v48" stroke="'+D+'" stroke-width="2"/><path d="M62 34q14 18 28 4M138 34q-14 18-28 4" fill="none" stroke="'+D+'" stroke-width="2"/>'+(p.pat=="cargo"?'<rect x="50" y="100" width="24" height="30" rx="3" fill="'+b+'" opacity=".55"/><rect x="126" y="100" width="24" height="30" rx="3" fill="'+b+'" opacity=".55"/>':"")+(p.pat=="denim"?'<path d="M52 62l-4 118M148 62l4 118" fill="none" stroke="'+b+'" stroke-width="2" stroke-dasharray="4 3"/>':"")+'<path d="M50 120l-2 62" stroke="'+L+'" stroke-width="3"/>';
else if(p.t=="hoodie")s='<path d="M70 56L36 70 20 150l24 6 8-46v64h96v-64l8 46 24-6-16-80-34-14Q100 80 70 56Z" fill="'+a+'"/><path d="M66 58Q70 18 100 16Q130 18 134 58Q100 86 66 58Z" fill="'+a+'"/><path d="M66 58Q70 18 100 16Q130 18 134 58Q100 86 66 58Z" fill="'+D+'"/><path d="M78 52Q100 30 122 52Q100 74 78 52Z" fill="rgba(0,0,0,.4)"/>'+(p.pat=="zip"?'<path d="M100 74V174" stroke="'+b+'" stroke-width="3" stroke-dasharray="3 2"/>':'<path d="M92 74l-2 30M108 74l2 30" stroke="'+b+'" stroke-width="3" stroke-linecap="round"/><circle cx="90" cy="106" r="3" fill="'+b+'"/><circle cx="110" cy="106" r="3" fill="'+b+'"/>')+'<path d="M68 134h64l10 34H58Z" fill="'+D+'"/><path d="M52 166h96v8H52Z" fill="'+D+'"/>';
else if(p.t=="jacket")s='<path d="M66 46L34 60 16 150l26 6 10-48v56h96v-56l10 48 26-6-18-90-32-14Q100 62 66 46Z" fill="'+a+'"/><path d="M66 40Q100 66 134 40v14Q100 80 66 54Z" fill="'+b+'"/><path d="M52 160h96v14H52Z" fill="'+b+'"/><path d="M16 150l26 6-2 12-28-6Zm168 0l-26 6 2 12 28-6Z" fill="'+b+'"/><path d="M100 70V160" stroke="#fff" stroke-width="3" stroke-dasharray="3 2"/><path d="M62 118l16 4M138 118l-16 4" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><path d="M52 110v50" stroke="'+L+'" stroke-width="3"/>';
else if(p.t=="cap")s='<path d="M32 118Q30 54 100 50Q170 54 168 118Z" fill="'+a+'"/><path d="M100 50V116M66 58Q68 92 62 116M134 58Q132 92 138 116" fill="none" stroke="'+D+'" stroke-width="2"/><path d="M26 118Q100 100 174 118Q196 130 172 138Q100 126 32 138Q6 130 26 118Z" fill="'+b+'"/><circle cx="100" cy="52" r="5" fill="'+b+'"/><circle cx="100" cy="88" r="12" fill="'+b+'"/>';
else s='<g transform="translate(0,44)"><use href="#shoe" width="200" height="100"/></g>';
return '<svg viewBox="0 0 200 200" style="--a:'+a+';--b:'+b+'" aria-hidden="true"><ellipse cx="100" cy="188" rx="60" ry="6" fill="rgba(0,0,0,.18)"/><g class="ar">'+s+'</g></svg>'}

let cat="All",qry="",srt="feat",wo=false,wish=new Set(),cart={},shown=0;
try{wish=new Set(JSON.parse(localStorage.getItem("wl")||"[]"))}catch(e){}
const saveW=()=>{try{localStorage.setItem("wl",JSON.stringify([...wish]))}catch(e){}};
const off=p=>Math.round((1-p.p/p.m)*100),stars=r=>"★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r));
const szs=p=>p.t=="pant"?PN:p.t=="shoe"?SH:p.t=="cap"?["One size"]:CL;
const TY=[["All","All"],["Shirts","Shirts"],["T-Shirts","T-Shirts"],["Pants","Pants"],["Hoodies","Hoodies"],["Jackets","Jackets"],["Shoes","Shoes"],["Accessories","Caps"]];
const ck=(id,s)=>id+"|"+s,cl=()=>Object.values(cart).map(l=>({l:l,p:P.find(x=>x.id==l.id)}));
const sub=()=>cl().reduce((a,x)=>a+x.l.q*x.p.p,0),shipF=()=>{const s=sub();return s&&s<1499?99:0},ctot=()=>sub()+shipF();
const price=p=>'<span class="pr"><b class="price">'+rs(p.p)+'</b><s>'+rs(p.m)+'</s><em>'+off(p)+'% off</em></span>';

function types(){$("types").innerHTML=TY.map(([k,l])=>{const n=k=="All"?P.length:P.filter(p=>p.c==k).length,pr=k=="All"?P[7]:P.find(p=>p.c==k);return '<button class="ty'+(cat==k?" on":"")+'" data-c="'+k+'">'+art(pr)+'<small>'+l+'</small><small style="opacity:.6;font-weight:400">'+n+'</small></button>'}).join("")}
function grid(){let l=P.filter(p=>(cat=="All"||p.c==cat)&&(!wo||wish.has(p.id))&&(p.n+" "+p.c).toLowerCase().includes(qry));
if(srt=="lo")l.sort((a,b)=>a.p-b.p);if(srt=="hi")l.sort((a,b)=>b.p-a.p);if(srt=="top")l.sort((a,b)=>b.r-a.r);
$("res").textContent=l.length+(l.length==1?" item":" items");
$("grid").innerHTML=l.length?l.map((p,i)=>'<article class="pc rv" data-id="'+p.id+'" style="--i:'+i%4+'"><div class="pic" style="background:'+p.bg+'">'+(p.tag?'<span class="tg">'+p.tag+'</span>':"")+'<button class="hrt'+(wish.has(p.id)?" on":"")+'" data-w="'+p.id+'" aria-label="Add to wishlist">♥</button>'+art(p)+'<span class="qvb">Select size</span></div><div class="inf"><small>'+p.c+'</small><h3>'+p.n+'</h3><div class="rt">'+stars(p.r)+' <span>'+p.r+' ('+p.v+')</span></div>'+price(p)+'</div></article>').join(""):'<p class="empty" style="grid-column:1/-1">Nothing matches. Try another word or type.</p>';rv()}

function qv(id){const p=P.find(x=>x.id==id),S=szs(p);let sz=S.length==1?S[0]:"",q=1;const dt=new Date(Date.now()+4*864e5).toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short"});
modal('<div class="qv2"><div class="qa" style="background:'+p.bg+'">'+art(p)+'</div><div class="qb"><small>'+p.c+'</small><h2>'+p.n+'</h2><div class="rt">'+stars(p.r)+' <span>'+p.r+' · '+p.v+' reviews</span></div><div style="margin:8px 0">'+price(p)+'</div><p class="mu">'+p.d+'</p><b>Size</b><div class="sz">'+S.map((s,i)=>'<button class="sb'+(s==sz?" on":"")+'" data-s="'+s+'"'+((p.id*7+i*3)%11==0?" disabled":"")+'>'+s+'</button>').join("")+'</div><div id="er"></div><div class="qrow"><div class="qty"><button id="qm" aria-label="Less">−</button><b id="qn">1</b><button id="qp" aria-label="More">+</button></div><button class="cta" id="qa" style="border:0;flex:1">Add to cart</button></div><ul class="pk"><li>Free delivery above ₹1,499</li><li>Get it by '+dt+'</li><li>30-day easy returns</li><li>Cash on delivery available</li></ul></div></div>');
$("box").style.width="min(820px,100%)";
document.querySelector(".sz").onclick=e=>{const b=e.target.closest(".sb");if(!b||b.disabled)return;sz=b.dataset.s;document.querySelectorAll(".sb").forEach(x=>x.classList.toggle("on",x==b));$("er").textContent=""};
$("qm").onclick=()=>{q=Math.max(1,q-1);$("qn").textContent=q};$("qp").onclick=()=>{q=Math.min(9,q+1);$("qn").textContent=q};
$("qa").onclick=()=>{if(!sz){$("er").textContent="Pick a size first";return}const from=document.querySelector(".qa");addC(p,sz,q,from);closeM()}}
function addC(p,s,q,from){const k=ck(p.id,s);cart[k]=cart[k]||{id:p.id,s:s,q:0};cart[k].q+=q;fly(from,p);render()}
function bump(){const c=$("cartBtn");c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")}
function fly(from,p){if(RM||!from){bump();return}const f=document.createElement("div");f.id="fly";f.style.position="fixed";f.style.zIndex=120;f.style.pointerEvents="none";f.innerHTML=art(p);document.body.appendChild(f);
const a=from.getBoundingClientRect(),t=$("cartBtn").getBoundingClientRect();
f.animate([{left:a.left+a.width/2-30+"px",top:a.top+a.height/2+"px",transform:"scale(1.6) rotate(0)",opacity:1},{left:(a.left+t.left)/2+"px",top:Math.min(a.top,t.top)-90+"px",transform:"scale(1.1) rotate(180deg)",opacity:1,offset:.45},{left:t.left+"px",top:t.top+"px",transform:"scale(.2) rotate(360deg)",opacity:.3}],{duration:850,easing:"ease-in-out"}).onfinish=()=>{f.remove();bump()}}
function tween(el,to){const from=shown,s=performance.now();(function f(n){const k=Math.min(1,(n-s)/400);shown=Math.round(from+(to-from)*k);el.textContent=rs(shown);if(k<1)requestAnimationFrame(f)})(s)}
function render(){const L=cl();let n=0,h="";L.forEach(x=>{n+=x.l.q;const k=ck(x.l.id,x.l.s);h+='<div class="it"><div class="sw" style="background:'+x.p.bg+'">'+art(x.p)+'</div><div class="t">'+x.p.n+'<br><small>Size '+x.l.s+' · '+rs(x.p.p)+'</small></div><div class="qty"><button data-m="'+k+'" aria-label="Less">−</button> '+x.l.q+' <button data-p="'+k+'" aria-label="More">+</button></div><button class="rm" data-x="'+k+'" aria-label="Remove">✕</button></div>'});
$("items").innerHTML=h||'<p class="empty">Your cart is empty. Add something you like.</p>';$("cnt").textContent=n;
const s=sub(),f=shipF();$("sb").textContent=rs(s);$("sh").textContent=s?(f?rs(f):"Free"):"₹0";
$("fd").innerHTML=s?(s>=1499?"🎉 You’ve unlocked free delivery":"Add "+rs(1499-s)+" more for free delivery")+'<div class="bar"><i style="width:'+Math.min(100,s/1499*100)+'%"></i></div>':"";tween($("tot"),ctot())}
$("items").onclick=e=>{const t=e.target,m=t.dataset.m,pl=t.dataset.p,x=t.dataset.x;if(m){cart[m].q--;if(!cart[m].q)delete cart[m]}if(pl)cart[pl].q++;if(x)delete cart[x];if(m||pl||x)render()};
$("cartBtn").onclick=()=>$("drawer").classList.add("open");$("close").onclick=()=>$("drawer").classList.remove("open");
let tt;function toast(m){if(!m)return;const t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),3400)}
function confetti(){if(RM)return;const cs=["#ffd23f","#ff5c4d","#1b2cc1","#19b98a","#8a3ffc"];for(let i=0;i<60;i++){const d=document.createElement("i");d.style.cssText="position:fixed;z-index:120;left:50%;top:40%;width:9px;height:14px;pointer-events:none;background:"+cs[i%5];document.body.appendChild(d);const x=(Math.random()-.5)*innerWidth*.9,y=-60-Math.random()*260;d.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:"translate("+x*.6+"px,"+y+"px) rotate("+Math.random()*360+"deg)",opacity:1,offset:.35},{transform:"translate("+x+"px,"+innerHeight*.7+"px) rotate("+Math.random()*900+"deg)",opacity:0}],{duration:1600+Math.random()*900,easing:"cubic-bezier(.2,.7,.4,1)"}).onfinish=()=>d.remove()}}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("in");setTimeout(()=>t.classList.remove("rv","in"),1100);io.unobserve(t)}}),{threshold:.1});
function rv(){document.querySelectorAll(".rv").forEach(el=>RM?el.classList.remove("rv"):io.observe(el))}
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ST=[["placed","Order placed"],["confirmed","Confirmed"],["packed","Packed"],["shipped","Shipped"],["out","Out for delivery"],["delivered","Delivered"]];
const COL={placed:"#8a8fb5",confirmed:"#1b2cc1",packed:"#8a3ffc",shipped:"#e08a00",out:"#19a0b9",delivered:"#19b98a",declined:"#ff5c4d"};
const NEXT={placed:["confirmed","Confirm"],confirmed:["packed","Mark packed"],packed:["shipped","Ship"],shipped:["out","Out for delivery"],out:["delivered","Mark delivered"]};
const LB=s=>s=="declined"?"Declined":ST.find(x=>x[0]==s)[1];
const bd=s=>'<span class="bd" style="background:'+COL[s]+'">'+LB(s)+'</span>';
let db,usr,uid,prof,canEd=false,unO,orders=[],stat={},first=true,view="shop",af="all";
const st=o=>(stat[o.id]||{}).s||"placed";
const ago=t=>{const s=(Date.now()-t)/1e3;return s<60?"just now":s<3600?Math.floor(s/60)+" min ago":s<86400?Math.floor(s/3600)+" h ago":new Date(t).toLocaleDateString("en-IN")};


function show(v){if(v=="admin"&&!adm){alogin();return}
view=v;["shop","orders","admin"].forEach(x=>{$("v"+x[0].toUpperCase()+x.slice(1)).hidden=x!=v});
document.body.classList.toggle("adm",v=="admin");
document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on",b.dataset.v==v));
try{history.replaceState(null,"","#"+v)}catch(e){}draw();scrollTo(0,0)}
document.querySelector("nav").onclick=e=>{if(e.target.dataset.v)show(e.target.dataset.v)};

function modal(h){let o=$("ov");if(!o){o=document.createElement("div");o.id="ov";o.innerHTML='<div id="box"></div>';o.onclick=e=>{if(e.target==o)closeM()};document.body.appendChild(o)}$("box").innerHTML=h}
function closeM(){const o=$("ov");if(o)o.remove()}
const form=p=>'<div class="fl"><input id="f_name" class="w" placeholder="Full name" value="'+esc(p.name)+'"><input id="f_phone" placeholder="Mobile (10 digits)" inputmode="numeric" value="'+esc(p.phone)+'"><input id="f_pin" placeholder="Pincode" inputmode="numeric" value="'+esc(p.pin)+'"><input id="f_city" class="w" placeholder="City" value="'+esc(p.city)+'"><textarea id="f_addr" class="w" rows="2" placeholder="House no, street, area">'+esc(p.addr)+'</textarea></div><div id="er"></div>';
function getF(){const f={name:$("f_name").value.trim(),phone:$("f_phone").value.trim(),pin:$("f_pin").value.trim(),city:$("f_city").value.trim(),addr:$("f_addr").value.trim()};
const e=!f.name?"Enter your name":!/^\d{10}$/.test(f.phone)?"Mobile number must be 10 digits":!/^\d{6}$/.test(f.pin)?"Pincode must be 6 digits":!f.city?"Enter your city":!f.addr?"Enter your address":"";
if(e){$("er").textContent=e;return null}return f}
async function saveProf(f){prof=f;await db.collection("data/users/"+uid).doc("profile").set(f);acct()}
function acct(){$("acct").textContent=prof?"Hi, "+prof.name.split(" ")[0]:"Login / Register"}
async function openAcct(){if(!db){toast("Sign in to claude.ai to create an account");return}
const p=prof||{name:(await usr.me()).name||""};
modal('<h2>'+(prof?'Your account':'Create your account')+'</h2><p class="mu">'+(prof?'You’re logged in. Update your delivery details anytime.':'Register once and checkout takes one tap. You’re logged in through your claude.ai account.')+'</p>'+form(p)+'<button class="cta" id="sv" style="width:100%;border:0">'+(prof?'Save changes':'Register')+'</button>');
$("sv").onclick=async()=>{const f=getF();if(!f)return;await saveProf(f);closeM();toast(prof?"Account saved":"")}}
$("acct").onclick=openAcct;

$("buy").onclick=()=>{if(!Object.keys(cart).length){toast("Add something to your cart first");return}
if(!db){toast("Sign in to claude.ai to place orders");return}
const p=prof||{};modal('<h2>Confirm your order</h2><p class="mu">Total <b>'+rs(ctot())+'</b>'+(shipF()?' (includes ₹99 delivery)':' (free delivery)')+'. Tell us where to deliver.</p>'+form(p)+'<b>Payment</b><div class="pays"><label><input type="radio" name="pay" value="Cash on delivery" checked>Cash on delivery</label><label><input type="radio" name="pay" value="UPI">UPI</label><label><input type="radio" name="pay" value="Card">Card</label></div><button class="cta" id="cf" style="width:100%;border:0">Confirm order · '+rs(ctot())+'</button>');
$("cf").onclick=async()=>{const f=getF();if(!f)return;$("cf").disabled=true;$("cf").textContent="Placing order…";
const items=cl().map(x=>({id:x.p.id,n:x.p.n,z:x.l.s,q:x.l.q,p:x.p.p}));
const o={id:"STR"+Math.floor(1e4+Math.random()*9e4),uid:uid,t:Date.now(),cust:f,items:items,ship:shipF(),total:ctot(),pay:document.querySelector('input[name=pay]:checked').value};
try{await db.collection("orders").doc(o.id).set(o);if(!prof)await saveProf(f);cart={};render();$("drawer").classList.remove("open");closeM();show("orders");confetti();toast("Order "+o.id+" placed. Track it here live.")}
catch(e){$("er").textContent="Couldn’t place the order. Try again.";$("cf").disabled=false;$("cf").textContent="Confirm order"}}};

function renderOrders(){const el=$("vOrders");
if(!db){el.innerHTML='<section><h2>My orders</h2><p class="mu">Sign in to claude.ai to see your orders and track them live.</p></section>';return}
let h='<section><h2>My orders<span class="lv"><span class="dot"></span>Live</span></h2>';
if(!orders.length)h+='<p class="mu">No orders yet. Pick a pair from the shop and it will show up here.</p><button class="cta" style="border:0" onclick="show(\'shop\')">Browse the drop</button>';
orders.forEach(o=>{const s=st(o),i=ST.findIndex(x=>x[0]==s),pct=i<0?0:i/(ST.length-1)*100,hist=(stat[o.id]||{}).h||[{s:"placed",t:o.t}],last=hist[hist.length-1];
h+='<div class="oc"><div class="top"><div><b>'+o.id+'</b><br><small class="mu">'+new Date(o.t).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})+' · '+esc(o.pay)+'</small></div>'+bd(s)+'</div><div style="margin:12px 0">'+o.items.map(x=>'<div class="ln"><span>'+esc(x.n)+(x.z?' · '+esc(x.z):'')+' × '+x.q+'</span><span>'+rs(x.p*x.q)+'</span></div>').join("")+(o.ship?'<div class="ln"><span>Delivery</span><span>'+rs(o.ship)+'</span></div>':'')+'<div class="ln"><b>Total</b><b>'+rs(o.total)+'</b></div></div>';
if(s=="declined")h+='<div class="dec">This order was declined by the store. You won’t be charged.</div>';
else h+='<div class="trk"><i style="width:'+pct+'%"></i><span class="tr" style="left:'+pct+'%">'+(s=="delivered"?"🎉":"🚚")+'</span></div><div class="stp">'+ST.map((x,j)=>'<b class="'+(j<i?"d":j==i?"c":"")+'">'+x[1]+'</b>').join("")+'</div>';
h+='<p class="mu" style="margin:12px 0 0">Last update: '+LB(last.s)+', '+ago(last.t)+'<br>Delivering to '+esc(o.cust.name)+', '+esc(o.cust.addr)+', '+esc(o.cust.city)+' '+esc(o.cust.pin)+'</p></div>'});
el.innerHTML=h+'</section>'}

async function setS(id,ns){const o=orders.find(x=>x.id==id),old=(stat[id]||{h:[{s:"placed",t:o.t}]}).h;
try{await db.collection("status").doc(id).set({s:ns,h:old.concat([{s:ns,t:Date.now()}])})}catch(e){toast("Couldn’t update the order")}}

function renderAdmin(){const el=$("vAdmin");
if(!adm)return;
const ok=orders.filter(o=>st(o)!="declined"),prod={},city={},pay={},cust={},days=[],cnt={};let rev=0,units=0;
for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5);days.push({k:d.toDateString(),l:d.toLocaleDateString("en-IN",{weekday:"short"}),v:0})}
ok.forEach(o=>{rev+=o.total;o.items.forEach(i=>{units+=i.q;prod[i.n]=(prod[i.n]||0)+i.q});city[o.cust.city]=(city[o.cust.city]||0)+1;pay[o.pay]=(pay[o.pay]||0)+1;
const c=cust[o.uid]=cust[o.uid]||{n:o.cust.name,o:0,s:0};c.o++;c.s+=o.total;const d=days.find(x=>x.k==new Date(o.t).toDateString());if(d)d.v+=o.total});
orders.forEach(o=>{const s=st(o);cnt[s]=(cnt[s]||0)+1});
const mx=Math.max(1,...days.map(d=>d.v)),aov=ok.length?Math.round(rev/ok.length):0;
const hb=(m,col,f)=>{const e=Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,5),t=e.length?e[0][1]:1;return e.length?e.map(x=>'<div class="hb"><span>'+esc(x[0])+'</span><div><i style="width:'+x[1]/t*100+'%;background:'+col+'"></i></div><b>'+(f?f(x[1]):x[1])+'</b></div>').join(""):'<p class="mu">No data yet</p>'};
const sb=ST.concat([["declined","Declined"]]).map(x=>'<div class="hb"><span>'+x[1]+'</span><div><i style="width:'+((cnt[x[0]]||0)/Math.max(1,orders.length)*100)+'%;background:'+COL[x[0]]+'"></i></div><b>'+(cnt[x[0]]||0)+'</b></div>').join("");
const top=Object.values(cust).sort((a,b)=>b.s-a.s).slice(0,5).map(c=>'<div class="hb" style="grid-template-columns:1fr auto auto"><span>'+esc(c.n)+'</span><small>'+c.o+' orders</small><b>'+rs(c.s)+'</b></div>').join("")||'<p class="mu">No customers yet</p>';
const fl=af=="all"?orders:orders.filter(o=>st(o)==af);
const rows=fl.map(o=>{const s=st(o),n=NEXT[s];return '<tr><td><b>'+o.id+'</b><br><small>'+ago(o.t)+'</small></td><td>'+esc(o.cust.name)+'<br><small>'+esc(o.cust.city)+' · '+esc(o.cust.phone)+'</small></td><td>'+o.items.map(i=>esc(i.n)+(i.z?' · '+esc(i.z):'')+' ×'+i.q).join("<br>")+'</td><td>'+rs(o.total)+'<br><small>'+esc(o.pay)+'</small></td><td>'+bd(s)+'</td><td class="ac">'+(n?'<button class="ab" data-o="'+o.id+'" data-s="'+n[0]+'">'+n[1]+'</button><button class="ab no" data-o="'+o.id+'" data-s="declined">Decline</button>':'<small>Closed</small>')+'</td></tr>'}).join("");
const kp=[["Revenue",rs(rev)],["Orders",orders.length],["Avg order value",rs(aov)],["Units sold",units],["Needs action",(cnt.placed||0)]];
el.innerHTML='<div class="atop"><b>Stride Admin</b><button class="ab" data-lo>Log out</button></div>'+(!db?'<div class="dec" style="margin:14px 5vw">Sign in to claude.ai to load live orders.</div>':canEd?'':'<div class="dec" style="margin:14px 5vw">View only: changing order status needs the page owner’s claude.ai login.</div>')+'<section><h2>Dashboard<span class="lv"><span class="dot"></span>Live</span></h2><div class="kpis">'+kp.map((k,i)=>'<div class="kpi" style="animation-delay:'+i*70+'ms"><small>'+k[0]+'</small><b>'+k[1]+'</b></div>').join("")+'</div>'+
'<div class="pn"><div class="p"><h3>Revenue, last 7 days</h3><div class="cols">'+days.map(d=>'<div>'+(d.v?'₹'+Math.round(d.v/100)/10+'k':'')+'<i style="--h:'+Math.max(2,d.v/mx*100)+'%"></i>'+d.l+'</div>').join("")+'</div></div><div class="p"><h3>Orders by status</h3>'+sb+'</div><div class="p"><h3>Top products (units)</h3>'+hb(prod,"var(--blue)")+'</div><div class="p"><h3>Top cities</h3>'+hb(city,"var(--coral)")+'</div><div class="p"><h3>Payment mix</h3>'+hb(pay,"#8a3ffc")+'</div><div class="p"><h3>Top customers</h3>'+top+'</div></div>'+
'<div class="p"><h3>All orders</h3><div class="chips">'+["all"].concat(ST.map(x=>x[0]),["declined"]).map(x=>'<button class="chip fc'+(af==x?" on":"")+'" data-f="'+x+'">'+(x=="all"?"All":LB(x))+'</button>').join("")+'</div><div class="tw"><table><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Action</th></tr>'+(rows||'<tr><td colspan="6" class="mu">No orders here yet. New orders appear instantly.</td></tr>')+'</table></div></div></section>'}
$("vAdmin").onclick=e=>{if(e.target.closest("[data-lo]")){adm=false;try{sessionStorage.removeItem("adm")}catch(x){}subO();show("shop");return}const b=e.target.closest(".ab"),c=e.target.closest(".fc");if(b)setS(b.dataset.o,b.dataset.s);if(c){af=c.dataset.f;renderAdmin()}};

function draw(){const mine=orders.filter(o=>o.uid==uid&&!["delivered","declined"].includes(st(o))).length;$("oc").textContent=mine?" ("+mine+")":"";
if(view=="orders")renderOrders();if(view=="admin")renderAdmin()}


async function sha(s){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
function alogin(){if($("alog"))return;const d=document.createElement("div");d.id="alog";d.innerHTML='<div class="lc"><h2>Stride Admin</h2><p>Sign in to manage orders.</p><label for="au">Username</label><input id="au" autocomplete="username"><label for="ap">Password</label><input id="ap" type="password" autocomplete="current-password"><div id="ae" class="ee"></div><button class="cta" id="ab" style="width:100%;border:0">Sign in</button><button id="abk" class="bk">← Back to store</button></div>';document.body.appendChild(d);
const go=async()=>{let ok=false;try{ok=(await sha($("au").value.trim()+":"+$("ap").value))==AH}catch(e){}
if(ok){adm=true;try{sessionStorage.setItem("adm","1")}catch(e){}d.remove();subO();show("admin")}else{$("ae").textContent="Wrong username or password";const c=d.firstChild;c.classList.remove("shake");void c.offsetWidth;c.classList.add("shake")}};
$("ab").onclick=go;$("ap").onkeydown=e=>{if(e.key=="Enter")go()};$("abk").onclick=()=>{d.remove();show("shop")};setTimeout(()=>$("au").focus(),60)}
function subO(){if(unO)unO();unO=null;if(!db)return;const q=adm?db.collection("orders"):db.collection("orders").where("uid","==",uid);unO=q.onSnapshot(s=>{orders=s.docs.map(d=>d.data()).sort((a,b)=>b.t-a.t);draw()},e=>{})}
async function init(){try{usr=await claude.use("user");db=await claude.use("db")}catch(e){}
if(!db||!usr){const b=$("bn");b.hidden=false;b.textContent="Accounts and orders need a claude.ai sign-in. You can still browse and fill the cart.";draw();return}
uid=await usr.id();canEd=await usr.canEdit();
const ps=await db.collection("data/users/"+uid).doc("profile").get();prof=ps.exists?ps.data():null;acct();if(!prof&&!adm&&location.hash!="#admin")setTimeout(openAcct,1500);
subO();
db.collection("status").onSnapshot(s=>{const ch=s.docChanges();s.docs.forEach(d=>stat[d.id]=d.data());
if(!first)ch.forEach(c=>{const o=orders.find(x=>x.id==c.doc.id&&x.uid==uid);if(o&&c.type!="removed")toast("Order "+o.id+" is now: "+LB(c.doc.data().s))});first=false;draw()})}

function boot(){let d=0;$("h1").innerHTML=[["Fresh","fits."],["Every","Friday."]].map(l=>'<span class="hl">'+l.map(w=>'<span class="wd">'+[...w].map(c=>'<span class="ch" style="--d:'+(d+=45)+'ms">'+c+'</span>').join("")+'</span>').join(" ")+'</span>').join("");
const S=[[8,"28%","12%","46%",12,"0s"],[11,"0%","58%","46%",26,"-1.2s"],[14,"66%","4%","30%",34,"-2.2s"],[4,"0%","4%","32%",20,"-3s"],[7,"62%","50%","34%",28,"-.6s"]];
$("stg").innerHTML='<div class="ring"></div>'+S.map(s=>'<div class="px" data-d="'+s[4]+'" style="left:'+s[1]+';top:'+s[2]+';width:'+s[3]+';--fd:'+s[5]+'">'+art(P.find(p=>p.id==s[0]))+'</div>').join("");
$("mq").textContent="Free delivery above ₹1,499 ✦ New drop every Friday ✦ 30-day returns ✦ ".repeat(8);$("mq2").textContent="Shirts ✦ Tees ✦ Denim ✦ Hoodies ✦ Jackets ✦ Sneakers ✦ ".repeat(8);
types();grid();render();rv();
$("types").onclick=e=>{const b=e.target.closest(".ty");if(b){cat=b.dataset.c;types();grid()}};
$("q").oninput=e=>{qry=e.target.value.trim().toLowerCase();grid()};$("sort").onchange=e=>{srt=e.target.value;grid()};
$("wl").onclick=()=>{wo=!wo;$("wl").classList.toggle("on",wo);grid()};
$("grid").onclick=e=>{const w=e.target.closest(".hrt");if(w){const id=+w.dataset.w;wish.has(id)?wish.delete(id):wish.add(id);saveW();w.classList.toggle("on");if(wo)grid();return}const c=e.target.closest(".pc");if(c)qv(+c.dataset.id)};
if(!RM){document.querySelector(".hr").addEventListener("pointermove",e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;document.querySelectorAll(".px").forEach(p=>{const k=+p.dataset.d;p.style.transform="translate3d("+(-x*k)+"px,"+(-y*k)+"px,0)"})});
document.addEventListener("pointermove",e=>{document.querySelectorAll(".mag").forEach(b=>{const r=b.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);b.style.transform=Math.hypot(dx,dy)<110?"translate("+dx*.25+"px,"+dy*.25+"px)":""})})}
if(!RM&&matchMedia("(hover:hover)").matches){$("grid").addEventListener("pointermove",e=>{const c=e.target.closest(".pc");if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty("--ry",(x-.5)*10+"deg");c.style.setProperty("--rx",(.5-y)*10+"deg");c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%")});
$("grid").addEventListener("pointerout",e=>{const c=e.target.closest(".pc");if(c&&!c.contains(e.relatedTarget)){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")}})}
addEventListener("scroll",()=>{const h=document.documentElement;$("sp").style.transform="scaleX("+h.scrollTop/((h.scrollHeight-h.clientHeight)||1)+")"},{passive:true});
addEventListener("hashchange",()=>{const h=location.hash.slice(1);if(["shop","orders","admin"].includes(h)&&h!=view)show(h)});
const NM=["Rohit","Ananya","Imran","Priya","Karan","Sneha","Aman","Meera"],CT=["Jaipur","Pune","Delhi","Indore","Mumbai","Kolkata","Surat","Chennai"],rd=a=>a[Math.floor(Math.random()*a.length)];
setInterval(()=>{if(view=="shop")toast(rd(NM)+" from "+rd(CT)+" just bought "+rd(P).n)},9000);
setInterval(()=>{const v=$("viewers"),n=+v.textContent+Math.floor(Math.random()*9)-4;v.textContent=Math.max(90,Math.min(190,n))},2000)}
boot();const h0=location.hash.slice(1);if(["orders","admin"].includes(h0))show(h0);init();