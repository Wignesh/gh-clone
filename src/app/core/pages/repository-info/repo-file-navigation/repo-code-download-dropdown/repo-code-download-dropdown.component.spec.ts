import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCodeDownloadDropdownComponent } from './repo-code-download-dropdown.component';

describe('RepoCodeDownloadDropdownComponent', () => {
  let component: RepoCodeDownloadDropdownComponent;
  let fixture: ComponentFixture<RepoCodeDownloadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoCodeDownloadDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCodeDownloadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
