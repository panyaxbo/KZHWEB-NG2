import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'staffFilter'
})
export class StaffFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
