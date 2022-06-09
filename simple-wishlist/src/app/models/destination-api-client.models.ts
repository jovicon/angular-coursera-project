import { Injectable } from '@angular/core';
// import { Subject, BehaviorSubject } from 'rxjs';
import { TripDestination } from './trip-destination.models';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import {
  AddDestinationSuccess,
  SetFavorite,
} from './destination-trips.state.model';

@Injectable()
class DestinationApiClient {
  // private destinations: TripDestination[] = [];
  // current: Subject<TripDestination | null> =
  //   new BehaviorSubject<TripDestination | null>(null);

  constructor(private store: Store<AppState>) {}

  public add(destination: TripDestination): void {
    this.store.dispatch(new AddDestinationSuccess(destination));

    // this.destinations.push(destination);
  }

  // public getAll(): TripDestination[] {
  //   return this.destinations;
  // }

  // getById(id: number): TripDestination | undefined {
  //   return this.destinations.find((dstny: any) => dstny.id.toString() === id);
  // }

  // choose(destination: TripDestination): void {
  //   this.destinations.forEach((dstny: TripDestination) => {
  //     console.log('dstny: ', dstny);
  //     dstny.setSelected(false);
  //   });

  //   console.log(this.destinations);

  //   destination.setSelected(true);
  //   this.current.next(destination);
  // }

  choose(destination: TripDestination): void {
    this.store.dispatch(new SetFavorite(destination));
  }

  // subscribeOnChange(
  //   callback: (destination: TripDestination | null) => void
  // ): void {
  //   this.current.subscribe(callback);
  // }
}

export { DestinationApiClient };
