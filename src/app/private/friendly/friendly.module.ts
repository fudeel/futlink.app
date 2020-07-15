import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FriendlyComponent} from './friendly.component';
import { StepOneComponent } from './step-one/step-one.component';
import {RouterModule} from '@angular/router';
import {FriendlyRoutingModule} from './friendly-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [FriendlyComponent, StepOneComponent],
  imports: [
    CommonModule,
    RouterModule,
    FriendlyRoutingModule,
    SharedModule
  ]
})
export class FriendlyModule { }
