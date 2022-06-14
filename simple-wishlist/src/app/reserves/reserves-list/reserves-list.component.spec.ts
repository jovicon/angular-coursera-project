import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesListComponent } from './reserves-list.component';

describe('ReservesListComponent', () => {
  let component: ReservesListComponent;
  let fixture: ComponentFixture<ReservesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
