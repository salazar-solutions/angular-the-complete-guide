import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivateChildGuardComponent } from './can-activate-child-guard.component';

describe('CanActivateChildGuardComponent', () => {
  let component: CanActivateChildGuardComponent;
  let fixture: ComponentFixture<CanActivateChildGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActivateChildGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActivateChildGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
