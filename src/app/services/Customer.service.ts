import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {
  /* TODO Change this to an actual web service url */
  //private activityUrl = 'app/mock/mockdata.json';
  private activityUrl = 'https://www.getyourguide.com/touring.json?key=2Gr0p7z96D';

  constructor(private http: Http) {}

  /**
   * Load a customers current activity
   * @Return A promise
   */
  getRandomCustomerActivity(): Promise<Object[]> {
    return this.http.get(this.activityUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  /**
   * Handle errors
   * TODO Implement proper error handling
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}