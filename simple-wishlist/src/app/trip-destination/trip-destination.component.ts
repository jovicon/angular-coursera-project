import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  EventEmitter,
} from '@angular/core';
import { TripDestination } from '../models/trip-destination.models';

@Component({
  selector: 'app-trip-destination',
  templateUrl: './trip-destination.component.html',
  styleUrls: ['./trip-destination.component.scss'],
})
export class TripDestinationComponent implements OnInit {
  @Input() destination!: TripDestination;
  // @Input('index') position!: number; // change name from position to index
  @Input() position!: number;
  @Output() clicked: EventEmitter<TripDestination>;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  public componentName: string;

  constructor() {
    this.componentName = 'Trip Destination';
    this.clicked = new EventEmitter<TripDestination>();
  }

  ngOnInit(): void {}

  public go() {
    this.clicked.emit(this.destination);
    return true;
  }
}
