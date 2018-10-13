import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  hero = {
    name: '',
    alterEgo: '',
    power: ''
  };

  onSubmit(form) {
    console.log(this.hero);
    console.log(form.controls);
    console.log(form.controls.name.value);
  }

}
