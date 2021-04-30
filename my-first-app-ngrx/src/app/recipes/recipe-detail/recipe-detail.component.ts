import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private ingredientService: ShoppingListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.retrieveRecipe(params);
    });
  }

  private retrieveRecipe(params: Params) {
    const id = +params['id'];
    this.recipe = this.recipesService.getRecipe(id);
  }

  addIngredients() {
    this.ingredientService.addIngredients(this.recipe.ingredients);
  }
}
