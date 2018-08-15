import { Component, OnInit } from '@angular/core';

import { UtilService } from '../../core/util.service';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.css']
})
export class CounterHomeComponent implements OnInit {

  constructor(private util: UtilService) { }

  userName: string;

  ngOnInit() {
    this.util.userName$.subscribe(val => this.userName = val);
  }

}
