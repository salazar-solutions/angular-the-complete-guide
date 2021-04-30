import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipesService: RecipesService) {}

  onRecipeSelect() {
    console.table(this.recipe);
    this.recipesService.onRecipeSelect(this.recipe);
  }
}
