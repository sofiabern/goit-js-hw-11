import{i as d,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function f(a){u.style.display="block";const r="https://pixabay.com/api/",o="39362116-97c7d5619fee8bb7db7b12f12",n="photo",e="horizontal",s=!0,t=new URLSearchParams({key:o,q:a,image_type:n,orientation:e,safesearch:s});return fetch(`${r}?${t}`).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})}function m(a){return a.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:s,comments:t,downloads:l})=>`
<li class="gallery-item">
<a class="gallery-link" href="${o}">
  <img class="gallery-image"  src="${r}" alt="${n}">
  <ul class="descr-list">
    <li class="descr-item"><span class="descr-header">Likes</span> <span class="descr-value">${e}</span></li>
    <li class="descr-item"><span class="descr-header">Views</span> <span class="descr-value">${s}</span></li>
    <li class="descr-item"><span class="descr-header">Comments</span> <span class="descr-value">${t}</span></li>
    <li class="descr-item"><span class="descr-header">Downloads</span> <span class="descr-value">${l}</span></li>
  </ul>
  </a>
</li>`).join(" ")}const i=document.querySelector(".search-form"),h=i.elements.search,c=document.querySelector(".gallery"),u=document.querySelector(".loader");i.addEventListener("submit",y);function y(a){c.innerHTML&&(c.innerHTML=""),a.preventDefault(),f(h.value).then(r=>{r.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.style.display="none",c.innerHTML=m(r.hits),g.refresh()}).catch(r=>console.log(r))}let g=new p(".gallery-item a",{captionsData:"alt",captionDelay:250,showCounter:!0});
//# sourceMappingURL=commonHelpers.js.map
