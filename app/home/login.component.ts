import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES,FORM_DIRECTIVES,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
    templateUrl: 'app/home/login.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES,FORM_DIRECTIVES],
    providers:[FormBuilder]

})
export class LoginComponent {
    public pageTitle: string = 'Logins';
    userForm: any;
    submitAttempt:boolean;

  constructor(private formBuilder: FormBuilder,private titleService: Title ) {
      
    this.userForm = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password:  new FormControl('', Validators.required)
    });
    this.setTitle(this.pageTitle);
  }
  
  saveUser(value:any) {
    this.submitAttempt=true;
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.username} Password: ${this.userForm.value.password}`);
      alert(value);
    }
  }

   public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}

