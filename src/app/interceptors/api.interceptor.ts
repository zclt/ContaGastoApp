import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authenticationService.retrieveToken();
    let token = this.authenticationService.getToken();    
    const { method, url } = req;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`).set('Content-Type', "application/json")
    });

    return next.handle(authReq);
  }
}