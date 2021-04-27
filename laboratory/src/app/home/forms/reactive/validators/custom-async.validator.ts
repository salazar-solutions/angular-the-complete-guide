import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MockConsumerService } from '../mock-consumer.service';

@Injectable({ providedIn: 'root' })
export class CustomAsyncValidator implements AsyncValidator {
  constructor(private mockConsumerService: MockConsumerService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const result: Promise<ValidationErrors | null> = this.mockConsumerService
      .mockRequest()
      .then((response: boolean) => {
        return response ? { customAsync: true } : null;
      });
    return result;
  }
}
