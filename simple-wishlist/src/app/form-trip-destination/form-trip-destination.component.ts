import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

import { TripDestination } from '../models/trip-destination.models';

@Component({
  selector: 'app-form-trip-destination',
  templateUrl: './form-trip-destination.component.html',
  styleUrls: ['./form-trip-destination.component.scss'],
})
export class FormTripDestinationComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<TripDestination>;
  fg: FormGroup;
  minLong: number = 5;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: ['', Validators.compose([Validators.required, this.nameValidator])],
      url: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  save = (name: string, url: string): boolean => {
    const destination = new TripDestination(name, url);
    this.onItemAdded.emit(destination);
    return false;
  };

  nameValidator = (control: FormControl) => {
    const long = control.value.toString().trim().length;
    const isValid = !(long > 0 && long < this.minLong);

    console.log(`nameValidator is valid: ${isValid}`);
    return isValid ? null : { invalidName: !isValid };
  };
}
