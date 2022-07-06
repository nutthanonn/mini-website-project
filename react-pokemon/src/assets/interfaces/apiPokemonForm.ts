interface types {
  slot: number;
  type: { name: string; url: string };
}

export interface PokemonFormTypes {
  form_name: string;
  form_names: any;
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: any;
  order: number;
  pokemon: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
  };
  types: types[];
  version_group: {
    name: string;
    url: string;
  };
}
