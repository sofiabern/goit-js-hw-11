import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(a){const s="https://pixabay.com/api/",o="39362116-97c7d5619fee8bb7db7b12f12",n="photo",e="horizontal",t=new URLSearchParams({key:o,q:a,image_type:n,orientation:e,safesearch:!0});return fetch(`${s}?${t}`).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})}function h(a){return a.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:r,comments:t,downloads:l})=>`
<li class="gallery-item">
<a class="gallery-link" href="${o}">
  <img class="gallery-image"  src="${s}" alt="${n}">
  <ul class="descr-list">
    <li class="descr-item"><span class="descr-header">Likes</span> <span class="descr-value">${e}</span></li>
    <li class="descr-item"><span class="descr-header">Views</span> <span class="descr-value">${r}</span></li>
    <li class="descr-item"><span class="descr-header">Comments</span> <span class="descr-value">${t}</span></li>
    <li class="descr-item"><span class="descr-header">Downloads</span> <span class="descr-value">${l}</span></li>
  </ul>
  </a>
</li>`).join(" ")}const p=document.querySelector(".search-form"),u=p.elements.search,i=document.querySelector(".gallery"),d=document.querySelector(".loader");p.addEventListener("submit",y);function y(a){if(i.innerHTML&&(i.innerHTML=""),d.style.display="block",a.preventDefault(),!u.value.trim()){c.error({title:"Error",message:"Please enter something!"});return}m(u.value).then(s=>{if(!s.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}i.innerHTML=h(s.hits),g.refresh()}).catch(s=>console.log(s)).finally(()=>{d.style.display="none"})}let g=new f(".gallery-item a",{captionsData:"alt",captionDelay:250,showCounter:!0});
//# sourceMappingURL=commonHelpers.js.map
