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
  const newFavorite = getPalettes().filter(pokemon => pokemon.name !== pokemonName);
  setPalettes(newFavorite);
}

export const addFavoritePokemon = ({ uuid, title, colors, temperature }) => {
  const newPalette =  {
    uuid,
    title,
    colors,
    temperature,
  };
  setPokemon([newPalette, ...getPokemon() ]);
}