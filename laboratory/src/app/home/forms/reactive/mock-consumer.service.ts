import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockConsumerService {
  constructor() {}
  mockRequest(t: number = 1000) {
    const response = this.getRandomBoolean();
    return new Promise<boolean>(function (resolve) {
      setTimeout(() => {
        resolve(response);
      }, t);
    });
  }

  private getRandomBoolean(): boolean {
    return !!Math.floor(Math.random() * Math.floor(1));
  }
}
