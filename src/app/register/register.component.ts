import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] 
})
export class RegisterComponent {
  RegisterFrom!: FormGroup; 
  submitted = false; 

  userRegister = {
    "Fullname": "",
    "email": "",
    "Mobile": "",
    "password": "" 
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.RegisterFrom = this.formBuilder.group({
      Fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      Mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  
  submitRegister() {
    this.submitted = true;

    if (this.RegisterFrom.invalid) {
      return;
    } else {
      this.userRegister.Fullname = this.RegisterFrom.value.Fullname;
      this.userRegister.email = this.RegisterFrom.value.email;
      this.userRegister.Mobile = this.RegisterFrom.value.Mobile;
      this.userRegister.password = this.RegisterFrom.value.password;

      if (this.userRegister.email == "admin@gmail.com" 
        && this.userRegister.password == "123456789") {
        alert("Registration Successful");
      } else {
        alert("Registration Failed");
      }
    }
  }

  
  resetForm() {
    this.submitted = false;
    this.RegisterFrom.reset();

    
  }
}



