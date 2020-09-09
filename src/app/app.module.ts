import { MaterialModule } from './layouts/shared/modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './landing-page/home/home.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { CreateAccountComponent } from './pages/authentication/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationErrorComponent } from './pages/authentication/confirmation-error/confirmation-error.component';
import { ForgotPasswordConfirmComponent } from './pages/authentication/forgot-password-confirm/forgot-password-confirm.component';
import { ConfirmedComponent } from './pages/authentication/confirmed/confirmed.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password.component';
import { ResetPasswordErrorComponent } from './pages/authentication/reset-password-error/reset-password-error.component';
import { ResetPasswordConfirmComponent } from './pages/authentication/reset-password-confirm/reset-password-confirm.component';
import { PageNotFoundErrorComponent } from './pages/error-handling/page-not-found-error/page-not-found-error.component';
import { AccountConfirmationErrorComponent } from './pages/authentication/account-confirmation-error/account-confirmation-error.component';
import { AccountConfirmedComponent } from './pages/authentication/account-confirmed/account-confirmed.component';
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    ConfirmationErrorComponent,
    ForgotPasswordConfirmComponent,
    ConfirmedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ResetPasswordErrorComponent,
    ResetPasswordConfirmComponent,
    PageNotFoundErrorComponent,
    AccountConfirmationErrorComponent,
    AccountConfirmedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:44335"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
