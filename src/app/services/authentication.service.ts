import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
  
  ngOnInit(): void {
    this.auth.getAccessTokenSilently({scope: "openid", audience:"https://zclt-dev.us.auth0.com/api/v2/"});
  }
  
  constructor(public auth: AuthService) { }

  logout(): void {
    this.auth.logout();
    this.storeToken("");
  }

  storeToken(t: string): void {
    localStorage.setItem("token", t);
  }

  retrieveToken() {    
    this.auth.getAccessTokenSilently({scope: "openid", audience:"https://zclt-dev.us.auth0.com/api/v2/"}).subscribe(t => this.storeToken(t));
  }

  getToken(): string | null {
    return localStorage.getItem("token")
  }
}
