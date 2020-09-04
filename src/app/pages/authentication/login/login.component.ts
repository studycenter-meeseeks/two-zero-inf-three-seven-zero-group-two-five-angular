import { ConfirmPasswordValidator } from './../../../services/validators/authentication.validator';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitButtonText = "Log In";
  submitButtonDiabled = false;

  errorMessage = "";
  showLoadingEndicator = false;

  constructor(
    private _router:Router,
    loginFb: FormBuilder
  ) { 
    this.loginForm = loginFb.group({
      UserName: ['', [Validators.required,Validators.email]],
      Password: ['', Validators.required]
    })
  }

  get UserName() {
    return this.loginForm.get('UserName');
  }
  get Password() {
    return this.loginForm.get('Password');
  }

  ngOnInit(): void {
  }

  signIn() {
    this.errorMessage = "";
    if (this.loginForm.valid) {
      // this._authService.signIn(this.loginForm.value)
      //   .subscribe(event => {
      //     if (event.type === HttpEventType.Sent) {
      //       this.showLoadingEndicator = true;
      //     }
      //     if (event.type === HttpEventType.Response) {
      //       this.showLoadingEndicator = false;
      //       this.submitButtonText= "Please wait";
      //       this.submitButtonDiabled = true;
      //       localStorage.setItem('token', event.body['token']);
      //       let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
      //       this._router.navigate([returnUrl || '/browse/all']);
      //     }
      //   },
      //     error => {
      //       this.showLoadingEndicator = false;
      //       this.errorMessage = error.error.message;
      //     })
    }

  }

  createAccount() {
    // this._router.navigate(['/create-account']);
  }

  forgotPassword() {
    // this._router.navigate(['/forgot-password']);
  }
}
