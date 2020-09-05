import { MaterialModule } from './../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperRoutingModule } from './super-routing.module';
import { SuperComponent } from './super.component';
import { SuperDashboardComponent } from './pages/super-dashboard/super-dashboard.component';


@NgModule({
  declarations: [SuperComponent, SuperDashboardComponent],
  imports: [
    CommonModule,
    SuperRoutingModule,
    MaterialModule
  ]
})
export class SuperModule { }
