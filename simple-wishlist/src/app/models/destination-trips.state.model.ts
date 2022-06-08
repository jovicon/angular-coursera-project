import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripDestination } from './trip-destination.models';

// STATE
export interface TripDestinationState {
  destinations: TripDestination[];
  loading: boolean;
  favorite: TripDestination | null;
}

export const initialState: TripDestinationState = {
  destinations: [],
  loading: false,
  favorite: null,
};

// ACTIONS
export enum TripDestinationActionTypes {
  LoadingDestinations = '[TripDestination] Loading Destinations',
  LoadingDestinationsSuccess = '[TripDestination] Loading Destinations Success',
  LoadingDestinationsFailure = '[TripDestination] Loading Destinations Failure',
  AddDestination = '[TripDestination] Add Destination',
  AddDestinationSuccess = '[TripDestination] Add Destination Success',
  AddDestinationFailure = '[TripDestination] Add Destination Failure',
  RemoveDestination = '[TripDestination] Remove Destination',
  RemoveDestinationSuccess = '[TripDestination] Remove Destination Success',
  RemoveDestinationFailure = '[TripDestination] Remove Destination Failure',
  SetFavorite = '[TripDestination] Set Favorite',
  SetFavoriteSuccess = '[TripDestination] Set Favorite Success',
  SetFavoriteFailure = '[TripDestination] Set Favorite Failure',
}

export class LoadingDestinations implements Action {
  readonly type = TripDestinationActionTypes.LoadingDestinations;
}

export class LoadingDestinationsSuccess implements Action {
  readonly type = TripDestinationActionTypes.LoadingDestinationsSuccess;
  constructor(public payload: TripDestination[]) {}
}

export class LoadingDestinationsFailure implements Action {
  readonly type = TripDestinationActionTypes.LoadingDestinationsFailure;
  constructor(public payload: string) {}
}

export class AddDestination implements Action {
  readonly type = TripDestinationActionTypes.AddDestination;
  constructor(public payload: TripDestination) {}
}

export class AddDestinationSuccess implements Action {
  readonly type = TripDestinationActionTypes.AddDestinationSuccess;
  constructor(public payload: TripDestination) {}
}

export class AddDestinationFailure implements Action {
  readonly type = TripDestinationActionTypes.AddDestinationFailure;
  constructor(public payload: string) {}
}

export class RemoveDestination implements Action {
  readonly type = TripDestinationActionTypes.RemoveDestination;
  constructor(public payload: TripDestination) {}
}

export class RemoveDestinationSuccess implements Action {
  readonly type = TripDestinationActionTypes.RemoveDestinationSuccess;
  constructor(public payload: TripDestination) {}
}

export class RemoveDestinationFailure implements Action {
  readonly type = TripDestinationActionTypes.RemoveDestinationFailure;
  constructor(public payload: string) {}
}

export class SetFavorite implements Action {
  readonly type = TripDestinationActionTypes.SetFavorite;
  constructor(public payload: TripDestination) {}
}

export class SetFavoriteSuccess implements Action {
  readonly type = TripDestinationActionTypes.SetFavoriteSuccess;
  constructor(public payload: TripDestination) {}
}

export class SetFavoriteFailure implements Action {
  readonly type = TripDestinationActionTypes.SetFavoriteFailure;
  constructor(public payload: string) {}
}

export type TripDestinationActions =
  | LoadingDestinations
  | LoadingDestinationsSuccess
  | LoadingDestinationsFailure
  | AddDestination
  | AddDestinationSuccess
  | AddDestinationFailure
  | RemoveDestination
  | RemoveDestinationSuccess
  | RemoveDestinationFailure
  | SetFavorite
  | SetFavoriteSuccess
  | SetFavoriteFailure;

// REDUCERS
export const reducerTripDestination = (
  state: TripDestinationState = initialState,
  action: TripDestinationActions
): TripDestinationState => {
  switch (action.type) {
    case TripDestinationActionTypes.LoadingDestinations:
      return { ...state, loading: true };
    case TripDestinationActionTypes.LoadingDestinationsSuccess:
      return { ...state, loading: false, destinations: action.payload };
    case TripDestinationActionTypes.LoadingDestinationsFailure:
      return { ...state, loading: false, destinations: [] };
    case TripDestinationActionTypes.AddDestination:
      return { ...state, loading: true };
    case TripDestinationActionTypes.AddDestinationSuccess:
      return {
        ...state,
        loading: false,
        destinations: [...state.destinations, action.payload],
      };
    case TripDestinationActionTypes.AddDestinationFailure:
      return { ...state, loading: false, destinations: [] };
    case TripDestinationActionTypes.RemoveDestination:
      return { ...state, loading: true };
    case TripDestinationActionTypes.RemoveDestinationSuccess:
      return {
        ...state,
        loading: false,
        destinations: state.destinations.filter(
          (destination) => destination.id !== action.payload.id
        ),
      };
    case TripDestinationActionTypes.RemoveDestinationFailure:
      return { ...state, loading: false, destinations: [] };
    case TripDestinationActionTypes.SetFavorite:
      return { ...state, loading: true };
    case TripDestinationActionTypes.SetFavoriteSuccess:
      return { ...state, loading: false, favorite: action.payload };
    case TripDestinationActionTypes.SetFavoriteFailure:
      return { ...state, loading: false, favorite: null };
    default:
      return state;
  }
};

// EFFECTS
@Injectable()
export class TripDestinationEffects {
  constructor(private actions$: Actions) {}

  // LOADING DESTINATIONS
  // loadDestinations$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TripDestinationActionTypes.LoadingDestinations),
  //     map(() => of(new LoadingDestinationsSuccess([])))
  //   ));

  // ADD DESTINATION
  addDestination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TripDestinationActionTypes.AddDestination),
      map(
        // (action: AddDestination) => new AddDestinationSuccess(action.payload),
        (action: AddDestination) => {
          console.log('addDestination');
          return new SetFavorite(action.payload);
        }
      )
    )
  );

  // SET FAVORITE
  setFavorite$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TripDestinationActionTypes.SetFavorite),
        map((action: SetFavorite) => {
          console.log('setFavorite');
          return new SetFavoriteSuccess(action.payload);
        })
      )
    // { dispatch: false } // do not dispatch any actions
  );
}
