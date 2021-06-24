import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsFeedSidebarRightComponent } from './dashboard-news-feed-sidebar-right.component';

describe('DashboardNewsFeedSidebarRightComponent', () => {
  let component: DashboardNewsFeedSidebarRightComponent;
  let fixture: ComponentFixture<DashboardNewsFeedSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsFeedSidebarRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsFeedSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
