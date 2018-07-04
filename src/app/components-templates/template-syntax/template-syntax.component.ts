import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  currentHero = {
    name: "Steven",
    power: 200
  };

  heroImageUrl = './assets/images/hero.jpg';

  formNotChanged = true;

  canSave = true;
  isUnchanged = false;
  isSpecial = false;
  
  classes =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

  getVal() {
    return 1;
  }



}
