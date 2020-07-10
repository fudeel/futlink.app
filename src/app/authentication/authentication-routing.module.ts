import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';



const authenticationRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AuthenticationRoutingModule { }
