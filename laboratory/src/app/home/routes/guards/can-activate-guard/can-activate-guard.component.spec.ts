import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivateGuardComponent } from './can-activate-guard.component';

describe('CanActivateGuardComponent', () => {
  let component: CanActivateGuardComponent;
  let fixture: ComponentFixture<CanActivateGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActivateGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActivateGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
