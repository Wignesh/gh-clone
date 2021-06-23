import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverHeaderbarComponent } from './resolver-headerbar.component';

describe('ResolverHeaderbarComponent', () => {
  let component: ResolverHeaderbarComponent;
  let fixture: ComponentFixture<ResolverHeaderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverHeaderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverHeaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
