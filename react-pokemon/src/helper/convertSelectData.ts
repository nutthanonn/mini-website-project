import { PokemonResultsType } from "../assets/interfaces/apiPokemonName";

export interface optionsType {
  label: string;
  value: string;
}

export function ConvertSelectData(data: PokemonResultsType[]) {
  const result: optionsType[] = data.map((item) => {
    return {
      value: item.name,
      label: item.name,
    };
  });
  return result;
}
