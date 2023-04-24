import { Component, OnInit } from '@angular/core';
import { User_Login } from '../SharedClassesAndTypes/User_Login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  loginModel=new User_Login("","");


  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.loginForm =this.fb.group({
      userName:this.fb.control('', [Validators.required]),
      password:this.fb.control('', [Validators.required]),
    });
  }

  get userName()
  {
     return this.loginForm.get('userName');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  // Node JS And Template Dirven Forms
  submitData()
  {
    //component ===> service
    //service==>http call
    this.loginService.Login(this.loginForm.value).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
    this.router.navigate(['/Account'])
  }


  // Reactive Forms
  // submitData()
  // {
  //   console.log(this.loginForm.value);
  // }

}
