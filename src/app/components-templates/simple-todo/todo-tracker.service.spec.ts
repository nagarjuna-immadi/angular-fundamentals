import { TestBed, inject } from '@angular/core/testing';

import { TodoTrackerService } from './todo-tracker.service';

describe('TodoTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoTrackerService]
    });
  });

  it('should be created', inject([TodoTrackerService], (service: TodoTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
