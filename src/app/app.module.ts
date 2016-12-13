import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerService } from './services/Customer.service';

@NgModule({
  imports: [
    BrowserModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHeYAHuio9FBVG2WRqPb232GJuibuiKBQ'
    }),
    HttpModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService]
})
export class AppModule { }
