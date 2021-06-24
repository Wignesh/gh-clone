import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsItemCreatedComponent } from './dashboard-news-item-created.component';

describe('DashboardNewsItemCreatedComponent', () => {
  let component: DashboardNewsItemCreatedComponent;
  let fixture: ComponentFixture<DashboardNewsItemCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsItemCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsItemCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
