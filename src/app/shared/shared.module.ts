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
import {LoadingOverlayComponent} from "./loading-overlay/loading-overlay.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatTreeModule} from "@angular/material/tree";
import {MatExpansionModule} from "@angular/material/expansion";
import {SidenavListComponent} from "./sidenav-list/sidenav-list.component";
import {ImageComponent} from "./image/image.component";



@NgModule({
  declarations: [AuthButtonComponent,
    AreaCardComponent,
    NavbarComponent,
    ActivatePositionComponent,
    BigIconBtnComponent,
    LoadingOverlayComponent,
    SidenavListComponent,
    ImageComponent,
  ],
  exports: [
    AuthButtonComponent,
    AreaCardComponent,
    NavbarComponent,
    ActivatePositionComponent,
    BigIconBtnComponent,
    LoadingOverlayComponent,
    SidenavListComponent,
    ImageComponent,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    LoadingOverlayComponent,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTreeModule,
    MatExpansionModule,




    NgbModule,
    NgbCollapseModule,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbCollapseModule,
    RouterModule,
    FontAwesomeModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    RouterModule,
    MatTreeModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
