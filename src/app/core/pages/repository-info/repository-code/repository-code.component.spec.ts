import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryCodeComponent } from './repository-code.component';

describe('RepositoryCodeComponent', () => {
  let component: RepositoryCodeComponent;
  let fixture: ComponentFixture<RepositoryCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
