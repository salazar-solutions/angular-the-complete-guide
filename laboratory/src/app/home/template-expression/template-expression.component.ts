import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-expression',
  templateUrl: './template-expression.component.html',
  styleUrls: ['./template-expression.component.css'],
})
export class TemplateExpressionComponent implements OnInit {
  public textInterpolation = 'Text interpolation';

  constructor() {}

  ngOnInit(): void {}

  getNumericValue() {
    return Math.floor(Math.random() * Math.floor(10));
  }
}
