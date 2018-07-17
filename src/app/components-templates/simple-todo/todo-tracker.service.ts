import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class TodoTrackerService {

  constructor() { }

  private todoObservable = new Subject();

  todoObservable$ = this.todoObservable.asObservable();

  track(todo) {
    this.todoObservable.next(todo);
  }

}
