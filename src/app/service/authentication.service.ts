import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  BASE_PATH = `http://localhost:8080`

  username: string;
  password: string;

  constructor(
    private http: HttpClient
  ) {}

  authenticationService(username: string, password: string){
    return this.http.get(this.BASE_PATH,
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
    }));
  }

  createBasicAuthToken(username: string, password: string){
    return 'Basic ' + window.btoa(username+":"+password);
  }

  registerSuccessfulLogin(username, password){
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout(){
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);

    if (user === null) return false;

    return true;
  }

  getLoggedInUserName(){
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return '';

    return user;
  }
}
