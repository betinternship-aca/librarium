import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule,
  MdCardModule, MdDialogModule,
  MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule, MdToolbarModule
} from '@angular/material';
const materialModules = [MdCardModule,
  MdButtonModule,
  MdTabsModule,
  MdInputModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdSelectModule,
  MdProgressBarModule,
  MdToolbarModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class OrgMaterialModule {
}
