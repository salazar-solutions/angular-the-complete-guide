import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status } from '.';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private counters: { [key in Status]: number } = {
    [Status.Active]: 0,
    [Status.Inactive]: 0,
  };

  countersChanged: { [key in Status]: Subject<number> } = {
    [Status.Active]: new Subject<number>(),
    [Status.Inactive]: new Subject<number>(),
  };

  constructor() {}

  public get active() {
    return this.counters[Status.Active];
  }
  public get inactive() {
    return this.counters[Status.Inactive];
  }

  public increase(status: Status) {
    this.countersChanged[status].next(++this.counters[status]);
  }
}
