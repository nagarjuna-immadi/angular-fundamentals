import { Component, OnInit } from '@angular/core';

import {of} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-different-operators',
  templateUrl: './different-operators.component.html',
  styleUrls: ['./different-operators.component.css']
})
export class DifferentOperatorsComponent implements OnInit {

  numbersMappedLogs: Array<number> = [];

  constructor() { }

  ngOnInit() {

    let numbersObservable = of(1, 2, 3, 4, 5);

    /******* map operator *********/
    let numbersMapped = numbersObservable.pipe(
      map(val => val * 10)
    );

    numbersMapped.subscribe(val => this.numbersMappedLogs.push(val));

  }

}
