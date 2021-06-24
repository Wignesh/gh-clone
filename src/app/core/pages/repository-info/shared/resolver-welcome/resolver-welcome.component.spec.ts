import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverWelcomeComponent } from './resolver-welcome.component';

describe('ResolverWelcomeComponent', () => {
  let component: ResolverWelcomeComponent;
  let fixture: ComponentFixture<ResolverWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
