import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsMoreInfoComponentComponent } from './flights-more-info-component.component';

describe('FlightsMoreInfoComponentComponent', () => {
  let component: FlightsMoreInfoComponentComponent;
  let fixture: ComponentFixture<FlightsMoreInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsMoreInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsMoreInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
