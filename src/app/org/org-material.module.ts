import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule,
  MdCardModule, MdDialogModule,
  MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule, MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdProgressBarModule,
    MdToolbarModule
],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdProgressBarModule,
    MdToolbarModule

  ]
})
export class OrgMaterialModule {
}
