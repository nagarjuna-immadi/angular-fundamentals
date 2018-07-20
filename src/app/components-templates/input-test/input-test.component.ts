import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'Steve Jobs',
    age: 60
  };

}
