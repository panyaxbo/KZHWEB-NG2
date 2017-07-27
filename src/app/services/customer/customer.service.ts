import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  searchCustomerList: Observable<any[]>;
  constructor(private http: Http,
              private db: AngularFireDatabase) { }

  GetCustomerLocalData() {
    return this.http.get('.assets/customer-data.json')
      .map(response => {
        return response.json();
      });
  }
  LoadCustomerData(): FirebaseListObservable<any> {
    return this.db.list('customers');

  //  return this.searchCustomerList;
   // console.log(this.searchCustomerList);
  }
}
