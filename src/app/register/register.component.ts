import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';
import { User_Register } from '../SharedClassesAndTypes/User_Register';
import { RegisterService } from '../Services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  Options = ['Facebook', 'Twitter', 'Google'];
  registerModel = new User_Register('', '', '');
  constructor(
    private registerService: RegisterService, private fb: FormBuilder, private router: Router)
    { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        userName: this.fb.control(
          '',
          [
            Validators.required,
            Validators.pattern('[a-z A-Z]+'),
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ),
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control(
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$'
            ),
          ],
        ),
        confirmPassword: ['', Validators.required]
      }, {
      validator: [ConfirmPasswordValidator]
    }
    );
  }

  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  // get option() {
  //   return this.registerForm.get('option');
  // }

  // Node JS And Template Dirven Forms
  submitData() {
    //component ===> service
    //service==>http call
    this.registerService.Register(this.registerForm.value).subscribe({
      next: data => console.log(data),
      error: error => console.log(error)
    });
    this.router.navigate(['/Account'])
  }

  // Reactive Forms
  // submitData() {
  //   console.log(this.registerForm.value);
  // }
}
