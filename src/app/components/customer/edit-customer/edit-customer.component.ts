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
    console.log('be4 ser cus ', this.Customer);
      this.Customer.CustomerCode = 'CM001';
      this.Customer.CustomerNameTh = 'รนา้้า้า้า้า';
      this.Customer.CustomerNameEn = '好吃的';
      this.Customer.CustomerKnownName = 'キュ話ありますです';
      this.Customer.CustomerAddress = '21-32 Moo.2 Thepnimit Road';
      console.log('afeter set cus ', this.Customer);
    this.ar.params.subscribe(param => {

      console.log('get Cus Id ', param);
      this.CustomerId = JSON.stringify(param);
      this.db.list('customers', {
        query: {
          orderByChild: 'CustomerNameTh',
          equalTo: this.CustomerId
        }
      }).subscribe(customer => {
        console.log(customer);
      });

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
    this.Customer.CreateDate = '';
    this.Customer.UpdateBy = '';
    this.Customer.UpdateDate = '';
  }
  SaveCustomer() {

  }
  DeleteCustomer() {

  }
  ExitCustomer() {
    this.router.navigateByUrl('/main/(main-detail:search-customer)');
  }



}
