import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { isNumeric } from 'src/app/shared/common.validations';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnDestroy, OnInit {
  subscriptions: Subscription[] = [];
  editIndex: number = -1;

  form = this.fb.group({
    name: [, Validators.required],
    amount: [0, Validators.required],
  });
  constructor(
    private ingredientService: ShoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const sub = this.ingredientService.ingredientEditing.subscribe((index) => {
      this.editIndex = index;
      this.loadForm();
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe);
  }

  onSubmit() {
    if (this.form.status !== 'VALID') return;

    const { value } = this.form;
    if (this.editIndex < 0) {
      this.ingredientService.addIngredient(value);
    } else {
      this.ingredientService.edit(this.editIndex, value);
    }

    this.cleanForm();
  }

  loadForm() {
    if (this.editIndex < 0) return;
    const ingredient = this.ingredientService.getIngredient(this.editIndex);
    this.form.setValue(ingredient);
  }

  cleanForm() {
    this.form.reset();
    this.editIndex = -1;
  }

  delete() {
    if (this.editIndex < 0) return;
    this.ingredientService.delete(this.editIndex);
    this.cleanForm();
  }
}
