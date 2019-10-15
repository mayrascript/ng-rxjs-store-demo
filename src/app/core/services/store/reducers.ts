import { actions } from 'src/app/core/services/store/actions';

export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}

export const storeReducers: Reducer<any> = (state: any = {}, action: Action) => {
  switch (action.type) {
    case actions.add:
      console.log('ADD');
      return {
        ...state,
        ...action.payload
      };
    case actions.update:
      console.log('UPDATE');
      return {
        ...state,
        ...action.payload
      };
    case actions.getItem:
      console.log('GET_ITEM');
      return state[action.payload.key];
    case actions.remove:
      console.log('REMOVE');
      return {};
    case actions.clear:
      console.log('CLEAR');
      return {};
    default:
      return state;
  }
};
