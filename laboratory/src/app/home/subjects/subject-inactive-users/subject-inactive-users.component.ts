import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Status, User } from '..';
import { InteractionService } from '../interaction.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-subject-inactive-users',
  templateUrl: './subject-inactive-users.component.html',
  styleUrls: ['./subject-inactive-users.component.css'],
})
export class SubjectInactiveUsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  counter: number = 0;
  private subscriptions: Subscription[] = [];

  constructor(
    private usersService: UsersService,
    private interactionService: InteractionService
  ) {}

  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.users = this.usersService.users[Status.Inactive];
    this.subscriptions.push(
      this.usersService.userChanged.subscribe({
        next: () => (this.users = this.usersService.users[Status.Inactive]),
      })
    );
    this.subscriptions.push(
      this.interactionService.countersChanged[Status.Inactive].subscribe({
        next: (counter) => (this.counter = counter),
      })
    );
  }

  disable(id: number) {
    this.usersService.changeStatus(id, Status.Inactive, Status.Active);
  }
}
