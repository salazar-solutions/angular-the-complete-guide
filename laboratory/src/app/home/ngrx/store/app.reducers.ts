import { ActionReducerMap } from '@ngrx/store';
import * as fromFeature from '../feature/store/feature.reducers';

export interface AppState {
  feature: fromFeature.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  feature: fromFeature.reducers,
};
