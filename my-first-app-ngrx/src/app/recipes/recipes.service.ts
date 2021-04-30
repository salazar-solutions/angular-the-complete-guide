import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<void>();

  private recipes: Recipe[] = [];

  constructor() {
    console.log('IAM CONSTRUCTOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    this.recipes.push(
      new Recipe(
        'A test Recipe',
        'This is Simply Test',
        'https://images-na.ssl-images-amazon.com/images/I/61eYoSqkHnL._AC_SL1200_.jpg',
        [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
      )
    );
    this.recipes.push(
      new Recipe(
        'A second test Recipe',
        'This is Simply Test',
        'https://images-na.ssl-images-amazon.com/images/I/61eYoSqkHnL._AC_SL1200_.jpg',
        [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
      )
    );
    this.recipes = [];
  }

  loadRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next();
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.next(recipe);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  editRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
