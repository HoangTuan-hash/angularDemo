import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2HomeComponent } from './ex2-home.component';

describe('Ex2HomeComponent', () => {
  let component: Ex2HomeComponent;
  let fixture: ComponentFixture<Ex2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
