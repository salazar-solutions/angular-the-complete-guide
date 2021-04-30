import { FeatureActions, FeatureActionTypes } from './feature.actions';
import { Action, ActionReducer } from '@ngrx/store';

export interface State {
  ingredients: string[];
}

const initialState: State = {
  ingredients: ['test-1'],
};

export function reducers(state: State = initialState, action: Action) {
  const featureAction = action as FeatureActions;
  switch (featureAction.type) {
    case FeatureActionTypes.ADD_INGREDIENT:
      console.log('Reducers: %o', featureAction);
      const newState = {
        ...state,
        ingredients: [...state.ingredients, featureAction.payload],
      };
      return newState;

    default:
      return state;
  }
}
