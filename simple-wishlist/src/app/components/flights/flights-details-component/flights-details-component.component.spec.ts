import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDetailsComponentComponent } from './flights-details-component.component';

describe('FlightsDetailsComponentComponent', () => {
  let component: FlightsDetailsComponentComponent;
  let fixture: ComponentFixture<FlightsDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
