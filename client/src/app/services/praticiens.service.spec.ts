import { TestBed, inject } from '@angular/core/testing';

import { PraticiensService } from './praticiens.service';

describe('PraticiensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PraticiensService]
    });
  });

  it('should be created', inject([PraticiensService], (service: PraticiensService) => {
    expect(service).toBeTruthy();
  }));
});
