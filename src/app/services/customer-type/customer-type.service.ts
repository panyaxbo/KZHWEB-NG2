import { AppConfigService } from './../app-config/app-config.service';
import { UserService } from './../user/user.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { CustomerType } from './../../classes/customer-type';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerTypeService {
  private MODULE_CODE = 'CT';
  customerTypes: FirebaseListObservable<any[]>;
  customerType: FirebaseObjectObservable<any>;
  CustomerType: CustomerType = {
    $key: '',
    CustomerTypeCode: '',
    CustomerTypeNameTh: '',
    CustomerTypeNameEn: '',
    UpdateBy: '',
    UpdateDate: '',
    CreateBy: '',
    CreateDate: ''
  };
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _userService: UserService,
              public _appConfig: AppConfigService) {
    this.customerTypes = this.db.list('customer-types');

  }
  NewCustomerType() {
    return this.CustomerType = {
      $key: '',
      CustomerTypeCode: '',
      CustomerTypeNameTh: '',
      CustomerTypeNameEn: '',
      UpdateBy: '',
      UpdateDate: '',
      CreateBy: '',
      CreateDate: ''
    }
  }
  PopulatedCustomerType(customerType) {
    this.CustomerType.$key = customerType.$key;
    this.CustomerType.CustomerTypeCode = customerType.$key;
    this.CustomerType.CustomerTypeNameTh = customerType.$key;
    this.CustomerType.CustomerTypeNameEn = customerType.$key;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.CustomerType.CreateBy = customerType.CreateBy === undefined ? '' : customerType.CreateBy;
    this.CustomerType.CreateDate = customerType.CreateDate === undefined ? '' : customerType.CreateDate;
    this.CustomerType.UpdateBy = customerType.UpdateBy === undefined ? '' : customerType.UpdateBy;
    this.CustomerType.UpdateDate = customerType.UpdateDate === undefined ? '' : customerType.UpdateDate;
    return this.CustomerType;
  }
  LoadCustomerTypeData(): FirebaseListObservable<any> {
    return this.customerTypes;
  }
  LoadCustomerTypeByKey(key): FirebaseObjectObservable<any> {
    this.customerType = this.db.object('customer-types/' + key);
    return this.customerType;
  }
  CreateCustomerType(newCustomerType) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const newCode = this._appConfig.GetNextMasterDocument(this.MODULE_CODE);
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.list('customer-types').push({
      CustomerTypeCode: newCode,
      CustomerTypeNameTh: newCustomerType.CustomerTypeNameTh,
      CustomerTypeNameEn: newCustomerType.CustomerTypeNameEn,
      CreateBy: displayName,
      CreateDate: currentTime,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  UpdateCustomerType(newCustomerType) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.object('product-types/' + newCustomerType.$key)
    .set({
      CustomerTypeCode: newCustomerType.CustomerTypeCode,
      CustomerTypeNameTh: newCustomerType.CustomerTypeNameTh,
      CustomerTypeNameEn: newCustomerType.CustomerTypeNameEn,
      CreateBy: newCustomerType.CreateBy,
      CreateDate: newCustomerType.CreateDate,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  DeleteCustomerType() {
    this.customerType.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
