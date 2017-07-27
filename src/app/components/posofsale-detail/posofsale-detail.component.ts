import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { Pos } from '../../classes/Pos';
//import { PrintA4PaperComponent } from '../print-a4-paper/print-a4-paper.component';
//import { Print80x55mmThermalPaperComponent } from '../print-80x55mm-thermal-paper/print-80x55mm-thermal-paper.component';
import { CompleterService, CompleterData, RemoteData } from 'ng2-completer';
import { UtilityService } from '../../services/utility/utility.service';
import { ThbCurrencyPipe } from '../../pipes/thb-currency.pipe';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-posofsale-detail',
  templateUrl: './posofsale-detail.component.html',
  styleUrls: ['./posofsale-detail.component.css'],
  providers: [Pos, ThbCurrencyPipe]
})

export class PosofsaleDetailComponent implements OnInit {
source: any;
SumAmount: number = 23190;
PayAmount: number = 0;
  PendingAmount: number = 24813.3;
  NetAmount: number = 24813.3;
  VatAmount = 1623.3;
  CashAmount: number = 0;

  SumBillDiscountAmount: number = 0;
  datas = [];
  productDummyDatas = [];
  customerDummyDatas = [];

  CustomerAddress: string;
  CustomerKnownName: string;
  HeaderPendingAmountStyle = '#D84315'; // #D84315, #00C853
  /*"_id" : "594489cdbaa504c9a8659a0c",
    "seq" : 2,
    "productName" : "ชุดปั้มน้ำมันเชื้อเพลิง SCOOPY-I 2012 ใหม่ แท้ HONDA",
    "uom" : "ชุด",
    "qty" : 5,
    "price" : 2900,
    "discount" : 100,
    "amount" : 14400 */
  PosLine: {
    _id: string;
    seq: number;
    productName: string;
    qty: number;
    uom: string;
    price: number;
    discount: number;
    amountExVat: number;
    vatAmount: number;
    amountInVat: number;
  };

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      position: 'left', // left|right
    },
    edit: {
      inputClass: '',
      editButtonContent: '<i class="material-icons">edit</i>',
      saveButtonContent: '<i class="material-icons">done</i>',
      cancelButtonContent: '<i class="material-icons">cancel</i>',
      confirmSave: false,
    },
    add: {
      inputClass: '',
      addButtonContent: '<i class="material-icons">add_circle</i>',
      createButtonContent: '<i class="material-icons">add_circle_outline</i>',
      cancelButtonContent: '<i class="material-icons">cancel</i>',
      confirmCreate: false,
    },
    delete: {
      deleteButtonContent: '<i class="material-icons">delete</i>',
      confirmDelete: false,
    },
    noDataMessage: 'No data found',
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      seq: {
        title: '#',
        editable: false,
        class: 'text-align: center',
        width: '7%'
      },
      productName: {
        title: 'Product Name',
        editable: false,
        width: '40%'
      },
      qty: {
        title: 'Qty.',
        width: '7%'
      },
      uom: {
        title: 'Uom',
        width: '7%'
      },
      price: {
        title: 'Price',
        valuePrepareFunction: (price) => {
          var formatted = this.thbCurrencyPipe.transform(price, 2);
          return formatted;
        },
        width: '10%'
      },
      discount: {
        title: 'Disc.',
        width: '7%'
      },
      amountExVat: {
        title: 'Amount',
        valuePrepareFunction: (amountExVat) => {
          var formatted = this.thbCurrencyPipe.transform(amountExVat, 2);
          return formatted;
        },
        width: '12%'
      }
    }

  };
  public searchStr: string;
  private dataCustomerService: CompleterData;
  private dataProductService: CompleterData;
 // constructor(private completerService: CompleterService, private queryService: QueryService) {
 //   //this.dataService = completerService.local(this.searchData, 'color', 'color');
 //   this.dataService = completerService.remote('http://localhost:61227/machine/?query=','ComputerHostname, AssetID', 'ComputerHostname').descriptionField('ComputerType');

  constructor(private _utilityService: UtilityService,
              private thbCurrencyPipe: ThbCurrencyPipe,
              private completerService: CompleterService,
         //     private a4Paper: PrintA4PaperComponent,
        //      private thermalPaper: Print80x55mmThermalPaperComponent,
              private router: Router,
              public pos: Pos
              ) { }

  ngOnInit() {
    this._utilityService.LoadPosDummyData().subscribe(data => {
      this.datas = data;
    });

    this._utilityService.LoadCustomerDummyData().subscribe(data => {
      this.customerDummyDatas = data;
      this.dataCustomerService = this.completerService
      .local(this.customerDummyDatas, 'CustomerNameTh, CustomerAddress, CustomerKnownName',
       'CustomerNameTh, CustomerAddress, CustomerKnownName')
      .descriptionField('CustomerNameTh, CustomerAddress, CustomerKnownName');
    });
    this._utilityService.LoadProductDummyData().subscribe(data => {
      this.productDummyDatas = data;
      this.dataProductService = this.completerService
      .local(this.productDummyDatas, 'ProductNameTh, Quantity, Price, WholesalePrice',
       'ProductNameTh, Quantity, Price, WholesalePrice')
      .descriptionField('ProductNameTh, Quantity, Price, WholesalePrice');
    });
    this.PosLine = {
      _id: '',
      seq: 0,
      productName: '',
      qty: 0,
      uom: '',
      price: 0,
      discount: 0,
      amountExVat: 0,
      vatAmount: 0,
      amountInVat: 0
    }
  }
  observableSource(keyword: any) {
    let filteredList = this.productDummyDatas.filter(el => el.indexOf(keyword) !== -1);
    return Observable.of(filteredList);
  }
  OnSelectedCustomer(event: any) {
    console.log('You are in Onselected Product ', event);
    console.log('You are in Onselected Product ', event.originalObject);
    var Customer = event.originalObject;
    this.CustomerAddress = Customer.CustomerAddress;
    this.CustomerKnownName = Customer.CustomerKnownName;
    this.pos.dfCustomerKnownName = Customer.CustomerKnownName;
    this.pos.customerAddress = Customer.CustomerAddress;
    console.log(this.pos);
  }
  OnSelectedProduct(event: any) {
    var Product = event.originalObject;
    console.log('select ', Product, this.PosLine);
    // this.PosLine._id = '594489cdbaa504c9a8659a0g';
    // this.PosLine.seq = this.datas.length + 1;
    // this.PosLine.productName = Product.ProductNameTh;
    // this.PosLine.uom = Product.Uom;
    // this.PosLine.qty = 1;
    // this.PosLine.discount = 0;
    // this.PosLine.amount = Product.Price;

    this.PosLine = {
      _id: '594489cdbaa504c9a8659a0g',
      seq: this.datas.length + 1,
      productName: Product.ProductNameTh,
      qty: 1,
      uom: Product.Uom,
      price: Product.RetailPrice,
      discount: 0,
      amountExVat: Product.RetailPrice * 1,
      vatAmount: Product.RetailPrice * 0.07,
      amountInVat: Product.RetailPrice * 1.07
    };
    console.log('this pos line ', this.PosLine);
    this.datas.push(this.PosLine);
    console.log('this.datas new ', this.datas);
    this.source = new LocalDataSource(this.datas);
    this.source.load(this.source.data);
    this.source.refresh();

    this.SummarizeAllAmount();
  }
  SummarizeAllAmount() {
  //  for (let posline in this.datas) {
      console.log('summarize ');
  //  }
    var sumAmt = 0;
    var sumDiscAmt = 0;
    var sumDiscBillAmt = 0;
    var sumVatAmt = 0;
    var netAmt = 0;
    this.datas.forEach(posline => {
      console.log(posline);
      sumAmt += posline.amount;
      sumDiscAmt += posline.discount;
    //  sumVatAmt += posline.VatAmount;

    });

    netAmt = sumAmt - sumDiscBillAmt + sumVatAmt;
    this.NetAmount = netAmt;
    this.PendingAmount = netAmt;
    console.log('sumAmt ', sumAmt);
    console.log('sumDiscBillAmt ', sumDiscBillAmt);
    console.log('sumVatAmt ', sumVatAmt);
    console.log('netAmt ', netAmt);
  }
  PayEnoughAmount() {
    this.PayAmount = this.PendingAmount;
    this.PendingAmount = 0;
    this.HeaderPendingAmountStyle = '#00C853';
  }
  InputPayAmount() {
    this.PendingAmount = this.NetAmount - this.PayAmount;
    if (this.PendingAmount <= 0) {
      console.log('pending amt <= 0 ', this.PendingAmount <= 0);
      this.HeaderPendingAmountStyle = '#00C853';
    } else {
      console.log('pending amt > 0 ', this.PendingAmount > 0);
      this.HeaderPendingAmountStyle = '#D84315';
    }
  }

  CheckNumber(event: any) {
    console.log(event);
    console.log(this._utilityService.CheckIsNumber(event.target.value));
  }
  PrintA4Paper() {
    // this.a4Paper.Print();
    // this.router.navigateByUrl('/a4');
    let printContents, popupWin;
    printContents = document.getElementById('a4-paper').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          @page {
              width: 210mm;
              min-height: 297mm;
            }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
  PrintThermalPaper() {
    // this.thermalPaper.Print();
    // this.router.navigateByUrl('/thermal');
    let printContents, popupWin;
    printContents = document.getElementById('thermal-paper').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=80mm');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          @page {
              width: 80mm;
              min-height: 55mm;
            }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
