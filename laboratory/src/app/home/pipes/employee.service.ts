import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeType, Employee, StatusType } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _employees: EmployeeType[] = [
    new Employee('Selma', 42),
    new Employee('Panfila', 45),
    new Employee('Poncho', 48, StatusType[StatusType.Inactive]),
  ];

  get employees() {
    return this._employees.slice();
  }

  constructor() {}

  employeeChanged = new Subject<void>();

  add(employee: Employee) {
    this._employees.push(employee);
    this.employeeChanged.next();
  }
}
