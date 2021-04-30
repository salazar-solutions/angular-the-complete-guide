import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export type FormValue = {
  ingredient: string;
};

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css'],
})
export class FormStoreComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Output() submited = new EventEmitter<FormValue>();

  form = this.fb.group({ ingredient: [] });

  ngOnInit(): void {}

  onSubmit() {
    console.log('FormStoreComponent: %o', this.form.value);
    this.submited.emit(this.form.value);
  }
}
