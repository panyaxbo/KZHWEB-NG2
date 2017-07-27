import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  LoadProductDummyLocalData() {
    return this.http.get('.assets/dummy-product-data.json')
      .map(response => {
        return response.json();
      });
  }
}
