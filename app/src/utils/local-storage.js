import { fetchAllPokemon } from "./utils";

const ALL_POKEMON = 'allPokemon';

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getPokemon = () => getLocalStorageKey(ALL_POKEMON) || [];

export const setPokemon= (poke) => {
  setLocalStorageKey(ALL_POKEMON, poke);
}

export const initPokemonIfEmpty = async () => {
  if (!getPokemon().length) setLocalStorageKey(ALL_POKEMON, await fetchAllPokemon());
  console.log(localStorage);
}

export const removeFavoritePokemon= (pokemonName) => {
  const newFavorites = getPalettes().filter(pokemon => pokemon.name !== pokemonName);
  setPalettes(newFavorites);
}

export const addFavoritePokemon = ({ uuid, title, colors, temperature }) => {
  const newFavorite =  {
   
  };
  setPokemon([newFavorite, ...getPokemon() ]);
}