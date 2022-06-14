import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights-details-component',
  templateUrl: './flights-details-component.component.html',
  styleUrls: ['./flights-details-component.component.scss'],
})
export class FlightsDetailsComponentComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {}
}
