import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class MessageService {

  private _messaging: firebase.messaging.Messaging;

    constructor(@Inject(FirebaseApp) private _firebaseApp: firebase.app.App) {
        this._messaging = firebase.messaging(this._firebaseApp);
        this._messaging.requestPermission()
            .then(data => {
              console.log(data);
             })
            .catch((error) => {
               console.log(error);
            });
    }

}
