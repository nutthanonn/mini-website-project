import { NumberId } from "./../data/number_id";
import { observable, makeObservable, action } from "mobx";

export class GlobalStateImpl {
  constructor() {
    makeObservable(this);
  }
}

export const GlobalStore = new GlobalStateImpl();
