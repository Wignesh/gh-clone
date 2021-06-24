import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryPageReadmeComponent } from './repository-page-readme.component';

describe('RepositoryPageReadmeComponent', () => {
  let component: RepositoryPageReadmeComponent;
  let fixture: ComponentFixture<RepositoryPageReadmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryPageReadmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryPageReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
