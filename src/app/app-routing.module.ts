import { ForgotPasswordConfirmComponent } from './pages/authentication/forgot-password-confirm/forgot-password-confirm.component';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { HomeComponent } from './landing-page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordErrorComponent } from './pages/authentication/reset-password-error/reset-password-error.component';
import { AccountConfirmationErrorComponent } from './pages/authentication/account-confirmation-error/account-confirmation-error.component';
import { AccountConfirmedComponent } from './pages/authentication/account-confirmed/account-confirmed.component';

const routes: Routes = [
  { path: 'confirmation-error', component: AccountConfirmationErrorComponent },
  { path: 'forgot-password-confirm', component: ForgotPasswordConfirmComponent },
  { path: 'confirmed', component: AccountConfirmedComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password-error', component: ResetPasswordErrorComponent },
  { path: 'reset-password-confirm', component: ResetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'patient', loadChildren: () => import('./layouts/patient/patient.module').then(m => m.PatientModule) },
  { path: 'control', loadChildren: () => import('./layouts/control/control.module').then(m => m.ControlModule) },
  { path: 'admin', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) },
  { path: 'doctor', loadChildren: () => import('./layouts/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'super', loadChildren: () => import('./layouts/super/super.module').then(m => m.SuperModule) },
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
