import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripDestinationComponent } from './components/trip-destination/trip-destination.component';
import { ListDestinationComponent } from './components/list-destination/list-destination.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { FormTripDestinationComponent } from './components/form-trip-destination/form-trip-destination.component';

import { DestinationApiClient } from './models/destination-api-client.models';
import {
  TripDestinationState,
  reducerTripDestination,
  initialState as initialTripDestinationState,
  TripDestinationEffects,
  TripDestinationActions,
} from './models/destination-trips.state.model';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';

import { AuthService } from 'src/app/services/auth.service';
import { LoggedUserGuard } from 'src/app/guards/logged-user/logged-user.guard';

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
    path: 'destiny/:id',
    component: DestinationDetailComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedUserGuard],
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
    LoginComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(reducers, {
      initialState: reducerInitialState,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        // strictStateSerializability: true,
        // strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
        // if you want to change complexe objects and that we have. We need to disable these settings
        // change strictStateImmutability, strictActionImmutability
        strictStateImmutability: false, // set this to false
        strictActionImmutability: false,
      }, // <-- disable for production
    }),
    EffectsModule.forRoot([TripDestinationEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Simple Wishlist',
      maxAge: 25,
      logOnly: true,
    }),
  ],
  providers: [DestinationApiClient, AuthService, LoggedUserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
