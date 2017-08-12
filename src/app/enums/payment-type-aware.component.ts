import { Component } from '@angular/core';
import { PaymentTypeEnum } from './payment-type.enum';
import { PaymentTypeEnumAware } from './payment-type-aware.decorator';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kzh-payment-type-radio',
  template: `
    <div [ngSwitch]="myEnumValue">
      <div *ngSwitchCase="PaymentTypeEnum.เงินสด">
        เงินสด
      </div>
      <div *ngSwitchCase="PaymentTypeEnum.บัตรเครดิต">
        บัตรเครดิต
      </div>
    </div>
    <button (click)="toggleValue()">Toggle Value</button>
  `,
})
@PaymentTypeEnumAware // <---------------!!!
export default class EnumAwareComponent {
  myEnumValue: PaymentTypeEnum = PaymentTypeEnum.เงินสด;

  toggleValue() {
    this.myEnumValue = this.myEnumValue === PaymentTypeEnum.เงินสด
        ? PaymentTypeEnum.บัตรเครดิต : PaymentTypeEnum.เงินสด;
  }
}
