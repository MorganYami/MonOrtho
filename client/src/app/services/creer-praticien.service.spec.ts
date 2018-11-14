import { TestBed, inject } from '@angular/core/testing';

import { CreerPraticienService } from './creer-praticien.service';

describe('CreerPraticienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreerPraticienService]
    });
  });

  it('should be created', inject([CreerPraticienService], (service: CreerPraticienService) => {
    expect(service).toBeTruthy();
  }));
});
