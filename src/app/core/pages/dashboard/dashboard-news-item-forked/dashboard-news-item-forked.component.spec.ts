import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsItemForkedComponent } from './dashboard-news-item-forked.component';

describe('DashboardNewsItemForkedComponent', () => {
  let component: DashboardNewsItemForkedComponent;
  let fixture: ComponentFixture<DashboardNewsItemForkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsItemForkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsItemForkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
