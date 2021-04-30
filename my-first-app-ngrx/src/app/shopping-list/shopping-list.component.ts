import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { fromApp } from '../store';
import { ShoppingListActions, fromShoppingList } from './store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[];
  observableState: Observable<fromShoppingList.State>;
  constructor(
    private ingredientService: ShoppingListService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    // this.ingredients = this.ingredientService.getIngredients();
    // this.ingredientService.ingredientAdded.subscribe(
    //   (ingredients: Ingredient[]) => this.onIngredientAdded(ingredients)
    // );
    this.observableState = this.store.select(ShoppingListActions.MODULE_NAME);
  }

  // onIngredientAdded(ingredients: Ingredient[]) {
  //   this.ingredients = ingredients;
  // }

  edit(index: number) {
    this.ingredientService.loadIngredient(index);
  }
}
