import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Employee, EmployeeType, StatusType } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit, OnDestroy {
  filterControl = new FormControl();
  employees: EmployeeType[] = [];
  subscriptions: Subscription[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
    const subscription = this.employeeService.employeeChanged.subscribe({
      next: () => (this.employees = this.employeeService.employees),
    });
    this.subscriptions.push(subscription);
  }

  add() {
    let r = Math.random().toString(36).substring(7);
    this.employeeService.add(new Employee(r + '_TEST', 40));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
