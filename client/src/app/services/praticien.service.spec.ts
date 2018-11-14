import { TestBed, inject } from '@angular/core/testing';

import { PraticienService } from './praticien.service';

describe('Praticien.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PraticienService]
    });
  });

  it('should be created', inject([PraticienService], (service: PraticienService) => {
    expect(service).toBeTruthy();
  }));
});
