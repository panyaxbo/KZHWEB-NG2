import { CompanyService } from './../../../services/company/company.service';
import { StaffService } from './../../../services/staff/staff.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { EssenceNg2PrintComponent } from 'essence-ng2-print';
@Component({
  selector: 'app-print-retail-receipt',
  templateUrl: './print-retail-receipt.component.html',
  styleUrls: ['./print-retail-receipt.component.css']
})
export class PrintRetailReceiptComponent implements OnInit {
  printDiv: any;
  showHead: boolean = true;
  hideTable1: boolean = false;
  currentDate: Date = new Date ();
  mockHead; mockLines; mockLines2;
  datas: any[];
  printCSS: string[];
  printStyle: string;
  constructor(private elRef: ElementRef,
    public _companyService: CompanyService,
    public _staffService: StaffService) {
     // this.printCSS = ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'];
      this.printStyle =
      `
      body {
        margin: 0px 0px 0px 0px;
      }

      @page {
        size: 80mm 100mm;
        margin-left: 0cm;
        margin-right: 0cm;
        margin-top: 0cm;
        margin-bottom: 0cm;
      }
      th, td {

      }
      .pay-slip-label {
        font-size: 20px;
      }
      `;
    this.mockHead = {
      "RoNo": 'RO60090023',
      "RoType": '',
      "RoDate": '10/09/2560',
      "RoTime": '10:51:43',
      "CustomerName" : "ช่างต้น"
    }
    this.mockLines = [
      {
        "SeqNo": 1,
        "ProductName": "น้ำมัน 2T ไดเกียว",
        "Quantity": 2,
        "Price": 1230,
        "Amount": 2460,
      }
    ]
    this.mockLines2 = [
      {
        "SeqNo": 1,
        "ProductName": "แบตเตอรี่ NS100R 1*2 3K",
        "Quantity": 1,
        "Price": 2400,
        "Amount": 2400
      },
      {
        "SeqNo": 2,
        "ProductName": "น้ำมันเครื่อง 4T 10W-30 1.0L 1*12 VALVOLINE",
        "Quantity": 3,
        "Price": 130,
        "Amount": 390
      },
      {
        "SeqNo": 3,
        "ProductName": "น้ำมันเครื่อง 4T หัวฉีด PGM-Fi 0.8L 1*12 HONDA",
        "Quantity": 6,
        "Price": 95,
        "Amount": 570
      },
      {
        "SeqNo": 4,
        "ProductName": "แบตเตอร์รี่มอเตอร์ไซค์ MT5L-BS GM-X 1*12 DIAMOND",
        "Quantity": 4,
        "Price": 400,
        "Amount": 1600
      },
      {
        "SeqNo": 5,
        "ProductName": "สวิทช์กุญแจ (ชุดใหญ่) (2แจ๊ค 2สาย) WAVE125R ใหม่ นิรภัย MAG",
        "Quantity": 3,
        "Price": 380,
        "Amount": 1140
      }
    ]

  }

  ngOnInit() {
  }
  getPrintDiv () {
    for (let i: number = 0; i < this.elRef.nativeElement.childNodes.length; i++) {
        let node: any = this.elRef.nativeElement.childNodes[i];
        if (node.id === 'print_div') {
            this.printDiv = node;
        }
    }
}

printComplete () {
    console.log('打印完成！');
    this.showHead = true;
    this.hideTable1 = false;
}

customPrint (print: string) {
    this.showHead = false;
    this.hideTable1 = true;
    this.getPrintDiv();
    if (print === 'print1') {
      //  this.printComponent1.print();
    } else if (print === 'print2') {
     //   this.printComponent2.print();
    }
}
}
