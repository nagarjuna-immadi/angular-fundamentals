import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class TodoTrackerService {

  constructor() { }

  private todoSubject = new Subject();

  todoObservable$ = this.todoSubject.asObservable();

  track(todo) {
    let action = `${todo.title} is ${todo.done ? `` : `not`} completed`;
    this.todoSubject.next(action);
  }

}
