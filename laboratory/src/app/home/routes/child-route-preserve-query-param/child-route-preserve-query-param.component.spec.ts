import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoutePreserveQueryParamComponent } from './child-route-preserve-query-param.component';

describe('ChildRoutePreserveQueryParamComponent', () => {
  let component: ChildRoutePreserveQueryParamComponent;
  let fixture: ComponentFixture<ChildRoutePreserveQueryParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRoutePreserveQueryParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRoutePreserveQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
