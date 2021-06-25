import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBranchesDropdownComponent } from './repo-branches-dropdown.component';

describe('RepoBranchesDropdownComponent', () => {
  let component: RepoBranchesDropdownComponent;
  let fixture: ComponentFixture<RepoBranchesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoBranchesDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoBranchesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
