import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  message: string;
  constructor(
    private Route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Route.data.subscribe(
      (data: Data) => this.message = data['message']
    );
  }

}
