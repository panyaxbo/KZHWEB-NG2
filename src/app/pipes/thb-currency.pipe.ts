import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'thbCurrency'
})
export class ThbCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {

  }
  transform(value: number, decimal: number): string {
    const formatted = this.currencyPipe.transform(value, 'USD', false, '.2').replace('USD', '');
    return formatted;
  }


}
