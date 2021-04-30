import { Routes } from '@angular/router';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesLoaderResolver } from './recipes-loader.resolver';
import { AuthComponent } from '../auth/auth.component';
import { AuthorizationGuard } from './authorization.guard';

export const appRoutes: Routes = [
  {
    path: 'recipes',
    loadChildren: () =>
      import('../recipes/recipes.module').then(
        (module) => module.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('../shopping-list/shopping-list.module').then(
        (module) => module.ShoppingListModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../auth/auth.module').then((module) => module.AuthModule),
  },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];
