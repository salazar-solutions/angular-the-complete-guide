import { Ingredient } from 'src/app/shared/ingredient.model';
import { actionsForFeature } from 'src/app/store/app.actions';
import { AppAction } from 'src/app/store/definitions';

export const MODULE_NAME = 'shoppingList';

enum Actions {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  LOAD_INGREDIENT = 'LOAD_INGREDIENT',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
  UNLOAD_INGREDIENT = 'UNLOAD_INGREDIENT',
}

actionsForFeature(MODULE_NAME, Actions);
export { Actions as ModuleActions };

export class AddIngredient
  implements AppAction<Actions.ADD_INGREDIENT, Ingredient> {
  readonly type = Actions.ADD_INGREDIENT;
  constructor(readonly payload: Ingredient) {}
}

export class AddIngredients
  implements AppAction<Actions.ADD_INGREDIENTS, Ingredient[]> {
  readonly type = Actions.ADD_INGREDIENTS;
  constructor(readonly payload: Ingredient[]) {}
}

export class LoadIngredient
  implements AppAction<Actions.LOAD_INGREDIENT, number> {
  readonly type = Actions.LOAD_INGREDIENT;
  constructor(readonly payload: number) {}
}

export class UpdateIngredient
  implements AppAction<Actions.UPDATE_INGREDIENT, Ingredient> {
  readonly type = Actions.UPDATE_INGREDIENT;
  constructor(readonly payload: Ingredient) {}
}

export class RemoveIngredient implements AppAction<Actions.REMOVE_INGREDIENT> {
  readonly type = Actions.REMOVE_INGREDIENT;
}

export class UnloadIngredient implements AppAction<Actions.UNLOAD_INGREDIENT> {
  readonly type = Actions.UNLOAD_INGREDIENT;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | LoadIngredient
  | UnloadIngredient
  | UpdateIngredient
  | RemoveIngredient;
