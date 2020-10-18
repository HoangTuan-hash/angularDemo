import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1FooterComponent } from './ex1-footer.component';

describe('Ex1FooterComponent', () => {
  let component: Ex1FooterComponent;
  let fixture: ComponentFixture<Ex1FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
