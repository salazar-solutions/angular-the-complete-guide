import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { fromApp } from '../../store';
import { ShoppingListActions } from '../../shopping-list/store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private store: Store<fromApp.AppState>,
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
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }
}
