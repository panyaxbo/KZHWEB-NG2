import { StaffService } from './../staff/staff.service';
import { UserService } from './../user/user.service';
import { AppConfigService } from './../app-config/app-config.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { HrHead } from './../../classes/hr-head';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable()
export class HumanResourceService {
  private MODULE_CODE = 'HR';
  hrHeadList: FirebaseListObservable<any[]>;
  hrHead: FirebaseObjectObservable<any>;
  HrHead;
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _userService: UserService,
              public _appConfig: AppConfigService,
              public _staffService: StaffService) {

  }
  NewHumanResource() {
    let currentMonthYear = moment(new Date()).format('MMYYYY');
    currentMonthYear = currentMonthYear.substring(0, 2) + (parseInt(currentMonthYear.substring(2), 10) + 543).toString();
  //  this.HrHead = new HrHead('', '', '', moment.unix(unixNo).toDate(), currentMonthYear, '', )
  }
  LoadHumanResourceByKey(key): FirebaseObjectObservable<any> {
    return null;
  }
  PopulatedHumanResource(HrHead) {

  }

}
