import { TestBed, inject } from '@angular/core/testing';

import { ReceiptOrderService } from './receipt-order.service';

describe('ReceiptOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceiptOrderService]
    });
  });

  it('should be created', inject([ReceiptOrderService], (service: ReceiptOrderService) => {
    expect(service).toBeTruthy();
  }));
});
