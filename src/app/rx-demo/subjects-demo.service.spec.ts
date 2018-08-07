import { TestBed, inject } from '@angular/core/testing';

import { SubjectsDemoService } from './subjects-demo.service';

describe('SubjectsDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectsDemoService]
    });
  });

  it('should be created', inject([SubjectsDemoService], (service: SubjectsDemoService) => {
    expect(service).toBeTruthy();
  }));
});
