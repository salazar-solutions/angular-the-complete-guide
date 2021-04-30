import { Ingredient } from 'src/app/shared/ingredient.model';
import { actionsForFeature } from 'src/app/store/app.actions';
import { AppAction } from 'src/app/store/definitions';

export const MODULE_NAME = 'shoppingList';

enum Actions {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
}

actionsForFeature(MODULE_NAME, Actions);
export { Actions as ModuleActions };

export class AddIngredient
  implements AppAction<Actions.ADD_INGREDIENT, Ingredient> {
  readonly type = Actions.ADD_INGREDIENT;
  constructor(readonly payload: Ingredient) {}
}

export type ShoppingListActions = AddIngredient;
