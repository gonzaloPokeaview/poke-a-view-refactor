import './style.css'
import { css, capitalizeFirstLetter, removeFromArray, getElement, fetchAllPokemon } from './utils/utils.js';
import { LOAD_MAIN, makeEachPokemon, makeModal } from './utils/render.js';

const handleMoreInfo = (e) => {
  e.preventDefault();
  makeModal();
}

const main = () => {
  fetchAllPokemon('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  LOAD_MAIN();
  makeEachPokemon();
  getElement('input').addEventListener('click', handleMoreInfo);
};

main();