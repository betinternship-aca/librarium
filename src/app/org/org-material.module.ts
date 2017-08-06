import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';


@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSelectModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdInputModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSelectModule
  ]
})
export class OrgMaterialModule {
}
