import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1HeaderComponent } from './ex1-header.component';

describe('Ex1HeaderComponent', () => {
  let component: Ex1HeaderComponent;
  let fixture: ComponentFixture<Ex1HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
