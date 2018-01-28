import { Observable } from 'rxjs/Observable';
import { AppConfigService } from './../app-config/app-config.service';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductType } from '../../classes/product-type';
import { KzhThDatePipe } from '../../pipes/kzh-th-date.pipe';

@Injectable()
export class ProductTypeService {
  private MODULE_CODE = 'PT';
  productTypes: FirebaseListObservable<any[]>;
  productType: FirebaseObjectObservable<any>;
  ProductType: ProductType = {
    $key: '',
    ProductTypeCode: '',
    ProductTypeNameTh: '',
    ProductTypeNameEn: '',
    ProductTypeNameCn: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _userService: UserService,
              public _appConfig: AppConfigService) {
    this.productTypes = this.db.list('product-types');
  }
  NewProductType() {
    return this.ProductType = {
              $key: '',
              ProductTypeCode: '',
              ProductTypeNameTh: '',
              ProductTypeNameEn: '',
              ProductTypeNameCn: '',
              CreateBy: '',
              CreateDate: '',
              UpdateBy: '',
              UpdateDate: ''
            };
  }
  PopulatedProductType(productType) {
    this.ProductType.$key = productType.$key;
    this.ProductType.ProductTypeCode = productType.ProductTypeCode;
    this.ProductType.ProductTypeNameTh = productType.ProductTypeNameTh;
    this.ProductType.ProductTypeNameEn = productType.ProductTypeNameEn;
    this.ProductType.ProductTypeNameCn = productType.ProductTypeNameCn;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.ProductType.CreateBy = productType.CreateBy === undefined ? '' : productType.CreateBy;
    this.ProductType.CreateDate = productType.CreateDate === undefined ? currentDate : productType.CreateDate;
    this.ProductType.UpdateBy = productType.UpdateBy === undefined ? '' : productType.UpdateBy;
    this.ProductType.UpdateDate = productType.UpdateDate === undefined ? currentDate : productType.UpdateDate;
    return this.ProductType;
  }
  LoadProductTypeData(): FirebaseListObservable<any> {
    return this.productTypes;
  }
  LoadProductTypeByKey(key): FirebaseObjectObservable<any> {
    this.productType = this.db.object('product-types/' + key);
    return this.productType;
  }
  LoadProductTypeComboBox(): any {
    return this.db.list('product-types');
  }
  CreateProductType(newProductType) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const newCode = this._appConfig.GetNextMasterDocument(this.MODULE_CODE);
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.list('product-types').push({
      ProductTypeCode: newCode,
      ProductTypeNameTh: newProductType.ProductTypeNameTh,
      ProductTypeNameEn: newProductType.ProductTypeNameEn,
      ProductTypeNameCn: newProductType.ProductTypeNameCn,
      CreateBy: displayName,
      CreateDate: currentTime,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  UpdateProductType(newProductType) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.object('product-types/' + newProductType.$key)
    .set({
      ProductTypeCode: newProductType.ProductTypeCode,
      ProductTypeNameTh: newProductType.ProductTypeNameTh,
      ProductTypeNameEn: newProductType.ProductTypeNameEn,
      ProductTypeNameCn: newProductType.ProductTypeNameCn,
      CreateBy: newProductType.CreateBy,
      CreateDate: newProductType.CreateDate,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  DeleteProductType() {
    this.productType.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
