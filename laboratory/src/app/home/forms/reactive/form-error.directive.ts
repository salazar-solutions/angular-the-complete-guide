import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appFormError]',
})
export class FormErrorDirective {
  @Input('appFormError') form?: FormGroup;

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}

  ngAfterContentChecked(): void {
    this.viewContainer.clear();
    if (this.isValidControl(this.form)) return;
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  isValidControl(form: FormGroup | undefined): boolean {
    if (!form) {
      return true;
    }
    if (form.touched && !form.valid) {
      return false;
    }
    return true;
  }
}
