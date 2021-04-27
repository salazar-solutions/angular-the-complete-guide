import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'filter',
})
export class FilterEmployeesPipe implements PipeTransform {
  transform(
    value: Employee[],
    filter: string,
    field: keyof Employee = 'name'
  ): Employee[] {
    if (!filter || filter === '') return value;

    const employees: Employee[] = [];
    for (const employee of value) {
      if (
        String(employee[field]).toUpperCase().includes(filter.toUpperCase())
      ) {
        employees.push(employee);
      }
    }

    return employees;
  }
}
