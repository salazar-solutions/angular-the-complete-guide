import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Status, User } from '..';
import { InteractionService } from '../interaction.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-subject-active-users',
  templateUrl: './subject-active-users.component.html',
  styleUrls: ['./subject-active-users.component.css'],
})
export class SubjectActiveUsersComponent implements OnInit, OnDestroy {
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
    this.users = this.usersService.users[Status.Active];
    this.subscriptions.push(
      this.usersService.userChanged.subscribe({
        next: () => (this.users = this.usersService.users[Status.Active]),
      })
    );
    this.subscriptions.push(
      this.interactionService.countersChanged[Status.Active].subscribe({
        next: (counter) => (this.counter = counter),
      })
    );
  }

  disable(id: number) {
    this.usersService.changeStatus(id, Status.Active, Status.Inactive);
  }
}
