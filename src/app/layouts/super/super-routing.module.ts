import { AddPsychologistComponent } from './pages/psychologists/add-psychologist/add-psychologist.component';
import { AddCentreComponent } from './pages/centres/add-centre/add-centre.component';
import { AddUserRoleComponent } from './pages/roles/add-user-role/add-user-role.component';
import { ListPsychologistsComponent } from './pages/psychologists/list-psychologists/list-psychologists.component';
import { ListUserRolesComponent } from './pages/roles/list-user-roles/list-user-roles.component';
import { SuperDashboardComponent } from './pages/super-dashboard/super-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperComponent } from './super.component';
import { ListCentresComponent } from './pages/centres/list-centres/list-centres.component';

const routes: Routes = [
  {
    path: '',
    component: SuperComponent,
    children: [
      { path: 'dashboard', component: SuperDashboardComponent },
      { path: 'roles/new', component: AddUserRoleComponent },
      { path: 'roles', component: ListUserRolesComponent },
      { path: 'roles', component: ListUserRolesComponent },
      { path: 'psychologists/new', component: AddPsychologistComponent },
      { path: 'psychologists', component: ListPsychologistsComponent },
      { path: 'centres/new', component: AddCentreComponent },
      { path: 'centres', component: ListCentresComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperRoutingModule { }
