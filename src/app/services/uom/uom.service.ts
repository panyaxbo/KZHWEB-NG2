import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Uom } from '../../classes/uom';

@Injectable()
export class UomService {
  uoms: FirebaseListObservable<any[]>;
  uom: FirebaseObjectObservable<any>;
  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    this.uoms = this.db.list('/uoms');
  //  this.uom = this.db.object('/uoms');
  }
  GetUomLocalData() {
    return this.http.get('./assets/uom-data.json')
    .map(response => {
      return response.json();
    })
  }
  LoadUomData(): FirebaseListObservable<any> {
    return this.uoms;
  }
  LoadUomByKey(key): FirebaseObjectObservable<any> {
    this.uom = this.db.object('uoms/' + key);
    return this.uom;
  }
  CreateUom(newUom) {
    this.uoms.push(newUom);
  }
  UpdateUom(newUom) {
    this.uom.update(newUom);
  }
  DeleteUom() {
    this.uom.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
