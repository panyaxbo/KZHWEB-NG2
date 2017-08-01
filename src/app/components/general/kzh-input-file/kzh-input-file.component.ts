import { Component, OnInit, Inject, ElementRef, Renderer } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kzh-input-file',
  templateUrl: './kzh-input-file.component.html',
  styleUrls: ['./kzh-input-file.component.css']
})
export class KzhInputFileComponent implements OnInit {
  uploadFileList: any
  constructor(public elementRef: ElementRef,
              public renderer: Renderer) {
         //       renderer.listenGlobal('file_input_file', 'change', (event) => {

          //      });
              }
  ngOnInit() {

  }
  Upload(event) {
    console.log('test hcsdsd ', event);
    console.log('test target ', event.target.files);
    console.log('firebase ', firebase);
    const storageRef = firebase.storage().ref();
    console.log('storageRef ', storageRef);
    const files = event.target.files;
  //  const iRef = storageRef.child('/products/'+);
    if (files || files.length >= 1) {
      console.log(' file not sdsds ');
      for (let i = 0; i <= files.length; i++) {
        console.log('files[0] ', files[0]);
        const iRef = storageRef.child('/products/' + files[0].name);
        iRef.put(files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file! Now storing the reference at', snapshot);
          //   af.database.list(`/${folder}/images/`).push({ path: path, filename: selectedFile.name })
        });
      }
    } else {
      console.log('not file ');
    }
  }
  // ChangeInputText() {
  //   let str = fileInput.value;
  //   let i;
  //   if (str.lastIndexOf('\\')) {
  //     i = str.lastIndexOf('\\') + 1;
  //   } else if (str.lastIndexOf('/')) {
  //     i = str.lastIndexOf('/') + 1;
  //   }
  //   fileInputText.value = str.slice(i, str.length);
  // }

  // ChangeState() {
  //   if (fileInputText.value.length != 0) {
  //     if (!fileInputTextDiv.classList.contains("is-focused")) {
  //       fileInputTextDiv.classList.add('is-focused');
  //     }
  //   } else {
  //     if (fileInputTextDiv.classList.contains("is-focused")) {
  //       fileInputTextDiv.classList.remove('is-focused');
  //     }
  //   }
  // }
}
