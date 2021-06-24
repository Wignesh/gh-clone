import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsFeedComponent } from './dashboard-news-feed.component';

describe('DashboardNewsFeedComponent', () => {
  let component: DashboardNewsFeedComponent;
  let fixture: ComponentFixture<DashboardNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
