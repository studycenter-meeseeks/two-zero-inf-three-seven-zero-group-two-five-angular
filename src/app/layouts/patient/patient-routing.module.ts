import { PatientAccountSetupComponent } from './pages/patient-account-setup/patient-account-setup.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './patient.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent, children: [
      { path: 'dashboard', component: PatientDashboardComponent },
      { path: 'account/setup', component: PatientAccountSetupComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
