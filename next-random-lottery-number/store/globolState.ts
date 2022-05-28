import { NumberId } from "./../data/number_id";
import { observable, makeObservable, action } from "mobx";

export class GlobalStateImpl {
  constructor() {
    makeObservable(this);
  }

  @action
  convert_number_to_stringId(n: string): string[][] {
    const final: string[][] = [];
    const number_list = Array.from(n);
    number_list.forEach((e) => {
      final.push(NumberId[e as keyof typeof NumberId]);
    });
    return final;
  }
}

export const GlobalStore = new GlobalStateImpl();
