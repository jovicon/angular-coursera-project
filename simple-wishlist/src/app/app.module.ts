import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripDestinationComponent } from './trip-destination/trip-destination.component';
import { ListDestinationComponent } from './list-destination/list-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    TripDestinationComponent,
    ListDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
