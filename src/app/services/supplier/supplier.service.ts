import { Supplier } from './../../classes/supplier';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class SupplierService {
  suppliers: FirebaseListObservable<any[]>;
  supplier: FirebaseObjectObservable<any>;
  Supplier: Supplier = {
    $key: '',
  }
  constructor() { }

}
