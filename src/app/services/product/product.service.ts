import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { KzhThDatePipe } from '../../pipes/kzh-th-date.pipe';
import { Product } from '../../classes/product';
import * as firebase from 'firebase';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  product: FirebaseObjectObservable<any>;
  Product: Product;
  image: any;
  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe) {
    this.products = this.db.list('/products');
  }
  NewProduct() {
      return this.Product = {
      $key: '',
      ProductCode: '',
      ProductNameTh: '',
      ProductNameEn: '',
      ProductNameCn: '',
      PartNo: '',
      UomCode: '',
      Remark: '',
      Description: '',
      Quantity: 0,
      CostPrice : 0,
      RetailPrice : 0,
      WholesalePrice : 0,
      SpecialPrice : 0,
      ContainQuantity : 0,
      ContainCostPrice : 0,
      ContainWholesalePrice : 0,
      ContainSpecialPrice : 0,
      ContainUomCode: '',
      IsDeprecated: false,
      IsProductSet: false,
      ProductCategoryCode: '',
      ProductTypeCode: '',
      ProductKind: '',
      CreateBy: '',
      CreateDate: '',
      UpdateBy: '',
      UpdateDate: '',
      ProductImageURL: ''
    };
  }
  PopulatedProduct(product) {
    this.Product.$key = product.$key;
    this.Product.ProductCode = product.ProductCode;
    this.Product.ProductNameTh = product.ProductNameTh;
    this.Product.ProductNameEn = product.ProductNameEn;
    this.Product.ProductNameCn = product.ProductNameCn;
    this.Product.PartNo = product.PartNo;
    this.Product.UomCode = product.UomCode;
    this.Product.Remark = product.Remark;
    this.Product.Description = product.Description;
    this.Product.Quantity = product.Quantity;
    this.Product.CostPrice = product.CostPrice;
    this.Product.RetailPrice = product.RetailPrice;
    this.Product.WholesalePrice = product.WholesalePrice;
    this.Product.SpecialPrice = product.SpecialPrice;
    this.Product.ContainUomCode = product.ContainUomCode;
    this.Product.ContainQuantity = product.ContainQuantity;
    this.Product.ContainCostPrice = product.ContainCostPrice;
    this.Product.ContainWholesalePrice = product.ContainWholesalePrice;
    this.Product.ContainSpecialPrice = product.ContainSpecialPrice;
    this.Product.IsDeprecated = product.IsDeprecated;
    this.Product.IsProductSet = product.IsProductSet;
    this.Product.ProductCategoryCode = product.ProductCategoryCode;
    this.Product.ProductTypeCode = product.ProductTypeCode;
    this.Product.ProductKind = product.ProductKind;
    this.Product.ProductImageURL = product.ProductImageURL;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.Product.CreateBy = product.CreateBy === undefined ? '' : product.CreateBy;
    this.Product.CreateDate = product.CreateDate === undefined ? currentDate : product.CreateDate;
    this.Product.UpdateBy = product.UpdateBy === undefined ? '' : product.UpdateBy;
    this.Product.UpdateDate = product.UpdateDate === undefined ? currentDate : product.UpdateDate;
    return this.Product;
  }
  LoadProductData(): FirebaseListObservable<any> {
    return this.products;
  }
  LoadProductByKey(key): FirebaseObjectObservable<any> {
    this.product = this.db.object('products/' + key);
    return this.product;
  }
  CreateProduct(newProduct) {
    this.db.list('products').push({
    //  ProductCode
    });
  }
  UpdateProduct(newProduct) {
    this.db.object('product/' + newProduct.$key).set({
      ProductCode: newProduct.ProductCode,
      CreateBy: newProduct.CreateBy,
      CreateDate: newProduct.CreateDate,
      UpdateBy: 'Admin',
      UpdateDate: this.kzhThDatePipe.transformDateTime(new Date())
    });
  }
  DeleteProduct() {
    this.product.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }

  UploadImage(imagePath) {
    const storageRef = firebase.storage().ref();
 //   storageRef.getDownloadURL().then(url => this.image = url);
  //  storageRef.putFile();
  //  let storage = firebase.storage();
  //  var pathReference = storage.ref(imagePath);
    // let success = false;
    // let path = '/product';
    // var iRef = storageRef.child(path)
  }
}
