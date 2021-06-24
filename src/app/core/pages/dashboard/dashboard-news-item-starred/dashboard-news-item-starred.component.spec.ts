import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsItemStarredComponent } from './dashboard-news-item-starred.component';

describe('DashboardNewsItemStarredComponent', () => {
  let component: DashboardNewsItemStarredComponent;
  let fixture: ComponentFixture<DashboardNewsItemStarredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsItemStarredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsItemStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
