import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Employee } from './employee.model';

@Pipe({
  name: 'sorter',
})
export class SorterPipe implements PipeTransform {
  transform(value: Employee[]): Employee[] {
    const result = _.sortBy(value, (employee) => employee.name);

    return result;
  }
}
