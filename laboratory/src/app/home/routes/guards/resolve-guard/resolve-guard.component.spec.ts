import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveGuardComponent } from './resolve-guard.component';

describe('ResolveGuardComponent', () => {
  let component: ResolveGuardComponent;
  let fixture: ComponentFixture<ResolveGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
