import { Component, OnInit, ContentChild, AfterContentChecked } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'John',
    age: 25
  };

  @ContentChild(EditUserComponent) editUserContent: EditUserComponent;

  ngAfterContentChecked() {
    this.user.name = this.editUserContent.user.name;
    this.user.age = this.editUserContent.user.age;
  }

}
