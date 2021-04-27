import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isNumeric(control: AbstractControl): ValidationErrors | null {
  if (!isNaN(+control.value)) {
    return null;
  }
  return { isNumeric: { value: control.value } };
}
