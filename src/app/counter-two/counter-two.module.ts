import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CounterHomeComponent } from './counter-home/counter-home.component';

import { CounterOneModule } from '../counter-one/counter-one.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CounterOneModule
  ],
  declarations: [CounterHomeComponent]
})
export class CounterTwoModule { }
