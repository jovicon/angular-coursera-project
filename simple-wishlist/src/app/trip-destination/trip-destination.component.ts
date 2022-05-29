import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TripDestination } from '../models/trip-destination.models';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss'],
})
export class TripDestinationComponent implements OnInit {
  @Input() destination!: TripDestination;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  public componentName: string;

  constructor() {
    this.componentName = 'Trip Destination';
  }

  ngOnInit(): void {}
}
