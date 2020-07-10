import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivateComponent} from './private.component';
import {RouterModule, Routes} from '@angular/router';



const privateRoutes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
