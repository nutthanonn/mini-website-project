import axios from "axios";
import { PokemonFormTypes } from "../interfaces/apiPokemonForm";

export async function fetchPokemonForm(name: string) {
  const res = await axios.get<PokemonFormTypes>(
    `https://pokeapi.co/api/v2/pokemon-form/${name}`
  );
  return res.data;
}
