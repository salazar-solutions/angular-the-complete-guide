import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private ingredientService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => this.onIngredientAdded(ingredients)
    );
  }

  onIngredientAdded(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  edit(index: number) {
    this.ingredientService.loadIngredient(index);
  }
}
