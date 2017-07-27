import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductCategoryService {

  constructor(private http: Http) { }

  LoadProductDummyLocalData() {
    return this.http.get('.assets/dummy-product-category-data.json')
      .map(response => {
        return response.json();
      });
  }
}
