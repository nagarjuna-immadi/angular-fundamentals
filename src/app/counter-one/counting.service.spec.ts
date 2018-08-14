import { TestBed, inject } from '@angular/core/testing';

import { CountingService } from './counting.service';

describe('CountingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountingService]
    });
  });

  it('should be created', inject([CountingService], (service: CountingService) => {
    expect(service).toBeTruthy();
  }));
});
