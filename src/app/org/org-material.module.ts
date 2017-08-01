import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule
  ]
})
export class OrgMaterialModule {
}
