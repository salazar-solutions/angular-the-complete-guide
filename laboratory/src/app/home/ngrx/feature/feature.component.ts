import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducers';
import * as fromFeature from '../feature/store/feature.reducers';
import * as FeatureActions from '../feature/store/feature.actions';
import { FormValue } from './form-store/form-store.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  observableState?: Observable<fromFeature.State>;

  constructor(private store: Store<fromApp.AppState>) {
    this.observableState = this.store.select('feature');
  }

  ngOnInit(): void {}

  onSubmit(formValue: FormValue) {
    console.log('Calue: %o', formValue);
    this.store.dispatch(new FeatureActions.AddIngredient(formValue.ingredient));
  }
}
