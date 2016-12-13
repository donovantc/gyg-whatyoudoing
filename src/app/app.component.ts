import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { CustomerService } from './services/Customer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  { 
  lat: number = 51.678418;
  lng: number = 7.809007;
  private currentActivity : Object = {};

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
    this.customerService.getRandomCustomerActivity()
              .then(data => this.currentActivity = data);

    Observable.interval(30000 /* 30 seconds */)
          .subscribe(() => {
            this.customerService.getRandomCustomerActivity()
              .then(data => this.currentActivity = data);
              console.log("changing data ...");
          });
  }
}
