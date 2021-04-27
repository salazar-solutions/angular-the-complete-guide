import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShotComponent } from './single-shot.component';

describe('SingleShotComponent', () => {
  let component: SingleShotComponent;
  let fixture: ComponentFixture<SingleShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
