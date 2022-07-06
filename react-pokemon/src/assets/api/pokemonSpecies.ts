import axios from "axios";

export async function fetchPokemonSpecies(name: string) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  return res.data;
}
