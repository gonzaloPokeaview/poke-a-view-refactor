(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const s=t=>document.querySelector(t),d=async t=>{try{const e=await fetch(t);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){console.error("Error fetching data:",e)}},f=async()=>await d("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"),m=async t=>await d(t),p=(t,e)=>{for(const r in e)t.style[r]=e[r]},c=t=>t.charAt(0).toUpperCase()+t.slice(1),u="allPokemon",h=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},g=t=>{try{return JSON.parse(localStorage.getItem(t))}catch(e){return console.error(e),null}},l=()=>g(u)||[],y=async()=>{l().length||h(u,await f()),console.log(localStorage)},v=(t,e)=>e.filter(r=>{const a=new RegExp(t,"gi");return r.name.match(a)}),w=t=>{console.log(t);const e=document.createElement("div");e.className="modal-bg",e.style.display="flex",e.innerHTML=`
      <div class="pokemonCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; max-height:80vh; border-radius: 1em;">
      <h3>${c(t.name)} #0003</h3>
       This pokemon can be found in the following version(s) of the Pokemon games:
        <div class="gameInfo">
        ${t.game_indices.map(r=>`
          <p class='gameText'>${c(r.version.name)}</p>
          `).join("")}
        </div>
        <div>
        <input class="close" type="submit" value="Close" >
        <input type="submit" value="Add to favorites" class="heart" id="card${t.name}favoriteButton">
        </div>
        <img src="${t.sprites.other.home.front_default}" alt="picture of venusaur" style="width: 75%; max-width: 300px;">
      </div>`,s("body").appendChild(e),s(".close").addEventListener("click",r=>{e.parentNode.removeChild(e)})},k=async t=>{t.preventDefault();const e=v(t.target.id,l().results),r=await m(e[0].url);w(r)},b=async(t,e)=>{const r=await m(t),a=e<10?`000${e+1}`:e<100?`00${e+1}`:e<1e3?`0${e+1}`:`${e+1}`,o=document.createElement("div");o.className="eachPokeBox",o.innerHTML=`
    <h3>${c(r.species.name)} #${a}</h3>
    <img src="${r.sprites.other["official-artwork"].front_default}" alt="picture of ${r.name}" style="width: 75%; max-width: 300px;">
    <input class='input' type="submit" value="More info" id="${r.name}">
    <input type="submit" value="Add to favorites" class="heart" id="${r.name}favoriteButton">
`,p(o,{"font-size":"0.85em",color:"blue","background-color":"coral",padding:"10px",margin:"1em",width:"20%","border-radius":"1em"}),s("#main").append(o),s(`#${r.name}`).addEventListener("click",k)},L=()=>{s("body").innerHTML=`
  <header>
    <img src="./logo.png" class="logoImage">
    <article id="siteInfo">
      <h2>Come and find out which of the Nintendo Pokémon games your favorite Pokémon was featured in!</h2>
    </article>
  </header>
  <section id="main"></section>
  `,l().results.forEach(async(t,e)=>{await b(t.url,e)})},P=()=>{y(),L()};P();
