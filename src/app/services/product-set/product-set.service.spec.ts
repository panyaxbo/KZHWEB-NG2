import { TestBed, inject } from '@angular/core/testing';

import { ProductSetService } from './product-set.service';

describe('ProductSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSetService]
    });
  });

  it('should be created', inject([ProductSetService], (service: ProductSetService) => {
    expect(service).toBeTruthy();
  }));
});
