import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteWithQueryParamComponent } from './child-route-with-query-param.component';

describe('ChildRouteWithQueryParamComponent', () => {
  let component: ChildRouteWithQueryParamComponent;
  let fixture: ComponentFixture<ChildRouteWithQueryParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouteWithQueryParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteWithQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
