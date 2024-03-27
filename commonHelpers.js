import{S as h,i as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(t){const s="https://pixabay.com/api/",o="39362116-97c7d5619fee8bb7db7b12f12",n="photo",e="horizontal",a=new URLSearchParams({key:o,q:t,image_type:n,orientation:e,safesearch:!0});return fetch(`${s}?${a}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function y(t){return t.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:r,comments:a,downloads:i})=>`
<li class="gallery-item">
<a class="gallery-link" href="${o}">
  <img class="gallery-image"  src="${s}" alt="${n}">
  <ul class="descr-list">
    <li class="descr-item"><span class="descr-header">Likes</span> <span class="descr-value">${e}</span></li>
    <li class="descr-item"><span class="descr-header">Views</span> <span class="descr-value">${r}</span></li>
    <li class="descr-item"><span class="descr-header">Comments</span> <span class="descr-value">${a}</span></li>
    <li class="descr-item"><span class="descr-header">Downloads</span> <span class="descr-value">${i}</span></li>
  </ul>
  </a>
</li>`).join(" ")}const p=document.querySelector(".search-form"),d=p.elements.search,u=document.querySelector(".gallery"),L=document.querySelector(".loader"),f=new h(".gallery-item a",{captionsData:"alt",captionDelay:250,showCounter:!0});function l(){L.classList.toggle("hidden")}function S(){u.innerHTML&&(u.innerHTML="")}function c(t){m.error({title:"Error",message:`${t}`})}p.addEventListener("submit",b);function b(t){if(t.preventDefault(),S(),l(),!d.value.trim()){l(),c("Please enter something!");return}g(d.value).then(s=>{if(!s.hits.length){c("Sorry, there are no images matching your search query. Please try again!");return}u.innerHTML=y(s.hits),f&&f.refresh()}).catch(s=>{c("Sorry, something wrong happened while fetching."),console.log(s)}).finally(()=>{l()})}
//# sourceMappingURL=commonHelpers.js.map
