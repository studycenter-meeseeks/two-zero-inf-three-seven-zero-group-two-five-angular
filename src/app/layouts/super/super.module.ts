import { MaterialModule } from './../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperRoutingModule } from './super-routing.module';
import { SuperComponent } from './super.component';
import { SuperDashboardComponent } from './pages/super-dashboard/super-dashboard.component';
import { ListUserRolesComponent } from './pages/list-user-roles/list-user-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SuperComponent, SuperDashboardComponent, ListUserRolesComponent],
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
