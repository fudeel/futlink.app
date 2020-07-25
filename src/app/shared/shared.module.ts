import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthButtonComponent} from './components/auth-button/auth-button.component';
import {AreaCardComponent} from './components/area-card/area-card.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ActivatePositionComponent} from './components/activate-position/activate-position.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
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
import {BigIconBtnComponent} from "./components/big-icon-btn/big-icon-btn.component";
import {LoadingOverlayComponent} from "./components/loading-overlay/loading-overlay.component";
import {SidenavListComponent} from "./components/sidenav-list/sidenav-list.component";
import {ImageComponent} from "./components/image/image.component";
import {AreaCardBtnComponent} from './components/area-card/area-card-btn/area-card-btn.component';
import {AgmCoreModule} from "@agm/core";
import {MarkerPopupComponent} from './components/marker-popup/marker-popup.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [AuthButtonComponent,
    AreaCardComponent,
    NavbarComponent,
    ActivatePositionComponent,
    BigIconBtnComponent,
    LoadingOverlayComponent,
    SidenavListComponent,
    ImageComponent,
    AreaCardBtnComponent,
    MarkerPopupComponent,
  ],
  exports: [
    AuthButtonComponent,
    AgmCoreModule,
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
    MatDialogModule,


    NgbModule,
    NgbCollapseModule,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5T3d95i0ypvMNAMLa2gJG-rS5jAsIrkY'
    }),
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
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class SharedModule { }
