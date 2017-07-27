import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  searchCustomer: string;
  constructor(private router: Router,
      public _customerService: CustomerService) { }

  ngOnInit() {
  }
  SearchCustomer() {
  //  this._customerService.Search()
  }
  Test() {
    this.router.navigateByUrl('/posofsale-detail');
  }
}
