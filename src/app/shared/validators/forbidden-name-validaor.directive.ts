import { Directive, Input } from '@angular/core';
import { forbiddenNameValidator } from './forbidden-name.validator';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidaor]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidaorDirective, multi: true}]
})
export class ForbiddenNameValidaorDirective implements Validator {

  constructor() { }

  @Input() forbiddenNames: string[];

  validate(control: AbstractControl):object | null {
    return forbiddenNameValidator(this.forbiddenNames)(control);
  }

}
