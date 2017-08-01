import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppConfig } from '../../classes/app-config';

@Injectable()
export class AppConfigService {

  constructor(private db: AngularFireDatabase) {

  }
  GetNewCode(moduleCode) {
    const appConfigObservable = this.db.list('/app-configs', {
                      query: {
                      //  orderByChild: 'size',
                        equalTo: moduleCode
                      }
                    });
                    console.log(moduleCode, appConfigObservable);
    return appConfigObservable;
  }
}
