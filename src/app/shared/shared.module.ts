import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

const sharedModules = [
  MatToolbarModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule
];


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    HeaderComponent,
    ...sharedModules
  ]
})
export class SharedModule { }
