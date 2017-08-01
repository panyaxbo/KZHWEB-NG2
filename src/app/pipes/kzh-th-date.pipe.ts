import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'kzhThDate'
})
export class KzhThDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {

  }
  transform(value: any, args?: any): any {
    // TO-DO
    return null;
  }
  transformDateTime(value: any, args?: any): any {
    this.datePipe = new DatePipe('th');
    const format = 'dd/MM/yyyy HH:mm:ss';

    const dateFotmat = this.datePipe.transform(value, format).replace('พ.ศ. ', '');
    return dateFotmat;
  }
  transformDate(value: any, args?: any): any {
    this.datePipe = new DatePipe('th');
    const format = 'dd/MM/yyyy';

    const dateFotmat = this.datePipe.transform(value, format).replace('พ.ศ. ', '');
    return dateFotmat;
  }
  transformTime(value: any, args?: any): any {
    this.datePipe = new DatePipe('th');
    const timeFormat = 'HH:mm:ss';
    const dateFotmat = this.datePipe.transform(value, timeFormat).replace('พ.ศ. ', '');
    return dateFotmat;
  }
}
