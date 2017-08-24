import {NgModule} from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule,
  MdCardModule, MdDialogModule,
  MdInputModule, MdMenuModule, MdPaginatorModule, MdProgressBarModule,
  MdSelectModule, MdTableModule, MdTabsModule, MdToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';

const materialModules = [
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdSelectModule,
  MdProgressBarModule,
  MdTabsModule,
  MdTableModule,
  MdToolbarModule,
  CdkTableModule,
  MdMenuModule,
  MdPaginatorModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class OrgMaterialModule {
}
