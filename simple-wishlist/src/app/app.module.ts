import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripDestinationComponent } from './trip-destination/trip-destination.component';
import { ListDestinationComponent } from './list-destination/list-destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { FormTripDestinationComponent } from './form-trip-destination/form-trip-destination.component';

import { DestinationApiClient } from './models/destination-api-client.models';
import {
  TripDestinationState,
  reducerTripDestination,
  initialState as initialTripDestinationState,
  TripDestinationEffects,
  TripDestinationActions,
} from './models/destination-trips.state.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ListDestinationComponent,
  },
  {
    path: 'destiny',
    component: DestinationDetailComponent,
  },
];

export interface AppState {
  destinations: TripDestinationState;
}

const reducers: ActionReducerMap<AppState, TripDestinationActions> = {
  destinations: reducerTripDestination,
};

const reducerInitialState = {
  destinations: initialTripDestinationState,
};

@NgModule({
  declarations: [
    AppComponent,
    TripDestinationComponent,
    ListDestinationComponent,
    DestinationDetailComponent,
    FormTripDestinationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(reducers, { initialState: reducerInitialState }),
    EffectsModule.forRoot([TripDestinationEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Simple Wishlist',
      maxAge: 25,
      logOnly: true,
    }),
  ],
  providers: [DestinationApiClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
