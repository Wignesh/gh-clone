import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsItemReleaseComponent } from './dashboard-news-item-release.component';

describe('DashboardNewsItemReleaseComponent', () => {
  let component: DashboardNewsItemReleaseComponent;
  let fixture: ComponentFixture<DashboardNewsItemReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewsItemReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsItemReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
