import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlComponent } from './reactive/form-control/form-control.component';
import { FormGroupComponent } from './reactive/form-group/form-group.component';
import { FormBuilderComponent } from './reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './reactive/form-array/form-array.component';
import { NestedFormGroupComponent } from './reactive/nested-form-group/nested-form-group.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormControlComponent, FormGroupComponent, FormBuilderComponent, FormArrayComponent, NestedFormGroupComponent]
})
export class FormsDemoModule { }