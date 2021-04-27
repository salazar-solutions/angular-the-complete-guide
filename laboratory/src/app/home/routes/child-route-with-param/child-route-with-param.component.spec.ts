import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteWithParamComponent } from './child-route-with-param.component';

describe('ChildRouteWithParamComponent', () => {
  let component: ChildRouteWithParamComponent;
  let fixture: ComponentFixture<ChildRouteWithParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRouteWithParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteWithParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
