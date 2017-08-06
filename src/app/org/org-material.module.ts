import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule,
  MdCardModule, MdDialogModule,
  MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule
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
    MdProgressBarModule
],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdProgressBarModule

  ]
})
export class OrgMaterialModule {
}
