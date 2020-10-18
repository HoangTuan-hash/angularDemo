import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CarouselComponent } from './ex2-carousel.component';

describe('Ex2CarouselComponent', () => {
  let component: Ex2CarouselComponent;
  let fixture: ComponentFixture<Ex2CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2CarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
