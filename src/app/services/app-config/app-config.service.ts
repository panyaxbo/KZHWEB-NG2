import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppConfig } from '../../classes/app-config';

@Injectable()
export class AppConfigService {
  AppConfig: AppConfig;
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe) {

  }
  GetNewCode(moduleCode): any {
    console.log('GetNewCode ', moduleCode);
    this.db.list('/app-configs', {
        query: {
          orderByChild: 'AppCode',
          equalTo: moduleCode
        }
      }).subscribe(data => {
        console.log(data[0]); // [{...}] get obj from list
        let newCode = '';
        // Master
        if (data[0] && (!data[0].IsTransaction)) {
          newCode = this.GetNextMasterDocument(data[0]); // AA|#### formatted
        // Transaction
        } else {
          newCode = this.GetNextTransactionDocument(data[0]); // AA|yy|MM|#### formatted
        }
        return newCode;
    });
  }
  UpdateRunData(moduleCode) {
    this.db.object('/app-configs')
  }
  GetNextMasterDocument(appConfig) {
    let stringCode = appConfig.AppValue.split('|');
    let currentRunNo = appConfig.AppRunData;
    console.log(stringCode);
    let moduleCode = stringCode[0];
    let runNo = stringCode[1];
    return null;
  }
  GetNextTransactionDocument(appConfig) {
    let stringCode = appConfig.AppValue.split('|');
    let currentRunNo = appConfig.AppRunData;
    console.log(stringCode);
    let moduleCode = stringCode[0];
    let runNo = stringCode[3];
    let currentYear = this.kzhThDatePipe.transformShortYear(new Date());
    let currentMonth = this.kzhThDatePipe.transformMonth(new Date());
    console.log( currentYear, currentMonth);
    return null;
  }
}
