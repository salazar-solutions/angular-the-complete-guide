import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html',
  styleUrls: ['./template-statement.component.css'],
})
export class TemplateStatementComponent implements OnInit {
  public value: number = 10;
  private printedValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  printValue(value: number) {
    console.log('pre value:[%s]', this.value);
    this.value = value;
    console.log('post value:[%s]', this.value);
  }
}
