import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ]
})
export class OrgMaterialModule {
}
