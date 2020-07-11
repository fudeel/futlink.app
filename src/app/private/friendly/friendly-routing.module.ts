import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {FriendlyComponent} from './friendly.component';
import {StepOneComponent} from './step-one/step-one.component';



const friendlyRoutes: Routes = [
  {
    path: '',
    component: FriendlyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(friendlyRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class FriendlyRoutingModule { }
