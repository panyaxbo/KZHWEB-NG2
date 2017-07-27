import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Company } from '../../classes/company';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class CompanyService {
  public company: Company;

  constructor(private http: Http,
              private db: AngularFireDatabase) {
  //  this.LoadCompanyLocalData().subscribe(data => {
  //     this.company = data;
  //     console.log('serv company ', this.company);
  //  });
  }
  GetCurrentCompanyData(): Company {
    return this.company;
  }
  SetCurrentCompanyData(company) {
    this.company = company;
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
}
