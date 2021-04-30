import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { fromApp } from '../../store';
import { ShoppingListActions } from './../store';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnDestroy, OnInit {
  subscriptions: Subscription[] = [];
  loadedIngredient?: Ingredient;

  form = this.fb.group({
    name: [, Validators.required],
    amount: [0, Validators.required],
  });
  constructor(
    private store: Store<fromApp.AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const sub = this.store
      .select(ShoppingListActions.MODULE_NAME)
      .subscribe((state) => {
        if (state.loadedIngredient) {
          this.loadedIngredient = state.loadedIngredient;
          this.form.setValue(this.loadedIngredient);
        }
      });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe);
  }

  onSubmit() {
    if (this.form.status !== 'VALID') return;
    const { value } = this.form;
    if (this.loadedIngredient) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(value));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(value));
    }
    this.cleanForm();
  }

  cleanForm() {
    this.form.reset();
    this.store.dispatch(new ShoppingListActions.UnloadIngredient());
    this.loadedIngredient = undefined;
  }

  delete() {
    if (!this.loadedIngredient) return;
    this.store.dispatch(new ShoppingListActions.RemoveIngredient());
    this.cleanForm();
  }
}
