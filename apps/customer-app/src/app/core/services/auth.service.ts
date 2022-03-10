import { Inject, Injectable } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin: BehaviorSubject<any> = new BehaviorSubject(false);
  isAuthenticated = false;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth,
  public oktaAuthStateService: OktaAuthStateService) { }
  
  login() {
    this.isLogin.next(true);
    console.log('login');
  }

   async isLoggedIn() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    return !this.isAuthenticated;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogin.next(false);
    console.log('logout');
  }

  async getUserName() {
    let userName = '';
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      userName = userClaims.name || '';
    }
    
    return userName;
  }
}
