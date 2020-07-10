import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';



@NgModule({
  declarations: [AuthButtonComponent],
  exports: [
    AuthButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
