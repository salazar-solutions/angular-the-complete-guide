import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthorizationGuard } from '../routing/authorization.guard';
import { RecipesLoaderResolver } from '../routing/recipes-loader.resolver';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthorizationGuard],
    canActivateChild: [AuthorizationGuard],
    component: RecipesComponent,
    resolve: [RecipesLoaderResolver],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
