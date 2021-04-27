import { Component, OnInit } from '@angular/core';
import { CounterUsersService } from '../counter-users.service';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: User[] = [];
  counter: number = 0;
  constructor(
    private userService: UserService,
    private counterUsersService: CounterUsersService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.users.filter((u) => u.active);
    this.userService.userChange.subscribe((user) => this.update(user));
    this.counterUsersService.onIncreaseActive.subscribe(
      (counter) => (this.counter = counter)
    );
  }

  update(user: User) {
    this.users = this.userService.users.filter((u) => u.active);
  }

  disable(user: string) {
    this.userService.disable(user);
    this.counterUsersService.increaseInactive();
  }
}
