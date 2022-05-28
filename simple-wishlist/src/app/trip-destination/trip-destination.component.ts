import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss'],
})
export class TripDestinationComponent implements OnInit {
  @Input() destination!: string;
  public componentName: string;

  constructor() {
    this.componentName = 'Trip Destination';
  }

  ngOnInit(): void {}
}
