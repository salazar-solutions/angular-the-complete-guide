import { Action } from '@ngrx/store';

export interface AppAction<T extends string, P extends unknown = undefined>
  extends Action {
  type: T;
  payload?: P;
}
