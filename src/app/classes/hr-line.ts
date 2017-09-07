export class HrLine {
  $key: string;
  SeqNo: number;
  IsWork: boolean;
  IsLate: boolean;
  IsOut: boolean;
  HrHeadId: string;
  LineDate: string;
  Item: string;
  Description: string;
  Amount: number;
// Derive field
    RowStyle: Object;
  constructor($key: string, SeqNo: number, IsWork: boolean, IsLate: boolean,
     IsOut: boolean, HrHeadId: string, LineDate: string, Item: string, Description: string, Amount: number, RowStyle: Object) {
       this.$key = $key;
       this.SeqNo = SeqNo;
       this.IsWork = IsWork;
       this.IsLate = IsLate;
       this.IsOut = IsOut;
       this.HrHeadId = HrHeadId;
       this.LineDate = LineDate;
       this.Item = Item;
       this.Description = Description;
       this.Amount = Amount;
       this.RowStyle = RowStyle;
  }
}
