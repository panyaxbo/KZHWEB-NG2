import { UploadService } from './../../services/upload/upload.service';
import { Upload } from './../../classes/upload';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  SelectedFiles: FileList;
  CurrentUpload: Upload;
  constructor(private _uploadService: UploadService) { }

  ngOnInit() {
  }

  DetectFiles(event) {
    console.log(event);
    this.SelectedFiles = event.target.files;

  }

  UploadSingle() {
    const file = this.SelectedFiles.item(0);
    this.CurrentUpload = new Upload(file);
    this._uploadService.PushUpload(this.CurrentUpload);
  }

  UploadMultiple() {
    const files = this.SelectedFiles;
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.CurrentUpload = new Upload(files[idx]);
      this._uploadService.PushUpload(this.CurrentUpload);
    })
  }
}
