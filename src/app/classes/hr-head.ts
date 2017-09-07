export class HrHead {
  $key: string;
  HrCode: string;
  HrDate: string;
  HrTime: string;
  MonthYear: string;
  StaffCode: string;
  SalaryAmount: number;
  PendingAmount: number;
  BonusAmount: number;
  NetAmount: number;
  SumBorrowAmount: number;
  PayAmount: number;
  SumProductAmount: number;
  BorrowAmount: number;
  SumLoseAmount: number;

  constructor($key: string, HrCode: string, HrDate: string, HrTime: string, MonthYear: string,
  StaffCode: string, SalaryAmount: number, PendingAmount: number, BonusAmount: number, NetAmount: number,
  SumBorrowAmount: number, PayAmount: number, SumProductAmount: number, BorrowAmount: number, SumLoseAmount: number) {
    this.$key = $key;
    this.HrCode = HrCode;
    this.HrDate = HrDate;
    this.HrTime = HrTime;
    this.MonthYear = MonthYear;
    this.StaffCode = StaffCode;
    this.SalaryAmount = SalaryAmount;
    this.PendingAmount = PendingAmount;
    this.BonusAmount = BonusAmount;
    this.NetAmount = NetAmount;
    this.SumBorrowAmount = SumBorrowAmount;
    this.PayAmount = PayAmount;
    this.SumProductAmount = SumProductAmount;
    this.BorrowAmount = BorrowAmount;
    this.SumLoseAmount = SumLoseAmount;
  }

}
