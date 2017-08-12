import { PaymentTypeEnum } from './payment-type.enum';

export function PaymentTypeEnumAware(constructor: Function) {
    constructor.prototype.PaymentTypeEnum = PaymentTypeEnum;
}
