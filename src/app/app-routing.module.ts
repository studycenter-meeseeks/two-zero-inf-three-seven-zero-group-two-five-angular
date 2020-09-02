import { HomeComponent } from './landing-page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'patient', loadChildren: () => import('./layouts/patient/patient.module').then(m => m.PatientModule) },
  { path: 'control', loadChildren: () => import('./layouts/control/control.module').then(m => m.ControlModule) },
  { path: 'admin', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) },
  { path: 'doctor', loadChildren: () => import('./layouts/doctor/doctor.module').then(m => m.DoctorModule) },
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
