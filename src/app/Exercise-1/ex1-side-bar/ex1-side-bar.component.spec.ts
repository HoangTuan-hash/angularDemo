import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1SideBarComponent } from './ex1-side-bar.component';

describe('Ex1SideBarComponent', () => {
  let component: Ex1SideBarComponent;
  let fixture: ComponentFixture<Ex1SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1SideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
