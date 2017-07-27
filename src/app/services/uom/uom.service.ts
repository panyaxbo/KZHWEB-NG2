import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Uom } from '../../classes/uom';

@Injectable()
export class UomService {

  constructor(private http: Http) { }
  GetUomLocalData() {
    return this.http.get('./assets/uom-data.json')
    .map(response => {
      return response.json();
    })
  }
}
