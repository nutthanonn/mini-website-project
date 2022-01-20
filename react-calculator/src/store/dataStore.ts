import { makeObservable, action, observable } from "mobx";

export class DataStoreImpl {
  @observable Data: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  change_data(word: string) {
    this.Data += word;
  }
}

export const DataStore = new DataStoreImpl();
