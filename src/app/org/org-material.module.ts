import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule
  ]
})
export class OrgMaterialModule {
}
