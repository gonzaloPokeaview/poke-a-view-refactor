import './style.css'
import { LOAD_MAIN } from './utils/render.js';
import { getPokemon, initPokemonIfEmpty } from './utils/local-storage.js';

const main = () => {
  initPokemonIfEmpty();
  LOAD_MAIN();
  console.log(getPokemon());
};

main();