import { Component, OnInit } from '@angular/core';

import { of, Observable, pipe } from 'rxjs';
import { filter, map  } from 'rxjs/operators';

@Component({
  selector: 'app-operators-demo',
  templateUrl: './operators-demo.component.html',
  styleUrls: ['./operators-demo.component.css']
})
export class OperatorsDemoComponent implements OnInit {

  squaredNumbersLogs: Array<number> = [];
  multipliedNumberLogs: Array<number> = [];
  oddFilteredLogs: Array<number> = [];
  squareOddLogs: Array<number> = []; 
  squaredOddLogs: Array<number> = []; 
  
  constructor() { }

  ngOnInit() {
    
    // Created observable using of method
    let numbersObservable = of(1, 2, 3, 4, 5);

    /********* map operator simple demo ***********/
    // Configured map operator and map returned a function
    let squareValuesMapFunc = map((val: number) => val * val);
    // Applied squareValuesMapFunc to numbersObservable. Returned new observable.
    let squaredNumbersObservable = squareValuesMapFunc(numbersObservable);
    
    // Subscribed to squaredNumbersObservable
    squaredNumbersObservable.subscribe(squaredNumber => this.squaredNumbersLogs.push(squaredNumber));

    
    /********* Custom operator: Multiply by given operator ***********/
    function multiplyByGiven(givenValue) {
      return function multiplyByGivenFunc(inputObservable) {
        var outputObservable = Observable.create(function subscribe(observer) {
          inputObservable.subscribe({
            next: (val) => observer.next(givenValue * val),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
          });
        });
        return outputObservable;
      }
    }

    // Configured multiplyByGiven operator and it returned a function
    let multiplyByGivenFunc = multiplyByGiven(10);
    // Applied squareValuesMapFunc to numbersObservable. Returned new observable.
    let multipliedNumbersObservable = multiplyByGivenFunc(numbersObservable);
    
    // Subscribed to multipliedNumbersObservable
    multipliedNumbersObservable.subscribe(multipliedNumber => this.multipliedNumberLogs.push(multipliedNumber));


    /********* Applying map and filter operators ***********/
    let oddFilterFunc = filter((val: number) => val%2 !== 0);
    let oddFiltered$ = oddFilterFunc(numbersObservable);
    
    let squareMapFunc = map((val: number) => val * val);
    let oddSquaredNumbers$ = squareMapFunc(oddFiltered$);

    oddSquaredNumbers$.subscribe(value => this.oddFilteredLogs.push(value));

    /*********** Applying map and filter operators through pipe() **************/
    let squareOddValsPipeFunc = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    let squareOdd$ = squareOddValsPipeFunc(numbersObservable);
    squareOdd$.subscribe(x => this.squareOddLogs.push(x));

    /******** Applying pipe() on observable ***********/
    // The pipe() function is also a method on the RxJS Observable, so we can use it like below for same operation
    let squaredOddObservable = numbersObservable.pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    squaredOddObservable.subscribe(x => this.squaredOddLogs.push(x));

  }

}
