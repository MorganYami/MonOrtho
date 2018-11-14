import { TestBed, inject } from '@angular/core/testing';

import { CabinetsService } from './cabinets.service';

describe('CabinetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CabinetsService]
    });
  });

  it('should be created', inject([CabinetsService], (service: CabinetsService) => {
    expect(service).toBeTruthy();
  }));
});
