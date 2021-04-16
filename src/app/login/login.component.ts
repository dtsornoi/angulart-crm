import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin = false;
  loginSuccess = false;
  errorMessage = 'Invalid Credentials';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.authService.authenticationService(this.username, this.password).subscribe((result) =>{
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.router.navigate(['/employee-list']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
