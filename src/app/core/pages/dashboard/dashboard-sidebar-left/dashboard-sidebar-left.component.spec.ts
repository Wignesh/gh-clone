import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidebarLeftComponent } from './dashboard-sidebar-left.component';

describe('DashboardSidebarLeftComponent', () => {
  let component: DashboardSidebarLeftComponent;
  let fixture: ComponentFixture<DashboardSidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSidebarLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
