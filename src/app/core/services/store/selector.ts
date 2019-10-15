import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Selector {
  private readonly _state = new BehaviorSubject<any>({});

  readonly selector$ = this._state.asObservable();

  constructor() {
  }

  get state(): any {
    return this._state.getValue();
  }

  set state(val: any) {
    console.log('val', val);
    this._state.next(val);
  }
}
