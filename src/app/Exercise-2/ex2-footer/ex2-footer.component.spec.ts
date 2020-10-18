import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2FooterComponent } from './ex2-footer.component';

describe('Ex2FooterComponent', () => {
  let component: Ex2FooterComponent;
  let fixture: ComponentFixture<Ex2FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
