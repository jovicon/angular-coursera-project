import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDestinationComponent } from './list-destination.component';

describe('ListDestinationComponent', () => {
  let component: ListDestinationComponent;
  let fixture: ComponentFixture<ListDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
