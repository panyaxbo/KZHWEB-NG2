import { UserService } from './../user/user.service';
import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Company } from '../../classes/company';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class CompanyService {
  public current_company: Company;
  companies: FirebaseListObservable<any[]>;
  company: FirebaseObjectObservable<any>;
  Company: Company = {
    $key: '',
    CompanyCode: '',
    CompanyShortName: '',
    CompanyNameTh: '',
    CompanyNameEn: '',
    TelNo: '',
    FaxNo: '',
    Email: '',
    VatRate: 0,
    TaxId: '',
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  }
  constructor(private http: Http,
              private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe,
              public _userService: UserService) {
  //  this.LoadCompanyLocalData().subscribe(data => {
  //     this.company = data;
  //     console.log('serv company ', this.company);
  //  });
  this.companies = this.db.list('companies');
  }
  GetCurrentCompanyData(): Company {
    return this.current_company;
  }
  SetCurrentCompanyData(company) {
    this.current_company = company;
  }
  LoadCompanyLocalData(): Observable<Company> {
    return this.http.get('./assets/company-data.json')
            .map(response => {
              console.log('serv company ', response.json());
              return response.json();
            });
  }
  LoadCompanyData(): FirebaseObjectObservable<any> {
     return this.db.object('companies');
  }
  NewCompany() {
    return this.Company = {
      $key: '',
      CompanyCode: '',
      CompanyShortName: '',
      CompanyNameTh: '',
      CompanyNameEn: '',
      TelNo: '',
      FaxNo: '',
      Email: '',
      VatRate: 0,
      TaxId: '',
      CreateBy: '',
      CreateDate: '',
      UpdateBy: '',
      UpdateDate: ''
    }
  }
  PopulatedCompany(company) {
    this.Company.$key = company.$key;
    this.Company.CompanyCode = company.CompanyCode;
    this.Company.CompanyNameTh = company.CompanyNameTh;
    this.Company.CompanyNameEn = company.CompanyNameEn;
    this.Company.CompanyShortName = company.CompanyShortName;
    this.Company.TelNo = company.TelNo;
    this.Company.FaxNo = company.FaxNo;
    this.Company.Email = company.Email;
    this.Company.VatRate = company.VatRate;
    this.Company.TaxId = company.TaxId;
    const currentDate = this.kzhThDatePipe.transformDateTime(new Date());
    this.Company.CreateBy = company.CreateBy;
    this.Company.CreateDate = company.CreateDate === undefined ? currentDate : company.CreateDate;
    this.Company.UpdateBy = company.UpdateBy;
    this.Company.UpdateDate = company.UpdateDate === undefined ? currentDate : company.UpdateDate;
    return this.Company;
  }
  LoadCompanyByKey(key): FirebaseObjectObservable<any> {
    this.company = this.db.object('companies/' + key);
    return this.company;
  }
  CreateCompany(newCompany) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.list('companies').push({
      CompanyCode: newCompany.CompanyCode,
      CompanyNameTh: newCompany.CompanyNameTh,
      CompanyNameEn: newCompany.CompanyNameEn,
      CompanyShortName: newCompany.CompanyShortName,
      TelNo: newCompany.TelNo,
      FaxNo: newCompany.FaxNo,
      Email: newCompany.Email,
      VatRate: newCompany.VatRate,
      TaxId: newCompany.TaxId,
      CreateBy: displayName,
      CreateDate: currentTime,
      UpdateBy: displayName,
      UpdateDate: currentTime
    });
  }
  UpdateCompany(newCompany) {
    const currentTime = this.kzhThDatePipe.transformDateTime(new Date());
    const displayName = this._userService.GetCurrentUserData().displayName;
    this.db.object('companies/' + newCompany.$key)
    .set({
      CompanyCode: newCompany.CompanyCode,
      CompanyNameTh: newCompany.CompanyNameTh,
      CompanyNameEn: newCompany.CompanyNameEn,
      CompanyShortName: newCompany.CompanyShortName,
      TelNo: newCompany.TelNo,
      FaxNo: newCompany.FaxNo,
      Email: newCompany.Email,
      VatRate: newCompany.VatRate,
      TaxId: newCompany.TaxId,
      CreateBy: newCompany.CreateBy,
      CreateDate: newCompany.CreateDate,
      UpdateBy: displayName,
      UpdateDate: currentTime
    })
  }
  DeleteCompany() {
    this.company.remove()
    .then(_ => {
      console.log(_);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
