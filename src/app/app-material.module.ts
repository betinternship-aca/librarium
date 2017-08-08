import {NgModule} from '@angular/core';
import {
  MdAutocompleteModule,
  MdButtonModule, MdCardModule, MdInputModule, MdSelectModule,
  MdTabsModule
} from '@angular/material';
const materialModules = [MdCardModule,
  MdButtonModule,
  MdTabsModule,
  MdInputModule,
  MdAutocompleteModule,
  MdSelectModule
  ];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class AppMaterialModule {
}
