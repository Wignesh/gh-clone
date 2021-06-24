import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsLoadingComponent } from './dashboard-news-loading.component';

describe('DashboardNewsLoadingComponent', () => {
  let component: DashboardNewsLoadingComponent;
  let fixture: ComponentFixture<DashboardNewsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
