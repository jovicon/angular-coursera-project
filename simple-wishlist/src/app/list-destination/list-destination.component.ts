import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.module';
import {
  SetFavorite,
  AddDestination,
} from '../models/destination-trips.state.model';
import { TripDestination } from '../models/trip-destination.models';
import { DestinationApiClient } from '../models/destination-api-client.models';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.scss'],
})
export class ListDestinationComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<TripDestination>;
  updates: string[] = [];

  constructor(
    public destinationApiClient: DestinationApiClient,
    private store: Store<AppState>
  ) {
    this.onItemAdded = new EventEmitter();

    this.store
      .select((state) => state.destinations)
      .subscribe((destinationState) => {
        console.log('state', destinationState);
        if (destinationState.favorite !== null)
          this.updates.push(`${destinationState.favorite.name} is chosen`);
      });

    // this.store
    //   .select('destinations')
    //   .subscribe((destionationState: TripDestinationState) => {
    //     console.log('state', destionationState);
    //     destionationState !== null
    //       ? this.updates.push(`${destionationState.destinations} is chosen`)
    //       : null;
    //   });

    // this.destinationApiClient.subscribeOnChange(
    //   (destination: TripDestination | null) => {
    //     destination !== null
    //       ? this.updates.push(`${destination.name} is chosen`)
    //       : null;
    //   }
    // );
  }

  ngOnInit(): void {}

  public added(tripDestination: TripDestination): void {
    console.log('added');
    this.destinationApiClient.add(tripDestination);
    console.log('this.updates: ', this.updates);
    this.store.dispatch(new AddDestination(tripDestination));
    console.log('dispatched');
  }

  public chosen(destination: TripDestination): void {
    // this.destinationApiClient.getAll().forEach((dstny: TripDestination) => {
    //   dstny.setSelected(false);
    // });
    // destination.setSelected(true);

    this.destinationApiClient.choose(destination);
    this.store.dispatch(new SetFavorite(destination));
  }
}
