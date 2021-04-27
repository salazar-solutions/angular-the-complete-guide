import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  ingredientEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomattoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(editIndex: number) {
    return this.getIngredients()[editIndex];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.getIngredients());
  }

  loadIngredient(index: number) {
    this.ingredientEditing.next(index);
  }

  edit(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(this.getIngredients());
  }

  delete(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.getIngredients());
  }
}
