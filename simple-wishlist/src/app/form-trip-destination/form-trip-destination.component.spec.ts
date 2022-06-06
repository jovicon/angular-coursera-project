import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTripDestinationComponent } from './form-trip-destination.component';

describe('FormTripDestinationComponent', () => {
  let component: FormTripDestinationComponent;
  let fixture: ComponentFixture<FormTripDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTripDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTripDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
