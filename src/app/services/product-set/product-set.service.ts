import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { KzhThDatePipe } from '../../pipes/kzh-th-date.pipe';
import { ProductSet } from '../../classes/product-set';

@Injectable()
export class ProductSetService {
  productSets: FirebaseListObservable<any[]>;
  productSet: FirebaseObjectObservable<any>;
  ProductSet: ProductSet = {
    $key: '',
    ProductMainCode: '',
    ProductSubCode: [],
    UseQuantity: 0,
    UomCode: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe) {
    this.productSets = this.db.list('product-sets');
  }
  NewProductSet() {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    return this.ProductSet = {
      $key: '',
      ProductMainCode: '',
      ProductSubCode: [],
      UseQuantity: 0,
      UomCode: '',
      CreateBy: '',
      CreateDate: currentTime,
      UpdateBy: '',
      UpdateDate: currentTime
    };
  }
  PopulatedProductSet(productSet) {
    this.ProductSet.$key = productSet.$key;
    this.ProductSet.ProductMainCode = productSet.ProductMainCode;
    this.ProductSet.ProductSubCode = productSet.ProductSubCode;
    this.ProductSet.UseQuantity = productSet.UseQuantity;
    this.ProductSet.UomCode = productSet.UomCode;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.ProductSet.CreateBy = productSet.CreateBy;
    this.ProductSet.CreateDate = productSet.CreateDate;
    this.ProductSet.UpdateBy = productSet.UpdateBy;
    this.ProductSet.UpdateDate = productSet.UpdateDate;
    return this.ProductSet;
  }
  LoadProductSetData(): FirebaseListObservable<any> {
    return this.productSets;
  }
  LoadProductSetByKey(key): FirebaseObjectObservable<any> {
    this.productSet = this.db.object('product-sets/' + key);
    return this.productSet;
  }
  CreateProductSet(newProductSet) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.list('product-sets').push({
      ProductMainCode: newProductSet.ProductMainCode,
      ProductSubCode: newProductSet.ProductSubCode,
      UseQuantity: newProductSet.UseQuantity,
      UomCode: newProductSet.UomCode,
      CreateBy: newProductSet.CreateBy,
      CreateDate: currentTime,
      UpdateBy: newProductSet.UpdateBy,
      UpdateDate: currentTime
    });
  }
  UpdateProductSet(newProductSet) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.object('product-sets/' + newProductSet.$key)
    .set({
      ProductMainCode: newProductSet.ProductMainCode,
      ProductSubCode: newProductSet.ProductSubCode,
      UseQuantity: newProductSet.UseQuantity,
      UomCode: newProductSet.UomCode,
      CreateBy: newProductSet.CreateBy,
      CreateDate: newProductSet.CreateDate,
      UpdateBy: newProductSet.UpdateBy,
      UpdateDate: currentTime
    });
  }
  DeleteProduct() {
    this.productSet.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
