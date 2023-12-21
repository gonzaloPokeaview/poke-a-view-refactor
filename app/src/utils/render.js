import { css, getElement } from "./utils.js";

export const LOAD_MAIN = () => {
  getElement('body').innerHTML = `
  <header>
    <img src="../public/logo.png" class="logoImage">
    <article id="siteInfo">
      <h2>Come and find out which of the Nintendo Pokémon games your favorite Pokémon was featured in!</h2>
    </article>
  </header>
  <section id="main"></section>
  `
}

export const makeEachPokemon = () => {
  getElement('#main').innerHTML =`
  <div class="eachPokeBox" style="font-size: 0.85em; color: blue; background-color: coral; padding: 10px; margin: 1em; width: 20%; border-radius: 1em;">
    <h3>Caterpie #00010</h3>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" alt="picture of caterpie" style="width: 75%; max-width: 300px;">
    <input type="submit" value="More info" id="caterpiemoreInfoButton">
    <input type="submit" value="Add to favorites" class="heart" id="caterpiefavoriteButton">
  </div>
`;

}

export const makeModal = () => {
  
  const modalBg = document.createElement('div');
  modalBg.className = 'modal-bg';
  modalBg.style.display = 'flex';
  modalBg.innerHTML =`
      <div class="pokemonCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; border-radius: 1em;">
      Venusaur is a pokemon that can be found in the following version(s) of the Pokemon games:
        <div id="venusaurGameInfo" class="gameInfo">
          <p class="gameText">Red</p>
        </div>
        <input class="close" type="submit" value="Close" id="venusaurmoreInfoButton">
        <input type="submit" value="Add to favorites" class="heart" id="venusaurfavoriteButton">
        <h3>Venusaur #0003</h3>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="picture of venusaur" style="width: 75%; max-width: 300px;">
      </div>`
  getElement('body').appendChild(modalBg);
  getElement('.close').addEventListener('click', (e) => {
    modalBg.parentNode.removeChild(modalBg)
  });
}