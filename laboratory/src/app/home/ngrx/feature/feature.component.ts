import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormValue } from './form-store/form-store.component';
import { fromApp } from '../store';
import { fromFeature, FeatureActions } from '../feature/store';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  observableState?: Observable<fromFeature.State>;

  constructor(private store: Store<fromApp.AppState>) {
    this.observableState = this.store.select(FeatureActions.MODULE_NAME);
  }

  ngOnInit(): void {}

  onSubmit(formValue: FormValue) {
    this.store.dispatch(new FeatureActions.AddIngredient(formValue.ingredient));
  }
}
