import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryPageAboutComponent } from './repository-page-about.component';

describe('RepositoryPageAboutComponent', () => {
  let component: RepositoryPageAboutComponent;
  let fixture: ComponentFixture<RepositoryPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryPageAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
