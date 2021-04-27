import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectActiveUsersComponent } from './subject-active-users.component';

describe('SubjectActiveUsersComponent', () => {
  let component: SubjectActiveUsersComponent;
  let fixture: ComponentFixture<SubjectActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
