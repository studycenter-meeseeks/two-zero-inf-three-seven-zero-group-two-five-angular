import { MaterialModule } from './../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperRoutingModule } from './super-routing.module';
import { SuperComponent } from './super.component';
import { SuperDashboardComponent } from './pages/super-dashboard/super-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUserRolesComponent } from './pages/roles/list-user-roles/list-user-roles.component';
import { ListPsychologistsComponent } from './pages/psychologists/list-psychologists/list-psychologists.component';
import { ListCentresComponent } from './pages/centres/list-centres/list-centres.component';

@NgModule({
  declarations: [
    SuperComponent,
    SuperDashboardComponent,
    ListUserRolesComponent,
    ListPsychologistsComponent,
    ListCentresComponent],
  imports: [
    CommonModule,
    SuperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class SuperModule { }
