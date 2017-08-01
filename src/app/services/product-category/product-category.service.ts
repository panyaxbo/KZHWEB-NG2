import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductCategory } from '../../classes/product-category';

@Injectable()
export class ProductCategoryService {
  product_categories: FirebaseListObservable<any[]>;
  product_category: FirebaseObjectObservable<any>;
  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    this.product_categories = this.db.list('product-categorys');
    // this.product_category = this.db.object('product-categorys');
  }

  LoadProductDummyLocalData() {
    return this.http.get('.assets/dummy-product-category-data.json')
      .map(response => {
        return response.json();
      });
  }
  LoadProductCategory(): FirebaseListObservable<any> {
    return this.product_categories;
  }
  LoadProductCategoryByKey(key): FirebaseObjectObservable<any> {
    return this.db.object('product-categories/' + key);
  }
  CreateProductCategory() {

  }
  UpdateProductCategory() {

  }
  DeleteProductCategory() {

  }
}
