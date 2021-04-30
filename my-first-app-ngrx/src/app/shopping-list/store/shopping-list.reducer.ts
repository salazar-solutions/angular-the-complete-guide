import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { AppAction } from 'src/app/store/definitions';
import {
  AddIngredient,
  ModuleActions,
  ShoppingListActions,
} from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
}

const initialState: State = {
  ingredients: [],
};

export function reducers(state = initialState, action: Action) {
  const shoppingListActions = action as ShoppingListActions;
  switch (shoppingListActions.type) {
    case ModuleActions.ADD_INGREDIENT:
      return state;

    default:
      return state;
  }
}
