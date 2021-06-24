import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoFileNavigationComponent } from './repo-file-navigation.component';

describe('RepoFileNavigationComponent', () => {
  let component: RepoFileNavigationComponent;
  let fixture: ComponentFixture<RepoFileNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoFileNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoFileNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
