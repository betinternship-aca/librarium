import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {AppCommonMaterialModule} from './app-common-material.module';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonMaterialModule
  ],
  declarations: [ConfirmDialogComponent, LoginDialogComponent],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppCommonModule { }
