import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-a4-paper',
  templateUrl: './print-a4-paper.component.html',
  providers: [],
  styleUrls: ['./print-a4-paper.component.css']
})
export class PrintA4PaperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Print() {
    let printContents, popupWin;
    printContents = document.getElementById('a4-paper').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
