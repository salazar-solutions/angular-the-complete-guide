import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { AppAction } from 'src/app/store/definitions';
import { ModuleActions, ShoppingListActions } from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  loadedIngredient?: Ingredient;
  loadedIndex?: number;
}

const initialState: State = {
  ingredients: [
    { name: 'Manza-Test', amount: 2 },
    { name: 'Apple-Test', amount: 2 },
  ],
};

function getNewState(state: State) {
  const newState: State = {
    ...state,
    ingredients: [...state.ingredients],
  };
  return newState;
}

export function reducers(state = initialState, action: Action) {
  const shoppingListActions = action as ShoppingListActions;
  console.log('shopping-list.reducers: [%o]', shoppingListActions);
  switch (shoppingListActions.type) {
    case ModuleActions.ADD_INGREDIENT: {
      const newState = getNewState(state);
      newState.ingredients.push(shoppingListActions.payload);
      return newState;
    }
    case ModuleActions.ADD_INGREDIENTS: {
      const newState = getNewState(state);
      newState.ingredients.push(...shoppingListActions.payload);
      return newState;
    }
    case ModuleActions.LOAD_INGREDIENT: {
      const newState = getNewState(state);
      const index = shoppingListActions.payload;
      newState.loadedIngredient = state.ingredients[index];
      newState.loadedIndex = index;
      return newState;
    }
    case ModuleActions.UNLOAD_INGREDIENT: {
      const newState = getNewState(state);
      newState.loadedIngredient = undefined;
      newState.loadedIndex = undefined;
      return newState;
    }
    case ModuleActions.UPDATE_INGREDIENT: {
      const newState = getNewState(state);
      newState.ingredients[newState.loadedIndex] = shoppingListActions.payload;
      return newState;
    }
    case ModuleActions.REMOVE_INGREDIENT: {
      const newState = getNewState(state);
      newState.ingredients.splice(newState.loadedIndex, 1);
      return newState;
    }

    default:
      return state;
  }
}
