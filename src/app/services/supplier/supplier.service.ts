import { AppConfigService } from './../app-config/app-config.service';
import { UserService } from './../user/user.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { Supplier } from './../../classes/supplier';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class SupplierService {
  private MODULE_CODE = 'SP';
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
    VatRate: 0,
    TaxId: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              private _userService: UserService,
              private _appConfig: AppConfigService) {
    this.suppliers = this.db.list('suppliers');
  }
  NewSupplier() {
    return this.Supplier = {
      $key: '',
      SupplierCode: '',
      SupplierNameTh: '',
      SupplierNameEn: '',
      SupplierTypeCode: '',
      TelNo: '',
      MobileNo: '',
      FaxNo: 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

















      
      
      
      
      
      
      
      
      
      
      '',
      Email: '',
      Description: '',
      SalePerson: '',
      SalePersonContact: '',
      AccountNo: '',
      PaymentDescription: '',
      PaymentTypeCode: '',
      VatRate: 0,
      TaxId: '',
      CreateBy: '',
      CreateDate: '',
      UpdateBy: '',
      UpdateDate: ''
    }
  }
  PopulatedSupplier(supplier) {
    this.Supplier.$key = supplier.$key;
    this.Supplier.SupplierCode = supplier.SupplierCode;
    this.Supplier.SupplierNameTh = supplier.SupplierNameTh;
    this.Supplier.SupplierNameEn = supplier.SupplierNameEn;
    this.Supplier.SupplierTypeCode = supplier.SupplierTypeCode;
    this.Supplier.TelNo = supplier.TelNo;
    this.Supplier.MobileNo = supplier.MobileNo;
    this.Supplier.FaxNo = supplier.FaxNo;
    this.Supplier.Email = supplier.Email;
    this.Supplier.Description = supplier.Description;
    this.Supplier.SalePerson = supplier.SalePerson;
    this.Supplier.SalePersonContact = supplier.SalePersonContact;
    this.Supplier.AccountNo = supplier.AccountNo;
    this.Supplier.PaymentDescription = supplier.PaymentDescription;
    this.Supplier.PaymentTypeCode = supplier.PaymentTypeCode;
    this.Supplier.VatRate = supplier.VatRate;
    this.Supplier.TaxId = supplier.TaxId;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    const username = this._userService.GetCurrentUserData().displayName;
    this.Supplier.CreateBy = supplier.CreateBy === undefined ? username : supplier.CreateBy;
    this.Supplier.CreateDate = supplier.CreateDate === undefined ? currentDate : supplier.CreateDate;
    this.Supplier.UpdateBy = supplier.UpdateBy === undefined ? username : supplier.UpdateBy;
    this.Supplier.UpdateDate = supplier.UpdateDate === undefined ? currentDate : supplier.UpdateDate;
    return this.Supplier;
  }
  LoadSupplierData(): FirebaseListObservable<any[]> {
    return this.suppliers;
  }
  LoadSupplierByKey(key): FirebaseObjectObservable<any> {
    this.supplier = this.db.object('suppliers/' + key);
    return this.supplier;
  }
  LoadSupplierComboBox(): any {
    return this.db.list('suppliers');
  }
  CreateSupplier(newSupplier) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.list('suppliers').push({
      SupplierCode: newSupplier.SupplierCode,
      SupplierNameTh: newSupplier.SupplierNameTh,
      SupplierNameEn: newSupplier.SupplierNameEn,
      SupplierTypeCode: newSupplier.SupplierTypeCode,
      TelNo: newSupplier.TelNo,
      MobileNo: newSupplier.MobileNo,
      FaxNo: newSupplier.FaxNo,
      Email: newSupplier.Email,
      Description: newSupplier.Description,
      SalePerson: newSupplier.SalePerson,
      SalePersonContact: newSupplier.SalePersonContact,
      AccountNo: newSupplier.AccountNo,
      PaymentDescription: newSupplier.PaymentDescription,
      PaymentTypeCode: newSupplier.PaymentTypeCode,
      VatRate: newSupplier.VatRate,
      TaxId: newSupplier.TaxId,
      CreateBy: displayName,
      CreateDate: currentTime,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  UpdateSupplier(newSupplier) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.object('suppliers/' + newSupplier.$key)
    .set({
      SupplierCode: newSupplier.SupplierCode,
      SupplierNameTh: newSupplier.SupplierNameTh,
      SupplierNameEn: newSupplier.SupplierNameEn,
      SupplierTypeCode: newSupplier.SupplierTypeCode,
      TelNo: newSupplier.TelNo,
      MobileNo: newSupplier.MobileNo,
      FaxNo: newSupplier.FaxNo,
      Email: newSupplier.Email,
      Description: newSupplier.Description,
      SalePerson: newSupplier.SalePerson,
      SalePersonContact: newSupplier.SalePersonContact,
      AccountNo: newSupplier.AccountNo,
      PaymentDescription: newSupplier.PaymentDescription,
      PaymentTypeCode: newSupplier.PaymentTypeCode,
      VatRate: newSupplier.VatRate,
      TaxId: newSupplier.TaxId,
      CreateBy: newSupplier.CreateBy,
      CreateDate: newSupplier.CreateDate,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  DeleteSupplier() {
    this.supplier.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
