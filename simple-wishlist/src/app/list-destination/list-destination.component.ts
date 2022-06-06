import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TripDestination } from '../models/trip-destination.models';
import { DestinationApiClient } from '../models/destination-api-client.models';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.scss'],
})
export class ListDestinationComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<TripDestination>;

  constructor(public destinationApiClient: DestinationApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {}

  public added(tripDestination: TripDestination): void {
    this.destinationApiClient.add(tripDestination);
  }

  public chosen(destination: TripDestination): void {
    this.destinationApiClient.getAll().forEach((dstny: TripDestination) => {
      dstny.setSelected(false);
    });
    destination.setSelected(true);
  }
}
