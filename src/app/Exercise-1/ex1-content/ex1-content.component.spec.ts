import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ContentComponent } from './ex1-content.component';

describe('Ex1ContentComponent', () => {
  let component: Ex1ContentComponent;
  let fixture: ComponentFixture<Ex1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
