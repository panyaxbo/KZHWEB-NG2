import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-80x55mm-thermal-paper',
  templateUrl: './print-80x55mm-thermal-paper.component.html',
  providers: [],
  styleUrls: ['./print-80x55mm-thermal-paper.component.css']
})
export class Print80x55mmThermalPaperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Print() {
    let printContents, popupWin;
    printContents = document.getElementById('80x55mm-paper').innerHTML;
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
