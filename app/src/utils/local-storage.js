const PALETTE = 'palettes';

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

export const getPokemon = () => getLocalStorageKey(PALETTE) || [];

export const setPokemon= (palette) => {
  setLocalStorageKey(PALETTE, palette);
}

export const initPalettesIfEmpty = () => {
  if (!getPalettes().length) setLocalStorageKey(PALETTE, paletteData);
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