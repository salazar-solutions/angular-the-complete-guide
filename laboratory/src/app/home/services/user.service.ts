import { EventEmitter, Injectable } from '@angular/core';

export type User = {
  name: string;
  active: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    { name: 'Max', active: true },
    { name: 'Chris', active: false },
    { name: 'Manu', active: false },
    { name: 'Anna', active: true },
  ];

  userChange = new EventEmitter<User>();

  constructor() {}

  disable(name: string) {
    this.changeStatus(name, false);
  }

  enable(name: string) {
    this.changeStatus(name);
  }

  private changeStatus(name: string, status: boolean = true) {
    const user = this.users.find((u) => u.name === name);
    if (!user) return;
    user.active = status;
    console.log('change %o', user);
    this.userChange.emit(user);
  }
}
