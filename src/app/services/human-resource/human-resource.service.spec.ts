import { TestBed, inject } from '@angular/core/testing';

import { HumanResourceService } from './human-resource.service';

describe('HumanResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HumanResourceService]
    });
  });

  it('should be created', inject([HumanResourceService], (service: HumanResourceService) => {
    expect(service).toBeTruthy();
  }));
});
