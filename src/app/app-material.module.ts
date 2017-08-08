import {NgModule} from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule,
  MdDialogModule, MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule, MdToolbarModule
} from '@angular/material';

const materialModules = [
  MdAutocompleteModule, MdButtonModule, MdCardModule,
  MdDialogModule, MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule, MdToolbarModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule {
}
