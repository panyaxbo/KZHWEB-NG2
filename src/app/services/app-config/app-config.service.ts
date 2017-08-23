import { ReceiptOrderService } from './../receipt-order/receipt-order.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppConfig } from '../../classes/app-config';

@Injectable()
export class AppConfigService {
  AppConfig: AppConfig;
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _receiptService: ReceiptOrderService) {

  }
  GetNewCode(moduleCode): any {
    this.db.list('/app-configs', {
        query: {
          orderByChild: 'AppCode',
          equalTo: moduleCode
        }
      }).subscribe(data => {
     //   console.log(data[0]); // [{...}] get obj from list
        let newCode = '';
        // Master
        if (data[0] && (!data[0].IsTransaction)) {
          newCode = this.GetNextMasterDocument(data[0]); // AA|#### formatted
        // Transaction
        } else {
          newCode = this.GetNextTransactionDocument(data[0]); // AA|yy|MM|##### formatted
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
    let nextRunningNo = Number.parseInt(currentRunNo) + 1;
//    console.log(stringCode);
    let moduleCode = stringCode[0];
    let runNo = stringCode[1];
    let num = runNo.length;
    let numDecimal = nextRunningNo / Math.pow(10, num);
    let decimalString = numDecimal.toString().substring(2);
    let nextMasterCode = moduleCode + decimalString;
//    console.log(nextMasterCode);
    return nextMasterCode;
  }
  GetNextTransactionDocument(appConfig) {
    let stringCode = appConfig.AppValue.split('|');
    let currentRunNo = appConfig.AppRunData;
    let nextRunningNo = Number.parseInt(currentRunNo) + 1;
    let moduleCode = stringCode[0];
    let runNo = stringCode[3];
    let num = runNo.length;
    let currentYear = this.kzhThDatePipe.transformShortYear(new Date());
    let currentMonth = this.kzhThDatePipe.transformMonth(new Date());
    let numDecimal = nextRunningNo / Math.pow(10, num);
    let decimalString = numDecimal.toString().substring(2);
    let latestDoc: any;
    let nextTransactionCode: string;
    this._receiptService.GetLatestReceiptOrderDocument().subscribe(data => {
      latestDoc = data;
      let date = latestDoc[0].RODate.split('/');
      if (date[1] === currentMonth && date[2].substring(2) === currentYear) {
        nextTransactionCode = moduleCode + currentYear + currentMonth + decimalString;
      } else {
        let resetNum = (1 / Math.pow(10, num)).toString().substring(2)
        nextTransactionCode = moduleCode + currentYear + currentMonth + resetNum;
      }
      console.log(nextTransactionCode);
    });
    return nextTransactionCode;
  }
}
