import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MockConsumerService } from '../mock-consumer.service';

export function isNumericWrapper(): ValidatorFn {
  console.log('isnumeric()');
  return (control: AbstractControl): ValidationErrors | null => {
    if (!isNaN(+control.value)) {
      return null;
    }
    return { isNumeric: { value: control.value } };
  };
}

export function isNumeric(control: AbstractControl): ValidationErrors | null {
  if (!isNaN(+control.value)) {
    return null;
  }
  return { isNumeric: { value: control.value } };
}

export function asyncValidation(
  mockConsumerService: MockConsumerService
): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const result: Promise<ValidationErrors | null> = mockConsumerService
      .mockRequest(5000)
      .then((response: boolean) => {
        console.log('asyncValidation:[%s]', response);
        return !response ? { asyncValidation: true } : null;
      });
    return result;
  };
}

// export function asyncValidationFn(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
//   const result: Promise<ValidationErrors | null> = mockConsumerService
//   .mockRequest()
//   .then((response: boolean) => {
//     return response ? { customAsync: true } : null;
//   });
// return result;
// }
