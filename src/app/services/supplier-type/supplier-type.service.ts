import { UserService } from './../user/user.service';
import { AppConfigService } from './../app-config/app-config.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { SupplierType } from './../../classes/supplier-type';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class SupplierTypeService {
  supplierTypes: FirebaseListObservable<any[]>;
  supplierType: FirebaseObjectObservable<any>;
  private MODULE_CODE = 'ST';
  SupplierType: SupplierType = {
    $key: '',
    SupplierTypeCode: '',
    SupplierTypeNameTh: '',
    SupplierTypeNameEn: '',
    SupplierTypeNameCn: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  }
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _appConfigService: AppConfigService,
              public _userService: UserService) {
    this.supplierTypes = this.db.list('supplier-types');
  }
  NewSupplierType() {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    return this.SupplierType = {
      $key: '',
      SupplierTypeCode: '',
      SupplierTypeNameTh: '',
      SupplierTypeNameEn: '',
      SupplierTypeNameCn: '',
      CreateBy: '',
      CreateDate: currentTime,
      UpdateBy: '',
      UpdateDate: currentTime
    };
  }
  PopulatedSupplierType(supplierType) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.SupplierType.$key = supplierType.$key;
    this.SupplierType.SupplierTypeCode = supplierType.SupplierTypeCode;
    this.SupplierType.SupplierTypeNameTh = supplierType.SupplierTypeNameTh;
    this.SupplierType.SupplierTypeNameEn = supplierType.SupplierTypeNameEn;
    this.SupplierType.SupplierTypeNameCn = supplierType.SupplierTypeNameCn;
    this.SupplierType.CreateBy = supplierType.CreateBy;
    this.SupplierType.CreateDate = supplierType.CreateDate === undefined ? currentTime : supplierType.CreateDate;
    this.SupplierType.UpdateBy = supplierType.UpdateBy;
    this.SupplierType.UpdateDate = supplierType.UpdateDate === undefined ? currentTime : supplierType.UpdateDate;
    return this.SupplierType;
  }
  LoadSupplierTypeData(): FirebaseListObservable<any[]> {
    return this.supplierTypes;
  }
  LoadSupplierTypeByKey(key) {
    this.supplierType = this.db.object('supplier-types/' + key);
    return this.supplierType;
  }
  CreateSupplierType(newSupplierType) {
    const runNewCode = this._appConfigService.GetNewCode(this.MODULE_CODE);
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.list('supplier-types').push({
      SupplierTypeCode: runNewCode,
      SupplierTypeNameTh: newSupplierType.SupplierTypeNameTh,
      SupplierTypeNameEn: newSupplierType.SupplierTypeNameEn,
      SupplierTypeNameCn: newSupplierType.SupplierTypeNameCn,
      CreateBy: displayName,
      CreateDate: currentTime,
      UpdateBy: displayName,
      UpdateDate: currentTime
    })
  }
  UpdateSupplierType(newSupplierType) {
    const displayName = this._userService.GetCurrentUserData().displayName;
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.object('/supplier-types/' + newSupplierType.$key)
    .set({
      SupplierTypeCode: newSupplierType.SupplierTypeCode,
      SupplierTypeNameTh: newSupplierType.SupplierTypeNameTh,
      SupplierTypeNameEn: newSupplierType.SupplierTypeNameEn,
      SupplierTypeNameCn: newSupplierType.SupplierTypeNameCn,
      CreateBy: newSupplierType.CreateBy,
      CreateDate: newSupplierType.CreateDate,
      UpdateBy: displayName,
      UpdateDate: currentTime
    })
  }
  DeleteSupplierType() {
    this.supplierType.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
