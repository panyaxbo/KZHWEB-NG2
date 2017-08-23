import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UtilityService {

  constructor(private http: Http) { }

  CheckIsNumber(value) {
    const reg = new RegExp('/^\d+$/');
    return reg.test(value);
  }
  SplitString(searchValue) {
    const criterias = searchValue.split('/[\s,]+/');
  }
  LoadPosDummyData(): Observable<any> {
    return this.http.get('./assets/pos-data.json')
                    .map((response: Response) => {
        return response.json();
    }
    );
  }

  LoadCustomerDummyData(): Observable<any> {
    return this.http.get('./assets/customer-data.json')
                    .map((response: Response) => {
        return response.json();
    }
    );
  }

  LoadProductDummyData(): Observable<any> {
    return this.http.get('./assets/product-data.json')
                    .map((response: Response) => {
        return response.json();
    }
    );
  }

  GetNumberDecimalString(num, decimal) {
   // let
  }
}
