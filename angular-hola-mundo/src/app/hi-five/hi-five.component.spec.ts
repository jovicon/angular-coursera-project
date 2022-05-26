import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiFiveComponent } from './hi-five.component';

describe('HiFiveComponent', () => {
  let component: HiFiveComponent;
  let fixture: ComponentFixture<HiFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
