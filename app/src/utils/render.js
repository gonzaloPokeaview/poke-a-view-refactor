import { css, fetchOnePokemon, getElement, capitalizeFirstLetter } from "./utils.js";
import { getPokemon } from "./local-storage.js";

export const findPokemon = (toMatch, pokemon) => {
  return pokemon.filter((each) => {
      const regex = new RegExp(toMatch, 'gi');
      return each.name.match(regex) 
  });
};



export const makeModal = (pokemon) => {
  console.log(pokemon);
  const modalBg = document.createElement('div');
  modalBg.className = 'modal-bg';
  modalBg.style.display = 'flex';
  modalBg.innerHTML =`
      <div class="pokemonCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; max-height:80vh; border-radius: 1em;">
      <h3>${capitalizeFirstLetter(pokemon.name)} #0003</h3>
       This pokemon can be found in the following version(s) of the Pokemon games:
        <div class="gameInfo">
        ${pokemon.game_indices.map((each) => {
          return`
          <p class='gameText'>${capitalizeFirstLetter(each.version.name)}</p>
          `
        }).join('')}
        </div>
        <div>
        <input class="close" type="submit" value="Close" >
        <input type="submit" value="Add to favorites" class="heart" id="card${pokemon.name}favoriteButton">
        </div>
        <img src="${pokemon.sprites.other.home.front_default}" alt="picture of venusaur" style="width: 75%; max-width: 300px;">
      </div>`
  getElement('body').appendChild(modalBg);
  getElement('.close').addEventListener('click', (e) => {
    modalBg.parentNode.removeChild(modalBg)
  });
}

const handleMoreInfo = async (e) => {
  e.preventDefault();
  const pokemonURL = findPokemon(e.target.id, getPokemon().results);
  const pokemon = await fetchOnePokemon(pokemonURL[0].url);
  makeModal(pokemon);
}

export const makeEachPokemon = async (url, i) => {
  
  const pokemon = await fetchOnePokemon(url);
  // console.log(url);
  const formattedNumber = i < 10 ? `000${i+1}` : i < 100 ? `00${i+1}` : i < 1000 ? `0${i+1}` : `${i+1}`;
  const newPokemon = document.createElement('div')
  newPokemon.className = 'eachPokeBox';
  newPokemon.innerHTML=`
    <h3>${capitalizeFirstLetter(pokemon.species.name)} #${formattedNumber}</h3>
    <img src="${pokemon.sprites.other['official-artwork']['front_default']}" alt="picture of ${pokemon.name}" style="width: 75%; max-width: 300px;">
    <input class='input' type="submit" value="More info" id="${pokemon.name}">
    <input type="submit" value="Add to favorites" class="heart" id="${pokemon.name}favoriteButton">
`;

css (newPokemon, {
  'font-size': '0.85em',
  'color': 'blue',
  'background-color': 'coral',
  'padding': '10px',
  'margin': '1em',
  'width': '20%',
  'border-radius': '1em'
})
getElement('#main').append(newPokemon);
getElement(`#${pokemon.name}`).addEventListener('click', handleMoreInfo);
}

export const LOAD_MAIN = () => {
  getElement('body').innerHTML = `
  <header>
    <img src="./logo.png" class="logoImage">
    <article id="siteInfo">
      <h2>Come and find out which of the Nintendo Pokémon games your favorite Pokémon was featured in!</h2>
    </article>
  </header>
  <section id="main"></section>
  `
  getPokemon().results.forEach(async (item, i) => {
    await makeEachPokemon(item.url, i);
  });

}



