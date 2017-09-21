import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { RoHead } from './../../classes/ro-head';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ReceiptOrderService {
  roHeads: FirebaseListObservable<any[]>;
  receipt: FirebaseObjectObservable<any>;
  Receipt: RoHead = {
    $key: '',
    _id: '',
    UserId: '',
    RONo: '',
    RODate: '',
    ROTime: '',
    SumAmount: 0,
    SumVatAmount: 0,
    SumDiscountAmount: 0,
    NetAmount: 0,
    SumWeight: 0,
    SumWeightAmount: 0,
    PostType: '',
    BillingName: '',
    BillingAddress: '',
    BillingProvinceId: '',
    BillingDistrictId: '',
    BillingSubDistrictId: '',
    BillingZipCode: '',
    ReceiptName: '',
    ReceiptAddress: '',
    ReceiptProvinceId: '',
    ReceiptDistrictId: '',
    ReceiptSubDistrictId: '',
    ReceiptZipCode: '',
    BillEmail: '',
    TelNo: '',
    MobileNo: '',
    PaymentType: '',
    PaymentBank: '',
    PaymentStatus: '',
    ShippingStatus: '',
    StaffApprovePaymentStatus: '',
    ROLines: [],
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  }

  constructor(private db: AngularFireDatabase,
              private kzhThDatePipe: KzhThDatePipe) { }

  GetLatestReceiptOrderDocument(): any  {
    return this.db.list('roheads', {
      query: {
        limitToLast: 1
      }
    });
  }
  NewReceipt() {
    return this.Receipt = {
      $key: '',
      _id: '',
      UserId: '',
      RONo: '',
      RODate: '',
      ROTime: '',
      SumAmount: 0,
      SumVatAmount: 0,
      SumDiscountAmount: 0,
      NetAmount: 0,
      SumWeight: 0,
      SumWeightAmount: 0,
      PostType: '',
      BillingName: '',
      BillingAddress: '',
      BillingProvinceId: '',
      BillingDistrictId: '',
      BillingSubDistrictId: '',
      BillingZipCode: '',
      ReceiptName: '',
      ReceiptAddress: '',
      ReceiptProvinceId: '',
      ReceiptDistrictId: '',
      ReceiptSubDistrictId: '',
      ReceiptZipCode: '',
      BillEmail: '',
      TelNo: '',
      MobileNo: '',
      PaymentType: '',
      PaymentBank: '',
      PaymentStatus: '',
      ShippingStatus: '',
      StaffApprovePaymentStatus: '',
      ROLines: [],
      CreateBy: '',
      CreateDate: '',
      UpdateBy: '',
      UpdateDate: ''
    }
  }
  PopulatedReceipt(receipt) {
    this.Receipt.$key = receipt.$key;
    return this.Receipt;
  }
  LoadReceiptOrderHead(): FirebaseListObservable<any> {
    return this.db.list('roheads');
  }
  LoadReceiptDataByKey(key): FirebaseObjectObservable<any> {
    this.receipt = this.db.object('receipts/' + key);
    return this.receipt;
  }
  CreateReceipt(newReceipt) {

  }
}
