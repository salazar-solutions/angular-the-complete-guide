import { actionsForFeature } from 'src/app/store/app.actions';
import { AppAction } from 'src/app/store/definitions';

const MODULE_NAME = 'shopping-list';

enum Actions {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
}

actionsForFeature(MODULE_NAME, Actions);
export { Actions as ModuleActions };

export class AddIngredient implements AppAction<Actions.ADD_INGREDIENT> {
  readonly type = Actions.ADD_INGREDIENT;
}

export type ShoppingListActions = AddIngredient;
