import { Injectable } from '@angular/core';
import { TripDestination } from './trip-destination.models';

@Injectable()
class DestinationApiClient {
  private destination: TripDestination[] = [];

  constructor() {}

  public add(destination: TripDestination): void {
    this.destination.push(destination);
  }

  public getAll(): TripDestination[] {
    return this.destination;
  }
}

export { DestinationApiClient };
