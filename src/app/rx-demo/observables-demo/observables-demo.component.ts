import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { from } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    /***** fromEvent *****/
    const specialElement = document.getElementById('special-area');
    const mouseEventsObservable = fromEvent(specialElement, 'mousemove');

    const subscription = mouseEventsObservable.subscribe(
      (evt: MouseEvent) => {
        console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      
        if (evt.clientX < 250 && evt.clientY < 230) {
          subscription.unsubscribe();
          console.log("Unsubscribed for mouse events");
        }
      }
    );

    /***** ajax *****/
    let todosUrl = 'http://localhost:3000/todos';
    const todoObservable = ajax(todosUrl);

    todoObservable.subscribe(
      res => console.log(res.status, res.response)
    );

    /***** interval *****/
    const secondsCounterObservable = interval(1000);

    secondsCounterObservable.subscribe(
      n => console.log(`It's been ${n} seconds since subscribing!`)
    );

    /***** from array *****/
    let numbers = [10, 20, 30, 40, 50];
    const arrayObservable = from(numbers);

    arrayObservable.subscribe(
      n => console.log(n)
    );

    /***** of *****/

    /***** Custom observable with create method *****/
    let customObservable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    customObservable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });// subscribe method with next, error, complete methods in an object

    /***** Custom observalble with new keyword *****/
    let customObservable2 = new Observable(function (observer) {
      observer.next(11);
      observer.next(22);
      observer.next(33);
      setTimeout(() => {
        observer.next(44);
        observer.complete();
      }, 1000);
    });

    customObservable2.subscribe(
      x => console.log('got value ' + x),
      err => console.error('something wrong occurred: ' + err),
      () => console.log('done'),
    ); // subscribe method with next, error, complete methods

    /***** Custom observalble with error method *****/
    let customObservable3 = new Observable(function (observer) {
      try {
        observer.next(111);
        observer.next(222);
        observer.next(333);
        setTimeout(() => {
          observer.next(444);
          observer.complete();
        }, 1000);
      } catch(err) {
        observer.error(err);
      }
      
    });

    customObservable3.subscribe(
      x => console.log('got value ' + x), // called on, observer.next()
      err => console.error('something wrong occurred: ' + err), // called on, observer.error()
      () => console.log('done'), // called on, observer.complete()
    ); // subscribe method with next, error, complete methods

    /***** Custom observalble with error method *****/
    let customObservable4 = new Observable(function (observer) {
      try {
        observer.next(111);
        observer.next(222);
        observer.next(333);
        setTimeout(() => {
          observer.next(444);
          observer.complete();
        }, 1000);
      } catch(err) {
        observer.error(err);
      }
      
    });

    let observer = {
      next: x => console.log('got value ' + x), // called on, observer.next()
      error: err => console.error('something wrong occurred: ' + err), // called on, observer.error()
      complete: () => console.log('done'), // called on, observer.complete()
    }; // Observer is nothing but, collection of callbacks

    customObservable4.subscribe(observer);

  }

  



}
