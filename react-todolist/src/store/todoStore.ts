import { makeObservable, action, observable } from "mobx";
import { v4 as uuidv4 } from "uuid";

interface dataItem {
  id: string;
  title: string;
}

export class TodoStoreImpl {
  @observable data: dataItem[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  delete_data(id: string) {
    this.data = this.data.filter((item) => item.id !== id);
  }

  @action
  add_data(title: string) {
    const data = { id: uuidv4(), title: title };
    this.data = [data, ...this.data];
  }

  @action
  change_title(id: string, text: string) {
    this.data = this.data.map((item) => {
      if (item.id === id) {
        return { ...item, title: text };
      } else {
        return item;
      }
    });
  }
}

export const TodoStore = new TodoStoreImpl();
