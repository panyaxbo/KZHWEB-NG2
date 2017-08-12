import { UserService } from './../user/user.service';
import { AppConfigService } from './../app-config/app-config.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ProductCategory } from '../../classes/product-category';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';

@Injectable()
export class ProductCategoryService {
  productCategories: FirebaseListObservable<any[]>;
  productCategory: FirebaseObjectObservable<any>;
  ProductCategory: ProductCategory = {
    $key: '',
    ProductCategoryCode: '',
    ProductCategoryNameTh: '',
    ProductCategoryNameEn: '',
    ProductCategoryNameCn: '',
    ProductTypeCode: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  }
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _appConfigService: AppConfigService,
              public _userService: UserService) {
    this.productCategories = this.db.list('product-categorys');
  }
  NewProductCategory() {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    return this.ProductCategory = {
              $key: '',
              ProductCategoryCode: '',
              ProductCategoryNameTh: '',
              ProductCategoryNameEn: '',
              ProductCategoryNameCn: '',
              ProductTypeCode: '',
              CreateBy: '',
              CreateDate: currentTime,
              UpdateBy: '',
              UpdateDate: currentTime
            };
  }
  PopulatedProductCategory(productCategory) {
    this.ProductCategory.$key = productCategory.$key;
    this.ProductCategory.ProductCategoryCode = productCategory.ProductCategoryCode;
    this.ProductCategory.ProductCategoryNameTh = productCategory.ProductCategoryNameTh;
    this.ProductCategory.ProductCategoryNameEn = productCategory.ProductCategoryNameEn;
    this.ProductCategory.ProductCategoryNameCn = productCategory.ProductCategoryNameCn;
    this.ProductCategory.ProductTypeCode = productCategory.ProductTypeCode;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.ProductCategory.CreateBy = productCategory.CreateBy === undefined ? '' : productCategory.CreateBy;
    this.ProductCategory.CreateDate = productCategory.CreateDate === undefined ? currentDate : productCategory.CreateDate;
    this.ProductCategory.UpdateBy = productCategory.UpdateBy === undefined ? '' : productCategory.UpdateBy;
    this.ProductCategory.UpdateDate = productCategory.UpdateDate === undefined ? currentDate : productCategory.UpdateDate;
    return this.ProductCategory;
  }
  LoadProductCategory(): FirebaseListObservable<any> {
    return this.productCategories;
  }
  LoadProductCategoryByKey(key): FirebaseObjectObservable<any> {
    this.productCategory = this.db.object('product-categories' + key);
    return this.productCategory;
  }
  CreateProductCategory(newProductCategory) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.list('product-categories').push({
      ProductCategoryCode: newProductCategory.ProductCategoryCode,
      ProductCategoryNameTh: newProductCategory.ProductCategoryNameTh,
      ProductCategoryNameEn: newProductCategory.ProductCategoryNameEn,
      ProductCategoryNameCn: newProductCategory.ProductCategoryNameCn,
      ProductTypeCode: newProductCategory.ProductTypeCode,
      CreateBy: 'Admin',
      CreateDate: currentTime,
      UpdateBy: 'Admin',
      UpdateDate: currentTime
    })
  }
  UpdateProductCategory(newProductCategory) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.object('product-categories/' + newProductCategory.$key)
    .set({
      ProductCategoryCode: newProductCategory.ProductCategoryCode,
      ProductCategoryNameTh: newProductCategory.ProductCategoryNameTh,
      ProductCategoryNameEn: newProductCategory.ProductCategoryNameEn,
      ProductCategoryNameCn: newProductCategory.ProductCategoryNameCn,
      ProductTypeCode: newProductCategory.ProductTypeCode,
      CreateBy: newProductCategory.CreateBy,
      CreateDate: newProductCategory.CreateDate,
      UpdateBy: 'Admin',
      UpdateDate: currentTime
    });
  }
  DeleteProductCategory() {
    this.productCategory.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
