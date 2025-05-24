import{a as C,S as x,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const R="50350659-cf939682a4626c4b67d291bd3",q="https://pixabay.com/api/",P=C.create(),g=15;async function h(o,r){try{const s=await P.get(q,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:g}}),{hits:i,totalHits:t}=s.data;return{totalHits:t,images:i.map(e=>({largeImageURL:e.largeImageURL,webformatURL:e.webformatURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}))}}catch(s){throw console.error("Error fetching images:",s),s}}const f=document.querySelector(".gallery"),y=document.querySelector(".show-loader");let d=null;const m=document.querySelector(".btn-load-more");function S({largeImageURL:o,webformatURL:r,tags:s,likes:i,views:t,comments:e,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
    />
  </a>
  <ul class="list-description">
    <li>
      <p class="title-description">Likes</p>
      <p class="text-description">${i}</p>
    </li>
    <li>
      <p class="title-description">Views</p>
      <p class="text-description">${t}</p>
    </li>
    <li>
      <p class="title-description">Comments</p>
      <p class="text-description">${e}</p>
    </li>
    <li>
      <p class="title-description">Downloads</p>
      <p class="text-description">${n}</p>
    </li>
  </ul>
</li>`}function $(o){return o.map(S).join("")}function w(o){const r=$(o);f.insertAdjacentHTML("beforeend",r),d?d.refresh():d=new x(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function M(){f.innerHTML=""}function L(){y.classList.add("loader")}function b(){y.classList.remove("loader")}function E(){m.classList.remove("hidden")}function k(){m.classList.add("hidden")}let l,a,u;const B=document.querySelector(".form");B.addEventListener("submit",I);m.addEventListener("click",O);async function I(o){o.preventDefault(),M(),a=1;const r=o.target.elements["search-text"];if(l=r.value.trim(),!l){c.show({message:"Please enter a search query!",position:"topRight",messageColor:"white",backgroundColor:"orange",close:!0}),u=0,p();return}L();try{const s=await h(l,a);if(s.images.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"red",close:!0}),u=0;return}u=Math.ceil(s.totalHits/g),w(s.images)}catch(s){c.show({message:`Error loading images: ${s.message}`,position:"topRight",messageColor:"white",backgroundColor:"red",close:!0}),l="",a=0}finally{b(),v(),r.value="",p()}}async function O(){L(),a++;try{const o=await h(l,a);w(o.images);const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}catch(o){c.show({message:`Error loading images: ${o.message}`,position:"topRight",messageColor:"white",backgroundColor:"red",close:!0})}finally{b(),v(),p()}}function p(){a<u?E():k()}function v(){a===u&&c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"white",backgroundColor:"blue",close:!0})}
//# sourceMappingURL=index.js.map
