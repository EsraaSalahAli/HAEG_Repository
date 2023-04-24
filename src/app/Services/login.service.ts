import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User_Login } from '../SharedClassesAndTypes/User_Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url:string="http://localhost:5099/api/Account/login";
  constructor(private http:HttpClient) { }

  Login(user:User_Login){
    return this.http.post(this._url,user);
  }
}
