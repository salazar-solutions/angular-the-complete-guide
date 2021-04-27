import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(($event: Recipe) =>
      this.onRecipeSelect($event)
    );
  }

  onRecipeSelect($event: Recipe) {
    this.recipe = $event;
    console.table(this.recipe);
  }
}
