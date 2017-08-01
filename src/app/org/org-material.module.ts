import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdInputModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule
  ]
})
export class OrgMaterialModule {
}
