import { ListUserRolesComponent } from './pages/roles/list-user-roles/list-user-roles.component';
import { SuperDashboardComponent } from './pages/super-dashboard/super-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperComponent } from './super.component';

const routes: Routes = [
  {
    path: '',
    component: SuperComponent,
    children: [
      { path: 'dashboard', component: SuperDashboardComponent },
      { path: 'roles', component: ListUserRolesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperRoutingModule { }
