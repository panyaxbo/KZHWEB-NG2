import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Customer } from '../../../classes/customer';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  CustomerId: any;
  Customer: Customer = {
    CustomerCode: '',
    CustomerNameTh: '',
    CustomerNameEn: '',
    CustomerKnownName: '',
    CustomerType: '',
    CustomerAddress: '',
    Province: '',
    Disitrct: '',
    Subdistrict: '',
    Zipcode: '',
    TaxId: '',
    TelNo: '',
    MobileNo: '',
    FaxNo: '',
    Email: '',
    Description: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              private router: Router) { }

  ngOnInit() {
      this.ar.params.subscribe(param => {
        this.CustomerId = param.id;
        if (this.CustomerId === 'new') {
          this.NewCustomer();
        } else {
          this.db.object('/customers/' + this.CustomerId
          ).subscribe(customer => {
            console.log(customer);
          });
        }
      });
  }
  NewCustomer() {
    this.Customer.CustomerCode = '';
    this.Customer.CustomerNameTh = '';
    this.Customer.CustomerNameEn = '';
    this.Customer.CustomerKnownName = '';
    this.Customer.CustomerType = '';
    this.Customer.CustomerAddress = '';
    this.Customer.Province = '';
    this.Customer.Disitrct = '';
    this.Customer.Subdistrict = '';
    this.Customer.Zipcode = '';
    this.Customer.TaxId = '';
    this.Customer.TelNo = '';
    this.Customer.MobileNo = '';
    this.Customer.FaxNo = '';
    this.Customer.Email = '';
    this.Customer.Description = '';
    this.Customer.CreateBy = '';
    this.Customer.CreateDate = new Date().toString();
    this.Customer.UpdateBy = '';
    this.Customer.UpdateDate = new Date().toString();
  }
  SaveCustomer() {

  }
  DeleteCustomer() {

  }
  ExitCustomer() {
    this.router.navigateByUrl('/main/(main-detail:search-customer)');
  }



}
