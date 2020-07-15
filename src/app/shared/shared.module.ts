import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AreaCardComponent } from './components/area-card/area-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { ActivatePositionComponent } from './components/activate-position/activate-position.component';
import { BigIconBtnComponent } from './big-icon-btn/big-icon-btn.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [AuthButtonComponent, AreaCardComponent, NavbarComponent, ActivatePositionComponent, BigIconBtnComponent],
  exports: [
    AuthButtonComponent,
    AreaCardComponent,
    NavbarComponent,
    ActivatePositionComponent,
    BigIconBtnComponent,


    NgbModule,
    NgbCollapseModule,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbCollapseModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
