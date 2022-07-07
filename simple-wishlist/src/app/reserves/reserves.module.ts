import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservesRoutingModule } from './reserves-routing.module';
import { ReservesListComponent } from './reserves-list/reserves-list.component';
import { ReservesDetailsComponent } from './reserves-details/reserves-details.component';
import { ReserveApiClientService } from './reserve-api-client.service';

@NgModule({
  imports: [CommonModule, ReservesRoutingModule],
  declarations: [ReservesListComponent, ReservesDetailsComponent],
  providers: [ReserveApiClientService],
})
export class ReservesModule {}
