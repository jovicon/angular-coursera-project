import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservesRoutingModule } from './reserves-routing.module';
import { ReservesListComponent } from './reserves-list/reserves-list.component';
import { ReservesDetailsComponent } from './reserves-details/reserves-details.component';

@NgModule({
  imports: [CommonModule, ReservesRoutingModule],
  declarations: [ReservesListComponent, ReservesDetailsComponent],
})
export class ReservesModule {}
