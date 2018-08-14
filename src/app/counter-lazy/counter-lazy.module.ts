import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterLazyRoutingModule } from './counter-lazy-routing.module';

import { CounterOneModule } from '../counter-one/counter-one.module';

import { CounterHomeComponent } from './counter-home/counter-home.component';

@NgModule({
  imports: [
    CommonModule,
    CounterLazyRoutingModule,
    CounterOneModule
  ],
  declarations: [CounterHomeComponent]
})
export class CounterLazyModule { }
