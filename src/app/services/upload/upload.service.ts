import { Upload } from './../../classes/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase) { }

  PushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child('uploads/${upload.file.name}').put(upload.File);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
    //  upload.Progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
    },
    () => {
      // upload success
      upload.Url = uploadTask.snapshot.downloadURL
      upload.Name = upload.File.name;
      this.SaveFileData(upload);
    });
  }

  private SaveFileData(upload: Upload) {
    this.db.list('uploads/').push(upload);
  }
}
