import { Component, OnInit } from '@angular/core';
import { TripDestination } from '../models/trip-destination.models';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.scss'],
})
export class ListDestinationComponent implements OnInit {
  public destinations: TripDestination[];

  constructor() {
    this.destinations = [];
  }

  ngOnInit(): void {}

  public save(name: string, url: string): boolean {
    console.log(`Saving ${name} to ${url}`);
    const tripDestination = new TripDestination(name, url);

    this.destinations.push(tripDestination);

    console.log('destinations: ', this.destinations);
    return false;
  }
}
