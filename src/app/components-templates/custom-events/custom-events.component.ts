import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  heros = [{"id":1,"name":"Vyky","power":2612},
  {"id":2,"name":"Vernice","power":7036},
  {"id":3,"name":"Chrissie","power":3331},
  {"id":4,"name":"Tana","power":5158},
  {"id":5,"name":"Rawley","power":8948},
  {"id":6,"name":"Wanids","power":7028},
  {"id":7,"name":"Frances","power":2697},
  {"id":8,"name":"Geoff","power":8761},
  {"id":9,"name":"Wanda","power":2645},
  {"id":10,"name":"Clerissa","power":6016},
  {"id":11,"name":"Legra","power":4520},
  {"id":12,"name":"Ida","power":3400},
  {"id":13,"name":"Robinet","power":3080},
  {"id":14,"name":"Kristos","power":8693},
  {"id":15,"name":"Delaney","power":8963},
  {"id":16,"name":"Kinsley","power":3148},
  {"id":17,"name":"Ros","power":4850},
  {"id":18,"name":"Cathie","power":9082},
  {"id":19,"name":"Mendy","power":2508},
  {"id":20,"name":"Jemimah","power":9091},
  {"id":21,"name":"Oates","power":9276},
  {"id":22,"name":"Gladys","power":5430},
  {"id":23,"name":"Jacquenette","power":9859},
  {"id":24,"name":"Ring","power":8520},
  {"id":25,"name":"Tristam","power":4935}];
  
  constructor() { }

  ngOnInit() {
  }

  delete(heroObj) {
    console.log(heroObj);
  }

}
