import{a as p,S as d,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="50350659-cf939682a4626c4b67d291bd3",f="https://pixabay.com/api/",g=p.create();function h(s){return g.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits.map(o=>({largeImageURL:o.largeImageURL,webformatURL:o.webformatURL,tags:o.tags,likes:o.likes,views:o.views,comments:o.comments,downloads:o.downloads}))).catch(t=>{throw console.error("Error fetching images:",t),t})}const c=document.querySelector(".gallery"),u=document.querySelector(".show-loader");let l=null;function y({largeImageURL:s,webformatURL:t,tags:o,likes:i,views:e,comments:r,downloads:a}){return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
    />
  </a>
  <ul class="list-description">
    <li>
      <p class="title-description">Likes</p>
      <p class="text-description">${i}</p>
    </li>
    <li>
      <p class="title-description">Views</p>
      <p class="text-description">${e}</p>
    </li>
    <li>
      <p class="title-description">Comments</p>
      <p class="text-description">${r}</p>
    </li>
    <li>
      <p class="title-description">Downloads</p>
      <p class="text-description">${a}</p>
    </li>
  </ul>
</li>`}function w(s){return s.map(y).join("")}function L(s){const t=w(s);c.innerHTML=t,l?l.refresh():l=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function b(){c.innerHTML=""}function x(){u.classList.add("loader")}function $(){u.classList.remove("loader")}const q=document.querySelector(".form");q.addEventListener("submit",v);function v(s){s.preventDefault(),b();const t=s.target.elements["search-text"],o=t.value.trim();if(!o){n.show({message:"Please enter a search query!",position:"topRight",messageColor:"white",backgroundColor:"orange",close:!0});return}x(),h(o).then(i=>{if(i.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"red",close:!0});return}L(i)}).catch(i=>{n.show({message:`Error loading images: ${i.message}`,position:"topRight",messageColor:"white",backgroundColor:"red",close:!0})}).finally(()=>{$(),t.value=""})}
//# sourceMappingURL=index.js.map
