import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { RecipesAdaptorService } from '../shared/recipes-adaptor.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesLoaderResolver implements Resolve<Recipe[]> {
  constructor(
    private recipesAdaptor: RecipesAdaptorService,
    private recipeService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] {
    let recipes = this.recipeService.getRecipes();
    if (recipes.length > 0) {
      return recipes;
    }
    this.recipesAdaptor
      .fetch()
      .subscribe((recipes) => this.recipeService.loadRecipes(recipes));

    return this.recipeService.getRecipes();
  }
}
