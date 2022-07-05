import { PokemonResultsType } from "../assets/interfaces/apiPokemonName";

interface resultType {
  label: string;
  value: string;
}

export function ConvertSelectData(data: PokemonResultsType[]) {
  const result: resultType[] = data.map((item) => {
    return {
      value: item.name.toLowerCase().replace(" ", "-"),
      label: item.name.toLowerCase(),
    };
  });
  return result;
}
