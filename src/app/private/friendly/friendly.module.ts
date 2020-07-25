import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FriendlyComponent} from './friendly.component';
import {StepOneComponent} from './step-one/step-one.component';
import {RouterModule} from '@angular/router';
import {FriendlyRoutingModule} from './friendly-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MarkerPopupComponent} from "../../shared/components/marker-popup/marker-popup.component";


@NgModule({
  declarations: [FriendlyComponent, StepOneComponent],
  entryComponents: [MarkerPopupComponent],
  imports: [
    CommonModule,
    RouterModule,
    FriendlyRoutingModule,
    SharedModule
  ]
})
export class FriendlyModule { }
