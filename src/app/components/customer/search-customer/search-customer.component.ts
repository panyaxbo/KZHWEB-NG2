import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer/customer.service';
import {Observable} from 'rxjs/Observable';

@Component({selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  searchCustomerList: any;
  constructor(private http: Http,
              private router: Router,
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

  NewCustomer() {
    this.router.navigateByUrl('/main/(main-detail:edit-customer/new)');
  }
  ExitCustomer() {
    this.router.navigateByUrl('/main');
  }

}
