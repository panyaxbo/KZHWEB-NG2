import { AppConfigService } from './../app-config/app-config.service';
import { UserService } from './../user/user.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Staff } from '../../classes/staff';

@Injectable()
export class StaffService {
  private MODULE_CODE = 'KZH';
  staffs: FirebaseListObservable<any[]>;
  staff: FirebaseObjectObservable<any>;
  Staff: Staff = {
    $key: '',
    StaffCode: '',
    Title: '',
    Firstname: '',
    Lastname: '',
    Nickname: '',
    Age: 0,
    Sex: '',
    StaffAddress: '',
    TelNo: '',
    MobileNo: '',
    RoleCode: '',
    Email: '',
    CompanyCode: '',
    StaffStatus: '',
    StartDate: '',
    ResignDate: '',
    BirthDate: '',
    SalaryAmount: 0,
    SalaryPerDay: 0,
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _userService: UserService,
              public _appConfig: AppConfigService) {
    this.staffs = this.db.list('staffs');
  }
  NewStaff() {
    return this.Staff = {
      $key: '',
      StaffCode: '',
      Title: '',
      Firstname: '',
      Lastname: '',
      Nickname: '',
      Age: 0,
      Sex: '',
      StaffAddress: '',
      TelNo: '',
      MobileNo: '',
      RoleCode: '',
      Email: '',
      CompanyCode: '',
      StaffStatus: '',
      StartDate: '',
      ResignDate: '',
      BirthDate: '',
      SalaryAmount: 0,
      SalaryPerDay: 0,
      CreateBy: '',
      CreateDate: '',
      UpdateBy: '',
      UpdateDate: ''
    };
  }
  PopulatedStaff(staff) {
    this.Staff.$key = staff.$key;



    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.Staff.CreateBy = staff.CreateBy === undefined ? '' : staff.CreateBy;
    this.Staff.CreateDate = staff.CreateDate === undefined ? currentDate : staff.CreateDate;
    this.Staff.UpdateBy = staff.UpdateBy === undefined ? '' : staff.UpdateBy;
    this.Staff.UpdateDate = staff.UpdateDate === undefined ? currentDate : staff.UpdateDate;
    return this.Staff;
  }
  LoadStaffData(): FirebaseListObservable<any[]> {
    return this.staffs;
  }
  LoadStaffByKey(key): FirebaseObjectObservable<any> {
    this.staff = this.db.object('staffs/' + key);
    return this.staff;
  }
  CreateStaff(newStaff) {
    const displayName = this._userService.GetCurrentUserData().displayName;
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.list('staffs').push({
      StaffCode: newStaff.StaffCode,
      Title: newStaff.Title,
      Firstname: newStaff.Firstname,
      Lastname: newStaff.Lastname,
      Nickname: newStaff.Nickname,
      Age: newStaff.Age,
      Sex: newStaff.Sex,
      StaffAddress: newStaff.StaffAddress,
      TelNo: newStaff.TelNo,
      MobileNo: newStaff.MobileNo,
      RoleCode: newStaff.RoleCode,
      Email: newStaff.Email,
      CompanyCode: newStaff.CompanyCode,
      StaffStatus: newStaff.StaffStatus,
      StartDate: newStaff.StartDate,
      ResignDate: newStaff.ResignDate,
      BirthDate: newStaff.BirthDate,
      SalaryAmount: newStaff.SalaryAmount,
      SalaryPerDay: newStaff.SalaryPerDay,
      CreateBy: displayName,
      CreateDate: currentTime,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  UpdateStaff(newStaff) {
    const displayName = this._userService.GetCurrentUserData().displayName;
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    this.db.object('staffs/' + newStaff.$key)
    .set({
      StaffCode: newStaff.StaffCode,
      Title: newStaff.Title,
      Firstname: newStaff.Firstname,
      Lastname: newStaff.Lastname,
      Nickname: newStaff.Nickname,
      Age: newStaff.Age,
      Sex: newStaff.Sex,
      StaffAddress: newStaff.StaffAddress,
      TelNo: newStaff.TelNo,
      MobileNo: newStaff.MobileNo,
      RoleCode: newStaff.RoleCode,
      Email: newStaff.Email,
      CompanyCode: newStaff.CompanyCode,
      StaffStatus: newStaff.StaffStatus,
      StartDate: newStaff.StartDate,
      ResignDate: newStaff.ResignDate,
      BirthDate: newStaff.BirthDate,
      SalaryAmount: newStaff.SalaryAmount,
      SalaryPerDay: newStaff.SalaryPerDay,
      CreateBy: newStaff.CreateBy,
      CreateDate: newStaff.CreateDate,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  DeleteStaff() {
    this.staff.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
