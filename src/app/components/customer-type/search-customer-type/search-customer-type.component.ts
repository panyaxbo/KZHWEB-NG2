import { CustomerTypeService } from './../../../services/customer-type/customer-type.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-customer-type',
  templateUrl: './search-customer-type.component.html',
  styleUrls: ['./search-customer-type.component.css']
})
export class SearchCustomerTypeComponent implements OnInit {

  searchCustomerType: string;
  searchCustomerTypeList: any;

  constructor(private router: Router,
              private db: AngularFireDatabase,
              public _customerTypeService: CustomerTypeService
  ) { }

  ngOnInit() {
    this.SearchCustomerType();
  }

  SearchCustomerType() {
    this._customerTypeService.LoadCustomerTypeData()
    .subscribe(customerTypes => {
      this.searchCustomerTypeList = customerTypes;
    });
  }
}
