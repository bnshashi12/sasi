const WHATSAPP='919845700129';
const PHONE='919845700129';
const EMAIL='elitecompanionsgbl@gmail.com';

// City -> areas map for SEO-driven area selection
const AREAS={
  'Bengaluru':['Indiranagar','Koramangala','Whitefield','HSR Layout','Jayanagar','Malleshwaram','MG Road','Brigade Road','Electronic City','Marathahalli',''],
  'Mumbai':['Bandra','Andheri','Juhu','Colaba','Worli','Powai','Lower Parel','Malad','Dadar','Goregaon'],
  'Chennai':['T. Nagar','Adyar','Anna Nagar','Velachery','Mylapore','Besant Nagar','OMR','Guindy','Nungambakkam','Thiruvanmiyur'],
  'Kolkata':['Park Street','Salt Lake','Kankurgachi','Ballygunge','New Town','Gariahat','Howrah','Behala','Dumdum','Rajarhat'],
'Goa':['Panaji','Calangute','Baga','Vagator','Anjuna','Candolim','Margao','Benaulim','Colva','Morjim'],
  'Hyderabad':['Banjara Hills','Jubilee Hills','Gachibowli','HITEC City','Madhapur','Kukatpally','Secunderabad','Ameerpet','Begumpet','Kondapur'],
  'Pune':['Koregaon Park','Kothrud','Viman Nagar','Hinjewadi','Baner','Aundh','Hadapsar','Kalyani Nagar','Camp','Shivajinagar']
};

const profiles=[
{name:'Akansha',title:'Elegant Companion in Indiranagar, Bengaluru',city:'Bengaluru',area:'Indiranagar',age:26,initial:'A',verified:true,img:'img/profiles/akansha.png',gallery:'img/galleries/akansha',pages:29,about:'Glamorous, well-travelled and outgoing. I love fine dining, evening city lights and intelligent conversation.',likes:['Dining','Travel','Music','Conversation']},
{name:'Elif',title:'Warm Companion in Bandra, Mumbai',city:'Mumbai',area:'Bandra',age:24,initial:'E',verified:true,img:'img/profiles/elif.png',gallery:'img/galleries/elif',pages:48,about:'Warm and playful with a global spirit. I enjoy sunsets by the sea, modern art and good cafés.',likes:['Beach','Art','Cafés','Dancing']},
{name:'Ellya',title:'Sophisticated Companion in Dubai',city:'Dubai',area:'Downtown',age:27,initial:'E',verified:true,img:'img/profiles/ellya.png',gallery:'img/galleries/ellya',pages:33,about:'Sophisticated and discreet. Passionate about luxury stays, designer style and refined company.',likes:['Luxury','Fashion','Travel','Fine dining']},
{name:'Giya',title:'Vibrant Companion in Calangute, Goa',city:'Goa',area:'Calangute',age:25,initial:'G',verified:true,img:'img/profiles/giya.png',gallery:'img/galleries/giya',pages:29,about:'Vivacious and fun-loving. I love live music, rooftop bars and discovering hidden gems of the city.',likes:['Music','Rooftops','Adventure','Photography']},
{name:'Kirann',title:'Bubbly Companion in Koramangala, Bengaluru',city:'Bengaluru',area:'Koramangala',age:23,initial:'K',verified:true,img:'img/profiles/kirann.png',gallery:'img/galleries/kirann',pages:24,about:'Bubbly and down to earth. Enjoy movies, long drives and good food with even better company.',likes:['Movies','Road trips','Food','Fitness']},
{name:'Sara',title:'Elegant Companion in T. Nagar, Chennai',city:'Chennai',area:'T. Nagar',age:28,initial:'S',verified:true,img:'img/profiles/sara.png',gallery:'img/galleries/sara',pages:34,about:'Elegant, charismatic and well-spoken. Interested in culture, theatre and quiet evenings with class.',likes:['Theatre','Culture','Wine','Reading']},
{name:'Selena',title:'Charming Companion in Park Street, Kolkata',city:'Kolkata',area:'Park Street',age:25,initial:'S',verified:true,img:'img/profiles/selena.png',gallery:'img/galleries/selena',pages:32,about:'Charming and graceful with an eye for style. Love beach clubs, shopping and lively conversations.',likes:['Beach clubs','Shopping','Style','Parties']},
{name:'Sushmita',title:'Stunning Companion in Marathahalli, Bengaluru',city:'Bengaluru',area:'Marathahalli',age:25,initial:'S',verified:true,img:'img/profiles/sushmita.png',gallery:'img/galleries/sushmita',pages:3,about:'Stunning and confident with a magnetic presence. I enjoy luxury dinners, travel and unforgettable evenings in good company.',likes:['Luxury','Travel','Dining','Conversation']},
{name:'Ria',title:'Playful Companion in Banjara Hills, Hyderabad',city:'Hyderabad',area:'Banjara Hills',age:24,initial:'R',verified:true,img:'img/profiles/ria.png',gallery:'img/galleries/ria',pages:4,about:'Playful and energetic. I love exploring the city, trying new cafés and keeping conversations lively.',likes:['Cafés','Music','Shopping','Travel']},
{name:'Nisha',title:'Graceful Companion in Koregaon Park, Pune',city:'Pune',area:'Koregaon Park',age:26,initial:'N',verified:true,img:'img/profiles/nisha.png',gallery:'img/galleries/nisha',pages:4,about:'Graceful and well-spoken with a calm, elegant presence. I enjoy art, fine dining and quiet evenings.',likes:['Art','Fine dining','Reading','Wine']},
{name:'Priya',title:'Enchanting Companion in Jubilee Hills, Hyderabad',city:'Hyderabad',area:'Jubilee Hills',age:25,initial:'P',verified:true,img:'img/profiles/priya.png',gallery:'img/galleries/priya',pages:4,about:'Enchanting and charismatic. I love rooftop dinners, dance and living in the moment.',likes:['Dancing','Rooftops','Dining','Adventure']},
{name:'Zara',title:'Radiant Companion in Viman Nagar, Pune',city:'Pune',area:'Viman Nagar',age:27,initial:'Z',verified:true,img:'img/profiles/zara.png',gallery:'img/galleries/zara',pages:4,about:'Radiant and sophisticated. I enjoy luxury shopping, travel and elegant conversation.',likes:['Luxury','Travel','Fashion','Conversation']},
];

function renderProfiles(list=profiles){
 const box=document.getElementById('profiles');
 if(!box)return;
 const city=document.getElementById('cityFilter').value;
 const area=document.getElementById('areaFilter')?document.getElementById('areaFilter').value:'';
 let filtered=list.filter(p=>!city||p.city===city);
 if(area)filtered=filtered.filter(p=>(p.area||'').toLowerCase()===area.toLowerCase());
 box.innerHTML=filtered.map(p=>`<article class="profile"><div class="avatar" onclick="location.href='profile.html?name='+encodeURIComponent('${p.name}')" title="View profile & photos"><img src="${p.img}" alt="${p.title}"><span class="page-count">${p.pages} photos</span></div><div class="profile-info"><div class="name-row"><h3>${p.name}</h3>${p.verified?'<span class="verified">✓ Verified</span>':''}</div><div class="muted">${p.city}${p.area?' · '+p.area:''} · ${p.age} yrs</div><p class="about">${p.about}</p><div class="tags">${p.likes.map(l=>`<span>${l}</span>`).join('')}</div><div class="actions"><a class="btn green" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi '+p.name+', I found your profile on Elite Companions.')}">💬 WhatsApp</a><a class="btn green alt" target="_blank" rel="noopener" href="tel:+${PHONE}">📞 Call</a><a class="btn green mail" href="mailto:${EMAIL}?subject=${encodeURIComponent('Inquiry for '+p.name)}&body=${encodeURIComponent('Hi, I found '+p.name+' on Elite Companions.')}">✉️ Email</a></div></div></article>`).join('');
}
function searchProfiles(){
 const q=document.getElementById('searchInput').value.toLowerCase().trim();
 renderProfiles(profiles.filter(p=>(p.name+' '+p.city+' '+(p.area||'')+' '+p.likes.join(' ')).toLowerCase().includes(q)));
 document.getElementById('discover').scrollIntoView({behavior:'smooth'});
}
function setCity(city){document.getElementById('cityFilter').value=city;updateAreaFilter();renderProfiles();document.getElementById('discover').scrollIntoView({behavior:'smooth'});}

function updateAreaFilter(){
 const sel=document.getElementById('areaFilter');
 if(!sel)return;
 const city=document.getElementById('cityFilter').value;
 const areas=AREAS[city]||[];
 sel.innerHTML='<option value="">All areas</option>'+areas.map(a=>`<option value="${a}">${a}</option>`).join('');
 sel.disabled=!areas.length;
 renderProfiles();
}

// Explore-by-area board
function exploreCity(city,btn){
 const tabs=document.querySelectorAll('.city-tabs button');
 tabs.forEach(t=>t.classList.remove('active'));
 if(btn)btn.classList.add('active');
 const areas=AREAS[city]||[];
 const board=document.getElementById('areaBoard');
 if(!board)return;
 board.innerHTML=areas.map(a=>`<button class="area-chip" onclick="setArea('${city}','${a}')">${a}</button>`).join('')||'<p>No areas listed for this city yet.</p>';
}
function setArea(city,area){
 const cf=document.getElementById('cityFilter');if(cf)cf.value=city;
 const af=document.getElementById('areaFilter');
 if(af){
   af.innerHTML=`<option value="">All areas</option>${(AREAS[city]||[]).map(a=>`<option value="${a}">${a}</option>`).join('')}`;
   af.value=area;af.disabled=false;
 }
 renderProfiles();
 document.getElementById('discover').scrollIntoView({behavior:'smooth'});
}

function openModal(){const m=document.getElementById('modal');if(m)m.style.display='flex'}
function closeModal(){const m=document.getElementById('modal');if(m)m.style.display='none'}
var FORM_EMAIL='elitecompanionsgbl@gmail.com';
function submitForm(e){
 e.preventDefault();
 const name=(document.getElementById('fName')||{}).value||'';
 const from=(document.getElementById('fEmail')||{}).value||'';
 const city=(document.getElementById('fCity')||{}).value||'';
 const desc=(document.getElementById('fDesc')||{}).value||'';
 const subject='New profile listing request';
 const body='New profile listing request via Elite Companions:\n\nName: '+name+'\nContact email: '+from+'\nCity: '+city+'\nDescription: '+desc;
 location.href='mailto:'+FORM_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 alert('Thanks! Your email app will open to send your profile request to us for review.');
 closeModal();
 if(e.target&&e.target.reset)e.target.reset();
}

// Profile detail page rendering
function renderProfilePage(){
 const main=document.getElementById('profileMain');
 if(!main){ // not on profile page; handle index page
   if(document.getElementById('profiles'))renderProfiles();
   return;
 }
 const params=new URLSearchParams(location.search);
 const name=params.get('name');
 const p=profiles.find(x=>x.name.toLowerCase()=== (name||'').toLowerCase());
 if(!p){main.innerHTML='<h2>Profile not found</h2><a class="back" href="index.html#discover">← Back to profiles</a>';return;}
document.title=`${p.name} — Elite Companions`;
const wa=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi '+p.name+', I found your profile on Elite Companions.')}`;
 main.innerHTML=`<div class="profile-hero">
   <div class="ph-img"><img src="${p.img}" alt="${p.title}"></div>
   <div class="ph-info">
     <div class="name-row"><h1>${p.name}</h1>${p.verified?'<span class="verified">✓ Verified</span>':''}</div>
     <div class="muted big">${p.city}${p.area?' · '+p.area:''} · ${p.age} yrs</div>
     <h2 class="ph-title">${p.title}</h2>
     <p class="about">${p.about}</p>
     <div class="tags">${p.likes.map(l=>`<span>${l}</span>`).join('')}</div>
     <div class="actions">
       <a class="btn green" target="_blank" rel="noopener" href="${wa}">💬 WhatsApp</a>
       <a class="btn green alt" target="_blank" rel="noopener" href="tel:+${PHONE}">📞 Call now</a>
       <a class="btn green mail" href="mailto:${EMAIL}?subject=${encodeURIComponent('Inquiry for '+p.name)}&body=${encodeURIComponent('Hi, I found '+p.name+' on Elite Companions.')}">✉️ Email</a>
     </div>
   </div>
 </div>`;
 // Gallery
 const box=document.getElementById('profileGallery');
 if(!box)return;
 let html='';
 for(let i=1;i<=p.pages;i++){
   html+=`<figure class="gitem"><img src="${p.gallery}/${i}.png" alt="${p.name} photo ${i}" loading="lazy"><figcaption>Photo ${i}</figcaption></figure>`;
 }
 box.innerHTML=html;
}

// Spotlight carousel
function initSpotlight(){
  var track=document.getElementById('spotTrack');
  if(!track)return;
  var cards=track.children,index=0;
  var prev=document.getElementById('spotPrev'),next=document.getElementById('spotNext');
  function go(i){
    index=(i+cards.length)%cards.length;
    track.style.transform='translateX(-'+index*100+'%)';
  }
  if(prev)prev.onclick=function(ev){ev.preventDefault();go(index-1)};
  if(next)next.onclick=function(ev){ev.preventDefault();go(index+1)};
  setInterval(function(){go(index+1)},6000);
}

var enterBtn=document.getElementById('enterBtn'),ageGate=document.getElementById('ageGate');
if(enterBtn)enterBtn.onclick=function(){ageGate.classList.add('hidden');sessionStorage.setItem('ageConfirmed','1');return false;};
if(document.getElementById('profileMain')){
  renderProfilePage();
}else{
  if(sessionStorage.getItem('ageConfirmed'))ageGate.classList.add('hidden');
  renderProfiles();
  if(document.getElementById('areaFilter'))updateAreaFilter();
const firstTab=document.querySelector('.city-tabs button');
  if(firstTab)exploreCity('Bengaluru',firstTab);
  initSpotlight();
}
