import { AccountService } from './../../../services/account/account.service';
import { LoginComponent } from './../login/login.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/services/validators/authentication.validator';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  userForm: FormGroup;

  errorMessage = "";
  showLoadingEndicator = false;
  constructor(
    private _matDialog: MatDialog,
    private _dialogRef: MatDialogRef<CreateAccountComponent>,
    private _router: Router,
    private _accountService: AccountService,
    private _route: ActivatedRoute,
    private _formBuiler: FormBuilder
  ) {

    this.buildRegistrationForm();
  }

  ngOnInit(): void {
  }

  get Name() {
    return this.userForm.get('Name');
  }
  get Surname() {
    return this.userForm.get('Surname');
  }
  get Email() {
    return this.userForm.get('Email');
  }
  get ContactNumber() {
    return this.userForm.get('ContactNumber');
  }
  get Password() {
    return this.userForm.get('Password');
  }
  get ConfirmPassword() {
    return this.userForm.get('ConfirmPassword');
  }

  onSignUp() {
    console.log(this.userForm.value);
    this.errorMessage = "";
    if (this.userForm.valid) {
      this._accountService.registerPatient(this.userForm.value)
        .subscribe(event => {
          if (event.type === HttpEventType.Sent) {
            this.showLoadingEndicator = true;
          }
          if (event.type === HttpEventType.Response) {
            this.showLoadingEndicator = false;
            localStorage.setItem('token', event.body['token']);
            let returnUrl = this._route
              .snapshot
              .queryParamMap.get('returnUrl');
            this.closeCurrentDialog();
            this._router.navigate([returnUrl || './patient/account/setup']);
          }
        },
          error => {
            this.showLoadingEndicator = false;
            this.errorMessage = error.error.message;
          })
    }
  }


  logIn() {
    this.closeCurrentDialog();
    this._matDialog.open(LoginComponent);
  }

  private closeCurrentDialog() {
    this._dialogRef.close({ event: 'cancel' });
  }

  private buildRegistrationForm() {
    this.userForm = this._formBuiler.group({
      Name: ['', [Validators.required]],
      Surname: ['', [Validators.required]],
      ContactNumber: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
    }, { validator: ConfirmPasswordValidator.MatchPassword });
  }
}


