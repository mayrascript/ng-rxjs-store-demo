import { actions } from 'src/app/core/services/store/actions';
import { AppState } from 'src/app/core/services/store/app-state';

export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}

export const storeReducers: Reducer<AppState> = (state: any = {}, action: Action): AppState => {
  switch (action.type) {
    case actions.add:
      return {
        ...state,
        courses: [...state.courses, action.payload.course],
        currentCourse: {...action.payload.course}
      };
    case actions.update:
      const filtered = state.courses.filter((c) => c.id !== action.payload.course.id);
      return {
        ...state,
        courses: [...filtered, action.payload.course],
        currentCourse: {...action.payload.course}
      };
    case actions.remove:
      const courses = state.courses.filter((c) => c.id !== action.payload.course.id);
      return {
        ...state,
        courses
      };
    default:
      return state;
  }
};
