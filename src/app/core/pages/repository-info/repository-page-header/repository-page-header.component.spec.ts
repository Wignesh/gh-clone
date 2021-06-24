import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryPageHeaderComponent } from './repository-page-header.component';

describe('RepositoryPageHeaderComponent', () => {
  let component: RepositoryPageHeaderComponent;
  let fixture: ComponentFixture<RepositoryPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
