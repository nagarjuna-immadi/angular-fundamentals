import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenNameValidaorDirective } from './validators/forbidden-name-validaor.directive';
import { UniqueUserNameAsyncValidatorDirective } from './validators/unique-user-name-async-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForbiddenNameValidaorDirective, UniqueUserNameAsyncValidatorDirective],
  exports: [ForbiddenNameValidaorDirective, UniqueUserNameAsyncValidatorDirective]
})
export class SharedModule { }
