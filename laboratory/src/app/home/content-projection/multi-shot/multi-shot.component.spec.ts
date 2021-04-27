import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiShotComponent } from './multi-shot.component';

describe('MultiShotComponent', () => {
  let component: MultiShotComponent;
  let fixture: ComponentFixture<MultiShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiShotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
