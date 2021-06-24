import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListSearchFormComponent } from './repo-list-search-form.component';

describe('RepoListSearchFormComponent', () => {
  let component: RepoListSearchFormComponent;
  let fixture: ComponentFixture<RepoListSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoListSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
