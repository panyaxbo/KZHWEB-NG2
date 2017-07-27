import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerTypeService } from '../../services/customer-type/customer-type.service';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {

  constructor(private router: Router,
              public _customerTypeService: CustomerTypeService) { }

  ngOnInit() {
  }



}
