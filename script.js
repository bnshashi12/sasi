const WHATSAPP='918088224356';
const PHONE='919845700129';
const profiles=[
{name:'Akansha',city:'Bengaluru',age:26,initial:'A',verified:true,img:'img/profiles/akansha.png',gallery:'img/galleries/akansha',pages:29,about:'Glamorous, well-travelled and outgoing. I love fine dining, evening city lights and intelligent conversation.',likes:['Dining','Travel','Music','Conversation']},
{name:'Elif',city:'Mumbai',age:24,initial:'E',verified:true,img:'img/profiles/elif.png',gallery:'img/galleries/elif',pages:48,about:'Warm and playful with a global spirit. I enjoy sunsets by the sea, modern art and good cafés.',likes:['Beach','Art','Cafés','Dancing']},
{name:'Ellya',city:'Dubai',age:27,initial:'E',verified:true,img:'img/profiles/ellya.png',gallery:'img/galleries/ellya',pages:33,about:'Sophisticated and discreet. Passionate about luxury stays, designer style and refined company.',likes:['Luxury','Fashion','Travel','Fine dining']},
{name:'Giya',city:'London',age:25,initial:'G',verified:true,img:'img/profiles/giya.png',gallery:'img/galleries/giya',pages:29,about:'Vivacious and fun-loving. I love live music, rooftop bars and discovering hidden gems of the city.',likes:['Music','Rooftops','Adventure','Photography']},
{name:'Kirann',city:'Bengaluru',age:23,initial:'K',verified:true,img:'img/profiles/kirann.png',gallery:'img/galleries/kirann',pages:24,about:'Bubbly and down to earth. Enjoy movies, long drives and good food with even better company.',likes:['Movies','Road trips','Food','Fitness']},
{name:'Sara',city:'Mumbai',age:28,initial:'S',verified:true,img:'img/profiles/sara.png',gallery:'img/galleries/sara',pages:34,about:'Elegant, charismatic and well-spoken. Interested in culture, theatre and quiet evenings with class.',likes:['Theatre','Culture','Wine','Reading']},
{name:'Selena',city:'Dubai',age:25,initial:'S',verified:true,img:'img/profiles/selena.png',gallery:'img/galleries/selena',pages:32,about:'Charming and graceful with an eye for style. Love beach clubs, shopping and lively conversations.',likes:['Beach clubs','Shopping','Style','Parties']},
];

function renderProfiles(list=profiles){
 const box=document.getElementById('profiles');
 const city=document.getElementById('cityFilter').value;
const filtered=list.filter(p=>!city||p.city===city);
box.innerHTML=filtered.map(p=>`<article class="profile"><div class="avatar" onclick="location.href='profile.html?name='+encodeURIComponent('${p.name}')" title="View profile & photos"><img src="${p.img}" alt="${p.name}"><span class="page-count">${p.pages} photos</span></div><div class="profile-info"><div class="name-row"><h3>${p.name}</h3>${p.verified?'<span class="verified">✓ Verified</span>':''}</div><div class="muted">${p.city} · ${p.age} yrs</div><p class="about">${p.about}</p><div class="tags">${p.likes.map(l=>`<span>${l}</span>`).join('')}</div><div class="actions"><a class="btn green" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi '+p.name+', I found your profile on Elite Companions.')}">💬 WhatsApp</a><a class="btn green alt" target="_blank" rel="noopener" href="tel:+${PHONE}">📞 Call</a></div></div></article>`).join('');
}
function searchProfiles(){
 const q=document.getElementById('searchInput').value.toLowerCase().trim();
 renderProfiles(profiles.filter(p=>(p.name+' '+p.city+' '+p.likes.join(' ')).toLowerCase().includes(q)));
 document.getElementById('discover').scrollIntoView({behavior:'smooth'});
}
function setCity(city){document.getElementById('cityFilter').value=city;renderProfiles();document.getElementById('discover').scrollIntoView({behavior:'smooth'});}

function openModal(){document.getElementById('modal').style.display='flex'}
function closeModal(){document.getElementById('modal').style.display='none'}
function submitForm(e){e.preventDefault();alert('Thanks. Your profile request has been submitted for moderation.');closeModal();e.target.reset()}

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
   <div class="ph-img"><img src="${p.img}" alt="${p.name}"></div>
   <div class="ph-info">
     <div class="name-row"><h1>${p.name}</h1>${p.verified?'<span class="verified">✓ Verified</span>':''}</div>
     <div class="muted big">${p.city} · ${p.age} yrs</div>
     <p class="about">${p.about}</p>
     <div class="tags">${p.likes.map(l=>`<span>${l}</span>`).join('')}</div>
     <div class="actions">
       <a class="btn green" target="_blank" rel="noopener" href="${wa}">💬 WhatsApp</a>
       <a class="btn green alt" target="_blank" rel="noopener" href="tel:+${PHONE}">📞 Call now</a>
     </div>
   </div>
 </div>`;
 // Gallery
 const box=document.getElementById('profileGallery');
 let html='';
 for(let i=1;i<=p.pages;i++){
   html+=`<figure class="gitem"><img src="${p.gallery}/${i}.png" alt="${p.name} photo ${i}" loading="lazy"><figcaption>Photo ${i}</figcaption></figure>`;
 }
 box.innerHTML=html;
}

var enterBtn=document.getElementById('enterBtn'),ageGate=document.getElementById('ageGate');
if(enterBtn)enterBtn.onclick=function(){ageGate.classList.add('hidden');sessionStorage.setItem('ageConfirmed','1');return false;};
if(document.getElementById('profileMain')){
  renderProfilePage();
}else{
  if(sessionStorage.getItem('ageConfirmed'))ageGate.classList.add('hidden');
  renderProfiles();
}
