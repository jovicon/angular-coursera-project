import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsMainComponentComponent } from './flights-main-component.component';

describe('FlightsMainComponentComponent', () => {
  let component: FlightsMainComponentComponent;
  let fixture: ComponentFixture<FlightsMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsMainComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
