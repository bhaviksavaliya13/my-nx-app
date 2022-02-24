import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName: string = '';
  public password: string = '';;
  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: string = '';;
  loginModel: any;
  userNameRequiredError: string = '';;
  passwordRequiredError: string = '';;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get controls() {
    return this.loginForm.controls;
  }

  isValid() {
    this.userNameRequiredError = '';
    this.passwordRequiredError = '';

    if (!this.controls.userName.value) {
      this.userNameRequiredError = 'userNameRequiredError';
    }
    if (!this.controls.password.value) {
      this.passwordRequiredError = 'passwordRequiredError';
    }

    return !(this.userNameRequiredError || this.passwordRequiredError);
  }

  login() {
    // stop here if form is invalid
    if (this.isValid()) {
      this.submitted = true;
      this.loading = true;
      // this.loginModel.userName = this.controls.userName.value;
      // this.loginModel.password = this.controls.password.value;
      this.router.navigate(['dashboard']);
    }
  }
}
