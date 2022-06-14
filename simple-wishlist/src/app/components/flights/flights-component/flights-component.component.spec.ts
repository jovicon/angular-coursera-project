import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponentComponent } from './flights-component.component';

describe('FlightsComponentComponent', () => {
  let component: FlightsComponentComponent;
  let fixture: ComponentFixture<FlightsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
