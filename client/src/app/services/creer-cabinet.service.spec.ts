import { TestBed, inject } from '@angular/core/testing';

import { CreerCabinetService } from './creer-cabinet.service';

describe('CreerCabinetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreerCabinetService]
    });
  });

  it('should be created', inject([CreerCabinetService], (service: CreerCabinetService) => {
    expect(service).toBeTruthy();
  }));
});
