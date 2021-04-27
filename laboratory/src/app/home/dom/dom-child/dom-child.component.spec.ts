import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomChildComponent } from './dom-child.component';

describe('DomChildComponent', () => {
  let component: DomChildComponent;
  let fixture: ComponentFixture<DomChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
