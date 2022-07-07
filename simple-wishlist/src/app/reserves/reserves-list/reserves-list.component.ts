import { Component, OnInit } from '@angular/core';
import { ReserveApiClientService } from '../reserve-api-client.service';

@Component({
  selector: 'app-reserves-list',
  templateUrl: './reserves-list.component.html',
  styleUrls: ['./reserves-list.component.scss'],
})
export class ReservesListComponent implements OnInit {
  constructor(public api: ReserveApiClientService) {}

  ngOnInit(): void {}
}
