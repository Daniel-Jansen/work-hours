import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    senderFirstName: new FormControl('', Validators.required),
    senderMiddleName: new FormControl(''),
    senderLastName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  submitForm() {
    console.log(this.loginForm.valid);
  }
}
