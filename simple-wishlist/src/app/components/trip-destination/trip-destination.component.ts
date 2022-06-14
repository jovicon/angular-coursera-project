import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.module';
import { VoteUp, VoteDown } from '../../models/destination-trips.state.model';
import { TripDestination } from '../../models/trip-destination.models';

import { Injectable } from '@angular/core';
import * as clone from 'clone';

@Injectable({ providedIn: 'root' })
export class ClonerService {
  deepClone<T>(value: any): T {
    return clone<T>(value);
  }
}

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

  constructor(
    private store: Store<AppState>,
    private clonerService: ClonerService
  ) {
    this.componentName = 'Trip Destination';
    this.clicked = new EventEmitter<TripDestination>();
  }

  ngOnInit(): void {}

  public go() {
    this.clicked.emit(this.destination);
    return true;
  }

  public voteUp(): boolean {
    // const destionation = Object.assign({}, this.destination);
    // const destination = this.clonerService.deepClone<TripDestination>(
    //   this.destination
    // );
    this.store.dispatch(new VoteUp(this.destination));
    return false;
  }

  public voteDown(): boolean {
    this.store.dispatch(new VoteDown(this.destination));
    return false;
  }
}
