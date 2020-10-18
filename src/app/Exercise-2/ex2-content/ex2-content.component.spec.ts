import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ContentComponent } from './ex2-content.component';

describe('Ex2ContentComponent', () => {
  let component: Ex2ContentComponent;
  let fixture: ComponentFixture<Ex2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
