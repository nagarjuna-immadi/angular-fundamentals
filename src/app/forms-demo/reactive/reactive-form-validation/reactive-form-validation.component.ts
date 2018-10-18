import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from '../../../shared/validators/forbidden-name.validator';
import { UniqueUserNameValidator } from '../../../shared/validators/unique-user-name.async-validator';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private uniqueUserNameValidator: UniqueUserNameValidator) { }

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  vehicles = [
    {label:"Two Wheeler", value: 'two-wheeler', selected: false},
    {label:"Four Wheeler", value: 'four-wheeler', selected: false},
    {label:"Private Chopper", value: 'private-chopper', selected: false},
    {label:"Private Plain", value: 'private-plain', selected: false}
  ];

  heroFormGroup: FormGroup;

  ngOnInit() {
    this.heroFormGroup = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      'alterEgo': [''],
      'power': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'seconderyEmail': ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'available': ['', Validators.required],
      'nickName': ['', [Validators.required, forbiddenNameValidator(['Bob', 'Tim', 'Tommy'])]],
      'userName': ['', [Validators.required], this.uniqueUserNameValidator.validate.bind(this.uniqueUserNameValidator)],
      // 'vehicles': this.buildVehicleCheckBoxControls(),
    });

    this.heroFormGroup.valueChanges.subscribe(changesObj => {
      console.log(this.heroFormGroup);
    });
  }

  buildVehicleCheckBoxControls() {
    let vehicleCheckBoxControls = [];
    this.vehicles.forEach(vehicle => {
      let control = this.fb.control(vehicle.selected);
      vehicleCheckBoxControls.push(control);
    });

    return new FormArray(vehicleCheckBoxControls, Validators.required);
  }

  get name() { return this.heroFormGroup.get('name'); }

  get power() { return this.heroFormGroup.get('power'); }

  get alterEgo() { return this.heroFormGroup.get('alterEgo'); }

  get email() { return this.heroFormGroup.get('email'); }

  get seconderyEmail() { return this.heroFormGroup.get('seconderyEmail'); }

  get available() { return this.heroFormGroup.get('available'); }

  get nickName() { return this.heroFormGroup.get('nickName'); }

  get userName() { return this.heroFormGroup.get('userName'); }

  // get vehicleControls() { return this.heroFormGroup.get('vehicles'); }

  onSubmit() {
    console.log(this.heroFormGroup.value);
  }

}
