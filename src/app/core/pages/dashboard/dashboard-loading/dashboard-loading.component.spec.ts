import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoadingComponent } from './dashboard-loading.component';

describe('DashboardLoadingComponent', () => {
  let component: DashboardLoadingComponent;
  let fixture: ComponentFixture<DashboardLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
