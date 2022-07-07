import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  forwardRef,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { TripDestination } from '../../models/trip-destination.models';

import { APP_CONFIG, AppConfig } from 'src/app/app.module';

@Component({
  selector: 'app-form-trip-destination',
  templateUrl: './form-trip-destination.component.html',
  styleUrls: ['./form-trip-destination.component.scss'],
})
export class FormTripDestinationComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<TripDestination>;
  fg: FormGroup;
  minLong: number = 5;
  searchResults: string[] = [];

  constructor(
    fb: FormBuilder,
    @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig
  ) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: ['', Validators.compose([Validators.required, this.nameValidator])],
      url: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const elementName = <HTMLInputElement>document.getElementById('name');
    fromEvent(elementName, 'input')
      .pipe(
        map((e: Event) => (e.target as HTMLInputElement).value),
        filter((text) => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((text: string) =>
          ajax(`${this.config.apiEndpoint}/destinations?search=${text}`)
        )
      )
      .subscribe((response: any) => {
        console.log('ngOnInit: ', response);
        this.searchResults = response.response;
      });
    //   switchMap(() => ajax('/assets/data.json'))
    // )
    // .subscribe((response: any) => {
    //   console.log(response);
    //   this.searchResults = response.response;
    // });
  }

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
