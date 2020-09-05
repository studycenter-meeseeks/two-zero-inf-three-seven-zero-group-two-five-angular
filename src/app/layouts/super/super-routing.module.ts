import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperComponent } from './super.component';

const routes: Routes = [{ path: '', component: SuperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperRoutingModule { }
