import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[];
  private subscriptions: Subscription[] = [];

  constructor(private recipesService: RecipesService) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    const subscription = this.recipesService.recipeChanged.subscribe({
      next: () => {
        this.recipes = this.recipesService.getRecipes();
      },
    });

    this.subscriptions.push(subscription);

    this.recipes = this.recipesService.getRecipes();
  }
}
