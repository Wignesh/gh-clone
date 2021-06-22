import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesPage } from './repositories.page';

describe('RepositoriesPage', () => {
  let component: RepositoriesPage;
  let fixture: ComponentFixture<RepositoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoriesPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
