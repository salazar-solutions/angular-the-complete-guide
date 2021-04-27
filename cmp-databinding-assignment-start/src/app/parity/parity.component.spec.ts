import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParityComponent } from './parity.component';

describe('ParityComponent', () => {
  let component: ParityComponent;
  let fixture: ComponentFixture<ParityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
