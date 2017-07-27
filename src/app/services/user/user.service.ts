import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../../classes/user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  public user: User = {
    username: '',
    password: '',
    displayName: '',
    photoURL: '',
    email: '',
    createBy: '',
    createDate: ''
  };
  constructor(private http: Http) {

  }
  LoadUserLocalData() {
    return this.http.get('./assets/user-data.json')
            .map(response => {
              console.log('service user ', response.json());
          return response.json();
      }
    );
  }
  GetCurrentUserData(): User {
    return this.user;
  }
  SetCurrentUserData(user) {
    this.user = user;
  }

}
