import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {

  @Output() filesDropped  = new EventEmitter<FileList>();
  @Output() fileHovered = new EventEmitter();
  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();

    let transfer = $event.dataTransfer;
    this.filesDropped.emit(transfer.files);
    this.fileHovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    event.preventDefault();

    this.fileHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    this.fileHovered.emit(false);
  }
}
