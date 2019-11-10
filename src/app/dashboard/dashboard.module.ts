import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { MenuComponent } from 'src/app/dashboard/components/menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
