import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryInfoPage } from './repository-info.page';

describe('RepositoryInfoPage', () => {
  let component: RepositoryInfoPage;
  let fixture: ComponentFixture<RepositoryInfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryInfoPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
