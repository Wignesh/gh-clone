import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsItemCommitsComponent } from './dashboard-news-item-commits.component';

describe('DashboardNewsItemCommitsComponent', () => {
  let component: DashboardNewsItemCommitsComponent;
  let fixture: ComponentFixture<DashboardNewsItemCommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsItemCommitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsItemCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
