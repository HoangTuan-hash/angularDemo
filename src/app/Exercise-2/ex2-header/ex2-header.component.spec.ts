import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2HeaderComponent } from './ex2-header.component';

describe('Ex2HeaderComponent', () => {
  let component: Ex2HeaderComponent;
  let fixture: ComponentFixture<Ex2HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
