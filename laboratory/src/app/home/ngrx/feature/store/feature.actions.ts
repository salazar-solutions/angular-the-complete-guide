import { actionsForFeature } from '../../store/app.actions';
import { AppAction } from '../../store/definitions';

export const MODULE_NAME = 'feature';

enum ActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
}

actionsForFeature(MODULE_NAME, ActionTypes);
export { ActionTypes as FeatureActionTypes };
export class AddIngredient
  implements AppAction<ActionTypes.ADD_INGREDIENT, string> {
  readonly type = ActionTypes.ADD_INGREDIENT;
  constructor(public readonly payload: string) {}
}

export type FeatureActions = AddIngredient;
