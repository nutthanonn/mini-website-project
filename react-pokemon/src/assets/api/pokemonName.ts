import axios from "axios";
import { PokemonNameType } from "../interfaces/apiPokemonName";

export async function fetchPokemonName() {
  const res = await axios.get<PokemonNameType>(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  return res.data;
}
