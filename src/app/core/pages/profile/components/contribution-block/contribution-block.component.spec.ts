import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionBlockComponent } from './contribution-block.component';

describe('ContributionBlockComponent', () => {
  let component: ContributionBlockComponent;
  let fixture: ComponentFixture<ContributionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
