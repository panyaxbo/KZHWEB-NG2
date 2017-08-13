import { Supplier } from './../../classes/supplier';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class SupplierService {
  suppliers: FirebaseListObservable<any[]>;
  supplier: FirebaseObjectObservable<any>;
  Supplier: Supplier = {
    $key: '',
    SupplierCode: '',
    SupplierNameTh: '',
    SupplierNameEn: '',
    SupplierTypeCode: '',
    TelNo: '',
    MobileNo: '',
    FaxNo: '',
    Email: '',
    Description: '',
    SalePerson: '',
    SalePersonContact: '',
    AccountNo: '',
    PaymentDescription: '',
    PaymentTypeCode: '',
    VateRate: 0,
    TaxId: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor() { }

}
