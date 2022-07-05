export interface PokemonResultsType {
  name: string;
  url: string;
}

export interface PokemonNameType {
  count: number;
  next: null;
  previous: null;
  results: PokemonResultsType[];
}
