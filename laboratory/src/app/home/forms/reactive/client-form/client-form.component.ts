import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/shared/navigation.service';
import { ClientsService } from '../clients.service';
import { asyncValidation, isNumeric } from '../validators/common.validator';
import * as _ from 'lodash-es';
import { CustomAsyncValidator } from '../validators/custom-async.validator';
import { AsyncValidatorService } from '../validators/async-validator.service';
import { MockConsumerService } from '../mock-consumer.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit, OnChanges {
  index?: number;

  private errorMessages: { [key: string]: { [key: string]: any } } = {
    email: { required: 'This field is required', email: 'email is incorrect' },
    lastName: {
      asyncValidator: 'this is an error from async',
      asyncValidation: 'asyncValidation',
    },
    directions: { number: { isNumeric: 'requires a number' } },
    termsAndConditions: { test: 'te' },
  };

  form = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    firstName: [, [Validators.required]],
    lastName: [
      ,
      ,
      [
        //asyncValidation(this.mockConsumerService),
        // this.asyncValidatorService.validate.bind(this.asyncValidatorService),
        this.asyncValidatorService.validate(),
      ],
    ],
    pass: [, [Validators.required]],
    termsAndConditions: [, [Validators.required]],
    gender: [],
    comments: [],
    directions: this.fb.group({
      street: [, [Validators.required]],
      number: [, [Validators.required, isNumeric]],
      state: [, [Validators.required]],
      country: [, [Validators.required]],
      cp: [, [Validators.required, isNumeric]],
      phone: this.fb.group({ mobile: [, [Validators.required]], house: [] }),
    }),
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private clientService: ClientsService,
    private asyncValidatorService: AsyncValidatorService,
    private mockConsumerService: MockConsumerService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ClientFormComponent: form valid [%o]', this.form.status);
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    if (!this.index) return;
    const client = this.clientService.clients[this.index];
    //let cloneObj = Object.assign({}, this.form.getRawValue(), client);
    this.form.setValue(client);
  }

  onSubmit() {
    console.log('Status:[%s]', this.form.status);
    if (this.form.status !== 'VALID') return;

    if (this.index) {
      this.clientService.edit(this.index, this.form.value);
    } else {
      this.clientService.add(this.form.value);
    }
    this.navigationService.back();
  }

  getErrorMessage(key: string): { [key: string]: string } {
    _.has(this.errorMessages, key);
    if (!_.has(this.errorMessages, key)) return {};
    return _.get(this.errorMessages, key);
  }
}
