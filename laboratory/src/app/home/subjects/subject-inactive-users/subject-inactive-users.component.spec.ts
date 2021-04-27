import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInactiveUsersComponent } from './subject-inactive-users.component';

describe('SubjectInactiveUsersComponent', () => {
  let component: SubjectInactiveUsersComponent;
  let fixture: ComponentFixture<SubjectInactiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInactiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInactiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
