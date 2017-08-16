import {NgModule} from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule,
  MdDialogModule, MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule, MdToolbarModule, MdMenuModule
} from '@angular/material';

const materialModules = [
  MdAutocompleteModule, MdButtonModule, MdCardModule,
  MdDialogModule, MdInputModule, MdProgressBarModule,
  MdSelectModule, MdTabsModule, MdToolbarModule, MdMenuModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule {
}
