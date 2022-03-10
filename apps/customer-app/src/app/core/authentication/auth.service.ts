import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { ToastrService } from 'ngx-toastr';
import { appRoutingURL } from '../../shared/configs/app-routing-url.config';
import { LoaderService } from '../../shared/services/loader/loader.service';

@Injectable()
export class AuthService {
  isAuthenticated!: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private toastr: ToastrService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
  ) {}

  async checkLogin() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (!this.isAuthenticated) {
      this.router.navigate([
        appRoutingURL.LOGIN_PAGE,
      ]);
    }
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  async login(userModel: any) {
    await this.oktaAuth.signInWithRedirect();
    // if (userModel.userName && userModel.password) {
    //   localStorage.setItem('token', '1234');
    //   localStorage.setItem('isLogin', 'true');
    //   localStorage.setItem('userid', '1234');
    //   localStorage.setItem('userName', 'bhavik');
    //   localStorage.setItem('name', this.getFullName('bhavik', 's', 's'));
    //   this.router.navigate([
    //     appRoutingURL.DASHBOARD_PAGE,
    //   ]);
    //   this.loaderService.hide();
      // this.http
      //   .post<ApiOutput<any>>(appSetting.API_ENDPOINT.LOGIN, body)
      //   .subscribe(
      //     (result) => {
      //       if (result && result.data && result.data.isLogin) {
      //         localStorage.setItem('token', result.data.token);
      //         localStorage.setItem(
      //           'isLogin',
      //           result.data.isLogin ? 'true' : 'false'
      //         );
      //         localStorage.setItem('userid', result.data.id);
      //         localStorage.setItem('userName', result.data.userName);
      //         localStorage.setItem(
      //           'name',
      //           this.getFullName(
      //             result.data.firstName,
      //             result.data.lastName,
      //             result.data.userName
      //           )
      //         );
      //         this.router.navigate([
      //           appRoutingURL.PORTAL_PAGE,
      //           appRoutingURL.DASHBOARD_PAGE,
      //         ]);
      //         this.loaderService.hide();
      //       } else {
      //         this.loaderService.hide();
      //         this.toastr.error(result.data.error.message);
      //       }
      //     },
      //     (error) => {
      //       this.loaderService.hide();
      //       console.log(error);
      //       let errorMessage = error.error.message
      //         ? error.error.message
      //         : error.message;
      //       this.toastr.error(errorMessage);
      //     }
      //   );
    // } else {
    //   this.toastr.warning('Please enter username and password');
    // }
  }

  getFullName(firstName: string, lastName: string, userName: string) {
    if (firstName || lastName) {
      const fullname = firstName + ' ' + lastName;
      return fullname.trim();
    } else {
      return userName;
    }
  }

  public SignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userid');
    localStorage.removeItem('userName');
    localStorage.removeItem('name');
    this.router.navigate([appRoutingURL.LOGIN_PAGE]);
  }

  getUserName() {
    const userName = sessionStorage.getItem('name');
    return userName;
  }
}
