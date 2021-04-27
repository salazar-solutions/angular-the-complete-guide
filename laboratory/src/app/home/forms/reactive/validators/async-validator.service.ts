import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { MockConsumerService } from '../mock-consumer.service';

interface AsyncValidator {
  validate(): (
    control: AbstractControl
  ) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

@Injectable({ providedIn: 'root' })
export class AsyncValidatorService implements AsyncValidator {
  constructor(private mockConsumerService: MockConsumerService) {}

  validate() {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const result: Promise<ValidationErrors | null> = this.mockConsumerService
        .mockRequest()
        .then((response: boolean) => {
          console.log('AsyncValidatorService:[%s]', response);
          return !response ? { asyncValidator: true } : null;
        });
      return result;
    };
  }

  //   validate(
  //     control: AbstractControl
  //   ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //     const result: Promise<ValidationErrors | null> = this.mockConsumerService
  //       .mockRequest()
  //       .then((response: boolean) => {
  //         console.log('AsyncValidatorService:[%s]', response);
  //         return !response ? { asyncValidator: true } : null;
  //       });
  //     return result;
  //   }
}
