import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CardItemComponent } from './ex2-card-item.component';

describe('Ex2CardItemComponent', () => {
  let component: Ex2CardItemComponent;
  let fixture: ComponentFixture<Ex2CardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2CardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2CardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
