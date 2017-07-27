import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class PosService {

  constructor(private http: Http) { }

  LoadPosHeadDummyData(): Observable<any> {
    return this.http.get('./assets/dummy-pos-head-data.json')
        .map((response: Response) => {
          return response.json();
      }
    );
  }
}
