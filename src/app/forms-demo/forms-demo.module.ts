import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FormControlComponent } from './reactive/form-control/form-control.component';
import { FormGroupComponent } from './reactive/form-group/form-group.component';
import { FormBuilderComponent } from './reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './reactive/form-array/form-array.component';
import { NestedFormGroupComponent } from './reactive/nested-form-group/nested-form-group.component';
import { SuperHeroComponent } from './template-driven/super-hero/super-hero.component';
import { ReactiveFormValidationComponent } from './reactive/reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormValidationComponent } from './template-driven/template-driven-form-validation/template-driven-form-validation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FormControlComponent, FormGroupComponent, FormBuilderComponent, FormArrayComponent, NestedFormGroupComponent, SuperHeroComponent, ReactiveFormValidationComponent, TemplateDrivenFormValidationComponent]
})
export class FormsDemoModule { }
