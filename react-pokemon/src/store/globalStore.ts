import { observable, makeObservable, action } from "mobx";

export class GlobalStoreImpl {
  constructor() {
    makeObservable(this);
  }
}
