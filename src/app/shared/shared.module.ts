import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AreaCardComponent } from './components/area-card/area-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { ActivatePositionComponent } from './components/activate-position/activate-position.component';



@NgModule({
  declarations: [AuthButtonComponent, AreaCardComponent, NavbarComponent, ActivatePositionComponent],
  exports: [
    AuthButtonComponent,
    AreaCardComponent,
    NavbarComponent,
    ActivatePositionComponent,


    NgbModule,
    NgbCollapseModule,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbCollapseModule,
    RouterModule,
  ]
})
export class SharedModule { }
