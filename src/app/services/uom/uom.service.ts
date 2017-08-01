import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { KzhThDatePipe } from '../../pipes/kzh-th-date.pipe';
import { Uom } from '../../classes/uom';

@Injectable()
export class UomService {
  uoms: FirebaseListObservable<any[]>;
  uom: FirebaseObjectObservable<any>;
  Uom: Uom = {
    $key: '',
    UomCode: '',
    UomNameTh: '',
    UomNameEn: '',
    IsContainer: false,
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe) {
    this.uoms = this.db.list('/uoms');
  }
  NewUom() {
    return this.Uom = {
        $key: '',
        UomCode: '',
        UomNameTh: '',
        UomNameEn: '',
        IsContainer: false,
        CreateBy: '',
        CreateDate: '',
        UpdateBy: '',
        UpdateDate: ''
      };
  }
  PopulatedUom(uom) {
    this.Uom.$key = uom.$key;
    this.Uom.UomCode = uom.UomCode;
    this.Uom.UomNameTh = uom.UomNameTh;
    this.Uom.UomNameEn = uom.UomNameEn;
    this.Uom.IsContainer = uom.IsContainer;
    this.Uom.CreateBy = uom.CreateBy === undefined ? '' : uom.CreateBy;
    this.Uom.CreateDate = uom.CreateDate === undefined ? '' : new Date().toString();
    this.Uom.UpdateBy = uom.UpdateBy === undefined ? '' : uom.UpdateBy;
    this.Uom.UpdateDate = uom.UpdateDate === undefined ? '' : new Date().toString();
    return this.Uom;
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
