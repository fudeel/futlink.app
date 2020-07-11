import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FriendlyComponent} from './friendly.component';
import { StepOneComponent } from './step-one/step-one.component';
import {RouterModule} from '@angular/router';
import {FriendlyRoutingModule} from './friendly-routing.module';



@NgModule({
  declarations: [FriendlyComponent, StepOneComponent],
  imports: [
    CommonModule,
    RouterModule,
    FriendlyRoutingModule
  ]
})
export class FriendlyModule { }
