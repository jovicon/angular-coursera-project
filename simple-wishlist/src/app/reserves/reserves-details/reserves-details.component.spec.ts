import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesDetailsComponent } from './reserves-details.component';

describe('ReservesDetailsComponent', () => {
  let component: ReservesDetailsComponent;
  let fixture: ComponentFixture<ReservesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
