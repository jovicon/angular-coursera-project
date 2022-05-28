import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.scss'],
})
export class ListDestinationComponent implements OnInit {
  public destinations: string[];

  constructor() {
    this.destinations = ['Paris', 'New York', 'London', 'Rome'];
  }

  ngOnInit(): void {}
}
