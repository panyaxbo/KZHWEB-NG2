export class Pos {
  posCode: string;
  posStatus: string;
  posType: string;
  customerAddress: string;
  customerName: string;
  staffName: string;
  posDate: string;
  posTime: string;
  updateDate: string;
  updateTime: string;
  sumAmount: number;
  sumDiscoutAmount: number;
  sumQuantity: number;
  sumVatAmount: number;
  netAmount: number;
  payAmount: number;
  pendingAmount: number;
  changeAmount: number;
  // Derive fields
  dfCustomerKnownName: string;
}
