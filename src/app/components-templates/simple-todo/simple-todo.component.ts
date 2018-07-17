import { Component, OnInit } from '@angular/core';

import { TodoTrackerService } from './todo-tracker.service';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css'],
  providers: [TodoTrackerService]
})
export class SimpleTodoComponent implements OnInit {

  todosModified = [];

  constructor(private tracker: TodoTrackerService) {
    this.tracker.todoObservable$.subscribe(todo => {
      this.todosModified.push(todo);
    });
  }

  ngOnInit() {
  }

  todos = [
    {id: 1, title: 'Pay power bill', done: false},
    {id: 2, title: 'Pay phone bill', done: false},
    {id: 3, title: 'Talk to call center', done: false},
    {id: 4, title: 'Attend meeting', done: true},
    {id: 5, title: 'Deposit money', done: true}
  ];

}
