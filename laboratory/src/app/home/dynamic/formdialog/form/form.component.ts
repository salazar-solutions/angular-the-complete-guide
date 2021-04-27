import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export type FormValue = {
  firstName: string;
  lastName: string;
};

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Output() submit = new EventEmitter<FormValue>();

  form = this.fb.group({ firstName: [], lastName: [] });

  ngOnInit(): void {
    console.log('FormComponentFormComponent');
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
