import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
    // data: {preload: true}
  },
/*  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule',
    data: {preload: true}
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
