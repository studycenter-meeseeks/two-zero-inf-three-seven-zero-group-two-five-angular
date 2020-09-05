import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperRoutingModule } from './super-routing.module';
import { SuperComponent } from './super.component';


@NgModule({
  declarations: [SuperComponent],
  imports: [
    CommonModule,
    SuperRoutingModule
  ]
})
export class SuperModule { }
