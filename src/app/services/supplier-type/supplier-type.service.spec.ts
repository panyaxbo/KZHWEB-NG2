import { TestBed, inject } from '@angular/core/testing';

import { SupplierTypeService } from './supplier-type.service';

describe('SupplierTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierTypeService]
    });
  });

  it('should ...', inject([SupplierTypeService], (service: SupplierTypeService) => {
    expect(service).toBeTruthy();
  }));
});
