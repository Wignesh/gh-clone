import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopRepoComponent } from './pop-repo.component';

describe('PopRepoComponent', () => {
  let component: PopRepoComponent;
  let fixture: ComponentFixture<PopRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
