import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsItemCommitComponent } from './dashboard-news-item-commit.component';

describe('DashboardNewsItemCommitComponent', () => {
  let component: DashboardNewsItemCommitComponent;
  let fixture: ComponentFixture<DashboardNewsItemCommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsItemCommitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsItemCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
