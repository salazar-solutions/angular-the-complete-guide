import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from '.';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private _clients: Client[] = [
    {
      email: 'string',
      firstName: 'string',
      lastName: 'String',
      pass: 'string',
      termsAndConditions: true,
      gender: 'string',
      comments: 'string',
      directions: {
        street: 'string',
        number: 999,
        state: 'string',
        country: 'string',
        cp: 28000,
        phone: {
          mobile: 'string',
          house: 'string',
        },
      },
    },
  ];

  public get clients() {
    return this._clients.slice();
  }

  clientChanged = new Subject<void>();
  constructor() {}

  add(client: Client) {
    this._clients.push(client);
    this.clientChanged.next();
  }

  edit(index: number, client: Client) {
    this._clients[index] = client;
    this.clientChanged.next();
  }

  delete(index: number) {
    this._clients.splice(index, 1);
    this.clientChanged.next();
  }
}
