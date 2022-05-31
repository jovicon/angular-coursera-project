import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { TripDestination } from '../models/trip-destination.models';

@Component({
  selector: 'app-form-trip-destination',
  templateUrl: './form-trip-destination.component.html',
  styleUrls: ['./form-trip-destination.component.scss'],
})
export class FormTripDestinationComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<TripDestination>;
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({ name: [''], url: [''] });
  }

  ngOnInit(): void {}

  save = (name: string, url: string): boolean => {
    const destination = new TripDestination(name, url);
    this.onItemAdded.emit(destination);
    return false;
  };
}
