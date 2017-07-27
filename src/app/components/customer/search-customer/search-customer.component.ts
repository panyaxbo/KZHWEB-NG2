import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CustomerService } from '../../../services/customer/customer.service';
import {Observable} from "rxjs/Observable";
@Component({selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  searchCustomerList: any;
  constructor(private http: Http,
              public _customerService: CustomerService
            ) { }

  ngOnInit() {
    console.log(this.LoadCustomerData());
  }

  LoadCustomerData() {
    this._customerService.LoadCustomerData().subscribe(customers => {
      console.log(customers);
      this.searchCustomerList = customers;
    });
  //  return this.searchCustomerList;
  }

}
