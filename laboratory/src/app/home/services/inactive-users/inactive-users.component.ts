import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterUsersService } from '../counter-users.service';
import { User, UserService as UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  inactiveUsers: User[] = [];
  counter: number = 0;

  constructor(
    private userService: UserService,
    private counterUsersService: CounterUsersService
  ) {}

  ngOnInit(): void {
    this.userService.userChange.subscribe((user) => this.onUserChange(user));
    this.inactiveUsers = this.userService.users.filter((u) => !u.active);
    this.counterUsersService.onIncreaseInactive.subscribe(
      (c) => (this.counter = c)
    );
  }

  onUserChange(user: User) {
    console.log('invactive %o', user);
    this.inactiveUsers = this.userService.users.filter((u) => !u.active);
  }

  enable(name: string) {
    this.userService.enable(name);
    this.counterUsersService.increaseActive();
  }
}
