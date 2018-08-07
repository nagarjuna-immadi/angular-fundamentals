import { TestBed, inject } from '@angular/core/testing';

import { ColorChangeService } from './color-change.service';

describe('ColorChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorChangeService]
    });
  });

  it('should be created', inject([ColorChangeService], (service: ColorChangeService) => {
    expect(service).toBeTruthy();
  }));
});
