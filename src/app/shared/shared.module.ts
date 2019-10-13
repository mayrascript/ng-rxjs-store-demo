import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule,
  MatSidenavModule, MatSlideToggleModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

const sharedModules = [
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatCardModule
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
