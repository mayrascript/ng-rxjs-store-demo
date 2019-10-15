import { Injectable } from '@angular/core';
import { actions } from 'src/app/core/services/store/actions';
import { storeReducers } from 'src/app/core/services/store/reducers';
import { Selector } from 'src/app/core/services/store/selector';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly store = storeReducers;

  constructor(private selector: Selector) { }

  add(item: any) {
    const store = this.store({}, {type: actions.add, payload: item});
    this.updateStore(store);
    return store;
  }

  update(itemUpdated: any) {
    const store = this.store({}, {type: actions.update, payload: itemUpdated});
    this.updateStore(store);
    return store;
  }

  get(key: string) {
    this.store({}, {type: actions.getItem});
  }

  remove(key: string) {
    const store = this.store({}, {type: actions.remove, payload: key});
    this.updateStore(store);
  }

  clear() {
    const store = this.store({}, {type: actions.clear});
    this.updateStore(store);
  }

  state() {
    return this.selector.selector$;
  }

  private updateStore(store: any) {
    console.log('updateStore', store);
    this.selector.state = store;
  }
}
