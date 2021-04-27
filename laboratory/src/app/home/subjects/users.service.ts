import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status, User } from '.';
import { InteractionService } from './interaction.service';

//#region Definitions

type Users = {
  [key in Status]: User[];
};
type Subjects = {
  [key in Status]: Subject<number>;
};

//#endregion

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Users = {
    [Status.Active]: [
      { name: 'user 1', status: true },
      { name: 'user 2', status: true },
    ],
    [Status.Inactive]: [
      { name: 'user 3', status: false },
      { name: 'user 4', status: false },
    ],
  };

  userChanged = new Subject<void>();

  constructor(private interactionService: InteractionService) {}

  changeStatus(id: number, source: Status, target: Status) {
    const user = this.users[source][id];
    user.status = !user.status;
    this.users[source].splice(id, 1);
    this.users[target].push(user);
    this.userChanged.next();
    this.interactionService.increase(target);
  }
}
