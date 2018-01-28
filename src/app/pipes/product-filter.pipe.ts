import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) { return []; }
    if (!value || value.length === 0) { return items; }

    return items.filter(item => {
      // tslint:disable-next-line:no-unused-expression
      item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1
    });
  }


}
