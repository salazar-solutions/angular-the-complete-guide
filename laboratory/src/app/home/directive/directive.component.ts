import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent {
  ifEnable: boolean = true;
  customDirectiveCounter = 1;

  constructor() {}

  enableIfClause() {
    this.ifEnable = !this.ifEnable;
  }

  increase() {
    this.customDirectiveCounter++;
  }
}
