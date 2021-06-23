import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverCardContainerComponent } from './resolver-card-container.component';

describe('ResolverCardContainerComponent', () => {
  let component: ResolverCardContainerComponent;
  let fixture: ComponentFixture<ResolverCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
