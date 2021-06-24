import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverDetailsCardComponent } from './resolver-details-card.component';

describe('ResolverDetailsCardComponent', () => {
  let component: ResolverDetailsCardComponent;
  let fixture: ComponentFixture<ResolverDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
