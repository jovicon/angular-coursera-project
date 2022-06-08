import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { TripDestination } from './trip-destination.models';

@Injectable()
class DestinationApiClient {
  private destinations: TripDestination[] = [];
  current: Subject<TripDestination | null> =
    new BehaviorSubject<TripDestination | null>(null);

  constructor() {}

  public add(destination: TripDestination): void {
    this.destinations.push(destination);
  }

  public getAll(): TripDestination[] {
    return this.destinations;
  }

  getById(id: number): TripDestination | undefined {
    return this.destinations.find((dstny: any) => dstny.id.toString() === id);
  }

  choose(destination: TripDestination): void {
    this.destinations.forEach((dstny: TripDestination) => {
      console.log('dstny: ', dstny);
      dstny.setSelected(false);
    });

    console.log(this.destinations);

    destination.setSelected(true);
    this.current.next(destination);
  }

  subscribeOnChange(
    callback: (destination: TripDestination | null) => void
  ): void {
    this.current.subscribe(callback);
  }
}

export { DestinationApiClient };
