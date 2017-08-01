import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdDialogModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule
  ]
})
export class OrgMaterialModule {
}
