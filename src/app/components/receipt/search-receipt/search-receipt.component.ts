import { AngularFireDatabase } from 'angularfire2/database';
import { ReceiptOrderService } from './../../../services/receipt-order/receipt-order.service';
import { Router } from '@angular/router';
import { NavbarService } from './../../../services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-receipt',
  templateUrl: './search-receipt.component.html',
  styleUrls: ['./search-receipt.component.css']
})
export class SearchReceiptComponent implements OnInit {
  SearchRoHeadList: any;
  SearchFromDate: string;
  SearchToDate: string;
  constructor(private router: Router,
              public _receiptOrderService: ReceiptOrderService,
              private db: AngularFireDatabase) { }

  ngOnInit() {

  }
  NewReceiptOrder() {
    this.router.navigateByUrl('/receipt-detail/new');
  }
  ExitReceiptOrder() {
    this.router.navigateByUrl('/receipt');
  }
  SearchReceiptOrder() {
  //  this.db.list('ro-heads');
    this._receiptOrderService.LoadReceiptOrderHead()
    .subscribe(roHeads => {
      console.log(roHeads);
      this.SearchRoHeadList = roHeads;
    });
  }
  SelectDateChange() {
    console.log('select change');
  }
  EditReceiptOrder(roHead) {

  }
}
