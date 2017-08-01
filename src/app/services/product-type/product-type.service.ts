import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductType } from '../../classes/product-type';
import { KzhThDatePipe } from '../../pipes/kzh-th-date.pipe';

@Injectable()
export class ProductTypeService {
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
  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe) {
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
    this.ProductType.CreateBy = productType.CreateBy === undefined ? '' : productType.CreateBy;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
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
    console.log(this.productType);
    return this.productType;
  }
  CreateProductType(newProductType) {
    // console.log('before push ', newProductType);
    // console.log('before push ', newProductType);
    // const current = this.kzhThDatePipe.transformDateTime(new Date());
    // const curren2 = this.kzhThDatePipe.transformDate(new Date());
    // const curren3 = this.kzhThDatePipe.transformTime(new Date());
    //  console.log('date １ ', current);
    //  console.log('date 2 ', curren2);
    //  console.log('date 3 ', curren3);
    this.db.list('product-types').push({
      ProductTypeCode: newProductType.ProductTypeCode,
      ProductTypeNameTh: newProductType.ProductTypeNameTh,
      ProductTypeNameEn: newProductType.ProductTypeNameEn,
      ProductTypeNameCn: newProductType.ProductTypeNameCn,
      CreateBy: 'Admin',
      CreateDate: this.kzhThDatePipe.transformDateTime(new Date()),
      UpdateBy: 'Admin',
      UpdateDate: this.kzhThDatePipe.transformDateTime(new Date())
    });
  }
  UpdateProductType(newProductType) {
    console.log('before update ', newProductType);
   //  newProductType.$key = new Date().getTime();
     console.log('before update ', newProductType);
    this.db.object('product-types/' + newProductType.$key)
    .set({
      ProductTypeCode: newProductType.ProductTypeCode,
      ProductTypeNameTh: newProductType.ProductTypeNameTh,
      ProductTypeNameEn: newProductType.ProductTypeNameEn,
      ProductTypeNameCn: newProductType.ProductTypeNameCn,
      CreateBy: newProductType.CreateBy,
      CreateDate: newProductType.CreateDate,
      UpdateBy: 'Admin',
      UpdateDate: this.kzhThDatePipe.transformDateTime(new Date())
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
