import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/validation.service';


@Component({
    templateUrl: 'app/home/login.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]

})
export class LoginComponent {
    public pageTitle: string = 'Logins';

    userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'password': ['', [Validators.required,Validators.minLength(10)]]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Password: ${this.userForm.value.password}`);
    }
  }

}

