import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromApp } from '../store';
import { ShoppingListActions, fromShoppingList } from './store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  observableState: Observable<fromShoppingList.State>;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.observableState = this.store.select(ShoppingListActions.MODULE_NAME);
  }

  edit(index: number) {
    this.store.dispatch(new ShoppingListActions.LoadIngredient(index));
  }
}
