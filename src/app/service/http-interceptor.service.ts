import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isUserLoggedIn() && req.url.indexOf('basicauth')=== -1){
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-type' : 'application/json',
          'Authorization' : `Basic ${window.btoa(this.authService.username)+":"+this.authService.password}`
        })
      });
      return next.handle(authReq);
    }else {
      return next.handle(req);
    }
  }
}