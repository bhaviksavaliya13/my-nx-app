import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AuthService } from '../core/authentication/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isAuthenticated!: boolean;
  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, private authService: AuthService) {}

  async ngOnInit() {
    await this.authService.checkLogin();
  }
}
