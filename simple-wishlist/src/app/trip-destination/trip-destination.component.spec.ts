import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDestinationComponent } from './trip-destination.component';

describe('TripDestinationComponent', () => {
  let component: TripDestinationComponent;
  let fixture: ComponentFixture<TripDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
