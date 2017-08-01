import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductSet } from '../../classes/product-set';

@Injectable()
export class ProductSetService {

  constructor(private http: Http,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) { }

}
