import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  currentHero = {
    name: "Steven"
  };
  heroImageUrl = './assets/images/hero.jpg';

  constructor() { }

  ngOnInit() {
  }

  getVal() {
    return 1;
  }

}
