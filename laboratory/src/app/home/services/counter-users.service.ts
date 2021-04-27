import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterUsersService {
  private inactiveCounter: number = 0;
  private activeCounter: number = 0;
  onIncreaseActive = new EventEmitter<number>();
  onIncreaseInactive = new EventEmitter<number>();

  constructor() {}

  getInactiveCounter() {
    return this.inactiveCounter;
  }

  getActiveCounter() {
    return this.activeCounter;
  }

  increaseActive() {
    this.onIncreaseActive.emit(++this.activeCounter);
  }

  increaseInactive() {
    this.onIncreaseInactive.emit(++this.inactiveCounter);
  }
}
