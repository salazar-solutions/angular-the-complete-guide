import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExpressionComponent } from './template-expression.component';

describe('TemplateExpressionComponent', () => {
  let component: TemplateExpressionComponent;
  let fixture: ComponentFixture<TemplateExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
