import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripDestinationComponent } from './trip-destination/trip-destination.component';
import { ListDestinationComponent } from './list-destination/list-destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
