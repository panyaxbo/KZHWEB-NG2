import { Upload } from './../../classes/upload';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase) { }

  private basePath = '/uploads';
  private uploadTask: firebase.storage.UploadTask;

  PushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
  //  let file = upload.File;
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.File.name}`).put(upload.File);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      console.log('uploading ... ', snapshot);
     upload.Progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
    },
    () => {
      // upload success
      console.log('success -> ', this.uploadTask);
      upload.Url = this.uploadTask.snapshot.downloadURL
      upload.Name = upload.File.name;
      this.SaveFileData(upload);
    });
  }
  DeleteUpload(upload: Upload) {
    this.DeleteFileData(upload.$key)
    .then(() => {
      this.DeleteFileStorage(upload.Name)
    })
    .catch(error => console.log(error));
  }
  private SaveFileData(upload: Upload) {
    this.db.list('uploads/').push(upload);
  }
  private DeleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
  private DeleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
