import { TestBed, inject } from '@angular/core/testing';

import { interceptAuthService } from './interceptAuth.service';

describe('401Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [interceptAuthService]
    });
  });

  it('should be created', inject([interceptAuthService], (service: interceptAuthService) => {
    expect(service).toBeTruthy();
  }));
});
