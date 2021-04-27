import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanLoadGuardComponent } from './can-load-guard.component';

describe('CanLoadGuardComponent', () => {
  let component: CanLoadGuardComponent;
  let fixture: ComponentFixture<CanLoadGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanLoadGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanLoadGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
