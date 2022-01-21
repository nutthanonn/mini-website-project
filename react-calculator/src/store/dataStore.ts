import { makeObservable, action, observable } from "mobx";

export class DataStoreImpl {
  @observable Data: string = "";
  @observable Symbol: string = "";
  @observable Cal: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  change_data(word: string) {
    const symbol: string[] = ["+", "-", "*", "÷"];
    if (word === "C") {
      this.Cal = "";
      this.Data = "";
    } else if (word === "=") {
      if (this.Symbol == "+") {
        this.Data = (parseFloat(this.Data) + parseFloat(this.Cal)).toString();
      } else if (this.Symbol == "-") {
        this.Data = (parseFloat(this.Data) - parseFloat(this.Cal)).toString();
      } else if (this.Symbol == "*") {
        this.Data = (parseFloat(this.Data) * parseFloat(this.Cal)).toString();
      } else {
        this.Data = (parseFloat(this.Cal) / parseFloat(this.Data)).toString();
      }
    } else {
      if (symbol.includes(word)) {
        this.Symbol = word;
        this.Cal = this.Data;
        this.Data = "";
      } else {
        this.Data += word;
      }
    }
  }
}

export const DataStore = new DataStoreImpl();
