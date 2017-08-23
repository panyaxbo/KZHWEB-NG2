import { KzhThDatePipe } from './../../pipes/kzh-th-date.pipe';
import { Rohead } from './../../classes/rohead';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ReceiptOrderService {
  receipts: FirebaseListObservable<any[]>;
  receipt: FirebaseObjectObservable<any>;
  Receipt: Rohead = {
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
  LoadReceiptData(): FirebaseListObservable<any> {
    return this.receipts;
  }
  LoadReceiptDataByKey(key): FirebaseObjectObservable<any> {
    this.receipt = this.db.object('receipts/' + key);
    return this.receipt;
  }
  CreateReceipt(newReceipt) {

  }
}
