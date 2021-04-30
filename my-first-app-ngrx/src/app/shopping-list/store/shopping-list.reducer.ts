import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { AppAction } from 'src/app/store/definitions';
import { ModuleActions, ShoppingListActions } from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
}

const initialState: State = {
  ingredients: [{ name: 'Manza-Test', amount: 2 }],
};

export function reducers(state = initialState, action: Action) {
  const shoppingListActions = action as ShoppingListActions;
  switch (shoppingListActions.type) {
    case ModuleActions.ADD_INGREDIENT:
      const newState: State = {
        ...state,
        ingredients: [...state.ingredients, shoppingListActions.payload],
      };
      return newState;

    default:
      return state;
  }
}
