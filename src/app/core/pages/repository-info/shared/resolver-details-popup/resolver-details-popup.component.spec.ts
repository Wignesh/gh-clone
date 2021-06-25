import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverDetailsPopupComponent } from './resolver-details-popup.component';

describe('ResolverDetailsPopupComponent', () => {
  let component: ResolverDetailsPopupComponent;
  let fixture: ComponentFixture<ResolverDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverDetailsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
