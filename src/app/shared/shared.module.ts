import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AreaCardComponent } from './components/area-card/area-card.component';



@NgModule({
  declarations: [AuthButtonComponent, AreaCardComponent],
  exports: [
    AuthButtonComponent,
    AreaCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
