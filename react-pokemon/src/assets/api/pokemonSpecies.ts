import axios from "axios";
import { PokemonSpeciesTypes } from "../interfaces/apiPokemonSpecies";

export async function fetchPokemonSpecies(name: string) {
  const res = await axios.get<PokemonSpeciesTypes>(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  return res.data;
}
