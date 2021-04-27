import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export type ErrorMessage = {
  [key: string]: string;
};
@Directive({
  selector: '[appFormControlError]',
})
export class FormControlErrorDirective {
  @Input('appFormControlError') formControl?: AbstractControl | null;
  @Input('appFormControlErrorErrorMessages') errorMessages?: ErrorMessage;

  private defaults: ErrorMessage = {
    required: 'This field is required',
    email: 'email is incorrect',
  };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngAfterContentChecked(): void {
    this.viewContainer.clear();
    if (!this.formControl) return;

    if (this.isValidControl(this.formControl)) return;

    const embeddedViewRef = this.viewContainer.createEmbeddedView<HTMLElement>(
      this.templateRef
    );

    const errorMessage = this.getErrorMessage(this.formControl);
    if (!errorMessage) return;
    (<HTMLElement>embeddedViewRef.rootNodes[0]).innerText = errorMessage;
  }

  getErrorMessage({ errors }: AbstractControl): string | undefined {
    if (!errors) return undefined;

    for (const key in errors) {
      if (!this.errorMessages || !this.errorMessages[key]) {
        return this.defaults[key];
      }
      return this.errorMessages[key];
    }

    return undefined;
  }

  isValidControl(formControl: AbstractControl): boolean {
    if (formControl.touched && !formControl.valid) {
      return false;
    }
    return true;
  }
}
