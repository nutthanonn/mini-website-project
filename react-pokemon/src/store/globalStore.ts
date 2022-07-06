import { observable, makeObservable, action } from "mobx";

export class GlobalStoreImpl {
  @observable pokemonName: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  set_pokemon_name(val: string) {
    this.pokemonName = val;
  }
}

export const GlobalStore = new GlobalStoreImpl();
