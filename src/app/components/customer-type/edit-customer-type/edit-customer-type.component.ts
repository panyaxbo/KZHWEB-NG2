import { CustomerTypeService } from './../../../services/customer-type/customer-type.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerType } from './../../../classes/customer-type';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-edit-customer-type',
  templateUrl: './edit-customer-type.component.html',
  styleUrls: ['./edit-customer-type.component.css']
})
export class EditCustomerTypeComponent implements OnInit {
  CustomerTypeId: any;
  CustomerType: CustomerType;
  constructor(private router: Router,
              private db: AngularFireDatabase,
              private ar: ActivatedRoute,
              public _customerTypeService: CustomerTypeService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.CustomerTypeId = param.id;
      if (this.CustomerTypeId === 'new') {
        this.NewCustomerType();
      } else {
        this._customerTypeService.LoadCustomerTypeByKey(this.CustomerTypeId)
        .subscribe(customerType => {
          this.PopulatedCustomerType(customerType);
        });
      }
    });
  }

  NewCustomerType() {
    this.CustomerType = this._customerTypeService.NewCustomerType();
  }

  PopulatedCustomerType(CustomerType) {
    console.log(CustomerType);
    this.CustomerType = this._customerTypeService.PopulatedCustomerType(CustomerType);
    console.log(this.CustomerType);
  }

  SaveCustomerType() {
    if (this.CustomerType.$key === '' || this.CustomerType.$key === undefined) {
      this._customerTypeService.CreateCustomerType(this.CustomerType);
    } else {
      this._customerTypeService.UpdateCustomerType(this.CustomerType);
    }
  }
  BacktoSearchCustomerType() {
    this.router.navigateByUrl('/main/(main-detail:search-customer-type)');
  }
  ExitCustomerType() {
    this.router.navigateByUrl('/main');
  }
}
