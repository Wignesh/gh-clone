import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesUsedIndicatorComponent } from './languages-used-indicator.component';

describe('LanguagesUsedIndicatorComponent', () => {
  let component: LanguagesUsedIndicatorComponent;
  let fixture: ComponentFixture<LanguagesUsedIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesUsedIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesUsedIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
