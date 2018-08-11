import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { LazyLoadingDemoComponent } from './lazy-loading-demo/lazy-loading-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LazyLoadingDemoComponent]
})
export class ModulesDemoModule { }
