import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservesDetailsComponent } from './reserves-details/reserves-details.component';
import { ReservesListComponent } from './reserves-list/reserves-list.component';

const routes: Routes = [
  {
    path: 'reserves',
    component: ReservesListComponent,
  },
  {
    path: 'reserves/:id',
    component: ReservesDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservesRoutingModule {}
