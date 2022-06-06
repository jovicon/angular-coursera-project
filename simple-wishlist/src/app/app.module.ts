import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripDestinationComponent } from './trip-destination/trip-destination.component';
import { ListDestinationComponent } from './list-destination/list-destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { FormTripDestinationComponent } from './form-trip-destination/form-trip-destination.component';

import { DestinationApiClient } from './models/destination-api-client.models';

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
  ],
  providers: [DestinationApiClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
