import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesComponentSidebarComponent } from './routes-component-sidebar.component';

describe('RoutesComponentSidebarComponent', () => {
  let component: RoutesComponentSidebarComponent;
  let fixture: ComponentFixture<RoutesComponentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesComponentSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesComponentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
