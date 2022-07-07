import { NgModule, InjectionToken } from '@angular/core';
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
import { FlightsComponentComponent } from './components/flights/flights-component/flights-component.component';
import { FlightsMainComponentComponent } from './components/flights/flights-main-component/flights-main-component.component';
import { FlightsMoreInfoComponentComponent } from './components/flights/flights-more-info-component/flights-more-info-component.component';
import { FlightsDetailsComponentComponent } from './components/flights/flights-details-component/flights-details-component.component';
import { ReservesModule } from './reserves/reserves.module';

export interface AppConfig {
  apiEndpoint: string;
}

const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'http://localhost:3000',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const childredFlightsRoutes: Routes = [
  {
    path: '',
    component: FlightsMainComponentComponent,
  },
  {
    path: 'more-info',
    component: FlightsMoreInfoComponentComponent,
  },
  {
    path: ':id',
    component: FlightsDetailsComponentComponent,
  },
];

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
  {
    path: 'flights',
    component: FlightsComponentComponent,
    children: childredFlightsRoutes,
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
    FlightsComponentComponent,
    FlightsMainComponentComponent,
    FlightsMoreInfoComponentComponent,
    FlightsDetailsComponentComponent,
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
    ReservesModule,
  ],
  providers: [
    AuthService,
    LoggedUserGuard,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
